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

    private $itemContent;
    private $fileData;
    private $textVariables;

    public function prepare(string $path): ContentBlock
    {
        $fileData = $this->getConsolidatedDataFilesArray($path);

        $itemContent = $this->getOriginalHtmlFileContent('items/challenge-item.html');

        $translations = $this->getPreparedTranslations($fileData[self::MAIN_FILE_DATA_INDEX] ?? []);
        $language = $this->getLanguage();
        $textVariables = $this->getTranslatedVariablesForLangData($language, $translations);

        $this->itemContent = $itemContent;
        $this->fileData = $fileData;
        $this->textVariables = $textVariables;

        return $this;
    }

    public function getFullContent(string $translatedName): string
    {
        $mainContent = $this->getOriginalHtmlFileContent('content-blocks/challenges-list-content-block.html');
        $challengeContent = $this->getOriginalHtmlFileContent('content-blocks/challenge-content-block.html');

        $fileData = $this->fileData[self::MAIN_FILE_DATA_INDEX] ?? [];
        $textVariables = $this->textVariables;

        $challengeItemsContents = '';
        foreach ($fileData as $challengeType => $challengeData) {
            $prefix = implode('-', [self::ROOT_TRANSLATION_PREFIX, mb_strtolower($challengeType)]);

            $variables = [];
            $variables['type'] = $challengeType;
            $variables['name'] = self::VARIABLE_NAME_SIGN . $prefix . '-name' . self::VARIABLE_NAME_SIGN;
            //...
            $challengeItemsContents .= $this->getReplacedContent($challengeContent, $variables);
        }

        $variables = [];
        $variables['challenge-items-contents'] = $challengeItemsContents;
        $mainContent = $this->getReplacedContent($mainContent, $variables);

        return $this->getReplacedContent($mainContent, $textVariables, true);
    }

    public function getRecordContent(string $recordId): string
    {
        $itemContent = $this->itemContent;

        return $itemContent;
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
}
