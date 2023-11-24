/**
 * 
 * 짝수 홀수 개수
 * 
 * 문제 설명
 * 
 * 정수가 담긴 리스트 num_list가 주어질 때, 
 * num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 
 * solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 
 * - 1 ≤ num_list의 길이 ≤ 100
 * - 0 ≤ num_list의 원소 ≤ 1,000
 * 
 * 입출력 예시
 * 
 *   num_list	       result
 * [1, 2, 3, 4, 5]	   [2, 3]
 * [1, 3, 5, 7]	       [0, 4]
 * 
 * 입출력 예시 설명
 * 
 * ex1) [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.
 * ex2) [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.
 * 
 * 
 */

/**
 * 문제 분석!
 * 
 * 정수를 요소로 가진 배열 = num_list
 * 
 * 짝수와 홀수를 담은 개수를 담은 배열 return
 * 
 * 짝수 의 변수
 * 
 * 홀수의 변수
 * 
 * 
 * 
 * 
 */


function  solution (num_list) {
    let answer = [];
    let odd =0;
    let even = 0;

    for (let i =0; i <= num_list.length; i++) {
        if (num_list[i]%2 ==0 ) {
            even++;
        } else if (num_list[i]%2 == 1) {
            odd++;
        } 
    }
    answer = [even,odd];
    return answer;
}
//정답

//filer을 이용해 바로 return 시켜보기