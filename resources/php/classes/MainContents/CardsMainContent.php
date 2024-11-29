<?php

class CardsMainContent extends MainContent implements MainContentInterface
{
    public function configure(string $path): bool
    {
        if (preg_match("~^/collectible-cards$~", $path)) {
            return true;
        }

        return false;
    }

    public function getTitle(string $prefix): string
    {
        return $prefix . ': ' . self::VARIABLE_NAME_SIGN . 'lang-collectible-cards' . self::MODIFIER_SEPARATOR . self::MODIFIER_CAPITALIZE . self::VARIABLE_NAME_SIGN;
    }

    public function getContent(): string
    {
        $originalContent = $this->getOriginalHtmlFileContent('main-contents/cards-main-content.html');

        $editorContent = '';
        if (!$this->getEnvironment()->isProdServer()) {
            $editorContent = $this->getOriginalHtmlFileContent('main-contents/cards-editor-main-content.html');
        }

        $variables = [
            'cards-editor-content' => $editorContent,
        ];
        return $this->getReplacedContent($originalContent, $variables);
    }
}
