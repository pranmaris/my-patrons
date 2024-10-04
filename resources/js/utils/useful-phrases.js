define(["const"], function(uConst) {

  uConst
    .set("USEFUL_PHRASES/CHECKBOX_CHECKED", "checked")

    .set("USEFUL_PHRASES/STYLE_DISPLAY_INVISIBLE", "display: none")
    .set("USEFUL_PHRASES/STYLE_DISPLAY_VISIBLE", "")

    .set("USEFUL_PHRASES/SELECT_OPTION_SELECTED", "selected")
  ;

  function getCheckboxChecked() {
    return uConst.get("USEFUL_PHRASES/CHECKBOX_CHECKED");
  }

  function getSelectOptionSelected() {
    return uConst.get("USEFUL_PHRASES/SELECT_OPTION_SELECTED");
  }

  function getStyleDisplayInvisible() {
    return uConst.get("USEFUL_PHRASES/STYLE_DISPLAY_INVISIBLE");
  }

  function getStyleDisplayVisible() {
    return uConst.get("USEFUL_PHRASES/STYLE_DISPLAY_VISIBLE");
  }

  return {
    getCheckboxChecked,
    getSelectOptionSelected,
    getStyleDisplayInvisible,
    getStyleDisplayVisible
  };

});
