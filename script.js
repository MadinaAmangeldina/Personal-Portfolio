//NAVBAR

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}

// scroll up button

let scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// HEADER SECTION

let opacity = 0;
let intervaId = 0;
window.onload = fadeIn;

function fadeIn(){
  setInterval(loadIntro, 100)
}

function loadIntro(){
  const elementIds = ["text1", "text2", "text3"]
  const maxOpacities = [0.8, 1, 1]
  let i = 0;
  while (i != elementIds.length) {
    const elementId = elementIds[i];
    const maxOpacity = maxOpacities[i];
    let intro = document.getElementById(elementId);
    let opacity = Number(window.getComputedStyle(intro).getPropertyValue("opacity"));
    if (opacity < maxOpacity) {
      opacity += 0.1;
      intro.style.opacity = opacity;
      return;
    } else {
      i += 1;
    }
  }
}; 



// ABOUT SECTION

// let element = document.getElementById("aboutSection");
//       let sectionOpacity = 0;
//       let fadeInSection = setInterval(() => {
//          if (sectionOpacity >= 1) {
//             clearInterval(fadeIn);
//          }
//          element.style.sectionOpacity = sectionOpacity;
//          sectionOpacity += 0.01;
//       }, 10);


// document.getElementById("myPath").setAttribute("d", "M0 0 L30 32 L60 0");