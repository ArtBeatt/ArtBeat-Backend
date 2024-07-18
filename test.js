//TO-DO update/create user file with this function
//Kathy Tran: I was not assiged this task but I saw this in server.js so I did it
const pool = require('db.js')

function search (email){
    pool.connect(function(err) {
        if (err) throw err;
        pool.query(`SELECT * FROM Users WHERE email = ${email}`, function (err, result, fields) {
            console.log(result)
          if (err) throw err;
          console.log(result);
        });
      });

}