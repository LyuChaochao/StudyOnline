$(function() {
    $(".pull").click(function() {
        if (flagUser == true && flagpwd == true) {
            return true
        } else if (flagUser == false) {
            alert('请输入账户名');
            return false
        } else {
            $("#pwd").siblings("span").addClass("error").css("display", "block").html("<i class='error_icon'></i> 密码输入有误，请重新输入").removeClass("success");
            alert('密码错误，请重新输入密码');
            return false
        }
    });
    // 没有数据也要运行
    $("#user").focusout(function() {
        var local = getDate();
        // console.log(local);
        if ($("#user").val() == local) {
            $("#user").siblings("span").addClass("error").css("display", "block").html("<i class='error_icon'></i> 账户名不存在，请重新输入").removeClass("success");
            return
        }
    });
    //密码框隐藏与显示
    var flag = 0;
    $("#eye").click(function() {
        if (flag == 0) {
            $("#pwd").prop("type", "text");
            $("#eye").prop("src", "images/open.png")
            flag = 1; // 赋值操作
        } else {
            $("#pwd").prop("type", "password");
            $("#eye").prop("src", "images/close.png")
            flag = 0;
        }
    });
    // 读取本地存储的用户数据
    function getDate() {
        var data = localStorage.getItem("username");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    };
    // 读取本地存储密码数据
    function getPwd() {
        var pwd = localStorage.getItem("pwd");
        if (pwd !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(pwd);
        } else {
            return [];
        }
    };
    //渲染加载用户数据
    var flagUser = false;

    function load() {
        data = getDate();
        // console.log(data);
        $.each(data, function(i, n) {
            var user = n.title;
            $("#user").focusout(function() {
                if ($("#user").val() == user) {
                    // console.log('正确的');
                    $("#user").siblings("span").addClass("success").css("display", "block").html("<i class='success_icon'></i> 输入正确").removeClass("error");
                    flagUser = true;
                    // return
                } else {
                    // console.log('不正确的');
                    $("#user").siblings("span").addClass("error").css("display", "block").html("<i class='error_icon'></i> 账户名不存在，请重新输入").removeClass("success");
                    flagUser = false;
                    return
                }
            });
        });
    };
    load();
    var flagpwd = false;
    //渲染加载密码数据
    function pwd() {
        usepwd = getPwd();
        // console.log(usepwd);
        $.each(usepwd, function(i, n) {
            var pwd = n.pwd;
            $("#pwd").focusout(function() {
                if ($("#pwd").val() == pwd) {
                    flagpwd = true;
                    // return
                } else {
                    flagpwd = false;
                    return
                }
            });
        });
    };
    pwd();
});