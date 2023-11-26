/**
 * 배열 자르기
 * 
 * 문제 설명
 * 
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, 
 * numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * - 2 ≤ numbers의 길이 ≤ 30
 * - 0 ≤ numbers의 원소 ≤ 1,000
 * - 0 ≤num1 < num2 < numbers의 길이
 * 
 * 입출력 예시
 * 
 * numbers	                num1	num2	result
 * [1, 2, 3, 4, 5]	          1	     3	  [2, 3, 4]
 * [1, 3, 5]	              1	     2	  [3, 5]
 * 
 * 입출력 예시 설명
 * 
 * ex1) [1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 
 *      [2, 3, 4]를 return 합니다.
 * 
 * ex2) [1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 정수배열 numbers
 * 
 * 스타트 넘버 num1
 * 엔드 넘버 num2
 * 
 * 사용할 메서드 = numbers.slice(시작,끝);
 * 
 */

//▼ 실패코드
function solution (numbers,num1,num2) {
    let answer = [];
    answer = numbers.slice(num1,num2);
    return answer;
}

//▼ 성공 코드

function solution (numbers,num1,num2) {
    let answer = [];
    answer = numbers.slice(num1,num2+1);
    return answer;
}

/**
 * 위 문제는 숫자형 배열에서 어떤 정수와 다른 정수 사이의 값만 추출하고 싶다는 것이다.
 * slice 매서드를 이용해서 풀었는데 처음에는 오답이 나왔다. 
 * 결과값을 살펴보니 end부분을 포함한 요소 까지 삭제되 있었고,
 * end에 +1을 추가하자 정상적으로 결과가 나왔다.
 */
