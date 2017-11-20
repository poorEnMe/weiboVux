const User = require('../models/userModel');

exports.loginCheck = (req,res,next)=>{
  let data = req.body;
  User.authenticate(data.account,data.xpassword,function (err,user) {
    if (err) return next(err);
    if(user){
      res.send(true);
    }else{
      res.send(false);
    }
  })
};
exports.loginSubmit = (req,res,next)=>{
  let data = req.body;
  User.authenticate(data.username,data.userpassword,function (err,user) {
    if(err) return next(err);
    if(user){
      req.session.uid = user.id;
      res.redirect('/index');
    }
  });
};
