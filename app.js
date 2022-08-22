AOS.init();

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: true,
});

const dropdown = document.querySelectorAll('.faq li')
Array.from(dropdown).map(item => {
    item.onclick = () => {
        item.querySelector('i').classList.toggle('active')
        item.querySelector('.sub-dropdown').classList.toggle('active')

    }
})


const auto = ['./img/299045514_5831842696876861_7305700469678770245_n.png','./img/298722911_597920858623474_1957435508165404036_n.png','./img/298599893_1571997493195055_411864110059032407_n.png','./img/297037200_437778098301834_7399183873352312458_n.png', './img/295710247_485164092947949_5098938862702838077_n.png','./img/295713697_457239852944185_500168885155012324_n.png',]

setInterval(() => {
  let index = Math.floor(Math.random() * auto.length)
  document.querySelector('.desc img').src = auto[index]
}, 100);


document.querySelectorAll('.navbar li').forEach(item => {
  item.onclick = () => {
    item.querySelector('.noti').classList.toggle('active')
  }
  
})

