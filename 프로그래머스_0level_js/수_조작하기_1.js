/**
 * 수 조작하기 1
 * 
 * 문제 설명
 * 
 * 정수 n과 문자열 control이 주어집니다. 
 * control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, 
 * control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
 * 
 * "w" : n이 1 커집니다.
 * "s" : n이 1 작아집니다.
 * "d" : n이 10 커집니다.
 * "a" : n이 10 작아집니다.
 * 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - -100,000 ≤ n ≤ 100,000
 * - 1 ≤ control의 길이 ≤ 100,000
 *   control은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.
 * 
 * 입출력 예시 
 * n	control	       result
 * 0	"wsdawsdassw"	-1
 * 
 * 입출력 예시 설명
 * 
 * ex1) 
 * 
 * 1. 수 n은 control에 따라 다음과 같은 순서로 변하게 됩니다.
 * 2. 0 → 1 → 0 → 10 → 0 → 1 → 0 → 10 → 0 → -1 → -2 → -1
 * 3. 따라서 -1을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * n = 정수
 * control = 문자열
 * 
 * control = ["w","a","d","a"];로 만들기
 * 
 * w = n+1 
 * 
 * a = n-1
 * 
 * s = n+10
 * 
 * d = n-10 -> map 안에 삼항 연산자 식으로 쓰면 될듯? -> 삼항 연산자가 아닌가?
 * -> 그럼 어떻게 해야 요소를 다른 요소로 바꿀수 있을까?
 * -> 삼항 연산자는 맞는데 
 * 
 * 배열의 요소들 자체를 숫자형으로 바꿔야 할것 같다. = 4 개의 문자형을 숫자형으로 (n-1..)
 * 
 * 최종적으로 reduce를 이용해 해당 배열의 요소를 다 더해주면 될것 같다.
 */

//▼ 오답 1
function solution (n,control) {
    return Array.from(control).map((x) => (x==="w")?n+1:
                                       (x==="a")?n-1:
                                       (x==="s")?n+10:
                                       (x==="d")?n-10:"")
                        .reduce((acc,cur)=>acc+cur,0);
}

/**
 * 테스트 1
 * 입력값 〉	0, "wsdawsdassw"
 * 기댓값 〉	-1
 * 실행 결과 〉	실행한 결괏값 21이 기댓값 -1과 다릅니다.
 * 
 * map 의 callback함수 식에서 삼항연산자를 이용해 x와 문자 요소가 같으면 n+1 형식으로
 * 배열의 요소를 바꾸려고 했으나 오답 처리 됬다.
 */

//▼ 오답 2
function solution (n,control) {
    return Array.from(control).map((x) => (x==="w")?n+1:
                                       (x==="s")?n-1:
                                       (x==="d")?n+10:
                                       (x==="a")?n-10:"")
                        .indexOf(control.length);
}

/**
 * 오답 1 번에서 지문을 잘못 이해한 부분을 보고, reduce 메서드를 이용해 더해주는 것에서
 * indexOf를 통해 끝부분 index를 추출 하는 것으로 바꿨다.
 * 
 * 코드 실행 테스트는 통과하나, 체점하기에서 오답처리.
 */


function solution (n, control) {
    return [...control].reduce((acc,cur)=>{
        switch(cur) {
            case "w" :
                return acc+1;
            case "s" :
                return acc-1;
            case "d" :
                return acc+10;
            case "a" :
                return acc-10;
            default :
                return acc
        }
    },n)
}

/**
 * reduce 함수를 이용해 acc(누산기),cur(현재값)을 매개변수로 주고 n을 기초값으로 설정했다.
 * callback 식으로는 switch case 문을 써서, 현제 문자열 요소를 정수n과 다른 정수를 연산자로
 * 계산한 값으로 대체한다.
 * 
 * 이 switch문은 reduce 내부에 있기 때문에 임의의 숫자 배열 control의 요소들을 순회 하면서
 * 최종적으로 변경된 acc연산자n 의 값이 출력된다.
 * 
 * 
 */