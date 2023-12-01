/**
 * n의 배수 고르기
 * 
 * 문제 설명
 * 
 * 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, 
 * numlist에서 n의 배수가 아닌 수들을 제거한 배열을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ n ≤ 10,000
 * - 1 ≤ numlist의 크기 ≤ 100
 * - 1 ≤ numlist의 원소 ≤ 100,000
 * 
 * 입출력 예시
 * 
 * n	          numlist	                   result
 * 3	[4, 5, 6, 7, 8, 9, 10, 11, 12]	     [6, 9, 12]
 * 5	[1, 9, 3, 10, 13, 5]	               [10, 5]
 * 12	[2, 100, 120, 600, 12, 12]	      [120, 600, 12, 12]
 * 
 * 입출력 예시 설명
 * 
 * ex1) numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.
 * ex2) numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * filter로 특정 조건에 일치하는 요소만 출력해서 새로운 배열로 만들기
 * 
 * callback 식에 v를n으로 나눈 나머지 값이 0과 일치하는 요소만 filter 시킨다.
 * 
 */

function solution (n,numlist) {
    return numlist.filter((v) => v%n===0);
}