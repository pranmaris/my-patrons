const DEV_HOSTNAME_REMOVE_STRING = '.dev';

const SELECT_NAME = '...';
const NAME_TO_IGNORE = '~~~';

const ANCHOR_CHARACTER = '#';

const MISSING_INDEX_OF_VALUE = -1;
const MISSING_TABLE_HEADER_NOTE_NAME = '?';

const LANGUAGE_MISSING_VARIABLE_SIGN = '!!!';
const LANGUAGE_JSON_FILE = '/files/data/website-language-variables.json';
const CHALLENGES_CONFIG_JSON_FILE = '/files/data/challenges.json';
const NOTES_CONFIG_JSON_FILE = '/files/data/notes-types.json';
const PERSONS_DATA_JSON_FILE = '/files/data/generated/persons-data.generated.json';

const CSS_FILE_PATH = '/files/resources/css/notes.css';
const CHALLENGE_ITEM_TEMPLATE_FILE_PATH = '/files/resources/html/items/notes-challenge-item.html';
const CHALLENGE_ITEM_TO_REMOVE_TEMPLATE_FILE_PATH = '/files/resources/html/items/notes-challenge-to-remove-item.html';
const CHECKLIST_ITEM_TEMPLATE_FILE_PATH = '/files/resources/html/items/notes-checklist-item.html';
const NOTE_ITEM_TEMPLATE_FILE_PATH = '/files/resources/html/items/notes-note-item.html';
const DESCRIPTION_CONTENT_BLOCK_TEMPLATE_FILE_PATH = '/files/resources/html/content-blocks/notes-description-content-block.html';
const NOTIFICATION_ITEM_TEMPLATE_FILE_PATH = '/files/resources/html/items/notes-notification-item.html';
const NOTE_CELL_ITEM_TEMPLATE_FILE_PATH = '/files/resources/html/items/notes-note-cell-item.html';
const MARKDOWN_FILES_ROOT_PATH = '/files/resources/md/';

const INVISIBLE_STYLE = 'display: none';
const VISIBLE_STYLE = '';

const DEFAULT_JSON_FILENAME = 'start';
const MIN_CHALLENGE_DATE_ALLOWED = '1901-01-01';

const BACKGROUND_PHOTO_ATTRIBUTION = 'background-photo-attribution';
const CHALLENGES_ELEMENT_ID = 'challenges';
const FILE_CONTENT_ELEMENT_ID = 'file-content';
const MAIN_CSS_ELEMENT_ID = 'main-css';
const NOTIFICATIONS_ELEMENT_ID = 'notifications';
const CHALLENGE_DATE_INPUT_ELEMENT_ID = 'challenge-date-input';
const CHALLENGE_TYPE_SELECT_ELEMENT_ID = 'challenge-type-select';
const CHALLENGE_TYPE_DIV_ELEMENT_ID = 'challenge-type-div';
const CHALLENGE_DESCRIPTION_DIV_ELEMENT_ID = 'challenge-description-div';
const ADD_NEW_CHALLENGE_BUTTON_ELEMENT_ID = 'add-new-challenge-button';
const PERSON_DIV_ELEMENT_ID = 'person-div';
const PERSON_NAME_SELECT_ELEMENT_ID = 'person-name-select';
const PERSON_TYPE_SELECT_ELEMENT_ID = 'person-type-select';
const PERSON_SELECT_ELEMENT_ID = 'person-select';
const FEAST_SELECT_ELEMENT_ID = 'feast-select';
const PERSON_URL_ELEMENT_ID_PREFIX = 'person-url-';
const FEAST_URL_ELEMENT_ID_PREFIX = 'feast-url-';
const CHECKLIST_LIST_MODAL_BODY_ELEMENT_ID = 'checklist-list-modal-body';
const NOTES_LIST_ELEMENT_ID = 'notes-list';
const CHECKLIST_ITEM_DESCRIPTION_ELEMENT_ID = 'checklist-item-description';
const CHECKLIST_ITEM_MODAL_TOGGLE_LABEL_ELEMENT_ID = 'checklist-item-modal-toggle-label';
const CHECKLIST_BUTTON_ABORTED_ELEMENT_ID = 'checklist-button-aborted';
const CHECKLIST_BUTTON_OPTIONAL_WAITING_ELEMENT_ID = 'checklist-button-optional-waiting';
const CHECKLIST_BUTTON_WAITING_ELEMENT_ID = 'checklist-button-waiting';
const CHECKLIST_BUTTON_DONE_ELEMENT_ID = 'checklist-button-done';
const CHECKLIST_ITEM_MODAL_ROW_ID_ELEMENT_ID = 'checklist-item-modal-row-id';
const CHECKLIST_ITEM_MODAL_ITEM_TYPE_ELEMENT_ID = 'checklist-item-modal-item-type';
const CHALLENGE_TO_REMOVE_ELEMENT_ID = 'challenge-to-remove';
const REMOVE_CHALLENGE_MODAL_ROW_ID_ELEMENT_ID = 'remove-challenge-modal-row-id';
const MOVE_CHALLENGE_UP_BUTTON_ELEMENT_ID_PREFIX = 'move-challenge-up-button-'
const MOVE_CHALLENGE_DOWN_BUTTON_ELEMENT_ID_PREFIX = 'move-challenge-down-button-'
const REQUIRED_NOTES_DIV_ELEMENT_ID = 'required-notes-div';
const REQUIRED_CHECKLIST_STEPS_DIV_ELEMENT_ID = 'required-checklist-steps-div';
const REQUIRED_NOTES_DONE_INPUT_ELEMENT_ID = 'required-notes-done';
const REQUIRED_CHECKLIST_STEPS_DONE_INPUT_ELEMENT_ID = 'required-checklist-steps-done';
const REQUIRED_CHECKLIST_STEPS_LIST_ELEMENT_ID = 'required-checklist-steps-list';
const REQUIRED_CHECKLIST_STEPS_INFO_ELEMENT_ID = 'required-checklist-steps-info';
const NOTE_VALUE_ELEMENT_ID_PREFIX = 'note-value-';

const PROGRESS_DONE_ELEMENT_ID_PREFIX = 'progress-done-';
const PROGRESS_OPTIONAL_ELEMENT_ID_PREFIX = 'progress-optional-';
const PROGRESS_ABORTED_ELEMENT_ID_PREFIX = 'progress-aborted-';

const PERSON_URL_FEAST_SEPARATOR = '@';
const REMOVE_PERSON_URL_LINK_HREFS = ['me'];

const INPUT_FOR_FILENAME_WITHOUT_EXTENSION_ELEMENT_ID = 'input-for-filename-without-extension';
const INPUT_FOR_OWNER_ELEMENT_ID = 'input-for-owner';

const PERSONS_DATA_FIELD_NAMES = 'names';
const PERSONS_DATA_FIELD_DIED = 'died';

const DATA_FIELD_CHALLENGES = 'challenges';
const DATA_FIELD_FILENAME_WITHOUT_EXTENSION = 'filename-without-extension';
const DATA_FIELD_OWNER = 'owner';
const DATA_FIELD_CHECKLIST = 'checklist';
const DATA_FIELD_NOTES = 'notes';

const CONFIG_FIELD_CHECKLIST = 'checklist';
const CONFIG_FIELD_NOTES = 'notes';

const PERSON_TYPE_GOD = 'God';
const PERSON_TYPE_ME = 'Me';
const PERSON_TYPE_PATRONS = 'Patrons';
const COPY_PERSON_TYPE_TO_NAME_IDS = ['me', 'god'];
const COPY_PERSON_NAME_TO_ID_IDS = ['me'];
const GOD_HAVING_NEEDED_CHALLENGES_PERSON_NAME_URL = 'god';

const REQUIREMENT_ANYBODY_HAVING_CHALLENGES = 'anybody-having-challenges';
const REQUIREMENT_EVERYBODY_NOT_HAVING_CHALLENGES = 'everybody-not-having-challenges';
const REQUIREMENT_EVERYBODY_NOT_HAVING_CHALLENGES_ON_THE_SAME_DAY = 'everybody-not-having-challenges-on-the-same-day';
const REQUIREMENT_GOD_HAVING_NEEDED_CHALLENGES = 'god-having-needed-challenges';
const REQUIREMENT_PERSON_HAVING_CHALLENGES = 'person-having-challenges';
const REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES = 'person-not-having-challenges';
const REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY = 'person-feast-is-not-empty';
const REQUIREMENT_PERSON_FEAST_HAVING_CHALLENGES = 'person-feast-having-challenges';
const REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES = 'person-feast-not-having-challenges';

const JSON_MIME_TYPE = 'application/json';
const JSON_DATA_FILE_EXTENSION = '.mypatrons.json';
const MARKDOWN_FILE_EXTENSION = '.md';

const JSON_STRINGIFY_SPACES = 2;
const MAX_NOTE_OBJECT_STRUCTURE_LEVELS = 5;

const WEEKDAY_LANGUAGE_VARIABLES_PREFIX = 'lang-weekday-abbreviation-';

const SELECTED_PERSON_IN_GENERAL_LANGUAGE_VARIABLE_NAME = 'lang-without-feast-selection';

