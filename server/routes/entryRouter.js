const Entries = require('../models/entryModel');
const moment = require('moment');
moment.locale('zh-cn');

//统一设置每次5条
let perpage = 5;


exports.fetch = async (req,res,next)=>{
  let lastId = req.query.lastId;
  let entries = [];
  let whr = {};
  if(lastId){
    whr= {
      _id :{ "$lt" :lastId}
    }
  }

  console.log(lastId);
  try{
    entries =await  Entries.find(whr).limit(perpage)
      .populate({path: 'userId', select: 'name headImg'})
      .sort({'createTime':-1})
      .exec();
  }catch(e){
    if(e) return next(e);
  }
  if(entries.length > 0)
  {
    lastId = entries[entries.length-1]._id;
  }
  res.json({
      entries:UpdateshowTime(entries),
      lastId:lastId
  });


};


function UpdateshowTime(entries) {
  if(entries.length>0){
    entries.forEach(function(entry){
      let DateNow = new Date();
      //超出半天显示绝对时间
      if(DateNow - entry['createTime'] <= 1000 * 60 * 60 * 12){
        entry['showTime'] = moment(entry['createTime']).fromNow();
      }else{
        entry['showTime'] = moment(entry['createTime']).format("YYYY-MM-DD HH:mm");
      }

    });
  }
  return entries;
}
