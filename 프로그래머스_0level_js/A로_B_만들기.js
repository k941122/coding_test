/**
 * A로 B 만들기
 * 
 * 문제 설명
 * 
 * 문자열 before와 after가 매개변수로 주어질 때, 
 * before의 순서를 바꾸어 after를 만들 수 있으면 
 * 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 0 < before의 길이 == after의 길이 < 1,000
 * - before와 after는 모두 소문자로 이루어져 있습니다.
 * 
 * 입출력 에시 
 * 
 * before	after	result
 * "olleh"	"hello"	1
 * "allpe"	"apple"	0
 * 
 * 입출력 예시 설명
 * 
 * ex1) "olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.
 * ex2) "allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.
 * 
 */

/**
 * 문제 해석
 * 
 * before.reverse() === after 삼항 연산자 true 1 false 0
 * 
 * 
 * 
 */

function solution (before,after) {
    return before.split('').sort().join() === after.split('').sort().join()? 1:0;
}

/**
 * 해당 문자열을 배열로 만든뒤 sort 메서드를 이용해 유니코드 순서대로 재비치 한뒤
 * join을 이용해서 문자열로 만들어 준다. 
 * 
 * 유니코드 순서대로 재배치된 before 과 after 문자형들을 일치하는지 비교연산자를 통해
 * 일치 여부를 계산하고 삼항 연산자를 통해 true 면 1을 false면 0을 출력 시킨다.
 */