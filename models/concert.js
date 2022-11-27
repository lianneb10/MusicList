// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an artist schema
const concertSchema = new Schema({
	name: { type: String, required: true, placeholder: 'Artist Name' },
	genre: { type: String, required: true, placeholder: 'Genre' },
	notes: {
		type: String,
		required: true,
		placeholder: 'Notes',
		default: 'N/A',
	},
	tourName: { type: String, placeholder: 'Tour Name' },
	image: {
		type: String,
		default:
			'',
	},
	dateAttended: {
		type: String,
		required: true,
		default: 'MM/DD/YYY',
		placeholder: 'Concert Date',
	},
});

//create concert model with the schema
const Concert = mongoose.model('Concert', concertSchema);

//export concert model to be useed in home.js
module.exports = Concert;
