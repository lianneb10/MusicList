const db = require('../models');
const express = require('express');
const router = express.Router();
const Concert = require('../models/concert');

router.get('/new', (req, res) => {
	res.render('newConcert', {
		tabTitle: 'Add New Concert',
	});
});

router.get('/seed/testconcerts', async (req, res) => {
	const testConcerts = [
		{
			name: 'Seventeen',
			genre: 'K-Pop',
            tourName: 'Be The Sun in Oakland',
			notes: 'The live dance performances were amazing like the last time I got to see them! Cant wait until the next tour!',
			image: "/noimage.jpeg",
			dateAttended: '08/13/2022',
		},
		{
			name: 'thuy',
			genre: 'Pop',
            tourName: 'girls like me',
			notes: 'putting this tour here because I want to see her next time- but I loved this album!!',
			image:
				"/noimage.jpeg",
			dateAttended: 'N/A',
		},
		{
			name: 'BIBI',
			genre: 'K-RnB',
            tourName: '88Rising Festival 2022',
			notes: 'She performed all of my fave songs!!',
			image:
				"/noimage.jpeg",
			dateAttended: '09/11/2022',
		},
	];
	try {
		const seedItems = await Concert.create(testConcerts);
		res.send(seedItems);
	} catch (err) {
		res.send(err.message);
	}
});

//show concert route
router.get('/:id', (req,res) => {
	db.Concert.findById(req.params.id, (err, concert) => {
		if (!concert) {
			res.sendStatus(404)
			return
		}
		res.render('showConcert', {
			concert: concert,
			tabTitle: 'Concert:' + concert.tourName,
		})
	})
})

//home page
router.post('/', (req, res) => {
	db.Concert.create(req.body, (err, concert) => {
		res.redirect('/concert/' + concert._id);
	});
});

//delete route
router.delete('/:id', (req,res) => {
	db.Concert.findByIdAndDelete(req.params.id, (err, concert) => {
		res.redirect('/')
	})
})

//edit route
router.get('/edit/:id', (req,res) => {
	db.Concert.findById(req.params.id, (err, concert) => {
		res.render('editConcert', {
			concert: concert,
			tabTitle: 'Editing Concert:' + concert._id,
		})
	})
})

// post edit route
router.post('/edit/:id', (req, res) => {
	db.Concert.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, concert) => {
		res.redirect('/concert/' + concert._id)
	})
})

module.exports = router;
