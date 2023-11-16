
//두 수의 합!

/**
 * 문제 설명
 * 
 * 정수 num1과 num2가 주어질 때, 
 * num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
 * 
 * 제한사항
 * - -50,000 ≤ num1 ≤ 50,000
 * - -50,000 ≤ num2 ≤ 50,000
 * 
 * 입출력 예시
 * 
 * num1	num2 result
 *  2	 3	   5
 *  100	 2	   102
 * 
 * 입출력 예시 설명!
 * 
 * ex1) num1이 2이고 num2가 3이므로 2 + 3 = 5를 return합니다.
 * ex2) num1이 100이고 num2가 2이므로 100 + 2 = 102를 return합니다.
 */


const solution = (num1,num2) => {
    if (num1>=-50000||num1<=50000||num2>=-50000||num2<=50000){
        console.log("제한사항을 확인바랍니다!")
    }let answer = num1+num2;
    return answer;
}

function solution (num1,num2) {
    if(num1>=-50000||num1<=50000||num2>=-50000||num2<=50000) {
        console.log("제한사항을 확인바랍니다!");
    }let answer = num1+num2;
    return answer;
}

/**
 * ※ 위 코드가 자꾸 오류가 나서 계속 찾아 보니 
 *    함수명 solution 이 soltuion 으로 오타가 있었음..
 *    함수명과 변수명 등.. 기타 코드들의 오타에 신경쓰고 유심히 관찰해야 함!!
 */



