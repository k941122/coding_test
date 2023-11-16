
//두 수의 곱

/**
 * 문제 설명
 * 
 * 정수 num1, num2가 매개변수 주어집니다. 
 * num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항 
 * - 0 ≤ num1 ≤ 100
 * - 0 ≤ num2 ≤ 100
 * 
 * 입출력 예시
 * 
 * num1	num2 result
 *  3	 4	   12
 *  27	 19	   513
 * 
 * 입ㅊ출력 예시 설명!
 * 
 * ex1) num1이 3, num2가 4이므로 3 * 4 = 12를 return합니다.
 * ex2) num1이 27, num2가 19이므로 27 * 19 = 513을 return합니다.
 * 
 * 
 */

const solution = (num1,num2) => {
    if(num1>=0||num1<=100||num2>=0||num2<=100) {
        console.log("제한 사항을 어기셨습니다!");
    }let answer = num1*num2;
    return answer;
}

// const solution = (num1,num2) => num1*num2;
// 화살표 함수에서 return 값이 하나일 경우 중괄호 생략!









