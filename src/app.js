const express = require('express')
const consign = require('consign')

var app = express();
app.set('view engine', 'ejs')
app.set('views', 'src/views')

consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app)


app.listen(3333, console.log('servidor funcionando'))