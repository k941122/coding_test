/**
 * 홀짝 구부하기
 * 
 * 문제 설명
 * 
 * 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 
 * 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
 * 
 * 제한 사항
 * - 1 ≤ n ≤ 1,000
 * 
 * 입출력 예시
 * 
 * 입력 #1
 * 
 * 100
 * 출력 #1
 * 
 * 100 is even
 * 입력 #2
 * 
 * 1
 * 출력 #2
 * 
 * 1 is odd
 * 
 */

/**
 * 문제 해석
 * 
 * n - > 정수형 매개변수
 * 
 * n%2 === 0
 * 
 * "n is even"
 * 
 * else "n id odd";
 */


// ▼ 오답 코드
function  solution (n) {
    return (n%2===0)? `${n} id even`:`${n} is odd`;
}

/**
 * output 자체가 없다는 메세지가 보였다.
 */

// ▼ 정답 코드
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    if(n%2===0) {
        console.log(`${n} is even`)
    } else {
        console.log(`${n} is odd`)
    }
});

/**
 * 원래 코드를 잘 분석해 보니, node.js에서 사용하는 코드였다.
 * 그래서,해당 코드들의 메서드와 코드들을 검색해서 알아본뒤, close 부분에 식을 쓰고
 * console.log 로 내용을 출력시켜야 한다는 것을 알았다.
 */