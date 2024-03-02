// built-in module
const os = require('os');

// info about current user
const user = os.userInfo()
//console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);     // 시스템 부팅 후 경과된 시간

const currentOS = {
    name:os.type(),             // 현재 운영체제의 이름
    release:os.release(),       // 현재 운영체제의 버전
    totalMem:os.totalmem(),     // 시스템의 총 메모리(RAM) 양을 바이트 단위로 반환
    freeMem:os.freemem(),       // 시스템의 사용 가능한 메모리(RAM) 양을 바이트 단위로 반환
}
console.log(currentOS);