/**
 * 수 조작하기 2
 * 
 * 문제 설명
 * 
 * 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 
 * "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 
 * 다음과 같은 조작을 했다고 합시다.
 * 
 * "w" : 수에 1을 더한다.
 * "s" : 수에 1을 뺀다.
 * "d" : 수에 10을 더한다.
 * "a" : 수에 10을 뺀다.
 * 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 
 * 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.
 * 
 * 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 2 ≤ numLog의 길이 ≤ 100,000
 *   -100,000 ≤ numLog[0] ≤ 100,000
 *   1 ≤ i ≤ numLog의 길이인 모든 i에 대해 |numLog[i] - numLog[i - 1]|의 
 *   값은 1 또는 10입니다.
 * 
 * 입출력 예시 
 * 
 *               numLog	                            result
 * [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]	"wsdawsdassw"
 * 
 * 입출력 에시 설명
 * 
 * ex1) result인 "wsdawsdassw"를 따라 numLog[0]에서부터 시작해 조작을 하면 
 *      numLog의 값과 순서대로 일치합니다. 따라서 "wsdawsdassw"를 return 합니다.
 * 
 * hint
 * 
 * "수 조작하기 1" 문제의 n값이 numLog[0]에 해당하며, 
 * 이 문제에서 주어진 numLog에 따라 "수 조작하기 1" 문제의 control을 구하는 
 * 문제라고 이해할 수 있습니다.
 * 
 * 입출력 예 #1은 "수 조작하기 1" 문제의 입출력 
 * 예 #1과 같은 예시이므로 참고하시기 바랍니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 수 조작하기 1과 유사한 문제
 * 
 * numLog[0] +1 = w
 * 
 */

function solution (numLog) {
    return numLog.reduce((acc,cur) => {
        switch(cur) {
            case "w" :
                return acc +1;
            case "s" :
                return acc -1;
            case "d" :
                return acc +10;
            case "a" :
                return acc -10;
            default :
                return acc;    
        }

    }, numLog[0])
}

/**
 * 
 * 테스트 1 
 * 입력값 〉	[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]
 * 기댓값 〉	"wsdawsdassw"
 * 실행 결과 〉	실행한 결괏값 0이 기댓값 "wsdawsdassw"과 다릅니다.
 * 
 * 수 조작하기 1과 유사하게 풀었는데, 오답이 나왔다. switch 문으로 푸는것 왜에
 * 다른 방법이 있을까?
 * 
 */

// ▼ 정답 코드 

function solution (numLog) {
    const convert = {'1':'w','-1':'s','10':'d','-10':'a'}
    return numLog.slice(1).map((v,i) => {
        return convert[v - numLog[i]]
    }).join('');
}

/**
 * 객체를 리터럴 방식으로 생성했다. 각 숫자를 문자로 대입 시킨 개념이다.
 * 
 * numLog 배열의 초기값을 slice 메서드로 첫번째 부분을 제외하고 새 배열로 만든다.
 * 첫번재 요소는 초기값 이기 때문에 변화를 나타내지 않기 때문이다.
 * 
 * map 메서드를 이용해 slice(1)을 이용해 첫번째 요소를 제외한 새 배열의 값과 
 * 원래 배열(numLog)의 값을 빼서 비교한다. 왜냐하면 새 배열의 원소 - 원래 배열의 원소를
 * 구해야 객체 convert에 해당하는 값에 대치시킬수 있기 때문이다.
 * 
 * 마지막으로 구해진 문자형 요소를 가진 배열을 join을 통해 묶어준다. 
 */