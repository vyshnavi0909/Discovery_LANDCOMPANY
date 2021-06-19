document.getElementById("header-part").innerHTML = `
<header class="header" id="header-display">
    <div class="">
            <a class="nav-a main-logo" href="./home.html">
                <img src="../images/logo.svg" class="logo-img">
                <div class="logo-text">
                    <span class="disc-text">Discovery</span>
                    <span class="tag-text">LAND COMPANY</span>
                </div>
            </a>
    </div>
    <div class="nav-bar">
        <ul class="nav-ul">
            <li class="nav-item nav-sm"><a id="about" class="nav-a nav-list" href="./about.html">About DLC</a></li>
            <li class="nav-item nav-sm"><a id="ourWorlds" class="nav-a nav-list" href="./ourWorlds.html">Our Worlds</a></li>
            <li class="nav-item nav-sm"><a id="experiences" class="nav-a nav-list" href="./experiences.html">Experiences</a></li>
            <li class="nav-item nav-sm"><a id="gallery" class="nav-a nav-list" href="./gallery.html">Gallery</a></li>
            <li class="nav-item nav-sm"><a id="press" class="nav-a nav-list" href="./press.html">Press</a></li>
        </ul>
    </div>
    <div class="dropdown">
        <a href="javascript:void(0);" class="drpdwn-btn">
            <img class="menu-btn" src="../images/menu-bar.jpeg">
        </a>
    </div>
</header>
<div id="menu" class="menu-content">
<div class="menu-header">
    <div>
        <a class="nav-a main-logo" href="./home.html">
            <img src="../images/logo.svg" class="logo-img">
            <div class="logo-text">
                <span class="disc-text">Discovery</span>
                <span class="tag-text">LAND COMPANY</span>
            </div>
        </a>
    </div>
    <div class="dropdown">
        <a href="javascript:void(0);" class="drpdwn-btn">
            <img class="menu-btn" src="../images/menu-bar.jpeg">
        </a>
    </div> 
</div>
<div class="menu-div">
    <div class="a-div">
            <a id="magazine" class="drpdwn-a" href="./magazine.html">Magazine</a>
    </div>
</div>
<div class="menu-div">
    <div class="a-div">
        <a id="company" class="drpdwn-a" href="./company.html">Company</a>
    </div>
</div>
<div class="menu-div">
    <div class="a-div">
        <a id="foundation" class="drpdwn-a" href="./foundation.html">Foundation</a>
    </div>
</div>
<div class="menu-div">
    <div class="a-div ">
        <a id="career" class="drpdwn-a" href="./careers">Careers</a>
    </div>
</div>
<div class="menu-div">
    <div class="a-div">
        <a id="contact" class="drpdwn-a" href="./contact.html">Contact</a>
    </div>
</div>

</div>`;