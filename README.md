# Holidates by Samuel

Hello and welcome to my first npm package !

## What is it ?

This npm package is a small holidays displayer, using the [nager](https://date.nager.at/) API.

## How to install ?

To install it you can use npm:

```$ npm i @anonymouse97/holidates```

## How to use it ?
Once it's installed you can huse Holidates like that :

- If you need the holidays in the current year for a specific country :

    ```$ holidates Belgium ```

    and it will return you this :
```
  _   _       _ _     _       _
 | | | | ___ | (_) __| | __ _| |_ ___  ___
 | |_| |/ _ \| | |/ _` |/ _` | __/ _ \/ __|
 |  _  | (_) | | | (_| | (_| | ||  __/\__ \
 |_| |_|\___/|_|_|\__,_|\__,_|\__\___||___/

Welcome to holidates 👋 !

Here are the Holidays for Belgium in 2021 !

┌──────────────────────┬──────────────┐
│       (index)        │    Values    │
├──────────────────────┼──────────────┤
│    New Year's Day    │ '2021-01-01' │
│    Easter Sunday     │ '2021-04-04' │
│    Easter Monday     │ '2021-04-05' │
│      Labour Day      │ '2021-05-01' │
│    Ascension Day     │ '2021-05-13' │
│     Whit Monday      │ '2021-05-24' │
│ Belgian National Day │ '2021-07-21' │
│    Assumption Day    │ '2021-08-15' │
│   All Saints' Day    │ '2021-11-01' │
│    Armistice Day     │ '2021-11-11' │
│    Christmas Day     │ '2021-12-25' │
└──────────────────────┴──────────────┘
```

- If you want a specific year :

    ```$ holidates Belgium 1980 ```

    and it will return you this :
```
  _   _       _ _     _       _
 | | | | ___ | (_) __| | __ _| |_ ___  ___
 | |_| |/ _ \| | |/ _` |/ _` | __/ _ \/ __|
 |  _  | (_) | | | (_| | (_| | ||  __/\__ \
 |_| |_|\___/|_|_|\__,_|\__,_|\__\___||___/

Welcome to holidates 👋 !

Here are the Holidays for Belgium in 1980 !

┌──────────────────────┬──────────────┐
│       (index)        │    Values    │
├──────────────────────┼──────────────┤
│    New Year's Day    │ '1980-01-01' │
│    Easter Sunday     │ '1980-04-06' │
│    Easter Monday     │ '1980-04-07' │
│      Labour Day      │ '1980-05-01' │
│    Ascension Day     │ '1980-05-15' │
│     Whit Monday      │ '1980-05-26' │
│ Belgian National Day │ '1980-07-21' │
│    Assumption Day    │ '1980-08-15' │
│   All Saints' Day    │ '1980-11-01' │
│    Armistice Day     │ '1980-11-11' │
│    Christmas Day     │ '1980-12-25' │
└──────────────────────┴──────────────┘


```

## Extras

- This exercise was done during my BeCode training.
- I used [axios](https://github.com/axios/axios), [country-list](https://www.npmjs.com/package/country-list) and [figlet](https://www.npmjs.com/package/figlet) to help me doing this small project.
