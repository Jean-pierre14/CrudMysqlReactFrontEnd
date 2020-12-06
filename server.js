const cors = require('cors')
const exp = require('express')
const bp = require('body-parser')
const {success, error} = require('consola')
const router = require('./routes/programmes')
const PastorsEndpoint = require('./routes/Pastors')
const blog = require('./routes/Blog')
const Users = require('./routes/Users')
const db = require('./models/')

const app = exp()
const PORT = process.env.PORT || 7000

db.connect((err)=>{
    if(err) error({message: `${err}`, badge: true})
    success({message: `Connected to the database`, badge: true})
})
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({extended: false}))

app.use('/programmes', router)
app.use('/pastors', PastorsEndpoint)
app.use('/blog', blog)
app.use('/users', Users)


app.get('/', (req,res)=>{
    res.json("Main endpoint /")
})
app.use((req, res, next)=>{
    res.status(404).json({message: "Page not found"})
})
app.listen(PORT, (err)=>{
    if(err) error({message: `${err}`, badge: true})
    success({message: `Server run on port ${PORT}`, badge: true})
})
