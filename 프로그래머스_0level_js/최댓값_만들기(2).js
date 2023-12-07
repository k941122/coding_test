/**
 * 최댓값 만들기 2
 * 
 * 문제 설명
 * 
 * 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - -10,000 ≤ numbers의 원소 ≤ 10,000
 * - 2 ≤ numbers 의 길이 ≤ 100
 * 
 * 입출력 예시
 * 
 *        numbers	          result
 * [1, 2, -3, 4, -5]	        15
 * [0, -31, 24, 10, 1, 9]	    240
 * [10, 20, 30, 5, 5, 20, 5]	600
 * 
 * 입출력 예시 설명
 * 
 * ex1) 두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.
 * ex2) 두 수의 곱중 최댓값은 10 * 24 = 240 입니다.
 * ex3) 두 수의 곱중 최댓값은 20 * 30 = 600 입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * numbers = 정수배열
 * 
 * 정수 배열중 가장 큰 값 두개를 곱한 값을 return 하시오
 * 
 * 오름차순 배열로 만든다 sort
 * 
 * 오름 차순으로 만든 배열 중에서 맨 끝과 맨끝에서 두번째를 곱해준다.
 * -> numbers[numbers.lengh]*numbers[numbers.length-1]
 * -> 어떤 메서드를 사용해야 할까? 
 * 
 */

// ▼ 오답 코드
function solution (numbers) {
    numbers.sort((a,b)=> a-b);
    let len = numbers.length;
    let sum1 = numbers[len]*numbers[len-1];
    let sum2 = numbers[0]*numbers[1];
    return  sum1 < sum2?sum2:sum1;
}

/**
 * 결과가 null로 나왔다. 
 */

// ▼ 정답 코드

function solution (numbers) {
    numbers.sort((a,b) => a-b);
    return Math.max(numbers[0]*numbers[1],numbers[numbers.length-1*numbers[numbers.length-2]]);
}

/**
 * numbers를 sort 메서드를 이용해 오름차순 정렬을 해준다.
 * 
 * Math.max메서드를 이용해 두 계산식중 더큰 값을 return 한다.
 * 
 * number[0]과number[1]을 사용한 이유는 음수일 경우 오름차순 정렬 이기 때문에 제일 처음 index인 0과1을 사용해야 한다.
 * 
 * 그게 아니라면 제일 큰 수는 맨 뒤와 그 두번째 이기 때문에 numbers[]안에 numbers.length-1과 numbers.length-2가 들어가야 한다.
 * 왜 -1 과 -2가 들어가야 하냐면 전체 길이는 index를 측정할때 처음 index를 1부터 시작하는데, 배열의 index는 0부터 시작하기 때문이다.
 */