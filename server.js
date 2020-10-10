const exp = require('express')
const {success, error} = require('consola')

const app = exp()
const PORT = process.env.PORT || 7000

app.listen(PORT, (err)=>{
    if(err) error({message: `${err}`, badge: true})
    success({message: `Server run on port ${PORT}`})
})
