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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// NAV
let navItems = Object.keys(siteContent['nav']);
let navItemsLooped = []

for (let i = 0; i < navItems.length; i++) {
  navItemsLooped.push(siteContent['nav'][navItems[i]]);
}

document.querySelectorAll('nav a').forEach(function(a, i) {
  a.textContent = navItemsLooped[i];
  a.style.color = 'green';
})

// ADDING NEW A ELEMENT TO NAV USING appendChild()  
const a = document.createElement('a');
const nav = document.querySelector('nav')
nav.appendChild(a);
const anchors = document.querySelectorAll('a');
// ADDING TEXT TO THE NEW A ELEMENT
anchors[6].textContent = 'YO';

// ADDING NEW A ELEMENT TO NAV USING prepend()
const navP = document.createElement('p')
nav.prepend(navP);
document.querySelector('nav p').textContent = 'HI'

// HEADER
let h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

let button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];


// MAIN CONTENT
let mainItems = Object.keys(siteContent['main-content']);
const h4s = ['Features', 'About', 'Services', 'Product', 'Vision', 'Contact'];

let mainStuff = [];
for (let i = 0; i < mainItems.length; i++) {
  mainStuff.push(siteContent['main-content'][mainItems[i]]);
  }

// console.log(mainStuff);

document.querySelectorAll('h4').forEach( (h4, i) => h4.textContent = h4s[i]);

let featuresP = document.querySelector('.top-content p');
featuresP.textContent = mainStuff[1];

let allPs = document.querySelectorAll('p');

allPs[1].textContent = mainStuff[3];

allPs[2].textContent = mainStuff[6];

allPs[3].textContent = mainStuff[8];

allPs[4].textContent = mainStuff[10];

//CONTACT
let contactItems = Object.keys(siteContent['contact']);

let contactStuff = [];
for (let i = 0; i < contactItems.length; i++) {
  contactStuff.push(siteContent['contact'][contactItems[i]]);
  }

// console.log(contactStuff);

allPs[5].textContent = contactStuff[1];
allPs[6].textContent = contactStuff[2];
allPs[7].textContent = contactStuff[3];


allPs[8].textContent = siteContent['footer']['copyright'];



//STRETCH GOAL STUFF
nav.style.backgroundColor = '#efa'
nav.style.borderRadius = '20px'
nav.style.borderRadius = '20px'
const navStyle = nav.style;
navStyle.padding = '20px'
navStyle.fontSize = '20px'
navStyle.fontWeight = 'bold'

const logoStyle = document.getElementById('logo-img').style;
logoStyle.padding = '20px'
logoStyle.background = 'skyblue'
