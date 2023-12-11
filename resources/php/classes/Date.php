<?php

class Date
{
    private const ROMAN_MONTHS = [1 => 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    private const WEEKDAYS_ENGLISH_NAMES = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    private const TIMESTAMP_OF_5_X_1582_MIDNIGHT = -12220160008;
    private const PRE_GREGORIAN_CALENDAR_DAYS_TO_MOVE = 10;

    public function getCurrentDateTime(): string
    {
        return date('Y-m-d H:i:s');
    }

    public function getCurrentYear(): string
    {
        return date('Y');
    }

    public function getCurrentMonth(): string
    {
        return date('m');
    }

    public function getCurrentDay(): string
    {
        return date('d');
    }

    public function getDateYear(string $date): string
    {
        return (string) ((int) $date);
    }

    public function getDateMonthWithDay(string $date): string
    {
        $year = $this->getDateYear($date);

        return mb_substr($date, mb_strlen($year) + 1);
    }

    public function isMonthWithDayValid(string $monthWithDay): bool
    {
        if (!preg_match("/^(?'month'[0-9][0-9])-(?'day'[0-9][0-9])$/", $monthWithDay, $matches)) {
            return false;
        }

        $month = (int) $matches['month'];
        if ($month < 1 || $month > 12) {
            return false;
        }

        $day = (int) $matches['day'];
        if (
            $day < 1
            || $day > 31
            || (in_array($month, [4, 6, 9, 11]) && $day > 30)
            || ($month === 2 && $day > 29)
        ) {
            return false;
        }

        return true;
    }

    public function isFullDateValid(string $date): bool
    {
        $year = preg_replace('/^([1-9][0-9]{0,3})-.+$/', '\\1', $date);
        if (!is_numeric($year)) {
            return false;
        }

        $monthWithDay = mb_substr($date, mb_strlen($year) + 1);
        if (!$this->isMonthWithDayValid($monthWithDay)) {
            return false;
        }

        if ($monthWithDay === '02-29' && !$this->isYearLeap($year)) {
            return false;
        }

        return true;
    }

    public function isYearLeap(string $year): bool
    {
        return !((int) $year % 4 !== 0 || (int) $year % 100 === 0 && (int) $year % 400 !== 0);
    }

    public function getDayWithRomanMonth(string $monthWithDay): string
    {
        if (!$this->isMonthWithDayValid($monthWithDay)) {
            throw new StandardException('invalid param format');
        }

        $month = (int) mb_substr($monthWithDay, 0, 2);
        $day = (int) mb_substr($monthWithDay, 3);

        return $day . ' ' . self::ROMAN_MONTHS[$month];
    }

    public function getFullDateWithRomanMonth(string $date): string
    {
        if (!$this->isFullDateValid($date)) {
            throw new StandardException('invalid param format');
        }

        $year = $this->getDateYear($date);
        $monthWithDay = $this->getDateMonthWithDay($date);

        return $this->getDayWithRomanMonth($monthWithDay) . ' ' . $year;
    }

    public function getDateMovedByDays(string $date, int $moveDays): string
    {
        $dateString = str_pad($date, 10, '0', STR_PAD_LEFT);

        $dateObj = new DateTime("$dateString 00:00:00", new DateTimeZone('UTC'));
        $interval = DateInterval::createFromDateString($moveDays . ' day');
        $dateObjMoved = $dateObj->add($interval);

        return ltrim($dateObjMoved->format('Y-m-d'), '0');
    }

    public function getFullDateWeekDay(string $date): int
    {
        if (!$this->isFullDateValid($date)) {
            throw new StandardException('invalid param format');
        }

        $unxTime = strtotime($date);
        if ($unxTime < self::TIMESTAMP_OF_5_X_1582_MIDNIGHT) {
            $unxTime += (self::PRE_GREGORIAN_CALENDAR_DAYS_TO_MOVE * 24 * 60 * 60);
        }

        return (int) date('w', $unxTime);
    }

    public function getFullDateWeekDayEnglishName(string $date): string
    {
        $weekDay = $this->getFullDateWeekDay($date);

        return self::WEEKDAYS_ENGLISH_NAMES[$weekDay];
    }
}
