/**
 * 외계어 사전
 * 
 * 문제 설명
 * 
 * PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 
 * 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 
 * dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 
 * 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
 * - 2 ≤ spell의 크기 ≤ 10
 * - spell의 원소의 길이는 1입니다.
 * - 1 ≤ dic의 크기 ≤ 10
 * - 1 ≤ dic의 원소의 길이 ≤ 10
 * - spell의 원소를 모두 사용해 단어를 만들어야 합니다.
 * - spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
 * - dic과 spell 모두 중복된 원소를 갖지 않습니다.
 * 
 * 입출력 예시 
 * 
 *     spell	                       dic	                    result
 * ["p", "o", "s"]	    ["sod", "eocd", "qixm", "adio", "soo"]	  2
 * ["z", "d", "x"]	    ["def", "dww", "dzx", "loveaw"]	          1
 * ["s", "o", "m", "d"]	["moos", "dzx", "smm", "sunmmo", "som"]	  2
 * 
 * 입출력 예시 설명
 * 
 * ex1) "p", "o", "s" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 
 *      따라서 2를 return합니다.
 * 
 * ex2) "z", "d", "x" 를 조합해 만들 수 있는 단어 "dzx"가 dic에 존재합니다. 
 *      따라서 1을 return합니다.
 * 
 * ex3) "s", "o", "m", "d" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 
 *      따라서 2을 return합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * spell - 알파벳 배열
 * 
 * dic - 단어 배열
 * 
 * spell의 오소를 조합해 dic의 단어 요소와 각 값이 일치하면 1 아니면 2 
 * 
 * if 문 들어가야됨 
 * 
 * spell의 알파벳 요소들과 dic의 단어 요소들의 일치여부?
 * 
 * 이중 for문으로 순회 하면서 dic을 순회하고 내부 for문은 spell의 요소 길이를  순회하면서
 * 
 * if 문으로 spell 길이와 dic의 길이가 일치하지 않는걸 걸러내고 break;
 * 
 * if문으로 spell의 요소와 j가 일치 하는지를 확인해서 true 면 answer에 1을 false면2를
 * 
 */


// ▼ 오답 코드
function solution (spell, dic) {
    let answer = 0;

    for (let i = 0; i <= dic.length; i++) {
        for (let j = 0; j <= dic[i].length; j++) {

            if (spell[i] === spell[j]) {
                answer++
            }
        }
        if (spell.length !== dic[i].length) {
            break;
        }
    }
    return answer>0?1:2;
}

/**
 * 테스트 1
 * 입력값 〉	["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]
 * 기댓값 〉	2
 * 실행 결과 〉	실행한 결괏값 1이 기댓값 2과 다릅니다.
 * 테스트 2
 * 입력값 〉	["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]
 * 기댓값 〉	1
 * 실행 결과 〉	테스트를 통과하였습니다.
 * 테스트 3
 * 입력값 〉	["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"]
 * 기댓값 〉	2
 * 실행 결과 〉	실행한 결괏값 1이 기댓값 2과 다릅니다.
 * 
 * 이중 for문을 이용해 외부 for문은 dic의 길이를 순회하고
 * 내부 for문은 dic의 요소의 길이를 배열하면서 내부 for문을 돌때마다 각 문자열의 알파벳과
 * spell 배열의 알파벳 요소가 일치하는지를 보고 싶었다. 하지만 생각해 보니
 * dic 요소를 순회 할때마다 하나라도 spell의 요소와 일치하면 answer에 누적이 됨으로 
 * 틀렸다. 
 * 
 */



function solution (spell, dic) {
    const spell2 = spell.sort().join("");

    for (let value of dic) {
        if(spell2 === value.split("").sort().join("")) {
            return 1
        }
    }
    return 2
}

/**
 * 생각 해보니 해당 문제는 완벽하게 일치하는 문자열 찾기 라는 생각이 들었다.
 * 
 * 그래서  spell 배열을 spell2라는 변수에 문자열로 만들어 값으로 할당했다.
 * 이때 sort 메서드를 이용해 알파벳 순으로 정리를 했다.
 * 
 * 그리고 for of 문을 이용해 dic의 값을 순회 했는데,
 * value(요소의 값)을 split을 통해 배열로 만들고 sort 메서드를 통해 알파벳 순으로 정렬후
 * join을 통해 문자형으로 만들었다. 
 * 
 * 문자형으로 바귄 value를 if 문의 조건에 spell2(문자형으로 만든 spell배열)과 일치하는지 
 * 확인 했고, true 면 1을 아니면 2를 출력 시켰다. 
 * 
 * value를 split 한 이유는 배열로 만든다음 배열의 요소화된 알파벳들을 sort 메서드를 통해
 * 유니코드 순으로 정렬 한뒤, spell2에서 sort 메서드로 정렬된 문자형과 일치하는지를 확인하기
 * 위해서다. 
 */