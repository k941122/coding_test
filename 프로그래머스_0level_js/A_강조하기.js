/**
 * A 강조하기
 * 
 * 문제 설명
 * 
 * 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 
 * "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 
 * return 하는 solution 함수를 완성하세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ myString의 길이 ≤ 20
 *   myString은 알파벳으로 이루어진 문자열입니다.
 * 
 * 입출력 예시
 * 
 *      myString	           result
 * "abstract algebra"	"AbstrAct AlgebrA"
 * "PrOgRaMmErS"	        "progrAmmers"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 0번, 5번, 9번, 15번 인덱스의 "a"는 소문자이므로 전부 대문자로 고쳐줍니다.
 *      다른 문자들은 전부 "a"가 아닌 소문자이므로 바꾸지 않습니다.
 *      따라서 "AbstrAct AlgebrA"를 return 합니다.
 * 
 * ex2) 0번, 2번, 4번, 6번, 8번, 10번 인덱스의 문자들은 "A"가 아닌 
 *      대문자이므로 전부 소문자로 고쳐줍니다.
 *      5번 인덱스의 "a"는 소문자이므로 대문자로 고쳐줍니다.
 *      다른 문자들은 전부 "a"가 아닌 소문자이므로 바꾸지 않습니다.
 *      따라서 "progrAmmers"를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * myString = 문자열
 * 
 * 소문자 a => 대문자 A
 * 
 * 그외에 대문자 알파벳 => 소문자 알파벳 
 * 
 * map? -> callback -> 삼항연산자. toUpperCase toLowerCase
 * 
 */

function solution (myString) {
    return [...myString].map((v)=> v === "a"?v.toUpperCase():v === "A"?v:v.toLowerCase()).join("");
}

/**
 * myString 문자형을 spread 문법을 통해 배열로 바꾸고, map 메서드에 삼항 연산자를 이용한다.
 * 
 * 삼항 연산자의 조건으로 v 가 "a"면 v에 toUpperCase 메서드를 이용해 대문자로 바꾸고,
 * v가 "A"면 그대로 v 값을 내보내고, 아니라면 toLowerCase를 이용해 소문자로 바꾼다.
 */