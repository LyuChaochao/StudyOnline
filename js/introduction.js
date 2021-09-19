$(function() {

    // 给马上学习模块的字体添加鼠标经过换颜色
    $('.studynow ul li').hover(function() {
        $(this).find('h6').css('color', '#fff');
        $(this).find('p').css('color', '#fff')
    }, function() {
        $(this).find('h6').css('color', '#DADADA');
        $(this).find('p').css('color', '#DADADA')
    })

    // 给主体内容的标题添加点击事件，让隐藏的列表显示出来
    $('#mainCon>li').on('click', 'h4', function() {
        $(this).parent().next().stop().slideToggle();
        $(this).find('em').stop().toggleClass('emrotate');
    })

    // 给主体内容的标题添加鼠标经过变成小手
    $('#mainCon>li').on('mouseover', 'h4', function() {
        $(this).css('cursor', 'pointer')
    })

    // 点击主体头部的导航添加切换主体内容的事件
    $('#headCon').on('click', 'a', function() {
        $(this).addClass('current').parent().siblings().children().removeClass('current');
        var index = $(this).parent().index();
        $('main ul').eq(index).show().siblings().hide();
    })
})