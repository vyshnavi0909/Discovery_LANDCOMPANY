$(document).ready(function () {
  $(".drpdwn-btn").click(function () {
    $("#menu").slideToggle();
  });

});

var arrOfNorthAmerica = [{
    weather: "63",
    wind: "1.99",
    compass: "315",
    tag: "Southern Gulf Islands, British Columbia, Canada",
    title: "James Island",
    location: "48.602830922°N / -123.342998628°W",
    imagePath: "james.jpg"
  },

  {
    weather: "86",
    wind: "20.33",
    compass: "82",
    tag: "Barbuda, West Indies",
    title: "Barbuda Ocean Club",
    location: "17.549884°N / -61.765587°W",
    imagePath: "Barbuda.jpg"
  },
  {
    weather: "81",
    wind: "4.00",
    compass: "161",
    tag: "Austin, Texas",
    title: "Driftwood",
    location: "30.139339°N / -98.022342°W",
    imagePath: "driftwood.jpg"
  },
  {
    weather: "81",
    wind: "12.91",
    compass: "237",
    tag: "Nashville, Tennessee",
    title: "Troubadour",
    location: "35.828904°N / -86.679158°W",
    imagePath: "Troubadour.jpg"
  },
  {
    weather: "83",
    wind: "15.03",
    compass: "249",
    tag: "Rio San Juan, Dominican Republic",
    title: "Playa Grande",
    location: "19.3830°N / 70.0407°W",
    imagePath: "Playa.jpg"
  },
  {
    weather: "79",
    wind: "6.06",
    compass: "290",
    tag: "Cabo San Lucas, Mexico",
    title: "Chileno Bay",
    location: "22.954708°N / -109.816218°W",
    imagePath: "Chileno.jpg"
  },
  {
    weather: "88",
    wind: "5.68",
    compass: "199",
    tag: "Las Vegas, Nevada",
    title: "The Summit",
    location: "36.1094°N / 115.3287°W",
    imagePath: "Summit.jpg"
  },
  {
    weather: "71",
    wind: "8.01",
    compass: "330",
    tag: "Westhampton Beach, NY",
    title: "Dune Deck",
    location: "40.8093799°N / -72.6458277°W",
    imagePath: "Dune.jpg"
  },
  {
    weather: "81",
    wind: "10.27",
    compass: "183",
    tag: "Amenia, NY",
    title: "Silo Ridge",
    location: "41.834259°N / -73.571259°W",
    imagePath: "Silo.jpg"
  },
  {
    weather: "73",
    wind: "14.41",
    compass: "81",
    tag: "Big Sky, Montana",
    title: "Yellowstone Club",
    location: "45.2660°N / 111.2531°W",
    imagePath: "Yellowstone.jpg"
  },
  {
    weather: "65",
    wind: "2.84",
    compass: "70",
    tag: "Coeur d'Alene, Idaho",
    title: "Gozzer Ranch",
    location: "47.617997°N / -116.766169°W",
    imagePath: "Gozzer.jpg"
  },
  {
    weather: "80",
    wind: "15.50",
    compass: "147",
    tag: "Los Cabos, Mexico",
    title: "El Dorado",
    location: "40.8093799°N / -72.6458277°W",
    imagePath: "ElDorado.jpg"
  },
  {
    weather: "93",
    wind: "1.52",
    compass: "102",
    tag: "La Quinta, California",
    title: "Madison",
    location: "33.660962°N / -116.244456°W",
    imagePath: "Madison.jpg"
  },
  {
    weather: "81",
    wind: "11.61",
    compass: "169",
    tag: "Great Guana Cay, Bahamas",
    title: "Baker's Bay",
    location: "26.686966°N / -77.146015°W",
    imagePath: "Baker.jpg"
  },
  {
    weather: "90",
    wind: "9.22",
    compass: "180",
    tag: "La Quinta, California",
    title: "Hideaway",
    location: "33.667059°N / -116.260879°W",
    imagePath: "Hideaway.jpg"
  },
  {
    weather: "73",
    wind: "7.29",
    compass: "255",
    tag: "Cashiers, North Carolina",
    title: "Mountaintop",
    location: "35.106704°N / -83.097106°W",
    imagePath: "Mountaintop.jpg"
  },
  {
    weather: "83",
    wind: "5.01",
    compass: "209",
    tag: "Scottsdale, Arizona",
    title: "Mirabel",
    location: "33.823760°N / -111.851592°W",
    imagePath: "Mirabel.jpeg"
  },
  {
    weather: "84",
    wind: "7.00",
    compass: "160",
    tag: "Westlake, Texas",
    title: "Vaquero",
    location: "32.965190°N / -97.194715°W",
    imagePath: "Vaquero.jpg"
  },
  {
    weather: "57",
    wind: "10.36",
    compass: "40",
    tag: "Whitefish, Montana",
    title: "Iron Horse",
    location: "48.449344°N / -114.347434°W",
    imagePath: "Ironhorse.jpg"
  },
  {
    weather: "57",
    wind: "11.50",
    compass: "100",
    tag: "Silicon Valley, California",
    title: "CordeValle",
    location: "37.067811°N / -121.632827°W",
    imagePath: "Cordevalle.jpg"
  },
  {
    weather: "85",
    wind: "4.00",
    compass: "270",
    tag: "Scottsdale, Arizona",
    title: "Estancia",
    location: "33.738105°N / -111.865240°W",
    imagePath: "Estancia.jpg"
  }
]

