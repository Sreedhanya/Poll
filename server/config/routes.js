//var notes=require('../controllers/notes.js');
 const path=require("path");
const users=require("./../controllers/users.js")
  
   module.exports=(app) =>{
      
       app.post("/login",users.addUser);
       app.post("/addQuestion",users.addQuestion);
       app.get("/logout",users.logout);
       app.get('/show',users.show);
       app.get('/getUser',users.getUser);
       app.get("*", (req,res)=>{
           res.sendFile(path.resolve("./client/dist/index.html"));
       })
       
   }

