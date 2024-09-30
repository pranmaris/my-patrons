define([], function() {

  function getProtocol() {
    return window.location.protocol;
  }

  function getHostname() {
    return window.location.hostname.toLowerCase();
  }

  function getLocationSearch() {
    return window.location.search;
  }

  //function getUrlSearchParams() {
    //const locationSearch = getLocationSearch();

    //return new URLSearchParams(locationSearch);
  //}

  function getLanguage() {
    const hostname = getHostname();

    return hostname.replace(/\..*$/, '');
  }

  function isNoLanguageSetted() {
    return getLanguage().length > 3;
  }

  function getUserBrowserLanguage() {
    return (navigator.language || navigator.userLanguage).replace(/[-].*$/, '');
  }

  function goToUrl(url) {
    window.location = url;
  }

  return {
    getHostname,
    getLocationSearch,
    getProtocol,
    getUserBrowserLanguage,
    goToUrl,
    isNoLanguageSetted
  };

});
