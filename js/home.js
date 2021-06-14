
function myFunction() {
    var drpdwn = document.getElementById("menu");
    if(drpdwn.style.display === "block") {
        drpdwn.style.display = "none";
    }else {
        drpdwn.style.display = "block";
    }
    // document.getElementById("menu").classList.toggle("show");
}

function scrollingFunc() {
    var elmt = document.getElementById("s3-images");
    var leftScroll = elmt.scrollLeft;
}

// function scrollLeft() {
//     var elmt = document.getElementById("s3-images");
//     var left = elmt.scrollLeft;
// }

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.drpdwn-btn')) {
//         var dropdowns = document.getElementsByClassName("menu-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }