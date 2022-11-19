const db = require('../models');
const express = require('express');
const router = express.Router();
const Concert = require('../models/concert');

router.get('/seed/testconcerts', async (req, res) => {
	const testConcerts = [
		{
			name: 'Seventeen',
			genre: 'K-Pop',
            tourName: 'Be The Sun in Oakland',
			notes: 'The live dance performances were amazing like the last time I got to see them! Cant wait until the next tour!',
			image: "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg",
			dateAttended: '08/13/2022',
		},
		{
			name: 'thuy',
			genre: 'Pop',
            tourName: 'girls like me',
			notes: 'putting this tour here because I want to see her next time- but I loved this album!!',
			image:
				"https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg",
			dateAttended: 'N/A',
		},
		{
			name: 'BIBI',
			genre: 'K-RnB',
            tourName: '88Rising Festival 2022',
			notes: 'She performed all of my fave songs!!',
			image:
				"https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg",
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

router.post('/', (req, rest) => {
	db.Concert.create(req.body, (err, concert) => {
		res.redirect('/concert/' + concert._id);
	});
});

module.exports = router;
