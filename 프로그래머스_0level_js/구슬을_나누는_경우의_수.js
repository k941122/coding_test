/**
 * 구슬을 나누는 경우의 수
 * 
 * 문제 설명
 * 
 * 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 
 * 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 
 * 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 
 * share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 
 * 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ balls ≤ 30
 * - 1 ≤ share ≤ 30
 * - 구슬을 고르는 순서는 고려하지 않습니다.
 * - share ≤ balls
 * 
 * 입출력 예시
 * 
 * balls	share	result
 *   3 	      2	      3
 *   5	      3	      10
 * 
 * 입출력 예시 설명
 * 
 * ex1) 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.
 * 
 * ex2) 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * balls 개의 구슬 중 share 개의 구슬을 선택하는 모든 경우의 수
 * 
 * 구슬의 총개수 balls 와 선택할 구슬의 개수 share
 * ,balls 중에서 share개를 선택할 모든 경우의 수
 * 
 * n! / (r! * (n-r)!) 조합의 수
 * 
 * 조합의 개념 -> 서로 다른 n개의 원소중에서 순서 상관없이 r개를 선택하는 경우의 수
 * 
 */

function solution(balls, share) {
    let answer = 1;

    while (share) {
        answer += balls /share;
        balls--;
        share--;
    }
    return Math.round(answer);
}

/**
 * answer 변수는 누산될 조합의 수를 저장하는 변수이다. 초기값은 1로 저장했다.
 * 
 * while 문은 share 이 0이 될때 까지 반복한다. 
 * while문이 루프하면서 answer 에 balls와 share을 나눈 값을 누적 시킨다.
 * 그러면서 ,balls 와 share을 1씩 감소시키게 했다. 
 * 
 * loop가 돌수록 share의 값또한 -1 씩 빠지기 대문에 share가 0이 되면 모든 게산이 끝난다.
 * 
 * answer을 return 할띠ㅐ Math.round를 이용해 소숫점 자리숫자를 반올림 해준뒤 return 한다.
 */