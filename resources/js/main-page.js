requirejs(["const", "env", "language", "location"], function(uConst, uEnv, uLanguage, uLocation) {

  uConst
    .set("MAIN_PAGE/REDIRECTABLE_LANGUAGES", {
      pl: true,
      en: true
    })
  ;

  uEnv.getWindow().onload = function() {
    if (uLanguage.isOriginalLanguageSet() && uLocation.getSearch() === "") {
      const browserLang = uLanguage.getUserBrowserLanguage();

      if (uConst.get("MAIN_PAGE/REDIRECTABLE_LANGUAGES")[browserLang] === true) {
        const url = uLocation.getProtocol() + "//" + browserLang + "." + uLocation.getHostname();
        uLocation.goToUrl(url);
      }
    }
  }

});
