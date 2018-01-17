const express       = require('express'),
      path          = require('path'),
      http          = require('http'),
      mongoose      = require('mongoose'),
      app           = express(),
      server        = http.createServer(app),
      dbConfig      = require('./configs/db.js');
      apiRoutes     = require('./routes/');


// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

// Database
mongoose.Promise = global.Promise
mongoose.connect(dbConfig.uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!'));


// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes
app.use('/api', apiRoutes);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


var startLog =
"\n+++++++++++++++++++++++++++++++++++++++++++++++++++\n" +
"+++++++++++++++++++ NODE SERVER +++++++++++++++++++\n" +
"+++++++++++++++++++++ STARTED +++++++++++++++++++++\n" +
"+++++++++++++++++++++++ " + port +" ++++++++++++++++++++++\n" +
"+++++++++++++++++++++++++++++++++++++++++++++++++++\n";

server.listen(port, () => console.log(startLog));
