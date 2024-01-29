/**
 * 서울에서 김서방 찾기
 * 
 * 문제 설명
 * 
 * String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 
 * String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 
 * 나타나며 잘못된 값이 입력되는 경우는 없습니다.
 * 
 * 제한 사항
 * 
 * - seoul은 길이 1 이상, 1000 이하인 배열입니다.
 * 
 * - seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
 * 
 * - "Kim"은 반드시 seoul 안에 포함되어 있습니다.
 * 
 * 입출력 예시
 * 
 * seoul	            return
 * ["Jane", "Kim"]	"김서방은 1에 있다"
 * 
 */

/**
 * 문제 해석
 * 
 * string형 배열 - seoul
 * 
 * Kin이라는 값과 일치하는 요소의 index를 찾아서 
 * 
 * "김서방은 "seoul 배열의 x번째 index"에 있다"
 * 
 * 
 * 
 */

function solution(seoul) {
    const num = seoul.indexOf('Kim');
    return `김서방은 ${num}에 있다`
}

/**
 * seoul이라는 문자형 배열에서 indexOf라는 배열에서 원하는 특정 요소의 값과 일치하는
 * 인덱스를 반환해 주는 메서드를 이용하면 인덱스 넘버가 나온다.
 * 
 * 해당 인덱스 넘버를 num의 값으로 설정한뒤 return에 
 * 백틱과 ${}형식의 변수,상수,함수를 넣는 형식으로 작성해주면 된다.
 */