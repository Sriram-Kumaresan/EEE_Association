const pool = require("./db.js");
const { hashPassword, compareHash } = require("./hashing");
const jwt = require("jsonwebtoken");
const axios = require("axios");


const register=async(req,res)=>{
    const msg=req.body
    console.log(msg)
    return res.json({ Status: "Success"});
}


module.exports = {
    register
};