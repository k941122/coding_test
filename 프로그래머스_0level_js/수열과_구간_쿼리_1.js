/**
 * 수열과 구간 쿼리 1
 * 
 * 문제 설명
 * 
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
 * queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
 * 
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
 * 
 * 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 
 * solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 1,000
 *   0 ≤ arr의 원소 ≤ 1,000,000
 * 
 * - 1 ≤ queries의 길이 ≤ 1,000
 *   0 ≤ s ≤ e < arr의 길이
 * 
 * 입출력 예시
 * 
 *        arr	            queries	            result
 * [0, 1, 2, 3, 4]	[[0, 1],[1, 2],[2, 3]]	[1, 3, 4, 4, 4]
 * 
 * 입출력 에시 설명
 * 
 * ex1) 각 쿼리에 따라 arr가 다음과 같이 변합니다.
 * 
 * i	queries[i]	arr
 * -	-	[0, 1, 2, 3, 4]
 * 0	[0,1]	[1, 2, 2, 3, 4]
 * 1	[1,2]	[1, 3, 3, 3, 4]
 * 2	[2,3]	[1, 3, 4, 4, 4]
 * 
 * 따라서 [1, 3, 4, 4, 4]를 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * arr은 정수배열 
 * 
 * queries 쿼리가 담긴 배열
 * 
 * 정수배열 에 대해 queries 의 요소 querry [s,e] 를 처리하고
 * 지정된 범위 s e 까지의 모든 인덱스 i 를 arr[i] +1 증가 하기
 * 
 * for  of 문으로 queries 요소 순회
 * 
 * 구조 분해 할당 으로 s,e에 값 할당
 * 
 * for of 문 내부의 for 문으로 arr[i] 에 +1 더해주기
 * 
 */

function solution (arr, queries) {
    for (let query of queries) {
        let [s,e]=query;
        for (let i = s; i<=e;i++) {
            arr[i] += 1
        }
    }
    return arr;
}

/**
 *
 * for of 문을 이용해 queries 배열의 요소인 query를 순회해 주는데,
 * 순회할 때마다. 구조분해 할당을 이용해 [s,e]에 query(queries의 요소)값을 할당해준다.
 * 그리고 for문을 이용해 초기값으로 i에 s값을 총 순회 횟수는 e 크기 만큼 순회한다.
 * 그러면 해당 for문은 s부터 e까지의 횟수만큼 순회하게 되는데
 * 그럴대 마다 arr[i] (요소의 값)에 +1 을 누적 시켜준다.
 *  
 * 
 * 
 */