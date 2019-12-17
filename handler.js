"use strict";
const axios = require("axios");
const fs = require("fs");

module.exports.weather = async event => {
  const { latitude, longitude } = event.queryStringParameters;
  const rawdata = fs.readFileSync("key.json");
  const json = JSON.parse(rawdata);
  const response = await axios.get(
    `https://api.darksky.net/forecast/${json.key}/${latitude},${longitude}`
  );
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(response.data)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
