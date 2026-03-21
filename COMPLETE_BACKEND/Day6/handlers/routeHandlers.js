// handleGet
import { getData } from '../utils/getData.js';
import { sendResponse } from '../utils/sendResponse.js';

export async function handleGet(req,res){
   const response = await getData();
   const data = JSON.stringify(response);
   sendResponse(res, 'application/json', 200, data);
}

/*
Challenge:
1. Export a function called handleGet(). 
2. It should:
   - use getData() to get the data
   - stringify that data
   - use sendResponse() to serve it
   
Open the browser and load the sightings page to see if it works.
*/

// handlePost