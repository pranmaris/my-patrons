define([], function() {

  function getDocument() {
    return document;
  }

  function getNavigator() {
    return navigator;
  }

  function getWindow() {
    return window;
  }

  return {
    getDocument,
    getNavigator,
    getWindow
  };

});
