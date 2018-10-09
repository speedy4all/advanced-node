const { exec } = require('child_process');

exec('dir /p', (err, stdout, stderr) => { 
    if (err) { 
        console.error(`exec error: ${err}`);
        return;
    }

    console.log(`Files in current dir:\n ${stdout}`);
});