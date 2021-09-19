$(function() {

    // 职业导航栏切换效果
    $('.plan_tabList ul li').on('click', function() {
        $(this).addClass('current').siblings().removeClass('current');
        var index = $(this).index();
        // console.log(index);
        $('.plan_tabCon .tabItem').eq(index).show().siblings().hide();
    })

    // 职业师课程滑块的效果
    // 给圆点添加鼠标按下时，获取元素位置的事件
    $('.scrolldot').on('mousedown', function(e) {
        // console.log(e.pageX);

        // 鼠标按下时，圆点到文档左侧的距离
        var ox = $(this).offset().left;
        // 鼠标按下时，鼠标距离圆点左侧的距离
        var x = e.pageX - ox;
        // console.log(x);

        // 鼠标按下时进度条距离文档左边的距离
        var leftx = $('.scrollleft').offset().left;

        // 鼠标点击圆点拖动时，禁止文档内容被选中
        $(document)[0].addEventListener('selectstart', function(e) {
            e.preventDefault();
        })

        // 给圆点添加移动事件
        $(document).mousemove(function(e) {
            // 鼠标按下并且移动时，圆点到文档左侧的最新距离
            var newx = e.pageX - x;

            // 获取进度条距离文档左侧的距离
            var barx = $('.scrollbar').offset().left;

            // 判断圆点距离,如果少于或者大于进度条长度则使其不动
            if (newx < barx) {
                // console.log(11);
                return newx = barx;
            } else if (newx > barx + 485) {
                return newx = barx + 485;
            }

            // 给圆点设置移动后的距离
            $('.scrolldot').offset({
                left: newx
            })

            // 设置已走的进度条的长度
            var xxx = newx - leftx + 2;
            $('.scrollleft').width(xxx)

            // 设置进度条走多少距离,则上边内容走多少距离
            $('.scrollUl').css('left', -xxx);
        })

        // 鼠标弹起后解绑鼠标移动事件
        $(document).mouseup(function() {
            $(document).off('mousemove');
        })

    })

})