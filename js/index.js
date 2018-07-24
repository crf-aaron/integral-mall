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
    });
    $('.btn-cancel').on('click',function () {
        $('#whetherExchange').toggle();
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

})