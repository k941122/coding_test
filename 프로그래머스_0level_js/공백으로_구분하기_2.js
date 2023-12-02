/**
 * 공백으로 구분하기 2
 * 
 * 문제 설명
 * 
 * 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, 
 * my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - my_string은 영소문자와 공백으로만 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - my_string의 맨 앞과 맨 뒤에도 공백이 있을 수 있습니다.
 * - my_string에는 단어가 하나 이상 존재합니다.
 * 
 * 입출력 예시
 * 
 *     my_string	r         esult
 * " i    love  you"	["i", "love", "you"]
 * "    programmers  "	["programmers"]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 my_string은 " i    love  you"로 공백을 기준으로 단어를 나누면 
 *      "i", "love", "you" 3개의 단어가 있습니다. 따라서 ["i", "love", "you"]를 
 *      return 합니다.
 * 
 * ex2) 예제 2번의 my_string은 "    programmers  "로 단어는 
 *      "programmers" 하나만 있습니다. 따라서 ["programmers"]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * split() 으로 구분하면 될것 같다.
 * 
 * 
 */

//▼ 오답 코드
function solution (my_string) {
    return my_string.split('');
}

/**
 * [" ","i"," "," "," "," ","l","o","v","e"," "," ","y","o","u"]
 * 
 * 모든 공백 하나하나 까지 다 요소로 출력 되었다. 
 * 다른 메서드나 방법을 생각해 봐야 겠다. 
 */
// ▼ 오답 코드 2
function solution (my_string) {
    return my_string.split('').filter((a) => a === ""? "":a);
}

/**
 * [" ","i"," "," "," "," ","l","o","v","e"," "," ","y","o","u"]
 * 
 * 위 오답 코드와 똑같이 출력 된다.
 */

// ▼ 정답 코드
function solution (my_string) {
    return my_string.split('').filter((a) => a !== "");
}

/**
 * filter의 callback 함수식을 요소의 값이 a가 아닌것만 걸러주고 새로운 배열을 만들어 
 * 달라는 식을 세웠다.
 * 
 * 
 */

// ▼ 새롭게 알아본 코드(정규표현 식)

function solution (my_string) {
    return my_string.split(/\s+/).filter(a=>a!=="");
}

/**
 * 정규 표현식 /\s+/ 을 split 메서드에 적용 시킨 것이다.
 * split("")은 각 공백을 한번씩 으로 구분 하지만 /\s+/은 중간의 각 공백을 통으로 인식하고
 * 잘라버린다.그래서 연속된 구분자를 한번만 구분하는 split 메서드의 특징에도 불구하고
 * 중간에 있는 모든 공백을 제거 한것이다.
 */