/**
 * 배열 만들기 5
 * 
 * 문제 설명
 * 
 * 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. 
 * intStrs의 원소는 숫자로 이루어져 있습니다.
 * 
 * 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 
 * 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 
 * 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 0 ≤ s < 100
 * - 1 ≤ l ≤ 8
 * - 10l - 1 ≤ k < 10l
 * - 1 ≤ intStrs의 길이 ≤ 10,000
 *   s + l ≤ intStrs의 원소의 길이 ≤ 120
 * 
 * 입출력 에시 
 * 
 *                       intStrs	              k	    s	l	    result
 * ["0123456789","9876543210","9999999999999"]	50000	5	5	[56789, 99999]
 * 
 * 입출력 에시 설명
 * 
 * ex1) idx에 따라 잘라낸 문자열과 그에 따른 ret의 변화를 표시하면 다음 표와 같습니다.
 * 
 *      idx	   잘라낸 문자열	    ret
 *       0	      "56789"	     [56789]
 *       1	      "43210"	     [56789]
 *       2	      "99999"	     [56789, 99999]
 * 
 * 따라서 [56789, 99999]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * inStr = 문자열 배열
 * 
 * k,s,l 정수
 * 
 * inStrs 숫자를 표기한 문자형 배열 -> 각 원소 마다 s번 start index 길이 l -> 정수 변환
 * 
 * 각 요소의 값 > k, 담은 배열
 * 
 * 
 * map 순회 해야 하기 때문에. 
 * callback splice? 
 * 
 * 해당 요소들의 값이 k보다 큰것만 return  
 * 
 * 
 */


// ▼ 오답 코드
function solution (inSftrs,k,s,l) {
    return inSftrs.map((v) => v.slice(s,{length:l+1})>k?Number(v):"");
}

/**
 * 테스트 1
 * 입력값 〉	["0123456789", "9876543210", "9999999999999"], 50000, 5, 5
 * 기댓값 〉	[56789, 99999]
 * 실행 결과 〉	실행한 결괏값 ["","",""]이 기댓값 [56789,99999]과 다릅니다.
 * 
 * 
 * 
 */

// ▼ 오답 코드

function solution (inSftrs,k,s,l) {
    return inSftrs.filter((v) => Number(v.slice(s,s+l))>k);
}

/**
 * slice 메서드의 end 인덱스 부분의 식이 잘못 되었다.
 * end 인덱스 부분에 l을 넣는게 아니라 시작 부분인 s와 길이 l을 더해 주어야 한다.
 * 
 * s번째 index에서 end index는 요소의 총 길이인 l 을 s와 더해야 되기 때문이다.
 * 
 * 하지만 이번에도 오답이 나왔다.
 */




// ▼ 정답 코드

function solution (inSftrs,k,s,l) {
    return inSftrs.map(v => Number(v.substring(s,s+l))).filter(v => v > k);
}

/**
 * filter는 해당 메서드의 callback에 지정된 조건에 맞는 요소만 걸러주는 메서드다.
 * 그러므로 먼저 map을 이용해 callback 식에 각 요소를 substring을 통해 원하는 범위의
 * index를 잘라주어야 한다. 
 * 
 * 내가 오답 02 부분에서 실수한 것은 slice는 배열의 요소를 추출하는 것이지. 
 * "문자형"의 부분 문자형을 추출하는 것이 아니다 라는 것이다.
 * 
 * 해당 요소는 문자형이므로 substring을 사용 해야 한다.
 * 
 * 그리고 filter를 이용해 각 요소가 k 보다 큰것만을 추출해 출력하면 답이 된다.
 */

