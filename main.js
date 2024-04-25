// header Scroll color changes
let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.scrollY > 0)
});

//menu
let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('#.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//remove menu on click
window.onscroll = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//Scroll Reveal Animation
const sr =ScrollReveal({
  origin: 'top',
  distance: '60px',
  duartion: 2500,
  delay:400,
  //reset:true
})

sr.reveal('.home-text,buds-text',{origin: 'left'})
sr.reveal('.home-img,buds-img',{origin: 'right'})
sr.reveal('.heading',{delay: '200'})
sr.reveal('.specs-details .box',{origin: 'left',interveal:200})
sr.reveal('.specs-img',{delay: '600'})
sr.reveal('.specs-container .box,footer .logo,.footer .footer-box',{ interveal:150})