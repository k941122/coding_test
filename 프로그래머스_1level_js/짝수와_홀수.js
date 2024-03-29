/**
 * 짝수와 홀수
 * 
 * 문제 설명
 * 
 * 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, 
 * solution을 완성해주세요.
 * 
 * 제한 조건
 * 
 * - num은 int 범위의 정수입니다.
 * - 0은 짝수입니다.
 * 
 * 입출력 예시
 * 
 * num	return
 *  3	"Odd"
 *  4	"Even"
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * num - 정수
 * 
 * 짝수 even
 * 
 * 홀수 - odd
 * 
 * if else
 * 
 */

function solution(num) {
    if (num%2===0) {
        return "Even";
    } else {
        return "Odd";
    }
}