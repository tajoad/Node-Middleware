const { default: axios } = require("axios");
const { baseURL } = require("../config/config");

const getUser = async (request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Allow-Credentials", true); // you

  try {
    axios({
      method: "GET",
      url: `${baseURL}/getmodules`,
    })
      .then(function (res) {
        response.send({
          message: res.data,
          statusCode: res.status,
          date: res.headers.date,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  } catch (error) {
    response.send({
      message: "An error occured",
    });
  }
};

const postUsers = async (request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Allow-Credentials", true); // you

  let body = request.body;
  //let data = request.body;
  console.log(body);
  // try {
  axios({
    method: "POST",
    url: `${baseURL}/login`,
    data: body,
  })
    .then(function (res) {
      response.send({
        message: res.data,
        statusCode: res.status,
        date: res.headers.date,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

module.exports = { getUser, postUsers };
