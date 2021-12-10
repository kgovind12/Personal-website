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