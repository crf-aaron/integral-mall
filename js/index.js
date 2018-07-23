/**
 * Created by CRF on 2018/7/19.
 */
$(function () {
    /*banner*/
    var swiper1 = new Swiper('.swiper1', {
        autoplay: 3000,//可选选项，自动滑动
        loop: true,
        autoplayDisableOnInteraction: false,//滑动以后是否禁止autoplay
        // 分页器
        pagination: '.swiper-pagination',
    });
    /*news轮播*/
    var swiper2 = new Swiper('.swiper2', {
        direction: 'vertical',
        autoplay: 3000,//可选选项，自动滑动
        loop: true,
        autoplayDisableOnInteraction: false
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