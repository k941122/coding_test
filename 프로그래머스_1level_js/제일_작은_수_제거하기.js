/**
 * 제일 작은 수 제거하기
 * 
 * 문제 설명
 * 
 * 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, 
 * solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 
 * -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, 
 * [10]면 [-1]을 리턴 합니다.
 * 
 * 제한 조건
 * 
 * - arr은 길이 1 이상인 배열입니다.
 * 
 * - 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
 * 
 * 입출력 예시 
 * 
 * arr	         return
 * [4,3,2,1]	[4,3,2]
 * [10]	         [-1]
 * 
 */

/**
 * 문제 해석
 * 
 * arr 정수배열
 * 
 * 가장 작은값의 요소를 제거한 배열 retrun 
 * 
 * retrun 시에 빈 배열이면 [-1] return 
 * 
 */

// 오답 코드 

function solution(arr) {
    const min = Math.min(...arr);
    const arr2 = arr.map((v)=> v === min?"":v);
    return arr2.length !== 0? arr:[-1]; 
}

/**
 * arr2 상수에서 map을 사용해서 최솟값과 일치하는 것을 사라지게 만들 경우
 * 배열의 해당 요소가 사라지는게 아닌 공백으로 남게 된다. 그래서 제대로 작동하지 않는다.
 * 
 * 또한 return 부분에서 true 로 arr이 아닌 arr2(변경된 배열)이 나와야 한다.
 */

// 정답 코드

function solution(arr) {
    const min = Math.min(...arr);
    const arr2 = arr.filter((v) => v !== min);
    return arr2.length !== 0? arr2:[-1]; 
}

/**
 * arr2 상수의 값에 filter 메서드를 이용해서 min 상수와 일치하지 않는 요소의 값만
 * 배열로 다시 만들어 주었다.
 */

