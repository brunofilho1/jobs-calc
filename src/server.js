const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// usando template engine
server.set('view engine', 'ejs')

// mudar a localização da pasta /views
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos estáticos
server.use(express.static("public"))

// o .use serve pra colocar/habilitar configurações no servidor

// usar o req.body
server.use(express.urlencoded({extended: true}))

// routes
server.use(routes)

//request, response
server.get('/', (request, response) => {
    console.log('Entrei no index!');

    return response.sendFile(__dirname + "/views/index.html")
})


server.listen(3000, () => console.log('Server atualizado...'))