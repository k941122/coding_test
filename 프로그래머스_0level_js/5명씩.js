/**
 * 5명씩
 * 
 * 문제 설명
 * 
 * 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 
 * 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 
 * 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 
 * 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.
 * 
 * 제한 사항
 * 
 * - 5 ≤ names의 길이 ≤ 30
 * - 1 ≤ names의 원소의 길이 ≤ 10
 * - names의 원소는 영어 알파벳 소문자로만 이루어져 있습니다.
 * 
 * 입출력 예시
 * 
 *                      names	                                    result
 * ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]	["nami", "vex"]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 앞에서부터 5명씩 두 그룹으로 묶을 수 있습니다. 
 * ["nami", "ahri", "jayce", "garen", "ivern"], ["vex", "jinx"] 
 * 이 두 그룹에서 가장 앞에 서있는 사람들의 이름을 담은 리스트인 
 * ["nami", "vex"]를 return합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * names =  문자형 배열
 * 
 * 임의의 문자형 배열을 5개의 index로 묶어(5 나누기) 배열을 나누기 -> 반복 while이 적합
 * 
 * 나눈 각 배열의 0 index를 return -> .slice(0);
 * 
 * 
 */

function solution (names) {
    let answer = [];
    while (names.length !== 0) {
        answer.push(names.splice(0,5)[0]);
    }
    return answer
}

/**
 * 복잡한 조건과 자주 쓰던 for문 보다는 좀더 간단한 while문이 적합하다고 생각했다.
 * 
 * while의 조건에 names의 길이가 0이 아닐때 까지 반복하라고 조건식을 넣었고,
 * 식으로 빈 배열 answer에 인덱스를 push 하기로 했다.
 * 
 * names의 배열의 index를 0~5까지 남겨둔후, [0]을 이용해 해당 배열을의 0 번째 index를
 * answer에 push 햇다.
 * 
 * 위와 같은 과정을 names의 길이가 0이 될때 까지 (while문은 names의 길이가 0이 아닐때만 실행되게 했으므로
 * 0이 되면 멈추게 된다.) 반복된다.
 */

