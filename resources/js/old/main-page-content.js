const REDIRECTABLE_LANGUAGES = {
  pl: true,
  en: true
};

function getHostname() {
  return window.location.hostname.toLowerCase();
}

function getProtocol() {
  return window.location.protocol;
}

function getLanguage() {
  const hostname = getHostname();

  return hostname.replace(/\..*$/, '');
}

function getUserBrowserLanguage() {
  return (navigator.language || navigator.userLanguage).replace(/[-].*$/, '');
}

function getLocationSearch() {
  return window.location.search;
}

function getUrlSearchParams() {
  const locationSearch = getLocationSearch();

  return new URLSearchParams(locationSearch);
}

function isNoLanguageSet() {
  return getLanguage().length > 3;
}

function goToUrl(url) {
  window.location = url;
}

function reloadRootPageWithEmptySearch() {
  if (isNoLanguageSet() && getLocationSearch() === '') {
    const browserLang = getUserBrowserLanguage();

    if (REDIRECTABLE_LANGUAGES[browserLang] === true) {
      const url = getProtocol() + '//' + browserLang + '.' + getHostname();
      goToUrl(url);
    }
  }
}

reloadRootPageWithEmptySearch();
