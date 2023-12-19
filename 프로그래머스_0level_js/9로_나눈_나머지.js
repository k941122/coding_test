/**
 * 9로 나눈 나머지
 * 
 * 문제 설명
 * 
 * 
 * 
 * 제한 사항
 * 
 * - 
 * - 
 * - 
 * 
 * 입출력 예시
 * 
 * 
 * 
 * 입출력 예시 설명
 * 
 * ex1) 
 * 
 * ex2) 
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * 음이 아닌 정수를 나타내느 문자열 numbers
 * 
 * 입력된 정수를 9로 나눈 나머지
 * 
 * numbers의 각자리숫자 더하기 -> 배열 만들기
 * 해당 배열 요소, 숫자로 바꾸기 -> map Number
 * 해당 숫자형 요소들 더하기 => reduce 
 * 
 */

function solution (number) {
    let sum =  [...number].map(v=>Number(v)).reduce((acc,cur) => acc + cur, 0);
    return sum%9;
}

/**
 * number 은 숫자를 표시하는 문자열 이기 때문에 spread 문법을 이용해 배열로 만들고
 * map을 이용해 요소를 순회 하면서 값을 Number메서드를 이용해 string 에서 number로
 * 바꿔준다. 그리고 해당 요소들을 reduce를 이용해 더해준 값을 9로 나눠준 나머지 값이
 * 답이다.
 *  
 */