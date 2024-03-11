const http = require('http');

const server = http.createServer((req, res)=>{
    // req -> incomming request
    // res -> response what we sending back

    if(req.url === '/') {
        res.end('Welcome to our home page');
    }
    else if(req.url === '/about') {
        res.end('Here is our short history');
    }
    else{
        res.setHeader('Content-Type', 'text/html');  // html 코드를 해석 못할경우 명시적으로 type설정
        res.end(`
            <h1> Oops! </h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a> 
        `);
    }
    
    //console.log(req);
    //res.write('Welcome to our home page');
    //res.end();
})

server.listen(5001);        // port settings