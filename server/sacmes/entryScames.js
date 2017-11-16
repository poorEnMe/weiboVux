const mongoose = require('mongoose');
const user = require('../models/userModel');


let date = new Date();

let EntriesSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
  },
  body:String,
  createTime:{
    type:Date,
    default:Date.now
  },
  showTime:String
});
EntriesSchema.statics ={

  findById:(id)=>{
    return this.findOne({_id:id});
  }
};

module.exports = EntriesSchema;
