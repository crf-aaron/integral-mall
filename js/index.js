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

})