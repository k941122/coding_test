/**
 * 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
 * 
 * 문제 설명
 * 
 * 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 
 * pat로 끝나는 가장 긴 부분 문자열을 찾아서 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 5 ≤ myString ≤ 20
 * - 1 ≤ pat ≤ 5
     pat은 반드시 myString의 부분 문자열로 주어집니다.
 * - myString과 pat에 등장하는 알파벳은 대문자와 소문자를 구분합니다.
 * 
 * 입출력 예시
 * 
 *  myString	pat	   result
 * "AbCdEFG"	"dE"	"AbCdE"
 * "AAAAaaaa"	"a"	    "AAAAaaaa"
 * 
 * 입출력 에시 설명
 * 
 * ex1) "AbCdEFG"에서 "dE"는 한 번 등장하며 처음부터 해당 위치까지 잘라내면 
 *      "AbCdE"가 됩니다. 따라서 이 문자열이 "dE"로 끝나는 가장 긴 문자열이며, 
 *      "AbCdE"를 return 합니다.
 * 
 * ex2) "AAAAaaaa"에서 "a"는 총 네 번 등장하며 이 중 가장 마지막에 있는 위치까지 
 *      잘라내면 "AAAAaaaa"가 됩니다. 따라서 이 문자열이 
 *      "a"로 끝나는 가장 긴 문자열이며, "AAAAaaaa"를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * my_string = 문자열
 * 
 * pat 부분 문자열
 * 
 * 가장 긴 끝나는 부분을 return 
 * 
 * 
 * 
 */

function solution (myString, pat) {
    return myString.split("")
           .map((_,i)=> myString.slice(0,i+1))
           .filter((v)=> v.endsWith(pat))
           .reduce((acc,cur)=> cur, "");
}

/**
 * mystring을 split 메서드를 이용해 배열로 만들고,
 * 
 * 해당 배열의 요소의 인덱스를 사용해서 문자열을 추출한다.
 * callback식에 myString문자열에 slice 메서더를 사용하는데,
 * slice 메서드의 매개변수로 0과 i+1을 넣어준다.
 * 0은 해당 문자열의 처음 index 이고, i는 현재 인덱스를 의미한다. +1은 slice 메서드는
 * end index를 넣으면 그 직전 index 까지만 출력 하기 때문에 붙인것이다.
 * 
 * map 으로 배열의 요소 마다 부분 문자열을 넣었다면, 
 * filter를 이용해서 조건을 만족하는 (pat 부분 문자열과 일치하는) 요소들만 출력시킨다.
 * endsWith 메서드를 통해 filter 매개변수로 들어온 value가 pat(부분문자열)로 끝나는지를
 * 비교 하여 필터링 한다.
 * 
 * 마지막 으로 reduce 메서드를 이용해 맨 마지막에 위치한 pat로 끝나는 요소를 출력한다.
 * 위 reduce 함수는 배열의 모든 요소를 돌아서 현재의 값을 출력하게 되있다. 
 * 계속해서 요소들을 돌며 cur에 그때의 요소들이 스쳐갈뿐 누적되지 않는것이다.
 * 
 * 그러므로 맨 마지막 에 위치한 pat로 끝나는 요소가 출력 되는 것이다. 
 * 해당 요소를 출력하기 위해서는 acc의 초기값을 "" 따옴표로 넣어주면 된다.
 */