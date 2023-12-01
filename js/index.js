const $ = document;
const main = $.querySelector('.header-top-right-language-main'),
    headerTop=$.querySelector('header')
    menu = $.querySelector('.header-top-right-language-menu'),
    mainMoney = $.querySelector('.header-top-right-money'),
    menuMoney = $.querySelector('.header-top-right-money-menu'),
    searchBox = $.querySelector('.header-bottom-left-btns-searchBox-page'),
    closeSearchBox = $.querySelector('.header-bottom-left-btns-searchBox-page-close'),
    searchBoxOpen = $.querySelector('.header-bottom-left-btns-searchBox'),
    dropDownMenuItem=$.querySelectorAll(".header-bottom-left-btns-menu-dropdwon-item"),
    menuSmall=$.querySelector('.header-bottom-left-btns-menu');

headerTop.addEventListener('click',()=>{
    menu.classList.remove('block')
    console.log('log');
})
main.addEventListener('click', () => {
    menu.classList.toggle('block');
    console.log('main');
})

mainMoney.addEventListener('click', () => {
    menuMoney.classList.toggle('block');
    console.log('mainmoney');
})

searchBoxOpen.addEventListener('click', () => {
    searchBox.style.display = 'block';
})

closeSearchBox.addEventListener('click', (event) => {
    event.stopPropagation()
    searchBox.style.display = 'none'
});
// -------------------slider header-------------------
let prevBtn = $.querySelector('.header-slider-back')
let nextBtn = $.querySelector('.header-slider-next')
let headerSlider = $.querySelector('.header-slider')

let imgSrcArray = $.querySelectorAll('.header-slider-items>div')

let imgIndex = 0


function prevImage() {
    imgIndex--
    if (imgIndex < 0) {
        imgIndex = imgSrcArray.length - 1
    }
    imgSrcArray[imgIndex].classList.add('active')
    if (imgIndex == 2) {
        imgSrcArray[0].classList.remove('active')
    } else {
        imgSrcArray[imgIndex + 1].classList.remove('active')
    }
    switch (imgIndex) {
        case 0:
            headerSlider.style.backgroundColor = '#FFE4D3'
            break;
        case 1:
            headerSlider.style.backgroundColor = '#ECF4FF'
            break;
        case 2:
            headerSlider.style.backgroundColor = '#D2FEF1'
            break;
    }
}



function nextImage() {
    imgIndex++
    if (imgIndex > imgSrcArray.length - 1) {
        imgIndex = 0
    }
    imgSrcArray[imgIndex].classList.add('active')
    if (imgIndex == 0) {
        imgSrcArray[2].classList.remove('active')
    } else {
        imgSrcArray[imgIndex - 1].classList.remove('active')
    }
    switch (imgIndex) {
        case 0:
            headerSlider.style.backgroundColor = '#FFE4D3'
            break;
        case 1:
            headerSlider.style.backgroundColor = '#ECF4FF'
            break;
        case 2:
            headerSlider.style.backgroundColor = '#D2FEF1'
            break;
    }
}
setInterval(nextImage, 10000);

prevBtn.addEventListener('click', prevImage)
nextBtn.addEventListener('click', nextImage)

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    delay:300,
//     slidesPerView: 4,
//   spaceBetween: 40,
  breakpoints:{
    360:{
        slidesPerView:1,
    },
    480:{
        slidesPerView:2,
        spaceBetween:30
    },
    996:{
        slidesPerView:3,
    },
    1140: {
    slidesPerView: 4,
    spaceBetween: 50
  }
  }
  
});
const swiper_comment = new Swiper('.swiper-comment', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
    delay:300,
    slidesPerView: 1,
  
});

dropDownMenuItem.forEach(item=>{
    item.addEventListener("click",(e)=>{
        e.stopPropagation()
        item.lastElementChild.classList.toggle('show')
    })
})
menuSmall.addEventListener('click',()=>{
    menuSmall.lastElementChild.classList.toggle('show')
})