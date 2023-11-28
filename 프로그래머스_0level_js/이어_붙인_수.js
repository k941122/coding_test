/**
 * 이어 붙인 수
 * 
 * 문제 설명
 * 
 * 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 
 * 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 2 ≤ num_list의 길이 ≤ 10
 * - 1 ≤ num_list의 원소 ≤ 9
 * - num_list에는 적어도 한 개씩의 짝수와 홀수가 있습니다.
 * 
 * 입출력 에시
 * 
 * num_list	         result
 * [3, 4, 5, 2, 1]	  393
 * [5, 7, 8, 3]	      581
 * 
 * 입출력 예시 설명
 * 
 * ex1) 홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 
 *      두 수의 합은 393입니다.
 * ex2) 홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8입니다. 
 *      두 수의 합은 581입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 정수 배열 num_list
 * 
 * 배열을 홀수 짝수 두가지로 나누기 num_list.filter((i)=>i%2 === 0? i : i%2 === 1? i )
 * 
 * 홀수 짝수 각 배열의 요소들을 하나의 숫자로 이어 붙이기 [971] [42] 
 * 
 * 홀수 + 짝수 배열의 요소의 값을 더해서 숫자형으로 표현하기. 971 + 42 
 * 
 */

function solution (num_list) {
    let answer = 0;
    let odd = [];
    let even = [];
    for (let i =0; i <= num_list.length; i++) {
        if (num_list[i]%2 === 0 ) {
            even.push(num_list[i])
        } else if (num_list[i]%2 === 1) {
            odd.push(num_list[i])
        }
    }
    let arr_odd = [odd.reduce((acc , cur) => acc*10+cur,0 )];
    let arr_even = [even.reduce((acc , cur) => acc*10 + cur,0)];
    answer += arr_odd.at(0) + arr_even.at(0);
    return answer;
}

/**
 * 배열을 odd 와 even 으로 나누기 위해서, 두개의 비어있는 배열을 만든후, 
 * 
 * for 반복문을 이용해 num_list의 길이 만큼 반복시키고 if문을 사용해서 홀수와 짝수를 구분 했다.
 * 
 * num_list[i]를 2로 나누면 나머지가 값이 0 이면 짝수 임으로 
 * even 배열에 push 를 이용해서 뒤에서 부터 순차적으로 짝수로 판별된 요소를 넣는다.
 * 
 * odd 배열에도 위와 같이 else if 조건식에서 홀수로 판별된 요소들을 넣어준다.
 * 
 * 완성된 odd와 even 배열의 요소들을 하나의 숫자형 요소로 묶어 주기 위해, at 메서드를 
 * 사용해 추출하고 싶은 요소의 index를 일반 괄호안에 입력후 더해준다.
 * 
 * 두개의 배열의 요소값을 더해준 값을 asnwer에 넣어주면 답이 출력된다.
 */

// 메서드를 사용한 간단한 코드

function solution02 (num_list) {
    const odd = [...(num_list+"")].map(x => Number(x)%2 === 1? x:"").join("");
    const even = [...(num_list+"")].map(x=>Number(x)%2 === 0 ? x : "").join("");
    return Number(odd) + Number(even);
}

/**
 * 두개의 배열을 만들때 spread 문법 으로 num_list의 요소들을 가져온다. 단, ""를 더해줘서
 * 문자형으로 만들어 준다.
 * 
 * map을 이용해 각 요소에 callback 함수의 조건의 식을 적용해 주는데,
 * Number(x)는 앞서 문자형으로 만들어준 num_list의 요소를 숫자형으로 바꿔 주는 메서드 이다.
 * 
 * 숫자형 으로 변환된 요소 값을 2로 나누었을때 1과 일치하면 홀수 임으로 요소를 넣어주고,
 * 아니면 공백을 넣어준다. 이 부분을 삼항 연산자 로 나타냈다.
 * 
 * 출력된 배열을 join() 메서드를 통해 모아준다. join 메서드의 일반 괄호 안에는 문자열로 묶어주는
 * 큰 따옴표 "" 를 넣어서 문자형으로 출력시켜준다.
 * 
 * return 부분에 각 배열의 이름을 Number() 메서드 안에 넣어주고 더해주면 값이 출력된다. 
 * 
 */

/**
 * 사용된 메서드! 
 * 
 * ... -> 전개 구문, spread 문법 -> 객체를 풀어서 개별 요소로 사용, 여러 요소를 하나의 배열이나 객체로 묶음
 * 
 * map() -> 해당 배열의 각 요 소에 callback 함수의 식을 적용 시켜준다. 
 * join() -> 일반 괄호 안에 있는 구분자로 배열의 각 요소들을 하나의 문자열로 묶어준다.
 * Number() -> 해당 일반 괄호 안에 있는 문자열을 숫자형 으로 바꿔준다. 
 */
