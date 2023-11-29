/**
 * 문자열 곱하기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * - 1 ≤ my_string의 길이 ≤ 100
 * - my_string은 영소문자로만 이루어져 있습니다.
 * - 1 ≤ k ≤ 100
 * 
 * 입출력 에시
 * 
 * my_string	k	    result
 * "string"	    3	  "stringstringstring"
 * "love"	    10	  "lovelovelovelovelovelovelovelovelovelove"
 * 
 * ex1) 예제 1번의 my_string은 "string"이고 이를 3번 반복한 문자열은 
 *      "stringstringstring"이므로 이를 return 합니다.
 * 
 * ex2) 예제 2번의 my_string은 "love"이고 이를 10번 반복한 문자열은 
 *      "lovelovelovelovelovelovelovelovelovelove"이므로 이를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 순수하게 문자열에 적용 시킬수 있는 메서드가 있는가?
 * 
 * 만약 위의 메서드가 없다면 ?
 * 1. 문자열을 배열로 만들어서 ->  각 알파벳으을 요소로가진 배열을 하나의 문자열을 요소로 가진 배열로 바꾸기
 *    -> 해당 배열 map 을 이용해서 반복시키기. 
 * 
 * 
 * 
 */


function solution (my_string,k) {
    return  my_string.repeat(k)
}

/**
 * 문자열을 원하는 횟수만 큼 반복 시킬수 있는 메서드는 
 * repeat 이라는 메서드가 있다. 
 * 
 * repeat() 형식으로 일반 괄호 안에 반복 시키고 싶을 만큼의 정수를 넣으면 된다.
 * String.repeat(0~무한); -> repeat 메서드의 형식이다.
 */







