//section2
var imageArray = [{
        image: "../images/press/northShore.jpg",
        title: "Discovery’s newest property in Kaua’i North Shore Preserve",
        para: " Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."
    },
    {
        image: "../images/press/james.jpg",
        title: "James Island <br>Discovery's Newest Property",
        para: "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada."
    },
    {
        image: "../images/press/costaTerra.jpg",
        title: "CostaTerra<br>Discovery's 23rd property",
        para: "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe."
    },
    {
        image: "../images/press/troubadour.jpg",
        title: "Troubadour To Open Golf Course Fall 2019",
        para: "Troubadour Golf &amp; Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall."
    }
];


function sectionContent(val) {
    var string = '<img class="s2-img" src="' + val.image + '"><div class="top-container"><p class="s2-para">News</p><h1 class="sub-heading s2-head">' + val.title + '</h1><p class="s2-para s2-p">' + val.para + '</p><a class="sec-a" href="">Read article</a></div>';
    return string;
}

var s2count = 0;

document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[0]);

function s2leftClick() {
    switch (s2count) {
        case 0:
            s2count = 3;
            document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[s2count]);
            break;
        case 1:
            s2count = 0;
            document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[s2count]);
            break;
        case 2:
            s2count = 1;
            document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[s2count]);
            break;
        case 3:
            s2count = 2;
            document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[s2count]);
            break;
    }
    document.getElementById("s2-pagination").innerHTML = (s2count + 1) + ` - 4`;
}

function s2rightClick() {
    switch (s2count) {
        case 0:
            s2count = 1;
            document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[s2count]);
            break;
        case 1:
            s2count = 2;
            document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[s2count]);
            break;
        case 2:
            s2count = 3;
            document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[s2count]);
            break;
        case 3:
            s2count = 0;
            document.getElementById("press-s2-content").innerHTML = sectionContent(imageArray[s2count]);
            break;
    }
    document.getElementById("s2-pagination").innerHTML = (s2count + 1) + ` - 4`;
}

// section3 

