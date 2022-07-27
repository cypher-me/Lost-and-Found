const express = require('express')
const app = express()
// const logger  = require('logger')
// var logger = logger.Logger
const port = 3000
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'))
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'Public')));

// app.get('/', (req, res) => res.send('Welcome To Code Handbook!'))

/*
* Route to render HTML Page
*/

// homePage
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.htm');
});
app.get('/home.htm', function (req, res) {
    res.sendFile(__dirname + '/home.htm');
});

// lostPage
app.get('/lostpage.htm', function (req, res) {
    res.sendFile(__dirname + '/lostpage.htm');
});

// websitePort
app.listen(port, () => console.log(`App listening on port ${port}!`))