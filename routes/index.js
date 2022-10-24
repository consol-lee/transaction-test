const express = require('express');
const router = express.Router();
const url = require('url');
const os = require('os');

require('dotenv').config();
const _ip = process.env.ip;
const hostname = os.hostname();

router.get('/',(req,res,next)=>{
    res.send(hostname);
})

router.get('/test',(req,res,next)=>{
    res.send("version_1");
})

module.exports = router;