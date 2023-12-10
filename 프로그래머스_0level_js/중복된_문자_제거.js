/**
 * 중복된 문자 제거
 * 
 * 문제 설명
 * 
 * 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 
 * 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ my_string ≤ 110
 * - my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
 * - my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
 * - 공백(" ")도 하나의 문자로 구분합니다.
 * - 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
 * 
 * 입출력 예시
 * 
 *   my_string	           result
 *    "people"	            "peol"
 *   "We are the world"	    "We arthwold"
 * 
 * 입출력 에시 설명
 * 
 * ex1) "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
 * ex2) "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * my_string = 문자열 
 * 
 * 중복된 알파벳을 제거 하시오 (중복된 문자열 제거)
 * 
 * 중복된 문자열 제거 메서드 -> includes
 */

function solution (my_string) {
    return [...my_string].filter((v,i)=>[...my_string].indexOf(v)===i).join("");
}

/**
 * spread 문법으로 문자열을 배열로 만든후, filter를 적용해서 원하는 조건의 요소만 출력한다.
 * 
 * filter의 callback 함수식은 메서드 indexOf를 이용해서 중복되는 값을 제거한다.
 * 
 * indexOf는 매개변수로 들어오는 요소 값의 첫번째 index를 나타내고, 이 index가 일치한다면
 * true 값으로 filter 되고 아니면 제거된다. 
 */