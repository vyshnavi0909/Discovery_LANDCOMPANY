var imgArray = ["northShore.jpg", "jamesIsland.jpg", "costaterra.jpg", "barbudaOcean.jpg", "driftwood.jpg", "Troubadour.jpg", "playaGrande.jpg", "chilenoBay.jpg", "Summit.jpg", "dunedeck.jpg", "siloRidge.jpg", "makenaAndy.jpg", "yellowstone.jpg", "gozzerRanch.jpg", "elDorado.jpg", "madison.jpg", "bakersBay.jpg", "hideaway.jpg", "mountaintop.jpg", "mirabel.jpeg", "kukio.jpg", "vaquero.jpg", "ironhouse.jpg", "cordevalle.jpg", "estancia.jpg"];
var path = "../images/ourWorlds/";
var headingArray = ["North Shore Preserve","James Island","Costeterra","Barbuda Ocean Club","Driftwood","Troubadour","Playa Grande","Chileno Bay","The Summit","Dune Deck","Silo Ridge","Makena","Yellowstone Club","Gozzer Ranch","El Dorado","Madison","Baker's Bay","Hideaway","Mountaintop","Mirabel","Kuki'o","Vaquero","Iron Horse","Cordevalle","Estancia"];
var tagArray = ["Kaua'i, Hawaii","Southern Gulf Islands, British Columbia, Canada","Comporta, Portugal", "Barbuda, West Indies","Austin, Texas","Nashville, Tennessee","Rio San Juan, Dominican Republic","Cabo San Lucas, Mexico","Las Vegas, Nevada","Westhampton Beach, NY","Amenia, NY","Maui, Hawaii","Big Sky, Montana","Coeur d'Alene, Idaho","Los Cabos, Mexico","La Quinta, California","Great Guana Cay, Bahamas","La Quinta, California","Cashiers, North Carolina","Scottsdale, Arizona","Kohala, Hawaii","Westlake, Texas","Whitefish, Montana","Silicon Valley, California","Scottsdale, Arizona"];
var arrayOfATags = [];
for (var i = 0;i<imgArray.length;i++){
    var obj = {
        heading : headingArray[i],
        tag : tagArray[i],
        imagePath : path + imgArray[i]
    }
    arrayOfATags.push(obj);
}

function settingInnerHtml(item) {
    var string  = '<a class="col-lg-3 col-md-4 col-sm-6 box" href="#"><div><img id="img-sec" class="image" src="' + item.imagePath + '" alt=""></div><h1>' + item.heading +'</h1><p> ' + item.tag + '</p></a>';
    return string
}


document.getElementById("ourWorld-images").innerHTML = arrayOfATags.map(settingInnerHtml).join("");