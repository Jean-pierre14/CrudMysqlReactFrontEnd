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
        let SQL = "SELECT user_account.id,user_account.profile_pic, pastor_tb.user_id, pastor_tb.pastor_name, pastor_tb.create_at FROM user_account INNER JOIN pastor_tb ON user_account.id=pastor_tb.user_id ORDER BY pastor_tb.id DESC"
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