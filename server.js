//||---------------||
//||  DEPENDENCIES ||
//||---------------||
const express = require('express');
const app = express();
const port = 3000;
//Accss models
const db = require('./models');
//Access controllers
const artistCtrl = require('./controllers/artistCtrl');
const concertCtrl = require('./controllers/concertCtrl');


//||---------------||
//||  MIDDLEWARE   ||
//||---------------||
app.use(express.statis('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));


//||---------------||
//||    ROUTES     ||
//||---------------||


app.use('/artist', artistCtrl )

app.use ('/concert', concertCtrl)

//||---------------||
//||   LISTENER    ||
//||---------------||
app.listen(port, () => {
	console.log(`App is running at localhost:${port}`);
});