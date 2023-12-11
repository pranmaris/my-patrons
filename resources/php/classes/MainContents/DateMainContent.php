<?php

class DateMainContent extends MainContent implements MainContentInterface
{
    private $contentBlockClass;

    public function configure(string $path): bool
    {
        if (preg_match("~^/dates/(?'view'[-a-z0-9]+)(/(?'dates'[0-9][-!,0123456789]*))?$~", $path, $matches)) {
            $view = $matches['view'];
            $dates = trim($matches['dates'] ?? '', '/');

            $contentBlockViews = $this->getOriginalJsonFileContentArray('date-content-block-configuration.json');
            $contentBlockClass = $contentBlockViews[$view] ?? null;
            if (is_null($contentBlockClass)) {
                return false;
            }

            try {
                $this->contentBlockClass = (new $contentBlockClass())->prepare($dates);
            } catch (StandardException $e) {
                return false;
            }

            return true;
        }

        return false;
    }

    public function getTitle(string $prefix): string
    {
        $dates = $this->contentBlockClass->getDatesString();

        return $prefix . ': '
            . self::VARIABLE_NAME_SIGN . $this->contentBlockClass->getListNameVariable().self::VARIABLE_NAME_SIGN
            . ($dates === '' ? '' : ' - ' . $dates);
    }

    public function getContent(): string
    {
        $originalContent = $this->getOriginalHtmlFileContent('main-contents/date-main-content.html');

        $variables = [
            'content' => $this->getDateFileContent(),
        ];
        $replacedContent = $this->getReplacedContent($originalContent, $variables);

        return $replacedContent;
    }

    private function getDateFileContent(): string
    {
        $nameTranslated = '';

        return $this->contentBlockClass->getFullContent($nameTranslated);
    }
}
