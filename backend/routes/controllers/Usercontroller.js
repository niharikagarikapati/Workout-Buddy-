const express = require('express');
const User = require('../UserModel');

const LoginUser = async(request,response)=>{
    response.json({mssg:'LoginUser'})
}
const SignupUser = async (request, response) => {
  response.json({ mssg: "SignupUser" });
};

module.exports = {LoginUser,SignupUser}