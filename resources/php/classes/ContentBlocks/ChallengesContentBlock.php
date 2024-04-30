<?php

class ChallengesContentBlock extends ContentBlock implements ContentBlockInterface
{
    private const ROOT_TRANSLATION_PREFIX = 'challenge';

    private const FOR_EACH_ARRAY_ELEMENT = '*';

    private const FIELD_CHECKLIST = 'checklist';
    private const FIELD_DESCRIPTION = 'description';
    private const FIELD_NAME = 'name';
    private const FIELD_NOTES = 'notes';
    private const FIELD_PERSON = 'person';
    private const FIELD_TEMPLATE = 'template';

    private const TRANSLATED_FIELDS = [
        self::FOR_EACH_ARRAY_ELEMENT => [
            self::FIELD_NAME => true,
            self::FIELD_DESCRIPTION => [
                self::FIELD_TEMPLATE => true
            ],
            self::FIELD_PERSON => [
                self::FIELD_DESCRIPTION => [
                    self::FIELD_TEMPLATE => true
                ],
            ],
            self::FIELD_CHECKLIST => [
                self::FOR_EACH_ARRAY_ELEMENT => [
                    self::FIELD_NAME => true,
                    self::FIELD_DESCRIPTION => [
                        self::FIELD_TEMPLATE => true
                    ],
                ],
            ],
            self::FIELD_NOTES => [
                self::FOR_EACH_ARRAY_ELEMENT => [
                    self::FIELD_NAME => true,
                ],
            ],
        ],
    ];

    private $challengeContent;
    private $checklistStepItemContent;
    private $noteItemContent;
    private $fileData;
    private $textVariables;

    public function prepare(string $path): ContentBlock
    {
        $fileData = $this->getConsolidatedDataFilesArray($path);

        $checklistStepItemContent = $this->getOriginalHtmlFileContent('items/challenge-checklist-step-item.html');
        $noteItemContent = $this->getOriginalHtmlFileContent('items/challenge-note-item.html');
        $challengeContent = $this->getOriginalHtmlFileContent('content-blocks/challenge-content-block.html');

        $translations = $this->getPreparedTranslations($fileData[self::MAIN_FILE_DATA_INDEX] ?? []);
        $language = $this->getLanguage();
        $textVariables = $this->getTranslatedVariablesForLangData($language, $translations);

        $this->challengeContent = $challengeContent;
        $this->checklistStepItemContent = $checklistStepItemContent;
        $this->noteItemContent = $noteItemContent;
        $this->fileData = $fileData;
        $this->textVariables = $textVariables;

        return $this;
    }

    public function getFullContent(string $translatedName): string
    {
        $mainContent = $this->getOriginalHtmlFileContent('content-blocks/challenges-list-content-block.html');

        $fileData = $this->fileData[self::MAIN_FILE_DATA_INDEX] ?? [];
        $textVariables = $this->textVariables;

        $challengeItemsContents = '';
        foreach ($fileData as $challengeType => $challengeData) {
            $challengeItemsContents .= $this->getChallengeContent($challengeType, $challengeData);
        }

        $variables = [];
        $variables['challenge-items-contents'] = $challengeItemsContents;
        $mainContent = $this->getReplacedContent($mainContent, $variables);

        return $this->getReplacedContent($mainContent, $textVariables, true);
    }

    public function getRecordContent(string $recordId): string
    {
        //noop
    }

    private function getPreparedTranslations(
        array $data,
        array $result = [],
        string $prefix = self::ROOT_TRANSLATION_PREFIX,
        array $translatedFields = self::TRANSLATED_FIELDS)
    : array {
        foreach ($translatedFields as $key => $values) {
            if ($key === self::FOR_EACH_ARRAY_ELEMENT) {
                foreach ($data as $dataKey => $dataValue) {
                    $result = $this->getPreparedTranslations($dataValue, $result, "$prefix-$dataKey", $values);
                }
            } else if (is_array($values)) {
                $result = $this->getPreparedTranslations($data[$key] ?? [], $result, "$prefix-$key", $values);
            } else if ($values === true) {
                $index = mb_strtolower("$prefix-$key");
                $result[$index] = $data[$key] ?? [];
            } else {
                exit('internal error in challenges structure!');
            }
        }

        return $result;
    }

    private function getChallengeContent(string $challengeType, array $challengeData): string
    {
        $content = $this->challengeContent;

        $prefix = implode('-', [self::ROOT_TRANSLATION_PREFIX, mb_strtolower($challengeType)]);

        $variables = [];
        $variables['element-id'] = $prefix;
        $variables['type'] = $challengeType;
        $variables['name'] = self::VARIABLE_NAME_SIGN . implode('-', [$prefix, self::FIELD_NAME]) . self::VARIABLE_NAME_SIGN;
        $variables['desc'] = self::VARIABLE_NAME_SIGN . implode('-', [$prefix, self::FIELD_DESCRIPTION, self::FIELD_TEMPLATE]) . self::VARIABLE_NAME_SIGN;
        $variables['person-desc'] = self::VARIABLE_NAME_SIGN . implode('-', [$prefix, self::FIELD_PERSON, self::FIELD_DESCRIPTION, self::FIELD_TEMPLATE]) . self::VARIABLE_NAME_SIGN;

        $checklistStepsContents = '';
        foreach ($challengeData[self::FIELD_CHECKLIST] ?? [] as $checklistStepId => $checklistStepData) {
            $checklistStepsContents .= $this->getChecklistStepContent($prefix, $checklistStepId, $checklistStepData);
        }
        $variables['checklist-steps'] = $checklistStepsContents;

        $notesContents = '';
        foreach ($challengeData[self::FIELD_NOTES] ?? [] as $noteId => $noteData) {
            $notesContents .= $this->getNoteContent($prefix, $noteId, $noteData);
        }
        $variables['notes'] = $notesContents;

        return $this->getReplacedContent($content, $variables);
    }

    private function getChecklistStepContent(string $langVarPrefix, string $checklistStepId, array $checklistStepData): string
    {
        $content = $this->checklistStepItemContent;

        $prefix = implode('-', [$langVarPrefix, self::FIELD_CHECKLIST, $checklistStepId]);

        $variables = [];
        $variables['checklist-step-id'] = $checklistStepId;
        $variables['name'] = self::VARIABLE_NAME_SIGN . implode('-', [$prefix, self::FIELD_NAME]) . self::MODIFIER_SEPARATOR . self::MODIFIER_CAPITALIZE . self::VARIABLE_NAME_SIGN;
        $variables['desc'] = self::VARIABLE_NAME_SIGN . implode('-', [$prefix, self::FIELD_DESCRIPTION, self::FIELD_TEMPLATE]) . self::VARIABLE_NAME_SIGN;

        return $this->getReplacedContent($content, $variables);
    }

    private function getNoteContent(string $langVarPrefix, string $noteId, array $noteData): string
    {
        $content = $this->noteItemContent;

        $prefix = implode('-', [$langVarPrefix, self::FIELD_NOTES, $noteId]);

        $variables = [];
        $variables['note-id'] = $noteId;
        $variables['name'] = self::VARIABLE_NAME_SIGN . implode('-', [$prefix, self::FIELD_NAME]) . self::MODIFIER_SEPARATOR . self::MODIFIER_CAPITALIZE . self::VARIABLE_NAME_SIGN;

        return $this->getReplacedContent($content, $variables);
    }
}
