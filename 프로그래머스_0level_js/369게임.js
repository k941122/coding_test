/**
 * 369게임
 * 
 * 문제 설명
 * 
 * 머쓱이는 친구들과 369게임을 하고 있습니다. 
 * 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 
 * 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 
 * order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ order ≤ 1,000,000
 * 
 * 입출력 예시 
 * 
 * order	result
 * 3	1
 * 29423	2
 * 
 * 입출력 예시 설명
 * 
 * ex1) 3은 3이 1개 있으므로 1을 출력합니다.
 * ex2) 29423은 3이 1개, 9가 1개 있으므로 2를 출력합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * n 숫자형 
 * 
 * 3,6,9 이 얼마나 들어 갔는지 확인 할것
 * 
 * for문 안에 if else if 문 answer += 1
 * 
 * n을 배열화 시키기 !
 * 
 * reduce 
 * 
 */

// ▼ 오답 코드
function solution (order) {
    const num = String(order);
    const arr = Array.from(num);
    return arr.reduce((acc,cur) => {
        if (cur ==="3"&&cur==="6"&&cur==="9") {
            acc += 1
        }
    },0)
}

/**
 * 값이 undefined가 나왔다.
 */


function solution (order) {
    const num = String(order);
    const arr = Array.from(num);
    return arr.filter((v)=> ["3,","6","9"].includes(v) ).length;
}

/**
 * num 변수에 String 메서드를 이용해서 숫자열을 문자열로 바꿔준뒤
 * 
 * arr 변수의 값으로 Array.from 메서드를 이용해서 num 문자열들을 배열로 바꿔준다.
 * 
 * return 에서 arr 배열을 filter 메서드를 이용해 특정 조건에 부합하는 요소로만 출력
 * 해주는데, 배열의 요소 문자형 "3" , "6, "9" 를 포함한 배열의 요소를 includes 메서드
 * 안에 arr 배열의 요소의 값을 넣어줘서 일치하는 요소만 배열로 만들어 준다.
 * 
 * 그리고 해당 요소들의 길이를 측정하는 length 메서드를 통해 갯수를 세어준다.
 */