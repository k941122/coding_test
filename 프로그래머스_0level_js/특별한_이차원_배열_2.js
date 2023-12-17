/**
 * 특별한 이차원 배열 2
 * 
 * 문제 설명
 * 
 * 
 * 
 * 제한 사항
 * 
 * - 
 * - 
 * - 
 * 
 * 입출력 에시
 * 
 * 
 * 
 * 입출력 에시 설명
 * 
 * ex1) 
 * 
 * ex2) 
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * 이중 for문과 그안에서 외부 for에서는 각 요소를 돌고 내부 for문 에서는 이차 배열의 내부를
 * 돌고. 해당 배열에서 if 문을 이용해 arr[i][j] === arr[j][i] 를 넣자. 그러면 1 아니면 0
 * 
 * 
 * 
 */


//▼ 오답 코드
function solution (arr) {
    for (let i = 0; i <= arr.length;i++) {
        for(let j = 0;j<=arr[i].length;j++) {
            if (arr[i][j] === arr[j][i]) {
                return 1;
            } 
        }
    }
    return 0;
}

/**
 * 테스트 2
 * 입력값 〉	[[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]
 * 기댓값 〉	0
 * 실행 결과 〉	실행한 결괏값 1이 기댓값 0과 다릅니다.
 * 
 * 테스트1번은 정상출력 되었다.
 * 
 */


function solution (arr) {
    for (let i = 0; i <= arr.length;i++) {
        for(let j = 0;j<arr[i].length;j++) {
            if (arr[i][j] === arr[j][i]) {
                return 1;
            } 
        }
    }
    return 0;
}

