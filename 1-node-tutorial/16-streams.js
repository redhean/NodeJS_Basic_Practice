const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {highWaterMark : 90000, encoding :'utf8'});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000});
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8});

// 'data'는 built-in
stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(err);
});


// 이렇게 변수를 선언해서 얻어올 경우, 데이터 양이 커지면 부담스러워 진다.
/*
const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag : 'a'}
);

console.log('done with this task');
console.log('starting the next one');
*/
