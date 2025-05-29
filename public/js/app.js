//^ modal

let navListA = document.querySelectorAll(".navListA");

navListA.forEach((a) => {
  a.addEventListener("click", () => {
    navListA.forEach((item) => (item.style.borderBottom = "none"));
    
    a.style.borderBottom = "3px solid #ce1212";
  });
});

let loginModal = document.getElementById("loginModal");
let headerr = document.querySelector("header");
let modal = document.createElement("div");
modal.style = "width:100%; height:100%;";
modal.innerHTML = `
<!-- modal -->
<div id="modal" class="d-flex justify-content-center align-items-center">
<div class="p-5 card col-md-4 bg-light d-flex justify-content-center align-items-center">
<form action="" class="d-flex flex-column align-items-center gap-4 w-100">
<input type="email" class="form-control bgLightRed" placeholder="Enter Your Email">
<input type="password" class="form-control bgLightRed" placeholder="Enter Your Password">
<div class="d-flex gap-4">
<button class="btn bgRed rounded-5 py-2 px-5 text-white fs-6 hovv">Log In</button>
<button class="btn bg-secondary-subtle rounded-5 py-2 px-5 text-secondary fw-bold fs-6" id="btnClose">Close</button>
</div>
</form>
</div>
</div>
<!-- / modal / -->
`;
headerr.appendChild(modal);
modal.style.display = "none";
loginModal.addEventListener("click", () => {
  modal.style.display = "flex";
});
let btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});


//^ btn video
let sectionHeader = document.getElementById('sectionHeader')
let btnVideo = document.getElementById('btnVideo')
let newDivVideo = document.createElement('div')

btnVideo.addEventListener('click',()=>{
  newDivVideo.innerHTML = `
  <div class="newDivVideo">
  <video src="./public/video/capybara--the-friendliest-animal-on-earth.mp4" controls></video>
  <button id="btnCloseVideo" class="btn bg-light fs-1 text-black fw-bold px-4 ">X</button>
  </div>
  `
  sectionHeader.appendChild(newDivVideo)
  let btnCloseVideo = document.getElementById('btnCloseVideo')
  btnCloseVideo.addEventListener('click',()=>{
    newDivVideo.remove()
  })
})


//^ menu
let allMenu = document.getElementById('allMenu')
let menu1 = document.getElementById('menu1')
let menu2 = document.getElementById('menu2')
let menu3 = document.getElementById('menu3')
let menu4 = document.getElementById('menu4')

let menuCklick = document.querySelectorAll(".menuCklick");
menuCklick.forEach((e) => {
  e.addEventListener("click", () => {
    menuCklick.forEach((item) => (item.style.borderBottom = "2px solid #a5a5a5"));
    e.style.borderBottom = "3px solid #ce1212";
  });
});

menu2.remove()
menu3.remove()
menu4.remove()

menuCklick[0].addEventListener('click',()=>{
    menu2.remove()
    menu3.remove()
    menu4.remove()
    allMenu.appendChild(menu1)

})

menuCklick[1].addEventListener('click',()=>{
    menu1.remove()
    menu3.remove()
    menu4.remove()
    allMenu.appendChild(menu2)
})

menuCklick[2].addEventListener('click',()=>{
    menu1.remove()
    menu2.remove()
    menu4.remove()
    allMenu.appendChild(menu3)
})

menuCklick[3].addEventListener('click',()=>{
    menu1.remove()
    menu2.remove()
    menu3.remove()
    allMenu.appendChild(menu4)
})


//^ carouselle testimonial

document.addEventListener('DOMContentLoaded', ()=> {
  const carousel = document.querySelector('.carousel');
  const indicators = document.querySelectorAll('.indicator');
  let currentIndex = 0;
  let interval;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  function startInterval() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % indicators.length;
      updateCarousel();
    }, 3000);
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      clearInterval(interval);
      currentIndex = index;
      updateCarousel();
      startInterval();
    });
  });

  updateCarousel();
  startInterval();
});

//^ carouselle testimonial