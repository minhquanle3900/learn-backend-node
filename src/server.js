require('dotenv').config();
const express = require('express'); // commonjs
const path = require('path');
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')

const app = express() // app express
const port = process.env.PORT || 8888;     // port => hardcode, 8888 kia là để cho ứng dụng k chết khi mất port ở env
const hostname = process.env.HOST_NAME 

//config templete engine
configViewEngine(app)

// khai báo router
app.use('/', webRouter)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
