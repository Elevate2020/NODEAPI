'use strict';
const dash = require('appmetrics-dash');
const express = require('express');
const bodyParser = require('body-parser');
const itemRouter = require('./routes/itemRoute');

const app = express();

/** Set applicatip port */
const port = process.env.PORT || 3000

app.use(bodyParser.json())

/** Mount routers to app */
app.use('/api/v1/', itemRouter);


// ....Create health end point...
app.get('/health',(req,res)=>{
    res.send("Ok!")
})
/** Create Node server */
const appServer = app.listen(port, () => {
    console.log(`Running on Nodemon port... ${port}`);
});

/** Monitor application metrics  */
dash.monitor({server: appServer});

module.exports = app;