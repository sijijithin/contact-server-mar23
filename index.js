// steps to generate json server

// 1) import json-server
const jsonServer=require("json-server")

// 2) create server application
const server =jsonServer.create()

// 3) generate middileware to use in json server
const middileware=jsonServer.defaults()

// 4) set up route/path for json file
const router= jsonServer.router("db.json")

// 5)set up port number to run server app
const port=3000 || process.env.PORT

// 6)use middleware and router to the server app
server.use(middileware)
server.use(router)

// 7) to listen /run server in specified port
server .listen (port,()=>{
console.log(`contact server app started  at port ${port}`);
}
 )
