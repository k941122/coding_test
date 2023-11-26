
/**
 * 자릿수 더하기
 * 
 * 문제 설명
 * 
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 
 * solution 함수를 완성해주세요
 * 
 * 제한사항
 * - 0 ≤ n ≤ 1,000,000
 * 
 * 입출력 예시
 * 
 *     n	   result
 *    1234	    10
 *    930211	16
 * 
 * 입출력 예시 설명
 * 
 * ex1) 1 + 2 + 3 + 4 = 10을 return합니다.
 * ex2) 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.
 * 
 */

/**
 * 문제 분석
 * 
 * 정수 n은 정수를 요소로 가지는 배열이다.
 * 
 * 이 배열의 요소를 합한 값을 구하라는 것이다.
 * 
 * n + n + n+ n = result
 */

//▼ Type Error 코드 
 
function solution (n) {
    return n.reduce((acc,cur) => acc + cur,0);
}

/**
 * TypeError: n.reduce is not a function 이라는 오류가 뜬다.
 * 
 * 위와 같은 error가 뜬이유는 reduce 메소드는 배열에서 사용되는 메소드로,
 * n은 정수임으로 사용될수 없다. 그래서 TypeError 가 떴던 것이다.
 * 
 * 정수 n의 각 자리 숫자의 합을 구하려면 먼저 n을 배열로 만들어야 한다.
 * 위의 코드는 정수 n을 배열 n으로 변화 시키는 매서드 들이 빠져 있었다.
 * 
 */

//▼ 정답 코드

function solution02 (n) {
    return n.toString().split('').map(Number).reduce((acc, cur) => acc + cur,0);
}


/**
 * 정수 n은 배열이 아니기 때문에 배열로 만들어야 한다. 
 * toString 메서드를 이용해 문자열로 바꿔준뒤, split('')메서드를 이용해 문자열을
 * 각 요소로 분리해 문자열 배열은 만든다.
 * 그리고 map(Number)을 이용해 각 문자열 요소에 Number 이라 는 함수를 적용해, 
 * 숫자로 변환하여 새로운 배열을 만든다.
 * 
 * 그리고 숫자열 배열로 변환된 n을 reduce 매소드를 이용해서 콜백함수와 초기값 0을 
 * 매개 변수로 주고, 콜백 함수에서 acc(누산기),acc(현재값)을 매개 변수로 준뒤
 * 화살표  함수로 acc +cur (누산기에 현재 배열 요소 값을 더한다.)를 이용해서
 * 배열의 index 길이 만큼 값이 누적된다. 
 * 
 * 마지막으로 배열의 각요소(숫자)를 더해서 전체 배열의 더한 값을 반환한다.
 */