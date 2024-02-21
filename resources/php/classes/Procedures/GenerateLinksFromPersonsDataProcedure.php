<?php

class GenerateLinksFromPersonsDataProcedure extends Procedure
{
    private const NAMES_INDEX = 'names';

    public function run(array $dataPaths, string $fieldName): void
    {
        $generatedFilesData = [];

        $filesToIgnore = [
            basename($this->getIndexFilePath('', true)) => true,
        ];

        foreach ($dataPaths as $dataPath) {
            $rootPath = $this->getFullDataPath($dataPath);
            $parentDirName = trim(dirname($dataPath), '/');
            $indexName = basename($dataPath);
            $personsData = $this->getPersonsDataByIndex($indexName);

            $files = $this->getPathTree($rootPath);
            foreach ($files as $filePath => $isDirectory) {
                $fileName = basename($filePath);
                $fileNameWithoutExtension = preg_replace('/[.].*$/', '', $fileName);

                if ($isDirectory) {
                    if ($filePath !== $rootPath) {
                        $this->error("Directory '$fileName' is not allowed in '$dataPath'");
                    }
                    continue;
                }
                if (isset($filesToIgnore[$fileName])) {
                    continue;
                }

                $key = "$indexName/$fileNameWithoutExtension";
                $dataRow = $personsData[$key] ?? [];
                if (count($dataRow) === 0) {
                    $this->error("Missing persons for '$key'");
                }

                $dataToSet = [];
                foreach ($dataRow as $pUrl => $pData) {
                    $dataToSet[$fieldName]["$parentDirName/$pUrl"] = $pData;
                }

                $pathToSet = $this->getGeneratedFileSuffix(dirname($filePath) . '/' . $fileNameWithoutExtension);

                $generatedFilesData[$pathToSet] = $dataToSet;
            }
        }

        $this->saveGeneratedFiles($generatedFilesData);
    }

    private function getPersonsDataByIndex($index): array
    {
        $result = [];

        $personsData = $this->getPersonsData();
        foreach ($personsData as $url => $data) {
            foreach ($data[$index] ?? [] as $key => $val) {
                $result[$key][$url] = $data[self::NAMES_INDEX];
            }
        }

        return $result;
    }
}
