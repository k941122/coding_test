/**
 * qr code
 * 
 * 문제 설명
 * 
 * 두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 
 * 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 0 ≤ r < q ≤ 20
 * - r < code의 길이 ≤ 1,000
 * - code는 영소문자로만 이루어져 있습니다.
 * 
 * 입출력 예시
 * 
 * q	r	code	result
 * 3	1	"qjnwezgrpirldywt"	"jerry"
 * 1	0	"programmers"	"programmers"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 q와 r은 각각 3, 1이고 인덱스와 그 값을 q로 나눈 나머지가 
 * 잘 보이도록 표로 만들면 다음과 같습니다.
 * 
 * code	           q	j	n	w	e	z	g	r	p	i	r	l	d	y	w	t
 * index	       0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15
 * q로 나눈 나머지	0	1	2	0	1	2	0	1	2	0	1	2	0	1	2	0
 * 
 * q로 나눈 나머지가 1인 인덱스의 문자들을 앞에서부터 순서대로 이어 붙이면 "jerry"가 되므로 이를 return 합니다.
 * 
 * ex2) 예제 2번의 q와 r은 각각 1, 0이고 인덱스와 그 값을 q로 나눈 나머지가 
 * 잘 보이도록 표로 만들면 다음과 같습니다.
 * 
 * code	           p	r	o	g	r	a	m	m	e	r	s
 * index	       0	1	2	3	4	5	6	7	8	9	10
 * q로 나눈 나머지	0	0	0	0	0	0	0	0	0	0	0
 * q로 나눈 나머지가 1인 인덱스의 문자들을 앞에서부터 순서대로 이어 붙이면 
 * "programmers"가 되므로 이를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 정수 q,r 
 * 
 * code 는 문자열
 * 
 * code 배열화 시키기
 * 
 * for문 
 * 
 * if (code[i]%q ===r) {
 * answer.push()}
 * 
 * 
 */

//▼ 오류 코드
function solution (q,r,code) {
    let arr = [...code];
    let answer = [];

    for (let i = 0; i <= arr.length; i++) {
        if (code[i]%q === r) {
            answer.push(code[i]) 
        }
    }
    return answer.join("")
}

/**
 * 테스트 1
입력값 〉	3, 1, "qjnwezgrpirldywt"
기댓값 〉	"jerry"
실행 결과 〉	실행한 결괏값 ""이 기댓값 "jerry"과 다릅니다.
테스트 2
입력값 〉	1, 0, "programmers"
기댓값 〉	"programmers"
실행 결과 〉	실행한 결괏값 ""이 기댓값 "programmers"과 다릅니다.
 * 
 */


// ▼ 정답 코드

function solution (q,r,code) {
    let arr = [...code];
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (i%q === r) {
            answer.push(code[i]) 
        }
    }
    return answer.join("")
}

/**
 * 오답 코드에서 문제점은 
 * 
 * if 문 에서 code[i]는 code 배열의 i번째 값이다. 
 * 배열의 값에 q를 나눈 나머지 값을 구하는게 목적이 아니므로, 인덱스를 나타내는 i를
 * 넣는다.
 * 
 * for문을 순회하게 하는 횟수를 제한하는 i<=arr.length 는 arr 배열을 초과해서
 * 순회하게 한다. 그러므로 arr의 배열의 길이만큼 순회하게 수정 해야한다. i < arr.length
 * 
 * 
 */