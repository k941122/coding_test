/**
 * 평균 구하기
 * 
 * 문제 설명
 * 
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 * 
 * - arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
 * 
 * 입출력 예시
 * 
 *   arr	       return
 * [1,2,3,4]	    2.5
 * [5,5]	        5
 * 
 */

/**
 * 문제 해석
 * 
 * arr 정수 배열
 * 
 * 배열의 요소값의 평균을 구하여라 
 * 
 * 각 배열의 요소값 의 합(reduce) / 배열의 길이 .length 함수
 * 
 */

function solution(arr) {
    const answer = arr.reduce((acc,cur) => acc+cur,0) / arr.length;
    return answer;
}