const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    console.log("req,url",req.url)

    if(req.url=="/"){
    fs.readdir("./","utf-8",(err,data)=>{
        if(err){
         res.writeHead(500,{
            "content-type":"text/html",
        });
        res.end("error")
       return;
         }

         let filelist = data.map(file =>`<li>${file}</li>`).join("");
         let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>File List</title>
        </head>
        <body>
            <h1>File List</h1>
            <li>
                ${filelist}
            </li>        
            </body>
        </html>
        `;

        res.writeHead(200,{"content-type": "text/plain"});
        res.end("not found");
       })
    }else{
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("not found");
    }
});
    
      
    



server.listen(8098,()=>{
    console.log("server started")
})




