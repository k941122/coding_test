/**
 * 간단한 식 계산하기
 * 
 * 문제 설명
 * 
 * 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 
 * a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 
 * 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 0 ≤ a, b ≤ 40,000
 * - 0을 제외하고 a, b는 0으로 시작하지 않습니다.
 * 
 * 입출력 예시
 * 
 *   binomial	     result
 *  "43 + 12"	      55
 *  "0 - 7777"	     -7777
 * "40000 * 40000"	     1600000000
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 binomial은 "43 + 12"로 이 식을 계산한 결과인 43 + 12 = 55를 
 *      return 합니다.
 * 
 * ex2) 예제 2번의 binomial은 "0 - 7777"로 이 식을 계산한 결과인 0 - 7777 = -7777을 
 *      return 합니다.
 * 
 * ex3) 예제 3번의 binomial은 "40000 * 40000"으로 이 식을 계산한 결과인 
 *      40000 × 40000 = 1600000000을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * binomial = 문자열 이지만 "정수 사칙연산 정수"
 * 
 * 이 문자열을 계산한값을 return 해라.
 * 
 * 
 * 
 */

function solution (binomial) {
    return eval(binomial)
}

/**
 * 연산자를 어떻게 추출해야 될지 몰라서 해매다가, eval 이라는 메서드를 발견해서 사용했다.
 * eval은 문자형으로 표현된 js 코드를 실행해 주는 함수이다. 
 * 즉 "" 따옴표 안에 있는 함수나 식을 그대로 읽어서 실행한다는 의미이다.
 */

function solution (binomial) {
    const [a,op,b] = [...binomial];
    const operator = {
        '+': (a,b) => a+b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
    }
    return operator[op](Number(a),Number(b));
}

/**
 * eval 메서드 같은 경우 문자열에 작성된 함수와 식을 그대로 실행하기 때문에 버그나 해킹의 위험이
 * 높다는 단점이 있었다. 그래서 구조 분해 할당과 객체를 이용한 코드를 작성했다.
 * 
 * 구조 분해 할당을 이용해 binomial의 요소를 "a","op","b"로 할당 했고,
 * 
 * operator 라는 객체를 작성해서 key 값으로 문자열 연산자를 value로 해당 key값을 받으면
 * 실행될 callback 함수를 작성 했다.
 * 
 * return에서 operator 객체에서 op에 해당하는 함수를 찾고 a,b를 숫자로 변환 후 
 * 계산합니다.
 */