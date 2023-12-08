/**
 * 인덱스 바꾸기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
 * my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 1 < my_string의 길이 < 100
 * - 0 ≤ num1, num2 < my_string의 길이
 * - my_string은 소문자로 이루어져 있습니다.
 * - num1 ≠ num2
 * 
 * 입출력 예시
 * 
 *   my_string	    num1	num2	result
 *   "hello"	     1	     2	    "hlelo"
 *  "I love you"	 3	     6	  "I l veoyou"
 * 
 * 입출력 예시 설명
 * 
 * ex1) "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.
 * ex2) "I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 문자열 my_string 
 * 
 * 정수 num1,num2
 * 
 * 문자열에서 num1과num2 순서를 서로 바꾼 문자열 출력
 * 
 * 문자열의 배열화 
 * 
 */

function solution (my_string, num1, num2) {
    return [...my_string].switchValues(num1,num2).join;
}

/**
 * switchValue는 java에서 쓰는 교환하는 메서드 이다.
 */

function solution (my_string, num1, num2) {
    let arr = [...my_string];
    [arr[num1] , arr[num2]] = [arr[num2] , arr[num1]];
    return arr.join("")
}

/**
 * 자바 스크립트 배열 바꾸기는 
 * 바꾸고 싶은 배열의 인덱스를 대괄호 내부에 적어서 바꾼다.
 */