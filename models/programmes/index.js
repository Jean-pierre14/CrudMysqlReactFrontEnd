const db = require('../')
class Programmes{
    
    static find(callback){
        let SQL = "SELECT user_account.id, pastor_tb.pastor_name,pastor_tb.user_id, user_account.create_at FROM user_account INNER JOIN pastor_tb ON user_account.id=pastor_tb.user_id"
        db.query(SQL, (err, result)=>{
        if(err) throw err
        callback(result)
    })
    }
    static findAll(callback){
        let SQL = "SELECT * FROM programmes_tb ORDER BY id DESC"
        db.query(SQL, (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static deleteOne(id,callback){
        let SQL = "DELETE FROM programmes_tb WHERE id = ?"
        db.query(SQL, [id], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static create(title,content,userId, callback){
        let SQL = "INSERT INTO programmes_tb(title,context,userId) VALUES(?, ?, ?)"
        db.query(SQL, [title, content, userId], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static updateOne(title,content,id, callback){
        let SQL = "UPDATE programmes_tb SET title=?,context=? WHERE id=?"
        db.query(SQL, [title,content,id], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    
}

module.exports = Programmes