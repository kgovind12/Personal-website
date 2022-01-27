const navbar = document.querySelector(".navbar");
const signature = document.querySelector('.navbar-brand p');
const home = document.querySelector('.home');

handleScrollPastHome();

window.onscroll = function(){
  if (window.scrollY >= 20){
    navbar.classList.add('bg-scroll');
  }
  else{
    navbar.classList.remove('bg-scroll');
  }

  handleScrollPastHome();
}

function handleScrollPastHome() {
  if (home) {
    if (window.scrollY > (home.offsetTop + home.offsetHeight - 100)) {
      signature.className = 'fullname';
      signature.textContent = 'Krithika Govind';
      navbar.style.height = '70px';
    } else {
      signature.className = 'signature'
      signature.textContent = 'KG';
      navbar.style.height = '85px';
    }
  }
}


document.getElementById('copyright-year').textContent = new Date().getFullYear().toString();

// Update nav links on scroll
const navlinks = document.querySelectorAll('nav ul li a');

// Elements fade into view on scroll

/* Adapted from Animista
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
*/
const scrollElements = document.querySelectorAll(".js-scroll");

function elementInView(el) {
  const elementTop = el.getBoundingClientRect().top;

  if (elementTop <= window.innerHeight/1.25 || elementTop <= document.documentElement.clientHeight/1.25) {
    return true;
  } else return false;
};

function elementOutofView(el) {
  const elementTop = el.getBoundingClientRect().top;

  if (elementTop > window.innerHeight || elementTop > document.documentElement.clientHeight) {
    return true;
  } else return false;
};

function showElement(element) {
  element.classList.add("scrolled");
};

function hideElement(element) {
  element.classList.remove("scrolled");
};

function handleScrollIntoView() {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      showElement(el);
    } else if (elementOutofView(el)) {
      hideElement(el)
    }
  })
}

window.addEventListener("scroll", function() { 
  handleScrollIntoView();
});

window.addEventListener('load', function() {
  handleScrollIntoView();
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