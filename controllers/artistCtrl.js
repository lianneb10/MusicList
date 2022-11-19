const db = require('../models');
const express = require('express');
const router = express.Router();
const Artist = require('../models/artist');


router.get('/seed/testartists', async (req, res) => {
    const testArtist = [
			{
				name: 'Seventeen',
				genre: 'K-Pop',
				description: '13 member boygroup under Pledis Ent',
				image:
					'https://i.pinimg.com/736x/bd/23/c3/bd23c3fa95bf9665705194ccba30e4a4.jpg',
				dateLogged: '10/11/2022',
			},
			{
				name: 'thuy',
				genre: 'Pop',
				description:
					'Vietnamese soloist known for addictive and catchy pop tunes',
				image:
					'https://assets.bandwagon.asia/system/tinymce/image/file/5857/content_thuy_-_inhibitions__Alt_1__by_EDGAR_DANIEL.jpg',
				dateLogged: '09/10/2022',
			},
			{
				name: 'BIBI',
				genre: 'K-RnB',
				description:
					'Korean soloist, known for her English tracks under the label 88Rising, but has many hit songs in Korean as well',
				image:
					'https://i.pinimg.com/736x/a7/82/a9/a782a9752516760bf13c8eaa9af47c81.jpg',
                dateLogged: '11/11/2022',
			},
		];
        try {
					const seedItems = await Artist.create(testArtist);
					res.send(seedItems);
				} catch (err) {
					res.send(err.message);
				}
})

router.post('/', (req, rest) => {
    db.Artist.create(req.body, (err, artist) => {
        res.redirect('/artist/' + artist._id)
    })
})
module.exports = router;