
/**
 * 문자열 안에 문자열
 * 
 * 문제 설명
 * 
 * 문자열 str1, str2가 매개변수로 주어집니다. 
 * str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 1 ≤ str1의 길이 ≤ 100
 * - 1 ≤ str2의 길이 ≤ 100
 * - 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.
 * 
 * 입출력 예시
 * 
 *      str1	                    str2	result
 *   "ab6CDE443fgh22iJKlmn1o"	   "6CD"	  1
 *   "ppprrrogrammers"	           "pppp"	  2
 *   "AbcAbcA"	                   "AAA"	  2
 * 
 * 입출력 예시 설명
 * 
 * ex1) "ab6CDE443fgh22iJKlmn1o" str1에 str2가 존재하므로 1을 return합니다.
 * ex2) "ppprrrogrammers" str1에 str2가 없으므로 2를 return합니다.
 * ex3) "AbcAbcA" str1에 str2가 없으므로 2를 return합니다.
 * 
 */

function solution(str1,str2) {
    return str1.includes(str2) ? 1 : 2;
}

/**
 * stsr1은 문자열 이고 str2는 str1의 부분 문자열이다.
 * 
 * str1에 str2가 부분 문자열 인지 확인 하려면 매서드 includes 를 이용하여 확인한다.
 * 이 매서드를 통해 나온 값이 true 인지 false인지 확인 하기 위해 삼항 연산자를 이용한다.
 * 
 */

function solution01 (str1,str2) {
    return str1.split(str2).lenth > 1 ? 1:2
}

/**
 *  split 메서드를 이용해서 풀기!
 * split() 매서드는 string 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
 * 
 * split 매서드를 이용해 str1의 문자열을 나누되 str2의 문자열 만큼 나눈뒤 그 길이(length)가
 * 1보다 크면 1 아니면 2를 출력한다.
 * 
 * 
 */

