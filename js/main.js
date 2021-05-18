window.onload = function () {
    var readCookie = document.getElementById("readCookie");
    var deleteCookie = document.getElementById("deleteCookie");
    var createCookie = document.getElementById("createCookie");
    readCookie.onclick = readCookieData;
    deleteCookie.onclick = deleteCookieData;
    createCookie.onclick = createCookieData;
};
var cookieKey = "TestCookie";
function readCookieData() {
    var data = Cookies.get(cookieKey);
    alert(data);
}
function deleteCookieData() {
    Cookies.remove(cookieKey);
    alert(Cookies.get(cookieKey));
}
function createCookieData() {
    Cookies.set(cookieKey, "This is a test", { expires: 1 });
    alert("Cookie was created");
}
