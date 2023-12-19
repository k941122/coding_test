/**
 * 수열과 구관의 쿼리 4
 * 
 * 문제 설명
 * 
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
 * queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
 * 
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 
 * arr[i]에 1을 더합니다.
 * 
 * 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 
 * solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 1,000
 *   0 ≤ arr의 원소 ≤ 1,000,000
 * - 1 ≤ queries의 길이 ≤ 1,000
 *   0 ≤ s ≤ e < arr의 길이
 *   0 ≤ k ≤ 5
 * 
 * 입출력 에시
 * 
 *        arr	                queries	                 result
 * [0, 1, 2, 4, 3]	[[0, 4, 1],[0, 3, 2],[0, 3, 3]]	[3, 2, 4, 6, 4]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 각 쿼리에 따라 arr가 다음과 같이 변합니다.
 * 
arr
[0, 1, 2, 4, 3]
[1, 2, 3, 5, 4]
[2, 2, 4, 5, 4]
[3, 2, 4, 6, 4]
 * 
 * 따라서 [3, 2, 4, 6, 4]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * arr 정수배열
 * 
 * queries 이차원 배열
 * 
 * query -> queries의 원소 [s,e,k]
 * 
 * s ≤ i ≤ e s~e 사이의 인덱스 arr요소
 * 
 * arr[i]가 k의 배수이면 arr[i] + 1
 * 
 * i%4 ==== 0 true arr[i] +1
 * 
 */

function solution (arr, queries) {
    for (let query of queries) {
        let [s,e,k]=query;
        for (let i = s; i<=e;i++) {
            if (i%k === 0) {
                arr[i] +=1;
            }
        }
    }
    return arr;
}

/**
 * 수열과 구관의 쿼리 문제는 결국 query를 순회해서
 * query의 해당 요소들을 s,e,k에 값을 구조분해 할당으로 매겨서
 * 
 * 요구하는 조건에 맞게 코드를 짜면 된다. 
 * 
 * for 반복문 에서 초기값을 s loop하는 횟수를 e만큼 하게 한다.
 * 그리고 if문에 i와 k를 나눈 나머지 값이 0 이면 query의 요소 s와 e 사이의 
 * 요소들에 +1을 누적 시킨다.
 */