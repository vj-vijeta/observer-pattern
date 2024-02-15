const WebSocket = require('ws');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const observers = new Set();

// Periodically send random numbers to all connected clients
setInterval(() => {
  const randomNum = generateRandomNumber();
  observers.forEach((observer) => {
    if (observer.readyState === WebSocket.OPEN) {
      observer.send(`Random number update: ${randomNum}`);
    }
  });
}, 5000); // Every 5 seconds

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Add the WebSocket connection as an observer
  observers.add(ws);

  // Handle disconnection
  ws.on('close', () => {
    console.log('Client disconnected');

    // Remove the WebSocket connection as an observer
    observers.delete(ws);
  });
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
