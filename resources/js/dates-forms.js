const MONTHS_DAYS_COUNT = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const FORM_ERROR_MESSAGE_ID_PREFIX = "form-error-message-";
const ERROR_ICON = "<img class=\"svg-image\" src=\"/files/resources/svg/calendar-x-fill.svg\" />";
const ERROR_MESSAGE = '!!!';

const LEAP_YEAR_SEPARATOR = "!";

const FORM_TYPE_ELEMENT_ID = "form-type";
const FORM_TYPE_SINGLE_FULL = "single-full";
const FORM_TYPE_MULTI_YEAR_DAYS = "multi-year-days";

const FORM_FIELD_YEAR_ELEMENT_ID_PREFIX = "year-";
const FORM_FIELD_MONTH_ELEMENT_ID_PREFIX = "month-";
const FORM_FIELD_DAY_ELEMENT_ID_PREFIX = "day-";
const FORM_FIELD_ACTIVITY_ELEMENT_ID_PREFIX = "activity-";
const FORM_FIELD_DATE_SELECTION_ELEMENT_ID_PREFIX = "date-selection-";



const getLocationPath = function() {
  return window.location.pathname;
}

const getLocationSearch = function() {
  return window.location.search;
}

const getLocationPathLastElement = function() {
  const path = getLocationPath();
  const matches = path.match(/[/]([^/]+)[/]*$/);

  return matches[1];
}

const goToPath = function(newPath, lastElementToCompare) {
  const pathLastElement = getLocationPathLastElement();
  const locationSearch = getLocationSearch();

  if (pathLastElement == lastElementToCompare) {
    window.location = newPath + locationSearch;
  } else {
    const path = getLocationPath();
    window.location = path + "/" + newPath + locationSearch;
  }
}

const isYearLeap = function(year) {
  return !(year % 4 != 0 || (year % 100 == 0 && year % 400 != 0));
}

const getCurrentFullDate = function() {
  const date = new Date();

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return year + "-" + month + "-" + day;
}

const getFullDateElements = function(date) {
  let monthDays = [...MONTHS_DAYS_COUNT];

  const matches = date.match(/^(\d+)-(\d+)-(\d+)$/);
  if (!matches) {
    return [0, 0, 0, monthDays];
  }

  let year = Number(matches[1]);
  let month = Number(matches[2]);
  let day = Number(matches[3]);

  if (isYearLeap(year)) {
    monthDays[2]++;
  }

  return [year, month, day, monthDays];
}

const getSetFullDate = function() {
  let date = getLocationPathLastElement();

  let [year, month, day, monthDays] = getFullDateElements(date);
  if (month < 1 || month > 12 || day < 1 || day > monthDays[month]) {
    date = getCurrentFullDate();
  }

  return date;
}

const getFullDateMovedByOneDay = function(date, isNextDay) {
  let [year, month, day, monthDays] = getFullDateElements(date);

  day = isNextDay ? day + 1 : day - 1;

  if (day > monthDays[month]) {
    month++;
    if (month > 12) {
      year++;
      month = 1;
    }

    day = 1;
  } else if (day < 1) {
    month--;
    if (month < 1) {
      year--;
      month = 12;
    }

    day = monthDays[month];
  }

  return year.toString()
    + '-' + month.toString().padStart(2, "0")
    + '-' + day.toString().padStart(2, "0");
}

const goToNextFullDate = function() {
  const date = getSetFullDate();
  const nextDate = getFullDateMovedByOneDay(date, true);

  goToPath(nextDate, date);
}

const goToPreviousFullDate = function() {
  const date = getSetFullDate();
  const previousDate = getFullDateMovedByOneDay(date, false);

  goToPath(previousDate, date);
}

const clearFormErrorMessage = function(id) {
  setFormErrorMessage(id, "");
}

const goToSelectedFullDate = function() {
  clearFormErrorMessage(1);

  const date = getSetFullDate();

  const year1000 = document.getElementById(FORM_FIELD_YEAR_ELEMENT_ID_PREFIX + "1000").value;
  const year100 = document.getElementById(FORM_FIELD_YEAR_ELEMENT_ID_PREFIX + "100").value;
  const year10 = document.getElementById(FORM_FIELD_YEAR_ELEMENT_ID_PREFIX + "10").value;
  const year1 = document.getElementById(FORM_FIELD_YEAR_ELEMENT_ID_PREFIX + "1").value;
  const month = document.getElementById(FORM_FIELD_MONTH_ELEMENT_ID_PREFIX + "1").value;
  const day = document.getElementById(FORM_FIELD_DAY_ELEMENT_ID_PREFIX + "1").value;

  const year = year1000 * 1000 + year100 * 100 + year10 * 10 + year1 * 1;
  if (year < 1 || year > 9999) {
    setFormErrorMessage(1, ERROR_ICON);
    return;
  }
  const selectedDate = year.toString() + "-" + month + "-" + day;

  let monthDays = [...MONTHS_DAYS_COUNT];
  if (isYearLeap(year)) {
    monthDays[2]++;
  }

  const monthInt = Number(month);
  const dayInt = Number(day);

  if (monthInt < 1 || monthInt > 12 || dayInt < 1 || dayInt > monthDays[monthInt]) {
    setFormErrorMessage(1, ERROR_ICON);
    return;
  }

  goToPath(selectedDate, date);
}

const setFormErrorMessage = function(id, message) {
  document.getElementById(FORM_ERROR_MESSAGE_ID_PREFIX + id).innerHTML = message;
}

