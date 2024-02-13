/**
 * 시저 암호
 * 
 * 문제 설명
 * 
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 
 * 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 
 * "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 
 * s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 * 
 * 제한 조건
 * 
 * - 공백은 아무리 밀어도 공백입니다.
 * 
 * - s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
 * 
 * - s의 길이는 8000이하입니다.
 * 
 * - n은 1 이상, 25이하인 자연수입니다.
 * 
 * 입출력 예시
 * 
 * s	n	result
 * "AB"	1	"BC"
 * "z"	1	"a"
 * "a B z"	4	"e F d"
 * 
 */

/**
 * 문제 해석
 * 
 * s 문자열 n 거리
 * 
 * s를 배열화 n은 index
 * 
 * 알파벳 abc... 대문자도 abc...
 * 
 * 각 배열의 요소를 n만큼 이동한 알파벳 출력 
 * 
 * 아스키 코드값 사용
 * 
 * for 문 안의 if else 중첩
 * 
 */

function solution(s, n) {
    let answer = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] === " ") answer += " ";
        else {
            let char = s.charCodeAt(i);
            if (char <= 90){
                char += n;
                if(char>90)char -= 26;
            }
            else{
                char +=n;
                if(char>122)char -=26;
            }
            answer += String.fromCharCode(char);
        }
    }
    return answer;
}

/**
 * charCodeAt 메서드를 이용해 문자형의 유니코드 숫자값을 추출 했다.!
 * fromCharCode 메서드를 이용해 입력받은 유니코드 숫자값을 통해 문자를 return 한다.
 * 
 * for 반복문을 통해 s 문자형의 길이만큼 순회한다.
 * 
 * 맨 처음 if 문에 s의 요소갑싱 공백이라면 answer에 공백을 재할당 하고
 * 
 * 아니라면 else 안에 char 변수 값으로 s의 유니코드 값을 charCodeAt 메서드로 추출 
 * 
 * 위의 s의 요소가 대문자 라고 가정하고,해당 char의 유니코드 값이 90보다 작거나 
 * 같다면 char에 n을 더해주고 
 * 
 * 위에서 n을 더해준후 아스키코드값이 90보다 크다면  char에서 -26을 빼준다.
 * 
 * 그다음 else는 s의 요소가 소문자일 경우 char 유니코드 값에서 n을 누적시키고
 * 
 * n을 누적한 char 유니코드 값이 122를 초과할 경우 - 26을 해준다.(시저 암호를 구현 하기 위해서 사용)
 * 
 * 최종적으로 fromCharCode 메서드를 통해 계산된 char 유니코드 값을 문자형으로 변환 해서 answer로 보내준다.
 * 
 */