<?php

class FeastContentBlock extends ContentBlock implements ContentBlockInterface
{
    private const NAMES_INDEX = 'names';
    private const LINKS_INDEX = 'links';

    private const TRANSLATED_INDEXES = [
        self::NAMES_INDEX,
    ];

    private $galleryContentBlock;

    private $path;
    private $textVariables;

    public function __construct()
    {
        $this->galleryContentBlock = new GalleryContentBlock();

        parent::__construct();
    }

    public function prepare(string $path): ContentBlock
    {
        $this->prepareConsolidatedDataFilesArray($path);

        $translations = $this->getPreparedTranslations($this->getMainFileData());
        $language = $this->getLanguage();
        $textVariables = $this->getTranslatedVariablesForLangData($language, $translations);

        $this->path = $path;
        $this->textVariables = $textVariables;

        return $this;
    }

    public function getFullContent(string $translatedName): string
    {
        $mainContent = $this->getOriginalHtmlFileContent('content-blocks/feast-content-block.html');
        $recordContent = $this->getOriginalHtmlFileContent('items/feast-links-list-item.html');

        $fileData = $this->getConsolidatedFileData();
        $textVariables = $this->textVariables;

        $variables = [];
        $variables['gallery'] = $this->getGalleryContent();
        $variables['links'] = $this->getLinksContent($fileData[self::LINKS_INDEX] ?? [], $recordContent);

        $mainContent = $this->getReplacedContent($mainContent, $variables);

        return $this->getReplacedContent($mainContent, $textVariables, true);
    }

    public function getRecordContent(string $recordId): string
    {
        //noop
    }

    private function getPreparedTranslations(array $data): array
    {
        $result = [];

        foreach ($data as $key => $values) {
            if (in_array($key, self::TRANSLATED_INDEXES)) {
                $result[$key] = $values;
            }
        }

        return $result;
    }

    private function getGalleryContent(): string
    {
        return $this
            ->galleryContentBlock
            ->prepare($this->path)
            ->getFullContent('')
        ;
    }
}
