"use strict"

const $ = document;

// show / onshow allProduct
const allProducts = $.querySelector("#allProducts")
const show = $.querySelector(".show-menu")
function showMenuAllProduct() {
    show.classList.remove("hidden")
    show.classList.add("fixed","z-50","w-1/4")
}
function hiddenMenuAllProduct() {
    show.classList.add("hidden")
}
$.body.addEventListener("mouseleave",hiddenMenuAllProduct)
allProducts.addEventListener("mousemove", showMenuAllProduct)



// choose location
let chooseLocation = $.querySelector(".location")
let selectCitiesForChoose = $.querySelector("#selectCitiesForChoose")
let closeSelectChooseLoc = $.querySelector("#closeSelectChooseLoc")
let selectBox = $.querySelector(".ChooseLoc")
let x = $.querySelector("#swiper-container")
let eparchy = [
    "آذزبایجان شرقی",
    "آذربایجان غربی",
    "اردبیل",
    "اصفهان",
    "البرز",
    "ایلام",
    "بوشهر",
    "تهران",
    "چهارمحال و بختیاری",
    "خراسان شمالی",
    "خراسان رضوی",
    "خراسان جنوبی",
    "خوزستان",
    "زنجان",
    "سمنان",
    "سیستان و بلوچستان",
    "فارس",
    "قزوین",
    "قم",
    "کردستان",
    "کرمان",
    "کرمانشاه",
    "کهکلویه و بویراحمر",
    "گلستان",
    "گیلان",
    "لرستان",
    "مازندران",
    "مرکزی",
    "هرمزگان",
    "همدان",
    "یزد",
]
function insertLocation() {
    for (let i = 0; i < eparchy.length - 1; i++) {
        selectCitiesForChoose.innerHTML += `<li class = "py-2 my-3 border-b-2 cursor-pointer">${eparchy[i]}</li>`
    }
    // choose city
    let liElem = selectCitiesForChoose.getElementsByTagName("li")
    for (let j = 0; j < liElem.length - 1; j++) {
        liElem[j].addEventListener("click", () => {
            chooseLocation.innerHTML = liElem[j].innerHTML
            selectBox.classList.add("hidden")
            $.body.classList.remove("bg-gray-200")
        })
    }
    selectBox.classList.remove("hidden")
    selectBox.classList.add("fixed","z-50","right-1/3")
    $.body.classList.add("bg-gray-200")
}
function closeSelectBox() {
    selectBox.classList.add("hidden")
}
chooseLocation.addEventListener("click", insertLocation)
closeSelectChooseLoc.addEventListener("click", closeSelectBox)




