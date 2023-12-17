/**
 * 7의 개수
 * 
 * 문제 설명
 * 
 * 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 
 * 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ array의 길이 ≤ 100
 * - 0 ≤ array의 원소 ≤ 100,000
 * 
 * 입출력 에시
 * 
 *   array	    result
 * [7, 77, 17]	  4
 * [10, 29]	      0
 * 
 * 입출력 예시 설명
 * 
 * ex1) [7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.
 * ex2) [10, 29]에는 7이 없으므로 0을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * array 배열의 숫자형 들을 일일히 분해한다음에 문자형 전환후 substring "7"
 * 
 * filter -> v === 7 .length 
 * 
 */

// ▼ 오답 코드
function solution ( array) {
    return array.map(String).filter(v=> v.includes("7")).length
}

/**
 * 테스트 1
 * 입력값 〉	[7, 77, 17]
 * 기댓값 〉	4
 * 실행 결과 〉	실행한 결괏값 ["7","77","17"]이 기댓값 4과 다릅니다.
 * 
 * map을 이용해 string 으로 모든 요소를 문자열로 바꾸고 해당 요소들을
 * includes를 통해 7을 포함하는 갯수를 세려고 했으나 오답이 나왔다.
 * 
 * 7의 개수를 세는게 아닌 7이 포함된 요소들을 출력하는게 includes 메서드의 기능이었기 때문이다.
 */



function solution (array) {
    return array.join("").split("").filter(v => v === "7").length
}

/**
 * array를 join메서드를 이용해서 문자형으로 만든다음,
 * split 메서드를 이용해 다시 나눠줬다. 그러면 각 숫자들은 한자리 숫자로 쪼개져 
 * 문자형 숫자가 된다. 이 요소들을 filter 메서드를 이용해 
 * 요소가 7과 같은 것만 출력 하라고 하면, 7이 담긴 배열이 만들어 지고
 * 이 배열을 length를 이용해 개수를 새면 7의 개수가 나온다.
 */