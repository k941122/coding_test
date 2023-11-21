
/**
 * 배열 비교하기
 * 
 *  * 문제 설명
 * 
 * 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.
 * 
 * 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
 * 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고,
 * 같다면 같습니다.
 * 두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 
 * 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 
 * 0을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 
 * 제한사항
 * - 1 ≤ arr1의 길이 ≤ 100
 * - 1 ≤ arr2의 길이 ≤ 100
 * - 1 ≤ arr1의 원소 ≤ 100
 * - 1 ≤ arr2의 원소 ≤ 100
 * - 문제에서 정의한 배열의 대소관계가 일반적인 
 *   프로그래밍 언어에서 정의된 배열의 대소관계와 다를 수 있는 점에 유의해주세요.
 * 
 * 입출력의 예시
 *      arr1	          arr2	       result
 *    [49, 13]	      [70, 11, 2]	    -1
 * [100, 17, 84, 1]	 [55, 12, 65, 36]	 1
 *  [1, 2, 3, 4, 5]	 [3, 3, 3, 3, 3]	 0
 * 
 * 
 * 입출력의 예시 설명
 * 
 * ex1) 예제 1번에서는 arr1의 길이는 2이고 arr2의 길이는 3으로 arr2의 길이가 더 깁니다. 
 *      따라서 arr2가 arr1보다 크므로 -1을 return 합니다.
 * 
 * ex2) 예제 2번에서는 arr1의 길이과 arr2의 길이가 4로 같습니다. 
 *      arr1의 모든 원소의 합은 100 + 17 + 84 + 1 = 202이고 
 *      arr2의 모든 원소의 합은 55 + 12 + 65 + 36 = 168으로 
 *      arr1의 모든 원소의 합이 더 큽니다. 따라서 arr1이 arr2보다 크므로 1을 return 합니다.
 * 
 * ex3) 예제 3번에서는 arr1의 길이와 arr2의 길이가 5로 같고 각 배열의 모든 원소의 합 
 *      또한 15로 같습니다. 따라서 arr1과 arr2가 같으므로 0을 return 합니다.
 * 
 */

/**
 * 문제 해석!
 * 
 * arr1 arr2의 길이가 같다면? => arr1이 크면 1 , arr2가 크면 -1
 * 
 * arr1 arr2의 길이가 다르다면 ? => arr1 과 arr2의 각 원소의 합이 큰쪽이 크고,
 *  arr1이 크면 1 , arr2가 크면 -1
 */



function solution (arr1,arr2) {
    let answer = 0;

    if(arr1.lenght !== arr2.length) {
        const max = Math.max(arr1.length, arr2.length);
        if (max === arr1.length) answer = 1;
        if (max === arr2.lenght) answer = -1;
    }

    if (arr1.length === arr2.length) {
        let sum = [];

        sum[0] = arr1.reduce((acc,cur) => {
            acc += cur;

            return acc;
        }, 0);
        sum[1] = arr2.reduce((acc,cur) => {
            acc += cur;

            return acc;
        }, 0);
        
        if (sum[0] > sum[1]) answer = 1;
        if (sum[0] < sum[1]) answer = -1;
    }
    return answer;
}

/**
 * if 문을 이용해 조건식을 세워 일정 조건에 충족 한다면 해당 식을 실행하는 것을 기본 으로 잡았다.
 * 
 * 먼저 arr1 과 arr2의 값이 같을 경우와 다를 경우가 메인을 이루는 큰 분기점 임으로
 * if 문을 두게 써줘서 각 조건식을 쓰는 일반괄호 안에 "===" 같을때 와 "!==" 다를때를 설정해 주었다.
 * 
 * 각 배열의 길이가 다를 경우 Math.max 매서드를 써줘 각 배열의 길이를 .length 매서드로 비교한뒤 
 * 두 배열중 큰값을 max 상수에 값으로 입력한다. 
 * 
 * 그리고 상수 max 와 arr1이 같은 조건식을 가진 if문과.
 * 상수 max와 arr2가 같은 if조건식을 세운뒤 answer 에 문제에서 요구한데로  arr1이 클결우 1, arr2가 클경우 -1을 return 한다.
 * 
 * 
 * arr1과 arr2의 length가 같은 경우 
 * 
 * sum 이라는 비어있는 배열을 선언한뒤
 * 
 * sum[0] 에는 arr1을 reduce 하여 해당 배열의 현재 숫자를 acc에 누적시키고 그값을 return 한다.
 * sum[1] 역시 arr2를 reduce 메서드를 이용하여 배열의 현재 숫자를 acc에 누적시키고 그 누적시킨 값(acc)를 return 한다.
 * 
 * if문 두개를 세운뒤 각 조건마다 sum[0] = (arr1) 이 큰 조건식 이나, 
 * 아니면 sum[1] = (arr2)가 큰 조건식을 세워 문제에서 제시한 데로 answer 값에 1 또는 -1을 return한다.
 * 
 */


