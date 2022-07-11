// Server generated
const express = require('express');
const fs = require('fs');

// Manual Imports
const index = require('./routers/index')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}/statics`));

app.use('/', index)

const IP = process.env.IP || 'localhost'
const Port = process.env.PORT || 3000;

app.listen(Port, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server is Listening at http://${IP}:${Port}`);
    }
});