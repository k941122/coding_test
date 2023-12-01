/**
 * 특정한 문자를 대문자로 바꾸기
 * 
 * 문제 설명
 * 
 * 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 
 * 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 
 * 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 
 * 
 * 입출력 예시
 * 
 *   my_string	    alp	     result
 * "programmers"	"p"	  "Programmers"
 * "lowercase"	    "x"	   "lowercase"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 my_string은 "programmers"이고 alp가 "p"이므로 my_string에 
 *      모든 p를 대문자인 P로 바꾼 문자열 "Programmers"를 return 합니다.
 * 
 * ex2) 예제 2번의 alp는 "x"이고 my_string에 x는 없습니다. 
 *      따라서 "lowercase"를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * my_string = 대소문자로 이루어진 영어 문자열
 * 
 * alp = 영소문자 1글자인 문자열
 * 
 * my_string 에 alp가 속해있으면 ->대문자 바꾸기
 * map?
 */

// ▼ 정답
function solution (my_string, alp) {
    return [...my_string].map((v) => v===alp?v.toUpperCase() : v).join;
}

/**
 * my_stirng을 spread 문법을 통해 배열화 시킨후 해당 배열을 map 메서드를 이용해 
 * 각 요소의 값이 alp 와 일치하는 부분만 toUpperCase 메서드를 통해 대문자로 만들었다.
 * 일치 하지 않는 요소는 그냥 통과하게 했다. 
 * 
 * 그리고 최종적으로 나온 배열을 join("") 을 통해 요소들을 하나의 문자열로 묶어주었다.
 */

// ▼ 좀더 간단한 메서드를 이용한 코드

function solution (my_string, alp) {
    return my_string.replaceAll(alp,alp.toUpperCase());
}

/**
 * replaceAll() 문자열 메서드를 이용해서 지정한 단어 혹은 알파벳을 원하는 것으로 대체할수 있다.
 * 
 * replaceAll의 일반 괄호 안에, alp (알파벳)을 넣어서 alp인 부분을 alp.toUpperCase 를 이용해 대문자로 만든다.
 * 
 */

