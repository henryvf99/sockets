var socket = io();

//on = para escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//emit = para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'henry',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
})