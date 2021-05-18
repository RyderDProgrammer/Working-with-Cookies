window.onload = function()
{
    let readCookie = document.getElementById("readCookie");
    let deleteCookie = document.getElementById("deleteCookie");
    let createCookie = document.getElementById("createCookie");

    readCookie.onclick = readCookieData;
    deleteCookie.onclick = deleteCookieData;
    createCookie.onclick = createCookieData;
}

let cookieKey = "TestCookie";

function readCookieData()
{
    let data = Cookies.get(cookieKey);
    alert(data);
}

function deleteCookieData()
{
    Cookies.remove(cookieKey);
    //Showing off that it no longer exist
    alert(Cookies.get(cookieKey));
}

function createCookieData()
{
    Cookies.set(cookieKey, "This is a test", {expires:1});
    alert("Cookie was created");
}