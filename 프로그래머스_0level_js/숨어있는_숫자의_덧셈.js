/**
 * 숨어있는 숫자의 덧셈
 * 
 * 문제 설명
 * 
 * 문자열 my_string이 매개변수로 주어집니다. 
 * my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
 * 
 * 입출력 예시
 * 
 *   my_string	    result
 * "aAb1B2cC34oOp"	  10
 * "1a2b3c4d123"	  16
 * 
 * 입출력 예시 설명
 * 
 * ex1) "aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 
 *      따라서 1 + 2 + 3 + 4 = 10 을 return합니다.
 * 
 * ex2) "1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 
 *      따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * my_string은 소문자 대문자 숫자로 이루어짐
 * 
 * my_stirng의 각 숫자와 알파벳들을 요소로 가지는 배열로 만들기 -? [...my_string] or split('')
 * 
 * 해당 배열의 요소의 값 중에서 숫자형만 추출해서 더해주기! filter + reduce(배열의 값 합산)
 * 
 * 
 * 
 */

//▼ 틀린 코드
function solution (my_string) {
    return [...my_string].filter((ele) => ele === !isNaN(ele)? ele:"" )
    .reduce((acc,cur) => acc+cur,0);
}

/**
 * 
 * spread 문법을 이용해 my_string의 알파벳과 숫자들을 요소로 만들어 주었다.
 * 그리고 filter 메서드를 통해 배열의 요소들을 !isNaN 메서드와 같은지 비교해 주었다.
 * isNaN 메서드는 어떤 값이 NaN인지 판단 하는 기능이 있고, 숫자가 아니면 true, 숫자이면 false를 반환 한다.
 * 
 * 삼항 연산자를 이용해 ele === !isNaN(ele) 이 true이면 ele 아니면 ""공백을  나오게 했다.
 * 최종적으로 나온 배열을 reduce를 이용해 acc cur 을 매개변수로 가지는 callback에 acc +cur 식을 계산 하면
 * 답이 나올줄 알았는데 ,
 * 
 * 답이 전부다 0이 나왔다..
 * 
 */

// ▼ 정답 코드
function solution (my_string) {
    let answer = 0;
    [...my_string].map((ele) => !isNaN(ele)? answer += Number(ele) : 0)
    return answer
}

/**
 * 그래서 map 함수를 이용해서 asnwer에 값을 누적 시키는 방식으로 바꿔봤다.
 * 숫자형일 경우(!isNaN(ele)) true 면 answer += Number(ele)고 아니면 0을 return하는 식을 세운후,
 * 누적된 answer 값을 return 하면 답이 나왔다.
 */