/**
 * 접미사 배열
 * 
 * 문제 설명
 * 
 * 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 
 * 예를 들어, "banana"의 모든 접미사는 
 * "banana", "anana", "nana", "ana", "na", "a"입니다.
 * 문자열 my_string이 매개변수로 주어질 때, my_string의 
 * 모든 접미사를 사전순으로 정렬한 문자열 배열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - my_string은 알파벳 소문자로만 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 100
 * 
 * 입출력 예시
 * 
 *  my_string	                             result
 * "banana"	             ["a", "ana", "anana", "banana", "na", "nana"]
 * "programmers"	["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]
 * 
 * 입출력 에시 설명
 * 
 * ex1) 예제 1번의 my_string는 "banana"로 모든 접미사는 문제의 설명과 같습니다. 
 *      이를 사전순으로 정렬하면 "a", "ana", "anana", "banana", "na", "nana"이므로 
 *      ["a", "ana", "anana", "banana", "na", "nana"]를 return 합니다.
 * 
 * ex2) 예제 2번의 my_string는 "programmers"이고 모든 접미사는 
 *      "programmers", "rogrammers", "ogrammers", "grammers", "rammers", "ammers", 
 *      "mmers", "mers", "ers", "rs", "s"입니다. 
 *      이를 사전순으로 정렬한 문자열 배열 
 *      ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", 
 *      "programmers", "rammers", "rogrammers", "rs", "s"]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 접미사 = 문자열의  특정 인덱스 부터 시작하는 것
 * 
 * filter 특정 조건하에 새로운 배열을 출력
 * 
 * callback 식에 무슨 메서드 혹은 식을 쓸까? -> 인덱스 
 * 
 */

function solution (my_string) {
    return [...my_string].reduce((acc,cur ,idx,arr) => {
        const original = arr.join("");

        acc = [...acc, original.slice(idx)].sort();

        return acc;
    }, [])
}

/**
 * spread 문법을 이용해 배열을 만든후 reduce 메서드를 이용해, 매개변수로 
 * acc , cur , idx , arr 등을 추가한다.
 * 
 * 해당 매개변수들을 이용해 각 인덱스를 기준으로 추출되는 부분 문자열을 출력 해야 된다.
 * 
 * reduce 메서드 callback 내부에 original 변수를 만들어 my_string 배열을 다시 문자열로 만들고,
 * acc(누산기)에 해당 배열 값을 누적시킨다.
 * 
 * acc에 할당된 값은 spread 문법을 이용해 acc에 누적된 요소들을 분리하고,
 * original 변수에 할당된 arr을 문자열을 slice 메서드를 이용해서 original 배열의 
 * idx 인덱스 부터 시작해서 배열의 끝가지의 요소들을 새로운 배열로 만든다.
 * 
 * 마지막으로 해당 배열을 sort를 이용해 유니코드 형식으로 배치를 바꾼다.
 * 
 * 그리고 return 에 acc를 넣으면 원하는 값이 출력 된다.
 */