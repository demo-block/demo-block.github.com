//自适应移动端比例
$(function () {


    // function rem(size){
    //     var clientW=document.documentElement.clientWidth;
    //     var bili=clientW/size;
    //     var fontSize=bili*100;
    //     document.getElementsByTagName("html")[0].style.fontSize=fontSize+"px"
    // }
    // rem(750);

    function goPAGE() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location.href = "./index_mobile.html";
        }
        else {
            window.location.href = "./index.html";
        }
    }
    // goPAGE();

    $(".sub_sidebar_list li").click(function () {
        $(".sub_sidebar_list li").removeClass('current')
        $(this).addClass('current')
    })

})