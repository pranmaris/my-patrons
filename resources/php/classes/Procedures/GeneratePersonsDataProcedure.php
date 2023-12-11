<?php

class GeneratePersonsDataProcedure extends Procedure
{
    private const TRANSLATIONS_FILE_PATH = 'website-language-variables.json';
    private const TRANSLATIONS_VARIABLE_NAME_PREFIX = 'lang-';

    private const PATH_TO_SKIP = '~~~';

    private const DATA_FIELD_NAMES = 'names';
    private const DATA_FIELD_DIED = 'died';
    private const DATA_FIELD_FEASTS = 'feasts';

    private $dstFileData = [];

    public function run(array $srcPaths, string $dstFilePath): void
    {
        $fullLangsPath = $this->getFullDataPath(self::TRANSLATIONS_FILE_PATH);
        $langs = $this->getOriginalJsonFileContentArrayForFullPath($fullLangsPath);

        foreach ($srcPaths as $srcPath) {
            if ($this->dataPathExists($srcPath)) {
                $this->appendExistingPath($srcPath);
            } else {
                $this->appendNotExistingPath($srcPath, $langs);
            }
        }

        $fullDstFilePath = $this->getFullDataPath($dstFilePath);
        $fullDstFilePathWithExtension = $this->getGeneratedFileSuffix($fullDstFilePath);

        ksort($this->dstFileData);
        $this->saveGeneratedFiles([$fullDstFilePathWithExtension => $this->dstFileData]);
    }

    private function appendDstFileData(string $path, array $value): void {
        $path = preg_replace('~//+~', '/', $path);
        $path = trim($path, '/');

        $this->dstFileData[$path] = $value;
    }

    private function appendNotExistingPath($path, $langs): void {
        $varName = self::TRANSLATIONS_VARIABLE_NAME_PREFIX . $path;
        $names = $langs[$varName] ?? $this->error("Missing website language variable '$varName' for path '$path'");

        $data = [
            self::DATA_FIELD_NAMES => $names,
        ];

        $this->appendDstFileData($path, $data);
    }

    private function appendExistingPath($path): void {
        $fullPath = $this->getFullDataPath($path);
        $contextPrefixLength = mb_strlen($fullPath) - mb_strlen(basename($path));

        $filesCache = [];
        $elements = $this->getPathTree($fullPath);
        foreach ($elements as $elementPath => $isDirectory) {
            $dirName = dirname($elementPath);

            $staticIndexPath = $this->getIndexFilePath($dirName);
            $generatedIndexPath = $this->getIndexFilePath($dirName, true);

            if (false !== strpos($elementPath, self::PATH_TO_SKIP)
                || in_array($elementPath, [
                    $staticIndexPath,
                    $generatedIndexPath,
                    $this->getAliasFilePath($dirName),
                    $this->getAliasFilePath($dirName, true),
                ])
            ) {
                continue;
            }

            if ($isDirectory) {
                $dirUrl = mb_substr($elementPath, $contextPrefixLength);

                $indexData = $filesCache[$generatedIndexPath] ?? $filesCache[$staticIndexPath] ?? [];
                if ($indexData === []) {
                    $indexData = $this->getOriginalJsonFileContentArrayForFullPath($staticIndexPath);
                    $filesCache[$staticIndexPath] = $indexData;
                }
                if ($indexData === []) {
                    $indexData = $this->getOriginalJsonFileContentArrayForFullPath($generatedIndexPath);
                    $filesCache[$generatedIndexPath] = $indexData;
                }

                $baseName = basename($dirUrl);
                $names = $indexData[$baseName] ?? $this->error("Missing index language variable '$baseName' for path '$elementPath'");
                $data = [
                    self::DATA_FIELD_NAMES => $names,
                ];

                $this->appendDstFileData($dirUrl, $data);
            } else {
                $patronUrlWithFileExtension = mb_substr($elementPath, $contextPrefixLength);
                $patronUrl = mb_substr($patronUrlWithFileExtension, 0, strpos($patronUrlWithFileExtension, '.'));

                $fileData = $this->getOriginalJsonFileContentArrayForFullPath($elementPath);
                $patronData = $this->getPatronData($fileData);
                $this->appendDstFileData($patronUrl, $patronData);

                foreach ($fileData[self::DATA_FIELD_FEASTS] ?? [] as $feastId => $fileFeastData) {
                    $feastData = [];
                    $feastData[self::DATA_FIELD_NAMES] = $this->getAllMainLanguageValues($fileFeastData[self::DATA_FIELD_NAMES] ?? []);

                    $this->appendDstFileData($patronUrl . self::FEAST_ID_SEPARATOR . $feastId, $feastData);
                }
            }
        }
    }

    function getPatronData(array $fileData): array {
        $result = [];

        $result[self::DATA_FIELD_NAMES] = $this->getAllMainLanguageValues($fileData[self::DATA_FIELD_NAMES] ?? []);
        $result[self::DATA_FIELD_DIED] = $fileData[self::DATA_FIELD_DIED] ?? [];

        return $result;
    }
}
