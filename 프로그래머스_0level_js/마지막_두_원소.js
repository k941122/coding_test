/**
 * 마지막 두 원소
 * 
 * 문제 설명
 * 
 * 정수 리스트 num_list가 주어질 때, 
 * 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 
 * 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 2 ≤ num_list의 길이 ≤ 10
 * - 1 ≤ num_list의 원소 ≤ 9
 * 
 * 입출력 예시
 * 
 *  num_list	      result
 * [2, 1, 6]	    [2, 1, 6, 5]
 * [5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 마지막 원소인 6이 그전 원소인 1보다 크기 때문에 
 *      6 - 1인 5를 추가해 return합니다.
 * 
 * ex2) 마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 
 *      5의 두 배인 10을 추가해 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * num_list = 정수 요소 배열 
 * 
 * if 마지막 원소 > 마지막 원소 -1
 * 
 * answer.push(마지막 원소 - 마지막 원소 -1)
 * 
 * 마지막 원소 < 마지막 원소 -1
 * 
 * push(마지막 원소 *2)
 * 
 */

// ▼ 오답 코드
function solution (num_list) {
    let answer = [...num_list];
    let len = num_list.length;
    if (num_list[len] >num_list[len-1]) {
        answer.push(num_list[len] - num_list[len-1] );
    } answer.push(num_list[len]*2)
    return answer;
}

/**
 * 결과 값 맨 마지막 index가 null (없음)으로 나왔다.
 * 
 * answer.push()의 식이 잘못 되었을 것 같다.
 */

// ▼ 
function solution (num_list) {
    const [a,b] = [...num_list].reverse();
    return [...num_list,a>b?(a-b):a*2];
}

/**
 * const [a,b] 배열에 ... spread 문법을 이용해 배열을 복사하고, reverse 메서드를 통해 요소들을 반전 시킨다.
 * return 부분에 ...num_list 로 다시 복사 한뒤, 위의 a,b 요소를 이용해서 삼항 연산자로 조건을 작성해,
 * true면 a-b를 false면 a*2를 출력한다.
 */
