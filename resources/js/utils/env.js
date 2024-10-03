define([], function() {

  function getDocument() {
    return document;
  }

  function getNavigator() {
    return navigator;
  }

  function getNewError() {
    return new Error();
  }

  function getWindow() {
    return window;
  }

  return {
    getDocument,
    getNavigator,
    getNewError,
    getWindow
  };

});
