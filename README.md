# Beer Mapping
A node package for using the [beermapping api](https://beermapping.com/api/) with json responses.

## Install
```bash
npm install beermapping --save
```

## Use

```javascript
var bm = require('beermapping');

bm.loccity(YOUR_API_KEY, CITY_NAME).then(function(response) {
  console.log(response);
})
```
