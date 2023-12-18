/**
 * 등차수열의 특정한 항만 더하기
 * 
 * 문제 설명
 * 
 * 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 
 * 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 
 * 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 
 * return 하는 solution 함수를 작성해 주세요.
 * '
 * 제한 사항
 * 
 * - 1 ≤ a ≤ 100
 * - 1 ≤ d ≤ 100
 * - 1 ≤ included의 길이 ≤ 100
 * - included에는 true가 적어도 하나 존재합니다.
 * 
 * 입출력 예시 
 * 
 * a	d	included	                                      result
 * 3	4	[true, false, false, true, true]	                37
 * 7	1	[false, false, false, true, false, false, false]	10
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번은 a와 d가 각각 3, 4이고 included의 길이가 5입니다. 이를 표로 나타내면 다음과 같습니다.
 * 
 *             1항	2항	3항	4항	5항
 * 등차수열	    3	7	11	15	19
 * included	   true	false	false	true	true
 * 따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.
 * 
 * ex2) 예제 2번은 a와 d가 각각 7, 1이고 included의 길이가 7입니다. 이를 표로 나타내면 다음과 같습니다.
 * 
 *
 *         1항	2항	3항	4항	5항	6항	7항
 * 등차수열	7	8	9	10	11	12	13
 * included	false	false	false	true	false	false	false
 * 따라서 4항만 true이므로 10을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * a,d는 정수
 * 
 * included -> 길이가 n인 blooean 배열
 * 
 * 등차수열 = 연속하는 두 항의 차이가 일정한 수열
 * 
 * 첫항 = a
 * 
 * 일정한 차이 공차 = d
 * 
 * 첫항이 a고 공차가 d인 included의 길이와 같은 n번째로 끝나는 등차수열 만들기 -> 배열
 * 
 * included의 요소와 비교해서 true와 일치하는 값들만 더하기.
 * 
 * 1. 등차수열 배열 만들기 
 * 
 * 2. 등차수열 배열을 included 와 비교해서 true 만 남기기 (filter?)
 * 
 * 3. 남은 요소를 reduce로 더하기
 * 
 */


function solution (a,d,included) {
    let diffArray = [];
    let answer = 0;
    for (let i =1;i<=included.length; i++) {
        diffArray.push(a+(i-1)*d);
    }
    included.map((v,i) => v ? answer+= diffArray[i]:null);
    return answer;
}

/**
 * 등차수열을 담은 배열을 만들려면 
 * for 반복문 기본값에 1을 담고, included의 길이 만큼 반복 해야한다. 
 * 그리고 diffArray 변수에 loop를 돌때마다 등차수열의 공식을 push 해 줘야 한다.
 *
 * 등차수열의 공식은 i(현제 위치)에서 -1을 뺀값을 *d(공차)를 곱해주고 a(첫째항)을 더해준다.
 * 
 * for문 배열이 순환하면서 included의 길이만큼 등차수열 배열이 만들어 지고
 * 
 * included blooean 배열을 map 메서드를 이용해서 included의 요소의 값이 true 일때
 * answer에 등차수열의 요소 값을 누적시키고, 아니면 null값으로 변환 하라고 했다.
 */