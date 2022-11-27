// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an artist schema
const artistSchema = new Schema({
	name: { type: String, required: true, placeholder: 'Artist Name' },
	genre: { type: String, required: true, placeholder: 'Genre' },
	description: {
		type: String,
		required: true,
		placeholder: 'Description',
		default: 'N/A',
	},
	image: {
		type: String,
		default:
			'',
	},
    dateLogged: {type: String, required: true, default: Date(), placeholder: "Date Logged"}
});

//create artist model with the schema
const Artist = mongoose.model('Artist', artistSchema)

//export artist model to be useed in home.js
module.exports = Artist