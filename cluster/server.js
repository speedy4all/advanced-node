const http = require('http');
const pid = process.pid;

let usersCount;
http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++);
    res.write(`Handled by process ${pid}\n`);
    res.end(`Users: ${usersCount}`);
}).listen(8000, () => { 
    console.log(`Started process ${pid}`);
    });

process.on('message', msg => {
    usersCount = msg.usersCount;
});


// setTimeout(() => { 
//     console.log(`crashing ${process.pid}`);
//     process.exit(1); //random timeout stop
// }, Math.random() * 10000);