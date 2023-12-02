/**
 * 문자열 바꿔서 찾기
 * 
 * 문제 설명
 * 
 * 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. 
 * myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 
 * pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.
 * 
 * 제한 사항
 * 
 * -  ≤ myString의 길이 ≤ 100
 * - 1 ≤ pat의 길이 ≤ 10
 *   myString과 pat는 문자 "A"와 "B"로만 이루어진 문자열입니다.
 * 
 * 입출력 예시
 * 
 *  myString	pat	    result
 *  "ABBAA"	   "AABB"	  1
 *  "ABAB"	   "ABAB"	  0
 * 
 * 입출력 예시 설명
 * 
 * ex1) "ABBAA"에서 "A"와 "B"를 서로 바꾸면 "BAABB"입니다. 
 *      여기에는 부분문자열 "AABB"가 있기 때문에 1을 return 합니다.
 * 
 * ex2) "ABAB"에서 "A"와 "B"를 서로 바꾸면 "BABA"입니다. 
 *      여기에는 부분문자열 "BABA"가 없기 때문에 0을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * myString = A->B , B->A 이 바꿨을때,
 * 
 * pat 와 일치하는 부분이 있는지 체크 해야 된다. 
 * 
 * 일치하면 1 아니면 0 
 * 
 * if문! -> 삼항 연산자..!
 * 
 * 문자열 일부 숫자를 어떻게 바꾸는가?
 * 
 * 
 * 
 * 
 */

// ▼ 오답 코드
function solution (myString, pat) {
    const string = myString.split('').map((v) => v ==='A'? v+='B':v).join('');
    if(string.includes(pat)) {
        return 1
    } return 0
}

/**
 * cosnt string 이 undefined로 뜨고, 테스트 1번은 오답 테스트 2번은 정답 으로 나온다.
 * 
 */

// ▼ 정답 코드
function solution (myString, pat) {
    const string = myString.split('').map((v) => v ==='A'? 'B':'A').join('');
    if(string.includes(pat)) {
        return 1
    } return 0
}

/**
 * 위 코드에서 잘못된 부분은 map 의 callback 함수식 삼항 연산자 부분에서 v가 'A'와 일치할 경우
 * true 가 v+= 'B'가 아닌 'B'라고 써야 했었다. v의 값에 B를 더해 주는게 아닌 대체 하는 것이기 때문이다.
 */

// ▼ 좀더 간결한 코드
function solution (myString,pat) {
    return [...myString].split('').map((v) => v ==='A'?'A':'B').join('').includes(pat)? 1:0;
}

/**
 * if문 을 삼항 연산자로 대체하고 includes() 메서드를 이용해 pat를 포함하는지 여부를 조건으로 적어서
 * true = 1, false = 0 을 출력 하게 했다. 좀더 간결하고 관리 하기 쉬운 코드이다.
 */