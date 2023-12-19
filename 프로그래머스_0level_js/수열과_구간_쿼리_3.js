/**
 * 수열과 구간 쿼리 3
 * 
 * 문제 설명
 * 
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
 * queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
 * 
 * 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
 * 
 * 위 규칙에 따라 queries를 처리한 이후의 arr를 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 1,000
 *   0 ≤ arr의 원소 ≤ 1,000,000
 * 
 * - 1 ≤ queries의 길이 ≤ 1,000
 *   0 ≤ i < j < arr의 길이
 * 
 * 입출력 예시
 * 
 *        arr	            queries	            result
 * [0, 1, 2, 3, 4]	[[0, 3],[1, 2],[1, 4]]	[3, 4, 1, 0, 2]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 각 쿼리에 따라 arr가 다음과 같이 변합니다.
 * 
arr
[0, 1, 2, 3, 4]
[3, 1, 2, 0, 4]
[3, 2, 1, 0, 4]
[3, 4, 1, 0, 2]
 * 
 * 따라서 [3, 4, 1, 0, 2]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 
 * 정수배열 arr
 * 
 * 2차원 정수배열 queries 
 * 
 * queries의 원소 query [i,j]
 * 
 * 
 * i j 에 해당하는 값을 arr 배열에서 서로 위치를 바꿔준다.
 * 기존 쿼리의 식에서 for of 내부의 식만 바꿔주면 될것 같다.
 * 
 * 
 */

function solution (arr, queries) {
    for (let query of queries) {
        let [i,j]=query;
        [[arr[i],arr[j]] = [arr[j],arr[i]]]
    }
    return arr;
}

/**
 * 수열과 구간 쿼리에서 사용했던 식을 이용해서 
 * for of 문으로 queries 배열의 요소 query를 순회 하면서
 * 
 * 구조분해 할당을 통해 i와j에 query의 값을 할당해 준다.
 * 
 * 그리고 대괄호 안에 구조 분해 할당을 통해 arr[i],arr[j] 위치의 요소에 arr[j],arr[i]
 * 으로 바꿔준다.
 * 
 * 그러면 for of 문을 순회 하며 query에 접근 할때 마다 i j에 새로운 값이 할당 되고
 * arr의 i,j에 위치한 인덱스 들은 바뀌게 된다.
 */