const fs = require('fs');
const path = require('path');

function parse(){
    const filepath = path.resolve(process.cwd(), '.env');
    let encoding = 'utf8';
    let contentStr = fs.readFileSync(filepath, {encoding});
    contentStr = contentStr.trim();
    console.log(contentStr);
    console.log("hey yo");


    const obj = {}
    const contentArr = contentStr.toString().split('\n');
    contentArr.forEach(function(line){
       const keyValueArr = line.split('=');
       const key = keyValueArr[0];
       keyValueArr[1] = keyValueArr[1].replaceAll("'", '')
       const value = keyValueArr[1];

       obj[key] = value;
    });
    return obj
}

obj = parse()

module.exports = {obj}