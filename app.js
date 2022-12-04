const http = require("http");

const server = http.createServer((req , res)=>{
     if(req.url === "/"){
      return   res.end("This is home page ..")
     }
     if(req.url === "/contact"){
       return  res.end("This is contact page !")
     }
     return res.end(
        `
        <h3>Oops !</h3>
        `
     )
})

server.listen(4000);

const {circle} = require("./circle");
circle();