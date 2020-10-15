const exp = require('express')
const router = exp.Router()
const Pastors = require('../models/pastors/')

router.get('/', (req, res)=>{
    Pastors.find((results)=>{
        res.json(results)
    })
})

router.get('/:id', (req, res)=>{
    let id = req.params.id
    Pastors.findOne(id,(result)=>{
        res.json(result)
    })
})

// UpdateOne
// DeleteOne
// DeleteAll

module.exports = router