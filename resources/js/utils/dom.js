define(["environment"], function(uEnv) {

  function getElementById(id) {
    return uEnv.getDocument().getElementById(id);
  }

  function getStyle(element) {
    return element.style;
  }

  return {
    getElementById,
    getStyle
  };

});
