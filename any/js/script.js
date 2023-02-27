const ERROR_TEXT = '!!!';
const ERROR_MODE_ARG_NAME = 'error';
const ERROR_MODE_ARG_VALUE = 'show';

const MAIN_DOMAIN_NAME = 'mypatrons';

const PAGE_TITLE_ELEMENT_ID = 'title';
const PAGE_TITLE_PREFIX = 'My Patrons';

const PATH_SEPARATOR = '/';
const PATH_PARENT_DIRECTORY = '..';
const URL_WORD_SEPARATOR = '-';
const FILE_WORD_SEPARATOR = '_';
const FILE_EXTENSION_SEPARATOR = '.';
const DOMAIN_SEPARATOR = '.';
const NEWLINE = '\n';
const ANCHOR = '#';
const URL_SEARCH_START_CHARACTER = '?';
const URL_SEARCH_SEPARATOR = '&';
const URL_SEARCH_EQUAL_CHARACTER = '=';

const FILE_EXTENSION_HTML = 'html';
const FILE_EXTENSION_JSON = 'json';
const FILE_EXTENSION_MARKDOWN = 'md';

const TITLE_REPLACE_HASHTAG = '#TITLE#';
const COUNTER_REPLACE_HASHTAG = '#COUNTER#';
const LANGUAGE_REPLACE_HASHTAG = '#LANGUAGE#';

const PAGES_PATH = '/' + LANGUAGE_REPLACE_HASHTAG + '/' + FILE_EXTENSION_MARKDOWN + '/';
const HTML_TEMPLATES_PATH = '/any/' + FILE_EXTENSION_HTML + '/';
const HTML_LANGUAGE_TEMPLATES_PATH = '/' + LANGUAGE_REPLACE_HASHTAG + '/' + FILE_EXTENSION_HTML + '/';

const DEFAULT_EXPANDED_PAGE_ID = 0;
const ACCORDION_ITEM_COLLAPSED_FILE = 'accordion_item_collapsed' + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_HTML;
const ACCORDION_ITEM_EXPANDED_FILE = 'accordion_item_expanded' + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_HTML;
const ACCORDION_ITEM_CLASS_QUERY_SELECTOR = '.accordion-item';

const ACCORDION_HEADING_ELEMENT_PREFIX = 'heading';
const ACCORDION_BODY_ELEMENT_PREFIX = 'page';
const LANGUAGES_ELEMENT_ID = 'header-languages';
const HEADER_ICONS_ELEMENT_ID = 'header-icons';
const FOOTER_ELEMENT_ID = 'footer';

const LANGUAGE_PATTERN = '[a-z][a-z]';
const URL_WORD_SEPARATOR_PATTERN = '[^a-z0-9]';
const ANCHOR_PATTERN = ANCHOR + '[-a-z0-9]+';

const START_ANCHOR = ANCHOR + 'start';

const LANGUAGES_MARKDOWN_FILE_PATH = PATH_SEPARATOR;
const LANGUAGES_MARKDOWN_FILE_NAME = 'languages';
const INDEX_MARKDOWN_FILE_NAME = 'index';
const HEADER_ICONS_HTML_FILE_NAME = 'header_icons';
const FOOTER_HTML_FILE_NAME = 'footer';

const RANDOM_BIBLE_CHAPTERS_BUTTON_ELEMENT_ID = 'random-bible-chapter';
const RANDOM_BIBLE_CHAPTERS_DATA_FILE_PATH = '/any/' + FILE_EXTENSION_JSON + '/bible_chapters' + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_JSON;
let randomBibleChaptersButtonNamePrefix = null;
let allBibleChapters = null;

const build = () => {
  const subdomain = getSubdomain();
  const language = getLanguageFromSubdomain(subdomain);
  const pagesPath = getPagesPathForLanguage(language);
  const htmlPath = getHtmlTemplatesPathForLanguage(language);

  setPageTitle();
  buildLanguages();
  buildHeaderIcons(htmlPath);
  buildFooter(htmlPath);

  loadContent(pagesPath + INDEX_MARKDOWN_FILE_NAME + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_MARKDOWN, true)
    .then(function (indexContent) {
      const indexData = getConvertedIndexDataFromContent(indexContent);
      buildPageContent(pagesPath, indexData);
    })
    .catch(function (error) {
    })
  ;
}

const buildLanguages = () => {
  const element = document.getElementById(LANGUAGES_ELEMENT_ID);
  const fileName = LANGUAGES_MARKDOWN_FILE_NAME + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_MARKDOWN;
  const filePath = LANGUAGES_MARKDOWN_FILE_PATH + fileName;

  loadContent(filePath)
    .then(function (content) {
      element.innerHTML = content;
    })
    .catch(function (error) {
      element.innerHTML = getErrorText(error);
    })
  ;
}