const CHECKLIST_STATUS_WAITING = 'waiting';
const CHECKLIST_STATUS_OPTIONAL_WAITING = 'optional-waiting';
const CHECKLIST_STATUS_ABORTED = 'aborted';
const CHECKLIST_STATUS_DONE = 'done';
const CHECKLIST_STATUSES = {
  [CHECKLIST_STATUS_WAITING]: {variable: 'lang-checklist-status-waiting', color: 'dark'},
  [CHECKLIST_STATUS_OPTIONAL_WAITING]: {variable: 'lang-checklist-status-optional-waiting', color: 'warning'},
  [CHECKLIST_STATUS_ABORTED]: {variable: 'lang-checklist-status-aborted', color: 'danger'},
  [CHECKLIST_STATUS_DONE]: {variable: 'lang-checklist-status-done', color: 'success'}
}

let challengesConfig = {};
let notesTypesConfig = {};
let languageVariables = {};
let filesContents = {};
let filesContentsErrors = {};
let personsData = {};
let personsDataSubelementsCache = {};

let fileName = DEFAULT_JSON_FILENAME + JSON_DATA_FILE_EXTENSION;
let fileContent = '{}';
let fileData = null;

let lastEditedNoteItem = [];
let newChallengeChecklistValues = {};
let newChallengeNotesValues = {};

async function build() {
  appendNotesCss();
  languageVariables = await getJsonFromFile(LANGUAGE_JSON_FILE);
  challengesConfig = await getJsonFromFile(CHALLENGES_CONFIG_JSON_FILE);
  notesTypesConfig = await getJsonFromFile(NOTES_CONFIG_JSON_FILE);
  personsData = await getJsonFromFile(PERSONS_DATA_JSON_FILE);
}

function inArray(value, array) {
  return array.indexOf(value) != MISSING_INDEX_OF_VALUE;
}

function getPersonsDataDirName(personId) {
  return personId.replace(new RegExp('[/' + PERSON_URL_FEAST_SEPARATOR + '][^/' + PERSON_URL_FEAST_SEPARATOR + ']+[/' + PERSON_URL_FEAST_SEPARATOR + ']?$'), '');
}

function getPersonsDataRootName(personId) {
  return personId.replace(new RegExp('[/' + PERSON_URL_FEAST_SEPARATOR + '].*$'), '');
}

async function showNotification(message, type) {
  const notifications = document.getElementById(NOTIFICATIONS_ELEMENT_ID);
  const content = await getFileContent(NOTIFICATION_ITEM_TEMPLATE_FILE_PATH);

  const wrapper = document.createElement('div');
  wrapper.innerHTML = content
    .replace(/#type#/, type)
    .replace(/#message#/, message)
  ;

  notifications.append(wrapper);
}

function clearNotifications() {
  const notifications = document.getElementById(NOTIFICATIONS_ELEMENT_ID);
  notifications.innerHTML = '';
}

function error(message) {
  const prefix = getLanguageVariable('lang-notification-error', true);
  showNotification('<span class="notification-prefix">' + prefix + ':</span> ' + message, 'danger');
}

function warning(message) {
  const prefix = getLanguageVariable('lang-notification-warning', true);
  showNotification('<span class="notification-prefix">' + prefix + ':</span> ' + message, 'warning');
}

function info(message) {
  const prefix = getLanguageVariable('lang-notification-info', true);
  showNotification('<span class="notification-prefix">' + prefix + ':</span> ' + message, 'dark');
}

function success(message) {
  const prefix = getLanguageVariable('lang-notification-success', true);
  showNotification('<span class="notification-prefix">' + prefix + ':</span> ' + message, 'success');
}

async function sleep(miliseconds) {
  await new Promise(r => setTimeout(r, miliseconds));
}

async function appendNotesCss() {
  let head = document.getElementsByTagName('head')[0];
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = CSS_FILE_PATH;
  link.media = 'all';
  head.appendChild(link);

  //remove background file attribution
  for (let i = 0; i < 10; i++) {
    await sleep(500);
    let attribution = document.getElementById(BACKGROUND_PHOTO_ATTRIBUTION);
    if (attribution) {
      attribution.innerHTML = '';
      break;
    }
  }
}

const getHostname = function() {
  return window.location.hostname.toLowerCase().replace(DEV_HOSTNAME_REMOVE_STRING + '.', '.');
}

const getLanguage = function() {
  const hostname = getHostname();

  return hostname.replace(/\..*$/, '');
}

const getLanguageVariable = function(variable, capitalize = false, variableTranslations = languageVariables[variable]) {
  let result = LANGUAGE_MISSING_VARIABLE_SIGN;

  if (variableTranslations === undefined) {
    return result;
  }

  let language = getLanguage();
  let translation = variableTranslations[language];
  let foundLanguageTranslation = true;

  if (translation === undefined) {
    foundLanguageTranslation = false;
    for (language in variableTranslations) {
      result = variableTranslations[language];
      break;
    }
  } else {
    result = translation;
  }

  if (capitalize) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  if (!foundLanguageTranslation) {
    result += ' [' + language + ']';
  }

  return result;
}

const getFileContent = async function(path) {
  if (filesContents[path] !== undefined) {
    return filesContents[path];
  } else if (filesContentsErrors[path] !== undefined) {
    throw new Error(filesContentsErrors[path]);
  }

  let response = await fetch(path);
  if (!response.ok) {
    const errorMessage = 'HTTP status: ' + response.status;
    filesContentsErrors[path] = errorMessage;
    throw new Error(errorMessage);
  }

  const result = await response.text();
  filesContents[path] = result;

  return result;
}

const getJsonFromFile = async function(path) {
  const content = await getFileContent(path);

  return JSON.parse(content);
}

async function loadFile(input) {
  try {
    const data = input.files[0];

    fileName = data.name;
    fileContent = await data.text();
    fileData = parseFileDataFromContent(fileContent);

    if (fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION]) {
      fileName = fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION] + JSON_DATA_FILE_EXTENSION;
    }

    sortChallengesByDate();
    recalculateFileData();

    fileContent = JSON.stringify(fileData);
    fileData = parseFileDataFromContent(fileContent);

    reloadFileTab();
  } catch (e) {
    error(e.message);
  }
}

function saveFile() {
  try {
    fileData = parseFileDataFromContent(fileContent);
    content = JSON.stringify(fileData);

    var blob = new Blob([content], {type: JSON_MIME_TYPE});
    var a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    a.click();
  } catch (e) {
    error(e.message);
  }
}

function reloadFileTab() {
  try {
    clearNotifications();

    let inputForOwner = document.getElementById(INPUT_FOR_OWNER_ELEMENT_ID);
    let inputForFilenameWithoutExtension = document.getElementById(INPUT_FOR_FILENAME_WITHOUT_EXTENSION_ELEMENT_ID);

    inputForOwner.value = '';
    inputForFilenameWithoutExtension.value = '';
    fileData = parseFileDataFromContent(fileContent);

    inputForOwner.value = fileData[DATA_FIELD_OWNER] ?? '';
    inputForFilenameWithoutExtension.value = fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION] ?? '';
  } catch (e) {
    error(e.message);
  }
}

function reloadChallengesTab() {
  try {
    clearNotifications();
    fileData = parseFileDataFromContent(fileContent);

    fillChallenges(fileData[DATA_FIELD_CHALLENGES] ?? []);
  } catch (e) {
    error(e.message);
  }
}

function reloadJsonEditorTab() {
  try {
    clearNotifications();
    let content = fileContent;
    if (fileData != null) {
      content = JSON.stringify(fileData, null, JSON_STRINGIFY_SPACES);
    }

    document.getElementById(FILE_CONTENT_ELEMENT_ID).value = content;
    fileData = parseFileDataFromContent(fileContent);
  } catch (e) {
    error(e.message);
  }
}

function setFileContentFromJsonEditor() {
  try {
    clearNotifications();
    fileContent = document.getElementById(FILE_CONTENT_ELEMENT_ID).value;
    fileData = parseFileDataFromContent(fileContent);
  } catch (e) {
    error(e.message);
  }
}

function parseFileDataFromContent(content) {
  fileData = null;

  let data = {};
  try {
    data = JSON.parse(content);
  } catch (e) {
    let message = getLanguageVariable('lang-invalid-json-file', true);
    throw new Error(message + ' (' + e.message + ')');
  }

  //... parse

  return data;
}

function setValueAsOwner(value) {
  try {
    clearNotifications();
    fileData = parseFileDataFromContent(fileContent);
    fileData[DATA_FIELD_OWNER] = value;

    fileContent = JSON.stringify(fileData);
  } catch (e) {
    error(e.message);
  }
}

function setValueAsFilenameWithoutExtension(value) {
  try {
    clearNotifications();
    fileData = parseFileDataFromContent(fileContent);
    fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION] = value;
    fileName = value + JSON_DATA_FILE_EXTENSION;

    fileContent = JSON.stringify(fileData);
  } catch (e) {
    error(e.message);
  }
}

