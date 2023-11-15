
//숫자비교하기

/**
 * 문제 설명
 * 정수 num1과 num2가 매개변수로 주어집니다. 
 * 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * - 0 ≤ num1 ≤ 10,000
 * - 0 ≤ num2 ≤ 10,000
 * 
 * 입출력 예시
 * num1 num2 result
 *  2	 3	  -1
 *  11	 11	   1
 *  7	 99	  -1
 * 
 * 입출력 예시 설명!
 * - ex1) num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.
 * - ex2) num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.
 * - ex3) num1이 7이고 num2가 99이므로 다릅니다. 따라서 -1을 return합니다.
 */


function solution (num1,num2) {
    if(num1 === num2) {
        return 1
    }else {
        return -1
    }
}

/**
 * 삼항연산자를 이용해 작성해 보기!
 * function solution (num1, num2) {
 *      let answer = num1 === num2 ? 1: -1;
 * }
 */

