const navbar = document.querySelector(".navbar");
window.onscroll = function(){
  if (window.scrollY >= 20){
    navbar.classList.add('bg-scroll');
  }
  else{
    navbar.classList.remove('bg-scroll');
  }
}

document.getElementById('copyright-year').textContent = new Date().getFullYear().toString();

// Update nav links on scroll
const navlinks = document.querySelectorAll('nav ul li a');

// Elements fade into view on scroll

/* ----------------------------------------------
 * Generated by Animista on 2021-2-11 23:32:31
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

window.addEventListener('load', function() {
  handleScrollAnimation();
  const posts = document.querySelectorAll('section');
  let postTops = [];
  let pageTop;
  let counter = 1;
  let prevCounter = 1;
  let doneResizing;

  function resetPagePosition() {
      postTops = [];
      posts.forEach(function(post) {
          postTops.push(Math.floor(post.getBoundingClientRect().top) + window.scrollY);
      });

      const pagePosition = window.scrollY + 250;
      counter = 0;

      postTops.forEach(function(post) { if (pagePosition > post) { counter++; }});
      navlinks.forEach(function(link) { link.removeAttribute('class'); });

      const currentLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
      currentLink.className = 'active';
  }

  // resetPagePosition();

  // window.addEventListener('scroll', function() {
  //     pageTop = window.scrollY + 250;

  //     if (pageTop > postTops[counter]) {
  //         counter++;
  //     } else if (counter > 1 && pageTop < postTops[counter - 1]) {
  //         counter--;
  //     }

  //     if (counter != prevCounter) {
  //         navlinks.forEach(function(link) {
  //             link.removeAttribute('class');
  //         });
  //     }

  //     const currentLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
  //     currentLink.className = 'active';
  //     prevCounter = counter;
  // });

  // window.addEventListener('resize', function() {
  //     clearTimeout(doneResizing);
  //     doneResizing = setTimeout(function() {
  //         resetPagePosition();
  //     }, 500);
  // });
});