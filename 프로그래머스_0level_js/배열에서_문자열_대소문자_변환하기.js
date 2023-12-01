/**
 * 배열에서 문자열 대소문자 변환하기
 * 
 * 문제 설명
 * 
 * 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 
 * 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 
 * 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 
 * solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * - 1 ≤ strArr ≤ 20
 *   1 ≤ strArr의 원소의 길이 ≤ 20
 *   strArr의 원소는 알파벳으로 이루어진 문자열 입니다.
 * 
 * 입출력 예시
 * 
 *        strArr	                    result
 * ["AAA","BBB","CCC","DDD"]	["aaa","BBB","ccc","DDD"]
 * ["aBc","AbC"]	                 ["abc","ABC"]
 * 
 * 입출력 예시 설명
 * 
 * ex1)
 * strArr[0]과 strArr[2]는 짝수번째 인덱스의 문자열이므로 
 * 모두 소문자로 바꿔서 "aaa"와 "ccc"가 됩니다.
 * 
 * strArr[1]과 strArr[3]는 홀수번째 인덱스의 문자열인데 
 * 원래 대문자이므로 그대로 둡니다.
 * 
 * 따라서 ["aaa","BBB","ccc","DDD"]를 return 합니다.
 * 
 * ex2)
 * strArr[0]은 짝수번째 인덱스의 문자열이므로 소문자로 바꿔서 "abc"가 됩니다.
 * 
 * strArr[1]은 홀수번째 인덱스의 문자열이므로 대문자로 바꿔서 "ABC"가 됩니다.
 * 
 * 따라서 ["abc","ABC"]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 문자열 배열 = strArr
 * 
 * index%2 !== 0
 * 
 * strArr[i].toUpperCase
 * 
 * index%2 === 0
 * 
 * strArr[i].toLowerCase
 * 
 * -> map
 * 
 */

// ▼ 오답 코드
function solution (strArr) {
    return strArr.map((i) => i%2 !==0? i.toUpperCase() : i.toLowerCase);
}

/**
 * 전부다 대문자 문자열로 요소들이 바뀌어서 출력되었다.
 * 
 */

//▼ 정답 코드
function solution (strArr) {
    return strArr.map((v,index) => index%2 !==0? v.toUpperCase() : v.toLowerCase);
}

/**
 * map 을 이용할때 index 번호를 인식한 다음 값을 바꾸는 것이기 때문에 
 * map의 매개변수를 하나만 사용할게 아니라 두 개다 이용해야 한다.
 * 
 * v,index 를 callback의 매개변수로 넣고 
 * index를 2로 나눈뒤 나머지 값이 0과 일치하지 않는 것은 홀수 임으로
 * true 는 v(값)을 대문자로 만들고 false는 v(값)을 소문자로 만든다.
 */

