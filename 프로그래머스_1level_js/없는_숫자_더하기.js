/**
 * 없는 숫자 더하기
 * 
 * 문제 설명
 * 
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 
 * return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ numbers의 길이 ≤ 9
 *   0 ≤ numbers의 모든 원소 ≤ 9
 *   numbers의 모든 원소는 서로 다릅니다.
 * 
 * 
 * 입출력 예시 
 * 
 * numbers	result
 * [1,2,3,4,6,7,8,0]	14
 * [5,8,4,0,6,7,9]	6
 * 
 * 입출력 에시 설명
 * 
 * ex1) 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
 * 
 * ex2) 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
 * 
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * numbers -> 0~9까지의 숫자가 들어있는 배열
 * 
 * numbers에서 찾을수 없는 0~9까지의 숫자를 찾아 더해서 retrun 
 * 
 * 
 * 
 */

function solution(numbers) {
    let answer = 0;
    for(let i = 0; i<=9; i++) {
        if (!numbers.sort().includes(i)) answer += i;
    }
    return answer;
}

/**
 * for문을 이용해 9만큼 loop하게 한다음
 * 내부에 if문을 이용해서 조건에 numvers배열을 오름차순 한다음(오름차순을 한 이유는 위의 
 * for문의 loop가 오름차순으로 loop 진행되기 때문이다.) 해당 배열이 현제 for문의 i를 
 * 가지고 있지 않은지(numbers 앞의 ! )를 확인후 가지고 있지 않다면 answer에 현제 i를
 * answer에 누적해준다.
 */