async function fillChallenges(challenges) {
  const list = document.getElementById(CHALLENGES_ELEMENT_ID);
  list.innerHTML = '';

  const content = await getFileContent(CHALLENGE_ITEM_TEMPLATE_FILE_PATH);

  let numbers = {};
  let counter = 0;
  for (let challenge of challenges) {
    counter++;

    let rowId = counter;
    let date = challenge.date ?? '';
    let personUrl = (challenge.person ?? '');
    let feast = challenge.feast ?? '';
    let feastUrl = feast.length > 0 ? personUrl + PERSON_URL_FEAST_SEPARATOR + feast : '';
    let type = challenge.type ?? '';
    let number = '';
    let success = '...';                        //todo...
    let notes = challenge.notes ?? [];

    if (challengesConfig[type].numbers ?? false) {
      if (numbers[type] == undefined) {
        numbers[type] = {};
      }
      numbers[type][personUrl] = (numbers[type][personUrl] ?? 0) + 1;
      number = numbers[type][personUrl];
    }

    list.innerHTML += content
      .replace(/#row-id#/g, rowId)
      .replace(/#date#/g, getDateFormat(date))
      .replace(/#type#/g, type)
      .replace(/#number#/g, number)
      .replace(/#person-url#/g, personUrl)
      .replace(/#person#/g, getPersonDataName(personUrl))
      .replace(/#feast-url#/g, feastUrl.length > 0 ? feastUrl + ANCHOR_CHARACTER + feast : '')
      .replace(/#feast#/g, feastUrl.length > 0 ? getPersonDataName(feastUrl) : '')
      .replace(/#success#/g, success)
      .replace(/#notes#/g, notes)
    ;

    const personUrlElement = document.getElementById(PERSON_URL_ELEMENT_ID_PREFIX + rowId);
    const feastUrlElement = document.getElementById(FEAST_URL_ELEMENT_ID_PREFIX + rowId);
    const moveChallengeUpButton = document.getElementById(MOVE_CHALLENGE_UP_BUTTON_ELEMENT_ID_PREFIX + rowId);
    const moveChallengeDownButton = document.getElementById(MOVE_CHALLENGE_DOWN_BUTTON_ELEMENT_ID_PREFIX + rowId);

    if (date !== (challenges[rowId - 2] ?? {}).date ?? '') {
      moveChallengeUpButton.style = INVISIBLE_STYLE;
    }
    if (date !== (challenges[rowId] ?? {}).date ?? '') {
      moveChallengeDownButton.style = INVISIBLE_STYLE;
    }

    drawProgressBarValue(rowId);

    if (inArray(personUrl, REMOVE_PERSON_URL_LINK_HREFS)) {
      personUrlElement.removeAttribute('href');
    }
    if (feastUrl == '') {
      feastUrlElement.removeAttribute('href');
    }
  }
}

function getDateFormat(dateString) {
  const weekday = new Date(dateString).toLocaleString('en-us', {weekday: 'long'});
  const prefix = getLanguageVariable(WEEKDAY_LANGUAGE_VARIABLES_PREFIX + weekday.toLowerCase());

  return prefix + ' ' + dateString;
}

function sortChallengesByDate() {
  if (fileData[DATA_FIELD_CHALLENGES] == undefined) {
    fileData[DATA_FIELD_CHALLENGES] = [];
  }

  fileData[DATA_FIELD_CHALLENGES].sort(function(a, b) {
    return Date.parse(a.date) - Date.parse(b.date);
  });
}

function addNewChallengeReset() {
  sortChallengesByDate();
  resetDateInput();
}

function getToday() {
  return new Date().toJSON().slice(0, 10);
}

function getTypesArrayWithDuplications(array) {
  let result = [];

  for (let value of array) {
    if (value.match(/^[0-9]+x[A-Z]+$/)) {
      const xPos = value.indexOf('x');
      const times = value.substring(0, xPos);
      const type = value.substring(xPos + 1);

      for (let i = 0; i < times; i++) {
        result.push(type);
      }
    } else {
      result.push(value);
    }
  }

  return result;
}

function checkExistingChallengeTypesBeforeDate(requirements, challenges, checkDateString) {
  const checkDate = Date.parse(checkDateString);

  let types = getTypesArrayWithDuplications(requirements);
  if (types.length > 0) {
    for (let ch of challenges) {
      const type = ch.type;
      const date = ch.date;

      if (Date.parse(date) > checkDate) {
        return false;
      }

      foundPosition = types.indexOf(type);
      if (foundPosition != MISSING_INDEX_OF_VALUE) {
        types.splice(foundPosition, 1);

        if (types.length == 0) {
          return true;
        }
      }
    }

    return false;
  }

  return true;
}

function checkNotExistingChallengeTypes(requirements, challenges) {
  let types = requirements;
  if (types.length > 0) {
    for (let ch of challenges) {
      const type = ch.type;

      if (inArray(type, types)) {
        return false;
      }
    }
  }

  return true;
}

function checkNotExistingChallengeTypesOnTheSameDay(requirements, challenges, checkDateString) {
  const checkDate = Date.parse(checkDateString);

  let types = requirements;
  if (types.length > 0) {
    for (let ch of challenges) {
      const type = ch.type;
      const date = ch.date;

      if (Date.parse(date) != checkDate) {
        continue;
      }

      if (inArray(type, types)) {
        return false;
      }
    }
  }

  return true;
}

function checkIfAnyPersonOrFeastPossibleForChallengeTypeRequirements(requirements, allPersonsToTake, challengeDate) {
  const typesNotAllowed = requirements[REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES] ?? [];
  if (typesNotAllowed.length > 0) {
    const personsToSkip = getPersonsHavingAnyChallenge(typesNotAllowed, challengeDate);
    if (Object.keys(allPersonsToTake).length <= Object.keys(personsToSkip).length) {
      return false;
    }
  }

  let personsToTake = allPersonsToTake;
  const typesNeeded = requirements[REQUIREMENT_PERSON_HAVING_CHALLENGES] ?? null;
  const addGodToListNeeded = requirements[REQUIREMENT_GOD_HAVING_NEEDED_CHALLENGES] ?? false;
  if (typesNeeded != null) {
    personsToTake = getPersonsHavingAllChallenges(typesNeeded, challengeDate);
    if (!addGodToListNeeded && Object.keys(personsToTake).length <= 0) {
      return false;
    }

    if (addGodToListNeeded) {
      const subelements = getPersonsDataSubelements(GOD_HAVING_NEEDED_CHALLENGES_PERSON_NAME_URL);
      for (let subelement of subelements) {
        personsToTake[subelement] = subelement;
      }
    }
  }

  const feastIsNotEmpty = requirements[REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY] ?? false;
  const feastNotHavingChallenges = requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];
  if (feastIsNotEmpty) {
    let feastsToSkip = getPersonsFeastsHavingAnyChallenge(feastNotHavingChallenges, challengeDate);

    let feastsCount = 0;
    for (let personId of Object.keys(personsToTake)) {
      const feastsSubelements = getPersonsDataSubelements(personId);
      feastsCount += feastsSubelements.length;
    }
    if (feastsCount <= Object.keys(feastsToSkip).length) {
      return false;
    }
  }

  return true;
}

function getPersonDataName(personId) {
  const data = personsData[personId] ?? [];

  return getLanguageVariable(PERSONS_DATA_FIELD_NAMES, true, data[PERSONS_DATA_FIELD_NAMES] ?? []);
}

function getPersonsDataSubelements(personIdPrefix) {
  let result = personsDataSubelementsCache[personIdPrefix] ?? null;

  if (result == null) {
    result = [];

    const data = Object.keys(personsData);
    for (let personId of data) {
      if (personId.substring(0, personIdPrefix.length) == personIdPrefix
        && personId != personIdPrefix
        && personId.replace(personIdPrefix, '').match(new RegExp('^[/' + PERSON_URL_FEAST_SEPARATOR + '][a-z0-9]+$'))
      ) {
        result.push(personId);
      }
    }

    personsDataSubelementsCache[personIdPrefix] = result;
  }

  return result;
}

function getPersonsHavingAllChallenges(types, checkDateString = null) {
  let result = {};
  let withAnyType = {};

  const checkDate = null ? null : Date.parse(checkDateString);

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  for (let ch of challenges) {
    if (checkDate && Date.parse(ch.date) > checkDate) {
      continue;
    }

    if (inArray(ch.type, types)) {
      if (withAnyType[ch.person] == undefined) {
        withAnyType[ch.person] = {};
      }
      withAnyType[ch.person][ch.type] = true;
    }
  }

  for (let person in withAnyType) {
    if (Object.keys(withAnyType[person]).length == types.length) {
      result[person] = person;
    }
  }

  return result;
}

function getPersonsFeastsHavingAllChallenges(types, checkDateString = null) {
  let result = {};
  let withAnyType = {};

  const checkDate = null ? null : Date.parse(checkDateString);

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  for (let ch of challenges) {
    if (checkDate && Date.parse(ch.date) > checkDate) {
      continue;
    }

    if (inArray(ch.type, types) && ch.feast.length > 0) {
      if (withAnyType[ch.person] == undefined) {
        withAnyType[ch.person] = {};
      }
      if (withAnyType[ch.person][ch.feast] == undefined) {
        withAnyType[ch.person][ch.feast] = {};
      }
      withAnyType[ch.person][ch.feast][ch.type] = true;
    }
  }

  for (let person in withAnyType) {
    for (let feast in withAnyType[person]) {
      if (Object.keys(withAnyType[person][feast]).length == types.length) {
        const key = person + PERSON_URL_FEAST_SEPARATOR + feast;
        result[key] = key;
      }
    }
  }

  return result;
}

function getPersonsHavingAnyChallenge(types, checkDateString) {
  let result = {};

  const checkDate = null ? null : Date.parse(checkDateString);

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  for (let ch of challenges) {
    if (checkDate && Date.parse(ch.date) > checkDate) {
      continue;
    }

    if (inArray(ch.type, types)) {
      result[ch.person] = ch.person;
    }
  }

  return result;
}

function getPersonsFeastsHavingAnyChallenge(types, checkDateString) {
  let result = {};

  const checkDate = null ? null : Date.parse(checkDateString);

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  for (let ch of challenges) {
    if (checkDate && Date.parse(ch.date) > checkDate) {
      continue;
    }

    if (ch.feast.length > 0) {
      if (inArray(ch.type, types)) {
        const key = ch.person + PERSON_URL_FEAST_SEPARATOR + ch.feast;
        result[key] = key;
      }
    }
  }

  return result;
}



function resetDateInput() {
  let dateInput = document.getElementById(CHALLENGE_DATE_INPUT_ELEMENT_ID);
  dateInput.value = getToday();

  resetChallengeTypeSelect();
}

function resetChallengeTypeSelect() {
  let challengeDate = document.getElementById(CHALLENGE_DATE_INPUT_ELEMENT_ID).value;

  let challengeTypeDiv = document.getElementById(CHALLENGE_TYPE_DIV_ELEMENT_ID);
  challengeTypeDiv.style = INVISIBLE_STYLE;

  let challengeTypeSelect = document.getElementById(CHALLENGE_TYPE_SELECT_ELEMENT_ID);
  challengeTypeSelect.innerHTML = '';
  challengeTypeSelect.value = '';

  if (challengeDate.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
    && Date.parse(challengeDate) >= Date.parse(MIN_CHALLENGE_DATE_ALLOWED)
    && Date.parse(challengeDate) <= Date.parse(getToday())
  ) {
    challengeTypeDiv.style = VISIBLE_STYLE;
    addOptionToSelect(challengeTypeSelect, '', SELECT_NAME);

    let allPersonsToTakeByPersonType = {};
    let lastPersonType = '';
    for (let key in personsData) {
      if (key.match(/^[a-zA-Z]+$/)) {
        lastPersonType = key[0].toUpperCase() + key.slice(1);
        allPersonsToTakeByPersonType[lastPersonType] = {};
      } else if (personsData[key].died != undefined) {
        allPersonsToTakeByPersonType[lastPersonType][key] = key;
      }
    }

    const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
    let options = {};
    for (let type in challengesConfig) {
      const name = getLanguageVariable('name', false, challengesConfig[type].name);
      const requirements = challengesConfig[type].person.requirements ?? {};

      let allPersonsToTakeForChallengeType = {};
      for (let personType of challengesConfig[type].person.types ?? []) {
        allPersonsToTakeForChallengeType = {...allPersonsToTakeForChallengeType, ...allPersonsToTakeByPersonType[personType]};
      }

      if (!checkExistingChallengeTypesBeforeDate(requirements[REQUIREMENT_ANYBODY_HAVING_CHALLENGES] ?? [], challenges, challengeDate)
        || !checkNotExistingChallengeTypes(requirements[REQUIREMENT_EVERYBODY_NOT_HAVING_CHALLENGES] ?? [], challenges)
        || !checkNotExistingChallengeTypesOnTheSameDay(requirements[REQUIREMENT_EVERYBODY_NOT_HAVING_CHALLENGES_ON_THE_SAME_DAY] ?? [], challenges, challengeDate)
        || !checkIfAnyPersonOrFeastPossibleForChallengeTypeRequirements(requirements, allPersonsToTakeForChallengeType, challengeDate)
      ) {
        continue;
      }

      options[type] = name;
    }

    let sorted = getSortedArray(options);

    for (let keyValArr of sorted) {
      const type = keyValArr[0];
      const name = keyValArr[1];

      addOptionToSelect(challengeTypeSelect, type, name + ' (' + type + ')');
    }
  }

  resetPersonTypeSelect();
}

function resetPersonTypeSelect() {
  let challengeDate = document.getElementById(CHALLENGE_DATE_INPUT_ELEMENT_ID).value;
  let challengeType = document.getElementById(CHALLENGE_TYPE_SELECT_ELEMENT_ID).value;

  let personDiv = document.getElementById(PERSON_DIV_ELEMENT_ID);
  personDiv.style = INVISIBLE_STYLE;

  let challengeDescDiv = document.getElementById(CHALLENGE_DESCRIPTION_DIV_ELEMENT_ID);
  challengeDescDiv.innerHTML = '';

  let personTypeSelect = document.getElementById(PERSON_TYPE_SELECT_ELEMENT_ID);
  personTypeSelect.innerHTML = '';
  personTypeSelect.style = INVISIBLE_STYLE;
  personTypeSelect.value = '';

  if (challengeType.length > 0) {
    personDiv.style = VISIBLE_STYLE;

    const descFilePath = getLanguageVariable('description', false, challengesConfig[challengeType].description ?? {});
    importMarkdownDescription(challengeDescDiv, descFilePath);

    let personsTypesToList = {};
    let personsUnlocked = {};
    const typesNeeded = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_HAVING_CHALLENGES] ?? null;
    const addGodToListNeeded = challengesConfig[challengeType].person.requirements[REQUIREMENT_GOD_HAVING_NEEDED_CHALLENGES] ?? false;
    if (typesNeeded != null) {
      personsUnlocked = getPersonsHavingAllChallenges(typesNeeded, challengeDate);

      for (let personId of Object.keys(personsUnlocked)) {
        const personType = getPersonsDataRootName(personId);
        personsTypesToList[personType] = personType;
      }
      if (addGodToListNeeded) {
        personsTypesToList[GOD_HAVING_NEEDED_CHALLENGES_PERSON_NAME_URL] = GOD_HAVING_NEEDED_CHALLENGES_PERSON_NAME_URL;

        const subelements = getPersonsDataSubelements(GOD_HAVING_NEEDED_CHALLENGES_PERSON_NAME_URL);
        for (let subelement of subelements) {
          personsUnlocked[subelement] = subelement;
        }
      }
    }

    const typesNotAllowed = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES] ?? [];
    let personsTypesToSkipCounts = {};
    if (typesNotAllowed.length > 0) {
      const personsToSkip = getPersonsHavingAnyChallenge(typesNotAllowed, challengeDate);

      for (let personId of Object.keys(personsToSkip)) {
        const personTypeId = getPersonsDataRootName(personId);
        personsTypesToSkipCounts[personTypeId] = (personsTypesToSkipCounts[personTypeId] ?? 0) + 1;
      }
    }

    const feastIsNotEmpty = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY] ?? false;
    const feastNotHavingChallenges = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];

    let personsTypesWithFeastsToSkipCounts = {};
    if (feastIsNotEmpty) {
      let feastsToSkip = getPersonsFeastsHavingAnyChallenge(feastNotHavingChallenges, challengeDate);
      for (let feastId of Object.keys(feastsToSkip)) {
        const personTypeId = getPersonsDataRootName(feastId);
        personsTypesWithFeastsToSkipCounts[personTypeId] = (personsTypesWithFeastsToSkipCounts[personTypeId] ?? 0) + 1;
      }
    }

    const personTypes = challengesConfig[challengeType].person.types ?? [];
    if (personTypes.length > 0) {
      personTypeSelect.style = VISIBLE_STYLE;

      let types = {};
      for (let personType of personTypes) {
        const personTypeId = personType.toLowerCase();

        if (typesNeeded != null && !personsTypesToList[personTypeId]) {
          continue;
        }

        if (personsTypesToSkipCounts[personTypeId] != undefined) {
          const allPersonsWithPersonTypeIdCount = Object.keys(personsData).filter(v => v.substring(0, personTypeId.length + 1) == personTypeId + '/' && personsData[v].died != undefined).length;

          if (allPersonsWithPersonTypeIdCount <= personsTypesToSkipCounts[personTypeId]) {
            continue;
          }
        }

        if (feastIsNotEmpty) {
          let allPersonsFeastsWithPersonTypeIdCount = {};
          if (Object.keys(personsUnlocked).length == 0) {
            allPersonsFeastsWithPersonTypeIdCount = Object.keys(personsData)
              .filter(v => v.substring(0, personTypeId.length + 1) == personTypeId + '/'
                && inArray(PERSON_URL_FEAST_SEPARATOR, v) !== false
              )
              .length;
          } else {
            allPersonsFeastsWithPersonTypeIdCount = Object.keys(personsData)
              .filter(v => v.substring(0, personTypeId.length + 1) == personTypeId + '/'
                && inArray(PERSON_URL_FEAST_SEPARATOR, v) !== false
                && personsUnlocked[getPersonsDataDirName(v)] != undefined
              )
              .length;
          }

          if (allPersonsFeastsWithPersonTypeIdCount <= (personsTypesWithFeastsToSkipCounts[personTypeId] ?? 0)) {
            continue;
          }
        }

        types[personTypeId] = getPersonDataName(personTypeId);
      }

      if (Object.keys(types).length > 1) {
        addOptionToSelect(personTypeSelect, '', SELECT_NAME);
      }
      for (let i in types) {
        addOptionToSelect(personTypeSelect, i, types[i]);
      }
    }
  }

  resetPersonNameSelect();
}

function resetPersonNameSelect() {
  let challengeDate = document.getElementById(CHALLENGE_DATE_INPUT_ELEMENT_ID).value;
  let challengeType = document.getElementById(CHALLENGE_TYPE_SELECT_ELEMENT_ID).value;
  let personTypeValue = document.getElementById(PERSON_TYPE_SELECT_ELEMENT_ID).value;

  let personNameSelect = document.getElementById(PERSON_NAME_SELECT_ELEMENT_ID);
  personNameSelect.innerHTML = '';
  personNameSelect.style = INVISIBLE_STYLE;
  personNameSelect.value = '';

  if (personTypeValue.length > 0) {
    let namesToSort = {};
    if (inArray(personTypeValue, COPY_PERSON_TYPE_TO_NAME_IDS)) {
      namesToSort[personTypeValue] = personTypeValue;
    } else {
      personNameSelect.style = VISIBLE_STYLE;

      const typesNeeded = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_HAVING_CHALLENGES] ?? null;
      let personsNamesToList = {};
      if (typesNeeded != null) {
        let personsToList = getPersonsHavingAllChallenges(typesNeeded, challengeDate);

        for (let personId of Object.keys(personsToList)) {
          const personNameId = getPersonsDataDirName(personId);
          personsNamesToList[personNameId] = personNameId;
        }
      }

      const typesNotAllowed = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES] ?? [];
      let personsNamesToSkipCounts = {};
      if (typesNotAllowed.length > 0) {
        const personsToSkip = getPersonsHavingAnyChallenge(typesNotAllowed, challengeDate);

        for (let personId of Object.keys(personsToSkip)) {
          const personNameId = getPersonsDataDirName(personId);
          personsNamesToSkipCounts[personNameId] = (personsNamesToSkipCounts[personNameId] ?? 0) + 1;
        }
      }

      const feastIsNotEmpty = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY] ?? false;
      const feastNotHavingChallenges = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];

      let personsNamesWithFeastsToSkipCounts = {};
      if (feastIsNotEmpty) {
        let feastsToSkip = getPersonsFeastsHavingAnyChallenge(feastNotHavingChallenges, challengeDate);
        for (let feastId of Object.keys(feastsToSkip)) {
          const personId = getPersonsDataDirName(feastId);
          const personNameId = getPersonsDataDirName(personId);
          personsNamesWithFeastsToSkipCounts[personNameId] = (personsNamesWithFeastsToSkipCounts[personNameId] ?? 0) + 1;
        }
      }

      const subelements = getPersonsDataSubelements(personTypeValue);
      for (let subelement of subelements) {
        if (typesNeeded != null && !personsNamesToList[subelement]) {
          continue;
        }

        if (personsNamesToSkipCounts[subelement] != undefined) {
          const nameSubelements = getPersonsDataSubelements(subelement);
          if (nameSubelements.length <= personsNamesToSkipCounts[subelement]) {
            continue;
          }
        }

        if (feastIsNotEmpty) {
          let toContinue = false;

          const personSubelements = getPersonsDataSubelements(subelement);
          let feastsCount = 0;
          for (let personSubelement of personSubelements) {
            const feastsSubelements = getPersonsDataSubelements(personSubelement);
            feastsCount += feastsSubelements.length;
          }
          if (feastsCount <= (personsNamesWithFeastsToSkipCounts[subelement] ?? 0)) {
            continue;
          }
        }

        namesToSort[subelement] = getPersonDataName(subelement);
      }
    }

    const sortedNames = getSortedArray(namesToSort);
    let names = {};
    for (let nameData of sortedNames) {
      const key = nameData[0];
      const value = nameData[1];

      names[key] = value;
    }

    if (Object.keys(names).length > 1) {
      addOptionToSelect(personNameSelect, '', SELECT_NAME);
    }
    for (let i in names) {
      addOptionToSelect(personNameSelect, i, names[i]);
    }
  }

  resetPersonSelect();
}

async function resetPersonSelect() {
  let challengeDate = document.getElementById(CHALLENGE_DATE_INPUT_ELEMENT_ID).value;
  let challengeType = document.getElementById(CHALLENGE_TYPE_SELECT_ELEMENT_ID).value;
  let personTypeValue = document.getElementById(PERSON_TYPE_SELECT_ELEMENT_ID).value;
  let personNameValue = document.getElementById(PERSON_NAME_SELECT_ELEMENT_ID).value;

  let personSelect = document.getElementById(PERSON_SELECT_ELEMENT_ID);
  personSelect.innerHTML = '';
  personSelect.style = INVISIBLE_STYLE;
  personSelect.value = '';

  if (personNameValue.length > 0) {
    let namesToSort = {};
    if (inArray(personTypeValue, COPY_PERSON_NAME_TO_ID_IDS)) {
      namesToSort[personNameValue] = personNameValue;
    } else {
      personSelect.style = VISIBLE_STYLE;

      const typesNeeded = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_HAVING_CHALLENGES] ?? null;
      const addGodToListNeeded = challengesConfig[challengeType].person.requirements[REQUIREMENT_GOD_HAVING_NEEDED_CHALLENGES] ?? false;
      let personsToList = {};
      if (typesNeeded != null) {
        personsToList = getPersonsHavingAllChallenges(typesNeeded, challengeDate);

        if (addGodToListNeeded) {
          const subelements = getPersonsDataSubelements(GOD_HAVING_NEEDED_CHALLENGES_PERSON_NAME_URL);
          for (let subelement of subelements) {
            personsToList[subelement] = subelement;
          }
        }
      }

      const typesNotAllowed = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES] ?? [];
      const personsToSkip = getPersonsHavingAnyChallenge(typesNotAllowed, challengeDate);

      const feastIsNotEmpty = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY] ?? false;
      const feastNotHavingChallenges = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];

      let personsWithFeastsToSkipCounts = {};
      if (feastIsNotEmpty) {
        let feastsToSkip = getPersonsFeastsHavingAnyChallenge(feastNotHavingChallenges, challengeDate);
        for (let feastId of Object.keys(feastsToSkip)) {
          const personId = getPersonsDataDirName(feastId);
          personsWithFeastsToSkipCounts[personId] = (personsWithFeastsToSkipCounts[personId] ?? 0) + 1;
        }
      }

      const subelements = getPersonsDataSubelements(personNameValue);
      for (let subelement of subelements) {
        if (typesNeeded != null && !personsToList[subelement]) {
          continue;
        }

        if (personsToSkip[subelement]) {
          continue;
        }

        if (feastIsNotEmpty) {
          const feastsSubelements = getPersonsDataSubelements(subelement);
          if (feastsSubelements.length <= (personsWithFeastsToSkipCounts[subelement] ?? 0)) {
            continue;
          }
        }

        namesToSort[subelement] = getPersonDataName(subelement);
      }
    }

    const sortedNames = getSortedArray(namesToSort);
    let persons = {};
    for (let personData of sortedNames) {
      const key = personData[0];
      const value = personData[1];

      persons[key] = value;
    }

    if (Object.keys(persons).length > 1) {
      addOptionToSelect(personSelect, '', SELECT_NAME);
    }
    for (let i in persons) {
      addOptionToSelect(personSelect, i, persons[i]);
    }
  }

  resetFeastSelect();
}

