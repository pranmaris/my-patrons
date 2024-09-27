const SEARCH_QUERY_PARAM = 'q';

const MISSING_INDEX_OF_VALUE = -1;

const VISIBLE_STYLE = '';
const INVISIBLE_STYLE = 'display: none';

const DIRECTORY_LIST_ITEM_ELEMENT_CLASS = 'directory-list-item';
const SEARCH_INPUT_ELEMENT_ID = 'search-input';

function getLocationSearch() {
  return window.location.search;
}

function getUrlSearchParams() {
  const locationSearch = getLocationSearch();

  return new URLSearchParams(locationSearch);
}

function getUrlSearchParam(param) {
  const urlParams = getUrlSearchParams();

  return urlParams.get(param);
}

function refreshPageByButton() {
  const searchInput = document.getElementById(SEARCH_INPUT_ELEMENT_ID);

  refreshPage(searchInput.value ?? '');
}

function refreshPage(searchParam) {
  const searchInput = document.getElementById(SEARCH_INPUT_ELEMENT_ID);
  searchInput.value = searchParam;

  const searchString = getPreparedSearchString(searchParam);
  showOnlyMatchingElements(searchString);
}

function getDiacriticalRepresentationString(text) {
  return text
    .toLowerCase()
    .replace('ł', "l")
    .normalize("NFD")
    .replace(/(\p{Diacritic})/gu, '')
  ;
}

function getPreparedSearchString(string) {
  return getDiacriticalRepresentationString(string)
    .replace(/[^ a-z0-9]/g, '-')
    .replace(/\s+/g, '-')
    .trim()
  ;
}

function showOnlyMatchingElements(searchString) {
  const list = document.getElementsByClassName(DIRECTORY_LIST_ITEM_ELEMENT_CLASS);

  for (const element of list) {
    const name = getPreparedSearchString(element.innerHTML);
    const styleValue = name.match(new RegExp(searchString, 'g')) ? VISIBLE_STYLE : INVISIBLE_STYLE;

    element.style = styleValue;
    element.parentNode.style = styleValue;
  }
}

window.onload = function() {
  const searchParam = getUrlSearchParam(SEARCH_QUERY_PARAM);

  refreshPage(searchParam ?? '');
};
