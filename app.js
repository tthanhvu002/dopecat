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
