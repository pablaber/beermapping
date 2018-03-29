# Beer Mapping
A node package for using the [beermapping api](https://beermapping.com/api/)

## Install
```
npm install beermapping --save
```

## Use

```
var bm = require('beermapping');

bm.loccity(YOUR_API_KEY, CITY_NAME).then(function(response) {
  console.log(response);
})
```
