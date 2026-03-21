/*
Challenge 2:

1. Create and export a function called 'serveStatic'. 
   It should take in the base directory as a parameter.

2. Build a path to index.html in the 'public' folder and save it to a const 'filePath'. 
   (Which node module will you need to import to do this? Which method joins the path together?)

3. Log 'filePath' to the console.
*/

import path from 'node:path';
import fs from 'node:fs/promises';
import { sendResponse } from './sendResponse.js';
export async function serveStatic(req,res, baseDir) {
   const filePath = path.join(baseDir, 'public', 'index.html');
   try{
      const content = await fs.readFile(filePath);
      sendResponse(res, 'text/html', 200, content);
   }catch(error){
      console.log(error);
      sendResponse(res, 'text/plain', 404, 'File not found');
   }
};