const buildHeaderIcons = (htmlPath) => {
  const element = document.getElementById(HEADER_ICONS_ELEMENT_ID);
  const fileName = HEADER_ICONS_HTML_FILE_NAME + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_HTML;
  const languageFilePath = htmlPath + fileName;
  const defaultFilePath = HTML_TEMPLATES_PATH + fileName;

  buildHtmlElement(element, languageFilePath, defaultFilePath);
}

const buildFooter = (htmlPath) => {
  const element = document.getElementById(FOOTER_ELEMENT_ID);
  const fileName = FOOTER_HTML_FILE_NAME + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_HTML;
  const languageFilePath = htmlPath + fileName;
  const defaultFilePath = HTML_TEMPLATES_PATH + fileName;

  buildHtmlElement(element, languageFilePath, defaultFilePath);
}

const buildHtmlElement = (element, languageFilePath, defaultFilePath) => {
  loadContent(languageFilePath, true)
    .then(function (content) {
      element.innerHTML = content;
    })
    .catch(function (error) {
      loadContent(defaultFilePath, true)
        .then(function (content) {
          element.innerHTML = content;
        })
        .catch(function (error) {
          element.innerHTML = getErrorText(error);
        })
      ;
    })
  ;
}

const getWindowLocation = () => {
  return window.location;
}