function resetFeastSelect() {
  let challengeDate = document.getElementById(CHALLENGE_DATE_INPUT_ELEMENT_ID).value;
  let challengeType = document.getElementById(CHALLENGE_TYPE_SELECT_ELEMENT_ID).value;
  let personValue = document.getElementById(PERSON_SELECT_ELEMENT_ID).value;

  let feastSelect = document.getElementById(FEAST_SELECT_ELEMENT_ID);
  feastSelect.innerHTML = '';
  feastSelect.style = INVISIBLE_STYLE;
  feastSelect.value = '';

  if (personValue.length > 0) {
    const feastIsNotEmpty = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY] ?? false;
    const feastHavingChallenges = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_HAVING_CHALLENGES] ?? [];
    const feastNotHavingChallenges = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];

    let namesToSort = {};
    if (feastIsNotEmpty || feastHavingChallenges.length > 0 || feastNotHavingChallenges.length > 0) {
      feastSelect.style = VISIBLE_STYLE;

      const typesNeeded = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_HAVING_CHALLENGES] ?? null;
      let feastsToList = {};
      if (typesNeeded != null) {
        feastsToList = getPersonsFeastsHavingAllChallenges(typesNeeded, challengeDate);
      }

      const typesNotAllowed = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];
      const feastsToSkip = getPersonsFeastsHavingAnyChallenge(typesNotAllowed, challengeDate);

      const subelements = getPersonsDataSubelements(personValue);
      for (let subelement of subelements) {
        if (typesNeeded != null && !feastsToList[subelement]) {
          continue;
        }

        if (feastsToSkip[subelement]) {
          continue;
        }

        namesToSort[subelement] = getPersonDataName(subelement);
      }
    }

    const sortedNames = getSortedArray(namesToSort);
    let feasts = {};
    for (let feastData of sortedNames) {
      const key = feastData[0];
      const value = feastData[1];

      feasts[key] = value;
    }

    const feastsCount = Object.keys(feasts).length;
    if (feastsCount > 1) {
      addOptionToSelect(feastSelect, '', SELECT_NAME);
    }
    if (!feastIsNotEmpty) {
      addOptionToSelect(feastSelect, personValue, getLanguageVariable(SELECTED_PERSON_IN_GENERAL_LANGUAGE_VARIABLE_NAME));

      if (feastsCount == 0) {
        feastSelect.style = INVISIBLE_STYLE;
      }
    }
    for (let i in feasts) {
      addOptionToSelect(feastSelect, i, feasts[i]);
    }
  }

  resetRequiredNotes();
}

