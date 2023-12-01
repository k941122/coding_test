/**
 * n개 간격의 원소들
 * 
 * 문제 설명
 * 
 * 정수 리스트 num_list와 정수 n이 주어질 때, 
 * num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 
 * 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 5 ≤ num_list의 길이 ≤ 20
 * - 1 ≤ num_list의 원소 ≤ 9
 * - 1 ≤ n ≤ 4
 * 
 * 입출력 예시
 * 
 *      num_list	    n	 result
 * [4, 2, 6, 1, 7, 6]	2	[4, 6, 7]
 * [4, 2, 6, 1, 7, 6]	4	[4, 7]
 * 
 * 입출력 예시 설명
 * 
 * ex1) [4, 2, 6, 1, 7, 6]에서 2개 간격으로 저장되어 있는 원소들은 [4, 6, 7]입니다.
 * ex2) [4, 2, 6, 1, 7, 6]에서 4개 간격으로 저장되어 있는 원소들은 [4, 7]입니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * num_list = 정수 리스트 (배열)
 * 
 * n = 정수
 * 
 * 배열의 요소에서 0번째 index 에서 num_list.lenght index 까지 n개 간격의 요소들을 새로운 배열로 만들어라
 * 
 * filter? -> callback 식은 어떻게 쓰지? 
 * 
 */
// ▼ 오답 코드
function solution(num_list, n) {
    return num_list.splice(0,n)
}
/**
 * 원하는 배열의 인자가 아닌 0 부터 n개 이후의 요소를 제거한 배열들이 나왔다.
 * splice의 기능을 다시 공부했다.
 * 
 * splice 메서드 = 원본 배열에 영향을 주는 메서드, (시작 index,정수) -> 시작 index 부터
 * n개 이후 까지 요소들을 삭제 한다.
 */

// ▼ 정답 코드
function solution(num_list, n) {
    return num_list.filter((_,i) => i%n ===0);
}

/**
 * filter 를 이용해서 callback의 식을 이용해 원하는 배열을 출력 하게 했다.
 * callback 의 매개 변수로 사용하지 않는 '_' 와  index를 매개변수로 주었다.
 * i와n을 나눈 값이 0 이면 해당 index를 가진 요소를 return 하도록 식을 세웠다. 
 */