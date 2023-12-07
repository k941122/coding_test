/**
 * 문제 설명
 * 
 * 문제 설명
 * 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 
 * 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 
 * solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.
 * 
 * 제한 사항
 * 
 * - 5 ≤ num_list의 길이 ≤ 50
 * - -9 ≤ num_list의 원소 ≤ 9
 * 
 * 입출력 예시
 * 
 * num_list	          result
 * [4, 2, 6, 1, 7, 6]	17
 * [-1, 2, 5, 6, 3]	    8
 * 
 * 입출력 예시  설명
 * 
 * ex1) 홀수 번째 원소들의 합은 4 + 6 + 7 = 17, 짝수 번째 원소들의 
 *      합은 2 + 1 + 6 = 9 이므로 17을 return합니다.
 * 
 * ex2) 홀수 번째 원소들의 합은 -1 + 5 + 3 = 7, 
 *      짝수 번째 원소들의 합은 2 + 6 = 8 이므로 8을 return합니다.
 * 
 */

/**
 * 문제 설명
 * 
 * num_list 정수 리스트 (숫자형 배열)
 * 
 * 첫번째 원소의 배열 1
 * 
 * 짝수 요소의 합 과 홀수 요소의 합의 요소중 큰값을 반환 -> 삼항 연산자.
 * 
 * 
 */

// ▼ 오답 코드
function  solution (num_list) {
    let even = num_list.filter(i=>(i+1)%2===0).reduce((acc,cur)=> acc+cur,0);
    let odd = num_list.filter(i=>(i+1)%2!==0).reduce((acc,cur)=> acc+cur,0);
    return even < odd? odd:even;
}

/**
 * 테스트 1번에서 자꾸 17이 나와야 하는데 18이 나왔다. 
 * 
 * filter(i=>(i+1)%2===0) filter메서드 매개변수 부분에서 i 값 하나만 있게 되면 
 * value 값 을 의미한다. 오직 index만 사용하고 싶다면 (i)가 아닌 (_,i)라고 해야한다.
 * 
 * 비어있는 _ 는 value의 자리인데, 우리에게 필요한 것은 value가 아니기 때문에 비어두고
 * 두번째 인자로 index를 가져온다. 
 * 
 * (값,인덱스) => 매개변수를 이용한 식 이 메서드의 기본 형식이다.
 */

// ▼ 정답 코드

function solution(num_list) {
    let even = num_list.filter((_, i) => i % 2 === 1).reduce((acc, cur) => acc + cur, 0);
    let odd = num_list.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0);
    return even < odd ? odd : even;
}