function resetRequiredNotes() {
  const feastValue = document.getElementById(FEAST_SELECT_ELEMENT_ID).value;

  let requiredNotesDiv = document.getElementById(REQUIRED_NOTES_DIV_ELEMENT_ID);
  requiredNotesDiv.style = INVISIBLE_STYLE;

  let requiredNotesDoneInput = document.getElementById(REQUIRED_NOTES_DONE_INPUT_ELEMENT_ID);
  requiredNotesDoneInput.value = '';

  if (feastValue.length > 0) {
    //... todo later

    requiredNotesDoneInput.value = '1';
    resetNewChallengeChecklistValues();
  }

  resetRequiredChecklistSteps();
}

async function resetRequiredChecklistSteps() {
  const challengeType = document.getElementById(CHALLENGE_TYPE_SELECT_ELEMENT_ID).value;
  const requiredNotesDone = document.getElementById(REQUIRED_NOTES_DONE_INPUT_ELEMENT_ID).value;

  let requiredChecklistStepsDiv = document.getElementById(REQUIRED_CHECKLIST_STEPS_DIV_ELEMENT_ID);
  requiredChecklistStepsDiv.style = INVISIBLE_STYLE;

  let requiredChecklistStepsDoneInput = document.getElementById(REQUIRED_CHECKLIST_STEPS_DONE_INPUT_ELEMENT_ID);
  requiredChecklistStepsDoneInput.value = '';

  let requiredChecklistStepsInfo = document.getElementById(REQUIRED_CHECKLIST_STEPS_INFO_ELEMENT_ID);
  requiredChecklistStepsInfo.style = INVISIBLE_STYLE;

  if (requiredNotesDone.length > 0) {
    let checklistStepsList = document.getElementById(REQUIRED_CHECKLIST_STEPS_LIST_ELEMENT_ID);
    checklistStepsList.innerHTML = '';

    const rowId = 0;
    const checklist = (challengesConfig[challengeType] ?? {})[CONFIG_FIELD_CHECKLIST] ?? {};

    let allValuesAreDone = true;
    for (let data of Object.entries(checklist)) {
      const itemType = data[0] ?? null;
      const toCompleteOnSelectedDate = (data[1] ?? {})['to-complete-on-selected-date'] ?? false;

      if (toCompleteOnSelectedDate) {
        const value = getNewChallengeChecklistValue(itemType);
        await drawChecklistRow(checklistStepsList, rowId, challengeType, itemType, value);

        if (value !== true) {
          allValuesAreDone = false;
        }

        requiredChecklistStepsInfo.style = VISIBLE_STYLE;
      }
    }

    if (allValuesAreDone) {
      requiredChecklistStepsDoneInput.value = '1';
    }
    requiredChecklistStepsDiv.style = VISIBLE_STYLE;
  }

  resetAddNewChallengeButton();
}

