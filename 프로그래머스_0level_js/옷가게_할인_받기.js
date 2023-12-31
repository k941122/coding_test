/**
 * 옷가게 할인 받기
 * 
 * 문제 설명
 * 
 * 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 
 * 20%를 할인해줍니다.
 * 구매한 옷의 가격 price가 주어질 때, 
 * 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * - 10 ≤ price ≤ 1,000,000
 *   price는 10원 단위로(1의 자리가 0) 주어집니다.
 * 
 * - 소수점 이하를 버린 정수를 return합니다.
 * 
 * 입출력 예시
 * 
 *  price	 result
 * 150,000	 142,500
 * 580,000	 464,000
 * 
 * 입출력 예시 설명
 * 
 * ex1) 150,000원에서 5%를 할인한 142,500원을 return 합니다.
 * ex2) 580,000원에서 20%를 할인한 464,000원을 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * price = 매개변수(임의의 숫자)
 * 
 * price <= 100000 = price * 0.05
 * 
 * price <= 300000 = price * 0.10
 * 
 * price <= 500000 price = 0.20
 * 
 */


function solution(price) {
    if (price <= 100000) {
        return price-(price * 0.05);
    } else if ( price <= 300000) {
        return price-(price * 0.10);
    } else if (price <= 500000) {
        return price-(price * 0.20);
    }
}

/**
 * 정답 오류
 * 
 * test 1) 
 * 입력값 〉	150000
 * 기댓값 〉	142500
 * 실행 결과 〉	실행한 결괏값 135000이 기댓값 142500과 다릅니다.
 * 
 * test 2)
 * 입력값 〉	580000
 * 기댓값 〉	464000
 * 실행 결과 〉	실행한 결괏값 522000이 기댓값 464000과 다릅니다.
 */

function solution(price) {
    if (500000 <= price) {
        return price *0.8;
    } else if (300000 <= price) {
        return price *0.9;
    } else if (100000 <= price) {
        return price *0.95;
    } else return  price
}

/**
 * if문의 조건문을 잘못 적었다.
 * 
 * price <= 500000 은 price가 500000보다 작거나 같을 경우 라는 의미 이고,
 * 500000 <= price 는 price가 500000보다 크거나 같을 경우 라는 의미 이다. 
 * 
 */