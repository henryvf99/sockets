const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenido a la aplicacion'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
    })

});