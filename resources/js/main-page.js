requirejs(["environment"], function(envLib) {

  const REDIRECTABLE_LANGUAGES = {
    pl: true,
    en: true
  };

  function reloadRootPageWithEmptySearch() {
    if (envLib.isNoLanguageSetted() && envLib.getLocationSearch() === '') {
      const browserLang = envLib.getUserBrowserLanguage();

      if (REDIRECTABLE_LANGUAGES[browserLang] === true) {
        const url = envLib.getProtocol() + '//' + browserLang + '.' + envLib.getHostname();
        envLib.goToUrl(url);
      }
    }
  }

  reloadRootPageWithEmptySearch();

});
