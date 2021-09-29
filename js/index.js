$(function() {

    //轮播图
    var plotWidth = $(".focus").width();
    var num = 0;
    var circle = 0;
    var plot = document.querySelector('.plot');
    var arrow_r = document.querySelector('.arrow-r');
    $(".banner").mouseenter(function() {
        $(".arrow-l,.arrow-r").css("display", "block");
        clearInterval(timer);
        timer = null;
    });
    $(".banner").mouseleave(function() {
        $(".arrow-l,.arrow-r").css("display", "none");
        timer = setInterval(function() {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    });
    $(".plot li").each(function(index) {
        // console.log(index);
        var li = $("<li></li>");
        $(".circle").prepend(li);
        $(".circle li").click(function() {
            $(this).addClass("white").siblings().removeClass("white");
            var index = $(this).index();
            num = circle = index;
            // console.log(index);
            // console.log(plotWidth);
            $(".plot").animate({
                left: -index * plotWidth
            });
        });

    });
    $(".circle li").eq(0).addClass("white");
    var first = plot.children[0].cloneNode(true);
    plot.appendChild(first);
    var flag = true;
    $(".arrow-r").click(function() {
        if (flag) {
            flag = false;
            // console.log(11);
            num++;
            if (num == $(".plot li").length - 1) {
                $(".plot").css("left", 0)
                num = 0;
            };
            // console.log(num);
            $(".plot").stop().animate({
                left: -num * plotWidth
            }, function() {
                flag = true;
            });
            circle++;
            if (circle == $(".circle li").length) {
                circle = 0;
            };
            circlechange();
        }
    });
    $(".arrow-l").click(function() {
        if (flag) {
            flag = false;
            // console.log(11);
            if (num == 0) {
                num = $(".plot li").length - 1;
                $(".plot").css("left", -num * plotWidth + 'px');
            };
            num--;
            // console.log($(".plot li").length);
            // console.log(num);
            $(".plot").stop().animate({
                left: -num * plotWidth
            }, function() {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = $(".circle li").length - 1;
            };
            // console.log(circle);
            circlechange();
        }
    });
    var timer = setInterval(function() {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);

    function circlechange() {
        $(".circle li").eq(circle).addClass("white").siblings().removeClass("white");
    };
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
    // banner部分左侧导航
    $(".subnav>ul>li").mouseenter(function() {
        var index = $(this).index();
        // console.log(index);
        $(".subnav-r>ul>li").eq(index).show();
    });
    $(".subnav>ul>li").mouseleave(function() {
        var index = $(this).index();
        $(".subnav-r>ul>li").eq(index).hide();
    });
    //左侧导航栏
    var flag = true;
    var toolTop = $(".box").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }
    $(window).scroll(function() {
        toggleTool();
        //页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
        if (flag) {
            $(".courses .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            })
        }
    });
    $(".fixedtool li").click(function() {
        flag = false;
        // console.log($(this).index());
        var current = $(".courses .w").eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass("current");
    });
    //右侧返回顶部按钮
    goback();
    var boxTop = $(".box").offset().top;
    $(window).scroll(function() {
        // console.log(11);
        // console.log($(document).scrollTop());
        goback();
    });

    function goback() {
        if ($(document).scrollTop() >= boxTop) {
            $(".back").fadeIn();
        } else {
            $(".back").fadeOut();
        }
    }
    // 返回顶部
    $(".back").click(function() {

            $("body, html").stop().animate({
                scrollTop: 0
            });
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
        //个人中心跳转
        if (data == '') {
            $(".personal").html('<a href="login.html">个人中心</a>')
        }
        // console.log(data);
        $.each(data, function(i, n) {
            $(".user").html('<a href="set.html"><img src="images/t01b1ad8b63b90a5581.png">' + n.title + '</a>').show().siblings(".login").hide();
        });
    };
    load();
})