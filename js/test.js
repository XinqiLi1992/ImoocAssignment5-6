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