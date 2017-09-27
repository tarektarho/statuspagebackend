  var mongoose = require('mongoose');

  //Status Schema
  var statusSchema = mongoose.Schema({
      name:{
        type: String,
        required: true
      },
      create_date:{
        type: Date,
        default: Date.now
      }


  });

const Status = module.exports = mongoose.model('Status', statusSchema);

//  Get Status

module.exports.getStatus = function(callback, limit){

  Status.find(callback).limit(limit);

}
