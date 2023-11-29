/**
 * flag에 따라 다른 값 반환하기
 * 
 * 문제 설명
 * 
 * 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, 
 * flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * - -1,000 ≤ a, b ≤ 1,000
 * 
 * 입출력 예시
 * 
 *    a 	b	flag	result
 *   -4	    7	true	 3
 *   -4	    7	false	-11
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번에서 flag가 true이므로 a + b = (-4) + 7 = 3을 return 합니다.
 * ex2) 예제 2번에서 flag가 false이므로 a - b = (-4) - 7 = -11을 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * a 정수 b 정수 flag boolean 변수(true or false)
 * 
 * boolean이 true = a+b
 * boolean이 false = a-b
 * 
 * if문 ture === boolean a+b else a-b 
 * 
 * -> 삼항 연상자로 풀기
 * 
 */

// ▼ 정답 코드
function  solution (a,b,flag) {
    return true === boolean ? a+b:a-b;
}

/**
 * 삼항 연산자로 return 부분에 바로 조건식을 세워준 다음 삼항 연산자로 간단하게
 * 풀이 했다.
 */

//▼ 더 갈끔한 코드!!
function  solution (a,b,flag) {
    return (flag)? a+b : a-b;
}

/**
 * 이런식으로 복잡한 true === flag 형식 없이 바로 일반 괄호 안에 flag를 넣어서 
 * true false 여부에 따라서 다른 식을 계산한 값을 출력 할수 있다.
 */