requirejs(["const", "env", "language", "location"], function(uConst, uEnv, uLanguage, uLocation) {

  uConst
    .set("REDIRECTABLE_LANGUAGES", {
      pl: true,
      en: true
    })
  ;

  uEnv.getWindow().onload = function() {
    if (uLanguage.isOriginalLanguageSet() && uLocation.getSearch() === "") {
      const browserLang = uLanguage.getUserBrowserLanguage();

      if (uConst.get("REDIRECTABLE_LANGUAGES")[browserLang] === true) {
        const url = uLocation.getProtocol() + "//" + browserLang + "." + uLocation.getHostname();
        uLocation.goToUrl(url);
      }
    }
  }

});
