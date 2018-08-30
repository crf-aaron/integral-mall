/**
 * Created by CRF on 2018/8/7.
 */
//积分兑换弹框提示
function exchangeTip(data,integralNum) {
    popup('确定花费'+integralNum+'积分兑换？');
    $('.btn-cancel').on('click',function () {
        $('.popup').remove();
    });
    $('.btn-sure').on('click',function () {
        $('.popup').remove();
        if(data.phonenumber == '') {//未注册手机号
            popup1('','请先完成手机号注册','./personal-data.html');
        } else if(integralNum < data.integralTotal) {//兑换成功
            popup1('../images/mall/success@2x.png','恭喜您，兑换成功',data.href);
        } else {//积分不足
            popup1('../images/mall/error@2x.png','积分不足','./rule.html');
        }
    });
}
//积分秒杀、积分拼团弹框提示
function tip(data,integralNum,txt1,txt2,txt3,href1,href2) {
    popup(txt1);
    $('.btn-cancel').on('click',function () {
        $('.popup').remove();
    });
    $('.btn-sure').on('click',function () {
        //发送ajax
        data.miaosha = 'success';//状态：秒杀成功
        // data.miaosha = 'error';//状态：秒杀失败

        $('.popup').remove();
        if(data.phonenumber == '') {//未注册手机号
            popup1('','请先完成手机号注册','./personal-data.html');
        } else if(integralNum < data.integralTotal) {//积分足够
            if(data.miaosha == 'error') {//秒杀失败
                popup2('../images/mall/error@2x.png','很遗憾',txt2,href1);
            } else {//秒杀成功
                popup1('../images/mall/success@2x.png',txt3,href2);
            }
        } else {//积分不足
            popup1('../images/mall/error@2x.png','积分不足','./rule.html');
        }
    });
}
//确认提示
function popup(txt) {
    var html = '<div class="popup confirm-popup"> ' +
        '<div class="pop-body clearfix"> ' +
        '<p>'+txt+'</p> ' +
        '<button class="btn-cancel">取消</button> ' +
        '<button class="btn-sure">确定</button> ' +
        '</div> ' +
        '</div>';
    $('body').append(html);
}
//单行提示
function popup1(src,txt,href) {
    var html = '';
    if(src == '') {
        html = '<div class="popup"> ' +
            '<div class="pop-body"> ' +
            '<p>'+txt+'</p> ' +
            '<button id="know">知道了</button> ' +
            '</div> ' +
            '</div>';
    } else {
        html = '<div class="popup"> ' +
            '<div class="pop-body"> ' +
            '<p><img src='+src+' alt="">'+txt+'</p> ' +
            '<button id="know">知道了</button> ' +
            '</div> ' +
            '</div>';
    }
    $('body').append(html);
    $('#know').on('click',function () {
        window.location.href = href;
    });
}
//双行提示
function popup2(src,txt1,txt2,href) {
    var html = '<div class="popup popup-error2" id="collageFailure"> ' +
        '<div class="pop-body"> ' +
        '<p><img src='+src+' alt="">'+txt1+'</p> ' +
        '<p>'+txt2+'</p> ' +
        '<button id="know">知道了</button> ' +
        '</div> ' +
        '</div>';
    $('body').append(html);
    $('#know').on('click',function () {
        window.location.href = href;
    });
}

/*定时器*/
function downTime(time,selector) {
    // var time = 2 * 24 * 60 * 60;//天、时、分、秒
    var i = document.querySelectorAll(selector);
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

/*拼团进度*/
function progressVal(selectorVal,num) {
    var selector = $(selectorVal);
    selector.text(num);
    var width = selector.parent().siblings().parent().width();
    var proWidth = num/100 * width;
    selector.parent().siblings().width(proWidth);
}

/*loading*/
function loadingShow() {
    var html = '<div class="loading" id="loading"> ' +
        '<div class="loading-body"> ' +
        '<img src="../images/loading.gif" alt=""/> ' +
        '</div> ' +
        '</div>';
    $('body').append(html);
}
function loadingHide() {
    $('#loading').remove();
}
