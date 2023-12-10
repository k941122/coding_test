/**
 * 글자 지우기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 정수 배열 indices가 주어질 때, 
 * my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ indices의 길이 < my_string의 길이 ≤ 100
 * - my_string은 영소문자로만 이루어져 있습니다
 * - 0 ≤ indices의 원소 < my_string의 길이
 * - indices의 원소는 모두 서로 다릅니다.
 * 
 * 입출력 예시
 * 
 *      my_string	                   indices	                result
 * "apporoograpemmemprs"	[1, 16, 6, 15, 0, 10, 11, 3]	"programmers"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 my_string의 인덱스가 잘 보이도록 표를 만들면 다음과 같습니다.
 * 
 *      index	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18
 *   my_string	a	p	p	o	r	o	o	g	r	a	p	e	m	m	e	m	p	r	s
 * 
 * indices에 있는 인덱스의 글자들을 지우고 이어붙이면 "programmers"가 되므로 이를 
 * return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * my_stirng = 문자형
 * 
 * indices = 숫자형 배열
 * 
 * 문자형의 index와 일치하는 숫자형 배열들의 값을 지워라
 * 
 * index = element = delete !
 * 
 * 1. 문자형을 배열로 만든후 삭제하기.  (filter?)
 * 
 * 2. 문자형에서 삭제하기? (문자형 메서드)
 * 
 */

function solution (my_string,indices) {
    return [...my_string].filter ((_,i) => !indices.includes(i)).join("")
}

/**
 * spread 문법으로 문자형을 배열화 시키고, filter를 통해 일정 조건을 통과한 요소만 새로운 배열로 만든다.
 * 
 * filter callback 식은 매개변수로 정의되지 않은 값과 index를 받아온다.
 * 그리고 indicieds 배열에서 indcludes를 이용해 배열의 index와 일치하는 값이 있는지를 확인한다.
 * 
 * 그래서 일치하는 인덱스가 아닌것만(!) 출력해서 새로운 배열을 만든다.
 * 
 * 그 배열을 join을 이용해 다시 문자열로 만들어 준다.
 */