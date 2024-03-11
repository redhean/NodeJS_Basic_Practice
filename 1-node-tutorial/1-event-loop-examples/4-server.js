const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
});

server.listen(5001, () => {
    console.log('Server listening on port : 5001...');
});

// apple silicon을 탑재한 맥북은 5000번 포트를 airplay에서 사용
// 시스템 설정 > 일반 > AirDrop 및 Handoff > Airplay 수신 모드
// 를 꺼주면 됨 (M2칩 탑재 맥 기준)