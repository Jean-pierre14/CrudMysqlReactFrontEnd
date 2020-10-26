const db = require('../')

class Blog{
    static create(user_id, context, callback){
        let SQL =  "INSERT INTO blog_tb SET user_Id =?, context=?"
        db.query(SQL, [user_id, context], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static findAll(callback){
        let SQL = "SELECT user_account.id, user_account.profile_pic, user_account.username, blog_tb.user_Id, blog_tb.context, blog_tb.create_at FROM user_account INNER JOIN blog_tb WHERE user_account.id=blog_tb.user_Id"
        db.query(SQL, (err, results)=>{
            if(err) throw err
            callback(results)
        })
    }
}

module.exports = Blog