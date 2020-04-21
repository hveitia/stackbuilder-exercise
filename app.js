const express        = require("express"),
      cors           = require('cors'),
      app            = express(),
      bodyParser     = require("body-parser"),
      methodOverride = require("method-override");

// Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// API routes
const routesIndex = require('./src/routes/index');
const routesYcombinator = require('./src/routes/ycombinator');


app.use('/api', routesIndex);
app.use('/api', routesYcombinator);


const port = 3000;

// Start server
app.listen(port, () => {
    console.log(`Web-Scrap server running on http://localhost:${port}`);
});


module.exports = app;
