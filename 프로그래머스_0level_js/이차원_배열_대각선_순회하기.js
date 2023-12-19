/**
 * 이차원 배열 대각선 순회하기
 * 
 * 문제 설명
 * 
 * 2차원 정수 배열 board와 정수 k가 주어집니다.
 * 
 * i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ board의 길이 ≤ 100
 * - 1 ≤ board[i]의 길이 ≤ 100
 *   1 ≤ board[i][j] ≤ 10,000
 *   모든 board[i]의 길이는 같습니다.
 * - 0 ≤ k < board의 길이 + board[i]의 길이
 * 
 * 입출력 예시
 * 
 *                   board	                    k	result
 * [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]]	2	  8
 * 
 * 입출력 에시 설명
 * 
 * ex1) 입출력 예 #1의 board를 표로 나타내면 다음과 같습니다.
 * 
i \ j	0	1	2
0	0	1	2
1	1	2	3
2	2	3	4
3	3	4	5
 * 
 * i + j가 2보다 작거나 같은 항들의 합은 0 + 1 + 2 + 1 + 2 + 2 = 8이므로 
 * 8을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 2차원 배열 board
 * 
 * 정수 k
 * 
 * i + j <= k 
 * 
 * 모든 board[i][j] + board[i][j] 합을 return 
 * 
 * 이중 for문 사용해서 외부  i 내부 j 
 * 
 * 내부 for문 돌때마다 sum i+j
 * 
 * if 문을 이용해서 합이 k와 같아지면 
 * 
 * answer에 board의 ij 요소 누적 
 * 
 */

function solution (board,k) {
    let answer = 0;

    for (let i = 0; i<board.length;i++) {
        for(let j=0;j<board[i].length; j++) {
            const sum = i +j;
            if(sum <= k) {
                answer += board[i][j]
            }
        }
    }
    return answer;
}

/**
 * i와 j의 값을 추출하고 합하기 위해서 이중 for문을 이용했다.
 * 
 * 외부 for문에서는 borad의 길이만큼 순회 하면서 
 * 내부 for문을 돌리는데, ,내부 for문은 board의 요소의 길이만큼 순회한다.
 * 해당 내부 for문이 순회 하면서 i와j의 값을 가져와서 더한 값을 변수 sum에 값으로 매기고
 * 
 * 그 값이 k와 같아 졌는지를 확인 하기 위해 if문을 이용한다. 
 * 만약 i와j의 합의 값이 k와 같아 졌으면 answer에 해당 board의 i(board의 요소),
 * j(요소의 내부 요소들) 을 더해준다. 
 * 
 * 누적된 asnwer의 값이 답이다.
 */