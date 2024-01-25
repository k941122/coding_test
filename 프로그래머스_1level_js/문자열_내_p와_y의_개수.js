/**
 * 문자열 내 p와 y의 개수
 * 
 * 문제 설명
 * 
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 
 * 비교해 같으면 True, 다르면 False를 return 하는 
 * solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
 * 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 * 
 * 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 * 
 * 제한 사항
 * 
 * - 문자열 s의 길이 : 50 이하의 자연수
 * 
 * - 문자열 s는 알파벳으로만 이루어져 있습니다.
 * 
 * 입출력 예시
 * 
 *     s	answer
 * "pPoooyY"	true
 * "Pyy"	false
 * 
 * 입출력 예시 설명
 * 
 * ex1) 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.
 * 
 * ex2) 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
 * 
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * 대문자 소문자가 섞여있는 문자열 s => 어떻게 소문자 p와 y의 개수를 추출해 낼것인가? 
 * => for문? 
 * 
 * 
 * p의 개수 y의 개수 비교해서
 * 
 * 같으면 true
 * 
 * 아니면 false => if else 문으로 해결
 * 
 * 
 * 
 */


//오답 코드 

function solution(s){
    const p = s.split('p').length-1;
    const y = s.split('y').length-1;
    return( p === y) ? true:false
}

/**
 * 테스트 케이스 에서 오답이 나왔다.
 */

// 정답 코드

function solution(s){
    const lowerCaseS = s.toLowerCase();
    const p = lowerCaseS.split('p').length-1;
    const y = lowerCaseS.split('y').length-1;
    return( p === y) ? true:false
}

/**
 * 이 문제에서 대문자 P,Y와 소문자 p,y를 포함한 개수를 구하는 문제였다.
 * 오답 코드에서는 소문자 p,y만 구하는 코드 였기 때문에 오답처리가 되었다.
 * 그래서 정답 코드에서는 문자열 s를 toLowerCase 메서드를 이용해서 
 * 전부 소문자로 바꿔준뒤 ,split 메서드를 이용해 p와y를 추출한뒤
 * 해당 길이를 측정해서 -1을 해줬다. 
 * 
 * 이렇게 계산한 값이 같으면 true 아니면 false로 나오게 했다.
 */