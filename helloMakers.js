// ps -ax
// ps -ax | node
// process.pid
// node -e "console.log(process.pid)"


// Node.js is an open source project designed to help you write JavaScript 
// programs that talk to networks, file systems or other I/O (input/output,
//  reading/writing) sources.
// setTimeout( function() {
// 	console.log("Makers")
// }, 2000)

// console.log("hello")

// its something weird on the way those 2 staments were processed
// node never sleeps, keeps going, you can iddle but not halting

// setInterval( function() {
// 	console.log("Makers")
// }, 1000)

// console.log("hello")

//the process continues becuase in node only exits when its nothing to do

// ok that's cool but what more insteresting is the libraies node has available

// well what if we build  a webserver, http library

var http = require('http') //http module


// var s = http.createServer(function(req, res) {			//create http server
// 	res.writeHead(200, { 'content-type': 'text/plain'})
// 	res.end("hello Makers\n") //end the response
// })
//callback gets executed every time a request comes into the server
//that's difference of each time a conecction is made to the server
// s.listen(8000);

// curl -i localhost:8000
// persistent conections to the web server, send a request request response response
// streaming


// var s = http.createServer(function(req, res) {			//create http server
// 	res.writeHead(200, { 'content-type': 'text/plain'})
// 	res.write("hello\n") //end the response

// 	setTimeout(function() {
// 		res.end("world\n")
// 		}, 2000)
// 	})

// s.listen(8000)

// ab -n 100 -c 100 http://localhost:8000/


// var net = require('net')
// var server = net.createServer(function(socket) {
// 	socket.write("hello\n")
// 	socket.end("Makers")
// })

// server.listen(8000)

// telnet localhost 8000



var net = require('net')
var server = net.createServer(function(socket) {
	socket.write("hello\n")
	socket.write("Makers")

	socket.on('data', function(data) {
		socket.write(data)
	})

})
//nc localhost 8000
// server is never goint to end the connection

server.listen(8000)



