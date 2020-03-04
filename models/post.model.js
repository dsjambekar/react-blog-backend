const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
	title: { type: String, required: true, max: 150 },
	body: { type: String, required: true },
	created_by: { type: String, required: true },
	created_at: { type: String, required: true },
	category: { type: String, required: true },
	is_public: { type: Boolean, required: true },
	is_published: { type: Boolean, required: true },
});


// Export the model
module.exports = mongoose.model('Post', PostSchema);