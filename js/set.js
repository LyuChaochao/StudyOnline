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
    //点击小li添加current类
    var tap_list = document.querySelector('.box');
    var lis = tap_list.querySelectorAll('li');
    var times = document.querySelectorAll('.tap_con');
    //for循环点击事件
    for (var i = 0; i < lis.length; i++) {
        //给小li设置索引号
        lis[i].setAttribute('index', i);
        lis[i].onclick = function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'current';
            //显示内容模块
            var index = this.getAttribute('index');
            for (var i = 0; i < times.length; i++) {
                times[i].style.display = 'none';
            }
            times[index].style.display = 'block';
        }
    }
    //删除点击事件
    $(".delete").click(function() {
        $(this).parents(".course").remove();
    });
    // 现实修改昵称页
    $(".head-portrait").click(function() {
        $(this).parents(".account-settings").hide();
        $(".modify-the-picture").show();
    });
    // 修改头像页
    $(".uname").click(function() {
        $(this).parents(".account-settings").hide();
        $(".modify-the-nickname").show();
    });
    // 修改昵称
    load();
    $("#nc").on("click", function() {
        if ($("#new").val() === "") {
            alert('请输入新的用户名');
        } else if ($("#ewm").val() == $(".check-code span").text()) {
            var local = getDate();
            // console.log(local);
            local.push({ title: $("#new").val() });
            saveDate(local);
            // console.log(local);
            load();
        } else {
            alert('验证码输入有误');
        }
    });
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
    //保存本地存储数据
    function saveDate(data) {
        localStorage.setItem("username", JSON.stringify(data));
    };
    //渲染加载数据
    function load() {
        data = getDate();
        console.log(data);
        $.each(data, function(i, n) {
            $(".user").html('<img src="./images/t01b1ad8b63b90a5581.png" alt="">' + n.title + '');
            $(".personal span").html(n.title);
            $(".nickname span").html(n.title);
        });
    };
    //点击退出返回首页并且清空本地存储
    $(".out").click(function() {
        localStorage.clear();
    });
})