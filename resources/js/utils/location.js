define(["environment"], function(uEnv) {

  function getLocation() {
    return uEnv.getWindow().location;
  }

  function getHostname() {
    return getOriginalHostname().toLowerCase();
  }

  function getOriginalHostname() {
    return getLocation().hostname;
  }

  function getProtocol() {
    return getLocation().protocol;
  }

  function getSearch() {
    return getLocation().search;
  }

  function getSearchParams() {
    const search = getSearch();

    return new URLSearchParams(search);
  }

  function goToUrl(url) {
    uEnv.getWindow().location = url;
  }

  return {
    getHostname,
    getSearch,
    getSearchParams,
    getProtocol,

    goToUrl
  };

});
