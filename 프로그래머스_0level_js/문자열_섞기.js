/**
 * 문자열 섞기
 * 
 * 문제 설명
 * 
 * 길이가 같은 두 문자열 str1과 str2가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 
return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ str1의 길이 = str2의 길이 ≤ 10
 *   str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.
 * 
 * 입출력 예시
 * 
 *   str1	 str2	result
 * "aaaaa"	"bbbbb"	"ababababab"
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * str1 , 2 는 문자열 배열이다.
 * 
 * 서로 번갈아 가면서 배열을 섞어라.
 * 
 * str1. ㄹilter ? map? index 이용?
 * reduce push? 
 * 
 */

function solution (str1,str2) {
    return [...str1].reduce((acc,cur,idx) => {
        acc+=push(str1[idx]+str2[idx])
    }, [] )
}

/**
 * /solution.js:3
 *        acc+=push(str1[idx]+str2[idx])
 *       ^
 *
 * ReferenceError: push is not defined
 * 
 * push 가 적용되지 않는다. acc 자체에 push를 대입할수 없는걸가?
 * 하지만 acc 의 기본값으로 빈 배열을 설정했다.
 */

function solution (str1,str2) {
    return [...str1].map((e,i)=> e+str2[i]).join("")
}

/**
 * str1을 spread 문법을 이용해 배열화 시켜주고, map 메서드를 통해 str2요소들과 교차해 준다.
 * 
 * map의 callback 식으로 str1의 요소의 값에 str2의 요소를 더해준다.
 * 
 * map 메서드가 str1 배열의 요소들을 순회 하면서 요소 순서대로 str2의 인자를 삽입한다.
 * 
 * 마지막으로 완성된 배열을 join 메서드를 통해 문자형으로 묶어준다.
 */