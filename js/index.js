$(function() {
    // $(".search input").onfocus(function() {
    //         console.log('得到焦点');
    //     })
    // banner部分左侧导航
    $(".subnav li").mouseenter(function() {
        var index = $(this).index();
        // console.log(index);
        $(".subnav-r>ul>li").eq(index).show();
    });
    $(".subnav li").mouseleave(function() {
        var index = $(this).index();
        $(".subnav-r>ul>li").eq(index).hide();
    });

})