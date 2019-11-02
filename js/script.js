function isIE(t) {
    var e = document.createElement("b");
    return e.innerHTML = "\x3c!--[if IE " + t + "]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
}

function fixedBackToTopPos() {
    var t = $(window).scrollTop(), e = $(".footer").offset().top, a = e - t - windowHeight;
    if (t > 400) {
        if ($(".back_to_top").fadeIn(), a < 0) {
            var o = t + windowHeight - e + 110;
            $(".back_to_top").css("bottom", o)
        } else $(".back_to_top").css("bottom", "110px");
        if (ie6) {
            var n = t + 400;
            $(".back_to_top").css("top", n)
        }
    } else $(".back_to_top").fadeOut()
}

function bindLangEventsOld() {
    var t, e, a, o = [{name: "简体中文", path: "/zh-cn/", path_tail: /\/zh-cn.*/}, {
        name: "繁體中文",
        path: "/zh-hk/",
        path_tail: /\/zh-hk.*/
    }, {name: "English", path: "/en-us/", path_tail: /\/en-us.*/}], n = location.href;
    /zh-cn/.test(n) ? (t = o[0], e = o[1], a = o[2]) : /zh-hk/.test(n) ? (t = o[1], e = o[0], a = o[2]) : (t = o[2], e = o[0], a = o[1]);
    var i = {current: t, choice_a: e, choice_b: a}, s = template("lang_template", i), r = $(".language");
    r.html(s), $(".language_choice").on("click", function () {
        var e = $(this).attr("change_lang");
        if ("/en-us/" == e && /articles/.test(n)) {
            var a = $("#article_zh_only").val();
            location.href = "1" == a ? n.replace(t.path_tail, e + "index.html") : n.replace(t.path, e)
        } else location.href = n.replace(t.path, e)
    }), r.mouseenter(function () {
        $(".lang-list").show()
    }), r.mouseleave(function () {
        $(".lang-list").hide()
    })
}

function bindLangEvents() {
    var t, e = [{path: "/zh-cn/", path_tail: /\/zh-cn.*/}, {path: "/zh-hk/", path_tail: /\/zh-hk.*/}, {
        path: "/en-us/",
        path_tail: /\/en-us.*/
    }], a = location.href;
    /zh-cn/.test(a) ? (t = e[0], $(".language_1 a").eq(0).addClass("current")) : /zh-hk/.test(a) ? (t = e[1], $(".language_1 a").eq(1).addClass("current"), $("#info_holdings").attr("src", "//gu.qq.com/vendorts/stock.html?lang=hk"), $(".banner_wrap .text").removeClass("text1 text2")) : (t = e[2], $(".language_1 a").eq(2).addClass("current")), $(".language_1").find("a").on("click", function () {
        var e = $(this).attr("change_lang");
        if (e == t.path) return !1;
        if ("/en-us/" == e && /articles/.test(a)) {
            var o = $("#article_zh_only").val();
            location.href = "1" == o ? a.replace(t.path_tail, e + "index.html") : a.replace(t.path, e)
        } else location.href = a.replace(t.path, e)
    })
}

function autoScaleNav() {
    var t, e = $(".head_wrap"), a = 0, o = ($(".main").not(".main_index"), $(".sub_sidebar")), n = function () {
        e.removeClass("head_wrap_shrink").addClass("head_wrap_expand"), o.removeClass("head_change"), e.unbind()
    }, i = function () {
        e.addClass("head_wrap_shrink"), o.hasClass("head_change") || o.addClass("head_change"), e.hover(function () {
            $(this).removeClass("head_wrap_shrink").addClass("blue")
        }, function () {
            $(this).addClass("head_wrap_shrink").removeClass("blue")
        })
    }, s = 0;
    $(window).scroll(function (e) {
        var o = $(this).scrollTop();
        t && clearTimeout(t), t = setTimeout(function () {
            o > 0 ? 1 != a && (a = 1, i()) : -1 != a && (a = -1, n()), s = o
        }, 50)
    })
}

function weixinLayerEvents() {
    var t = $(".footer_wx_layer");
    $(".tencent_wx").on("click", function (e) {
        t.fadeIn(300), e.stopPropagation()
    }), $(document).on("click", function (t) {
        $(".footer_wx_layer").fadeOut(300)
    }), $(".footer_wx_layer").on("click", function (t) {
        t.stopPropagation()
    }), $(".account_close").on("click", function () {
        t.stop().fadeOut(300)
    })
}

