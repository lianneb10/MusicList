//||---------------||
//||  DEPENDENCIES ||
//||---------------||
const express = require('express');
const app = express();
//Access models
require('dotenv').config()
const db = require('./models');
//Access controllers
const artistCtrl = require('./controllers/artistCtrl');
const concertCtrl = require('./controllers/concertCtrl');
const port = process.env.PORT;
const methodOverride = require('method-override');


//||---------------||

//||  MIDDLEWARE   ||
//||---------------||
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));



//||---------------||
//||    ROUTES     ||
//||---------------||
//home page route
app.get('/', (req, res) => {
    db.Artist.find({}, (err, artists) => {
        db.Concert.find({}, (err, concerts) => {
            res.render('home', {
                artists: artists,
                concerts: concerts,
                tabTitle: 'Music List'
            })
        })
    })
})

app.use('/artist', artistCtrl )

app.use ('/concert', concertCtrl)

//||---------------||
//||   LISTENER    ||
//||---------------||
app.listen(port, () => {
	console.log(`App is running at localhost:${port}`);
});