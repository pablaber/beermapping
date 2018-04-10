# Beer Mapping API

[![Build Status](https://travis-ci.org/pablaber/beermapping.svg?branch=master)](https://travis-ci.org/pablaber/beermapping)

A node package for using the [beermapping api](https://beermapping.com/api/) with json responses.

## Install
```bash
npm install beermapping-api --save
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

### `locquery(API_KEY, LOCATION)`

```javascript
bm.locquery("API_KEY", "vail").then(function(response) {
  console.log(response);
  // [
  //   {
  //     id: "16225",
  //     name: "Vail Fine Wines",
  //     status: "Beer Store",
  //     ...
  //   },
  //   ...
  // ]
});
```

### `loccity(API_KEY, CITY)`

```javascript
bm.loccity("API_KEY", "westerly").then(function(response) {
  console.log(response);
  // [
  //   {
  //     id: "16215",
  //     name: "Grey Sail Brewing",
  //     status: "Brewery",
  //     ...
  //   },
  //   ...
  // ]
});
```

### `locstate(API_KEY, STATE)`

```javascript
bm.locstate("API_KEY", "ak").then(function(response) {
  console.log(response);
  // [
  //   {
  //     id: "16387",
  //     name: "49th State Brewery",
  //     status: "Brewpub",
  //     ...
  //   },
  //   ...
  // ]
});
```

### `locmap(API_KEY, ID)`

```javascript
bm.locmap("API_KEY", "226").then(function(response) {
  console.log(response);
  // [
  //   {
  //     name: "Brooklyn Brewery",
  //     status: "Brewery",
  //     lat: "40.721733",
  //     lng: "-73.958054",
  //     ...
  //   },
  //   ...
  // ]
});
```

### `locscore(API_KEY, ID)`

```javascript
bm.locscore("API_KEY", "226").then(function(response) {
  console.log(response);
  // [
  //   {
  //     overall: "89.1667",
  //     selection: "4.625",
  //     service: "4.25",
  //     atmosphere: "4.5",
  //     ...
  //   },
  //   ...
  // ]
});
```

### `locimage(API_KEY, ID)`

```javascript
bm.locimage("API_KEY", "226").then(function(response) {
  console.log(response);
  // [
  //   {
  //     imageid: "548",
  //     directurl: "https://beermapping.com/maps/reviews/images.php?img=548",
  //     ...
  //   },
  //   ...
  // ]
});
```
