requirejs(["const", "dom", "env", "scroll"], function(uConst, uDom, uEnv, uScroll) {

  uConst
    .set("BUTTON_DOWN_ELEMENT_ID", "button-down")
    .set("BUTTON_UP_ELEMENT_ID", "button-up")
  ;

  function refreshUpDownButtons() {
    const buttonUp = uDom.getElementById(uConst.get("BUTTON_UP_ELEMENT_ID"));
    const buttonDown = uDom.getElementById(uConst.get("BUTTON_DOWN_ELEMENT_ID"));

    const scrollOffset = uScroll.getOffset();
    const scrollMax = uScroll.getMax();

    const isTop = scrollOffset === 0;
    const isBottom = scrollOffset === scrollMax;

    buttonUp.style.opacity = isTop ? 0 : 1;
    buttonDown.style.opacity = isBottom ? 0 : 1;
  }

  uEnv.getWindow().addEventListener("scroll", refreshUpDownButtons);

});
