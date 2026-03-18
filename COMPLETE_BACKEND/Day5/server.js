import http from 'node:http'
import {data} from './data.js'
// http module is used to create a server and handle HTTP requests and responses. it provides functionalities to create a web server, listen for incoming requests, and send responses back to clients. It is a core module in Node.js and is commonly used for building web applications and APIs and it allows data to be transferred over the HTTP protocol, which is the foundation of data communication on the web. It enables the server to receive requests from clients (such as web browsers) and send back responses, which can include HTML, JSON, or other types of data. The http module provides methods for handling different HTTP methods (GET, POST, PUT, DELETE, etc.) and allows developers to create dynamic web applications and APIs that can interact with clients over the internet.

async function fetchData() {
    return data;
}



// the response object is used to send a response back to the client. It provides methods and properties that allow you to set the status code, headers, and body of the response. You can use res.end() to end the response and send data back to the client. For example, res.end('Hello from the server!') will send a simple text response to the client. The response object is an essential part of handling HTTP requests and is used to communicate with clients and provide them with the necessary information or data they requested. it provide a way to send data back to the client, whether it's a simple message, JSON data, or an HTML page. It allows you to control the status code of the response, set headers, and send the response body, making it a crucial component in building web applications and APIs.


// the request object is used to access information about the incoming HTTP request. It contains properties and methods that allow you to retrieve data such as the request method (GET, POST, etc.), URL, headers, and body of the request. The request object is essential for handling client requests and processing the data sent by the client. For example, you can use req.method to determine the HTTP method used in the request, req.url to get the requested URL, and req.headers to access the headers sent by the client. The request object is a fundamental part of handling HTTP requests and is used to extract information from the client's request in order to generate an appropriate response.



// Content-type (mime type) is a header in HTTP that indicates the media type of the resource being sent in the response. It tells the client how to interpret the data being received. For example, if the server is sending JSON data, it would set the Content-Type header to application/json. If it's sending an HTML page, it would set it to text/html. Setting the correct Content-Type is important for ensuring that the client can properly handle and display the data received from the server. For instance, if the server sends a JSON response but sets the Content-Type to text/plain, the client may not be able to parse the JSON data correctly. Therefore, it's crucial to set the appropriate Content-Type header based on the type of data being sent in the response to ensure proper communication between the server and client.

const PORT = 8000;

const animal = {
    type: 'dog',
    name: 'max',
    age: 3

}

const server = http.createServer(async (req,res) => {
    const rdata = await fetchData();
    if (req.url === '/api' && req.method === 'GET') {
        // res.write('Hello from the server! using write method \n');

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end((JSON.stringify(rdata)),() => {
            console.log('Response sent to the client');
        });
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

