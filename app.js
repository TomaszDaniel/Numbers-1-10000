const express = require("express");
const bodyParser = require('body-parser')
const app = express()
const randomNumber = Math.floor(Math.random() * 10000) + 1;

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.listen(3000);

app.post('', function (req, res) {
    const userNumber = Number(req.body.myNumber);
    if (randomNumber > userNumber) {
        const obj1 = {
            "id": "1",
            "number": randomNumber,
            "text": userNumber
        }
        res.send(obj1);
    } else if (randomNumber < userNumber) {
        const obj2 = {
            "id": "2",
            "number": randomNumber,
            "text": userNumber
        }
        res.send(obj2);
    } else {
        const obj3 = {
            "id": "3",
            "number": randomNumber,
            "text": userNumber
        }
        res.send(obj3);
    }
});