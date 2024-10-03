define(["env"], function(uEnv) {

  function getMax() {
    const docElement = uEnv.getDocument().documentElement;
    const body = uEnv.getDocument().body;
    const win = uEnv.getWindow();

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      docElement.clientHeight,
      docElement.scrollHeight,
      docElement.offsetHeight
    ) - win.innerHeight;
  }

  function getOffset() {
    const docElement = uEnv.getDocument().documentElement;
    const win = uEnv.getWindow();

    return (win.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
  }

  return {
    getMax,
    getOffset
  };

});
