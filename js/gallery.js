var imgArray = ["outdoor.jpg", "golf.jpg", "lifestyle.jpeg", "landscapes.jpg", "clubhouse.jpg", "wellness.jpg"];
var path = "../images/gallery/";
var tagArray = ["Outdoor Pursuits","Golf","Lifestyle", "Landscapes","Clubhouse","Wellness"];
var arrayOfATags = [];
for (var i = 0;i<imgArray.length;i++){
    var obj = {
        tag : tagArray[i],
        imagePath : path + imgArray[i]
    }
    arrayOfATags.push(obj);
}

function settingInnerHtml(item) {
    var string  = '<a class="box" href="#"><div><img class="image" src=" ' + item.imagePath + '"></div><p> ' + item.tag + '</p></a>';
    return string;
}

document.getElementById("gallery-images").innerHTML = arrayOfATags.map(settingInnerHtml).join("");


