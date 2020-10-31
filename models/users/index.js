const db = require('../')

class User{
    static findAll(cb){
        let SQL = "SELECT * FROM user_account ORDER BY id DESC"
        db.query(SQL, (err, results)=>{
            if(err) throw err
            cb(results)
        })
    }
}

module.exports = User