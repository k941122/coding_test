/**
 * 원소들의 곱과 합
 * 
 * 문제 설명
 * 
 * 정수가 담긴 리스트 num_list가 주어질 때, 
 * 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 2 ≤ num_list의 길이 ≤ 10
 * - 1 ≤ num_list의 원소 ≤ 9
 * 
 * 입출력 예시
 * 
 *   num_list	     result
 * [3, 4, 5, 2, 1]	  1
 * [5, 7, 8, 3]	      0
 * 
 * 입출력 예시 설명
 * 
 * ex1) 모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.
 * ex2) 모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * num_list = 숫자형 배열 
 * 
 * 모든 i의 곱 < 모든 i 합 
 * return 1
 * 모든 i의 곱 > 모든 i 합 
 * return 0 
 * 
 * for문과 if문 ? 
 * 
 * 아니면 다른 메서드를 써야 할까? -> if문은 삼항 연산자로 해결 가능!
 * -> filter? redcue? 
 */



function solution(num_list) {
    let arr = num_list;
    let multiply = "";
    let sum = "";

    for (let i = 0; i <= arr.length; i++) {
        multiply *= i
    }
    for (let i = 0; i <= arr.length; i++) {
        sum += i
    }

    if (multiply < sum) {
        return 1
    } return 0
 
}

// ▼ 오답 코드
function solution (num_list) {
    let multiply = num_list.reduce((acc,cur) =>  acc * cur,0);
    console.log(multiply);
    let sum = num_list.reduce((acc,cur) =>  acc + cur,0);
    let answer = (multiply < sum*2 )? 1:0;
    return answer;
}

/**
 * 
 * 테스트 1
 * 입력값 〉	[3, 4, 5, 2, 1]
 * 기댓값 〉	1
 * 실행 결과 〉	실행한 결괏값 0이 기댓값 1과 다릅니다.
 * 출력 〉	0
 * 
 * 테스트 2는 통과 했지만, 테스트 1 에서 오답처리가 되었다.
 */

// ▼ 

function solution (num_list) {
    return Math.pow(num_list.reduce((a,b) => a+b),2) > num_list.reduce((acc,cur) => acc*cur ) ? 1:0;
}

/**
 * 오답 부분에서 "모든 요소의 합의 제곱" 부분의 식에 문제가 있는 것 같았다.
 * 그래서 숫자형의 제곱 메서드를 검색해 보니 Math.pow가 나왔고, 
 * Math.pow(제곱하고 싶은 값, 제곱할 값); 형식으로 요소의 합의 제곱을 구한후,
 * 삼항 연산자를 이용해서 true 는 1을 false는 0을 출력 시켰다.
 */