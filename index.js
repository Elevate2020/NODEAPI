'use strict';
const dash = require('appmetrics-dash');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const app = express();

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/api/v1/', userRouter);

/**
 * Other ways of routing HTTP requests....
 */
    //router.get('/getItems',db.getUsers);
    //app.route('/getItems').get(db.getUsers);
    //app.get('/getItems',db.getUsers)

const appServer = app.listen(port, () => {
    console.log(`Running on Nodemon port... ${port}`);
});

dash.monitor({server: appServer});
module.exports = app;