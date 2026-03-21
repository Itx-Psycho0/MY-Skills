// handleGet
import { getData } from '../utils/getData.js';
import { sendResponse } from '../utils/sendResponse.js';

export async function handleGet(req,res){
   const response = await getData();
   const data = JSON.stringify(response);
   sendResponse(res, 'application/json', 200, data);
}


export function handlePost(req,res){
   console.log('POST request received');
}
