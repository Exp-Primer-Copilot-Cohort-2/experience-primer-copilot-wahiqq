// Create web server
// Set up a web server that listens on port 3000.
// When you visit http://localhost:3000/comments, it should return a JSON response with the following array of comments:

// [
//   { username: "tammy", comment: "lol that is so funny" },
//   { username: "timmy", comment: "roflmao" },
//   { username: "lucy", comment: "this is great!" }
// ]

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify([
//         { username: "tammy", comment: "lol that is so funny" },
//         { username: "timmy", comment: "roflmao" },
//         { username: "lucy", comment: "this is great!" }
//     ]));
// });

// server.listen(3000);git add comments.js