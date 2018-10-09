const { Duplex } = require('stream');

const inoutStream = new Duplex({
  write(chunk, encoding, callback) { 
    console.log(chunk.toString());
    callback();
  },

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

inoutStream.currentCharCode = 65;

process.stdin.pipe(inoutStream).pipe(process.stdout);

process.on('exit', () => {
    console.error(`\n\ncurrentCharCode is ${inoutStream.currentCharCode}`);
});
