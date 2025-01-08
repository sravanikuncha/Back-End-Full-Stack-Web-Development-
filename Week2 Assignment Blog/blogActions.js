// Do not change the pre-written code.
// Make the necessary imports here.

import * as fs from 'fs';


export const writeBlog = (filePath, name) => {
// Write your code here.
    fs.appendFileSync(filePath,name);
}

export const publishBlog = (filePath) => {
// Write your code here.
    const buffer=fs.readFileSync(filePath);
    return buffer.toString();
}