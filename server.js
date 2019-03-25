var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();




//  static content from /public.
app.use(express.static(process.cwd() + '/public'));

//seting up the express middleware body-parser for HTTP POST request/ req.body.
app.use(bodyParser.urlencoded({
  extended: false
}));




// settig up handlebars engine, views folder
  app.set('views', path.join(__dirname, 'views'));
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
      app.set('view engine', 'handlebars');

//importing the routing(routes) from burgers_controller.js
   var routes = require('./controllers/burgers_controller.js');

//seting up the main ('/') route
   app.use('/', routes);

//rooting to index.handlebars
// app.get('/',function(req,res){
//     res.render('index')
// });

app.set('port',(process.env.PORT || 5000));

app.listen(app.get('port'),function(){console.log('Server started on port' +app.get('port'))});





