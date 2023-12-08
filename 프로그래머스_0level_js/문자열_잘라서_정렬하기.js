/**
 * 문자열 잘라서 정렬하기
 * 
 * 문제 설명
 * 
 * 문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 
 * 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 * 단, 빈 문자열은 반환할 배열에 넣지 않습니다.
 * 
 * 제한 사항
 * 
 * - 1 ≤ myString ≤ 100,000
 *   myString은 알파벳 소문자로 이루어진 문자열입니다.
 * 
 * 입출력 예시
 * 
 *  myString	            result
 * "axbxcxdx"	        ["a","b","c","d"]
 * "dxccxbbbxaaaa"	["aaaa","bbb","cc","d"]
 * 
 * 입출력 예시 설명
 * 
 * ex1) myString을 "x"를 기준으로 자른 배열은 ["a","b","c","d"]이며, 
 *      이 배열은 이미 사전순으로 정렬된 상태입니다. 따라서 해당 배열을 return 합니다.
 * 
 * ex2) myString을 "x"를 기준으로 자른 배열은 ["d","cc","bbb","aaaa"]이며, 
 *      이 배열을 사전순으로 정렬하면 ["aaaa","bbb","cc","d"]입니다. 따라서 
 *      해당 배열을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * myString =  문자열
 * 
 * x기준으로 문자열 잘라내기 -> 배열 로 만들기 -> splice ? split
 * 
 * 사전순으로 배열 정렬하기
 * 
 */

function solution (myString) {
    return myString.split('x').sort();
}

/**
 * 테스트 1
 * 입력값 〉	"axbxcxdx"
 * 기댓값 〉	["a", "b", "c", "d"]
 * 실행 결과 〉	실행한 결괏값 ["","a","b","c","d"]이 
 *             기댓값 ["a","b","c","d"]과 다릅니다.
 * 
 * 자꾸 실행한 결괏값에 요소가 "" 공백이 추가 된다.
 */

function solution (myString) {
    return myString.split('x').filter((v)=> v !=="").sort();
}

/**
 * filter 메서드의 callback 식으로 요소의 값이 "" 빈 문자열이 아닌것만 필터링 하게 했다.
 */
