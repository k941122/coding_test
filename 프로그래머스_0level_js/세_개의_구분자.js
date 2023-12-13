/**
 * 세 개의 구분자
 * 
 * 문제 설명
 * 
 * 임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 
 * 사용해 문자열을 나누고자 합니다.
 * 
 * 예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진
 *  문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.
 * 
 * 문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 
 * 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 * 단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, 
 * return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.
 * 
 * 제한 사항
 * 
 * - 1 ≤ myStr의 길이 ≤ 1,000,000
 *   myStr은 알파벳 소문자로 이루어진 문자열 입니다.
 * 
 * 입출력 예시 
 * 
 * myStr	                     result
 * "baconlettucetomato"	["onlettu", "etom", "to"]
 * "abcd"	                      ["d"]
 * "cabab"	                     ["EMPTY"]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 문제 설명의 예시와 같습니다.
 * 
 * ex2) "c" 이전에는 "a", "b", "c" 이외의 문자가 없습니다.
 *      "c" 이후에 문자열 "d"가 있으므로 "d"를 저장합니다.
 *      따라서 ["d"]를 return 합니다.
 * 
 * ex3) "a", "b", "c" 이외의 문자가 존재하지 않습니다. 따라서 저장할 문자열이 없습니다.
 *      따라서 ["EMPTY"]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * myStr = 문자형
 * 
 * filter => callback 삼항 연산자. abc 기준으로 나누기? -> 어떤 
 * 
 * 아무것도 없으면 "EMPTY"
 * 
 */


// ▼ 오답 코드 01
function solution (myStr) {
    const arr = myStr.split('a').join('').split('b').split('c').join('').split('').filter((v)=> v.length !== 0);
    return arr.length !== 0? arr:['EMPTY'];
}

/**
 * /solution.js:2
 *    const arr = myStr.split('a').join('').split('b').split('c').join('').split('').filter((v)=> v.length !== 0);
 *        
 * TypeError: myStr.split(...).join(...).split(...).split is not a function 
 *                                            ^
 */

// ▼ 오답 코드 02

function  solution (myStr) {
    const arr = myStr.split(/[abc]/).filter((v)=>v.length !==0);
    return arr !== 0? arr:['EMPTY'];
}

/**
 * 
 * 오답 코드 01에서 저런 오류가 나온 이유는 split 메서드를 join을 한다음 연달아 사용할수
 * 없어서 그렇다. 
 * 
 * split으로 이미 배열화 시킨뒤 join을 이용해 문자형으로 바꿔준 것은, join 메서드를 이용해
 * 문자형으로 만들어 준것이기 때문에 두번째로 사용되는 split 메서드는 적용되지 않는다.
 * 
 * 그래서 정규 표현식을 이용해서 sploit의 메서드를 넣어 주었다.
 * 
 * 테스트 1, 2는 통과 했지만 테스트 3번이 오답이다.
 * 
 * 테스트 3
 * 입력값 〉	"cabab"
 * 기댓값 〉	["EMPTY"]
 * 실행 결과 〉	실행한 결괏값 []이 기댓값 ["EMPTY"]과 다릅니다.
 * 
 */


// ▼ 정답 코드

function solution (myStr) {
    const arr = myStr.split(/[a|b|c]/).filter((v)=>v.length !== 0);
    return arr.length ? arr : ["EMPTY"]
}

/**
 * 정규 표현 식에서 / / 은 해당 슬레쉬 사이에 있는 단어 혹은 요소가 있는지를 필터링 해주는 것이다.
 * | 은 OR을 뜻하는 정규 표현식이다. 
 * []은 대괄호 안의 문자를 묶어서 포함 한다는 정규 표현 식이다.
 * 
 * split 안의 정규 표현식은 a 또는 b 또는 c 라는 뜻이다. 즉 myStr 문자형 에서 a b c 
 * 알파벳을 기준으로 끊어서 배열의 요소로 만들라는 것이다.
 * 
 * 오답 코드 02 부분에서 filter 부분의 callback 이 잘못 되었는데,
 * 자꾸 테스트 3번에서 abc 사이의 요소가 없을 경우 ['EMPTY']가 아닌 [] 빈배열을 출력 했던 이유는
 * return 의 조건식이 잘못되어서 였다.
 * 
 * arr이 0이 아닌것은 배열이 0인것을 걸러내는게 아닌, 그 값 자체가 0이 아닌것을 걸러 내는 것이다.
 * 그러므로 빈 배열을 걸러내려면, arr.length (배열의 길이의 존제 유뮤)를 조건으로 하는것이 옳다.
 */

