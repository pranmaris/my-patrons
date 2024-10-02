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

  function getSearchParam(params, name) {
    return params.get(name);
  }

  function getSearchParamsString(params) {
    return params.toString();
  }

  function getUrlSearchParams() {
    const search = getSearch();

    return new URLSearchParams(search);
  }

  function goToUrl(url) {
    uEnv.getWindow().location = url;
  }

  function setSearchParam(params, name, value) {
    params.set(name, value);
  }

  return {
    getHostname,
    getSearch,
    getProtocol,

    getSearchParam,
    setSearchParam,

    getUrlSearchParams,
    getSearchParamsString,

    goToUrl
  };

});
