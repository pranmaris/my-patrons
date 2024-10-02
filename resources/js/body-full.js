requirejs(["dom", "environment", "scroll"], function(uDom, uEnv, uScroll) {

  function refreshUpDownButtons() {
    const buttonUp = uDom.getElementById("button-up");
    const buttonDown = uDom.getElementById("button-down");

    const scrollOffset = uScroll.getOffset();
    const scrollMax = uScroll.getMax();

    const isTop = scrollOffset === 0;
    const isBottom = scrollOffset === scrollMax;

    buttonUp.style.opacity = isTop ? 0 : 1;
    buttonDown.style.opacity = isBottom ? 0 : 1;
  }

  uEnv.getWindow().addEventListener("scroll", refreshUpDownButtons);

});
