var net = require('net')

var sockets = []

var s = net.Server(function(socket) {
	sockets.push(socket)

	socket.on('data', function(d) {
		for (var i = 0; i < sockets.length; i++) {
			if (sockets[i] == socket) continue
			sockets[i].write(d)
		}
	})

	socket.on('end', function() {
		var i = sockets.indexOf(socket) //delete array[0]
		sockets.splice(i, 1)
	})


})

//my external ip:8000
//we

//difference between socket end and socket close
s.listen(8000)

// ifconfig | grep "inet " | grep -v 127.0.0.1










