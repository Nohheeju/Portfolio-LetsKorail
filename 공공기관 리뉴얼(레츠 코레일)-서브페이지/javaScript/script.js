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
/*
// 헤더 스크롤
let TOP = window.pageYOffset || document.documentElement.scrollTop;
let logoImg = document.querySelector(".logo a img");

function changeLogoSrc(src) {
  logoImg.setAttribute("src", src); //로고이미지 소스 변경
}
function scrollAction() {
  TOP = window.pageYOffset || document.documentElement.scrollTop; //스크롤 위치 업데이트
  //스크롤 양이 0
  //스크롤 양이 0보다 크면
  if (TOP === 0) {
    //로고에 소스가 변경된다
    header.classList.remove("on");
    changeLogoSrc("img/logo.svg");
  } else {
    header.classList.add("on");
    changeLogoSrc("img/logo_movile.svg");
  }
}
window.addEventListener("scroll", scrollAction);
*/

// 공지사항&관광이벤트 탭
let tab = document.querySelectorAll(".tab_menu li a");
let tabcon = document.querySelectorAll(".notice_bottom.inner > div");

function showContent(num) {
  tabcon.forEach(function (item) {
    item.style.display = "none";
  });
  tabcon[num].style.display = "flex";
}
showContent(0);

function activeTab(num) {
  tab.forEach(function (item) {
    item.classList.remove("active");
  });
  tab[num].classList.add("active");
}
activeTab(0);

tab.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    showContent(idx);
    activeTab(idx);
  });
});

// 공지사항 테이블
let rowsPerPage = 10;
let rows = document.querySelectorAll("#my-table1 tbody tr");
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage);
let numbers = document.querySelector("#numbers1");

for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

let numberBtn = numbers.querySelectorAll("a");

numberBtn.forEach(function (item, idx) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    displayRows(idx);
    activenumbers1(idx);
  });
});
function displayRows(idx) {
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = [...rows];

  for (ra of rowsArray) {
    ra.style.display = "none";
  }
  let newRows = rowsArray.slice(start, end);
  for (nr of newRows) {
    nr.style.display = "";
  }
}
displayRows(0);
function activenumbers1(num) {
  numberBtn.forEach(function (item) {
    item.classList.remove("active");
  });
  numberBtn[num].classList.add("active");
}
activenumbers1(0);

// 관광이벤트 테이블
// 공지사항 테이블
let rowsPerPage2 = 10;
let rows2 = document.querySelectorAll("#my-table2 tbody tr");
let rowsCount2 = rows2.length;
let pageCount2 = Math.ceil(rowsCount2 / rowsPerPage2);
let numbers2 = document.querySelector("#numbers2");

for (let i = 1; i <= pageCount2; i++) {
  numbers2.innerHTML += `<li><a href="">${i}</a></li>`;
}

let numberBtn2 = numbers2.querySelectorAll("a");

numberBtn2.forEach(function (item, idx) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    displayRowss(idx);
    activenumbers2(idx);
  });
});
function displayRowss(idx) {
  let started = idx * rowsPerPage2;
  let endd = started + rowsPerPage2;
  let rowsArrayd = [...rows2];

  for (ra of rowsArrayd) {
    ra.style.display = "none";
  }

  let newRowss = rowsArrayd.slice(started, endd);
  for (nr of newRowss) {
    nr.style.display = "";
  }
}
displayRowss(0);
function activenumbers2(num) {
  numberBtn2.forEach(function (item) {
    item.classList.remove("active");
  });
  numberBtn2[num].classList.add("active");
}
activenumbers2(0);

/* open_modal */
const loginBtn = document.querySelector(".btn-login");
const login = document.querySelector(".open_modal-wrap");
const closeBtn = document.querySelector(".close_modal");

function togglelogin() {
  login.classList.toggle("active");
}

loginBtn.addEventListener("click", togglelogin);
closeBtn.addEventListener("click", togglelogin);
