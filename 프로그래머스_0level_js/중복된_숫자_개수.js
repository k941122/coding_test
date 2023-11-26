/**
 * 중복된 숫자 개수
 * 
 * 문제 설명
 * 
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
 * array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한  사항
 * 
 * - 1 ≤ array의 길이 ≤ 100
 * - 0 ≤ array의 원소 ≤ 1,000
 * - 0 ≤ n ≤ 1,000
 * 
 * 입출력 예시
 * 
 * array	               n	result
 * [1, 1, 2, 3, 4, 5]	   1	  2
 * [0, 2, 3, 4]	           1	  0
 * 
 * 입출력 예시 설명
 * 
 * ex1) [1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.
 * ex2) [0, 2, 3, 4] 에는 1이 0개 있습니다.
 * 
 */

/**
 * 정수 배열 array = [1,1,1,2,3,4,5,]
 * 정수 n = 1
 * 
 * 식)
 * array에 n이 몇개 있는지 return
 * 
 * reducce- 주어진 배열을 순회하면서 callback 함수 실행, 하나의 return값 반환!
 * 
 * filter - 배열에서 특정 조건을 충족하는 값들만 모아서 새로운 배열로 return
 * 
 */




function solution (array, n) {
    let answer = 0;
    answer = array.reduce((cnt,element) => cnt +(n === element),0);
    return answer;
}

/**
 * 주어진 배열을 순회하면서 callback 함수를 실행시켜 누산기(cnt)에 값을 누적시키는 reduce를
 * 사용했다.
 * 
 * reduce의 매개변수로 원하는 값을 얻으려 하는 화살표 함수와 cnt(누산기)의 초기값0을  설정했다.
 * 화살표 함수의 매개 변수로 cnt(누산기) 와 elelment (요소의 값)을 사용하고,
 * 화살표 함수로 cnt에 괄호안의 조건이 일치하면 1씩 누적시키게 식을 사용했다.
 * 
 * 최종적으로 화살표 함수안의 정수 n이 element(요소의 값)과 일치하면 cnt에 1씩 누적되고
 * array배열의 reduce 메서드 callback함수를 이용해 누적된 값이 반환 되는 것이다.
 * 
 * 
 */


