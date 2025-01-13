<?php

class ChallengesMainContent extends MainContent implements MainContentInterface
{
    private const ALLOWED_LANGUAGES = ['pl'];

    public function configure(string $path): bool
    {
        if (preg_match("~^/my-challenges$~", $path)) {
            return true;
        }

        return false;
    }

    public function getTitle(string $prefix): string
    {
        return $prefix . ': ' . self::VARIABLE_NAME_SIGN . 'lang-my-challenges' . self::MODIFIER_SEPARATOR . self::MODIFIER_CAPITALIZE . self::VARIABLE_NAME_SIGN;
    }

    public function getContent(): string
    {
        $this->redirectToAllowedLanguageIfNeeded(self::ALLOWED_LANGUAGES);

        $originalContent = $this->getOriginalHtmlFileContent('main-contents/challenges-main-content.html');

        $variables = [
            //...
        ];
        $replacedContent = $this->getReplacedContent($originalContent, $variables);

        return $replacedContent;
    }

    private function redirectToAllowedLanguageIfNeeded(array $validLanguages): void
    {
        $language = $this->getLanguage();
        if (!in_array($language, $validLanguages)) {
          $selectedValidLanguage = reset($validLanguages);

          $protocol = $this->getEnvironment()->getHostProtocol();
          $host = $this->getEnvironment()->getHostMainDomainOnly();
          $requestPath = $this->getEnvironment()->getRequestPath();
          $params = $this->getEnvironment()->getRequestQueryParamsString();

          $urlToRedirect = $protocol . $selectedValidLanguage . '.' . $host . $requestPath . $params;
          $this->getEnvironment()->redirect($urlToRedirect);
        }
    }
}
