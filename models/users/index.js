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
        db.query(SQL, [id], (err, result)=>{
            if(err) throw err
            cb(result)
        })
    }
    static updateOne(id, name,email,username,pass,location,status,gender,phone,department,dob,profile_pic,user_level,about, callback){
        let SQL = "UPDATE user_account SET name=?,email=?,username=?,pass=?,location=?,status=?,gender=?,phone=?,department=?,dob=?,profile_pic=?,user_level=?,about=? WHERE id = ?"
        db.query(SQL, [name,email,username,pass,location,status,gender,phone,department,dob,profile_pic,user_level,about, id], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static deleteOne(id, callback){
        let SQL = "DELETE FROM user_account WHERE id = ?"
        db.query(SQL, [id], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static deleteAll(callback){
        let SQL = "DELETE FROM user_account"
        db.query(SQL, (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
}

module.exports = User