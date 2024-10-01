requirejs(["dom", "environment", "scroll"], function(uDom, uEnv, uScroll) {

  function refreshUpDownButtons() {
    const buttonUp = uDom.getElementById("button-up");
    const buttonDown = uDom.getElementById("button-down");

    const scrollOffset = uScroll.getOffset();
    const scrollMax = uScroll.getMax();

    const isTop = scrollOffset === 0;
    const isBottom = scrollOffset === scrollMax;

    uDom.getStyle(buttonUp).opacity = isTop ? 0 : 1;
    uDom.getStyle(buttonDown).opacity = isBottom ? 0 : 1;
  }

  uEnv.getWindow().addEventListener("scroll", refreshUpDownButtons);

});
