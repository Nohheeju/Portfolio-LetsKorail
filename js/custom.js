/*sitemap 클릭시 menu 펼쳐지게 하기*/
let siteMap = document.querySelector(".siteMap"),
  header = document.querySelector("header"),
  sub = document.querySelector(".sub"),
  siteMapBtn = document.querySelector(".siteMap_btn.two"),
  menu = document.querySelector(".nav .lnb .menu"),
  body = document.querySelector("body");

siteMap.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
  sub.classList.toggle("active");
  menu.classList.toggle("active");
  siteMapBtn.classList.toggle("active");
  body.classList.toggle("active");
});

//서브메뉴
let subMenu = document.querySelectorAll(".subMenu ul"),
  mainMenu = document.querySelectorAll(".nav .lnb .menu > li > a");

mainMenu.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    showMenu(idx);
    activeBg(idx);
  });
});
showMenu(0);
function showMenu(num) {
  subMenu.forEach(function (item) {
    item.style.display = "none";
  });
  subMenu[num].style.display = "block";
}
function activeBg(num) {
  mainMenu.forEach(function (item) {
    item.classList.remove("active");
  });
  mainMenu[num].classList.add("active");
}

//예매탭
let targetLink = document.querySelectorAll(".ticketing_tap a");
let first = document.querySelector(".ticketing_tap .first");
let tab = document.querySelectorAll(".ticketing_tap .tab");
let tabContent = document.querySelectorAll(".ticketing_tap_content > div");
document.getElementById("ticket_reservation").style.display = "flex";
for (let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function (e) {
    e.preventDefault();
    let orgTarget = e.target.getAttribute("href");
    let tabTarget = orgTarget.replace("#", "");
    for (let x = 0; x < tabContent.length; x++) {
      tabContent[x].style.display = "none";
    }
    document.getElementById(tabTarget).style.display = "flex";
    for (let j = 0; j < targetLink.length; j++) {
      targetLink[j].classList.remove("active");
      e.target.classList.add("active");
    }
  });
}
for (let k = 0; k < tab.length; k++) {
  tab[k].addEventListener("click", function (n) {
    first.classList.add("none");
  });
}
first.addEventListener("click", function () {
  first.classList.remove("none");
});

//뉴스탭
let newsTab = document.querySelectorAll(".newsEvent_tab li a");
let newsCon = document.querySelectorAll(".newsEvent_tab_content > div");
function showContent(num) {
  newsCon.forEach(function (item) {
    item.style.display = "none";
  });
  newsCon[num].style.display = "flex";
}
showContent(0);
function activeTab(num) {
  newsTab.forEach(function (item) {
    item.classList.remove("active");
  });
  newsTab[num].classList.add("active");
}
activeTab(0);

newsTab.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    showContent(idx);
    activeTab(idx);
  });
});

// 뉴스 슬라이드 영역
var swiper = new Swiper(".newsCard", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

// 할인 승차권

// Best 상품 슬라이드영역
var swiper = new Swiper(".itemBest", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "1",
  slidesPerGroup: 2,
  spaceBetween: 75,
  breakpoints: {
    1300: { spaceBetween: 0 },
    0: { spaceBetween: 0 },
  },
});

let title = document.querySelectorAll(".korail_itemBest_title h4");
let bar = document.querySelectorAll(".itemBest .swiper-pagination-bullet");
let prevButton = document.querySelector(
  ".korail_itemBest_slide_wrap .swiper-button-prev"
);
let nextButton = document.querySelector(
  ".korail_itemBest_slide_wrap .swiper-button-next"
);
let best = document.querySelector(".korail_itemBest_title .best");
let rank = document.querySelector(".korail_itemBest_title .rank");

prevButton.addEventListener("click", function () {
  best.style.display = "block";
  rank.style.display = "none";
});
nextButton.addEventListener("click", function () {
  best.style.display = "none";
  rank.style.display = "block";
});

function showTitle(num) {
  title.forEach(function (item) {
    item.style.display = "none";
  });
  title[num].style.display = "block";
}
bar.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    showTitle(idx);
  });
});

/* open_modal */
const loginBtn = document.querySelector(".btn-login");
const login = document.querySelector(".open_modal-wrap");
const closeBtn = document.querySelector(".close_modal");

function togglelogin() {
  login.classList.toggle("active");
}

loginBtn.addEventListener("click", togglelogin);
closeBtn.addEventListener("click", togglelogin);
