export const sendResponse = (res, contentType, statusCode = 200,payload) => {
    res.setHeader('Content-Type', contentType);
    res.statusCode = statusCode;
    res.end(payload);
}