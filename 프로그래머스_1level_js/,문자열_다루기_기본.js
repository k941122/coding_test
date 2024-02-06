/**
 * 문자열 다루기 기본
 * 
 * 문제 설명
 * 
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, 
 * solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 
 * True를 리턴하면 됩니다.
 * 
 * 제한 사항
 * 
 * - s는 길이 1 이상, 길이 8 이하인 문자열입니다.
 * 
 * - s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
 * 
 * 입출력 예시 
 * 
 * s	return
 * "a234"	false
 * "1234"	true
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * 문자열의 길이가 4or6이고 알파벳 으로만 이루어지었는 지 확인
 * 
 * if else isNaN
 * 
 */


// 오답 코드
function solution(s) {
    if ((s.length ===4 || s.slength === 6) ) {
        return isNaN(s) ? false:true;
    } else {
        return false;
    }
}

/**
 * 테스트 에서는 정답으로 나왔으나 테스트 코드 들 에서 몇개가 오답처리가 되었다.
 */

// 정답 코드

function solution(s) {
    if (s.length === 4 || s.length ===6){
        return s.split("").every(v => !isNaN(v))
    } else {
        return false;
    }
}

/**
 * isNaN 메서드 에서 문자형 "e123"의 경우 알파벳 e가 지수로 처리되서 숫자로 인식이 되었다.
 * 그래서 해당 s 문자형을 배열로 만들고 배열의 요소들이 숫자면 treu 를 반환 하게 했다.
 */