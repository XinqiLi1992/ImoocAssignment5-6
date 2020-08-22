var screenAnimateElements = {
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

function setScreenElements(screenId) {
  const screen = document.querySelector(screenId);
  const screenElements = screenAnimateElements[screenId];
  let isAnimateSet = false;
  let isAnimateDone = false;

  screen.onclick = function() {
    if (isAnimateSet === false) {
      for (let i = 0; i < screenElements.length; i++) {
        const screenElement = screen.querySelector(screenElements[i]);
        screenElement.classList.add(screenElements[i].substring(1) + "--animate-init");
      }
      isAnimateSet = true;
    } else if (isAnimateDone === false) {
      for (let i = 0; i < screenElements.length; i++) {
        const screenElement = screen.querySelector(screenElements[i]);
        screenElement.className = screenElement.className.replace("animate-init", "animate-done");
      }
      isAnimateDone = true;
    } else {
      for (let i = 0; i < screenElements.length; i++) {
        const screenElement = screen.querySelector(screenElements[i]);
        screenElement.className = screenElement.className.replace("animate-done", "animate-init");
      }
      isAnimateDone = false;
    }
  }
}

for (k in screenAnimateElements) {
  setScreenElements(k);
}