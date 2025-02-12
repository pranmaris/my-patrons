<?php

class GenerateLiturgicalSeasonsDataProcedure extends Procedure
{
    private $dstFileData = [];

    public function run(array $liturgicalSeasonsConfig, int $sinceYear, string $dstFilePath): void
    {
        $currentYear = $this->getDate()->getCurrentYear();
        for ($year = $sinceYear; $year <= $currentYear; $year++) {
            foreach ($liturgicalSeasonsConfig as $liturgicalSeasonName => list($fromMethod, $fromDays, $toMethod, $toDays)) {
                $fromDate = $this->getDateForMethodMovedByDays($year, $fromMethod, $fromDays);
                $toDate = $this->getDateForMethodMovedByDays($year, $toMethod, $toDays);

                $this->dstFileData[$liturgicalSeasonName][$year] = "$fromDate $toDate";
            }
        }

        $fullDstFilePath = $this->getFullDataPath($dstFilePath);
        $fullDstFilePathWithExtension = $this->getGeneratedFileSuffix($fullDstFilePath);

        ksort($this->dstFileData);
        $this->saveGeneratedFiles([$fullDstFilePathWithExtension => $this->dstFileData]);
    }

    private function getDateForMethodMovedByDays($year, $method, $days): string {
        $baseDateString = $this->getMovableFeastBase()->$method($year);
        $baseDate = $year . '-' . preg_replace('/[^0-9]/', '-', $baseDateString);

        return $this->getDate()->getDateMovedByDays($baseDate, $days);
    }
}
