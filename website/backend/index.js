const express = require('express');
const body_parser=require('body-parser');
const cookieParser = require('cookie-parser');
const cors=require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
 

const app_main = express();
app_main.use('/backend', createProxyMiddleware({
  target: 'http://localhost:5002',
  changeOrigin: true,
  pathRewrite: {
    '^/backend': '/api' 
  }
}));
console.log("Proxy middleware configured for '/backend' requests.");

app_main.use(cookieParser());         
app_main.use(body_parser.json());

//--------------changes-----------------
const corsOptions = {
    origin: '*',
    credentials: true,
  };
app_main.use(cors(corsOptions))
//--------------changes-----------------
const port_main = 5002;

// const app_utils_Routes = require('./utils_app/routes.js');

const app_main_Routes = require('./main_app/routes.js');


app_main.use('/',app_main_Routes)

app_main.listen(port_main, () => {
    console.log(`Server is running on port ${port_main}`);
  });