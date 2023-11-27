/**
 * 공배수
 * 
 * 문제 설명
 * 
 * 정수 number와 n, m이 주어집니다. 
 * number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 10 ≤ number ≤ 100
 * - 2 ≤ n, m < 10
 * 
 * 입출력의 예시
 * 
 * number	n	m	result
 *  60	    2	3	  1
 *  55	    10	5	  0
 * 
 * 입출력의 예시 설명
 * ex1) 60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.
 * ex2) 55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * number = 정수 , n = 정수 , m = 정수
 * 
 * numbers 가 n과 m의 공배수 면 1 아니면 0;
 * 
 * if문?
 * 
 * 
 */

// ▼ if문
function solution (numbers, n ,m) {
    if(numbers %n === 0 && numbers%m ===0) {
        return 1
    }return 0;
}

// ▼ 삼항연산자
function solution (numbers,n,m) {
    return numbers%n ===0 && numbers%m ===0 ? 1 :0;
}

/**
 * numbers가 n과 m의 공배수 인지 알기 위해서는 n,m을 나누면 0이 되어야 한다.
 * 
 * 먼저 n,m 조건은 두 개 이므로 if문을 써야 한다. 
 * 
 * if문의 조건식에 numbers %n === 0 && numbers%m ===0 을 써서,
 * n과m 둘다 0으로 나누어 떨어지면 공배수 임으로 1을 반환 한다고, 아니면 0을 반환하게 했다.
 * 
 * 위 if문을 더 간단한 식인 삼항연산자로 작성하여서 더 간단하게 발전 시켰다.
 */