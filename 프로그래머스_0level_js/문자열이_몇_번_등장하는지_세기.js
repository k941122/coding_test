/**
 * 문자열이 몇 번 등장하는지 세기
 * 
 * 문제 설명
 * 
 * 문자열 myString과 pat이 주어집니다. 
 * myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ myString ≤ 1000
 * - 1 ≤ pat ≤ 10
 * 
 * 입출력 예시
 * 
 * myString	pat	result
 * "banana"	"ana"	2
 * "aaaa"	"aa"	3
 * 
 * 입출력 예시 설명
 * 
 * ex1) "banana"에서 1 ~ 3번 인덱스에서 한 번, 3 ~ 5번 인덱스에서 또 한 번 
 *      "ana"가 등장해서 총 두 번 등장합니다. 따라서 2를 return 합니다.
 * 
 * ex2) "aaaa"에서 0 ~ 2번 인덱스에서 한 번, 1 ~ 3번 인덱스에서 한 번, 
 *      2 ~ 4번 인덱스에서 한 번 "aa"가 등장해서 총 세 번 등장합니다. 따라서 3을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * myString 에서 pat가 나타나는 횟수
 * 
 * myString에 pat를 찾을수 있는 정규표현식을 찾는다.
 * 
 * 
 * match 메서드 사용 정규 표현식 사용 
 * 
 * 
 * 
 */


function solution (myString, pat) {
    let answer = 0;

    for (let i = 0; i<myString.length; i++) {
        const sub = myString.slice(i,i+pat.length);

        if (sub.length !== pat.length) break;
        if (sub === pat) answer += 1;
    }
    return answer;
}

/**
 * myString 문자열의 길이만큼 순회하는 for문 안에 
 * 
 * sub 라는 상수를 선언 한뒤 값으로 myString을 slice 메서드를 이용해서 
 * i(for문의 기본값으로 선언된)부터 i+pat.length 까지의 start,end index를
 * 잘라낸 부분 문자열을 값으로 매겨준다.
 * 
 * 이 sub 상수는 for문이 반복될 때마다 myString의 인덱스를 차레대로 순회하며 
 * 증가 되는 i 값을 베이스로, i 부터 i+pat.length 만큼의 부분 문자열을 만든다.
 * 
 * if 문을 이용해 sub(부분 문자열)의 길이와 pat의 길이가 일치하지 않으면 멈추게 하고
 * 
 * 또 다른 if 문을 선언해 sub 와 pat의 값이 같다면 answer 에 1을 누적 시킨다.
 * 
 * 이렇게 for문에서 myString의 길이만큼 순회하면서 상수 sub에 설정된 loop를 할때마다
 * 변동되는 부분 문자열과 pat 문자열을 비교해서 일치하는 부분만 answer에 누적 시키고
 * 값이 나온다.
 */