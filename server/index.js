const app = require('http').createServer((req, res) => {
    res.end('Welcome');
});
const io = require('socket.io')(app);
const fs = require('fs');
const port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

io.on('connection', (socket) => {
    console.log('got a connection from client');

    socket.emit('message', 'Hello World');

    socket.on('message', (message) => {
        console.log(`message from client: ${message}`);
    });

    socket.on('disconnect', () => {
      console.log('client disconnected');
    });
});