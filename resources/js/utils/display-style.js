define(["const"], function(uConst) {

  uConst
    .set("DISPLAY_STYLE/INVISIBLE_STYLE", "display: none")
    .set("DISPLAY_STYLE/VISIBLE_STYLE", "")
  ;

  function getInvisible() {
    return uConst.get("DISPLAY_STYLE/INVISIBLE_STYLE");
  }

  function getVisible() {
    return uConst.get("DISPLAY_STYLE/VISIBLE_STYLE");
  }

  return {
    getVisible,
    getInvisible
  };

});
