
var images = ["image-3.jpg","image-6.jpg","image-21.jpg","image-20.jpg","image-13.jpeg","image-25.jpg","image-17.jpg","image-7.jpg","image-10.jpg","image-14.jpg","image-4.jpg","image-16.jpg","image-18.jpg","image-8.jpg","image-24.jpg","image-12.jpg","image-5.jpg","image-23.jpg","image-9.jpg","image-22.jpg","image-15.jpeg","image-27.jpg","image-26.jpg","image-11.jpg","image-19.jpg"];

function scrollingFunc(item){
  var string =  '<img class="scroller-img" src="../images/home/'+ item + '" alt="">';
  return string;
}

document.getElementById("scroller-content").innerHTML = images.map(scrollingFunc);