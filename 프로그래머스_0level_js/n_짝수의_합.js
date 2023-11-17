
// 짝수의 합

/**
 * 문제 설명
 * 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 
 * solution 함수를 작성해주세요.
 * 
 * 제한 사항
 * - 0 < n ≤ 1000
 * 
 * 입출력 예시
 * 
 * n  result
 * 10	30
 * 4	6
 * 
 * 입출력 예시 설명
 * 
 * ex1) n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
 * ex2) n이 4이므로 2 + 4 = 6을 return 합니다.
 * 
 * 
 */


const solution = (n) => {
    let answer =0;
    for (let i = 1; i <= n; i +=) {
        if (n/2 ===0) {
            answer += n
        }
    }
    return answer;
}





