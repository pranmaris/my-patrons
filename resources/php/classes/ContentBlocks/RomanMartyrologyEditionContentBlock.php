<?php

class RomanMartyrologyEditionContentBlock extends ContentBlock implements ContentBlockInterface
{
    private $textVariables;

    public function prepare(string $path): ContentBlock
    {
        $this->prepareConsolidatedDataFilesArray($path);

        $translations = $this->getRecordTranslations(
            $this->getMainFileData()
        );
        $language = $this->getLanguage();
        $textVariables = $this->getTranslatedVariablesForLangData($language, $translations);

        $this->textVariables = $textVariables;

        return $this;
    }

    public function getFullContent(string $translatedName): string
    {
        $contentBlockContent = $this->getOriginalHtmlFileContent('content-blocks/roman-martyrology-edition-content-block.html');

        return $this->getReplacedContent($contentBlockContent, $this->textVariables, true);
    }

    public function getRecordContent(string $recordId): string
    {
        return '';
    }

    private function getRecordTranslations(array $data, array $aliases = []): array
    {
        $result = [];

        foreach ($data as $key => $values) {
            foreach ($values as $language => $text) {
                $result[$key][$language] = $this->getTextWithSpecialLinks($text, $aliases[$key] ?? []);
            }
        }

        return $result;
    }
}
