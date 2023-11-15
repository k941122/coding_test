
// 코딩 테스트 js 기초 !

/**
 * 두수의 차!
 *
 * 문제설명
 * 정수 num1 과 num2가 주어질 때, num1 에서 num2 를 뺀 값을 return
 * 하도록 solution 함수를 완성해 주세요!
 * 
 * 제한사항
 * - -50000 <= num1 <= 50000
 * - -50000 <= num2 <= 50000
 * 
 * 입출력 예시!
 * 
 * ex1) => (num1) 2 (num2) 3 (result) -1
 * ex2) => (num1) 100 (num2) 2 (result) 98
 * 
 * 예시 설명!
 * - num1이 2 이고 num2 가 3이므로 2-3=-1을 return
 * - num1이 100 이고 num2 가 2이므로 100-2=-98을 return
 */

let num1 = 300;
let num2 = 5;

function solution (num1,num2) {
    return num1 - num2;
}

solution();

/**
 * 위의 문제를 화살표 함수를 통해 만들어 보기!
 * const solution = (num1,num2) => num1 + num2;
 * 화살표 함수를 생활화 하자!!
 */


















