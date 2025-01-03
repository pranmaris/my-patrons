requirejs(["const", "dom", "env", "scroll"], function(uConst, uDom, uEnv, uScroll) {

  uConst
    .set("BUTTON_UP_ELEMENT_ID", "button-up")
  ;

  function refreshUpButton() {
    const buttonUp = uDom.getElementById(uConst.get("BUTTON_UP_ELEMENT_ID"));
    const scrollOffset = uScroll.getOffset();
    const isTop = scrollOffset === 0;

    buttonUp.style.opacity = isTop ? 0 : 1;
  }

  uEnv.getWindow().addEventListener("scroll", refreshUpButton);

});
