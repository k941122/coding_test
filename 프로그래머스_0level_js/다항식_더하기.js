/**
 * 다항식 더하기
 * 
 * 문제 설명
 * 
 * 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 
 * 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 
 * 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 
 * 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.
 * 
 * 제한 사항
 * 
 * - 0 < polynomial에 있는 수 < 100
 * - polynomial에 변수는 'x'만 존재합니다.
 * - polynomial은 양의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
 * - 항과 연산기호 사이에는 항상 공백이 존재합니다.
 * - 공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
 * - 하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.
 * - " + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.
 * - 0으로 시작하는 수는 없습니다.
 * - 문자와 숫자 사이의 곱하기는 생략합니다.
 * - polynomial에는 일차 항과 상수항만 존재합니다.
 * - 계수 1은 생략합니다.
 * - 결괏값에 상수항은 마지막에 둡니다.
 * - 0 < polynomial의 길이 < 50
 * 
 * 입출력 예시 
 * 
 * polynomial	result
 * "3x + 7 + x"	"4x + 7"
 * "x + x + x"	"3x"
 * 
 * 입출력 예시 설명
 * 
 * ex1) "3x + 7 + x"에서 동류항끼리 더하면 "4x + 7"입니다.
 * 
 * ex2) "x + x + x"에서 동류항끼리 더하면 "3x"입니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * 한개 이상의 항의 합으로 이루어진 식 - 다항식
 * 
 * 동류항 끼리 계산해 정리
 * 
 * 덧셈으로 이루어진 다항식 polynomial
 * 
 * 배열로 만들기 -> split
 * 
 * 배열  순회 for
 * 
 * join
 * 
 */

function solution(polynomial) {
    const splited = polynomial.split(" + ");
  
    let xArr = splited
      .filter((v) => v.includes("x"))
      .map((v) => (v.split("x")[0] ? v.split("x")[0] : 1));
  
    let constArr = splited.filter((v) => !v.includes("x"));
  
    if (xArr.length && constArr.length) {
      xArr = xArr.reduce((a, b) => +a + +b);
      constArr = constArr.reduce((a, b) => +a + +b);
      return xArr == 1 ? `x + ${constArr}` : `${xArr}x + ${constArr}`;
  
    } else {
      if (xArr.length) {
        xArr = xArr.reduce((a, b) => +a + +b);
        return xArr == 1 ? "x" : `${xArr}x`;
      }
      if (constArr.length) {
        constArr = constArr.reduce((a, b) => +a + +b);
        return constArr + "";
      }
    }
  }

  /**
   * 위에서 부터 차례대로 공백과 연산 + 를 제거한 값들만 남은 배열을 만들어 준다.
   * 
   * 해당 배열에 x가 포함된 배열중 x로 split 했을때 숫자가 나온 것들은 숫자만 반환 시켜준다.
   * 나머지는 빈값이기 때문에 1로 반환되게, 삼항 연산자로 만들어 준다.
   * 
   * constArr은 x를 포함하지 않은 상수 배열을 만든 것이다.
   * 
   * if else 문을 이용해 x항과 상수항 둘 다 값이 1개 이상 있을때 
   * 
   * x항의 합이 1인 경우 1x가 아닌 x를 리턴 해야 하므로 조건문 추가해 줬다.
   * 
   * else 에 식은 
   * if else 문 에 x항만 값이 있는 경우 와 상수항만 값이 있는 조건에 따라
   * 값을 계산후 삼항 연산자로 값을 return 해 주었다.  
   */