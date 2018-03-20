// get an instance of mongoose and mongoose.Schema
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

import mongoose, { Schema } from 'mongoose';

// set up a mongoose model and pass it using module.exports
export default mongoose.model('Recipe', new Schema({ 
    id: String,
    name: String, 
    description: String, 
    imagePath: String,
    steps: Array,
    updatedAt: Date,
}));