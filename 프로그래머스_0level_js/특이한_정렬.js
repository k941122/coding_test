/**
 * 특이한 정렬
 * 
 * 문제 설명
 * 
 * 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
 * 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
 * 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 
 * 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ n ≤ 10,000
 * - 1 ≤ numlist의 원소 ≤ 10,000
 * - 1 ≤ numlist의 길이 ≤ 100
 * - numlist는 중복된 원소를 갖지 않습니다.
 * 
 * 입출력 에시
 * 
 * numlist	n	result
[1, 2, 3, 4, 5, 6]	4	[4, 5, 3, 6, 2, 1]
[10000,20,36,47,40,6,10,7000]	30	[36, 40, 20, 47, 10, 6, 7000, 10000]
 * 
 * 입출력 에시 설명
 * 
 * ex1) 4에서 가까운 순으로 [4, 5, 3, 6, 2, 1]을 return합니다.
 *      3과 5는 거리가 같으므로 더 큰 5가 앞에 와야 합니다.
 *      2와 6은 거리가 같으므로 더 큰 6이 앞에 와야 합니다.
 * 
 * ex2) 30에서 가까운 순으로 [36, 40, 20, 47, 10, 6, 7000, 10000]을 return합니다.
 *      20과 40은 거리가 같으므로 더 큰 40이 앞에 와야 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * 
 * 
 */

function solution(numlist, n) {
    var answer = [];
    answer = numlist.sort((a,b) => {
        const [numA, numB] = [Math.abs(a-n),Math.abs(b-n)];
        if (numA === numB) {
            return b-a
        }
        return numA -numB;
    })
    return answer;
}

/**
 * answer에 numlist의 배열에서 sort 메서드를 이용해서 정렬 하는데,
 * 
 * const [numA,numB] = [Math.abs(a-n),Math.abs(b-n)] 을이용해 numA와 numB에 값을
 * 할당한다.
 * 그리고 해당 요소의 값들이 같으면 내림차순으로 만들어 준다. 
 * 그게 아니라면 기본적으로 오름 차순으로 설정한다. 
 */