/**
 * 정수 부분
 * 
 * 문제 설명
 * 
 * 실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 
 * solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 0 ≤ flo ≤ 100
 * 
 * 입출력 예시
 * 
 *   flo	  result
 *  1.42	    1
 *  69.32	   69
 * 
 * 입출력 예시 설명
 * 
 * ex1) 1.42의 정수 부분은 1입니다.
 * ex2) 69.32의 정수 부분은 69입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 소숫점 자릿수가 있는 숫자형을 정수형으로 바꾸는 매서드를 찾아보자
 * 
 * Math.floor
 */

function solution(flo) {
    return Math.floor(flo);
}


/**
 * 정수형만 추출하는 매서드는 2가지가 있다.
 * 
 * Math.floor() = 주어진 숫자를 내림하여 반환 한다!
 * Math.truc() = 소숫점 이하를 단순히 잘라버린다!
 */

