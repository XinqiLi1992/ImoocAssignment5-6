function getElem(selector) {
  return document.querySelector(selector);
}

function getAllElem(selector) {
  return document.querySelectorAll(selector);
}

function addCls(element, cls) {
  element.classList.add(cls);
}

function removeCls(element, cls) {
  element.classList.remove(cls);
}

function getScrollY() {
  let scrollY;
  if (typeof(window.pageYOffset) == 'number') {
    scrollY = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    scrollY = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    scrollY = document.documentElement.scrollTop;
  }

  return scrollY;
}

function setScrollY(scrollY) {
  console.log("scroll" + scrollY);

  // document.documentElement.scrollTop = scrollY;
  document.body.scrollTop = scrollY;

}