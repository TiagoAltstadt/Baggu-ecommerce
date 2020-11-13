
//----Menu----
function sidebar_open() {
    document.getElementById("mySidebar").style.left = "0vw";
}

function sidebar_close() {
    document.getElementById("mySidebar").style.left = "-50vw";
}

//----User PopUp----
function profile() {
    if (document.getElementById("profile").style.right == "0vw") {
        document.getElementById("profile").style.right = "-45vw";
    } else {
        document.getElementById("profile").style.right = "0vw";
    }
}

function welcome() {
    if (locals.loggeduser){
        document.onload('welcome').style.top = "45vw";
    }
}
