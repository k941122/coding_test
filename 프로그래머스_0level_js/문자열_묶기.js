/**
 * 문자열 묶기
 * 
 * 문제 설명
 * 
 * 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 
 * 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ strArr의 길이 ≤ 100,000
 *   1 ≤ strArr의 원소의 길이 ≤ 30
 *   strArr의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
 * 
 * 입출력 예시 
 * 
 *            strArr	       result
 * ["a","bc","d","efg","hi"]	 2
 * 
 * 입출력 예시 설명
 * 
 * ex1) 각 문자열들을 길이에 맞게 그룹으로 묶으면 다음과 같습니다.
 * 
 *       문자열 길이	문자열 목록	개수
 *          1	        ["a","d"]	2
 *          2	        ["bc","hi"]	2
 *          3	        ["efg"]	    1
 * 
 * 개수의 최댓값은 2이므로 2를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 요소들을 묶어주기! -> 메서드 ? -> 문자열 갯수 새기 -> reduce? 
 * 
 * 배열을 돌면서 중복된 배열 끼리 누적시키기
 * 
 */

function solution (strArr) {
    const arr = strArr.map((v) => v.length);

    const result = {};
    arr.forEach((v)=> {
        result[v] = (result[v] || 0)+1;
    });
    return Math.max(...Object.values(result)); 
}

/**
 * 원본 배열을 map을 통해 각 문자열 요소의 길이의 값으로 바꾼다.
 * 
 * result 라는 빈 객체를 형상한뒤
 * forEach 반복문 을 통해 v값을 매개 변수로 받고,
 * 
 * result에 arr의 요소값들 v를 key로 설정해준뒤, 
 * result의 값이 일치 하거나 0이면 +1을 누적 시켜준다.
 * 그렇게 해서 arr 배열을 순회 하는 forEach문을 통해 result 객체를 완성시킨다.
 * 
 * return 부분에서 객체 result의 모든 value를 배열로 출력 해야 되는데, 
 * Object.values(객체이름)을 이용해서 각 key:value중 value만을 추출해 배열의 요소로 만들어 준다.
 * 
 * 그리고 해당 배열에서 Math.max 메서드로 가장 큰 요소의 값을 찾아 준다.
 * 
 * 
 */