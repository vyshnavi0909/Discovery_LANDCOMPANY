function myFunction() {
    var drpdwn = document.getElementById("menu");
    if (drpdwn.style.display === "block") {
        drpdwn.style.display = "none";
    } else {
        drpdwn.style.display = "block";
    }
    // document.getElementById("menu").classList.toggle("show");
}

function scrollingFunc() {
    var elmt = document.getElementById("s3-images");
    var leftScroll = elmt.scrollLeft;
}
