<?php

class GenerateMainPatronsIndexFileProcedure extends Procedure
{
    private const DIRECTORY_NAME_TO_SKIP = '~~~';

    private $generatedFilesData = [];

    public function run(string $dataPath, string $namesSourcePath, string $translationsField): void
    {
        $fullDataPath = $this->getFullDataPath($dataPath);

        $directories = $this->getPathDirectories($fullDataPath);
        foreach ($directories as $fullPath => $isDirectory) {
            $directoryName = basename($fullPath);
            $name = ucfirst($directoryName);
            $hash = $this->getNameHash($name);

            if ($name === self::DIRECTORY_NAME_TO_SKIP) {
                $names = ['en' => self::DIRECTORY_NAME_TO_SKIP];
            } else {
                $sourceFilePath = $this->getGeneratedFileSuffix($namesSourcePath . '/' . $hash);
                $sourceFileData = $this->getOriginalJsonFIleContentArray($sourceFilePath);

                $translationsData = $sourceFileData[$translationsField] ?? null;
                if (is_null($translationsData)) {
                    $this->error("Translations field '$translationsField' cannot be null for name '$name' path '$sourceFilePath'");
                }

                $names = $this->getAllMainLanguageValues($translationsData);
            }
            $this->addIndexDataElement($fullDataPath, $directoryName, $names);
        }

        $this->saveGeneratedFiles($this->generatedFilesData);
    }

    private function addIndexDataElement(string $directoryPath, string $baseName, array $names): void
    {
        $indexFilePath = $this->getIndexFilePath($directoryPath, true);
        $this->generatedFilesData[$indexFilePath][$baseName] = $names;
    }
}
