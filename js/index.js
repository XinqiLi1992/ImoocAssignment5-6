const navItems = getAllElem(".header__nav__item");
const navUnderline = getElem(".header__nav__underline");

function switchNavItemsActive(index) {
  for (let i = 0; i < navItems.length; i++) {
    removeCls(navItems[i], "header__nav__item--status-active");
  }

  addCls(navItems[index], "header__nav__item--status-active");
  navUnderline.style.left = `${104 * index}px`;
}

function initNavItemsUnderline() {
  for (let i = 0; i < navItems.length - 1; i++) {
    const navItem = navItems[i];

    navItem.onmouseover = function() {
      navUnderline.style.left = `${104 * i}px`;
    }

    navItem.onmouseout = function() {
      let activeIndex = 0;
      for (let i = 0; i < navItems.length - 1; i++) {
        if (navItems[i].classList.contains("header__nav__item--status-active")) {
          activeIndex = i;
          break;
        }
      }

      navUnderline.style.left = `${activeIndex * 104}px`;
    }
  }
}

function initNavigation(elements) {
  for(let i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
      setScrollY(640 * i - 60);
    }
  }
}

const screenAnimateElements = {
  ".screen-1": [
    ".screen-1__heading",
    ".screen-1__subheading"
  ],
  ".screen-2": [
    ".screen-2__heading",
    ".screen-2__heading__underline",
    ".screen-2__subheading",
    ".screen-2__person",
    ".screen-2__rocket"
  ],
  ".screen-3": [
    ".screen-3__heading",
    ".screen-3__heading__underline",
    ".screen-3__subheading",
    ".screen-3__react",
    ".screen-3__tech"
  ],
  ".screen-4": [
    ".screen-4__heading",
    ".screen-4__heading__underline",
    ".screen-4__subheading",
    ".screen-4__env"
  ],
  ".screen-5": [
    ".screen-5__heading",
    ".screen-5__heading__underline",
    ".screen-5__subheading",
    ".screen-5__person"
  ]
}

function initScreenAnimate(screenId) {
  const screen = document.querySelector(screenId);
  const screenElements = screenAnimateElements[screenId];
  for (let i = 0; i < screenElements.length; i++) {
    const screenElement = screen.querySelector(screenElements[i]);
    screenElement.classList.add(screenElements[i].substring(1) + "--animate-init");
  }
}

function playScreenAnimate(screenId) {
  const screen = document.querySelector(screenId);
  const screenElements = screenAnimateElements[screenId];
  for (let i = 0; i < screenElements.length; i++) {
    const screenElement = screen.querySelector(screenElements[i]);
    screenElement.className = screenElement.className.replace("animate-init", "animate-done");
  }
}

window.onscroll = function() {
  const header = getElem(".header");
  let scrollY = getScrollY();

  if (scrollY > 80) {
    addCls(header, "header--bg-white");
  } else {
    removeCls(header, "header--bg-white");
    switchNavItemsActive(0);
  }

  if (scrollY > (640 * 1 - 80)) {
    switchNavItemsActive(1);
    playScreenAnimate(".screen-2");
  }
  if (scrollY > (640 * 2 - 80)) {
    switchNavItemsActive(2);
    playScreenAnimate(".screen-3");
  }
  if (scrollY > (640 * 3 - 80)) {
    switchNavItemsActive(3);
    playScreenAnimate(".screen-4");
  }
  if (scrollY > (640 * 4 - 80)) {
    switchNavItemsActive(4);
    playScreenAnimate(".screen-5");
  }
}


initNavItemsUnderline();
initNavigation(navItems);

setTimeout(function(){playScreenAnimate('.screen-1');},100)

for (k in screenAnimateElements) {
  if (k !== ".screen-1") {
    initScreenAnimate(k);
  }
}