const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const CompanySchema = new Schema({
	url:{
		type: String,
		required: [true,'URL field is required']
	},
	email:{
		type: String,
		required: [true,'Email field is required']
	},
	terms_conditions:{
		type: Boolean,
		default: false
	}
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;
