/**
 * 모음 제거
 * 
 * 문제 설명
 * 
 * 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
 * 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - my_string은 소문자와 공백으로 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * 
 * 입출력 예시
 * 
 *     my_string	     result
 *       "bus"	           "bs"
 *   "nice to meet you"	 "nc t mt y"
 * 
 * 입출력 예시 설명
 * 
 * ex1) "bus"에서 모음 u를 제거한 "bs"를 return합니다.
 * ex2) "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 
 *      "nc t mt y"를 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 문자열 my_string
 * a,e,i,o,u = 배열
 * 
 * 주어진 문자열을 쪼개서 배열로 만들고 거기서 알파벳 모음 배열과 일치하는 부분을 제거
 * 
 * filter?  
 */

function solution(my_string) {
    return [...my_string].filter((v) => !["a", "e", "i", "o", "u"].includes(v)).join("");
  }

  /**
   * 문자열 my_string을 배열로 만들려면 [] 빈 배열 안에 my_string앞에 ...을 넣어서 
   * spread 형식의 배열을 만들어 준다.
   * 
   * 그 배열을 filter로 일정 조건에 맞는 값만 필터링 해야 하는데, 
   * callback함수의 매개 변수로 v(value=값)을 넣어주고, (여기서 value는 [...my_string]의 값이다.) 
   * 조건으로 ["a", "e", "i", "o", "u"](알파벳 모음 문자열 배열)을 includes()메서드를
   * 통해 알파벳 모음 문자열 배열을 포함 하는 v(value)를 필터링 한다 라는 조건을 정의한다.
   * 
   * 그런데 "알파벳 모음 문자열 배열"앞에 ! 라는 부정 연산자를 넣어서,
   *  "알파벳 모음 문자열 배열"에 속하지 않은 [...my_string]배열을 필터링 한다.
   * 
   * 마지막 으로 필터링된 각각의 배열의 요소들을 하나로 합쳐주는 join('')메서드를 통해
   * 하나의 문자열로 다시 합쳐준다.
   * 
   */
