document.getElementById("sub_menus_user_login").onclick = function () {login_panel()};
function login_panel() {
    var login_p = document.getElementById("login_panel_");
    if (login_p.style.visibility === "hidden") {
        login_p.style.zIndex = "1";
        login_p.style.transition = "0.2s";
        login_p.style.visibility = "visible";
        login_p.style.opacity = "100%";
        document.getElementById("header").style.filter = "blur(10px)";
        document.getElementById("corpo-content").style.filter = "blur(10px)";
        document.getElementById("rodape").style.filter = "blur(10px)";
    } else {
        login_p.style.transition = "0.2s";
        login_p.style.visibility = "hidden";
        login_p.style.opacity = "0%";
        document.getElementById("header").style.filter = "blur(0px)";
        document.getElementById("corpo-content").style.filter = "blur(0px)";
        document.getElementById("rodape").style.filter = "blur(0px)";

    }
}

document.getElementById("fechar_login").onclick = function () {close_login_panel()};
function close_login_panel() {
    var login_p = document.getElementById("login_panel_");
    if (login_p.style.visibility === "visible") {
        login_p.style.transition = "0.2s";
        login_p.style.visibility = "hidden";
        login_p.style.opacity = "0%";
        document.getElementById("header").style.filter = "blur(0px)";
        document.getElementById("corpo-content").style.filter = "blur(0px)";
        document.getElementById("rodape").style.filter = "blur(0px)";
    }
}