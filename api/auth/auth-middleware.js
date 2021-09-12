const User = require('../auth/auth-model.js')

async function validateNewUser(req,res,next) {
    try{
        if(!req.body.username || !req.body.password){
            res.status(401).json("username and password required")
        }else{
            next()
        }
    }catch(e){
          res.status(500).json(`Server error: ${e}`)
      }
  }

  async function checkUsernameFree(req,res,next) {
    try{
      const newUser = await User.findBy({username:req.body.username})
      if(!newUser.length){
        next()
      }else{
        res.status(422).json({message: "Username taken"})
      }
    }catch(e){
          res.status(500).json(`Server error: ${e}`)
      }
  }

  

  module.exports = { validateNewUser, checkUsernameFree }