const exp = require('express')
const router = exp.Router()
const User = require("../models/users/")

router.get('/', (req, res)=>{
    User.findAll((results)=>{
        res.json(results)
    })
})

router.get('/:id', (req, res)=>{
    let id = req.params.id
    User.findOne(id, (result)=>{
        res.json(result)
    })
})

router.put('/:id', (req, res)=>{
    let id = req.params.id
    const {name,email,username,pass,location,status,gender,phone,department,dob,profile_pic,user_level,about} = req.body
    User.updateOne(name,email,username,pass,location,status,gender,phone,department,dob,profile_pic,user_level,about,id, (result)=>{
        res.json(result)
    })
})

router.delete('/:id', (req, res)=>{
    let id = req.params.id
    User.deleteOne(id, (result)=>{
        res.json(result)
    })
})

module.exports = router