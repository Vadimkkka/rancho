const mongoose = require('mongoose');

const subscribeSchema = mongoose.Schema({
  email: {
    type: String,
    required: true  
  }
})

module.exports = mongoose.model('subscribe', subscribeSchema)
