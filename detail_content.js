const { window, document } = require("./sign_node.js");
function _f1(e, t) {
    if ("string" != typeof t)
        return;
    var o, n = e + "=", r = t.split(/[;&]/);
    for (var e = 0; e < r.length; e++) {
        for (o = r[e]; " " === o.charAt(0);)
            o = o.substring(1, o.length);
        if (0 === o.indexOf(n))
            return o.substring(n.length, o.length)
    }
    return ""
}
function _f2(e) {
    return _f1(e, document.cookie)
}
function _f3(e, t, o) {
    try {
        // o && (window.sessionStorage && window.sessionStorage.setItem(e, t),
        //     window.localStorage && window.localStorage.setItem(e, t));
        var n = 31536e6;
        document.cookie = e + "=; expires=Mon, 20 Sep 1970 00:00:00 UTC; path=/;",
            document.cookie = e + "=" + t + "; expires=" + new Date((new Date).getTime() + n).toGMTString() + "; path=/;"
    } catch (e) { }
}
window.byted_acrawler.init({
    aid: 99999999,
    dfp: !0
});

function getAsSignature(__ac_nonce) {
    // var __ac_nonce = _f2("__ac_nonce");
    __ac_signature = window.byted_acrawler.sign("", __ac_nonce);
    _f3("__ac_signature", __ac_signature);
    _f3("__ac_referer", document.referrer || "__ac_blank", !0);
    return document.cookie;
}
// sessionStorage.setItem("__ac_ns", performance.timing.navigationStart)
// console.log(document.cookie);
// console.log("__ac_nonce", __ac_nonce);