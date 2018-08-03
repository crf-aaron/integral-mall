/**
 * Created by CRF on 2018/7/19.
 */
$(function () {
    /*积分兑换 弹窗*/
    $('.btn-exchange').on('click',function () {
        $('#whetherExchange').toggle();
    });
    $('.btn-sure').on('click',function () {
        $('#whetherExchange').toggle();
        $('#whetherCancelOrder').toggle();
    });
    $('.btn-cancel').on('click',function () {
        $('#whetherExchange').toggle();
        $('#whetherCancelOrder').toggle();
    });
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
    /*拼团进度*/
    function progressVal(selector,num) {
        $(selector).text(num);
        var width = $('.progress-right').width();
        var proWidth = num/100 * width;
        $('.progress-value').width(proWidth);
    }
    progressVal('.pro-val',20);

    /*签到*/
    $('#signIn').on("click",function () {
        $('#signInSuccess').toggle();
        setTimeout(function () {
            $('#signInSuccess').toggle();
            window.location.href = './signIn.html';
        },2000)
    });
    /*注册手机号*/
    $('#phone').on('click',function () {
        $('.phone-popup').toggle();
    });
    $('#close').on('click',function () {
        $('.phone-popup').toggle();
    });
    /*兑换记录*/
    $('#record li').on('click', function () {
        var index = $(this).index();
        $(this).siblings('li').removeClass('record-active');
        $(this).addClass('record-active');
        if(index == 1) {
            $('.record-list').css('display','none');
            $('.record-noReceive').css('display','block');
        } else if(index == 2) {
            $('.record-list').css('display','none');
            $('.record-complete').css('display','block');
        } else if(index == 3) {
            $('.record-list').css('display','none');
            $('.record-cancel').css('display','block');
        } else {
            $('.record-list').css('display','none');
            $('.record-all').css('display','block');
        }
    });
    /*取消订单*/
    $('.btn-cancel-order').on('click',function () {
        $('.confirm-popup').toggle();
    });
    /*订单详情*/
    $('.btn-order-detail').on('click',function () {
        window.location.href = './order-detail.html';
    });
    /*积分规则*/
    $('.btn-rule').on('click',function () {
        window.location.href = './rule.html';
    });
    /*我要拼团*/
    $('.btn-collage').on('click',function () {
        window.location.href = './collage-members.html';
    });
    /*定时器*/
    // downTime();
});
/*定时器*/
function downTime() {
    var time = 2 * 60;//天、时、分、秒
    var i = document.querySelectorAll(".down-time i");
    var timer = setInterval(function () {
        time--;
        if (time < 0) {
            clearInterval(timer);
            return;
        }
        var d = Math.floor(time / (24 * 3600));
        var h = Math.floor(time % (24 * 3600) / 3600);
        var m = Math.floor(time % (24 * 3600) % 3600 / 60);
        var s = time % 60;
        //天
        i[0].innerHTML = Math.floor(d / 10);
        i[1].innerHTML = d % 10;
        //时
        i[2].innerHTML = Math.floor(h / 10);
        i[3].innerHTML = h % 10;
        //分
        i[4].innerHTML = Math.floor(m / 10);
        i[5].innerHTML = m % 10;
        //秒
        i[6].innerHTML = Math.floor(s / 10);
        i[7].innerHTML = s % 10;

    }, 1000)
}
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



