/**
 * n의 배수
 * 
 * 문제 설명
 * 
 * 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 
 * return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 2 ≤ num ≤ 100
 * - 2 ≤ n ≤ 9
 * 
 * 입출력 예시 
 * 
 * num	n	result
 * 98	2	1
 * 34	3	0
 * 
 * 입출력 예시 설명
 * 
 * ex1) 98은 2의 배수이므로 1을 return합니다.
 * ex2) 32는 3의 배수가 아니므로 0을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * num이 n의 배수이지 아닌지를 알려면 num 나누기 n의 나머지가 0이면 배수이고 아니면 배수가 아니다.
 * 
 * if문을 사용한 true false 형식의 문제인데,
 * 좀더 간단한 삼항 연산자로 풀면 된다.
 * 
 */


function solution (num,n) {
    return (num%n === 0)? 1:0
}