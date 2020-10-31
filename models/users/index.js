const db = require('../')

class User{
    static findAll(cb){
        let SQL = "SELECT * FROM user_account ORDER BY id DESC"
        db.query(SQL, (err, results)=>{
            if(err) throw err
            cb(results)
        })
    }
    static findOne(id, cb){
        let SQL = "SELECT * FROM user_account WHERE id = ?"
        db.query(SQL. [id], (err, result)=>{
            if(err) throw err
            cb(result)
        })
    }
}

module.exports = User