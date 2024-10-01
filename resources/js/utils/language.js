define(["environment", "location"], function(uEnv, uLocation) {

  function getLanguage() {
    const hostname = uLocation.getHostname();

    return hostname.replace(/\..*$/, "");
  }

  function isOriginalLanguageSet() {
    return getLanguage().length > 3;
  }

  function getUserBrowserLanguage() {
    const nav = uEnv.getNavigator();

    return (nav.language || nav.userLanguage).replace(/[-].*$/, "");
  }

  return {
    getLanguage,
    getUserBrowserLanguage,
    isOriginalLanguageSet
  };

});
