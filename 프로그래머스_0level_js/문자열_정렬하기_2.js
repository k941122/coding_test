/**
 * 문자열 정렬하기
 * 
 * 문제 설명
 * 
 * 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, 
 * my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 0 < my_string 길이 < 100
 * 
 * 입출력 예시
 * 
 * my_string	  result
 * "Bcad"	     "abcd"
 * "heLLo"	     "ehllo"
 * "Python"	     "hnopty"
 * 
 * 입출력 예시 설명
 * 
 * ex1) "Bcad"를 모두 소문자로 바꾸면 "bcad"이고 이를 알파벳 순으로 정렬하면 "abcd"입니다.
 * ex2) "heLLo"를 모두 소문자로 바꾸면 "hello"이고 이를 알파벳 순으로 정렬하면 "ehllo"입니다.
 * ex3) "Python"를 모두 소문자로 바꾸면 "python"이고 이를 알파벳 순으로 정렬하면 "hnopty"입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 
 * toLowerCase 
 * 
 * sort 
 * 
 */

function solution (my_string) {
    return my_string.toLowerCase().split("").sort().join("");
}

/**
 * 맨 처음에는 spread 문법으로 배열화를 시킨뒤 sort로 알파벳순 정렬을 했으나 실패를 했다.
 * 
 * 이류를 알아보니 sort() 메서드로 문자열 요소 정렬을 했을 경우 오름차순으로 정렬이 되지만,
 * 대문자를 소문자 앞으로 배치 하기 때문이었다. (유니코드 기준 정렬)
 * 
 * 그래서 먼저 문자형을 toLowerCase 메서드를 이용해 소문자로 만들고 
 * split 메서드를 이용해 배열화 시킨후 
 * sort를 이용해 오름차순 정렬을 한뒤 join을 이용해 문자형으로 다시 변환 했다.
 */