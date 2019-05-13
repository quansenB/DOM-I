const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navItems = document.querySelectorAll('a');
navItems[0].textContent = sideContent["nav"]["nav-item-1"];
navItems[1].textContent = sideContent["nav"]["nav-item-2"];
navItems[2].textContent = sideContent["nav"]["nav-item-3"];
navItems[3].textContent = sideContent["nav"]["nav-item-4"];
navItems[4].textContent = sideContent["nav"]["nav-item-5"];
navItems[5].textContent = sideContent["nav"]["nav-item-6"];

let codeimg = document.querySelector('#cta-img');
codeimg.src = siteContent["cta"]["img-src"];

let domisawesome = document.querySelector("h1");
domisawesome.textContent = siteContent["cta"]["h1"];

let button_dia = document.querySelector("button");
button_dia.textContent = siteContent["cta"]["button"]

let imgMiddle = document.querySelector("#middle-img");
imgMiddle.src = siteContent["main-content"]["middle-img-src"];

let h4middle = document.querySelectorAll(".text-content h4");
let textmiddle = document.querySelectorAll(".text-content p");

h4middle[0].textContent = siteContent["main-content"]["features-h4"];
h4middle[1].textContent = siteContent["main-content"]["about-h4"];
h4middle[2].textContent = siteContent["main-content"]["services-h4"];
h4middle[3].textContent = siteContent["main-content"]["product-h4"];
h4middle[4].textContent = siteContent["main-content"]["vision-h4"];

textmiddle[0].textContent = siteContent["main-content"]["product-content"];
textmiddle[1].textContent = siteContent["main-content"]["about-content"];
textmiddle[2].textContent = siteContent["main-content"]["services-content"];
textmiddle[3].textContent = siteContent["main-content"]["product-content"];
textmiddle[4].textContent = siteContent["main-content"]["vision-content"];

let h4contact = document.querySelector(".contact h4");
h4contact.textContent = siteContent["contact"]["contact-h4"];

let pcontact = document.querySelectorAll(".contact p");
pcontact[0].textContent = siteContent["contact"]["address"];
pcontact[1].textContent = siteContent["contact"]["phone"];
pcontact[2].textContent = siteContent["contact"]["email"];

let footertext = document.querySelector("footer p");
footertext.textContent = siteContent["footer"]["copyright"];

let newanav1 = document.createElement("a");
newanav1.textContent = "Home";
document.querySelector("nav").prepend(newanav1);
let newanav2 = document.createElement("a");
newanav2.textContent = "Imprint";
document.querySelector("nav").appendChild(newanav2);

let navItemsGreen = document.querySelectorAll('a');
navItemsGreen.forEach((element) => {
  element.style.color = "green";
});