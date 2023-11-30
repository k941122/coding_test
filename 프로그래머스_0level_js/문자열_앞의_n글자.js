/**
 * 문자열 앞의 n글자
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
 * my_string의 앞의 n글자로 이루어진 문자열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - my_string은 숫자와 알파벳으로 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - 1 ≤ n ≤ my_string의 길이
 * 
 * 입출력 예시 
 * 
 *  my_string	       n	  result
 * "ProgrammerS123"	   11	"ProgrammerS"
 * "He110W0r1d"  	   5	"He110"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 my_string에서 앞의 11글자는 "ProgrammerS"이므로 이 문자열을 return 합니다.
 * ex2) 예제 2번의 my_string에서 앞의 5글자는 "He110"이므로 이 문자열을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * my_string = 문자열 
 * 
 * n = 정수
 * 
 * 문자열 앞에 알파벳을 n 개 만큼 잘라서 출력 -> n+1 부터 my_string.lenght 까지 
 * 
 * 1. 문자열 메서드가 있을 까? ->  slice, substr (지정한 범위(index) 내에서 문자열 잘라서 출력)
 * 
 * 2. 혹은 배열 메서드가 있을 까? -> 
 * 
 * 3. for 반복문? 이용해서 풀기? -> 
 * 
 */

function solution (my_string,n) {
    return my_string.substr(0,n)
}

/**
 * 간단한 문자열 메서드를 이용해 원하는 범위 만큼 출력 할수 있었다.
 * 
 * slice 혹은 substr을 이용해서 ()일반 괄호 안에, 시작하는 범위, 끝나는 범위 를 지정하면
 * 지정한 index 범위 내 에서 문자열이 출력된다.
 */