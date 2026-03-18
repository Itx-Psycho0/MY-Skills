import http from 'node:http'
// http module is used to create a server and handle HTTP requests and responses. it provides functionalities to create a web server, listen for incoming requests, and send responses back to clients. It is a core module in Node.js and is commonly used for building web applications and APIs and it allows data to be transferred over the HTTP protocol, which is the foundation of data communication on the web. It enables the server to receive requests from clients (such as web browsers) and send back responses, which can include HTML, JSON, or other types of data. The http module provides methods for handling different HTTP methods (GET, POST, PUT, DELETE, etc.) and allows developers to create dynamic web applications and APIs that can interact with clients over the internet.



// the response object is used to send a response back to the client. It provides methods and properties that allow you to set the status code, headers, and body of the response. You can use res.end() to end the response and send data back to the client. For example, res.end('Hello from the server!') will send a simple text response to the client. The response object is an essential part of handling HTTP requests and is used to communicate with clients and provide them with the necessary information or data they requested. it provide a way to send data back to the client, whether it's a simple message, JSON data, or an HTML page. It allows you to control the status code of the response, set headers, and send the response body, making it a crucial component in building web applications and APIs.

const PORT = 8000;

const server = http.createServer((req,res) => {
    res.end('Hello from the server!')
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

