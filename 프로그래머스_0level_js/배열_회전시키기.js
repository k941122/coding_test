/**
 * 배열 회전시키기
 * 
 * 문제 설명
 * 
 * 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
 * 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 3 ≤ numbers의 길이 ≤ 20
 * - direction은 "left" 와 "right" 둘 중 하나입니다.
 * 
 * 입출력 예시
 * 
 *  numbers	                   direction	result
 * [1, 2, 3]	                "right"	    [3, 1, 2]
 * [4, 455, 6, 4, -1, 45, 6]	"left"	    [455, 6, 4, -1, 45, 6, 4]
 * 
 * 입출력 예시 설명
 * 
 * ex1) numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
 * ex2) numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * if else 문 
 * 
 * for 반복문?
 * 
 * while?
 * 
 * map? if else 삼항 연산자? 콜백 식? -> 
 * 
 */

function solution (numbers, direction ) {
    if (direction === "right") {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    return numbers;
}

/**
 * 간단히 생각해 보면 오른족으로 가면 맨끝 요소가 처음으로 가는것이고,
 * 왼쪽으로 이동 하면, 처음 요소가 맨 마지막 으로 가게 된다.
 * 
 * 이 부분을 식으로 구현하면 direction 이 " right" 라면 
 * unshift를 이용해서 배열의 시작 요소에 pop 메서드를 이용해서 
 * 마지막 요소를 처음으로 바꾼다.
 * 
 * 그게 아니라면 (left라면) 배열에 push를 이용해 맨뒤에 요소를 집어 넣는데,
 * shift를 이용해  배열의 첫번째 요소를 제거한뒤 반환하는 기능을 이용해
 * push를 통해 첫번째 메서드가 마지막으로 들어가게 된다.
 */