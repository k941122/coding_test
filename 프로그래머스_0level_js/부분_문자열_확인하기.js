
/**
 * 부분 문자열 확인하기
 * 
 * 문제 설명
 * 
 * 부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다. 
 * 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 
 * 문자열이지만, "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.
 * 
 * 문자열 my_string과 target이 매개변수로 주어질 때, 
 * target이 문자열 my_string의 부분 문자열이라면 1을, 
 * 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ my_string의 길이 ≤ 100
 * - my_string은 영소문자로만 이루어져 있습니다.
 * - 1 ≤ target의 길이 ≤ 100
 * - target은 영소문자로만 이루어져 있습니다.
 * 
 * 입출력 예시
 * 
 * my_string	target	result
 * "banana"	    "ana"	  1
 * "banana"	    "wxyz"	  0
 * 
 * 입출력 예시 설명
 * ex1) 문제 설명과 같습니다.
 * ex2) 문제 설명과 같습니다.
 * 
 */

function solution(my_string, target) {
    let answer = 0;
    for (let i = 0;i<=my_string.length;i++) {
        const item = my_string.slice(i,i+target.length);
        if(item===target) answer = 1;
    }
    return answer;
}

/**
 * 문제 풀이
 * 
 * 부분 문자열 = 문자열에서 연속된 일부분 에 해당하는 문자열
 * ex) 문자열 "banana"
 * 
 * ana , ban , anana , banana ,n 
 * 은 모두 문자열 "banana"의 부분문자열 이지만
 * 
 * aaa , bnana , wyxz 같은 문자열은 "banana"의 문자열이 아니다.
 * 
 * my_string = 문자열
 * target = my_string의 부분 문자열
 * 
 * target이 부분문자열 일때 = 1
 * target이 부분문자열이 아닐때 = 0 
 * 
 * for 문을 이용해서 my_string 문자열열의 길이 만큼 반복한다.
 * i = 0 -> 초기값을 0으로 세팅하고 첫번째 순서인 0번부터 시작한다.
 * 조건문 에서 i 가 my_string 보다 작거나 같을때 까지 반복한다.
 * 
 * 위 for문이 한번 반복할때마다 const item 변수에 slice 매서드를 이용해 my_string의
 * 문자열을 추출한뒤 반환한다. 
 * 
 * my_string.slice(i,i+target.length) ->  i=0, 0 + target의 문자열 을 const 변수에 저장한다.
 * => my_string 문자열을 0(i)에서 i+target(my_string의 일부 문자열)의 길이 만큼 추출하기
 * 
 * 예를 들어 my_string이 "banana" 이고 target이 ana 이면 
 * 
 * 첫번째 루프에서 i = 0 이므로 item은
 * "my_string.slice(0,3)"이 되서 ban 이된다. // 일반괄호 안의 3은 i + target의 길이
 * 두번째 루프에서 i = 1 이므로 item은
 * "my_string.slice(1,4) 이므로 ana 가된다.
 * 세번째 루프에서 i = 2 이므로 item은
 * "my_string.slice(2,5)" 이므로 nan 이 된다.
 * ......
 * 
 * 이런식으로 const item에 my_string.slice()의 값이 누적되는데 
 * 아래 if문의 조건문에 일치된다면 1을 반환하고 아니라면 
 * 위에 선언된 let answer = 0 의 값이 반환된다. 
 * 
 */



