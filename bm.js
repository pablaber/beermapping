const parse = require('xml-parser');
const request = require('request');

// Locquery Service

const LOCQUERY = 'locquery';
const LOCCITY = 'loccity';
const LOCSTATE = 'locstate';
const LOCMAP = 'locmap';
const LOCSCORE = 'locscore';
const LOCIMAGE = 'locimage';

function bmUrl(apiKey, page, argument) {
  return `http://beermapping.com/webservice/${page}/${apiKey}/${argument}`;
}

function xmlToJson(xml) {
  if (!!xml && !!xml.root && xml.root.children) {
    const base = xml.root;
    const json = base.children.map((e) => {
      const obj = e.children.reduce((acc, val) => {
        acc[val.name] = val.content;
        return acc;
      }, {});
      return obj;
    });
    return json;
  }
  return {
    error: true,
    message: 'Request failed.',
  };
}

function bmQuery(apiKey, arg, queryType) {
  return new Promise((resolve, reject) => {
    try {
      request(bmUrl(apiKey, queryType, arg), (error, response, body) => {
        const xml = parse(body);
        const json = xmlToJson(xml);
        if (json.error) {
          reject(new Error(json.message));
        } else {
          resolve(json);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

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
  locquery,
  loccity,
  locstate,
  locmap,
  locscore,
  locimage,
};
