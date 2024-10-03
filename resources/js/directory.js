requirejs(["const", "dom", "displayStyle", "environment", "location"], function(uConst, uDom, uDisplayStyle, uEnv, uLocation) {

  uConst
    .set("DIRECTORY/SEARCH_QUERY_PARAM", "q")

    .set("DIRECTORY/DIRECTORY_LIST_ITEM_ELEMENT_CLASS", "directory-list-item")
    .set("DIRECTORY/NOT_FOUND_ELEMENT_ID", "directory-not-found")
    .set("DIRECTORY/SEARCH_INPUT_ELEMENT_ID", "search-input")
  ;

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
    const list = uDom.getElementsByClassName(uConst.get("DIRECTORY/DIRECTORY_LIST_ITEM_ELEMENT_CLASS"));

    const visible = uDisplayStyle.getVisible();
    const invisible = uDisplayStyle.getInvisible();

    const notFound = uDom.getElementById(uConst.get("DIRECTORY/NOT_FOUND_ELEMENT_ID"));
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
    const searchParam = uLocation.getSearchParam(params, uConst.get("DIRECTORY/SEARCH_QUERY_PARAM"));

    const searchInput = uDom.getElementById(uConst.get("DIRECTORY/SEARCH_INPUT_ELEMENT_ID"));
    searchInput.value = searchParam;

    const preparedSearchParam = getPreparedSearchString(searchParam);
    displayOnlyMatchingElements(preparedSearchParam);
  };

});

function loadNewSearch() {
  requirejs(["const", "dom", "environment", "location"], function(uConst, uDom, uEnv, uLocation) {

    const searchInput = uDom.getElementById(uConst.get("DIRECTORY/SEARCH_INPUT_ELEMENT_ID"));
    const value = searchInput.value ?? '';

    const params = uLocation.getUrlSearchParams();
    uLocation.setSearchParam(params, uConst.get("DIRECTORY/SEARCH_QUERY_PARAM"), value);

    const searchString = uLocation.getSearchParamsString(params);
    uEnv.getWindow().location = '?' + searchString;

  });
}
