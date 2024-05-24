//Below is a simple example of how to use WebSockets in JavaScript. This example consists of two parts: a WebSocket server (which we'll simulate with ws, a popular Node.js library) and a client-side HTML/JavaScript that connects to this server.

// Step 1: Setting up the WebSocket Server
// First, you'll need to set up a WebSocket server. If you don't have Node.js and npm installed, you'll need to do that first. Then, create a directory for your project, initialize a new Node.js project, and install the ws library:

// mkdir websocket-demo
// cd websocket-demo
// npm init -y
// npm install ws

// Create a file named server.js in your project directory and add the following code to create a simple WebSocket server:

// const WebSocket = require('ws');

// const wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', function connection(ws) {
//   console.log('A new client connected!');
//   ws.send('Welcome New Client!');

//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });

//   ws.on('close', () => {
//     console.log('A client disconnected');
//   });
// });

// console.log('WebSocket server started on ws://localhost:8080');

// Run your server using Node.js:

// node server.js

// Step 2: Creating the WebSocket Client
// Create an HTML file named index.html and add the following code to create a simple WebSocket client:

// <!DOCTYPE html>
// <html>
// <head>
//     <title>WebSocket Client</title>
// </head>
// <body>
//     <script>
//         var ws = new WebSocket('ws://localhost:8080');

//         ws.onopen = function() {
//             console.log('Connected to the server');
//             ws.send('Hello Server!');
//         };

//         ws.onmessage = function(event) {
//             console.log('Message from server: ', event.data);
//         };

//         ws.onclose = function() {
//             console.log('Disconnected from the server');
//         };

//         ws.onerror = function(error) {
//             console.log('WebSocket error: ', error);
//         };
//     </script>
// </body>
// </html>

// Using the WebSocket Client and Server
// Make sure your WebSocket server is running by executing node server.js in your terminal.
// Open the index.html file in a web browser.
// You should see log messages in your browser's developer console indicating that the client has connected to the server, and the server's terminal will also log the connection and message received from the client.

// This simple example demonstrates the basics of setting up a WebSocket client and server. You can expand upon this by adding more complex messaging and event handling as needed for your application.