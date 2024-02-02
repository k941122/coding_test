/**
 * 부족한 금액 계산하기
 * 
 * 문제 설명
 * 
 * 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 
 * 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 
 * 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 
 * 3번째에는 300으로 요금이 인상됩니다.
 * 
 * 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 
 * 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
 * 단, 금액이 부족하지 않으면 0을 return 하세요.
 * 
 * 제한 사항
 * 
 * - 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
 * 
 * - 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
 * 
 * - 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
 * 
 * 입출력 예시
 * 
 * price	money	count	result
 * 3	     20    	4	      10
 * 
 * 입출력 예시 설명
 * 
 * ex1) 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 
 *      총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 
 *      10을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 숫자 price
 * 
 *  money-(count*price)
 * 
 */

function solution(price, money, count) {
    var answer = 0;
    for (let i = 1;i<=count;i++) {
        answer += price *i
    }
    return money > answer ? 0 : answer-money;
}

/**
 * for문을 이용해 얼마나 탔는지를 나타내는 count만큼 반복 해준 다음
 * answer에 price(가격)과 현재 순회중인 i 값을 곱한 결과를 누적 시켜준다.
 * 
 * 그리고 return 에서 answer이 money보다 작다면 0을 아니면 answer(누적된 값)에서 money를 빼준다.
 */