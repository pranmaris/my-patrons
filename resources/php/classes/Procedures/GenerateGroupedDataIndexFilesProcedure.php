<?php

class GenerateGroupedDataIndexFilesProcedure extends Procedure
{
    private const FIELD_NAMES = 'names';
    private const FIELD_TRANSLATIONS = 'translations';
    private const FIELD_LINKS = 'links';
    private const FIELD_LANGUAGES = 'languages';

    private const DATA_CONVERSION_METHODS = ['categories' => 'getConvertedCategoriesData'];

    private const CATEGORIES_DATA_FILE_PATH = '/records/categories.json';
    private const CATEGORIES_NAME_KEYS = [
      'female' => 'female-equivalent-name',
      'default' => 'name',
    ];

    private $categoriesData = [];

    public function run(string $dataPath, string $dataField, string $namesField, string $destinationPath): void
    {
        $rootPath = $this->getFullDataPath($dataPath);
        $fullDataPath = $this->getPath()->getDataPath();

        $paths = $this->getPathTree($rootPath);
        foreach ($paths as $fullSourceFilePath => $isDirectory) {
            $directoryPath = dirname($fullSourceFilePath);

            if ($isDirectory || in_array($fullSourceFilePath, [
                $this->getIndexFilePath($directoryPath),
                $this->getAliasFilePath($directoryPath),
                $this->getIndexFilePath($directoryPath, true),
                $this->getAliasFilePath($directoryPath, true),
            ])) {
                continue;
            }

            $fileData = $this->getOriginalJsonFileContentArrayForFullPath($fullSourceFilePath);
            $fieldData = $fileData[$dataField] ?? [];

            $namesData = $fileData[$namesField] ?? null;
            if (is_null($namesData)) {
                $this->error("Field '$namesField' cannot be null for path '$fullSourceFilePath'");
            }
            $sourceObjectNames = $this->getAllMainLanguageValues($namesData);

            $dataConversionMethod = self::DATA_CONVERSION_METHODS[$dataField] ?? null;
            if (!is_null($dataConversionMethod)) {
                $fieldData = $this->$dataConversionMethod($fieldData, $fullSourceFilePath);
            }

            foreach ($fieldData as $row) {
                foreach ($row as $language => $names) {
                    if (!is_array($names)) {
                        $names = [$names];
                    }

                    foreach ($names as $name) {
                        $sourceObjectUrl = str_replace([$fullDataPath, self::DATA_FILE_EXTENSION], '', $fullSourceFilePath);
                        $this->saveGroupedDataIndexFile($sourceObjectUrl, $sourceObjectNames, $destinationPath, $language, $name, $row);
                    }
                }
            }
        }
    }

    private function getCategoriesDataWithCache(): array
    {
        if (empty($this->categoriesData)) {
            $this->categoriesData = $this->getOriginalJsonFileContentArray(self::CATEGORIES_DATA_FILE_PATH);
        }

        return $this->categoriesData;
    }

    private function getConvertedCategoriesData(array $data, string $sourceFilePath): array
    {
        $result = [];

        $categoriesData = $this->getCategoriesDataWithCache();
        foreach ($data as $category) {
            $categoryData = $categoriesData[$category] ?? null;
            if (is_null($categoryData)) {
                $this->error("Unknown category '$category' for path '$sourceFilePath'");
            }

            $added = false;
            foreach (self::CATEGORIES_NAME_KEYS as $categoryToFind => $nameKey) {
                if (in_array($categoryToFind, $data) && isset($categoryData[$nameKey])) {
                    $result[] = $categoryData[$nameKey];
                    $added = true;
                    break;
                }
            }

            if (!$added) {
                $result[] = $categoryData[$nameKey];
            }
        }

        return $result;
    }

    private function saveGroupedDataIndexFile(
        string $sourceObjectUrl,
        array $sourceObjectNames,
        string $destinationPath,
        string $language,
        string $name,
        array $otherNamesList
    ): void {
        $fullDestinationPath = $this->getFullDataPath($destinationPath);

        $nameHash = $this->getNameHash($name);
        $destinationFilePath = $this->getGeneratedFileSuffix($nameHash);
        $fullDestinationFilePath = "$fullDestinationPath/$destinationFilePath";

        $fileData = $this->getOriginalJsonFileContentArrayForFullPath($fullDestinationFilePath);
        $fileData[self::FIELD_NAMES][$language] = $name;
        foreach ($otherNamesList as $otherLanguage => $otherNames) {
            if (!is_array($otherNames)) {
                $otherNames = [$otherNames];
            }

            foreach ($otherNames as $otherName) {
                if (!in_array($otherName, $fileData[self::FIELD_TRANSLATIONS][$otherLanguage] ?? [])) {
                    $fileData[self::FIELD_TRANSLATIONS][$otherLanguage][] = $otherName;
                }
            }
        }
        $fileData[self::FIELD_LINKS][$sourceObjectUrl] = $sourceObjectNames;

        $this->setJsonFileContentFromArray($fullDestinationFilePath, $fileData);
    }
}
