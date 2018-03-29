var bm = require('../bm')

require('dotenv').config()

const responses = {
  locquery: [{id:"16225",name:"Vail Fine Wines",status:"Beer Store",reviewlink:"https://beermapping.com/location/16225",proxylink:"http://beermapping.com/maps/proxymaps.php?locid=16225&amp;d=5",blogmap:"http://beermapping.com/maps/blogproxy.php?locid=16225&amp;d=1&amp;type=norm",street:"196 Gore Creek Drive, Unit #164",city:"Vail",state:"CO",zip:"81657-4511",country:"United States",phone:"(970) 748-9055",url:"vailfinewines.com",overall:"0",imagecount:"0"},{id:"19852",name:"Vail Brewing Co",status:"Brewery",reviewlink:"https://beermapping.com/location/19852",proxylink:"http://beermapping.com/maps/proxymaps.php?locid=19852&amp;d=5",blogmap:"http://beermapping.com/maps/blogproxy.php?locid=19852&amp;d=1&amp;type=norm",street:"41290 B-2 US Hwy 6",city:"Vail",state:"CO",zip:"81657",country:"United States",phone:"970-470-4351",url:"vailbrewingco.com",overall:"0",imagecount:"0"}],
  loccity: [{id:"16215",name:"Grey Sail Brewing",status:"Brewery",reviewlink:"https://beermapping.com/location/16215",proxylink:"http://beermapping.com/maps/proxymaps.php?locid=16215&amp;d=5",blogmap:"http://beermapping.com/maps/blogproxy.php?locid=16215&amp;d=1&amp;type=norm",street:"63 Canal Street",city:"Westerly",state:"RI",zip:"02891",country:"United States",phone:"401-212-7592",overall:"0",imagecount:"0"}],
  locstate: [{id:"16387",name:"49th State Brewery",status:"Brewpub",reviewlink:"https://beermapping.com/location/16387",proxylink:"http://beermapping.com/maps/proxymaps.php?locid=16387&amp;d=5",blogmap:"http://beermapping.com/maps/blogproxy.php?locid=16387&amp;d=1&amp;type=norm",street:"Mile 248.5 Parks Hwy",city:"Healy",state:"AK",zip:"99743",country:"United States",phone:"907-683-2739",overall:"0",imagecount:"0"},{id:"13",name:"Alaskan Brewing Co.",status:"Brewery",reviewlink:"https://beermapping.com/location/13",proxylink:"http://beermapping.com/maps/proxymaps.php?locid=13&amp;d=5",blogmap:"http://beermapping.com/maps/blogproxy.php?locid=13&amp;d=1&amp;type=norm",street:"5429 Shaune Drive",city:"Juneau",state:"AK",zip:"99801",country:"United States",phone:"(907) 780-5866",overall:"95.00005",imagecount:"0"}],
  locmap:[{name:"Brooklyn Brewery",status:"Brewery",lat:"40.721733",lng:"-73.958054",map:"northeastern",altmap:"newyork"}],
  locscore: [{overall:"89.1667",selection:"4.625",service:"4.25",atmosphere:"4.5",food:"0",reviewcount:"4",fbscore:"",fbcount:""}],
  locimage: [{imageid:"548",directurl:"https://beermapping.com/maps/reviews/images.php?img=548",imageurl:"https://s3.amazonaws.com/beermapping/locations/Front_Door.jpg",width:"800",height:"601",thumburl:"https://s3.amazonaws.com/beermapping/locations/Front_Door.jpg",caption:"Public entrance to the brewery",credit:"JCoe",crediturl:"https://beermapping.com/account/59",imagedate:"2007-09-24 01:11:41",score:"0"},{imageid:"549",directurl:"https://beermapping.com/maps/reviews/images.php?img=549",imageurl:"https://s3.amazonaws.com/beermapping/locations/The_building.jpg",width:"801",height:"601",thumburl:"https://s3.amazonaws.com/beermapping/locations/The_building.jpg",caption:"View of the building from across the street",credit:"JCoe",crediturl:"https://beermapping.com/account/59",imagedate:"2007-09-24 01:12:36",score:"0"}],
};

describe("locquery", function() {
  it("should return the proper object", function(done) {
    bm.locquery(process.env.API_KEY, "vail").then(function(response) {
      expect(response).toEqual(responses.locquery);
      done();
    })
  })
})

describe("loccity", function() {
  it("should return the proper object", function(done) {
    bm.loccity(process.env.API_KEY, "westerly").then(function(response) {
      expect(response).toEqual(responses.loccity);
      done();
    })
  })
})

describe("locstate", function() {
  it("should return the proper object", function(done) {
    bm.locstate(process.env.API_KEY, "ak").then(function(response) {
      expect(response.slice(0,2)).toEqual(responses.locstate);
      done();
    })
  })
})

describe("locmap", function() {
  it("should return the proper object", function(done) {
    bm.locmap(process.env.API_KEY, "226").then(function(response) {
      expect(response).toEqual(responses.locmap);
      done();
    });
  })
})

describe("locscore", function() {
  it("should return the proper object", function(done) {
    bm.locscore(process.env.API_KEY, "226").then(function(response) {
      expect(response).toEqual(responses.locscore);
      done();
    })
  })
})

describe("locimage", function() {
  it("should return the proper object", function(done) {
    bm.locimage(process.env.API_KEY, "226").then(function(response) {
      expect(response.slice(0,2)).toEqual(responses.locimage);
      done();
    })
  })
})
