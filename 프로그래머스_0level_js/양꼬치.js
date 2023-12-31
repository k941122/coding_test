
//양꼬치

/**
 * 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
 * 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
 * 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * - 0 < n < 1,000
 * - n / 10 ≤ k < 1,000
 * - 서비스로 받은 음료수는 모두 마십니다.
 * 
 * 입출력의 예시
 * 
 *  n	 k	 result
 *  10	 3	 124,000
 *  64	 6	 768,000
 * 
 * 입출력 예시 설명
 * 
 * ex1) 10인분을 시켜 서비스로 음료수를 하나 받아 
 *      총 10 * 12000 + 3 * 2000 - 1 * 2000 = 124,000원입니다.
 * 
 * ex2) 64인분을 시켜 서비스로 음료수를 6개 받아 
 * 총 64 * 12000 + 6 * 2000 - 6 * 2000 =768,000원입니다.
 * 
 */

function solution (n,k) {
    let answer = 0;
    return n*12000 + k*2000 - Math.floor(n/10)*2000;
}

/**
 * n(양꼬치) = 12000
 * k(음료수) = 2000
 * 
 * 양꼬치 가격 + 음료수 가격 - 서비스 음료수 가격 = 총가격
 * n*12000 + k*2000 - (n/10)*2000;
 * 
 */

/**
 * ▽ 처음 풀이과정
 * function solution (n,k) {
 *   let answer = 0;
 *   return n*12000 + k*2000 - (n/10)*2000;
 * }
 * 
 * Math.floor() 메서드를 사용하지않음! 
 * 위 메서드를 사용하지 않으면 소숫점 자리 숫자 가지 나오게 되는 상황이 발생하기 때문에
 * 소숫점 자리를 땐 숫자를 출력하고 싶다면 Math.floor()의 일반 괄호안에 나누기 식을 넣어줘야함!
 * 
 */

