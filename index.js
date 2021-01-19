const http = require('http')


const server = http.createServer((request, response) => {
    console.log('url: ', request.url)

    // if (request.url == '/koders') {
    //     switch (request.method) {
    //         case 'GET':
    //             response.write('get koders')
    //             break;
    //             case 'POST':
    //             response.write('post koders')
    //             break;

        
    //         default:
    //             response.write('IDK ruta')
    //             break;
    //     }
    // } else {
    //     response.write('otra ruta')
    // }

    if (request.method == 'POST') {
        response.write('Crearás un recurso')
    } else if (request.method == 'GET') {
        response.write('Obtendras un recurso')
    } else {
        response.write('IDK ')
    }

    response.end()
    
})

server.listen(8080, () => {
    console.log('servidor escuchando en puerto 8080')
})


/*
Practica

Responder "Obtendras un recurso" cuando nos llamen con un método GET
Responder "Crearas un recurso" cuando nos llamen con un método POST

buscar en la documentación de request

if metodo GET bla bla if metodo post bal bla

siempre que ponemos una direccion en el navegador es una llamada get.

*/
