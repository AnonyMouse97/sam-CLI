#!/usr/bin/env node

// require packages
const axios = require('axios');
const { getCode, getName } = require('country-list');
const figlet = require('figlet');

// set default const
const url = 'https://date.nager.at/api/v2/publicholidays';

let today = new Date();
let year = today.getFullYear();

let input = process.argv.slice(2);
let country = getCode(input[0]);

if (input.length > 1) {
    year = input[1];
}


figlet('Holidates', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log('\x1b[32m%s\x1b[0m', data);
    console.log('\x1b[44m%s\x1b[0m', 'Welcome to holidates 👋 !', '\n');
    console.log('\x1b[32m%s\x1b[0m', `Here are the Holidays for ${input[0]} in ${year} !`, '\n');
});

// request
async function getHolidays() {
    try {
        const response = await axios.get(`${url}/${year}/${country}`);
        let x = response.data;
        let obj = {};

        x.forEach(element => {
            obj[element.name] = element.date;
        });

        console.table(obj);

    } catch (error) {
        console.error(error);
    }
}

getHolidays();
