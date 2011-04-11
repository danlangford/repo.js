

var 
    qs = require('../mod/connect/support/qs'),
    connect = require('../mod/connect'),
    io = require('../mod/socket.io'),
    PORT = process.env.C9_PORT,
    HOST = '0.0.0.0';


var server = connect(
    connect.logger(),
    connect.static(__dirname + '../www')
);

server.listen(PORT,HOST);

var socket = io.listen(server);

socket.on('connection', function(client){
    // new client is here!
    client.on('message', function(){
      console.log('MESSAGE');
    });
    client.on('disconnect', function(){
      console.log('DISCONNECT');
    });
});