// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create propoerties ect)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// github에 업로드 할 시, .gitignore에 있는 패키지들은 안 올라가게 된다.
// git에서 clone을 할 시, 필요한 패키지들은 'npm install' 명령어를 사용하면 package.json 파일의 dependencies를 보면서 자동으로 install해준다.