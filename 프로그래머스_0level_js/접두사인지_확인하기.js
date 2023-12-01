/**
 * 접두사인지 확인하기
 * 
 * 문제 설명
 * 
 * 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 
 * 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
 * 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을,
 *  아니면 0을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * - 1 ≤ my_string의 길이 ≤ 100
 * - 1 ≤ is_prefix의 길이 ≤ 100
 * - my_string과 is_prefix는 영소문자로만 이루어져 있습니다.
 * 
 * 입출력 예시
 * 
 * my_string	is_prefix	result
 * "banana"	       "ban"	  1
 * "banana"	       "nan"	  0
 * "banana"	       "abcd"	  0
 * "banana"	     "bananan"	  0
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번에서 is_prefix가 my_string의 접두사이기 때문에 1을 return 합니다.
 * ex2) 예제 2번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
 * ex3) 예제 3번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
 * ex4) 예제 4번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * my_string.indexOf(is_prefix) === my_string - is prefix ? 1:0
 * 
 */

// ▼ 오답 코드
function solution (my_string,is_prefix) {
    return my_string.indexOf(is_prefix) === my_string.length - is_prefix.length ? 1:0;
}

/**
 * indexOf 메서드는 문자열이 나타난 첫번째 위치만 찾을수 있다.
 * 이 첫번째 위치와 my_string 의 길이 - is_prefix의 길이가 일치 하면 1 아니면 0을
 * 출력하게 했다.
 * 
 * 하지만 테스트 1 번과 4 번이 오답 처리 되었다.
 * 
 */

// ▼ 정답 코드
function solution (my_string,is_prefix) {
    return my_string.startsWith(is_prefix)? 1:0;
}

/**
 * 찾아보니 startsWith 라는 메서드가 있었고, 어떤 문자열이 특정 문자로 시작하는지 확인하여
 * 결과를 true or false로 반환 하는 기능을 가지고 있었다.
 * 
 * 이 메서드를 이용해 my_string의 문자열이 is_prefix로 시작하는지 여부를 확인 하고
 * 그 결과를 삼항 연산자를 통해, true 면 1 , false 면 0 으로 반환 하게 했다.
 */