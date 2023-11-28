/**
 * n 보다 커질 때 까지 더하기
 * 
 * 문제 설명
 * 
 * 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. 
 * numbers의 원소를 앞에서부터 하나씩 더하다가 
 * 그 합이 n보다 커지는 순간 이때까지 더했던 
 * 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * - 1 ≤ numbers의 길이 ≤ 100
 * - 1 ≤ numbers의 원소 ≤ 100
 * - 0 ≤ n < numbers의 모든 원소의 합
 * 
 * 입출력 예시
 * 
 *        numbers	           n	result
 * [34, 5, 71, 29, 100, 34]	  123	 139
 * [58, 44, 27, 10, 100]	  139	 239
 * 
 * 입출력 예시 설명
 * 
 * ex1)
 * 예제 1번의 numbers를 문제 설명대로 더해가는 과정을 나타내면 다음의 표와 같습니다.
 * 
 * i	numbers[i]	sum
 *                   0
 * 0	     34	     34
 * 1	     5	     39
 * 2	     71	     110
 * 3	     29	     139
 * 
 * 29를 더한 뒤에 sum 값은 139이고 n 값인 123보다 크므로 139를 return 합니다.
 * 
 * ex2) 예제 2번의 numbers의 마지막 원소 전까지의 원소를 sum에 더하면 139입니다. 
 *      139는 n 값인 139보다 크지 않고 마지막 원소인 100을 더하면 139보다 커지므로 239를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * numbers = 정수형 배열
 * 
 * n = 정수
 * 
 * 이중 반복문? 요소에 더하다가 일정 조건 n보다 커지게 되면 stop 후 return
 * 
 * 
 * 
 */

function solution (numbers , n) {
    let answer = 0;
    for (let i =0; i <= n; i++) { //아마 for문의 조건에서 요소 하나가 아닌 요소의 합이 n보다 작아야 되는 거니까 이부분이 틀린듯함 
        answer = numbers.reduce((acc,cur) => acc +cur)
    }
    return answer;
}

/**
 * 테스트 2는 통과 했으나, 테스트 1 이 통과 못됨,
 * 
 * 테스트 1
 * 입력값 〉	[34, 5, 71, 29, 100, 34], 123
 * 기댓값 〉	139
 * 실행 결과 〉	실행한 결괏값 273이 기댓값 139과 다릅니다.
 */

function solution02 (numbers , n) {
    let answer = 0;
    if (n===0) return answer;
    
    for (let i = 0; i < numbers.length; i++) {
        if (n <sum) {
            break;
        } else answer += numbers[i];
    }
    return answer;
}

/**
 * 코드 실행은 통과 했으나, 제출후 체점 하기 에서 테스트9,11 을 통과 못함
 */
answer = numbers.reduce((acc,cur) => acc +cur)
function solution03 (numbers , n) {
    let answer = 0;
    for (let i =0; i <= numbers.length; i++) {
        for (let i = answer;i<=n;i++) {
            answer += 
        }
    }
    return answer;
}