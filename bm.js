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
  return bmQuery(apiKey, location, LOCQUERY);
}

function loccity(apiKey, city) {
  return bmQuery(apiKey, city, LOCCITY);
}

function locstate(apiKey, state) {
  return bmQuery(apiKey, state, LOCSTATE);
}

function locmap(apiKey, id) {
  return bmQuery(apiKey, id, LOCMAP);
}

function locscore(apiKey, id) {
  return bmQuery(apiKey, id, LOCSCORE);
}

function locimage(apiKey, id) {
  return bmQuery(apiKey, id, LOCIMAGE);
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

function bmQuery(apiKey, arg, queryType) {
  return new Promise(function(resolve, reject) {
      try {
        request(bmUrl(apiKey, queryType, arg), function (error, response, body) {
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
