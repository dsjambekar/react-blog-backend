const Post = require('../models/post.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');
};

exports.all_posts = function (req, res) {
	Post.find(function (err, posts) {
		if (err) return next(err);
		res.send(posts);
	})
};

exports.post_create = function (req, res) {
	let post = new Post(
		{
			title: req.body.title,
			body: req.body.body,
			created_by: req.body.created_by,
			created_at: req.body.created_at,
			category: req.body.category,
			is_public: req.body.is_public,
			is_published: req.body.is_published,
		}
	);

	post.save(function (err) {
		if (err) {
			return next(err);
		}
		res.send('Post Created successfully')
	})
};

exports.post_details = function (req, res) {
	Post.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.send(post);
	})
};

exports.post_update = function (req, res) {
	Post.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, post) {
		if (err) return next(err);
		res.send('Post udpated.');
	});
};

exports.post_delete = function (req, res) {
	Post.findByIdAndRemove(req.params.id, function (err) {
		if (err) return next(err);
		res.send('Deleted successfully!');
	})
};