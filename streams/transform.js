const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) { 
    console.log(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);