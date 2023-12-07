/**
 * 암호 해독
 * 
 * 문제 설명
 * 
 * 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 
 * 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 
해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ cipher의 길이 ≤ 1,000
 * - 1 ≤ code ≤ cipher의 길이
 * - cipher는 소문자와 공백으로만 구성되어 있습니다.
 * - 공백도 하나의 문자로 취급합니다.
 * 
 * 문제 예시
 * 
 *            cipher	        code	result
 * "dfjardstddetckdaccccdegk"	 4	   "attack"
 * "pfqallllabwaoclk"	         2	   "fallback"
 * 
 * 문제 예시 설명
 * 
 * ex1) "dfjardstddetckdaccccdegk" 의 4번째, 8번째, 12번째, 16번째, 20번째, 24번째 
 *       글자를 합친 "attack"을 return합니다.
 * ex2) "pfqallllabwaoclk" 의 2번째, 4번째, 6번째, 8번째, 10번째, 12번째, 14번째, 16번째 
 *      글자를 합친 "fallback"을 return합니다.
 */

/**
 * spread 문법 이용 할것!
 * filter를 이용해서 code의 배수에 해당하는 값을 만드시오
 * callback 함수식으로 어떤 식을 세워야 할까?- > 
 * .join 이용
 */

function solution (cipher,code) {
    return [...cipher].filter((_,i)=>(i+1)%code===0).join("");
}

/**
 * 계속해서 계산 오류가 나와,  해결방법을 찾아 보던중 인덱스에 +1을 해줘야 한다는 걸
 * 알았다. 일반적으로 code의 배수의 인덱스를 찾기 위해서는 0부터 시작하는게 아닌 
 * 1부터 시작 해야 하기 때문이다. 
 * 그래서 현제 배열 인덱스에 1을 더해주는 것이다.
 */