var pressObj = [
    [{
            heading: "Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious live-in resorts, which became irresistible to the rich and famous during the pandemic",
            tag: "Business Insider | June 4, 2021"
        },

        {
            heading: "There&#039;s a real buy-in for resort communities offering amusement and amenities",
            tag: "Luxury Magazine | Spring/Summer 2021"
        },

        {
            heading: "How Discovery Land Company&#039;s Mike Meldman Develops the World&#039;s Most Exclusive Private Clubs and Resort Communities ",
            tag: "CSQ | June 17, 2020"
        },

        {
            heading: "U.S. Golf Communities for the Love of the Game (Yellowstone Club and Madison Club)",
            tag: "Mansion Global | April 23, 2020"
        }
    ],

    [{
            heading: "A Rockwellian Lifestyle at Silo Ridge (Silo Ridge)",
            tag: "Quest Magazine | April 10, 2020"
        },

        {
            heading: "Thinking of golf in retirement?",
            tag: "New York Times | March 7, 2020"
        },

        {
            heading: "Most Influential Developers",
            tag: "Golf Inc. | January/February 2020"
        },

        {
            heading: "Looking Beyond the Golf Course",
            tag: "The New York Times | March 9, 2019"
        }
    ],

    [{
            heading: "Star-Studded Madison Club Golf Invitational Raises Big Money for Charity (The Madison Club)",
            tag: "Forbes | January 30, 2019"
        },

        {
            heading: "Moveable Feasts (Silo Ridge)",
            tag: "GOLF Magazine | July 3, 2019"
        },

        {
            heading: "Silo Ridge Field Club Is the Stuff of Dreams (Silo Ridge)",
            tag: "Hudson Valley Magazine | June 25, 2019"
        },

        {
            heading: "Work starts on $250M community with 300-plus homes, golf course (Driftwood)",
            tag: "Austin Business Journal | June 19, 2019"
        }
    ],

    [{
            heading: "Exclusive Playa Grande Golf &amp; Ocean Club Opens In The Dominican Republic (Playa Grande)",
            tag: " Forbes | November 14, 2018"
        },

        {
            heading: "The Captain’s Table: Mike Meldman ",
            tag: "Financial Times | June 22, 2018"
        },

        {
            heading: "George Clooney and Rande Gerber have a third partner in their $1 billion tequila company, and he happens to be a real estate tycoon",
            tag: "Business Insider | December 8, 2018"
        },

        {
            heading: "Shore Thing (Playa Grande)",
            tag: "Modern Luxury Interiors | Spring 2019"
        }
    ],

    [{
            heading: "The Remarkable Accomplishments of “Magic Mike”",
            tag: "Executive Golfer | March 2019"
        },

        {
            heading: "Best of the Bahamas: Baker’s Bay Golf &amp; Ocean Club (Baker&#039;s Bay) ",
            tag: "Ocean Home | April 7, 2019"
        },

        {
            heading: "The Man Behind Some of Golf’s Best Development Projects",
            tag: "Desert Golf &amp; Tennis | January 2019"
        },

        {
            heading: "Peek Inside the Hudson Valley’s Most Exclusive Live-Work-Play Community (Silo Ridge)",
            tag: "Hudson Valley Magazine | February 19, 2019"
        }
    ],

    [{
            heading: "Current Trends From Top Golf Communities: What’s Hot (Playa Grande)",
            tag: "LINKS magazine | Special Issue 2019"
        },

        {
            heading: "Yellowstone Club (Yellowstone Club)",
            tag: "Colorado Expression"
        },

        {
            heading: "How to Have a Perfect (and Perfectly Private) Family Vacation Like a Hollywood Star ",
            tag: "The Hollywood Reporter | January 7, 2019"
        },

        {
            heading: "Golf Life: ‘Pebble Beach-plus site’ reopens in Dominican Republic (Playa Grande)",
            tag: "Golfweek | November 11, 2018"
        }
    ],

    [{
            heading: "Beyond the Dunes: The Hamptons Reimagined (Dune Deck)",
            tag: "Toy’s for Boys | Issue 16, Fall 2018"
        },

        {
            heading: "Discovery Land Company Foundation Teams Up With PGA Pros To Raise Money For Those Who Need It Most",
            tag: "Forbes | September 7, 2018"
        },

        {
            heading: "Beach Club: A peek inside the Dune Deck Beach Club—the new waterside wellness retreat in Westhampton (Dune Deck)",
            tag: "Hamptons Purist | Labor Day Issue 2017"
        },

        {
            heading: "First Residents of the Summit Club Move In (Summit)",
            tag: "Las Vegas Review-Journal | July 27, 2018"
        }
    ],

    [{
            heading: "The New Summit Club In Summerlin Isn’t Playing By Usual Las Vegas House Rules (Summit)",
            tag: "Golf Advisor | March 7, 2018"
        },

        {
            heading: "After Devastating Destruction, Caribbean Looks to Rebuild (Baker&#039;s Bay)",
            tag: "Mansion Global | October 29, 2017"
        },

        {
            heading: "Wine: Mexico’s wine industry is flourishing, no kidding (Chileno Bay)",
            tag: "Luxury Magazine | Fall 2017"
        },

        {
            heading: "The Latest Trend in Skiing is Renting Out the Entire Mountain (Yellowstone Club)",
            tag: "Bloomberg Businessweek | October 2, 2017"
        }
    ],

    [{
            heading: "Meldman Brings His Magic (Dune Deck)",
            tag: "Hamptons Magazine | Labor Day Issue 2017"
        },

        {
            heading: "Westhampton oceanfront club draws a celeb crowd (Dune Deck)",
            tag: "New York Post | August 19, 2017"
        },

        {
            heading: "New York’s New Playground (Silo Ridge)",
            tag: "Executive Golfer | June 2017"
        },

        {
            heading: "MĀKENA Golf &amp; Beach Club (Mākena) ",
            tag: "Leading Estates | Issue 204"
        }
    ],

    [{
            heading: "Paradise Found (Chileno Bay)",
            tag: "LALA Magazine | May 2017"
        },

        {
            heading: "The Hamptons New A-List Hideaways (Dune Deck)",
            tag: "The Hollywood Reporter | April 19, 2017"
        },

        {
            heading: "The Nine Most Eagerly Awaited New Golf Courses of 2017 (Summit)",
            tag: "Forbes | February 20, 2017"
        },

        {
            heading: "The Evolution of the Private Vacation Club",
            tag: "Town and Country Travel | October 17, 2016"
        }
    ],

    [{
            heading: "Discovery Land Company brings its unique model to the Met Area (Silo Ridge)",
            tag: "The Met Golfer | Vol. 34, No. 3, June/July 2016"
        },

        {
            heading: "Where Athletes and Off-Duty PGA Golfers Play Barefoot (Baker&#039;s Bay)",
            tag: "Forbes | February 20, 2016"
        },

        {
            heading: "Inside Jimmy Kimmel’s Robb Report Bucket List Adventure in Montana (Yellowstone Club) ",
            tag: "Robb Report | January 24, 2016"
        },

        {
            heading: "Editor’s Letter: No Ordinary People ",
            tag: "Golf Digest | Vol. 66, No. 4, Arpil 2015"
        }
    ],

    [{
            heading: "Après-Bankruptcy: Six Years After Bankruptcy, a Ski Resort for the Rich Is Bouncing Back (Yellowstone Club)",
            tag: "Business Day | January 1, 2015"
        },

        {
            heading: "The New Playgrounds of the SUPER-RICH",
            tag: "GQ British | May 2010"
        }
    ]
];


