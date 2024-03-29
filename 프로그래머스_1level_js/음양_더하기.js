/**
 * 음양 더하기
 * 
 * 문제 설명
 * 
 * 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 
 * absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 
 * 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - absolutes의 길이는 1 이상 1,000 이하입니다.
 *   absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
 * 
 * - signs의 길이는 absolutes의 길이와 같습니다.
 *   signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
 * 
 * 입출력 예시
 * 
 * absolutes	signs	           result
 * [4,7,12]	    [true,false,true]	9
 * [1,2,3]	    [false,false,true]	0
 * 
 * 입출력 예시 설명
 * 
 * ex1) signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
 *      따라서 세 수의 합인 9를 return 해야 합니다.
 * 
 * ex2) signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
 *      따라서 세 수의 합인 0을 return 해야 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * absolutes 배열에서 해당 요소의 수와 sign의 booelan 값을 비교하고
 *  true 면 양수 false면 음수
 * 
 * 
 * absolutes의 길이만큼 반복해서 (요소들을 순회)
 * 
 * 각 absolutes 요소들의 값이 sign의 true 면 1곱하기 false면 -1 곱하기
 * 
 * 
 * 
 */

function solution(absolutes, signs) {
    let answer = 0;
    for(let i =0; i < absolutes.length; i++) {
        answer += absolutes[i]*(signs[i]?1:-1);
    }
    return answer;
}

/**
 * for 문을 이용해서 absolutes의 길이만큼 순회 해 주는데
 * for 문 내부에 answer 부분에 += 을 통해 absolutes의 현재 요소값과 signs의 현재 요소값을 곱해준다.
 * 여기서 signs 배열의 요소가 true면 1 false면 -1을 retrun 하면
 * sign이 1또는 -1이 되는데 이 결과값을 absolutes의 현재 요소값에 곱해주면 
 * 양수 혹은 음수가 된다.
 * 
 * 계단된 위의 값을 answer에 누적 시켜주면 답이 나온다. 
 */