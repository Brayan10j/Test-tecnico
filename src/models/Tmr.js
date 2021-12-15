const mongoose = require('mongoose');
const { Schema } = mongoose;

const TmrSchema = new Schema({
  price: Number,
});

module.exports = mongoose.model('Tmr', TmrSchema);