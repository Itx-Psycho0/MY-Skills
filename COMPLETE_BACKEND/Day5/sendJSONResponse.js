export const sendJSONResponse = (res, data, statusCode = 200) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(data),() => {
            console.log('Response sent to the client');
        });
}