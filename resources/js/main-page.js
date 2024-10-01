requirejs(["language", "location"], function(uLanguage, uLocation) {

  const REDIRECTABLE_LANGUAGES = {
    pl: true,
    en: true
  };

  function reloadRootPageWithEmptySearch() {
    if (uLanguage.isOriginalLanguageSet() && uLocation.getSearch() === "") {
      const browserLang = uLanguage.getUserBrowserLanguage();

      if (REDIRECTABLE_LANGUAGES[browserLang] === true) {
        const url = uLocation.getProtocol() + "//" + browserLang + "." + uLocation.getHostname();
        uLocation.goToUrl(url);
      }
    }
  }

  reloadRootPageWithEmptySearch();

});
