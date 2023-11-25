/**
 * 머쓱이보다 키 큰 사람
 * 
 * 문제 설명
 * 
 * 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 
 * 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 
 * height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 
 * solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ array의 길이 ≤ 100
 * - 1 ≤ height ≤ 200
 * - 1 ≤ array의 원소 ≤ 200
 * 
 * 입출력 예시
 * 
 *     array	           height	result
 *  [149, 180, 192, 170]	167	      3
 *  [180, 120, 140]	        190	      0
 * 
 * 입출력 예시 설명
 * 
 * ex1) 149, 180, 192, 170 중 머쓱이보다 키가 큰 사람은 
 *      180, 192, 170으로 세 명입니다.
 * 
 * ex2) 180, 120, 140 중 190보다 큰 수는 없으므로 0명입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 숫자배열 = array
 * 기준 정수- height
 * 
 * 숫자 배열 중에서 height 보다 큰 숫자 갯수 return
 * 
 * 걸러내기. filter
 * 
 */

function solution(array, height) {
    var answer = 0;
    answer = array.filter(num => num > height).length
    return answer;
}

/**
 * 어떤 조건(머쓱이 보다 큰 키를 가진 학생)에 따라 결과를 걸러내는 것은
 * filter 메서드를 이용하면 된다.
 * 
 * filter 매서드의 인자로 num 이라는 배열의 요소를 넣고 
 * 그 요소의 값을 매개변수 height 와 비교해서 나온 배열들을
 * .length를 이용해 길이를 나오게 하고 answer에 값을 넣었다.
 */