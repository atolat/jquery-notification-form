module.exports = function (app) {

    var _ = require('underscore');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());

    //Twilio Integration
    var client = require('twilio')('ACd54cb6f1b8a8bf9d23fe511d24d3459e', '472205f35904bda6943ed88a1343e2b1');
    var twilio = require('twilio');

    //API ROOT
    app.get('/', function (req, res) {
        res.sendfile('./form.html');
    });
    

    app.post('/formdata', function (req, res) {
        console.log(req.body);
    });
    }