var arrOfHawaii = [{
    weather: "70",
    wind: "12.06",
    compass: "93",
    tag: "Kaua'i, Hawaii",
    title: "North Shore Preserve",
    location: "22.193420°N / -159.361620°W",
    imagePath: "Northshore.jpg"
  },
  {
    weather: "70",
    wind: "5.84",
    compass: "71",
    tag: "Maui, Hawaii",
    title: "Makena",
    location: "20.690308°N / -156.440582°W",
    imagePath: "Makena.jpg"
  },
  {
    weather: "72",
    wind: "4.61",
    compass: "120",
    tag: "Kohala, Hawaii",
    title: "Kuki'o",
    location: "19.817312°N / -155.998547°W",
    imagePath: "Kukio.jpg"
  }
]

var arrOfEurope = [{
  weather: "19",
  wind: "14.85",
  compass: "269",
  tag: "Comporta, Portugal",
  title: "CostaTerra",
  location: "38.198750°N / -8.764298°W",
  imagePath: "Costaterra.jpg"
}]

var clickCount = 0;
document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[0]);

function northAmeInnerHtml(item) {
  var string = '<div class="link-content"><img class="link-img" src="../images/home/globe-usa.jpg" alt=""></div><div class="middle-container"> ' +
    '<div class="first-box"><div class="btn-container"><p class="left-arrow" id="nor-left-btn" onclick="norAmeLeft()">←</p><p class="right-arrow" id="nor-right-btn" onclick="norAmeRight()">→</p></div><div class="second-box"><p class="sun">' +
    '<img src="../images/sun.svg" alt="" srcset=""><span class="icon-text">' + item.weather + '°F</span></p><p class="sun"><img src="../images/wind.svg" alt="" srcset="">' +
    '<span class="icon-text">' + item.wind + ' mph</span></p><p class="sun"><img src="../images/compass.svg" alt="" srcset=""><span class="icon-text">' + item.compass +
    '°</span></p></div><p class="s4-para-tag">' + item.tag + '</p><p class="s4-text">' + item.title + '</p><div class="loca-div"><img class="loca-pin" src="../images/location.svg"><p>'+ item.location +'</p></div></div><div class="third-box"><img class="s4-inner-image" ' +
    'src="../images/home/' + item.imagePath + '"></div>;';
  return string;
}

function hawaiiInnerHtml(item) {
  var string = '<div class="link-content"><img class="link-img" src="../images/home/globe-hawaii.jpg" alt=""></div><div class="middle-container"> ' +
    '<div class="first-box"><div class="btn-container"><p class="left-arrow" id="hawaii-left-btn" onclick="hawaiiLeft()">←</p><p class="right-arrow" id="hawaii-right-btn" onclick="hawaiiRight()">→</p></div><div class="second-box"><p class="sun">' +
    '<img src="../images/sun.svg" alt="" srcset=""><span class="icon-text">' + item.weather + '°F</span></p><p class="sun"><img src="../images/wind.svg" alt="" srcset="">' +
    '<span class="icon-text">' + item.wind + ' mph</span></p><p class="sun"><img src="../images/compass.svg" alt="" srcset=""><span class="icon-text">' + item.compass +
    '°</span></p></div><p class="s4-para-tag">' + item.tag + '</p><p class="s4-text">' + item.title + '</p><div class="loca-div"><img class="loca-pin" src="../images/location.svg"><p>'+ item.location +'</p></div></div><div class="third-box"><img class="s4-inner-image" ' +
    'src="../images/home/' + item.imagePath + '"></div>;';
  return string;
}