function settingInnerHtml(item) {
    var i = 0;
    if (item.length === 4) {
        var string = '<div class="row s3-content page-1"><div class="col-lg-6 s3-inner-cols left-para"><p class="s3-para"> ' + item[i].heading + '<br><b>' + item[i].tag + '</b></p><a class="sec-a" href="">Read article</a></div>' +
            '<div class="col-lg-6 s3-inner-cols right-para"><p class="s3-para">' + item[i + 1].heading + '<br><b>' + item[i + 1].tag + '</b></p><a class="sec-a" href="">Read article</a></div>' +
            '<div class="col-lg-6 s3-inner-cols left-para"><p class="s3-para ">' + item[i + 2].heading + '<br><b>' + item[i + 2].tag + '</b></p><a class="sec-a" href="">Read article</a></div>' +
            '<div class="col-lg-6 s3-inner-cols right-para"><p class="s3-para">' + item[i + 3].heading + '<br><b>' + item[i + 3].tag + '</b></p><a class="sec-a" href="">Read article</a></div>' +
            '</div>';
    } else {
        var string = '<div class="row s3-content page-1"><div class="col-lg-6 s3-inner-cols left-para"><p class="s3-para"> ' + item[i].heading + '<br><b>' + item[i].tag + '</b></p><a class="sec-a" href="">Read article</a></div>' +
            '<div class="col-lg-6 s3-inner-cols right-para"><p class="s3-para">' + item[i + 1].heading + '<br><b>' + item[i + 1].tag + '</b></p><a class="sec-a" href="">Read article</a></div>' +
            '</div>';
    }

    return string;
}

var clickCount = 0;

document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[0]);


function leftClick() {
    switch (clickCount) {
        case 0:
            clickCount = 11;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 1:
            clickCount = 0;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 2:
            clickCount = 1;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 3:
            clickCount = 2;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 4:
            clickCount = 3;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 5:
            clickCount = 4;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 6:
            clickCount = 5;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 7:
            clickCount = 6;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 8:
            clickCount = 7;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 9:
            clickCount = 8;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 10:
            clickCount = 9;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 11:
            clickCount = 10;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
    }
    document.getElementById("s3-pagination").innerHTML = (clickCount + 1) + ` - 12`;

}


function rightClick() {
    switch (clickCount) {
        case 0:
            clickCount = 1;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 1:
            clickCount = 2;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 2:
            clickCount = 3;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 3:
            clickCount = 4;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 4:
            clickCount = 5;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 5:
            clickCount = 6;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 6:
            clickCount = 7;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 7:
            clickCount = 8;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 8:
            clickCount = 9;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 9:
            clickCount = 10;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 10:
            clickCount = 11;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
        case 11:
            clickCount = 0;
            document.getElementById("press-s3-content").innerHTML = settingInnerHtml(pressObj[clickCount]);
            break;
    }
    document.getElementById("s3-pagination").innerHTML = (clickCount + 1) + ` - 12`;

}