function vistaLayerEvents() {
    var t = $(".footer_vista_layer"), e = $(".footer_wx_layer");
    t.hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover").fadeOut(300)
    }), e.hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover").fadeOut(300)
    }), $(".tencent_vista").on("mouseover", function () {
        return t.stop().fadeIn(300), !1
    }).on("mouseout", function () {
        setTimeout(function () {
            t.hasClass("hover") || t.stop().fadeOut(300)
        }, 300)
    }), $(".tencent_wx").on("mouseover", function () {
        return e.stop().fadeIn(300), !1
    }).on("mouseout", function () {
        setTimeout(function () {
            e.hasClass("hover") || e.stop().fadeOut(300)
        }, 300)
    }), $(".vista_close").on("click", function () {
        t.stop().fadeOut()
    })
}

function fixedFooterTop() {
    var t = $(window), e = $(".main"), a = $(".footer");
    $newsWrap = $(".news-wrap");
    var o = t.height(), n = a.height(), i = a.offset().top, s = i - e.height();
    i + n < o && (e.css("min-height", o - n - s + "px"), $newsWrap.css("min-height", o - n - 416 + "px"))
}

function addFooterIconHover() {
    var t, e = $(".footer_con_wrap"), a = e.find("a");
    a.on("mouseover", function () {
        var e = $(this), a = e.find("i");
        a && (t = a.attr("class") + "_on", a.addClass(t))
    }).on("mouseout", function () {
        var e = $(this), a = e.find("i");
        a && a.removeClass(t)
    })
}

function backToTop() {
    $(".back_to_top a").on("click", function () {
        $("body,html").animate({scrollTop: 0}, 500)
    })
}

function fixMac2x() {
    var t = navigator.platform, e = 0 == t.indexOf("Mac"), a = bowser.tablet;
    $(document).ready(function () {
        (e || a) && $(".wrap").addClass("wrap_mac")
    })
}

function locationNav() {
    var t = "", e = $(document).height() - $(window).height(), a = $(".sub_sidebar_list"), o = [];
    $(".sub_sidebar_list a").each(function () {
        o.push($(this).attr("href"))
    }), $(window).scroll(function () {
        for (var n = $(document).scrollTop(), i = 0; i < o.length; i++) {
            var s = o[i];
            n > $(s).offset().top - 300 && (t = s), $(window).scrollTop() == e && (t = o[o.length - 1])
        }
        var r = a.find(".current");
        t && r.find("a").attr("href") != t && (r.removeClass("current"), a.find("[href=" + t + "]").parent().addClass("current"));
        var c = a.find("[href=" + t + "]").parent().position().top - 1;
        $(".cover_layer").stop().animate({top: c}, 200), leftnavfix()
    }), $(".sub_sidebar_list a").on("click", function () {
        event && event.preventDefault ? event.preventDefault() : window.event.returnValue = !1;
        var t = $(this).attr("href"), e = $(t).offset().top - 60;
        $("html, body").stop().animate({scrollTop: e}, 400)
    })
}

function yearNow() {
    var t = (new Date).getFullYear();
    $(".footyear").html(t)
}

function leftnavfix() {
    $(".footer")[0].getBoundingClientRect().top - 66 < $(".sub_sidebar").height() ? $(".sub_sidebar").addClass("foot_change") : $(".sub_sidebar").removeClass("foot_change")
}

var fixedPosTop = 105, mainMarginBottom = 70, anchorOffset = 80, windowHeight = $(window).height(), arr = [],
    ie6 = !!window.ActiveXObject && !window.XMLHttpRequest, lastScrollTop = $(window).scrollTop();
$(function () {
    var t = isIE(5) || isIE(6) || isIE(7);
    bindLangEvents(), t ? ($(".head_wrap").css("position", "relative"), $(".main").css("margin-top", "15px")) : autoScaleNav(), fixedBackToTopPos(), weixinLayerEvents(), vistaLayerEvents(), addFooterIconHover(), backToTop(), fixedFooterTop(), $(window).resize(function () {
        windowHeight = $(window).height(), fixedFooterTop(), leftnavfix()
    }), $(window).scroll(function () {
        fixedBackToTopPos(), $(".sub_sidebar").length && isIE(7) && ($(window).scrollTop() > 85 ? $(".sub_sidebar").stop().animate({top: "30px"}, 200) : $(".sub_sidebar").stop().animate({top: "105px"}, 200))
    }), $(".sub_sidebar").length && (leftnavfix(), locationNav()), yearNow(), $(".news-txt").dotdotdot({wrap: "letter"}), $(".news-tit").dotdotdot({wrap: "letter"}), $(".news-item").length <= 6 && $(".news-more").hide(), $(".news-item").eq(5).nextAll().hide(), $(".news-more").on("click", function () {
        $(".news-item").show(), $(this).hide()
    })
});
