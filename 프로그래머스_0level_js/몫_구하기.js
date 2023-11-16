
//몫 구하기

/**
 * 문제설명
 * 
 * 정수 num1, num2가 매개변수로 주어질 때, 
 * num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * - 0 < num1 ≤ 100 //num1은 1과 100 사이의 정수여야 한다.
 * - 0 < num1 ≤ 100 //num2은 1과 100 사이의 정수여야 한다.
 * 
 * 입출력 예시
 * 
 * num1	num2 result
 *  10	 5	   2
 *  7	 2	   3
 * 
 * 입출력 예시 설명!
 * 
 * 입출력 예시 ex1)
 * num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.
 * 입출력 예시 ex2)
 * num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.
 * 
 */

// 몫 구하기의 처음 작성한 코드. Math.floor 가 없음!
function solution(num1,num2) {
    if (num1<0||num1>100||num2<0||num2>100) {
            console.log(`입력하신 ${num1},${num2}는 제한 사항을 어기셨습니다.`);
    }
    let answer = num1 / num2;
    return answer;
}

//▲ 위 코드에서 자꾸 오류가 생겼다.

// 몫 구하기의 두번째 코드. Math.floor 사용!
function solution (num1,num2) {
    if (num1<0||num1>100||num2<0||num2>100) {
        console.log(`입력하신 ${num1},${num2}는 제한 사항을 어기셨습니다.`);
    }
    let answer = Math.floor(num1/num2); // Math.floor
    return answer;
}

// ▲ 위 코드에서 Math.floor 메서드의 일반괄호 안에 num1/num2 식을 넣었더니 통과 되었다.


