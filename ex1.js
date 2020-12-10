var events = require('events');
var eventEmitter = new events.EventEmitter();

// Listener 1 - criada uma function, e se for chamada executa, no console log a mensagem!
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

// Listener 2 - criada uma function, e se for chamada executa, no console log a mensagem!

var listener2 = function listener2() {
    console.log('listener2 executed.');
}

// Adicionar um evento de coneção com a funçao listener 1 
eventEmitter.addListener('connection', listener1);

// Evento de coneção com a funçao listener 2
eventEmitter.on('connection', listener2);

// Criada variavel eventListeners, solicitando o require('events')
// Assim chamando EventEmitter e listenerCount para mostrar as conexões feitas
var eventListeners = require('events').EventEmitter.listenerCount
(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Evento de conexão disparada
eventEmitter.emit('connection');

// Listener1 é "desligado".
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// Evento de conexão disparada
eventEmitter.emit('connection');

// Novamente é chamado eventListeners e o require 'events'
// EventEmitter e o listenerCount para saber o numero da conexão do listener
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

//Fim do programa
console.log("Program Ended.");
