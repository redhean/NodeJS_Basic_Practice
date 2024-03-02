const {readFile, writeFile} = require('fs');        // Async
console.log('start');

readFile('./content/first.txt', 'utf8', (err, result)=>{        // callback function
    if(err) {
        console.log(err);
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if(err) {
            console.log(err);
            return;
        }
    
        const second = result;
        writeFile('./content/reseult-async.txt',
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if(err) {
                console.log(err);
                return;
            }

            //console.log(result);
            console.log('done with this task');
        }
        )
    })
})
console.log('starting next task');      // 먼저 실행