// swiper container
let imagesOfSwiper = [
    {
        id: 1,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/fb514fabc7557fb2ab97569fce593a00e871c703_1678726392.jpg?x-oss-process=image/quality,q_95/format,webp",
        linkHref: "https://www.digikala.com/landing/outlet-fashion/?&promo_name=%D8%A7%D9%86%D8%A8%D8%A7%D8%B1+%D8%AA%DA%A9%D8%A7%D9%86%DB%8C+%D9%85%D8%AF+%D9%88+%D9%BE%D9%88%D8%B4%D8%A7%DA%A9&promo_position=home_slider_new_v2&promo_creative=144408&bCode=144408",
    },
    {
        id: 2,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/4dc241fe8ad0bcd85d606cfcdebdcefdaa50e2cf_1677416219.jpg?x-oss-process=image/quality,q_95/format,webp",
        linkHref: "https://www.digikala.com/product-list/plp_54259727/?sort=7&promo_name=%D9%84%D9%BE%D8%AA%D8%A7%D9%BE+%D8%A7%D8%B2+%D9%86%D9%88&promo_position=home_slider_new_v2&promo_creative=142631&bCode=142631",
    },
    {
        id: 3,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/9869329b36e4c75533cc5281632a2763a972f260_1679140919.jpg?x-oss-process=image/quality,q_95/format,webp",
        linkHref: "https://www.digikala.com/landing/ramezanfmcg/?&promo_name=%D9%85%D8%A7%D9%87+%D9%85%DB%8C%D9%87%D9%85%D8%A7%D9%86%DB%8C+-+%D8%B3%D9%88%D9%BE%D8%B1%D9%85%D8%A7%D8%B1%DA%A9%D8%AA+%D8%AF%DB%8C%D8%AC%DB%8C%E2%80%8C%DA%A9%D8%A7%D9%84%D8%A7+&promo_position=home_slider_new_v2&promo_creative=144841&bCode=144841",
    },
    {
        id: 4,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/2dae89f6e8425b9e6088d963adf6fe5b3a9a131b_1679132350.jpg?x-oss-process=image/quality,q_95/format,webp",
        linkHref: "https://www.digikala.com/landing/ramadan_homeware/?&promo_name=%DA%A9%D9%85%D9%BE%DB%8C%D9%86+-+HW+-+%D9%85%D8%A7%D9%87+%D8%B1%D9%85%D8%B6%D8%A7%D9%86+-+%D9%81%D8%B1%D9%88%D8%B1%D8%AF%DB%8C%D9%86+1402&promo_position=home_slider_new_v2&promo_creative=144816&bCode=144816",
    },
    {
        id: 5,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/41c6f3be3c405646596239a68fac49dcd97cd3f7_1678730524.jpg?x-oss-process=image/quality,q_95/format,webp",
        linkHref: "https://www.digikala.com/landing/outlet1401/?&promo_name=%D8%A7%D9%86%D8%A8%D8%A7%D8%B1+%D8%AA%DA%A9%D8%A7%D9%86%DB%8C+%D8%A2%D8%AE%D8%B1+%D8%B3%D8%A7%D9%84&promo_position=home_slider_new_v2&promo_creative=144410&bCode=144410",
    },
    {
        id: 6,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/6fe555f9ff9a6d279cb2a8a936ce68529c4f2f36_1680173250.jpg?x-oss-process=image/quality,q_95/format,webp",
        linkHref: "https://www.digikala.com/landing/the-watch-offers/?&promo_name=%D8%A8%DB%8C%D8%B4%D8%AA%D8%B1%D8%A8%D9%86+%D8%AA%D8%AE%D9%81%DB%8C%D9%81+%D8%B3%D8%A7%D8%B9%D8%AA&promo_position=home_slider_new_v2&promo_creative=145397&bCode=145397",
    },
    {
        id: 7,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/488fa2081e1e73b17c53eaa62c107b66a553a585_1680341229.jpg?x-oss-process=image/quality,q_95/format,webp",
        linkHref: "https://fidibo.com/landings/character?utm_source=digikala&utm_medium=site&utm_campaign=game&promo_name=%D8%AC%D8%A7%D8%AA+%D8%AA%D9%88+%DA%A9%D8%AF%D9%88%D9%85+%D9%82%D8%B5%D9%87+%D8%AE%D8%A7%D9%84%DB%8C%D9%87%D8%9F&promo_position=home_slider_new_v2&promo_creative=145459&bCode=145459",
    },
    {
        id: 8,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/e7f258ec973c7e990f937eff5cc8262588487f53_1679378331.gif?x-oss-process=image?x-oss-process=image/format,webp",
        linkHref: "https://www.digikala.com/landing/best-selling-1401/?&promo_name=%D9%BE%D8%B1%D9%81%D8%B1%D9%88%D8%B4%E2%80%8C%D8%AA%D8%B1%DB%8C%D9%86&promo_position=home_slider_new_v2&promo_creative=145028&bCode=145028",
    },
    {
        id: 9,
        imgSrc: "https://dkstatics-public.digikala.com/digikala-adservice-banners/5668dea95a68668f943d325aff14e34f7bf9c9e9_1673600968.jpg?x-oss-process=image/quality,q_95/format,webp",
        linkHref: "https://www.digikala.com/landing/digiclub-gamenet/?&promo_name=%DB%8C%DA%A9+%D8%B9%D8%A7%D9%84%D9%85%D9%87+%D9%87%D8%AF%D8%A7%DB%8C%D8%A7%DB%8C+%D9%85%DB%8C%D9%84%DB%8C%D9%88%D9%86%DB%8C&promo_position=home_slider_new_v2&promo_creative=137063&bCode=137063",
    }
]

let pageLinkOfSwiper = $.querySelector("#linkPageOfSwiper");
let imgSrcOfSwiper = $.querySelector("#imageSwiper");
let toRightImgSwiper = $.querySelector("#toRightImgSwiper")
let toLeftImgSwiper = $.querySelector("#toLeftImgSwiper")
let indexOfImageSwiper = 0
setInterval(() => {
    forwardSwiperImage()
}, 1500)

function forwardSwiperImage() {
    if (indexOfImageSwiper === imagesOfSwiper.length - 1) indexOfImageSwiper = 0
    let indexImage = indexOfImageSwiper++
    pageLinkOfSwiper.href = imagesOfSwiper[indexImage].linkHref;
    imgSrcOfSwiper.src = imagesOfSwiper[indexImage].imgSrc;
}
function backwardSwiperImage() {
    if (indexOfImageSwiper === 0) indexOfImageSwiper = imagesOfSwiper.length - 1
    let indexImage = indexOfImageSwiper--
    pageLinkOfSwiper.href = imagesOfSwiper[indexImage].linkHref;
    imgSrcOfSwiper.src = imagesOfSwiper[indexImage].imgSrc;
}
toRightImgSwiper.addEventListener("click", forwardSwiperImage)
toLeftImgSwiper.addEventListener("click", backwardSwiperImage)


//swiper silder
const swiperSlide = $.querySelector(".swiper-slide"),
arrowIcon = $.querySelectorAll(".icon-swiper-slide i"),
firstImg = $.querySelectorAll(".swiper-slide-banner")[0]
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14
arrowIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        swiperSlide.scrollLeft += icon.id == "prevImageSlide" ? -firstImgWidth : firstImgWidth
    })
})
function dragStart(e) {
    isDragStart = true
    prevPageX = e.pageX
    prevScrollLeft = swiperSlide.scrollLeft
}
function dragging(e) {
    if (!isDragStart) return;
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX
    swiperSlide.scrollLeft = prevScrollLeft - positionDiff
}
function dragstop() {
    isDragStart = false
}
swiperSlide.addEventListener("mousedown", dragStart)
swiperSlide.addEventListener("mousemove", dragging)
swiperSlide.addEventListener("mouseup", dragstop)


// Scroll To Top

let scrollToTopLink = $.querySelector(".scrollToTopLink")
scrollToTopLink.addEventListener("click",()=>{
    window.scroll({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
})