module.exports = function (app) {

    var _ = require('underscore');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    var formidable = require('express-formidable');
    app.use(formidable.parse());
    util = require('util');

    //Twilio Integration
    var client = require('twilio')('ACd54cb6f1b8a8bf9d23fe511d24d3459e', '472205f35904bda6943ed88a1343e2b1');
    var twilio = require('twilio');

    //API ROOT
    app.get('/', function (req, res) {
        res.sendfile('./form.html');
    });
    

    app.post('/formdata', function (req, res) {
        var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });

    });
    }