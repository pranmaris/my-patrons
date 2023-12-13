const DEV_HOSTNAME_REMOVE_STRING = '.dev';

const SELECT_NAME = '...';
const NAME_TO_IGNORE = '~~~';

const ANCHOR_CHARACTER = '#';

const MISSING_INDEX_OF_VALUE = -1;

const LANGUAGE_MISSING_VARIABLE_SIGN = '!!!';
const LANGUAGE_JSON_FILE = '/files/data/website-language-variables.json';
const CHALLENGES_DATA_JSON_FILE = '/files/data/challenges.json';
const PERSONS_DATA_JSON_FILE = '/files/data/generated/persons-data.generated.json';

const CSS_FILE_PATH = '/files/resources/css/notes.css';
const CHALLENGE_ITEM_TEMPLATE_FILE_PATH = '/files/resources/html/items/notes-challenge-item.html';
const NOTIFICATION_ITEM_TEMPLATE_FILE_PATH = '/files/resources/html/items/notes-notification-item.html';

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
const ADD_NEW_CHALLENGE_BUTTON_ELEMENT_ID = 'add-new-challenge-button';
const PERSON_DIV_ELEMENT_ID = 'person-div';
const PERSON_NAME_SELECT_ELEMENT_ID = 'person-name-select';
const PERSON_TYPE_SELECT_ELEMENT_ID = 'person-type-select';
const PERSON_SELECT_ELEMENT_ID = 'person-select';
const FEAST_SELECT_ELEMENT_ID = 'feast-select';
const PERSON_URL_ELEMENT_ID_PREFIX = 'person-url-';
const FEAST_URL_ELEMENT_ID_PREFIX = 'feast-url-';

const PERSON_URL_FEAST_SEPARATOR = '@';
const REMOVE_PERSON_URL_LINK_HREFS = ['me'];

const INPUT_FOR_FILENAME_WITHOUT_EXTENSION_ELEMENT_ID = 'input-for-filename-without-extension';
const INPUT_FOR_OWNER_ELEMENT_ID = 'input-for-owner';

const PERSONS_DATA_FIELD_NAMES = 'names';
const PERSONS_DATA_FIELD_DIED = 'died';

const DATA_FIELD_CHALLENGES = 'challenges';
const DATA_FIELD_FILENAME_WITHOUT_EXTENSION = 'filename-without-extension';
const DATA_FIELD_OWNER = 'owner';

const PERSON_TYPE_GOD = 'God';
const PERSON_TYPE_ME = 'Me';
const PERSON_TYPE_PATRONS = 'Patrons';
const COPY_PERSON_TYPE_TO_NAME_IDS = ['me', 'god'];
const COPY_PERSON_NAME_TO_ID_IDS = ['me'];
const GOD_ALWAYS_HAVING_CHALLENGES_NEEDED_PERSON_NAME_URL = 'god';

const REQUIREMENT_ANYBODY_HAVING_CHALLENGES = 'anybody-having-challenges';
const REQUIREMENT_EVERYBODY_NOT_HAVING_CHALLENGES = 'everybody-not-having-challenges';
const REQUIREMENT_GOD_ALWAYS_HAVING_CHALLENGES = 'god-always-having-challenges';
const REQUIREMENT_PERSON_HAVING_CHALLENGES = 'person-having-challenges';
const REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES = 'person-not-having-challenges';
const REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY = 'person-feast-is-not-empty';
const REQUIREMENT_PERSON_FEAST_HAVING_CHALLENGES = 'person-feast-having-challenges';
const REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES = 'person-feast-not-having-challenges';

const JSON_MIME_TYPE = 'application/json';
const JSON_DATA_FILE_EXTENSION = '.mypatrons.json';

const JSON_STRINGIFY_SPACES = 2;

const WEEKDAY_LANGUAGE_VARIABLES_PREFIX = 'lang-weekday-abbreviation-';

const SELECTED_PERSON_IN_GENERAL_LANGUAGE_VARIABLE_NAME = 'lang-without-feast-selection';

let challengesConfig = {};
let languageVariables = {};
let filesContents = {};
let filesContentsErrors = {};
let personsData = {};
let personsDataSubelementsCache = {};

let fileName = DEFAULT_JSON_FILENAME + JSON_DATA_FILE_EXTENSION;
let fileContent = '{}';
let fileData = null;

async function build() {
  appendNotesCss();
  languageVariables = await getJsonFromFile(LANGUAGE_JSON_FILE);
  challengesConfig = await getJsonFromFile(CHALLENGES_DATA_JSON_FILE);
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
    parseFileDataFromContent(fileContent);
    if (fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION]) {
      fileName = fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION] + JSON_DATA_FILE_EXTENSION;
    }

    reloadFileTab();
  } catch (e) {
    error(e.message);
  }
}

