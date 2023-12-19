/**
 * 수열과 구관의 쿼리 2
 * 
 * 문제 설명
 * 
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
 * queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
 * 
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 
 * 가장 작은 arr[i]를 찾습니다.
 * 
 * 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
 * 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 1,000
 *   0 ≤ arr의 원소 ≤ 1,000,000
 * - 1 ≤ queries의 길이 ≤ 1,000
 *   0 ≤ s ≤ e < arr의 길이
 *   0 ≤ k ≤ 1,000,000
 * 
 * 입출력 예시
 * 
 *        arr	                 queries	          result
 * [0, 1, 2, 4, 3]	[[0, 4, 2],[0, 3, 2],[0, 2, 2]]	[3, 4, -1]
 * 
 * 입출력 에시 설명
 * 
 * ex1) 첫 번째 쿼리의 범위에는 0, 1, 2, 4, 3이 있으며 이 중 2보다 크면서 가장 작은 값은 3입니다.
 *      두 번째 쿼리의 범위에는 0, 1, 2, 4가 있으며 이 중 2보다 크면서 가장 작은 값은 4입니다.
 *      세 번째 쿼리의 범위에는 0, 1, 2가 있으며 여기에는 2보다 큰 값이 없습니다.
 *      따라서 [3, 4, -1]을 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * arr 정수배열 queries 이차원 배열
 * 
 * query = [s,e,k]
 * 
 * for of 
 * 
 * for let i = s i <= e.length
 * 
 * if문
 * 
 */

// ▼ 오답 코드
function solution (arr, queries) {
    let arr2 = [];
    for (let query of queries) {
        let [s,e,k]=query;
        for (let i = s; i<=e;i++) {
            if (arr[i]>k) {
                arr2.push(arr[i]);
            }
        }
        
    }
    return arr;
}

/**
 * 좀더 식을 세워보려고 노력했지만, 일단 이 코드는 틀린걸 느꼈다. 
 * 수열과 구관의 쿼리 유형의 문제들은 for of와 구조분해 할당만 잘하면 된다고 느꼈는데
 * 더 복잡한 문제 였다.
 */



function solution (arr,queries) {
    let answer = [];
    for(let [s,e,k]of queries) {
        let temp = arr.filter((v,i) => (i>=s && i<=e&&v>k)).sort((a,b) => a-b)[0];
        answer.push(temp?temp:-1);
    }
    return answer;
}

    /**
     * 
     * asnwer 빈 배열을 선언한 뒤, 
     * 
     * for of 문을 이용해서 queries 의 요소에 대해 순환 한다. 
     * let [s,e,k]는 query의 구조 분해 할당인데, for ()일반 괄호 안에 let과 함께 
     * 사용면 별도의 식없이 구조분해 할당을 할수 있다.
     * 
     * for of 문 내부에 temp 변수를 선언하고 arr배열을 filter를 통해 특정 조건에 부합하는
     * 요소만 출력 해준다. 여기서 조건은 i(arr의 요소)가 s(시작요소)보다 크거나 같고, e(끝 요소)
     * 보다 작거나 같고 v(값)이 k보다 작은 요소들만 걸러서 출력 하라는 것이다.
     * 
     * 출력된 요소들을 담은 배뎔을 sort를 이용해 오름차순 정렬을 하고 
     * 마지막 으로 가장 작은 요소를 택하기 위해 [0] 으로 배열의 1번째 요소를 호출하면 된다.
     * 
     * 그리고 answer에 push를 이용해 순차적으로 넣어주는데, 삼항연산자를 이용해 
     * temp 가 없으면 (값이 없으면) -1을 temp가 존제하면 그 값을 answer에 push 해준다.
     * 
     */


