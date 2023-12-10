/**
 * 배열의 원소만큼 추가하기
 * 
 * 문제 설명
 * 
 * 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 
 * 양의 정수 배열 arr가 매개변수로 주어질 때, 
 * arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 
 * a를 a번 추가하는 일을 반복한 뒤의 배열 X를 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 100
 * - 1 ≤ arr의 원소 ≤ 100
 * 
 * 입출력 예시
 * 
 *    arr	              result
 * [5, 1, 4]	[5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
 * [6, 6]	    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
 * [1]	                    [1]
 * 
 * 
 * 입출력 예시 설명
 * 
 * ex1)
 * 예제 1번에 대해서 a와 X를 나타내보면 다음 표와 같습니다.
 * 
 * a	X
 *      []
 * 5	[5, 5, 5, 5, 5]
 * 1	[5, 5, 5, 5, 5, 1]
 * 4	[5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
 * 따라서 [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]를 return 합니다.
 * 
 * ex2) 
 * 예제 2번에 대해서 a와 X를 나타내보면 다음 표와 같습니다.
 * 
 * a	X
 *     []
 * 6	[6, 6, 6, 6, 6, 6]
 * 6	[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
 * 따라서 [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]를 return 합니다.
 * 
 * ex3)
 * 예제 2번에 대해서 a와 X를 나타내보면 다음 표와 같습니다.
 * 
 * a	X
 *      []
 * 1	[1]
 * 따라서 [1]을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * x는 빈배열 
 * 
 * arr 양의 정수 배열 [숫자형]
 * 
 * a라면 X의 맨 뒤에 a를 a번 추가 x.push(x[i]*)
 * 
 * 
 * map? reduce ? 
 * 
 */



function solution (arr) {
    return arr.reduce((acc,cur)=> acc.concat(Array(cur).fill(cur)),[]);
}

/**
 * reduce를 이용해 acc(누산기)기본 값을 배열[]로 설정한뒤,
 * 
 * 누산기에 concat 메서드를 이용해 파라미터로 전달되는 값들을 기존 배열에 합쳐서 
 * 새로운 배열로 만들어 준다.
 * 
 * Array 메서드를 이용해 현재값의 크기를 길이로 가진 배열로 만들고,
 * fill 메서드를 이용해서  노든 배열에 현재값을 배열로 채워넣는다.
 */


