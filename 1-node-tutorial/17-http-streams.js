const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    //const text = fs.readFileSync('./content/big.txt', 'utf8');
    //res.end(text);

    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        // sending in chunks
        fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
        if(err){
            res.end(err);
            //console.log(err);
        }
    });
})
.listen(5001)