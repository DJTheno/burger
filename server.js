var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();
var routes = require('./controllers/burger_controller.js');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use('/', routes);

var port = process.env.PORT || 8080;
console.log("on port 8080")
app.listen(port);