const exp = require('express')
const router = exp.Router()
const Pastors = require('../models/pastors/')

router.get('/', async (req, res)=>{
    await Pastors.find((results)=>{
        res.json(results)
    })
})

router.post('/', async (req, res)=>{
    const {id,name} = req.body
    if(!id || !name){
        res.json({message: "Empty fields"})
    }else{
        await Pastors.save(id, name, (result)=>{
            res.json(result)
        })
    }
})

router.get('/:id', async (req, res)=>{
    let id = req.params.id
    await Pastors.findOne(id,(result)=>{
        res.json(result)
    })
})

router.put('/:id', (req, res)=>{
    let id = req.params.id
    let name = req.body.name
    Pastors.updateOne(id, name, (result)=>{
        console.log(id, name)
        res.json(result)
    })
})

router.delete('/:id', async (req, res)=>{
    let id = req.params.id
    await Pastors.deleteOne(id, (result)=>{
        res.json(result)
    })
})
router.delete('/delete', async (req, res)=>{
    await Pastors.deleteAll((result)=>{
        res.json(result)
    })
})
// DeleteOne
// DeleteAll

module.exports = router