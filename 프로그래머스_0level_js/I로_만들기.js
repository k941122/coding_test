/**
 * l로 만들기
 * 
 * 문제 설명
 * 
 * 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 
 * 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ myString ≤ 100,000
 *   myString은 알파벳 소문자로 이루어진 문자열입니다.
 * 
 * 입출력 예시
 * 
 * myString	result
 * "abcdevwxyz"	"lllllvwxyz"
 * "jjnnllkkmm"	"llnnllllmm"
 * 
 * 입출력 에시 설명
 * 
 * ex1) 0 ~ 4번 인덱스의 문자 "a","b","c","d","e"는 각각 "l"보다 앞서는 문자입니다. 따라서 "l"로 고쳐줍니다.
 *      그 외의 문자는 모두 "l"보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.
 *      따라서 "lllllvwxyz"을 return 합니다.
 * 
 * ex2) 0번, 1번, 6번, 7번 인덱스의 문자 "j","j","k","k"는 각각 "l"보다 앞서는 문자입니다. 따라서 "l"로 고쳐줍니다.
 *      그 외의 문자는 모두 "l"보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.
 *      따라서 "llnnllllmm"을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * myString = 문자열
 * 
 * 문자열을 일정 기준하에서 바구는 메서드?
 * 
 * 배열화 시켜서 map 혹은 filter reduce 등을 이용하는 메서드? 
 * 
 * l 보다 앞서는 모든 요소를 l로 바꿀것! -> l보다 작으면? true false 삼항 연산자.
 * 
 * map?
 * 
 */

function solution (myString) {
    return [...myString].map((v)=> v <"l"?"l":v ).join("");
}