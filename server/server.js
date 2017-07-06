"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Would normally copy necessary scripts into src folder (via grunt/gulp) but serving
//node_modules directly to keep everything as simple as possible

//The src folder has our static resources (index.html, css, images)
//app.use(express.static(__dirname + './')); 
app.use('/', express.static(__dirname + '/../react-redux-realworld-example-app'));
app.use('/node_modules', express.static(__dirname + '/../../node_modules'));


// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile('index.html',{root : __dirname + '/../react-redux-realworld-example-app/www/'});
});

app.listen(8084);

console.log('Express listening on port 8084.');

//Open browser
var opn = require('opn');

/*opn('http://localhost:8085').then(() => {
    console.log('Browser closed.');
});*/


