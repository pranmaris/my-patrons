const SHOW_ERRORS = false;
const ERROR_TEXT = '!!!';

const MAIN_DOMAIN_NAME = 'mypatrons';
const PROTOCOL_PREFIX = 'http://';

const PATH_SEPARATOR = '/';
const PATH_PARENT_DIRECTORY = '..';
const URL_WORD_SEPARATOR = '-';
const FILE_WORD_SEPARATOR = '_';
const FILE_EXTENSION_SEPARATOR = '.';
const DOMAIN_SEPARATOR = '.';
const NEWLINE = '\n';

const FILE_EXTENSION_HTML = 'html';
const FILE_EXTENSION_JSON = 'json';
const FILE_EXTENSION_MARKDOWN = 'md';

const TITLE_REPLACE_HASHTAG = '#TITLE#';
const COUNTER_REPLACE_HASHTAG = '#COUNTER#';
const LANGUAGE_REPLACE_HASHTAG = '#LANGUAGE#';

const PAGES_PATH = '/' + LANGUAGE_REPLACE_HASHTAG + '/' + FILE_EXTENSION_MARKDOWN + '/';
const HTML_TEMPLATES_PATH = '/any/' + FILE_EXTENSION_HTML + '/';

const ACCORDION_ITEM_COLLAPSED_FILE = 'accordion_item_collapsed' + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_HTML;
const ACCORDION_ITEM_EXPANDED_FILE = 'accordion_item_expanded' + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_HTML;

const ACCORDION_BODY_ELEMENT_PREFIX = 'page';

const LANGUAGE_PATTERN = '[a-z][a-z]';
const URL_WORD_SEPARATOR_PATTERN = '[^a-z0-9]';

const README_MARKDOWN_FILE_NAME = 'README';
const INDEX_MARKDOWN_FILE_NAME = 'index';

const build = () => {
  const subdomain = getSubdomain();
  const language = getLanguageFromSubdomain(subdomain);
  const pagesPath = getPagesPathForLanguage(language);

  loadContent(pagesPath + INDEX_MARKDOWN_FILE_NAME + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_MARKDOWN, true)
    .then(function (indexContent) {
      const indexData = getConvertedIndexDataFromContent(indexContent);
      buildPageContent(pagesPath, indexData);
    })
    .catch(function (error) {
      const fileName = README_MARKDOWN_FILE_NAME + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_MARKDOWN;
      const indexContent = '- [ ](' + getRelatedFilePathToBaseDirectory(fileName, pagesPath) + ')';
      const indexData = getConvertedIndexDataFromContent(indexContent);
      buildPageContent(pagesPath, indexData);
    })
  ;
}

const getRelatedFilePathToBaseDirectory = (fileName, path) => {
  const pattern1 = new RegExp('^[' + PATH_SEPARATOR + ']');
  path = path.replace(pattern1, '');

  const pattern2 = new RegExp('[^' + PATH_SEPARATOR + ']+[' + PATH_SEPARATOR + ']', 'g');
  path = path.replace(pattern2, PATH_PARENT_DIRECTORY + PATH_SEPARATOR);

  return path + fileName;
}

const getErrorText = (error) => {
  return ERROR_TEXT + (SHOW_ERRORS ? ' ' + error : '');
}

const getHostname = () => {
  return window.location.hostname.toLowerCase();
}

const getMainDomainIndex = (hostname) => {
  return hostname.lastIndexOf(MAIN_DOMAIN_NAME + DOMAIN_SEPARATOR);
}

const getMainDomain = () => {
  const hostname = getHostname();
  const domainIndex = getMainDomainIndex(hostname);

  return hostname.substring(domainIndex);
}

const getSubdomain = () => {
  const hostname = getHostname();
  const domainIndex = getMainDomainIndex(hostname);

  if (domainIndex > 0 && hostname[domainIndex - 1] == DOMAIN_SEPARATOR) {
    return hostname.substring(0, domainIndex - 1);
  }

  return '';
}

const getPathFromUrl = () => {
  const path = window.location.pathname;
  const pattern = new RegExp('^[' + PATH_SEPARATOR + ']');

  return path.replace(pattern, '');
}

const getLanguageFromSubdomain = (subdomain) => {
  const pattern = RegExp('^' + LANGUAGE_PATTERN + '$');

  return subdomain.match(pattern) ? subdomain : '';
}

const getPagesPathForLanguage = (language) => {
  if (language == '') {
    return '';
  }

  return PAGES_PATH.replace(LANGUAGE_REPLACE_HASHTAG, language);
}

const loadContent = (location, getRawContent = false) => {
  const fileExtension = getRawContent ? '' : location.split(FILE_EXTENSION_SEPARATOR).pop().toLowerCase();

  return fetch(location)
    .then(function (response) {
      if (!response.ok) {
        throw response.status + ' ' + response.statusText;
      }

      return (fileExtension == FILE_EXTENSION_JSON) ? response.json() : response.text();
    })
    .then(function (content) {
      return (fileExtension == FILE_EXTENSION_MARKDOWN) ? getConvertedMarkdownContent(content) : content;
    })
  ;
}

