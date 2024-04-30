const DESCRIPTION_CONTENT_BLOCK_TEMPLATE_FILE_PATH = '/files/resources/html/content-blocks/notes-description-content-block.html';

const CHALLENGE_EXPANDABLE_CLASS_NAME = 'challenge-expandable';

const MARKDOWN_FILES_ROOT_PATH = '/files/resources/md/';
const MARKDOWN_FILE_EXTENSION = '.md';

const INVISIBLE_STYLE = 'display: none';
const VISIBLE_STYLE = '';

function build() {
  hideAllChallenges();
}

async function loadDescription(element, filePath) {
  element.innerHTML = '';
  element.onclick = null;

  const fullFilePath = MARKDOWN_FILES_ROOT_PATH + filePath + MARKDOWN_FILE_EXTENSION;
  try {
    const template = await getFileContent(DESCRIPTION_CONTENT_BLOCK_TEMPLATE_FILE_PATH);
    let content = await getFileContent(fullFilePath);
    content = marked.parse(content);

    element.innerHTML = template.replace(/#content#/g, content);
  } catch (e) {
  }
}

async function getFileContent(path) {
  let response = await fetch(path);
  if (!response.ok) {
    const errorMessage = 'HTTP status: ' + response.status;
    throw new Error(errorMessage);
  }

  return await response.text();
}

function hideAllChallenges() {
  let elements = document.getElementsByClassName(CHALLENGE_EXPANDABLE_CLASS_NAME);
  for (let element of elements) {
    element.style = INVISIBLE_STYLE;
  }
}

function showChallenge(elementId = '') {
  hideAllChallenges();

  let element = document.getElementById(elementId);
  element.style = VISIBLE_STYLE;
}

build();
