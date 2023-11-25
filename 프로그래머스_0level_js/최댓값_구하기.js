/**
 * 
 * 최댓값 만들기 (1)
 * 
 * 문제 설명
 * 
 * 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * - 0 ≤ numbers의 원소 ≤ 10,000
 * - 2 ≤ numbers의 길이 ≤ 100
 * 
 * 입출력 예시
 * 
 * numbers	                 result
 * [1, 2, 3, 4, 5]	           20
 * [0, 31, 24, 10, 1, 9]	   744
 * 
 * 입출력 예시 설명
 * 
 * ex1) 두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
 * ex2) 두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
 * 
 */

/**
 * 문제 분석!
 * 
 * numbers는 정수를 요소로 가진 배열이다.
 * 
 * numbers 배열의 요소중 가장큰 정수와 두번째로 큰 정수를 곱한 값을 return 하라.
 * 
 * numbers 배열을 오름차순으로 정렬.
 * 내림차순 정렬한 numbers 배열중 가장 큰수와 두번째로 큰수를 추출.(뒤에서 첫번째, 두번째)
 * 그 두수를 곱한 값을 return 한다.
 * 
 */

function solution (numbers) {
    let answer = 0;
    let max1 = numbers.filter((number)=> number !== Math.max(numbers))
    let max2 = Math.max(numbers);
    answer = max1 * max2;
    return answer;
}

//null 값이 나오면서 틀렸다.

function solution3 (numbers) {
    let answer = 0;
    let num = numbers.sort((a,b) => b - a);
    answer = num[0]*num[1];
    return answer;
}

//정답! sort를 이용해 내림차순 정렬후, 인덱스 0과 1을 곱했다.