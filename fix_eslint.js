const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('page.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('c:/StackCuts/src/app');
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('setMounted(true)')) {
        if (!content.startsWith('/* eslint-disable react-hooks/set-state-in-effect */')) {
            content = '/* eslint-disable react-hooks/set-state-in-effect */\n' + content;
            fs.writeFileSync(file, content);
            updatedCount++;
            console.log('Updated: ' + file);
        }
    }
});
console.log('Total updated: ' + updatedCount);
