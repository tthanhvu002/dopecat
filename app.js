AOS.init();

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  autoplay: {
    delay: 800,
  },
});

const dropdown = document.querySelectorAll('.faq li')
Array.from(dropdown).map(item => {
    item.onclick = () => {
        item.querySelector('i').classList.toggle('active')
        item.querySelector('.sub-dropdown').classList.toggle('active')

    }
})


const auto = ['./img/1.png','./img/2.png',
'./img/3.png',

'./img/5.png',
'./img/6.png',
'./img/7.png',
'./img/8.png',
'./img/9.png',

'./img/11.png',
'./img/12.png',]

setInterval(() => {
  let index = Math.floor(Math.random() * auto.length)
  document.querySelector('.desc img').src = auto[index]
}, 200);


document.querySelectorAll('.navbar li').forEach(item => {
  item.onclick = () => {
    item.querySelector('.noti').classList.toggle('active')
  }
  
})



document.querySelector('.roadmap-nav').onclick = (e) => {
  e.preventDefault()
  console.log(document.querySelector('.roadmap'));
  document.querySelector('.roadmap').scrollIntoView(true)
}
