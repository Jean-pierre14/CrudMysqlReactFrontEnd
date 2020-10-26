const db = require('../')
class Programmes{
    
    static findAll(callback){
        let SQL = "SELECT user_account.id, user_account.username, user_account.profile_pic, programmes_tb.userId, programmes_tb.context, programmes_tb.title, programmes_tb.created_at FROM user_account INNER JOIN programmes_tb WHERE user_account.id=programmes_tb.userId ORDER BY programmes_tb.id DESC LIMIT 4"
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