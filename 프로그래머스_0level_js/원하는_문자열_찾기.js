
/**
 * 원하는 문자열 찾기
 * 
 * 문제 설명
 * 
 * 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. 
 * myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 
 * solution 함수를 완성해 주세요.
 * 
 * 단, 알파벳 대문자와 소문자는 구분하지 않습니다.
 * 
 * 제한사항
 * - 1 ≤ myString의 길이 ≤ 100,000
 * - 1 ≤ pat의 길이 ≤ 300
 * - myString과 pat은 모두 알파벳으로 이루어진 문자열입니다.
 * 
 * 입출력 예시
 * 
 * myString	   pat	  return
 * "AbCdEfG"  "aBc"	    1
 *  "aaAA"	  "aaaaa"	0
 * 
 * 입출력 예시 설명
 * ex1) "AbCdEfG"의 0~2번 인덱스의 문자열은 "AbC"이며, 
 * 이는 pat인 "aBc"와 같습니다. 따라서 1을 return 합니다.
 * 
 * ex2) myString의 길이가 pat보다 더 짧기 때문에 myString의 
 * 부분 문자열 중 pat와 같은 문자열이 있을 수 없습니다. 따라서 0을 return 합니다.
 * 
 */

/**
 * 문제 정리!
 * 
 * myString =알파벳으로 이루어진 문자열(string)
 * pat = myString의 연속된 부분 문자열(string)
 * 
 * pat은 myString의 일부분 연속된 문자열
 * 
 * pat이 myString의 연속된 일부분 문자열 이라면 1
 * 그게 아니라면 0
 * 
 */

//▽ 오답 
function solution01 (myString, pat) {
    let answer = 0;
    for(let i =0;i<=myString.length;i++) {
        const item = pat.slice(i,i+pat.length);
        if (item === pat) {
            answer = 1;
        }
    }
    return answer;
}

/**
 * 위 solution 01번 함수에서 나는 my_string 문자열에 pat 부분 문자열의 일치 여부를
 * 확인 하기 위해 for 반복문을 이용해 myString의 길이 만큼 반복하도록 설정후
 * 
 * const item 변수를 선언하여 myString의 문자열을 slice 메서드로 추출 하였다. 
 * 0번 부터 순서(i)에 pat 부분 문자열의 길이를 더한 만큼의 값을 할당해 주었고
 * 
 * if 문을 통해 item(변수) 와 pat 부분 문자열이 일치하면 answer에 1을 할당해주고,
 * 그게 아니라면 0을 할당해 주었다.
 * 
 * 위 코드로 작동을 하니. 
 * ex1) myString: "AbCdEfG"  pat: "aBc"
 * ex2) myString: "aaAA"  pat: "aaaaa"
 * 
 * 예제에서 ex1은 통과(0), ex2는 error(1)이 나왔다.
 * 
 * 위에서 작성된 for문이 반복되는 횟수는 myString.length 만큼인데
 * ex2는 myString이 pat 보다 길이가 짧기 때문에 myString 길이 만큼 반복하지 못해서
 * 오류가 뜨는것이다.
 */

function  solution02 (myString,pat) {
    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1:0;
}

/**
 * solution2 함수 풀이!
 * 
 * solution01에서 잘못된 코드로 예시가 작동이 되지 않아, 다른 풀이를 검색해 보니 
 * js의 내장함수인 String.includes()를 사용해야 한다고 했다. 
 * 뿐만 아니라 toLowerCase()메서드를 통해 일괄 소문자로 바꿔준뒤 작업을 해야 했고
 * myString 문자열과 pat 부분 문자열을 둘다 toLowerCase 메서드를 통해 소문자로 바꿔주고
 * myString에 includes 메서드를 이용하여 특정 배열이 있는지 없는지를 판단합니다.
 * 
 * includes 메서드 일반 괄호  안에 toLowerCase를 이용해 소문자로 바꾼 pat 부분 문자열이 있음으로
 * myString 문자열에 pat 부분 문자열이 포함되는지를 판별하고 결과를 true flase로 판별합니다.
 * if문으로 적을 필요 없이 "변수 ? true : false"  형식으로 적으면 된다. 
 */


