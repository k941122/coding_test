/**
 * 문자열 뒤집기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, 
 * my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을
 *  return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - my_string은 숫자와 알파벳으로만 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - 0 ≤ s ≤ e < my_string의 길이
 * 
 * 입출력 에시 
 * 
 *    my_string	        s	e	result
 * "Progra21Sremm3"	    6	12	"ProgrammerS123"
 * "Stanley1yelnatS"	4	10  "Stanley1yelnatS"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 my_string에서 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은 
 *      "ProgrammerS123"이므로 "ProgrammerS123"를 return 합니다.
 * 
 * ex2) 예제 2번의 my_string에서 인덱스 4부터 인덱스 10까지를 뒤집으면 
 *      원래 문자열과 같은 "Stanley1yelnatS"이므로 "Stanley1yelnatS"를 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * my_string = 문자열
 * 
 * s,e = 정수
 * 
 * s시작 , e 끝 을 지정해서 뒤집어라 -> 해당 메서드?
 * 
 * 
 * 
 */

function solution (my_string) {
    let subs = my_string.substring(s,e+1);
    let reverse = my_string
        .substring(s,e+1)
        .split("")
        .reverse()
        .join("");
    return my_string.replace(subs,reverse);
}

/**
 * subs변수에 substirng을 이용해 원하는 범위 만큼 부분 문자열을 만든다. 
 * substring 메서드의 매개변수로 s와 e를 가져오는데, end 부분에 e에 +1을 해주는 이유는
 * substring은 end index 하나 전까지 만을 가져오기 때문이다. 
 * 
 * reverse 변수에 substring(s,e+1) 부분변소를 split 메서드를 이용해 배열화 시켜주고
 *  그 배열을 reverse 메서드를 통해 뒤집어 준다. 그리고 join을 통해 배열을 문자열로 바꿔준다.
 * 
 * return 부분에서 my_string 문자열에 replace 메서드를 이용해 
 * 해당 메서드의 매개 변수로 subs와 reverse를 차례대로 넣어준다.
 * 
 * subs(mystring의 해당 범위 만큼의 부분문자열)을 reverse(부분 문자열을 reverse 한것)으로 
 * 대체 하라는 것이다.
 */