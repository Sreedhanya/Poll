
const mongoose=require("mongoose");
const User=mongoose.model("User");
var session = require('express-session');
module.exports={
    addUser: function(req,res,next)
    {
        console.log("In request"+req.body.name);
       User.findOne({name: req.body.name})
			.then(data => {
				if(data){
					req.session.user_id = data._id;
                    req.session.name=req.body.name;
                    console.log("id is "+req.session.user_id)
					res.json(true)
				} else {
					let new_user = new User({name: req.body.name})
					new_user.save()
						.then(() => {
                            console.log(req.body.name);
							req.session.user_id = new_user._id
							res.json(true)
						})
						.catch(err => res.status(500).json(err))
				}
			})
        
    },
    addQuestion: function(req,res,next){
      User.findOne({_id: req.session.user_id})  
      .then(data=>{
          
              User.update({_id: req.session.user_id},{question:req.body.question,option1:req.body.option1,option2:req.body.option2,option3:req.body.option3,option4:req.body.option4})
              .then(()=>{console.log(req.body);console.log("successfully updated");res.json(true)})
              .catch(err=>res.status(500).json(err))
          
      })
    },
    show:(req,res)=>
    {
        User.find().then(data=>res.json(data))
        .catch(err=>res.status(500).json(err))

    },
        logout: function(req, res, next){
        console.log("controller log off ")
        req.session.destroy();
        res.redirect('/')
    },
    getUser : function(req,res,next)
    {
User.findOne({_id: req.session.user_id}).then(data=>res.json(data))
        .catch(err=>res.status(500).json(err));
    }

}