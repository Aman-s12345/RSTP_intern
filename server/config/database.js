const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect("mongodb+srv://soulopscout:sfaman23@cluster0.druj2gv.mongodb.net/?retryWrites=true&w=majority/Mediaplayer", {
			
			
			
		})
		.then(console.log(`DB ka Connection Success`))
		.catch((err) => {
			console.log(`DB ka Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
