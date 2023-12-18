/**
 * 잘라서 배열로 저장하기
 * 
 * 문제 설명
 * 
 * 문자열 my_str과 n이 매개변수로 주어질 때, 
 * my_str을 길이 n씩 잘라서 저장한 배열을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ my_str의 길이 ≤ 100
 * - 1 ≤ n ≤ my_str의 길이
 * - my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
 * 
 * 입출력 에시 
 * 
 *        my_str	    n	      result
 * "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
 * "abcdef123"	        3	["abc", "def", "123"]
 * 
 * 입출력 에시 설명
 * 
 * ex1) "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 
 *      ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.
 * 
 * ex2)"abcdef123" 를 길이 3씩 잘라 배열에 저장한 
 *   ["abc", "def", "123"]를 return해야 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 문자열 my_str 을 n씩 잘라서 배열로 만들어라
 * 
 * 메서드? 문자열?
 * 
 * for문 돌리기?
 * 
 * 
 * 남은 문자열은 그대로 배열로 저장
 */

function solution (my_str,n) {
    let answer = [];

    for (let i = 0; i < my_str.length; i+=n) {
        answer.push(my_str.substring(i,i+n));
    }

    return answer;
}

/**
 * for문을 이용해 my_str의 길이만큼을 loop하는데 한번 loop할때마다
 * i에 n의 값을 누적 시켜서, n의 크기 만큼 my_str의 길이를 건너 뛴다.
 * 
 * loop가 되면 answer 에 push 메서드를 통해 요소를 뒤에서 부터 차례대로 넣어준다.
 * 
 * my_str 문자열의 부분 문자열을 추출해 내는 substring메서드를 이용해
 * i부터 i+n 까지 추출하라고 명령을 내린다. 
 * 
 * 그러면 for문이 loop 할때마다 증가되는 i 값에 따라서 문자열의 부분 문자열이
 * 추출되고, 그 값이 answer에 push 된다.
 */