const express = require('express');
const router = express.Router();

const {register}=require("./auth.js")

router.post('/api/register',register) 

module.exports = router;