function europeInnerHtml(item) {
  var string = '<div class="link-content"><img class="link-img" src="../images/home/globe-europe.jpg" alt=""></div><div class="middle-container"> ' +
    '<div class="first-box"><div class="btn-container"><p class="left-arrow" id="europe-left-btn">←</p><p class="right-arrow" id="europe-right-btn">→</p></div><div class="second-box"><p class="sun">' +
    '<img src="../images/sun.svg" alt="" srcset=""><span class="icon-text">' + item.weather + '°F</span></p><p class="sun"><img src="../images/wind.svg" alt="" srcset="">' +
    '<span class="icon-text">' + item.wind + ' mph</span></p><p class="sun"><img src="../images/compass.svg" alt="" srcset=""><span class="icon-text">' + item.compass +
    '°</span></p></div><p class="s4-para-tag">' + item.tag + '</p><p class="s4-text">' + item.title + '</p><div class="loca-div"><img class="loca-pin" src="../images/location.svg"><p>'+ item.location +'</p></div></div><div class="third-box"><img class="s4-inner-image" ' +
    'src="../images/home/' + item.imagePath + '"></div>;';
  return string;
}


function clicked(id) {
  if (id == "norAmeCar") {
    document.getElementById("northAme-container").style.display = "block";
    document.getElementById("hawaii-container").style.display = "none";
    document.getElementById("europe-container").style.display = "none";

    document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[0]);

  }
  if (id == "hawaii") {
    document.getElementById("hawaii-container").style.display = "block";
    document.getElementById("northAme-container").style.display = "none";
    document.getElementById("europe-container").style.display = "none";

    document.getElementById("hawaii-container").innerHTML = hawaiiInnerHtml(arrOfHawaii[0]);
  }
  if (id == "europe") {
    document.getElementById("europe-container").style.display = "block";
    document.getElementById("hawaii-container").style.display = "none";
    document.getElementById("northAme-container").style.display = "none";

    document.getElementById("europe-container").innerHTML = europeInnerHtml(arrOfEurope[0]);
  }
}

function norAmeLeft() {
    switch (clickCount) {
      case 0:
        clickCount = 20;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 1:
        clickCount = 0;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 2:
        clickCount = 1;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 3:
        clickCount = 2;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 4:
        clickCount = 3;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 5:
        clickCount = 4;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 6:
        clickCount = 5;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 7:
        clickCount = 6;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 8:
        clickCount = 7;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 9:
        clickCount = 8;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 10:
        clickCount = 9;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 11:
        clickCount = 10;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 12:
        clickCount = 11;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 13:
        clickCount = 12;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 14:
        clickCount = 13;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 15:
        clickCount = 14;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 16:
        clickCount = 15;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 17:
        clickCount = 16;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 18:
        clickCount = 17;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 19:
        clickCount = 18;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 20:
        clickCount = 19;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
    }
}

function hawaiiLeft() {
  console.log("hawaii");
  console.log();
  switch (clickCount) {
    case 0:
      clickCount = 2;
      document.getElementById('hawaii-container').innerHTML = hawaiiInnerHtml(arrOfHawaii[clickCount]);
      break;
    case 1:
      clickCount = 0;
      document.getElementById("hawaii-container").innerHTML = hawaiiInnerHtml(arrOfHawaii[clickCount]);
      break;
    case 2:
      clickCount = 1;
      document.getElementById("hawaii-container").innerHTML = hawaiiInnerHtml(arrOfHawaii[clickCount]);
      break;
  }
}


function norAmeRight() {
    switch (clickCount) {
      case 0:
        clickCount = 1;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 1:
        clickCount = 2;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 2:
        clickCount = 3;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 3:
        clickCount = 4;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 4:
        clickCount = 5;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 5:
        clickCount = 6;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 6:
        clickCount = 7;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 7:
        clickCount = 8;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 8:
        clickCount = 9;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 9:
        clickCount = 10;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 10:
        clickCount = 11;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 11:
        clickCount = 12;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 12:
        clickCount = 13;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 13:
        clickCount = 14;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 14:
        clickCount = 15;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 15:
        clickCount = 16;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 16:
        clickCount = 17;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 17:
        clickCount = 18;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 18:
        clickCount = 19;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 19:
        clickCount = 20;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
      case 20:
        clickCount = 0;
        document.getElementById("northAme-container").innerHTML = northAmeInnerHtml(arrOfNorthAmerica[clickCount]);
        break;
    }
}

function hawaiiRight(){
  switch (clickCount) {
    case 0:
      clickCount = 1;
      document.getElementById('hawaii-container').innerHTML = hawaiiInnerHtml(arrOfHawaii[clickCount]);
      break;
    case 1:
      clickCount = 2;
      document.getElementById("hawaii-container").innerHTML = hawaiiInnerHtml(arrOfHawaii[clickCount]);
      break;
    case 2:
      clickCount = 0;
      document.getElementById("hawaii-container").innerHTML = hawaiiInnerHtml(arrOfHawaii[clickCount]);
      break;
  }
}
