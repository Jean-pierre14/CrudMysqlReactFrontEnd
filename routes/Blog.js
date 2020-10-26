const exp = require('express')
const router = exp.Router()
const Blog = require('../models/blog/')

router.get('/', (req, res)=>{
    Blog.findAll((results)=>{
        res.json(results)
    })
})

router.post('/', (req, res)=>{
    const {user_id, context } = req.body
    if(!user_id || !context){
        res.json('empty fields')
    }else{
        Blog.create(user_id, context, (result)=>{
            res.json(result)
        })
    }
})

module.exports = router