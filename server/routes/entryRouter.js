const Entries = require('../models/entryModel');
const moment = require('moment');
moment.locale('zh-cn');

exports.fetch = (req,res,next)=>{
  let currentPage = parseInt(req.query.page,10) || 1;
  let perpage = 5;
  Entries.count({},function (err,TotalCount) {
    Entries.find().skip( perpage * (currentPage-1) ).limit(perpage)
      .populate({path: 'userId', select: 'name headImg'})
      .sort({'createTime':-1})
      .exec(function (err,entries) {
        let pages = {
          currentPage:currentPage,
          perpage:perpage,
          TotalCount:TotalCount,
          TotalPages:Math.ceil(TotalCount / perpage)
        };
        if(err) return next(err);
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
        console.log(entries);
        res.json({
          entries:entries,
          pages:pages
        });
      });
  });

};

/*
exports.deleteEntry = (req,res)=>{
  let data = req.query;
  if(data.entryId){
    Entries.remove({_id:data.entryId},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("delete");
      }
    });
  }
};*/
