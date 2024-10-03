define(["env"], function(uEnv) {

  function getElementById(id) {
    return uEnv.getDocument().getElementById(id);
  }

  function getElementsByClassName(className) {
    return uEnv.getDocument().getElementsByClassName(className);
  }

  return {
    getElementById,
    getElementsByClassName,
  };

});
