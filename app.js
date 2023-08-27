var buynow = document.getElementById("buy-now")

var text = document.getElementById("thanks-text")

buynow.onclick=(evt)=> {
    text.style.display="inherit";
    buynow.style.display="none";
}