//db.js

const mongoose = require('mongoose')
// const pass = encodeURIComponent("codinglearner")

// const url = `mongodb+srv://sample_user:<password>@my-sample-cluster-b3ugy.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const url = `mongodb+srv://nipun:codinglearner@cluster0.yonphoo.mongodb.net/blogwebsite?retryWrites=true&w=majority`;

const connectionParams = {
	useNewUrlParser: true,
	// useCreateIndex: true,
	useUnifiedTopology: true
}
mongoose.set('strictQuery', true);
mongoose.connect(url, connectionParams)
	.then(() => {
		console.log('Connected to database ')
	})
	.catch((err) => {
		console.error(`Error connecting to the database. \n${err}`);
	})