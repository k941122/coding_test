/**
 * 세로 읽기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 
 * 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - my_string은 영소문자로 이루어져 있습니다.
 * - 1 ≤ m ≤ my_string의 길이 ≤ 1,000
 * - m은 my_string 길이의 약수로만 주어집니다.
 * - 1 ≤ c ≤ m
 * 
 * 입출력 에시
 * 
 *       my_string	         m	c	result
 * "ihrhbakrfpndopljhygc"	 4	2	"happy"
 * "programmers"	         1	1	"programmers"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 my_string을 한 줄에 4 글자씩 쓰면 다음의 표와 같습니다.
 * 
 * 1열	2열	3열	4열
 * i	h	r	h
 * b	a	k	r
 * f	p	n	d
 * o	p	l	j
 * h	y	g	c
 * 2열에 적힌 글자를 세로로 읽으면 happy이므로 "happy"를 return 합니다.
 * 
 * ex2) 예제 2번의 my_string은 m이 1이므로 세로로 "programmers"를 적는 것과 같고 
 *      따라서 1열에 적힌 글자를 세로로 읽으면 programmers입니다. 
 *      따라서 "programmers"를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * mystring = 문자열
 * 
 * m -> 한줄에 m글자씩 적기
 * 
 * c -> 위의 글자에서 c 열에 있는 글자 가 답이다.
 * 
 * 어떻게 식을 세우고 메서드를 찾아야 하는가?
 * 
 * 배열로 쪼게기 - 문자열을 m 단위로 나누기 -> 전체 길이에 m만큼 나누기 
 * 
 * m 만큼 나눈 문자열을 일부분 선택해서 c의 인덱스에 위치한 것을 추출하기
 * 
 * 모아주기 join
 * 
 */

function solution (my_string, m ,c) {
    return [...my_string].slice(0,Math.ceil(my_string.length / m))
                        .map((_,i)=> my_string.chatAt(i*m+c-1))
                        .join("");
}

/**
 * 문자열을 spread 문법을 통해 배열로 바꿔주고, 해당 배열을 slice를 통해 나눠 주는데,
 * slice 메서드의 매개 변수로 Math.ceil 이라는 올림 메서드를 사용해줘서 그 안의 매개변수에
 * my_strings의 길이를 m으로 나눈 값을 나누어 준다. (행의 값을 구하기)
 * 
 * 위에서 완성된 배열을 c열에 있는것을 추출 해야 하는데, 여기서 map이 쓰인다.
 * 매개변수로 비어 있는 값과 index를 받고, 문자열 메서드인 chartAt을 이용해서 
 * 매개변수에 지정된 위치의 문자를 찾아 반환한다.
 * 
 * chatAt에 지정된 범위는 i(현재위치 0부터 시작 )에 m(한 행에 들어간 글자수)를 곱해준다.
 * i*m은 각 행의 첫 번째 문자가 전체 문자열에서 몇번째 문자열 인지 계산 해준다.
 * 
 * c는 추출하고자 하는 열의 번호이다. 배열과 문자열의 인덱스는 0부터 시작 함으로,
 * c-1을 사용 해야 한다.
 * 
 * i*m (각행의 첫번째 문자의 위치)에 c-1(추출하고자 하는 행의 위치)를 더해서 
 * c번째 열에 있는 문자가 전체 문자열에서 몇번재 위치인지 계산할수 있다.
 */