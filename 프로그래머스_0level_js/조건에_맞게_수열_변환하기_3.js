/**
 * 조건에 맞게 수열 변환하기 3
 * 
 * 문제 설명
 * 
 * 정수 배열 arr와 자연수 k가 주어집니다.
 * 
 * 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, 
 * k가 짝수라면 arr의 모든 원소에 k를 더합니다.
 * 
 * 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * - 1 ≤ arr의 길이 ≤ 1,000,000
 *   1 ≤ arr의 원소의 값 ≤ 100 
 * - 1 ≤ k ≤ 100
 * 
 * 입출력 예시
 * 
 *           arr	        k	        result
 * [1, 2, 3, 100, 99, 98]	3	[3, 6, 9, 300, 297, 294]
 * [1, 2, 3, 100, 99, 98]	2	[3, 4, 5, 102, 101, 100]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 주어진 k인 3은 홀수이므로, 전체 배열에 3을 곱합니다. 
 *      따라서 [3, 6, 9, 300, 297, 294]을 return 합니다.
 * 
 * ex2) 주어진 k인 2는 짝수이므로, 전체 배열에 2를 더합니다. 
 *      따라서 [3, 4, 5, 102, 101, 100]을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * arr = 정수 배열
 * 
 * k = 짝수 or 홀수
 * 
 * k = 짝수 -> arr[i] * k
 * 
 * k= 홀수 -> arr[i] + k
 * 
 * for문 안에 if 문 , if문 안에 answer.push
 * 
 * 하지만 메서드를 쓰고 싶다.
 * 
 * 모든 배열에 k를 곱하거나 더하거나 니까 => map = for
 * 
 * map의 콜백 함수 식? -> (x) => x%2 === 1? x*k: x%2 ===0? x+k:""
 */


function solution (arr,k) {
    return arr.map((ele) => ele%2 === 1 ? ele*k : ele%2 === 0 ? ele+2:"");
}

/**
 * 맨 처음 solution 을 풀때 생각을 잘못해서 map의 callback 함수의 삼항 연산자 식을 
 * 요소의 값%2 로 계산 했다. 하지만 문제에서는 k가 홀수이냐 짝수 이냐에 따라서
 * 최종 값이 달라지기 때문에 틀렸다.
 */

function solution02 (arr,k) {
    return arr.map((ele) => k%2 === 1 ? ele*k : k%2 === 0 ? ele+2:"");
}

/**
 * solution02의 map callback 함수의 삼항 연산자 식을 k%2로 바꿨다. 
 * 코드 실행에서는 모두 정답이 나왔지만, 제출후 체점하긱 에서는 테스트 코드 몇개가
 * 오류가 나왔다.
 */

function solution03 (arr, k) {
    if(k%2===1){
        return arr.map(el=>el*k)
    }else if(k%2===0){
        return arr.map(el=>el+k)
    }else false
}

/**
 * 내가 처음에 계산했던for안에  if 문 형식으로 가는 부분에서 
 * for문을 map 으로 바꿨다.
 * 
 * 그결과 정답으로 나왔다. 
 */

function solution04 (arr,k) {
    return arr.map((ele) => k%2 === 1 ? ele*k :ele+2);
}

/**
 * solution04 함수는 다른 사람이 한 풀이식을 보고 02 함수를 수정했다.
 * 삼항 연산자 이고 홀수 일때는 (ele*k) 짝수 일때는 (ele+2) 이므로 
 * if else if 형식으로 쓸 필요 없이 if else 형식으로 끝낼수 있었던 것이다.
 * 
 * 요약은 삼항 연산자의 조건 k%2 === 1 이 true 이면 k*2를 false면 k+2를 쓰면 되는 것이다.
 */