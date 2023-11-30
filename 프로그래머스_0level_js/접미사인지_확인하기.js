/**
 * 접미사인지 확인하기
 * 
 * 문제 설명
 * 
 * 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 
 * 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
 * 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을,
 *  아니면 0을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ my_string의 길이 ≤ 100
 * - 1 ≤ is_suffix의 길이 ≤ 100
 * - my_string과 is_suffix는 영소문자로만 이루어져 있습니다.
 * 
 * 입출력 예시
 * 
 * my_string	is_suffix	result
 * "banana"	       "ana"	  1
 * "banana"	       "nan"	  0
 * "banana"	       "wxyz"	  0
 * "banana"	     "abanana"	  0
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번에서 is_suffix가 my_string의 접미사이기 때문에 1을 return 합니다.
 * ex2) 예제 2번에서 is_suffix가 my_string의 접미사가 아니기 때문에 0을 return 합니다.
 * ex3) 예제 3번에서 is_suffix가 my_string의 접미사가 아니기 때문에 0을 return 합니다.
 * ex4) 예제 4번에서 is_suffix가 my_string의 접미사가 아니기 때문에 0을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 문자열 메서드를 찾자! = includes 일치하면 1 아니면 0
 * 
 */

// ▼ 
function solution (my_string,is_suffix) {
    return my_string.includes(is_suffix)? 1:0;
}

/**
 * 
 * 테스트 2
 * 입력값 〉	"banana", "nan"
 * 기댓값 〉	0
 * 실행 결과 〉	실행한 결괏값 1이 기댓값 0과 다릅니다.
 * 
 * 문자열에 대한 접미사는 특정 인덱스 부터 시작해야 된다.
 * -> includes는 아니다. 그럼 어떤 인덱스 일까?
 *    특정 인덱스 부터 추출하는 메서드를 찾아보자.-> indexOf() 메서드
 *    indexOf 에 들어갈 식 is_suffix를 my_string의 길이 - is_suffix의 길이 이다.
 * 
 */

function solution (my_string,is_suffix) {
    return my_string.indexOf(is_suffix,my_string.length-is_suffix.length) === 1? 0:1;
}

/**
 * 테스트 2 ,3을 빼고 1,2는 오답이 나왔다. 
 * 
 * 아마 === 1 부분이 
 */

// ▼ 정답
function solution(my_string, is_suffix) {
    return Number(my_string.slice(my_string.length - is_suffix.length) === is_suffix);
}

/**
 * my_stirng 문자형을 (my_string의 길이 - is_suffix의 길이) 를 잘라낸 문자열이
 * is_suffix 문자열과 일치 하는지 확인한다.
 */