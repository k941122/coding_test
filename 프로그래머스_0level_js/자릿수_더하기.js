
/**
 * 자릿수 더하기
 * 
 * 문제 설명
 * 
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 
 * solution 함수를 완성해주세요
 * 
 * 제한사항
 * - 0 ≤ n ≤ 1,000,000
 * 
 * 입출력 예시
 * 
 *     n	   result
 *    1234	    10
 *    930211	16
 * 
 * 입출력 예시 설명
 * 
 * ex1) 1 + 2 + 3 + 4 = 10을 return합니다.
 * ex2) 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.
 * 
 */

/**
 * 문제 분석
 * 
 * 정수 n은 정수를 요소로 가지는 배열이다.
 * 
 * 이 배열의 요소를 합한 값을 구하라는 것이다.
 * 
 * n + n + n+ n = result
 */

function solution (n) {
    return n.reduce((acc,cur) => acc + cur);
}
// TypeError: n.reduce is not a function 이라는 오류가 뜬다.



function solution (n) {
    let answer = 0;
    for(let i = 0; i <= n.length; i++) {
        answer += n[i];
    }
    return answer;
}
// 배열의 요소를 합하면 0이된다.. error