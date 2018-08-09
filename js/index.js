/**
 * Created by CRF on 2018/7/19.
 */
$(function () {
    /*编辑收货地址*/
    $('.address').on('click',function () {
        window.location.href = './address.html';
    });
    $('#cancel').on('click',function () {
        window.history.go(-1);
    });
    $('#save').submit(function () {
        window.history.go(-1);
    });
    /*签到*/
    $('#signIn').on("click",function () {
        $('#signInSuccess').toggle();
        setTimeout(function () {
            $('#signInSuccess').toggle();
            window.location.href = './signIn.html';
        },2000)
    });
    /*注册手机号*/
    /*$('#phone').on('click',function () {
        $('.phone-popup').toggle();
    });*/
    $('#close').on('click',function () {
        $('.phone-popup').toggle();
    });

    /*订单详情*/
    $('.btn-order-detail').on('click',function () {
        window.location.href = './order-detail.html';
    });
    /*积分规则*/
    $('.btn-rule').on('click',function () {
        window.location.href = './rule.html';
    });
});
/*获取用户资料*/
var gather = (function(){
    return {
        getGatherInfo: function(){
            $.ajax({
                url : "/user/get?t="+new Date().getTime(),
                type : 'GET',
                contentType : 'application/json',
                success : function(data) {
                    console.log(data)
                    if(data.status == true){
                        var obj = data.object;
                        var rank = parseInt(obj.rank);
                        var sex = parseInt(obj.sex);

                        //用户昵称
                        $("#nickname").html(obj.nickname);
                        //用户级别
                        switch (rank) {
                            case 1:// 香飘飘会员
                                $("#rankImg").attr('src','../images/mine/crown.png')
                                break;
                            default:// 未注册用户
                                $("#rankImg").remove()
                                break;
                        };
                        //头像
                        $("#headImg").attr("src",obj.headimg)
                        //总积分
                        $("#allintegral").html(obj.allintegral);
                        //现有积分
                        $("#integral").html(obj.integral);
                        //消耗积分
                        $("#costIntegral").html(obj.costIntegral);
                        //注册时间
                        $("#createTime").html(gather.formatDateTime(obj.createTime));
                        //电话号码
                        if(!obj.phone){
                            $("#phone").html("注册手机号");
                        }else{
                            $("#phone").html(obj.phone);
                            //					$("#phoneImg").remove()
                            //					$("#register").unbind();
                        }
                        //性别
                        switch (sex) {
                            case 1:// 性别男
                                $("#sex").html("男")
                                break;
                            case 2:// 性别女
                                $("#sex").html("女")
                                break;
                            default:// 未知性别用户
                                $("#sex").html("")
                        };
                        //地址
                        if(!obj.province && !obj.city){
                            $("#address").html("-");
                        }else{
                            $("#address").html(obj.province + obj.city);
                        }
                        //生日
                        if(!obj.birthday){
                            $("#birthday").html("请选择生日");
                        }else{
                            $("#birthday").html(obj.birthday);
                            $("#birthday-select").html(obj.birthday);
                            //					$("#birthdayImg").remove()
                            //					$("#birthdayRegister").unbind();
                        }
                    }else{
                        if(data.message == "101"){
                            alert("身份过期，请重新授权登录商城");
                        }else{
                            alert(data.message);
                        }
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {

                }
            });
        },
        formatDateTime: function (inputTime) {
            var date = new Date(inputTime);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '年' + m + '月' + d+ '日';
        },
        formatDateTime2: function (inputTime) {
            var date = new Date(inputTime);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
        }
    };
})()



