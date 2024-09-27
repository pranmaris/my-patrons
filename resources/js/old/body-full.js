function refreshUpDownButtons() {
  const buttonUp = document.getElementById("button-up");
  const buttonDown = document.getElementById("button-down");

  const doc = document.documentElement;
  const body = document.body;

  const scrollOffset = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  const scrollMax = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    doc.clientHeight,
    doc.scrollHeight,
    doc.offsetHeight
  ) - window.innerHeight;

  const isTop = scrollOffset === 0;
  const isBottom = scrollOffset === scrollMax;

  buttonUp.style.opacity = isTop ? 0 : 1;
  buttonDown.style.opacity = isBottom ? 0 : 1;
}

window.addEventListener("scroll", refreshUpDownButtons);
