/**
 * 문자열 내 마음대로 정렬하기
 * 
 * 문제 설명
 * 
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 
 * n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 
 * ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 
 * "u", "e", "a"로 strings를 정렬합니다.
 * 
 * 제한 조건
 * 
 * - strings는 길이 1 이상, 50이하인 배열입니다.
 * 
 * - strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
 * 
 * - strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
 * 
 * - 모든 strings의 원소의 길이는 n보다 큽니다.
 * 
 * - 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
 * 
 * 입출력 예시
 * 
 *          strings	        n	      return
 * ["sun", "bed", "car"]	1	["car", "bed", "sun"]
 * ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
 * 
 * 입출력 예시 설명
 * 
 * ex1) "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 
 *      이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.
 * 
 * ex2) "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 
 *      따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 
 *      사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 배열의 요소의 가운데 값  순으로 오름차순 배열을 하여라 
 * 
 * sort? 
 * 
 */

function solution(strings, n) {
    return result = strings.sort((a,b) => {
        if (a[n] < b[n]) return -1;
        else if(a[n] > b[n]) return 1;
        else{
            if(a<b) return -1;
            else if (a >b) return 1;
            else return 0;
        }
    });

    return result;
}

/**
 * sort 를 이용해 strings 배열을 정렬한다. 
 * 
 * 여기서 sort 메서드 콜백함수 안에 if else if 문을 써서 
 * 각 요소들의  n번째 알파벳을 비교하고 그 순서대로 정렬한다 
 * 
 * 만약 두 배열의 알파벳이 같은 경우 else문에 if else if 문을 한번더 사용해서
 * 이번에는 사전순으로 배열한다.
 */