requirejs(["env", "language", "location"], function(uEnv, uLanguage, uLocation) {

  const REDIRECTABLE_LANGUAGES = {
    pl: true,
    en: true
  };

  uEnv.getWindow().onload = function() {
    if (uLanguage.isOriginalLanguageSet() && uLocation.getSearch() === "") {
      const browserLang = uLanguage.getUserBrowserLanguage();

      if (REDIRECTABLE_LANGUAGES[browserLang] === true) {
        const url = uLocation.getProtocol() + "//" + browserLang + "." + uLocation.getHostname();
        uLocation.goToUrl(url);
      }
    }
  }

});
