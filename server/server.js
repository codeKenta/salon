const express       = require('express'),
      path          = require('path'),
      http          = require('http'),
      mongoose      = require('mongoose'),
      bodyParser    = require('body-parser'),
      app           = express(),
      server        = http.createServer(app),
      dbConfig      = require('./configs/db.js');
      salonsApi     = require('./routes/salons');


// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);


// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Database
mongoose.Promise = global.Promise

mongoose.connect (dbConfig.uri, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!'));


// Connects to Angular DIST output folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes
app.use('/api/salons', salonsApi);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


var startLog =
"\n+++++++++++++++++++++++++++++++++++++++++++++++++++\n" +
"+++++++++++++++++++ NODE SERVER +++++++++++++++++++\n" +
"+++++++++++++++++++++ STARTED +++++++++++++++++++++\n" +
"++++++++++++++++++++ port " + port +" ++++++++++++++++++++\n" +
"+++++++++++++++++++++++++++++++++++++++++++++++++++\n";

server.listen(port, () => console.log(startLog));
