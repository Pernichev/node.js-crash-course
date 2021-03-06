const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created');
// });

// Create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
    if(err) throw err;
    console.log('File created and written');

    // Append to file after creating
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Text appended', err => {
        if(err) throw err;
        console.log('File created and written');
    });
});

// Read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log('Reading file...');
//     console.log(data);
// });

// Rename file

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'world.txt', err => {
    if(err) throw err;
    console.log('File renamed');
});