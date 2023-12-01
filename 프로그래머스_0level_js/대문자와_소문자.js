/**
 * 대문자와 소문자
 * 
 * 문제 설명
 * 
 * 문자열 my_string이 매개변수로 주어질 때, 
 * 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - my_string은 영어 대문자와 소문자로만 구성되어 있습니다.
 * 
 * 입출력 예시
 * 
 *  my_string	    result
 * "cccCCC"	       "CCCccc"
 * "abCdEfghIJ"	  "ABcDeFGHij"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.
 * ex2) 소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.
 */

/**
 * 문제 해석
 * 
 * my_string = 문자열 
 * 
 * 대문자 요소는 -> 소문자
 * 소문자 요소는 -> 대문자
 * 
 * 1. 문자열에서 대문자 소문자를 구별하는 메서드가 있는가? (조건식으로 쓰면된다.)
 * v === v.UpperCase()? v.LowerCase() : v.UpperCase()
 * 
 * 
 * 2. 만약 없다면 map을 이용해야 하는데, callback 함수 식 에서 삼항 연산자를 써야한다.
 * 
 */

function solution (my_string) {
    return [...my_string].map((v) => (v === v.toUpperCase()? v.toLowerCase() : v.toUpperCase() )).join("");
}

/**
 * mystring 을 ... spread 문법을 통해 요소를 나줘주고 [] 대괄호를 통해 배열로 만들었다.
 * map 메서드를 이용하여 삼항연산자를 이용해, 조건에는 값이 대문자로 만든 값과 일치 한다면(대문자 라면)
 * toLowerCase를 통해 소문자로 만들고 그게 아니라면 toUpperCase 를 이용해 대문자로 만들라는 코드를 작성했다.
 * 
 */