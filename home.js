// Hone javascript
document.addEventListener("DOMContentLoaded", function () {
  let searchBox = document.getElementById("search-box");
  let searchIcon = document.getElementById("search-icon");
  let closeIcon = document.getElementById("close-icon");
  let searchBlack = document.getElementById("search-icon-black");
  let searchInput = document.getElementById("search-input");
  let menu = document.getElementById("menu");
  let logoHeader = document.getElementById("logo-header");
  let homeIcon = document.getElementById("home-icon");
  let centerLogo = document.getElementById("center-logo");
  let searchCircle = document.getElementById("search-icon-circle");
  let searchPath = document.getElementById("search-icon-path");
  let closeCircle = document.getElementById("close-circle");
  let closePath = document.getElementById("close-path");
  let searchBtn1 = document.getElementById("search-icon-path-btn");
  let searchBtn2 = document.getElementById("search-icon-btn");
  let containerMenu = document.getElementById("container-menu");
  let scrollDown = document.getElementById("scroll-down");
  let menuItems = document.getElementById("menu-items");
  let burgerMenu = document.getElementById("burger-menu");
  let closeMenu = document.getElementById("close-menu");
  let header = document.getElementById("header");
  let spaceTop = document.getElementById("space-top");

  // Search Box
  let searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", () => {
    let isSearcBoxOpen = searchBox.style.width;
    if (isSearcBoxOpen === "0px" || "") {
      searchIcon.style.display = "none";
      closeIcon.style.display = "block";
      searchBox.style.opacity = "1";
      searchBox.style.pointerEvents = "all";
      if (!window.innerWidth <= "768px") {
        searchBox.style.width = "350px";
      } else {
        searchBox.style.width = "290px";
      }
      searchInput.focus();
    } else {
      searchIcon.style.display = "block";
      closeIcon.style.display = "none";
      searchBox.style.opacity = "0";
      searchBox.style.width = "0px";
      searchBox.style.pointerEvents = "none";
    }
  });

  // window.onscroll = navbar;
  let heroBox = document.getElementById("hero-box");
  function navbar() {
    if (scrollDown) {
      if (window.scrollY >= scrollDown.offsetTop) {
        menu.classList.remove("change-header");
        menu.classList.remove("main-menu");
        menu.classList.add("menu");
        menu.classList.add("menu-sticky");
        centerLogo.style.display = "none";
        homeIcon.style.display = "block";
        searchCircle.style.stroke = "#626E94";
        searchPath.style.stroke = "#626E94";
        closeCircle.style.stroke = "#626E94";
        closePath.style.stroke = "#626E94";
        burgerMenu.classList.remove("burger-color");
        closeMenu.classList.remove("close-color");
        // search box
        searchBox.classList.add("search-bg-white");
        searchBox.classList.add("search-box-bg");
        searchBtn1.style.stroke = "#626E94";
        searchBtn2.style.stroke = "#626E94";
        searchInput.style.color = "#626E94";
        searchInput.style.borderBottomColor = "#626E94";
        changeHomeLanBtn.style.color = "#626E94";
        spaceTop.style.display = "block";
      }
      if (window.scrollY < 200) {
        menu.classList.remove("menu-sticky");
        menu.classList.remove("menu");
        menu.classList.add("change-header");
        menu.classList.add("main-menu");
        changeHomeLanBtn.style.color = "#F7F9FC";
        burgerMenu.classList.add("burger-color");
        closeMenu.classList.add("close-color");
        spaceTop.style.display = "none";
        centerLogo.style.display = "block";
        // logoHeader.style.display = "none";
        homeIcon.style.display = "none";
        searchCircle.style.stroke = "#F7F9FC";
        searchPath.style.stroke = "#F7F9FC";
        closeCircle.style.stroke = "#F7F9FC";
        closePath.style.stroke = "#F7F9FC";
        searchBox.classList.remove("search-bg-white");
        searchBox.classList.add("search-box-bg");
        searchBtn1.style.stroke = "#F7F9FC";
        searchBtn2.style.stroke = "#F7F9FC";
        searchInput.style.color = "#F7F9FC";
        searchInput.style.borderBottomColor = "#F7F9FC";
      }
    }
  }

  //  carousel
  var newsSwiper = new Swiper(".news-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  var achivementSwiper = new Swiper(".achieve-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  var eventSwiper = new Swiper(".event-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1140: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  var systemSwiper = new Swiper(".system-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      420: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1140: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });
  var systemSwiper = new Swiper(".news-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  var homeNewSwiper = new Swiper(".home-news-swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  var achiveSwiper = new Swiper(".achive-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // // Responsive Menu
  let openMenu = document.getElementById("open-menu");
  let menuLists = document.getElementById("menu-lists");
  let responsiveCloseMenu = document.getElementById("responsive-close-menu");
  // let backdrop = document.getElementById("backdrop");
  openMenu.addEventListener("click", () => {
    if (menuLists.style.margin === "1px") {
      document.body.style.overflow = "hidden";
      menuLists.style.margin = "0px";
      menuLists.style.top = "0";
      menuLists.style.height = "500px";
      menuLists.style.overflow = "scroll";
      burgerMenu.style.display = "none";
      closeMenu.style.display = "block";
    } else {
      document.body.style.overflow = "auto";
      menuLists.style.margin = "1px";
      menuLists.style.height = "0px";
      menuLists.style.top = "-100%";
      menuLists.style.overflow = "hidden";
      burgerMenu.style.display = "block";
      closeMenu.style.display = "none";
    }
  });
  responsiveCloseMenu.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    menuLists.style.margin = "1px";
    menuLists.style.height = "0px";
    menuLists.style.top = "-100%";
    menuLists.style.overflow = "hidden";
    burgerMenu.style.display = "block";
    closeMenu.style.display = "none";
  });
  document.body.addEventListener("click", (e) => {
    if (
      !menuLists.contains(e.target) &&
      e.target.id !== "burger-menu" &&
      menuLists.style.margin === "0px"
    ) {
      document.body.style.overflow = "auto";
      menuLists.style.margin = "1px";
      menuLists.style.height = "0px";
      menuLists.style.top = "-100%";
      menuLists.style.overflow = "hidden";
      burgerMenu.style.display = "block";
      closeMenu.style.display = "none";
    }
  });
  // Menu scroll
  let body = document.getElementById("body");
  let prevScrollpos = window.pageYOffset;
  function stickyMenu() {
    if (body && menuLists.style.margin === "1px") {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("menu-sticky").style.top = "0";
      } else {
        document.getElementById("menu-sticky").style.top = "-110%";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  // Number counter
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  let halfCircle = document.getElementById("half-circle");
  let obj1 = document.getElementById("num1");
  let obj2 = document.getElementById("num2");
  let obj3 = document.getElementById("num3");
  let obj4 = document.getElementById("num4");
  let counter = false;
  function numberCountr() {
    if (halfCircle) {
      let e1 = halfCircle.getBoundingClientRect();
      if (e1.top >= 0 && e1.bottom <= window.innerHeight && !counter) {
        counter = true;
        animateValue(obj1, 0, 360, 4000);
        animateValue(obj2, 0, 360, 4000);
        animateValue(obj3, 0, 360, 4000);
        animateValue(obj4, 0, 360, 4000);
      }
    }
  }
  window.onscroll = () => {
    numberCountr();
    navbar();
    stickyMenu();
  };

  //change index page languge
  let changeBtn = document.getElementById("change-btn");
  let menuList = document.querySelector(".menu-list");
  let heroText = document.getElementById("btn-news");
  let arrowHero = document.getElementById("arrow-hero");
  let newNewsArrow = document.getElementById("new-news-arrow");
  let someNewsUl = document.getElementById("some-news");
  let someNewsSwiper = document.getElementById("some-news-swiper");
  let achiveArrow = document.getElementById("achive-arrow");
  let eventSec = document.getElementById("event");
  let showMore = document.getElementById("show-more-hero");
  let linkBtn = document.querySelector(".link-btn");
  let indexAchieveSwiper = document.getElementById("achieve-swiper");
  let indexAchieveSwiperUl = document.getElementById("achieve-swiper-ul");
  let indexEventSwiper = document.getElementById("event-swiper");
  let indexEventSwiperUl = document.getElementById("event-swiper-ul");
  let indexSystemSwiper = document.getElementById("system-swiper");
  let indexSystemSwiperUl = document.getElementById("system-swiper-ul");
  if (changeBtn) {
    changeBtn.addEventListener("click", () => {
      if (document.body.dir === "rtl") {
        document.body.dir = "ltr";
        changeBtn.innerText = "Fa";
        menuList.classList.add("left-menu");
        searchBox.style.left = "auto";
        searchBox.style.right = "0";
        heroText.style.textAlign = "right";
        arrowHero.style.rotate = "180deg";
        newNewsArrow.style.rotate = "180deg";
        someNewsUl.classList.add("some-news-left");
        someNewsUl.style.direction = "rtl";
        someNewsSwiper.style.direction = "rtl";
        indexAchieveSwiper.style.direction = "rtl";
        indexAchieveSwiperUl.style.direction = "rtl";
        indexEventSwiper.style.direction = "rtl";
        indexEventSwiperUl.style.direction = "rtl";
        indexSystemSwiper.style.direction = "rtl";
        indexSystemSwiperUl.style.direction = "rtl";
        achiveArrow.style.rotate = "180deg";
        eventSec.classList.add("arrow-left");
        linkBtn.classList.add("arrow-left");
        showMore.style.margin = "0 10px";
        menuLists.classList.add("menu-list-en");
      } else {
        menuLists.classList.remove("menu-list-en");
        document.body.dir = "rtl";
        changeBtn.innerText = "En";
        menuList.classList.remove("left-menu");
        searchBox.style.left = "0";
        searchBox.style.right = "auto";
        heroText.style.textAlign = "left";
        arrowHero.style.rotate = "0deg";
        newNewsArrow.style.rotate = "0deg";
        someNewsUl.classList.remove("some-news-left");
        achiveArrow.style.rotate = "0deg";
        eventSec.classList.remove("arrow-left");
        linkBtn.classList.remove("arrow-left");
        showMore.style.margin = "0";
      }
    });
  }
  // changeBtn.addEventListener("click", changeIndexLan);

  // change news page language
  let changeNewsLanBtn = document.getElementById("change-news-lan");
  let newsSlider = document.getElementById("news-slider");
  let newsSliderUl = document.getElementById("news-slider-ul");

  if (changeNewsLanBtn) {
    function changeNewsLan() {
      if (document.body.dir === "rtl") {
        document.body.dir = "ltr";
        changeNewsLanBtn.innerText = "Fa";
        menuList.classList.add("left-menu");
        searchBox.style.left = "auto";
        searchBox.style.right = "0";
        newsSlider.style.direction = "rtl";
        newsSliderUl.style.direction = "rtl";
        menuLists.classList.add("menu-list-en");
      } else {
        menuLists.classList.remove("menu-list-en");
        document.body.dir = "rtl";
        changeNewsLanBtn.innerText = "En";
        menuList.classList.remove("left-menu");
        searchBox.style.left = "0";
        searchBox.style.right = "auto";
      }
    }
    changeNewsLanBtn.addEventListener("click", changeNewsLan);
  }
  let changeHomeLanBtn = document.getElementById("change-home-lan");
  let homeSomeNewsUl = document.getElementById("some-news-home-ul");
  let homeSomeNews = document.getElementById("some-news-home");
  let homeEventSec = document.getElementById("home-event");
  let systemContainer = document.getElementById("system-container");
  let homeNewsArrow = document.getElementById("home-news-arrow");
  let homeAchiveArrow = document.getElementById("home-achive-arrow");
  let homeEventSwiperUl = document.getElementById("home-event-swiper-ul");
  let homeEventSwiper = document.getElementById("home-event-swiper");
  let homeAchiveSwiperUl = document.getElementById("home-achive-swiper-ul");
  let homeAchiveSwiper = document.getElementById("home-achive-swiper");
  let firstArchive = document.getElementById("first-archive");
  let secendArchive = document.getElementById("secend-archive");
  let homeFirstSystemSwiperUl = document.getElementById(
    "home-first-system-swiper-ul"
  );
  let homeFirstSystemSwiper = document.getElementById(
    "home-first-system-swiper"
  );
  let homeSecendSystemSwiperUl = document.getElementById(
    "home-secend-system-swiper-ul"
  );
  let homeSecendSystemSwiper = document.getElementById(
    "home-secend-system-swiper"
  );

  if (changeHomeLanBtn) {
    function changeHomeLan() {
      if (document.body.dir === "rtl") {
        document.body.dir = "ltr";
        changeHomeLanBtn.innerText = "Fa";
        menuList.classList.add("left-menu");
        searchBox.style.left = "auto";
        searchBox.style.right = "0";
        homeSomeNewsUl.classList.add("some-news-left");
        homeNewsArrow.style.rotate = "180deg";
        homeEventSec.classList.add("arrow-left");
        homeAchiveArrow.style.rotate = "180deg";
        halfCircle.style.padding = "0px";
        systemContainer.classList.add("arrow-left");
        homeSomeNews.style.direction = "rtl";
        homeSomeNewsUl.style.direction = "rtl";
        homeEventSwiperUl.style.direction = "rtl";
        homeEventSwiper.style.direction = "rtl";
        homeAchiveSwiperUl.style.direction = "rtl";
        homeAchiveSwiper.style.direction = "rtl";
        homeFirstSystemSwiperUl.style.direction = "rtl";
        homeFirstSystemSwiper.style.direction = "rtl";
        homeSecendSystemSwiperUl.style.direction = "rtl";
        homeSecendSystemSwiper.style.direction = "rtl";
        firstArchive.classList.add("arcvhive-left");
        secendArchive.classList.add("arcvhive-left");
      } else {
        document.body.dir = "rtl";
        changeHomeLanBtn.innerText = "En";
        menuList.classList.remove("left-menu");
        searchBox.style.left = "0";
        searchBox.style.right = "auto";
        homeSomeNewsUl.classList.remove("some-news-left");
        homeNewsArrow.style.rotate = "0deg";
        homeEventSec.classList.remove("arrow-left");
        homeAchiveArrow.style.rotate = "0deg";
        halfCircle.style.padding = "0px";
        systemContainer.classList.remove("arrow-left");
        firstArchive.classList.remove("arcvhive-left");
        secendArchive.classList.remove("arcvhive-left");
      }
    }
    changeHomeLanBtn.addEventListener("click", changeHomeLan);
  }
});
