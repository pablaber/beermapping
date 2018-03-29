var parse = require('xml-parser');
var request = require('request');

// Locquery Service

const LOCQUERY = "locquery";
const LOCCITY = "loccity";
const LOCSTATE = "locstate";
const LOCMAP = "locmap";
const LOCSCORE = "locscore";
const LOCIMAGE = "locimage";

function locquery(apiKey, location) {
  console.log(bmUrl(apiKey, LOCQUERY, location))
  return new Promise(function(resolve, reject) {
    try {
      request(bmUrl(apiKey, LOCQUERY, location), function (error, response, body) {
        var xml = parse(body);
        var json = xmlToJson(xml);
        if(!!json.error) {
          reject({message: json.message});
        }
        else {
          resolve(json);
        }
      });
    }
    catch (e) {
      reject(e);
    }
  });
}

function loccity(apiKey, city) {
  return new Promise(function(resolve, reject) {
    try {
      request(bmUrl(apiKey, LOCCITY, city), function(error, response, body) {
        var xml = parse(body);
        var json = xmlToJson(xml);
        if(!!json.error) {
          reject({message: json.message})
        }
        else {
          resolve(json);
        }
      })
    }
    catch (e) {
      reject(e);
    }
  })
}

function locstate(apiKey, state) {
  return new Promise(function(resolve, reject) {
    try {
      request(bmUrl(apiKey, LOCSTATE, state), function(error, response, body) {
        var xml = parse(body);
        var json = xmlToJson(xml);
        if(!!json.error) {
          reject({message: json.message})
        }
        else {
          resolve(json);
        }
      })
    }
    catch (e) {
      reject(e);
    }
  })
}

function locmap(apiKey, id) {
  return new Promise(function(resolve, reject) {
    try {
      request(bmUrl(apiKey, LOCMAP, id), function(error, response, body) {
        var xml = parse(body);
        var json = xmlToJson(xml);
        if(!!json.error) {
          reject({message: json.message})
        }
        else {
          resolve(json);
        }
      })
    }
    catch (e) {
      reject(e);
    }
  })
}

function locscore(apiKey, id) {
  return new Promise(function(resolve, reject) {
    try {
      request(bmUrl(apiKey, LOCSCORE, id), function(error, response, body) {
        var xml = parse(body);
        var json = xmlToJson(xml);
        if(!!json.error) {
          reject({message: json.message})
        }
        else {
          resolve(json);
        }
      })
    }
    catch (e) {
      reject(e);
    }
  })
}

function locimage(apiKey, id) {
  return new Promise(function(resolve, reject) {
    try {
      request(bmUrl(apiKey, LOCIMAGE, id), function(error, response, body) {
        var xml = parse(body);
        var json = xmlToJson(xml);
        if(!!json.error) {
          reject({message: json.message})
        }
        else {
          resolve(json);
        }
      })
    }
    catch (e) {
      reject(e);
    }
  })
}


module.exports = {
  locquery: locquery,
  loccity: loccity,
  locstate: locstate,
  locmap: locmap,
  locscore: locscore,
  locimage: locimage,
}

function bmUrl(apiKey, page, argument) {
  return `http://beermapping.com/webservice/${page}/${apiKey}/${argument}`
}

function xmlToJson(xml) {
  if(!!xml && !!xml.root && xml.root.children) {
    var base = xml.root;
    var json = base.children.map(function(e) {
      var element = {};
      for (let child of e.children) {
        element[child.name] = child.content;
      }
      return element;
    });
    return json;
  }
  else {
    return {
      error: true,
      message: "Request failed."
    }
  }
}
