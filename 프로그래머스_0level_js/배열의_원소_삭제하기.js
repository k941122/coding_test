/**
 * 배열의 원소 삭제하기
 * 
 * 문제 설명
 * 
 * 정수 배열 arr과 delete_list가 있습니다. 
 * arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 
 * 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 100
 * - 1 ≤ arr의 원소 ≤ 1,000
 * - arr의 원소는 모두 서로 다릅니다.
 * - 1 ≤ delete_list의 길이 ≤ 100
 * - 1 ≤ delete_list의 원소 ≤ 1,000
 * - delete_list의 원소는 모두 서로 다릅니다.
 * 
 * 입출력 예시
 * 
 *           arr	                 delete_list	                 result
 * [293, 1000, 395, 678, 94]	[94, 777, 104, 1000, 1, 12]	 [293, 395, 678]
 * [110, 66, 439, 785, 1]	    [377, 823, 119, 43]	         [110, 66, 439, 785, 1]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 arr의 원소 중 1000과 94가 delete_list에 있으므로 
 *      이 두 원소를 삭제한 [293, 395, 678]을 return 합니다.
 * 
 * ex2) 예제 2번의 arr의 원소 중 delete_list에 있는 원소는 없습니다. 
 *      따라서 arr 그대로인 [110, 66, 439, 785, 1]을 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * arr = 정수배열 , delete_list = 정수배열
 * 
 * arr 요소 - delete_list 요소 = 남은 배열(순서 유지할것!) -filter ,map? 
 * 
 */


function solution (arr,delete_list) {
    return arr.filter((x) => !delete_list.includes(x) );
}

/**
 * arr 배열에 filter를 이용하고 그 안에 있는 callback함수 조건식에 delete_list 배열에
 * includes() 메서드 를 적용해서, arr 배열의 요소 중에서 delete_list 배열의 요소와 일치하지
 * 않은 요소를 return 하라는 식을 세웠다.
 * 
 * includes() 메서드는 배열의 요소에 해당 값이 있다면 true 아니면 false를 출력하는 기능을 가지고 있다.
 * 이 기능을 이용해서 filter의 callback 함수 파라미터인 x를 넣어, arr 배열과 delete_list 배열의
 * 일치하는 부분(true) 를 ! 라는 부정을 의미하는 기호를 넣어서 일치하지 않은 부분만 출력 해 달라고 요청한 것이다.
 */