var express = require("express");
var path    = require("path");
var bodyParser = require('body-parser')
var app = express()
var randomNumber = Math.floor(Math.random() * 10000) + 1;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000);

app.post('',function(req,res){
    var userNumber = Number(req.body.number);
    // console.log(typeof userNumber)

    // if(number !== 'number'){
    //     res.send('To nie jest liczba!')}

        if(randomNumber > userNumber){
            res.send('Liczba ' +userNumber+ ' jest mniejsza niż szukana liczba');
        }else if (randomNumber < userNumber){
            res.send('Liczba ' +userNumber+ ' jest większa niż szukana liczba');
        }else {
            res.send('Brawo, udało ci się odgadnąć liczbę');
        }
});