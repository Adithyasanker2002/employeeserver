const jsonServer = require('json-server')
const MpServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT =3000
const route = jsonServer.router('db.json')
MpServer.use(middleware)
MpServer.use(route)
MpServer.listen(PORT,()=>{
    console.log(`MP Server started at port: ${PORT} and waiting for client request!!!!!`);
    
})