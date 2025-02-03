<?php

class MeMainContent extends MainContent implements MainContentInterface
{
    public function configure(string $path): bool
    {
        if (preg_match("~^/me$~", $path)) {
            return true;
        }

        return false;
    }

    public function getTitle(string $prefix): string
    {
        return $prefix . ': ' . self::VARIABLE_NAME_SIGN . 'lang-me' . self::MODIFIER_SEPARATOR . self::MODIFIER_CAPITALIZE . self::VARIABLE_NAME_SIGN;
    }

    public function getContent(): string
    {
        $result = $this->getOriginalHtmlFileContent('main-contents/me-main-content.html');

        $variables = [];
        $result = $this->getReplacedContent($result, $variables);

        return $result;
    }
}
