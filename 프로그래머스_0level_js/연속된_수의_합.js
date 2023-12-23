/**
 * 연속된 수의 합
 * 
 * 문제 설명
 * 
 * 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 
 * num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 
 * 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ num ≤ 100
 * - 0 ≤ total ≤ 1000
 * - num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
 * 
 * 입출력 예시
 * 
 * num	total	result
 * 3	12	[3, 4, 5]
 * 5	15	[1, 2, 3, 4, 5]
 * 4	14	[2, 3, 4, 5]
 * 5	5	[-1, 0, 1, 2, 3]
 * 
 * 입출력 예시 설명
 * 
 * ex1) num = 3, total = 12인 경우 [3, 4, 5]를 return합니다.
 * 
 * ex2) num = 5, total = 15인 경우 [1, 2, 3, 4, 5]를 return합니다.
 * 
 * ex3) 4개의 연속된 수를 더해 14가 되는 경우는 2, 3, 4, 5입니다.
 * 
 * ex4) 설명 생략
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * num total 정수
 * 
 * 연속된 수 num 개를 더한 값이 total
 * 
 * 해당 정수 배열을 오름차순 으로 담아 return 
 * 
 * total / num 
 * 
 * 새로만들 원소의 갯수는 num 의 갯수와 같다,
 * 
 * total / num 
 * 
 * num /2 
 * 
 * total / num - num /2
 * 
 * Math.ceil 
 * 
 * Math.floor
 * 
 */

function solution(num, total) {
    const min = Math.ceil(total / num - Math.floor(num / 2));
    return Array.from({ length: num }, (_, i) => i + min);
}

/**
 *   num은 해당 배열의 길이에 해당하고 total은 벼열의 합을 의미한다.
 * 여기서 배열에서 가장 작은 값을 구하기 우해 num과 total을 기반으로 최솟값을 계산 했다.
 * 
 * 최솟값을 구하는 공식은 total/num - num/2 인데, 해당식을 계산하면 소숫점 자리 숫자가 나온다.
 * 
 * 그래서 total/num은 Math.ceil 메서드를 이용해 소숫점 자리 숫자를 올림 처리해주고
 * num/2는 Math.floor 를 이용해 내림값을 구해줬다. 그리고 두 값을 빼주면 최솟값이 나온다.
 * 
 * 최솟값과 길이가 정해 졌으니 Array.from 메서드를이용해서 배열을 만들었다.
 * 길이는 임의의 매개변수 num 임으로 중괄호 안에 length:num 형식으로 넣어줬고
 * 배열의 값들은 해당 인덱스에 min을 더해줘서 min +1 , min +2.. 형식으로 각 요소에
 * ,min을 더해줘서 출력한다.
 */