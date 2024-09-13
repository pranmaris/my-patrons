<?php

class AboutUsMainContent extends MainContent implements MainContentInterface
{
    public function configure(string $path): bool
    {
        if (preg_match("~^/about-us$~", $path)) {
            return true;
        }

        return false;
    }

    public function getTitle(string $prefix): string
    {
        return $prefix . ': ' . self::VARIABLE_NAME_SIGN . 'lang-about-us' . self::MODIFIER_SEPARATOR . self::MODIFIER_CAPITALIZE . self::VARIABLE_NAME_SIGN;
    }

    public function getContent(): string
    {
        $result = $this->getOriginalHtmlFileContent('main-contents/about-us-main-content.html');

        $variables = [];
        $result = $this->getReplacedContent($result, $variables);

        return $result;
    }
}
