requirejs(["dom", "displayStyle", "environment", "location"], function(uDom, uDisplayStyle, uEnv, uLocation) {

  const SEARCH_QUERY_PARAM = 'q';

  const DIRECTORY_LIST_ITEM_ELEMENT_CLASS = 'directory-list-item';
  const NOT_FOUND_ELEMENT_ID = 'directory-not-found';
  const SEARCH_INPUT_ELEMENT_ID = 'search-input';

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

  function displayOnlyMatchingElements(searchString) {
    const list = uDom.getElementsByClassName(DIRECTORY_LIST_ITEM_ELEMENT_CLASS);

    const visible = uDisplayStyle.getVisible();
    const invisible = uDisplayStyle.getInvisible();

    const notFound = uDom.getElementById(NOT_FOUND_ELEMENT_ID);
    notFound.style = invisible;

    let found = false;
    for (const element of list) {
      const name = getPreparedSearchString(element.innerHTML);
      const isMatching = name.match(new RegExp(searchString, 'g'));
      const styleValue = isMatching ? visible : invisible;

      if (isMatching) {
        found = true;
      }

      element.style = styleValue;
      element.parentNode.style = styleValue;
    }

    if (!found) {
      notFound.style = visible;
    }
  }

  uEnv.getWindow().onload = function() {
    const params = uLocation.getUrlSearchParams();
    const searchParam = uLocation.getSearchParam(params, SEARCH_QUERY_PARAM);

    const searchInput = uDom.getElementById(SEARCH_INPUT_ELEMENT_ID);
    searchInput.value = searchParam;

    const preparedSearchParam = getPreparedSearchString(searchParam);
    displayOnlyMatchingElements(preparedSearchParam);
  };

});

function loadNewSearch() {
  requirejs(["dom", "environment", "location"], function(uDom, uEnv, uLocation) {

    const SEARCH_QUERY_PARAM = 'q';
    const SEARCH_INPUT_ELEMENT_ID = 'search-input';

    const searchInput = uDom.getElementById(SEARCH_INPUT_ELEMENT_ID);
    const value = searchInput.value ?? '';

    const params = uLocation.getUrlSearchParams();
    uLocation.setSearchParam(params, SEARCH_QUERY_PARAM, value);

    const searchString = uLocation.getSearchParamsString(params);
    uEnv.getWindow().location = '?' + searchString;

  });
}
