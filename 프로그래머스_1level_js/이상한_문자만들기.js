/**
 * 이상한 문자 만들기
 * 
 * 문제 설명
 * 
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 
 * 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 
 * 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 * 
 * 제한 사항
 * 
 * - 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
 * 
 * - 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
 * 
 * 입출력 예시
 * 
 *        s	                 return
 * "try hello world"	"TrY HeLlO WoRlD"
 * 
 * 입출력 예시 설명
 * 
 * ex1) "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
 *      각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 
 *      "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 한 문자형의 단어들을 공백을 기준으로 세개의 배열로 나누고 
 * 해당 배열의 짝수번째 인덱스의 요소값들을 대문자로 바꿔준다. 
 * 
 */

function solution(s) {
    let answer = "";
    let arr = s.split(' ');

    let str = '';
    for(let i =0;i<arr.length;i++){
        str = arr[i];
        for(let j =0; j<str.length; j++){
            if(j%2===0) {
                answer += str[j].toUpperCase();
            } else {
                answer += str[j].toLowerCase();
            }
        }
        answer += " ";
    }
    answer = answer.substr(0,answer.length-1);
    return answer;
}

/**
 * 해당 문자형을 split 메서드를 이용해서 공백을 기준으로 배열을 만들어 준뒤
 * 
 * let str에 빈 문자열을 할당한다. 그리고 for 반복문을 이용해서 해당 배열을 순회하는데
 * str을 arr의 요소와 같이 할당해 준다.
 * 
 * 그리고 이중 for문을 통해 str의 길이만큼 순회하는데 
 * 만약 해당 j값이 짝수이면 대문자로 변환하고 홀수이면 소문자로 변환한다.
 * 
 * 그리고 substr메서드를 통해 문자형 자르기를 해주는데 0번 부터 answer 의 마지막 번째 까지
 * 잘라준다. 
 */