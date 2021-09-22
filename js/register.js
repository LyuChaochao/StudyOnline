$(function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var tel = document.querySelector('#tel');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel); // 手机号码
    regexp(msg, regmsg); // 短信验证
    regexp(pwd, regpwd); // 密码框
    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                console.log('正确的');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
                this.nextElementSibling.style.display = 'block';
            } else {
                console.log('不正确');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
                this.nextElementSibling.style.display = 'block';
            }
        }
    };

    surepwd.onblur = function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';

        }
    }

    // $("#tel").focusout(function() {
    //     if ($(this).val() === "") {
    //         $(this).val("请输入11位手机号码");
    //     }
    //     $(this).css("color", "#bfbfbf");
    // });
    // $("#msg").focus(function() {
    //     // console.log($(this).val());
    //     if ($(this).val() === "请输入6位短信验证码") {
    //         $(this).val("");
    //     }
    //     $(this).css("color", "#333");
    // });
    // $("#msg").focusout(function() {
    //     if ($(this).val() === "") {
    //         $(this).val("请输入6位短信验证码");
    //     }
    //     $(this).css("color", "#bfbfbf");
    // });
    // $("#pwd").focus(function() {
    //     // console.log($(this).val());
    //     if ($(this).val() === "请输入6-16位字符") {
    //         $(this).val("");
    //     }
    //     $(this).css("color", "#333");
    // });
    // $("#pwd").focusout(function() {
    //     if ($(this).val() === "") {
    //         $(this).val("请输入6-16位字符");
    //     }
    //     $(this).css("color", "#bfbfbf");
    // });
    // $("#surepwd").focus(function() {
    //     // console.log($(this).val());
    //     if ($(this).val() === "再次请输入6-16位字符") {
    //         $(this).val("");
    //     }
    //     $(this).css("color", "#333");
    // });
    // $("#surepwd").focusout(function() {
    //     if ($(this).val() === "") {
    //         $(this).val("再次请输入6-16位字符");
    //     }
    //     $(this).css("color", "#bfbfbf");
    // });


})