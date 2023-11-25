/**
 * 문자열 뒤집기
 * 
 * 문제  설명
 * 
 * 문자열 my_string이 매개변수로 주어집니다. 
 * my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * 
 * 입출력 예시
 * 
 * my_string	return
 * "jaron"	    "noraj"
 * "bread"	    "daerb"
 * 
 * 입출력 예시 설명
 * 
 * ex1) my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
 * ex2) my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
 */

/**
 * 문제 분석
 * 
 * my_string은 문자열 이다.
 * 
 * 해당 매개변수를 뒤집을수 있는 '메서드'를 찾아야 된다.
 * 
 * 매서드를 이용하지 않고 어떻게 식을 세울수 있을지도 고민해 보자.
 * 
 */

function solution(my_string) {
    return my_string.split("").reverse().join("");
}

/**
 * my_stirng은 하나의 형태로 이루어진 객체인, 문자열 이다. 
 * 
 * my_string 문자열 객체를 알파벳 단위로 나눌려면 split() 메서드를 이용해
 * 일반 괄호 안에 넣은 기준에 따라 분할해 줍니다. 이때 알파벳 단위로 넘기기 위해서
 * 공백없는 큰 따옴표 ""를 일반괄호 안에 넣어준다.
 * 
 * split() 메서드를 사용해 하나의 문자열이 문자열 요소를 가진 배열로 만들어준 뒤
 * reverse() 메서드를 통해 배열을 반전해 줍니다. 첫번째 요소는 마지막으로, 마지막 요소는
 * 첫번째로 가게 된다.
 * 
 * 반전된 문자열 배열을 다시 하나의 객체형 문자열로 만들어 주기 위해 
 * join()메서드를 사용합니다. join 메서드의 일반괄호 () 안에 다시 배열의 요소를 모아줄
 * 공백 없는 큰 따옴표 "" 를 넣어 준다.
 * 
 * 최종적으로 my_string.split("").reverse().join(""); 형식으로 작성되게 됩니다.
 */

// ▼ for반복문을 이용한 문자열 반복하기

function solution2 (my_stirng) {
    let answer = ""
    for (let i = my_string.length -1; i >= 0; i--)  {
        answer += my_stirng[i];
    }
    return answer;
}

/**
 * 위 for 반복문은 지금까지 써왔던 방식과 다르게 반복할수록 마이너스가 되는 반복문 이다.
 * 왜냐하면 기존의 문자열을 뒤집는 내림차순 방식을 써야 하기 때문이다.
 * 
 * for문의 초기값을 설정 할때도 0이 아닌 my_string -1을 설정 했다. 
 * my_string 문자열의 마지막 index 부터 시작하기 위해서 이다.
 * 
 * 조건에서 i가 0보다 크거나 같을때 까지 반복하게 설정했다.
 * 0은 첫번째 순서를 뜻하는 index 이므로 첫번째 index까지 반복 한다는 의미 이다.
 * 
 * "i++"가 증감연산자 이고 한번 반복 하면 1씩 증가한다 라는 의미 라면,
 * "i--"는 감소연산자 이고 한번 반복 하면 1씩 감소한다 라는 의미 이다.
 * 
 * answer += my_string[i] 는 한번 반복할 때마다 해당 index의 값을 answer에 누적 시킨다
 * 라는 의미이다.
 * 
 * 위와 같은  과정을 거쳐 let answer = ""에는 my_string의 뒤집힌 문자열이 들어가게 된다.
 */