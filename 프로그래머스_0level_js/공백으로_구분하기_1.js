
/**
 * 문제 설명
 * 
 * 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 
 * 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 
 * 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * - my_string은 영소문자와 공백으로만 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - my_string의 맨 앞과 맨 뒤에 글자는 공백이 아닙니다.
 * 
 * 입출력 예시
 * 
 *     my_string	      result
 *    "i love you"	  ["i", "love", "you"]
 *    "programmers"	  ["programmers"]
 * 
 * 입출력 예시 설명
 * ex1) 예제 1번의 my_string은 "i love you"로 공백 한 칸으로 
 * 나누어진 단어들은 앞에서부터 순서대로 "i", "love", "you" 이므로 
 * ["i", "love", "you"]를 return 합니다.
 * 
 * ex2) 예제 2번의 my_string은 "programmers"로 단어가 하나만 있습니다. 
 * 따라서 ["programmers"]를 return 합니다.
 * 
 */


function solution01 (my_string) {
    let answer = [];
        const item = my_string.split(" ");
        answer += item;
    return answer;
}

/**
 * solution 함수에 const item 변수안에 my_string 문자열을 어떤 기준에 따라 분해 하는 split 매서드를
 * 사용했다. split 일반 괄호 안에 빈 공백을 의미하는 " " (공백이 있는 큰 따옴표) 를 넣어서 공백이 있으면 끊어서
 * 문자열을 분해해 빈 배열인 answer 에 재할당 하는 코드를 새웠지만 error가 생겼다.
 * 
 * 이유를 찾아보니 += 는 배열을 합치는 것이 아니라 문자열을 이어 붙이는 것이다.
 * 따라서 배열을 추가 하려면 push 를 이용해 뒤로 추가해 줘야 된다.
 */
//▽ answer.push(...item)을 이용한 답안!
function solution02 (my_string) {
    let answer = [];
        const item = my_string.split(" ");
        answer.push(...item);
    return answer;
}

//▽split() 메서드를 이용한 코드
function solution03 (my_string) {
    return my_string.split(" ");
}

/**
 * split()은 string을 일반 괄호 안에 있는 구분자를 통해 여러 개의 문자열로 나눕니다.
 * my_string 문자열에 split(" ") 공백 구분자를 통해 문자열로 나누면 공백으로 구분되어 문자열이 
 * 호출된 곳에 재할당 됩니다. 
 * 
 */



