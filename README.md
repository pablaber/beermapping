# Beer Mapping API

[![Build Status](https://travis-ci.org/pablaber/beermapping.svg?branch=master)](https://travis-ci.org/pablaber/beermapping)

A node package for using the [beermapping api](https://beermapping.com/api/) with json responses.

## Install
```bash
npm install beermapping --save
```

## Use

```javascript
var bm = require('beermapping-api');

bm.loccity(YOUR_API_KEY, CITY_NAME).then(function(response) {
  console.log(response);
})
```

## Functions

The current methods each represent a function in the beermapping api [reference](https://beermapping.com/api/reference/).

For more information on the structure of the JSON objects returned, see "Response" section.

### locquery(YOUR_API_KEY, LOCATION_STRING)

Example:

```javascript
bm.locquery("API_KEY", "vail").then(function(response) {
  console.log(response);
  // [
  //   {
  //     id: "16225",
  //     name:"Vail Fine Wines",
  //     status:"Beer Store",
  //     ...
  //   }...
  // ]
});
```
