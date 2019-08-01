const UserModel = require('../models/UserMolde');
module.exports = {
    create: (req,res)=> {
        let user = new UserModel({
            forname: req.body.forname,
            surenmae: req.body.surenmae,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            team: req.body.team 

        })
        user.save()
        .then(result=>{
            res.json({success: true, result: result})
        })
        .catch(err=>{
            res.json({success: false,result:err})
        })
    },

update:(req,res) => {
    UserModel.update({_id:req.body._id},req.body)
    .then(result => {
        if (!result) 
            res.json({success: false,result: 'user does not exist'})
        res.json(result) 
    })
    .catch(err=>{
        res.json({success: false,result:err})
    })
  },



getAll: (req,res) => {

    UserModel.find({})
    .then(result=> {
        res.json({success: true, result: result})
    })
    .catch(err=>{
       res.json({success: false,result:err})
    })

}
}