const express = require ('express');
const http = require ('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

let seats = Array(50).fill({booked: false});

io.on('connection', (selectedSeats) =>
{
    socketIo.emit('seats', seats);

    socketIo.on('bookSeats', (selectedSeats) =>
    {
        selectedSeats.forEach(id =>
        {
            seat[id] = {booked:true};
        });
        io.emit('seats', seats);
    });

    socketIo.on('dissconnect', () =>
    {
        console.log('Client Disconnected');
    });
});

app.get('/api', (req, res) =>
{
    res.json({data:123})
});

app.listen(4000, () => console.log('server is running on port 4000'));
