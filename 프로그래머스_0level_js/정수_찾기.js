/**
 * 정수 찾기
 * 
 * 문제 설명
 * 
 * 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, 
 * num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 3 ≤ num_list의 길이 ≤ 100
 * - 1 ≤ num_list의 원소 ≤ 100
 * - 1 ≤ n ≤ 100
 * 
 * 입출력 예시 
 * 
 *    num_list	           n	result
 * [1, 2, 3, 4, 5]	       3	  1
 * [15, 98, 23, 2, 15]	   20	  0
 * 
 * 입출력 예시 설명
 * 
 * ex1) [1, 2, 3, 4, 5] 안에 3이 있으므로 1을 return합니다.
 * ex2) [15, 98, 23, 2, 15] 안에 20이 없으므로 0을 return합니다.
 * 
 */

/**
 * 문제 설명
 * 
 * num_list = 정수형 배열
 * 
 * n = 정수
 * 
 * n이 있으면 0
 * 
 * n이 없으면 0  => if문 -> 삼항연산자
 * 
 * filter ? include()?
 * 
 * filter((ele)=> include(n)? 1:0);
 * 
 */

// ▼ 정답 코드
function solution (num_list,n) {
    return Number(num_list.filter((ele)=> ele===n? 1:0).join(''));
}

/**
 * Number() filter() join() 메서드를 이용해서 풀려고 했지만 테스트 1번 에서 배열의 값이 떳다.
 *  
 */

// ▼ 정답 코드
function solution (num_list,n) {
    return num_list.includes(n)? 1:0;
}

/**
 * filter 부분의 callback 함수의 삼항 연산자 부분에서 true 이면 1이 return 되는게 아닌 
 * num_list의 배열이 출력 된다. 그래서 filter 말고 좀더 간단한 메서드를 찾던중
 * includes() 이라는 메서드를 찾았다. 
 * 
 * includes() 메서드는  해당 배열의 똑같은 문자열 혹은 숫자형 요소를 찾아 준다음 true , false로 
 * 출력한다. 이 부분을 삼항 연산자를 이용해 includes(n)? 1:0; 형식으로 표현 했다.
 */