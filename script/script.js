// const faders = document.querySelectorAll(".fade-in");

// const appearOptions = {
//     threshold: 0.2,
//     rootMargin: "0px 0px -100px 0px"
//   };

// const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         return;
//       } else {
//         entry.target.classList.add("appear");
//         appearOnScroll.unobserve(entry.target);
//       }
//     });
//   },
//   appearOptions);
  
//   faders.forEach(fader => {
//     appearOnScroll.observe(fader);
//   });


const navbar = document.querySelector(".navbar");
window.onscroll = function(){
  if (window.scrollY >= 20){
    navbar.classList.add('bg-scroll');
  }
  else{
    navbar.classList.remove('bg-scroll');
  }
}
  