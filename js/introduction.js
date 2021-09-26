$(function() {

    //搜索框模块
    $(".search input").focus(function() {
        // console.log($(this).val());
        if ($(this).val() === "输入关键词") {
            $(this).val("");
        }
        $(this).css("color", "#333");
    })
    $(".search input").focusout(function() {
        if ($(this).val() === "") {
            $(this).val("输入关键词");
        }
        $(this).css("color", "#bfbfbf");
    });

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

    // 读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("username");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    };
    //渲染加载数据
    function load() {
        data = getDate();
        // console.log(data);
        $.each(data, function(i, n) {
            $(".user").html('<a href="set.html"><img src="images/t01b1ad8b63b90a5581.png">' + n.title + '</a>').show().siblings(".login").hide();
        });
    };
    load();
})