const getLocationArgs = () => {
  const search = getWindowLocation().search;

  const pattern1 = new RegExp('^[' + URL_SEARCH_START_CHARACTER + ']');
  const pattern2 = new RegExp(URL_SEARCH_SEPARATOR, 'g');
  const pattern3 = new RegExp(URL_SEARCH_EQUAL_CHARACTER, 'g');

  const json = '{"' + decodeURI(search
    .replace(pattern1, '')
    .replace(pattern2, "\",\"")
    .replace(pattern3, "\":\"")
  ) + '"}';

  return JSON.parse(json.replace(/^\{\"\"\}$/, '{}'));
}

const getErrorText = (error) => {
  let result = ERROR_TEXT;

  const args = getLocationArgs();
  if (args[ERROR_MODE_ARG_NAME] == ERROR_MODE_ARG_VALUE) {
    result += (' ' + error);
    alert((new Error).stack);
  }

  return result;
}

const getHostname = () => {
  return getWindowLocation().hostname.toLowerCase();
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
  const path = getWindowLocation().pathname;
  const pattern = new RegExp('^[' + PATH_SEPARATOR + ']');

  return path.replace(pattern, '');
}

const getAnchorFromUrl = () => {
  const anchor = getWindowLocation().hash;
  const pattern = new RegExp('^[' + ANCHOR + ']');

  return anchor.replace(pattern, '');
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

const getHtmlTemplatesPathForLanguage = (language) => {
  if (language == '') {
    return '';
  }

  return HTML_LANGUAGE_TEMPLATES_PATH.replace(LANGUAGE_REPLACE_HASHTAG, language);
}

const setPageTitle = (title) => {
  if (title) {
    title = title.replace(/(<([^>]+)>)/ig, '');
    title = title.replace(/&[a-z]+;/g, '');
    title = title.trim();
  }

  const element = document.getElementById(PAGE_TITLE_ELEMENT_ID);
  element.innerHTML = PAGE_TITLE_PREFIX + (title ? ': ' + title : '');
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

  return result.replace(pattern, URL_WORD_SEPARATOR);
}

const convertUrlPathToMarkdownFileLocation = (urlPath) => {
  const pattern = new RegExp('[' + URL_WORD_SEPARATOR + ']', 'g');

  return urlPath.replace(pattern, FILE_WORD_SEPARATOR) + FILE_EXTENSION_SEPARATOR + FILE_EXTENSION_MARKDOWN;
}

const getProtocolPrefix = () => {
  return location.protocol + '//';
}

const getConvertedMarkdownContent = (content) => {
  const protocolPrefix = getProtocolPrefix();
  const domain = getMainDomain();
  const fileExtensionPattern = '[' + FILE_EXTENSION_SEPARATOR + ']' + FILE_EXTENSION_MARKDOWN;
  const indexFileNamePattern = INDEX_MARKDOWN_FILE_NAME + fileExtensionPattern;

  const pattern1Path = PAGES_PATH
    .replace(new RegExp('^[' + PATH_SEPARATOR + ']'), '')
    .replace(LANGUAGE_REPLACE_HASHTAG, '(' + LANGUAGE_PATTERN + ')');
  const pattern1 = new RegExp('\\([^\\(]*' + pattern1Path + indexFileNamePattern + '\\)', 'g');
  content = content.replace(pattern1, '(' + protocolPrefix + '$1' + DOMAIN_SEPARATOR + domain + ')');

  const pattern2 = new RegExp('\\[[^\\[\\]]+\\]\\(' + indexFileNamePattern + '\\)', 'g');
  content = content.replace(pattern2, '');

  const pattern3 = new RegExp('\\[[^\\]]+\\]\\(([^\\)]+' + fileExtensionPattern + ')' + '(' + ANCHOR_PATTERN + ')?' + '\\)', 'g');
  content = content.replace(pattern3, function (match, p1, p2) {
    const urlPath = PATH_SEPARATOR + convertMarkdownFileLocationToUrlPath(p1);

    return match.replace(p1, urlPath).replace(START_ANCHOR, '');
  });

  return marked.parse(content);
}

const loadContentToElement = (elementId, expandedElementId, location, getRawContent = false) => {
  const element = document.getElementById(ACCORDION_BODY_ELEMENT_PREFIX + elementId);

  loadContent(location, getRawContent)
    .then(function (content) {
      element.innerHTML = content;

      const path = getPathFromUrl();
      if (expandedElementId == elementId && path != '') {
        const expandedElement = ACCORDION_HEADING_ELEMENT_PREFIX + expandedElementId;
        scrollToElement(expandedElement);

        const anchor = getAnchorFromUrl();
        if (anchor != '') {
          scrollToElement(anchor);
        }
      }
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
      const path = PATH_SEPARATOR + convertMarkdownFileLocationToUrlPath(link);

      result.push({
        id: ++counter,
        title: title,
        link: link,
        path: path
      });
    }
  }

  return result;
}

const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) {
    return false;
  }

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  return true;
}

const buildPageContent = (pagesPath, pagesData) => {
  let listElement = document.getElementById('pagesAccordion');

  loadContent(HTML_TEMPLATES_PATH + ACCORDION_ITEM_EXPANDED_FILE)
    .then(function (expandedItemContent) {
      loadContent(HTML_TEMPLATES_PATH + ACCORDION_ITEM_COLLAPSED_FILE)
        .then(function (collapsedItemContent) {
          const itemsData = getAccordionItemsData(pagesPath, pagesData, expandedItemContent, collapsedItemContent);

          listElement.innerHTML = itemsData.content;
          const expandedElementId = itemsData.expandedElementId;

          loadAllContents(pagesPath, pagesData, expandedElementId);
          if (expandedElementId > 0) {
            setPageTitle(pagesData[expandedElementId - 1].title);
          }
          setShownActionToAllItems(pagesData);
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

  let expandedPageId = DEFAULT_EXPANDED_PAGE_ID;
  for (const page of pagesData) {
    if (expandedPageLink == page.link) {
      expandedPageId = page.id;
    }
  }

  const counterPattern = new RegExp(COUNTER_REPLACE_HASHTAG, 'g');
  const titlePattern = new RegExp(TITLE_REPLACE_HASHTAG, 'g');

  for (const page of pagesData) {
    let pageContent = (page.id == expandedPageId) ? expandedItemContent : collapsedItemContent;
    content += pageContent
      .replace(counterPattern, page.id)
      .replace(titlePattern, page.title)
    ;
  }

  return {
    content: content,
    expandedElementId: expandedPageId
  };
}

const loadAllContents = (pagesPath, pagesData, expandedElementId) => {
  for (pageData of pagesData) {
    loadContentToElement(pageData.id, expandedElementId, pagesPath + pageData.link);
  }
}

const setShownActionToAllItems = (pagesData) => {
  const items = document.querySelectorAll(ACCORDION_ITEM_CLASS_QUERY_SELECTOR);

  for (const item of items) {
    item.addEventListener('shown.bs.collapse', function (event) {
      const elementId = event.srcElement.id.replace(/[^0-9]/g, '');
      scrollToElement(ACCORDION_HEADING_ELEMENT_PREFIX + elementId);

      const pageData = pagesData[elementId - 1];
      window.history.pushState('', '', pageData.path);
      setPageTitle(pageData.title);
    });
  }
}

const setRandomBibleChapter = async (language) => {
  const button = document.getElementById(RANDOM_BIBLE_CHAPTERS_BUTTON_ELEMENT_ID);

  if (randomBibleChaptersButtonNamePrefix == null) {
    randomBibleChaptersButtonNamePrefix = button.innerHTML;
  }

  if (allBibleChapters == null) {
    allBibleChapters = await loadContent(RANDOM_BIBLE_CHAPTERS_DATA_FILE_PATH)
      .then(function (data) {
        let result = [];
        Object.entries(data[language]).forEach(([book, chapters]) => {
          for (let chapter = 1; chapter <= chapters; chapter++) {
            result.push(book + ' ' + chapter);
          }
        });
        return result;
      })
      .catch(function (error) {
      })
    ;
  }

  let suffix = '???';
  if (allBibleChapters != null) {
    suffix = allBibleChapters[Math.floor(Math.random() * allBibleChapters.length)];
  }

  button.innerHTML = randomBibleChaptersButtonNamePrefix + ': ' + suffix;
}

build();
