/**
 * 특정 문자 제거하기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
 * my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 1 ≤ my_string의 길이 ≤ 100
 * - letter은 길이가 1인 영문자입니다.
 * - my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
 * - 대문자와 소문자를 구분합니다.
 * 
 * 입출력 예시
 * 
 * my_string	letter	 result
 * "abcdef"	     "f"	"abcde"
 * "BCBdbe"	     "B"	"Cdbe"
 * 
 * 입출력 예시 설명
 * 
 * ex1) "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.
 * ex2) "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.
 */

/**
 * 문제 해석
 * 
 * 문자열 my_string
 * 문자 letter 
 * 
 * 문자열 - 문자 
 * 
 * 문자열 bear -> 문자열 배열로 만들기 ["b","e","a","r"] -> 
 * 문자열 배열 중에서 해당 letter과 일치하는 배열 제외 하기 filter ->
 * 남은 배열 문자열로 묶기 .join("")
 * 
 * 
 */

function solution (my_string,letter) {
    return [...my_string].filter((ele) =>  ele !== letter ? ele:"").join("");
}

/**
 * my_string을 spread 문법을 이용해 문자형 요소를 가진 배열로 만들었고,
 * 
 * filter를 이용해 ele(배열 요소의 값)이 letter(알파벳 문자형)과 일치하지 않은것만
 * true 로 배열에 넣고 아닌것은 공백으로 처리해 달라고 했다.
 */