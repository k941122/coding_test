/**
 * 순서 바꾸기
 * 
 * 문제 설명
 * 
 * 정수 리스트 num_list와 정수 n이 주어질 때, 
 * num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 
 * n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 2 ≤ num_list의 길이 ≤ 30
 * - 1 ≤ num_list의 원소 ≤ 9
 * - 1 ≤ n ≤ num_list의 길이
 * 
 * 입출력 예시
 * 
 * num_list	         n	 result
 * [2, 1, 6]	     1	 [1, 6, 2]
 * [5, 2, 1, 7, 5]	 3	 [7, 5, 5, 2, 1]
 * 
 * 입출력 예시 설명
 * 
 * ex1) [2, 1, 6]에서 첫 번째 이후의 원소는 [1, 6]이고 첫 번째까지의 원소는 [2]입니다.
 *      두 리스트를 이어 붙이면 [1, 6, 2]가 됩니다.
 * 
 * ex2) [5, 2, 1, 7, 5]에서 세 번째 이후의 원소는 
 * [7, 5]이고 세 번째까지의 원소는 [5, 2, 1]입니다. 
 * 두 리스트를 이어 붙이면 [7, 5, 5, 2, 1]가 됩니다.
 * 
 */

/**
 * 문제 분석
 * 
 * num_list = 숫자형 배열
 * 
 * n = 정수
 * 
 * n 번째 index 이전 요소들을 추출 ->slice(0,n)
 * 
 * 추출한 요소들을 다시 뒤로 붙이기. -> filter? map
 * 
 */

// ▼ 오답
function solution (num_list,n) {
    let arr1 = num_list.slice(0,n);
    let arr2 = num_list.slice(n-1,num_list.length);
    return answer = arr2.push(...arr1)
}

/**
 * arr1 과 arr2에 slice 메서드를 이용해 n 을 기준으로 앞뒤 배열을 따로 추출한뒤,
 * arr2(n이후의 요소들의 배열)에 push를 이용해 arr1의 요소들을 spread 문법을 통해
 * 요소화 시켜서 arr2 배열에 push 했다.
 * 
 * 하지만 테스트 1과 2 둘다 오답이 나왔다. 
 */

// ▼ 정답
function solution(num_list, n) {
    num_list.push(...num_list.splice(0, n));
    return num_list
}

/**
 * num_list에 push를 이용해서 해당 요소들을 뒤에서 부터 순차적으로 넣는다.
 * 
 * ... spread 문법을 이용해 요소들만 추출한뒤 splice를 통해 0 ~ n 까지 추출 한다.
 * 
 * 여기서 splice는 원본 배열에 영향을 주기 때문에 사실상 num_list 배열은 n 이후 의 요소만 남은 상태이다.
 * 
 * 여기에 splice로 추출한 부분을 순차적 으로 push해 주면 정답이 출력된다.
 */