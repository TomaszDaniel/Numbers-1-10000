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

    var userNumber = Number(req.body.myNumber);

        if(randomNumber > userNumber){
            var obj1 = {
                    "id": "1",
                    "number": randomNumber,
                    "text": 'Liczba ' +userNumber+ ' jest mniejsza niż szukana liczba'
            }
            res.send(obj1);
        }else if (randomNumber < userNumber){
            var obj2 = {
                    "id": "2",
                    "number": randomNumber,
                    "text": 'Liczba ' +userNumber+ ' jest większa niż szukana liczba'
            }
            res.send(obj2);
        } else {
            var obj3 = {
                    "id": "3",
                    "number": randomNumber,
                    "text": 'Brawo, szukana liczba to: ' +randomNumber
            }
            res.send(obj3);
        }
});