const db = require('../')

class Pastors{
    static save(id, name, callback){
        let SQL = "INSERT INTO pastor_tb SET user_id=?, pastor_name=?"
        db.query(SQL, [id, name], (e, result)=>{
            if(e) throw e
            callback(result)
        })
    }
    static find(callback){
        let SQL = "SELECT * FROM pastor_tb ORDER BY id DESC"
        db.query(SQL, (err, results)=>{
            if(err) throw err
            callback(results)
        })
    }
    static findOne(id, callback){
        let SQL = "SELECT * FROM pastor_tb WHERE user_id = ?"
        db.query(SQL, [id],(err, result)=>{
            if(err) throw err
            callback(result)
        })
    }

    static updateOne(id, name, callback) {
        let SQL = "UPDATE pastor_tb SET pastor_name = ? WHERE user_id = ?"
        console.log(id, name)
        db.query(SQL, [name, id], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static deleteOne(id, callback){
        let SQL = "DELETE FROM pastor_tb WHERE user_id = ?"
        db.query(SQL, [id], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static deleteAll(callback){
        let SQL = "DELETE FROM pastor_tb"
        db.query(SQL, (e, result)=>{
            if(e) throw e
            callback(result)
        })
    }
}

module.exports = Pastors