const buildForms = function() {
  const formType = document.getElementById(FORM_TYPE_ELEMENT_ID).value;
  if (formType == FORM_TYPE_SINGLE_FULL) {
    buildSingleFullForm();
  } else if (formType == FORM_TYPE_MULTI_YEAR_DAYS) {
    buildMultiYearDaysForm();
  }
}

const buildSingleFullForm = function() {
  const date = getSetFullDate();
  let [year, month, day, monthDays] = getFullDateElements(date);

  let yearDigit = 0;
  let yearElementId = FORM_FIELD_YEAR_ELEMENT_ID_PREFIX + "1";
  for (let i = 0; i <= 3; i++) {
    digit = year % 10;
    makeSelectOptionSelected(yearElementId, digit.toString());

    year = Math.floor(year / 10);
    yearElementId += "0";
  }

  makeSelectOptionSelected(FORM_FIELD_MONTH_ELEMENT_ID_PREFIX + "1", month.toString().padStart(2, "0"));
  makeSelectOptionSelected(FORM_FIELD_DAY_ELEMENT_ID_PREFIX + "1", day.toString().padStart(2, "0"));
}

const makeSelectOptionSelected = function(selectId, optionValue) {
  let select = document.getElementById(selectId);
  if (!select || !select.options) {
    return;
  }

  for (let optionId in select.options) {
    if (isNaN(optionId) || isNaN(parseInt(optionId))) {
      continue;
    }

    if (select.options[optionId].value == optionValue) {
      select.options[optionId].selected = 'selected';
    }
  }
}

const getSetMultiYearDays = function() {
  let lastPathElement = getLocationPathLastElement();

  let yearDays = getYearDaysFromString(lastPathElement);
  if (yearDays.length < 1) {
    date = getCurrentFullDate();

    const year = parseInt(date.substring(0, 4));
    let yearDay = date.substring(5);
    if (isYearLeap(year)) {
      yearDay = yearDay.replace(/[-]/g, LEAP_YEAR_SEPARATOR);
    }

    yearDays = [yearDay];
  }

  return yearDays;
}

const getYearDaysFromString = function(yearDaysString) {
  yearDaysString = yearDaysString.replace(/^[,]+/, ""); //remove leading commas

  const yearDays = yearDaysString.split(",");
  for (let yearDay of yearDays) {
    if (yearDay != "" && !yearDay.match(/^\d{2}[-!]\d{2}$/)) {
      return [];
    }
  }

  return yearDays;
}

const buildMultiYearDaysForm = function() {
  const yearDays = getSetMultiYearDays();

  let rowId = 0;
  for (let yearDay of yearDays) {
    rowId++;

    if (yearDay == "") {
      continue;
    }

    const activity = document.getElementById(FORM_FIELD_ACTIVITY_ELEMENT_ID_PREFIX + rowId);
    const year = document.getElementById(FORM_FIELD_YEAR_ELEMENT_ID_PREFIX + rowId);

    activity.checked = "checked";
    if (yearDay[2] == LEAP_YEAR_SEPARATOR) {
      year.checked = "checked";
    }

    makeSelectOptionSelected(FORM_FIELD_MONTH_ELEMENT_ID_PREFIX + rowId, yearDay.substring(0, 2));
    makeSelectOptionSelected(FORM_FIELD_DAY_ELEMENT_ID_PREFIX + rowId, yearDay.substring(3));
  }

  refreshMultiYearDaysFormStatus();
}

const refreshMultiYearDaysFormStatus = function() {
  let rowId = 0;
  while (true) {
    rowId++;

    const select = document.getElementById(FORM_FIELD_DATE_SELECTION_ELEMENT_ID_PREFIX + rowId);
    const activity = document.getElementById(FORM_FIELD_ACTIVITY_ELEMENT_ID_PREFIX + rowId);
    if (select == null || activity == null) {
      break;
    }

    select.style = (activity.checked || rowId == 1) ? "" : "display: none;";
  }
}

const goToSelectedYearDays = function() {
  let yearDays = [];

  const oldYearDays = getSetMultiYearDays();
  let wasAnyError = false;
  let rowId = 0;
  while (true) {
    rowId++;

    const activity = document.getElementById(FORM_FIELD_ACTIVITY_ELEMENT_ID_PREFIX + rowId);
    if (activity == null) {
      break;
    }

    if (activity.checked) {
      const isYearLeap = document.getElementById(FORM_FIELD_YEAR_ELEMENT_ID_PREFIX + rowId).checked;
      const month = document.getElementById(FORM_FIELD_MONTH_ELEMENT_ID_PREFIX + rowId).value;
      const day = document.getElementById(FORM_FIELD_DAY_ELEMENT_ID_PREFIX + rowId).value;

      let monthDays = [...MONTHS_DAYS_COUNT];
      if (isYearLeap) {
        monthDays[2]++;
      }

      const monthInt = Number(month);
      const dayInt = Number(day);
      if (monthInt < 1 || monthInt > 12 || dayInt < 1 || dayInt > monthDays[monthInt]) {
        setFormErrorMessage(rowId, ERROR_ICON);
        wasAnyError = true;
      }

      let yearDay = month + (isYearLeap ? LEAP_YEAR_SEPARATOR : "-") + day;
      yearDays.push(yearDay);
    } else {
      yearDays.push("");
    }
  }

  if (!wasAnyError) {
    goToPath(yearDays.join(","), oldYearDays.join(","));
  }
}



buildForms();
