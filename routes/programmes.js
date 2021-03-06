const exp = require('express')
const router = exp.Router()
const Programmes = require('../models/programmes/')

router.get('/', async (req, res)=>{
    await Programmes.findAll((callback)=>{
        res.json(callback)
    })
})

// Dashboard
router.get('/count', async (req, res)=>{
    await Programmes.CountAll((cb)=>{
        res.json(cb)
    })
})


router.get('/all', async (req, res) => {
    Programmes.find((cb) => {
        res.json(cb)
    })
})

router.post('/', async (req, res)=>{
    const {title,content,userId} = req.body
    await Programmes.create(title, content, userId, (programme) => {
        res.json(programme)
    })
})

router.put('/:id', async (req, res)=>{
    let id = req.params.id
    await Programmes.updateOne(id, (programme)=>{
        res.json(programme)
    })
})

router.delete('/:id', async (req,res)=>{
    let id = req.params.id
    await Programmes.deleteOne(id, (programme)=>{
        res.json(programme)
    })
})

module.exports = router