const convertMarkdownFileLocationToUrlPath = (filename) => {
  let result = filename;

  const pattern = new RegExp(URL_WORD_SEPARATOR_PATTERN, 'g');
  const dotIndex = filename.lastIndexOf(FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_MARKDOWN);
  if (dotIndex >= 0) {
    result = result.substring(0, dotIndex);
  }

  return result.replaceAll(pattern, URL_WORD_SEPARATOR);
}

const convertUrlPathToMarkdownFileLocation = (urlPath) => {
  return urlPath.replaceAll(URL_WORD_SEPARATOR, FILE_WORD_SEPARATOR) + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_MARKDOWN;
}

const getConvertedMarkdownContent = (content) => {
  const domain = getMainDomain();
  const fileExtensionPattern = '[' + FILE_EXTENSION_SEPARATOR + ']' + FILE_EXTENSION_MARKDOWN;
  const indexFileNamePattern = INDEX_MARKDOWN_FILE_NAME + fileExtensionPattern;

  const pattern1Path = PAGES_PATH
    .replace(new RegExp('^[' + PATH_SEPARATOR + ']'), '')
    .replace(LANGUAGE_REPLACE_HASHTAG, '(' + LANGUAGE_PATTERN + ')');
  const pattern1 = new RegExp('\\([^\\(]*' + pattern1Path + indexFileNamePattern + '\\)', 'g');
  content = content.replaceAll(pattern1, '(' + PROTOCOL_PREFIX + '$1' + DOMAIN_SEPARATOR + domain + ')');

  const pattern2 = new RegExp('\\[[^\\[\\]]+\\]\\(' + indexFileNamePattern + '\\)', 'g');
  content = content.replaceAll(pattern2, '');

  const pattern3 = new RegExp('\\[[^\\]]+\\]\\(([^\\)]+' + fileExtensionPattern + ')\\)', 'g');
  content = content.replaceAll(pattern3, function (match, p1) {
    const urlPath = PATH_SEPARATOR + convertMarkdownFileLocationToUrlPath(p1);

    return match.replace(p1, urlPath);
  });

  return marked(content);
}

const loadContentToElement = (elementId, location, getRawContent = false) => {
  const element = document.getElementById(elementId);

  loadContent(location, getRawContent)
    .then(function (content) {
      element.innerHTML = content;
    })
    .catch(function (error) {
      element.innerHTML = getErrorText(error);
    })
  ;
}

const getConvertedIndexDataFromContent = (content) => {
  let result = [];
  let counter = 0;

  const lines = content.split(NEWLINE);
  for (const line of lines) {
    const lineMatch = line.match(/^- \[([^\]]+)\]\(([^\)]+)\)/);
    if (lineMatch) {
      const title = lineMatch[1];
      const link = lineMatch[2];

      result.push({
        id: ++counter,
        title: title,
        link: link
      });
    }
  }

  return result;
}

const scrollToElement = (elementId) => {
  document.getElementById(elementId).scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  });
}

const buildPageContent = (pagesPath, pagesData) => {
  let listElement = document.getElementById('pagesAccordion');

  loadContent(HTML_TEMPLATES_PATH + ACCORDION_ITEM_EXPANDED_FILE)
    .then(function (expandedItemContent) {
      loadContent(HTML_TEMPLATES_PATH + ACCORDION_ITEM_COLLAPSED_FILE)
        .then(function (collapsedItemContent) {
          const itemsData = getAccordionItemsData(pagesPath, pagesData, expandedItemContent, collapsedItemContent);
          listElement.innerHTML = itemsData.content;
          loadAllContents(pagesPath, pagesData);
          scrollToElement(itemsData.expandedBodyElementId);
        })
        .catch(function (error) {
          listElement.innerHTML = getErrorText(error);
        })
      ;
    })
    .catch(function (error) {
      listElement.innerHTML = getErrorText(error);
    })
  ;
}

const getAccordionItemsData = (pagesPath, pagesData, expandedItemContent, collapsedItemContent) => {
  let content = '';

  const path = getPathFromUrl();
  const expandedPageLink = convertUrlPathToMarkdownFileLocation(path);

  let expandedPageId = 1;
  for (const page of pagesData) {
    if (expandedPageLink == page.link) {
      expandedPageId = page.id;
    }
  }

  for (const page of pagesData) {
    let pageContent = (page.id == expandedPageId) ? expandedItemContent : collapsedItemContent;
    content += pageContent
      .replaceAll(COUNTER_REPLACE_HASHTAG, page.id)
      .replaceAll(TITLE_REPLACE_HASHTAG, page.title)
    ;
  }

  return {
    content: content,
    expandedBodyElementId: ACCORDION_BODY_ELEMENT_PREFIX + expandedPageId
  };
}

const loadAllContents = (pagesPath, pagesData) => {
  for (pageData of pagesData) {
    loadContentToElement(ACCORDION_BODY_ELEMENT_PREFIX + pageData.id, pagesPath + pageData.link);
  }
}

build();