function saveFile() {
  try {
    parseFileDataFromContent(fileContent);
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
    parseFileDataFromContent(fileContent);

    inputForOwner.value = fileData[DATA_FIELD_OWNER] ?? '';
    inputForFilenameWithoutExtension.value = fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION] ?? '';
  } catch (e) {
    error(e.message);
  }
}

function reloadChallengesTab() {
  try {
    clearNotifications();
    parseFileDataFromContent(fileContent);

    fillChallenges(
      fileData[DATA_FIELD_CHALLENGES] ?? [],
    );
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
    parseFileDataFromContent(fileContent);
  } catch (e) {
    error(e.message);
  }
}

function setFileContentFromJsonEditor() {
  try {
    clearNotifications();
    fileContent = document.getElementById(FILE_CONTENT_ELEMENT_ID).value;
    parseFileDataFromContent(fileContent);
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

  fileData = data;
}

function setValueAsOwner(value) {
  try {
    clearNotifications();
    parseFileDataFromContent(fileContent);
    fileData[DATA_FIELD_OWNER] = value;

    fileContent = JSON.stringify(fileData);
  } catch (e) {
    error(e.message);
  }
}

function setValueAsFilenameWithoutExtension(value) {
  try {
    clearNotifications();
    parseFileDataFromContent(fileContent);
    fileData[DATA_FIELD_FILENAME_WITHOUT_EXTENSION] = value;
    fileName = value + JSON_DATA_FILE_EXTENSION;

    fileContent = JSON.stringify(fileData);
  } catch (e) {
    error(e.message);
  }
}

async function fillChallenges(challenges, patrons, filter = {}) {
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
    let checklist = challenge.checklist ?? '';  //todo...
    let success = '...';                        //todo...
    let notes = challenge.notes ?? '';

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
      .replace(/#person-url#/g, personUrl)
      .replace(/#person#/g, getPersonDataName(personUrl))
      .replace(/#feast-url#/g, feastUrl.length > 0 ? feastUrl + ANCHOR_CHARACTER + feast : '')
      .replace(/#feast#/g, feastUrl.length > 0 ? getPersonDataName(feastUrl) : '')
      .replace(/#type#/g, type)
      .replace(/#number#/g, number)
      .replace(/#checklist#/g, checklist)
      .replace(/#success#/g, success)
      .replace(/#notes#/g, notes)
    ;

    if (inArray(personUrl, REMOVE_PERSON_URL_LINK_HREFS)) {
      document.getElementById(PERSON_URL_ELEMENT_ID_PREFIX + rowId).removeAttribute('href');
    }
    if (feastUrl == '') {
      document.getElementById(FEAST_URL_ELEMENT_ID_PREFIX + rowId).removeAttribute('href');
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

function getPersonsHavingAllChallenges(types) {
  let result = {};
  let withAnyType = {};

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  for (let ch of challenges) {
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

function getPersonsFeastsHavingAllChallenges(types) {
  let result = {};
  let withAnyType = {};

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  for (let ch of challenges) {
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

function getPersonsHavingAnyChallenge(types) {
  let result = {};

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  for (let ch of challenges) {
    if (inArray(ch.type, types)) {
      result[ch.person] = ch.person;
    }
  }

  return result;
}

function getPersonsFeastsHavingAnyChallenge(types) {
  let result = {};

  const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
  for (let ch of challenges) {
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

    //...todo requirements

    const challenges = fileData[DATA_FIELD_CHALLENGES] ?? [];
    let options = {};
    for (let type in challengesConfig) {
      const name = getLanguageVariable('name', false, challengesConfig[type].name);
      const requirements = challengesConfig[type].person.requirements;

      if (!checkExistingChallengeTypesBeforeDate(requirements[REQUIREMENT_ANYBODY_HAVING_CHALLENGES] ?? [], challenges, challengeDate)
        || !checkNotExistingChallengeTypes(requirements[REQUIREMENT_EVERYBODY_NOT_HAVING_CHALLENGES] ?? [], challenges)
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
  let challengeType = document.getElementById(CHALLENGE_TYPE_SELECT_ELEMENT_ID).value;

  let personDiv = document.getElementById(PERSON_DIV_ELEMENT_ID);
  personDiv.style = INVISIBLE_STYLE;

  let personTypeSelect = document.getElementById(PERSON_TYPE_SELECT_ELEMENT_ID);
  personTypeSelect.innerHTML = '';
  personTypeSelect.style = INVISIBLE_STYLE;
  personTypeSelect.value = '';

  if (challengeType.length > 0) {
    personDiv.style = VISIBLE_STYLE;

    const typesNeeded = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_HAVING_CHALLENGES] ?? null;
    if (typesNeeded != null) {
      //let personsToList = getPersonsHavingAllChallenges(typesNeeded);

      //for (let personId of Object.keys(personsToList)) {
        //const personNameId = getPersonsDataDirName(personId);
        //personsNamesToList[personNameId] = personNameId;
      //}
    }

    const typesNotAllowed = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES] ?? [];
    let personsTypesToSkipCounts = {};
    if (typesNotAllowed.length > 0) {
      const personsToSkip = getPersonsHavingAnyChallenge(typesNotAllowed);

      for (let personId of Object.keys(personsToSkip)) {
        const personTypeId = getPersonsDataRootName(personId);
        personsTypesToSkipCounts[personTypeId] = (personsTypesToSkipCounts[personTypeId] ?? 0) + 1;
      }
    }

    const personTypes = challengesConfig[challengeType].person.types ?? [];
    if (personTypes.length > 0) {
      personTypeSelect.style = VISIBLE_STYLE;

      let types = {};
      for (let personType of personTypes) {
        const personTypeId = personType.toLowerCase();

        //if (typesNeeded != null && !personsNamesToList[subelement]) {
          //continue;
        //}

        //if (personsTypesToSkipCounts[personType] != undefined) {
          //const nameSubelements = getPersonsDataSubelements(subelement);
          //if (nameSubelements.length <= personsNamesToSkipCounts[personType]) {
            //continue;
          //}
        //}

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
        let personsToList = getPersonsHavingAllChallenges(typesNeeded);

        for (let personId of Object.keys(personsToList)) {
          const personNameId = getPersonsDataDirName(personId);
          personsNamesToList[personNameId] = personNameId;
        }
      }

      const typesNotAllowed = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES] ?? [];
      let personsNamesToSkipCounts = {};
      if (typesNotAllowed.length > 0) {
        const personsToSkip = getPersonsHavingAnyChallenge(typesNotAllowed);

        for (let personId of Object.keys(personsToSkip)) {
          const personNameId = getPersonsDataDirName(personId);
          personsNamesToSkipCounts[personNameId] = (personsNamesToSkipCounts[personNameId] ?? 0) + 1;
        }
      }

      const feastIsNotEmpty = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY] ?? false;
      const feastNotHavingChallenges = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];

      let personsNamesWithFeastsToSkipCounts = {};
      if (feastIsNotEmpty) {
        let feastsToSkip = getPersonsFeastsHavingAnyChallenge(feastNotHavingChallenges);
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
      const addGodToListNeeded = challengesConfig[challengeType].person.requirements[REQUIREMENT_GOD_ALWAYS_HAVING_CHALLENGES] ?? null;
      let personsToList = {};
      if (typesNeeded != null) {
        personsToList = getPersonsHavingAllChallenges(typesNeeded);

        if (addGodToListNeeded != null) {
          const subelements = getPersonsDataSubelements(GOD_ALWAYS_HAVING_CHALLENGES_NEEDED_PERSON_NAME_URL);
          for (let subelement of subelements) {
            personsToList[subelement] = subelement;
          }
        }
      }

      const typesNotAllowed = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_NOT_HAVING_CHALLENGES] ?? [];
      const personsToSkip = getPersonsHavingAnyChallenge(typesNotAllowed);

      const feastIsNotEmpty = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_IS_NOT_EMPTY] ?? false;
      const feastNotHavingChallenges = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];

      let personsWithFeastsToSkipCounts = {};
      if (feastIsNotEmpty) {
        let feastsToSkip = getPersonsFeastsHavingAnyChallenge(feastNotHavingChallenges);
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
        feastsToList = getPersonsFeastsHavingAllChallenges(typesNeeded);
      }

      const typesNotAllowed = challengesConfig[challengeType].person.requirements[REQUIREMENT_PERSON_FEAST_NOT_HAVING_CHALLENGES] ?? [];
      const feastsToSkip = getPersonsFeastsHavingAnyChallenge(typesNotAllowed);

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

  resetAddNewChallengeButton();
}

function resetAddNewChallengeButton() {
  let feastValue = document.getElementById(FEAST_SELECT_ELEMENT_ID).value;

  let button = document.getElementById(ADD_NEW_CHALLENGE_BUTTON_ELEMENT_ID);
  button.disabled = !feastValue;
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
  const checklist = {};
  const notes = {};

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
  parseFileDataFromContent(fileContent);

  reloadChallengesTab();
  success(getLanguageVariable('lang-new-challenge-created-successfully', true));
}

function recalculateFileData() {
  let challenges = [];
  for (let ch of fileData[DATA_FIELD_CHALLENGES] ?? []) {
    let checklist = {};
    for (let i in challengesConfig[ch.type].checklist) {
      checklist[i] = ch.checklist[i] ?? null;
    }

    let notes = {};

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

build();
