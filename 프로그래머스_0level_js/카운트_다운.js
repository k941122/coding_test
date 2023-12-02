/**
 * 카운트 다운
 * 
 * 문제 설명
 * 
 * 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 
 * 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.


 * 
 * 제한 사항
 * 
 * - 0 ≤ end_num ≤ start_num ≤ 50
 * 
 * 입출력 예시
 * 
 * start_num	end_num	           result
 *     10	       3	  [10, 9, 8, 7, 6, 5, 4, 3]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 10부터 3까지 1씩 감소하는 수를 담은 리스트는 [10, 9, 8, 7, 6, 5, 4, 3]입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * start -> end 까지 -1씩 감소하는 배열을 만드시오
 * 
 * 관련된 메서드는 뭐가 있을까?
 * 
 */


function solution (start,end_num) {
    let answer = [];
    for(let i = end_num; i <= start; i++) {
        answer.push(i)
    }
    return answer;
}

/**
 * start 부터 end 까지의 배열을 만들어야 하기 때문에 for 반복문을 사용했다.
 * 기본 값은 end_num을 넣고(작기 때문) 조건 부분은 start 보다 작거나 같을때 까지 반복하라고 했다.
 * 
 * 그리고 한번 순회할때 마다 asnwer 배열에 i를 뒤에서 부터 순차적으로 push 하라고 했다.
 * 
 */

function solution (start, end_num) {
    return Array.from((start-end_num+1),(_,i)=>start-i);
}

/**
 * Array.form((길이)요소에 넣을 식) 메서드를 이용해서 배열을 만들었다.
 * 
 * 전체 길이는 start(큰 숫자) - end_num(작은 숫자)를 뺀 값에 +1 을 한것이다.
 * 배열의 길이는 0부터 시작 하기 때문에 +1을 더해준 것이다.
 * 
 * 그리고 만들어진 "start-end_num+1" 만큼의 배열의 요소를 넣기 위해 식을 세웠다.
 * "(_,i)=>start-i" 는 Array.from()으로 만들어진 배열은 길이 빼고 요소들의 값이 undefiend 임으로
 * 비어 있고 index만 있으므로, 시작하는 숫자에서 값이 줄어들기 때문에 start - i 의 식을 세워준다.
 */