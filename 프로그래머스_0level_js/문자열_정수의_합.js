/**
 * 문자열 정수의 합
 * 
 * 문제 설명
 * 
 * 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 
 * 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 3 ≤ num_str ≤ 100
 * 
 * 입출력 예시
 * 
 * num_str	     result
 * "123456789"	   45
 * "1000000"	   1
 * 
 * 입출력 예시 설명
 * 
 * ex1) 문자열 안의 모든 숫자를 더하면 45가 됩니다.
 * ex2) 문자열 안의 모든 숫자를 더하면 1이 됩니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 숫자로 이루어진  문자열 num_str
 * 
 * 각 자리수 합을 return
 * 
 * 
 * 
 */

//▼ 오답
function solution (num_str) {
    return Number(...num_str).reduce((acc,cur) => acc+ cur,0);
}

/**
 * Number() 메서드와 ... spread 문법을 이용해 숫자형 배열을 만들고 
 * reduce를 이용해 모든 요소를 더하려고 했지만 실패했다.
 * 
 * TypeError: Number(...).reduce is not a function
 * 
 * 아마도 Number(...)부분에 문제가 있는것 같다.
 * 
 * Number 은 하나의 단일 숫자로 만들어주는 요소이기에 ... spread 문법 으로는 배열을 만들수
 * 없다.
 */

function solution (num_str) {
    return [...num_str].reduce((acc,cur) => acc+ Number(cur),0);
}

/**
 * 생각해 보니, [...num)str]을 이용해서 숫자를 문자형으로 가지는 배열을 만든 후,
 * reduce를 이용해서 acc에 cur을 누적 시켜 요소들의 합을 더하는데,
 * cur = 요소 임으로 요소에 문자형을 숫자형으로 변환 시켜주는 Number()를 사용하면 된다.
 */

// ▼ 더 간단한 코드

const solution = (num_str) => [...num_str].reduce((acc,cur) => acc + +cur,0);

/**
 * 정답 코드와 똑같지만 Number을 쓰지 않고 cur앞에 + 를 붙여서 작성했다.
 * 숫자를 문자형으로 가질 경우 앞에 +를 붙여주면 숫자형으로 변한다.
 */