function resetAddNewChallengeButton() {
  const requiredChecklistStepsDone = document.getElementById(REQUIRED_CHECKLIST_STEPS_DONE_INPUT_ELEMENT_ID).value;

  let button = document.getElementById(ADD_NEW_CHALLENGE_BUTTON_ELEMENT_ID);
  button.disabled = !(requiredChecklistStepsDone.length > 0);
}

function addOptionToSelect(select, value, name) {
  const option = document.createElement('option');
  option.innerHTML = name;
  option.value = value;

  select.append(option);
}

function getSortedArray(object) {
  return Object.entries(object).sort(function(a, b) {
    var x = a[1].toLowerCase();
    var y = b[1].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

function addNewChallenge() {
  const feastValue = document.getElementById(FEAST_SELECT_ELEMENT_ID).value;

  const date = document.getElementById(CHALLENGE_DATE_INPUT_ELEMENT_ID).value;
  const type = document.getElementById(CHALLENGE_TYPE_SELECT_ELEMENT_ID).value;
  const person = document.getElementById(PERSON_SELECT_ELEMENT_ID).value;
  const feast = feastValue.substring(person.length + 1);
  const checklist = newChallengeChecklistValues;
  const notes = {};

  resetNewChallengeChecklistValues();

  if (fileData[DATA_FIELD_CHALLENGES] == undefined) {
    fileData[DATA_FIELD_CHALLENGES] = [];
  }

  const record = {
    date: date,
    person: person,
    type: type,
    feast: feast,
    checklist: checklist,
    notes: notes
  };
  fileData[DATA_FIELD_CHALLENGES].push(record);

  sortChallengesByDate();
  recalculateFileData();

  fileContent = JSON.stringify(fileData);
  fileData = parseFileDataFromContent(fileContent);

  reloadChallengesTab();
  success(getLanguageVariable('lang-new-challenge-created-successfully', true));
}

function recalculateFileData() {
  let challenges = [];
  for (let ch of fileData[DATA_FIELD_CHALLENGES] ?? []) {
    let oldChecklist = structuredClone(ch.checklist);
    let checklist = {};
    for (let i in challengesConfig[ch.type].checklist ?? {}) {
      checklist[i] = ch.checklist[i] ?? null;
      delete oldChecklist[i];
    }
    for (let i in oldChecklist) {
      checklist[i] = oldChecklist[i];
    }

    let oldNotes = structuredClone(ch.notes);
    let notes = {};
    for (let i in challengesConfig[ch.type].notes ?? {}) {
      notes[i] = ch.notes[i] ?? [];
      delete oldNotes[i];
    }
    for (let i in oldNotes) {
      notes[i] = oldNotes[i];
    }

    challenges.push({
      date: ch.date ?? '',
      person: ch.person ?? '',
      type: ch.type ?? '',
      feast: ch.feast ?? '',
      checklist: checklist,
      notes: notes
    });
  }

  fileData = {
    [DATA_FIELD_OWNER]: fileData[DATA_FIELD_OWNER] ?? '',
    [DATA_FIELD_FILENAME_WITHOUT_EXTENSION]: fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION] ?? '',
    [DATA_FIELD_CHALLENGES]: challenges
  };
}



function drawProgressBarValue(rowId) {
  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  const rowData = challenges[rowId - 1] ?? {};
  const stepsConfig = challengesConfig[rowData.type][CONFIG_FIELD_CHECKLIST] ?? [];
  const totalCount = Object.keys(stepsConfig).length;

  let doneCount = 0;
  let optionalCount = 0;
  let abortedCount = 0;
  let waitingCount = 0;
  for (let stepId in stepsConfig) {
    switch (rowData[DATA_FIELD_CHECKLIST][stepId] ?? null) {
      case null:
        if (false == (stepsConfig[stepId].required ?? true)) {
          optionalCount++;
        } else {
          waitingCount++;
        }
        break;
      case true:
        doneCount++;
        break;
      case false:
        abortedCount++;
        break;
      default:
        waitingCount++;
        break;
    }
  }

  let donePercent = Math.floor(doneCount * 100 / totalCount);
  let optionalPercent = Math.floor(optionalCount * 100 / totalCount);
  let abortedPercent = Math.floor(abortedCount * 100 / totalCount);
  let waitingPercent = Math.floor(waitingCount * 100 / totalCount);

  let missingPercent = 100 - donePercent - optionalPercent - abortedPercent - waitingPercent;
  if (missingPercent > 0 && waitingCount > 0) {
    waitingPercent += missingPercent;
  } else if (missingPercent > 0 && abortedCount > 0) {
    abortedPercent += missingPercent;
  } else if (missingPercent > 0 && optionalCount > 0) {
    optionalPercent += missingPercent;
  } else if (missingPercent > 0 && doneCount > 0) {
    donePercent += missingPercent;
  }

  let doneProgress = document.getElementById(PROGRESS_DONE_ELEMENT_ID_PREFIX + rowId);
  let optionalProgress = document.getElementById(PROGRESS_OPTIONAL_ELEMENT_ID_PREFIX + rowId);
  let abortedProgress = document.getElementById(PROGRESS_ABORTED_ELEMENT_ID_PREFIX + rowId);

  setProgressBarPartValues(doneProgress, doneCount, donePercent, totalCount);
  setProgressBarPartValues(optionalProgress, optionalCount, optionalPercent, totalCount);
  setProgressBarPartValues(abortedProgress, abortedCount, abortedPercent, totalCount);
}

function setProgressBarPartValues(element, count, percent, totalCount) {
  element.setAttribute('style', 'width: ' + percent + '%');
  element.setAttribute('aria-valuenow', percent);
  element.innerHTML = count > 0 ? count + '/' + totalCount : '';
}

async function checklistListReset(rowId) {
  let modalBody = document.getElementById(CHECKLIST_LIST_MODAL_BODY_ELEMENT_ID);
  modalBody.innerHTML = '';

  let challengeType = ((fileData[DATA_FIELD_CHALLENGES] ?? [])[rowId - 1] ?? {}).type ?? null;
  let checklist = ((fileData[DATA_FIELD_CHALLENGES] ?? [])[rowId - 1] ?? {})[DATA_FIELD_CHECKLIST] ?? [];

  if (Object.keys(checklist).length == 0 || challengeType == null) {
    modalBody.innerHTML = getLanguageVariable('lang-checklist-is-empty', true);

    return;
  }

  for (let data of Object.entries(checklist)) {
    await drawChecklistRow(modalBody, rowId, challengeType, data[0] ?? null, data[1] ?? null);
  }
}

async function drawChecklistRow(contentElement, rowId, challengeType, itemType, value) {
  const element = document.createElement('div');

  const config = ((challengesConfig[challengeType] ?? [])[CONFIG_FIELD_CHECKLIST] ?? [])[itemType] ?? {};
  if (Object.keys(config).length == 0) {
    return;
  }
  const required = config.required ?? true;
  const name = getLanguageVariable('name', true, config.name ?? {});

  let status = null;
  switch (value) {
    case true:
      status = CHECKLIST_STATUS_DONE;
      break;
    case false:
      status = CHECKLIST_STATUS_ABORTED;
      break;
    case null:
    default:
      status = required ? CHECKLIST_STATUS_WAITING : CHECKLIST_STATUS_OPTIONAL_WAITING;
      break;
  }
  const statusColor = CHECKLIST_STATUSES[status].color;
  const statusName = getLanguageVariable(CHECKLIST_STATUSES[status].variable);

  const content = await getFileContent(CHECKLIST_ITEM_TEMPLATE_FILE_PATH);
  element.innerHTML = content
    .replace(/#type#/g, itemType)
    .replace(/#name#/g, name)
    .replace(/#status-color#/g, statusColor)
    .replace(/#status-name#/g, statusName)
    .replace(/#row-id#/g, rowId)
    .replace(/#challenge-type#/g, challengeType)
    .replace(/#checklist-status#/g, value == null ? 'null' : value.toString())
  ;

  contentElement.append(element);
}

async function drawChecklistInfo(challengeType, rowId, itemType, itemStatus) {
  const descElement = document.getElementById(CHECKLIST_ITEM_DESCRIPTION_ELEMENT_ID);
  const labelElement = document.getElementById(CHECKLIST_ITEM_MODAL_TOGGLE_LABEL_ELEMENT_ID);
  const rowIdElement = document.getElementById(CHECKLIST_ITEM_MODAL_ROW_ID_ELEMENT_ID);
  const itemTypeElement = document.getElementById(CHECKLIST_ITEM_MODAL_ITEM_TYPE_ELEMENT_ID);

  rowIdElement.value = rowId;
  itemTypeElement.value = itemType;

  const abortedButton = document.getElementById(CHECKLIST_BUTTON_ABORTED_ELEMENT_ID);
  const optionalWaitingButton = document.getElementById(CHECKLIST_BUTTON_OPTIONAL_WAITING_ELEMENT_ID);
  const waitingButton = document.getElementById(CHECKLIST_BUTTON_WAITING_ELEMENT_ID);
  const doneButton = document.getElementById(CHECKLIST_BUTTON_DONE_ELEMENT_ID);

  abortedButton.style = INVISIBLE_STYLE;
  optionalWaitingButton.style = INVISIBLE_STYLE;
  waitingButton.style = INVISIBLE_STYLE;
  doneButton.style = INVISIBLE_STYLE;

  const config = ((challengesConfig[challengeType] ?? [])[CONFIG_FIELD_CHECKLIST] ?? [])[itemType] ?? [];
  if (Object.keys(config).length == 0) {
    return;
  }
  const toCompleteOnSelectedDate = config['to-complete-on-selected-date'] ?? false;
  const required = config.required ?? true;
  const name = getLanguageVariable('name', true, config.name ?? {});
  const descFilePath = getLanguageVariable('description', false, config.description ?? {});

  labelElement.innerHTML = name;
  importMarkdownDescription(descElement, descFilePath);

  doneButton.style = VISIBLE_STYLE;
  if (!toCompleteOnSelectedDate) {
    if (required) {
      waitingButton.style = VISIBLE_STYLE;
    } else {
      optionalWaitingButton.style = VISIBLE_STYLE;
    }
    abortedButton.style = VISIBLE_STYLE;
  }
}

async function setChecklistStatus(newValue) {
  const rowIdElement = document.getElementById(CHECKLIST_ITEM_MODAL_ROW_ID_ELEMENT_ID);
  const itemTypeElement = document.getElementById(CHECKLIST_ITEM_MODAL_ITEM_TYPE_ELEMENT_ID);

  const rowId = rowIdElement.value;
  const itemType = itemTypeElement.value;

  if (rowId > 0) {
    const oldValues = ((fileData[DATA_FIELD_CHALLENGES] ?? [])[rowId - 1] ?? {})[DATA_FIELD_CHECKLIST] ?? {};
    if (Object.keys(oldValues).length > 0 && oldValues[itemType] !== undefined) {
      fileData[DATA_FIELD_CHALLENGES][rowId - 1][DATA_FIELD_CHECKLIST][itemType] = newValue;

      fileContent = JSON.stringify(fileData);
      fileData = parseFileDataFromContent(fileContent);

      checklistListReset(rowId);
    }
  } else {
    setNewChallengeChecklistValue(itemType, newValue);
    await resetRequiredChecklistSteps();
  }
}

async function importMarkdownDescription(element, filePath) {
  element.innerHTML = '';

  const fullFilePath = MARKDOWN_FILES_ROOT_PATH + filePath + MARKDOWN_FILE_EXTENSION;
  try {
    const template = await getFileContent(DESCRIPTION_CONTENT_BLOCK_TEMPLATE_FILE_PATH);
    const content = await getFileContent(fullFilePath);

    element.innerHTML = template.replace(/#content#/, content);
  } catch (e) {
  }
}

async function removeChallengeReset(rowId) {
  const row = document.getElementById(CHALLENGE_TO_REMOVE_ELEMENT_ID);
  const modalRowId = document.getElementById(REMOVE_CHALLENGE_MODAL_ROW_ID_ELEMENT_ID);

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  const challenge = challenges[rowId - 1] ?? undefined;

  row.innerHTML = '';
  if (challenge !== undefined) {
    const content = await getFileContent(CHALLENGE_ITEM_TO_REMOVE_TEMPLATE_FILE_PATH);

    let date = challenge.date ?? '';
    let personUrl = (challenge.person ?? '');
    let feast = challenge.feast ?? '';
    let feastUrl = feast.length > 0 ? personUrl + PERSON_URL_FEAST_SEPARATOR + feast : '';
    let type = challenge.type ?? '';
    let number = '';

    if (challengesConfig[type].numbers ?? false) {
      number = 1;
      for (let i = 0; i < rowId - 1; i++) {
        if ((challenges[i].person ?? '') === personUrl && (challenges[i].type ?? '') === type) {
          number++;
        }
      }
    }

    row.innerHTML = content
      .replace(/#row-id#/g, rowId)
      .replace(/#date#/g, getDateFormat(date))
      .replace(/#type#/g, type)
      .replace(/#number#/g, number.toString())
      .replace(/#person-url#/g, personUrl)
      .replace(/#person#/g, getPersonDataName(personUrl))
      .replace(/#feast-url#/g, feastUrl.length > 0 ? feastUrl + ANCHOR_CHARACTER + feast : '')
      .replace(/#feast#/g, feastUrl.length > 0 ? getPersonDataName(feastUrl) : '')
    ;
  }

  modalRowId.value = rowId;
}

function removeChallenge() {
  const rowId = document.getElementById(REMOVE_CHALLENGE_MODAL_ROW_ID_ELEMENT_ID).value ?? 0;

  (fileData[DATA_FIELD_CHALLENGES] ?? []).splice(rowId - 1, 1);

  refreshChallengesTabAfterChange();
  success(getLanguageVariable('lang-challenge-removed-successfully', true));
}

function moveChallengeUp(rowId) {
  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  const current = challenges[rowId - 1] ?? {};
  const previous = challenges[rowId - 2] ?? {};

  if (Object.keys(current).length > 0 && current.date === previous.date) {
    fileData[DATA_FIELD_CHALLENGES][rowId - 1] = previous;
    fileData[DATA_FIELD_CHALLENGES][rowId - 2] = current;
  }

  refreshChallengesTabAfterChange();
  success(getLanguageVariable('lang-challenges-order-changed-successfully', true));
}

function moveChallengeDown(rowId) {
  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  const current = challenges[rowId - 1] ?? {};
  const next = challenges[rowId] ?? {};

  if (Object.keys(current).length > 0 && current.date === next.date) {
    fileData[DATA_FIELD_CHALLENGES][rowId - 1] = next;
    fileData[DATA_FIELD_CHALLENGES][rowId] = current;
  }

  refreshChallengesTabAfterChange();
  success(getLanguageVariable('lang-challenges-order-changed-successfully', true));
}

function refreshChallengesTabAfterChange() {
  sortChallengesByDate();

  fileContent = JSON.stringify(fileData);
  fileData = parseFileDataFromContent(fileContent);
  reloadChallengesTab();
}

function resetNewChallengeChecklistValues() {
  newChallengeChecklistValues = {};
}

function setNewChallengeChecklistValue(itemType, value) {
  newChallengeChecklistValues[itemType] = value;
}

function getNewChallengeChecklistValue(itemType) {
  return newChallengeChecklistValues[itemType] ?? null;
}

function resetNewChallengeNotesValues() {
  newChallengeNotesValues = {};
}

function setNewChallengeNoteValue(itemType, value) {
  newChallengeNotesValues[itemType] = value;
}

function getNewChallengeNoteValue(itemType) {
  return newChallengeNotesValues[itemType] ?? null;
}

async function notesReset(rowId) {
  lastEditedNoteItem = [];

  let notesListElement = document.getElementById(NOTES_LIST_ELEMENT_ID);
  notesListElement.innerHTML = '';

  let challengeType = ((fileData[DATA_FIELD_CHALLENGES] ?? [])[rowId - 1] ?? {}).type ?? null;
  let notes = ((fileData[DATA_FIELD_CHALLENGES] ?? [])[rowId - 1] ?? {})[DATA_FIELD_NOTES] ?? {};

  if (Object.keys(notes).length == 0 || challengeType == null) {
    notesListElement.innerHTML = getLanguageVariable('lang-there-is-no-note-for-this-challenge', true);

    return;
  }

  for (let itemType of Object.keys(notes)) {
    await drawNoteRow(notesListElement, rowId, challengeType, itemType);
  }
}

async function drawNoteRow(contentElement, rowId, challengeType, itemType) {
  const element = document.createElement('div');

  const config = ((challengesConfig[challengeType] ?? [])[CONFIG_FIELD_NOTES] ?? [])[itemType] ?? {};
  let name = getLanguageVariable('name', true, config.name ?? {});
  if (name.substring(0, 3) === LANGUAGE_MISSING_VARIABLE_SIGN) {
    name = itemType;
  }

  const content = await getFileContent(NOTE_ITEM_TEMPLATE_FILE_PATH);
  element.innerHTML = content
    .replace(/#name#/g, name)
    .replace(/#row-id#/g, rowId)
    .replace(/#challenge-type#/g, challengeType)
    .replace(/#item-type#/g, itemType)
  ;
  contentElement.append(element);

  showNoteContent(rowId, challengeType, itemType);
}

function isNoteDataStructureValid(data, level = 0) {
  if (level > MAX_NOTE_OBJECT_STRUCTURE_LEVELS || !Array.isArray(data)) {
    return false;
  }

  for (const item of data) {
    if (typeof item !== 'object' || item === null || Object.keys(item).length === 0) {
      return false;
    }

    for (const key of Object.keys(item)) {
      if (!key.match(/^[0-9]+$/)) {
        return false;
      }

      if (!isNoteDataStructureValid(item[key], level + 1)) {
        return false;
      }
    }
  }

  return true;
}

function getNoteValueDepthLevelsCount(value, level = 0) {
  let result = level;

  for (const item of value) {
    for (const key of Object.keys(item)) {
      result = Math.max(result, getNoteValueDepthLevelsCount(item[key], level + 1));
    }
  }

  return result;
}

function getNoteTableHeaders(data, challengeConfig, depthLevelsCount) {
  let result = [];
  for (const noteType of Object.keys(challengeConfig.type ?? {})) {
    let noteName = getLanguageVariable('name', false, (notesTypesConfig[noteType] ?? {}).name ?? {});
    if (noteName.substring(0, 3) === LANGUAGE_MISSING_VARIABLE_SIGN) {
      noteName = MISSING_TABLE_HEADER_NOTE_NAME;
    }

    result.push(noteName);
  }

  for (let i = result.length; i < depthLevelsCount; i++) {
    result.push(MISSING_TABLE_HEADER_NOTE_NAME);
  }

  return result;
}

async function changeNoteItemModeToEdit(rowId, challengeType, itemType) {
  if (lastEditedNoteItem[rowId] === itemType) {
    return;
  } else if (lastEditedNoteItem[rowId] !== undefined) {
    await showNoteContent(rowId, challengeType, lastEditedNoteItem[rowId]);
  }
  lastEditedNoteItem = [];
  lastEditedNoteItem[rowId] = itemType;

  const isEditMode = true;
  await showNoteContent(rowId, challengeType, itemType, isEditMode);
}

async function showNoteContent(rowId, challengeType, itemType, isEditMode = false) {
  const element = document.getElementById(NOTE_VALUE_ELEMENT_ID_PREFIX + itemType);
  element.innerHTML = '';

  const value = (((fileData[DATA_FIELD_CHALLENGES] ?? [])[rowId - 1] ?? {})[DATA_FIELD_NOTES] ?? {})[itemType] ?? getNewChallengeNoteValue(itemType);
  const challengeConfig = ((challengesConfig[challengeType] ?? {})[CONFIG_FIELD_NOTES] ?? {})[itemType] ?? {};

  if (!isNoteDataStructureValid(value)) {
    element.innerHTML = getLanguageVariable('lang-you-cannot-read-this-note-due-to-its-invalid-structure', true);
    element.innerHTML += ' (json:' + JSON.stringify(value) + ')';
    return;
  } else if (!isEditMode && value.length === 0) {
    element.innerHTML = getLanguageVariable('lang-non-existence');
    return;
  }

  const depthLevelsCount = getNoteValueDepthLevelsCount(value);
  const tableHeaders = getNoteTableHeaders(value, challengeConfig, depthLevelsCount);
  const valueData = await getNoteValueData(rowId, challengeConfig, itemType, value, [], depthLevelsCount, isEditMode);
  let content = '<thead><tr><th>'
    + tableHeaders.join('</th><th>')
    + '</th></tr></thead><tbody>'
    + valueData.content
    + '</tbody>'
  ;

  element.innerHTML = content;
}

async function getNoteValueData(rowId, challengeConfig, itemType, value, path, depthLevelsCount, isEditMode, level = 1) {
  let content = '';
  let totalRows = 0;

  let noItemsExist = true;
  for (const noteKey in value) {
    noItemsExist = false;

    for (const noteId of Object.keys(value[noteKey] ?? {})) {
      const itemPath = path.concat([noteKey, noteId]);
      const subValue = value[noteKey][noteId];
      const data = await getNoteValueData(rowId, challengeConfig, itemType, subValue, itemPath, depthLevelsCount, isEditMode, level + 1);

      totalRows += data.rows;
      content += await getNoteCellContent(rowId, challengeConfig, itemType, itemPath, value.length, data.rows, isEditMode);
      content += data.content;
    }
  }

  if (noItemsExist) {
    for (let i = 0; i <= depthLevelsCount - level; i++) {
      content += '<td rowspan="1"></td>';
    }
    if (level > 1) {
      content += '</tr><tr>';
    }
  }
  if (level === 1) {
    content = content.replace(new RegExp('</tr><tr>$'), '');
    content = '<tr>' + content + '</tr>';
  }

  return {
    rows: Math.max(1, totalRows),
    content: content
  };
}

async function getNoteCellContent(rowId, challengeConfig, itemType, itemPath, totalNotes, rowsCount, isEditMode) {
  const template = await getFileContent(NOTE_CELL_ITEM_TEMPLATE_FILE_PATH);

  const cellElementId = itemType + '-' + itemPath.join('-');
  const noteId = itemPath.at(-1);
  const noteNo = Number(itemPath.at(-2) ?? '0') + 1;

  let noteType = null;
  let noteQuantity = null;
  let doubleLoopTimes = itemPath.length;
  for (const noteTypeData of Object.entries(challengeConfig.type ?? {})) {
    doubleLoopTimes -= 2;
    if (doubleLoopTimes <= 0) {
      noteType = noteTypeData[0] ?? null;
      noteQuantity = noteTypeData[1] ?? null;
    }
  }

  const content = !isEditMode ? noteId : 'rowId=' + rowId + ', itemType=' + itemType + ', path=' + itemPath.join('/') + ', noteNo=' + noteNo + ' [of ' + totalNotes + '], noteId=' + noteId + ', noteType=' + noteType + ', noteQuantity=' + noteQuantity;

  //todo - if isEditMode then add edit cell button; if noteQuantity is greater than max then add remove button; add move position buttons

  return template
    .replace(/#note-cell-id#/, cellElementId)
    .replace(/#rows-count#/, rowsCount)
    .replace(/#content#/, content)
  ;
}

build();
