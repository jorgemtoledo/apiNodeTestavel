import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    email: String
});

const Lead = mongoose.model('Lead',schema);

export default Lead;