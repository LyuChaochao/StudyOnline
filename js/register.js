$(function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    var regmsg = /^\d{6}$/;
    var reguser = /^[a-zA-Z0-9_-]{4,16}$/
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var flagUser = false;
    var flagAllow = false;
    regexp($("#tel"), regtel);
    regexp($("#msg"), regmsg);
    regexp($("#pwd"), regpwd);
    regexp($("#user"), reguser);
    //正则表达式判断用户输入，封装函数
    function regexp(ele, reg) {
        ele.focus(function() {
            // console.log($(this).val());
            if ($(this).val() === this.defaultValue) {
                $(this).val("");
            }
            $(this).css("color", "#333");
        });
        ele.focusout(function() {
            if ($(this).val() === "") {
                $(this).val(this.defaultValue);
                $(this).siblings("span").css("display", "none");
            } else if (reg.test(this.value)) {
                // console.log('正确的');
                $(this).siblings("span").addClass("success").css("display", "block").html("<i class='success_icon'></i> 输入正确").removeClass("error");
                return true;
            } else {
                // console.log('不正确的');
                $(this).siblings("span").addClass("error").css("display", "block").html("<i class='error_icon'></i> 信息输入有误，请按提示输入内容").removeClass("success");
                return false;
            }
            $(this).css("color", "#bfbfbf");
        });
    }
    //正则表达式判断用户输入密码是否一致
    $("#surepwd").focus(function() {
        // console.log($(this).val());
        if ($(this).val() === this.defaultValue) {
            $(this).val("");
        }
        $(this).css("color", "#333");
    });
    $("#surepwd").focusout(function() {
        if ($(this).val() === "") {
            $(this).val(this.defaultValue);
            $(this).siblings("span").css("display", "none");
        } else if (($(this).val() == $("#pwd").val())) {
            // console.log('正确的');
            $(this).siblings("span").addClass("success").css("display", "block").html("<i class='success_icon'></i> 输入正确").removeClass("error");
            flagUser = true;
            return
        } else {
            // console.log('不正确的');
            $(this).siblings("span").addClass("error").css("display", "block").html("<i class='error_icon'></i> 信息输入有误，请按提示输入内容").removeClass("success");
            flagUser = false;
            return
        }
        $(this).css("color", "#bfbfbf");
    });
    //点击注册按钮判断是否成功注册
    $(".pull").click(function() {
        if (flagUser == true && flagAllow == true) {
            alert('注册成功');
            var local = getDate();
            var pwd = getPwd();
            console.log(local);
            local.push({ title: $("#user").val() });
            pwd.push({ pwd: $("#pwd").val() });
            console.log(local);
            saveDate(local);
            savePwd(pwd);
        } else if (flagAllow == false && flagUser == true) {
            alert('请勾选同意协议');
            $(".ch_box").siblings("i").css("color", "red").html("请勾选同意协议");
            return false
        } else {
            alert('信息填写有误');
            return false
        }
    });
    $(".ch_box").click(function() {
        // console.log($(".ch_box").prop("checked"));
        if ($(".ch_box").prop("checked")) {
            $(".ch_box").siblings("i").css("color", "").html("同意协议并注册");
            flagAllow = true;
        } else {
            $(".ch_box").siblings("i").css("color", "red").html("请勾选同意协议");
            flagAllow = false;
        }
        return
    });
    // 读取本地存储用户数据
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
    //保存本地存储用户数据
    function saveDate(data) {
        localStorage.setItem("username", JSON.stringify(data));
    };
    //保存本地存储密码数据
    function savePwd(pwd) {
        localStorage.setItem("pwd", JSON.stringify(pwd));
    };

})