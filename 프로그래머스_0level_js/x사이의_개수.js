/**
 * x사이의 개수
 * 
 * 문제 설명
 * 
 * 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 
 * 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 
 * return 하는 solution 함수를 완성해 주세요.


 * 
 * 제한 사항
 * - 1 ≤ myString의 길이 ≤ 100,000
 *   myString은 알파벳 소문자로 이루어진 문자열입니다.
 * 
 * 입출력 예시 
 * 
 * myString	result
 * "oxooxoxxox"	[1, 2, 1, 0, 1, 0]
 * "xabcxdefxghi"	[0, 3, 3, 3]
 * 
 * 입출력 예시 설명
 * 
 * ex1) "x"를 기준으로 문자열을 나누면 ["o", "oo", "o", "", "o", ""]가 됩니다. 
 *      각각의 길이로 배열을 만들면 [1, 2, 1, 0, 1, 0]입니다. 
 *      따라서 [1, 2, 1, 0, 1, 0]을 return 합니다.
 * ex2) "x"를 기준으로 문자열을 나누면 ["", "abc", "def", "ghi"]가 됩니다. 
 *      각각의 길이로 배열을 만들면 [0, 3, 3, 3]입니다. 
 *      따라서 [0, 3, 3, 3]을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 배열화? 를 해야할것 같다.
 * 
 * 
 */

function solution (myString) {
    return myString.split("x").map(v=>v.length);
}

/**
 * split은 문자열을 분해하여 배열을 반환하는 메서드 이다.
 * myStirng 문자열에 split 메서드를 적용하는데, x를 기준으로 나눠달라고 작성한다.
 * 
 * 그리고 x를 기준으로 나뉘어진 배열의 요소들의 길이로 배열을 만들기 위해서,
 * map 메서드를 이용해서 각 요소의 길이를 반환 한다.
 * 
 * split 메서드를 다시한번 개념 공부하고 응용해 봐야 할것 같다!
 */