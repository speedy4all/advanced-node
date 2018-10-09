const { Writable } = require('stream');
const { Readable } = require('stream');

// const outStream = new Writable({
//     write(chunk, encoding, callback) {
//         console.log(chunk);
//         callback();
//     }
// });

//process.stdin.pipe(outStream);
//process.stdin.pipe(process.stdout);

const inStream = new Readable({
  read(size) {
    setTimeout(() => {
        if (this.currentCharCode > 90) {
            this.push(null);
            return;
          }
        this.push(String.fromCharCode(this.currentCharCode++));
      
    }, 100);
  }
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

process.on('exit', () => {
    console.error(`\n\ncurrentCharCode is ${inStream.currentCharCode}`);
});
