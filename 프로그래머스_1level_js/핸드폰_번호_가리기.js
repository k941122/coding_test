/**
 * 핸드폰 번호 가리기
 * 
 * 문제 설명
 * 
 * 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의
 * 전화번호의 일부를 가립니다.
 * 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 
 * 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
 * 
 * 제한 조건
 * 
 * - phone_number는 길이 4 이상, 20이하인 문자열입니다.
 * 
 * 입출력 예시
 * 
 * phone_number	return
 * "01033334444"	"*******4444"
 * "027778888"	"*****8888"
 * 
 */

/**
 * 문제 해석
 * 
 * phone_number 배열로 만들어서 끝자리 부터 시작해서 -4까지만 빼고 다 * 만들기
 * 
 * 
 * 
 */

function solution(phone_number) {
    const arr = phone_number.slice(phone_number.length-4, phone_number.length);
    const answer = '*'.repeat(phone_number.length-4).concat(arr);
    return answer;
}

/**
 * 숫자형 phone_number을 slice를 이용해서 숫자형 전체 길이에서 -4를 뺀 부분부터
 * 마지막 길이 까지를 추출한뒤
 * 
 * answer 상수에서 *을 repeat 매서드를 통해 숫자형의 -4 부분 부터 끝까지 반복해준뒤
 * concat을 이용해 arr 상수에 할당된 숫자형과 *들을 합쳐준다.
 */

