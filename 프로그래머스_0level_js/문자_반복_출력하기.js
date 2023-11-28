/**
 * 문자 반복 출력하기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 
 * 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * - 2 ≤ my_string 길이 ≤ 5
 * - 2 ≤ n ≤ 10
 * - "my_string"은 영어 대소문자로 이루어져 있습니다.
 * 
 * 입출력 예시 
 * 
 * my_string	n	    result
 * "hello"	    3	"hhheeellllllooo"
 * 
 * 입출력 예시 설명
 * 
 * ex1) "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.
 */

/**
 * 문제 해석
 * 
 * 
 * 
 */

function solution (my_string,n) {
    let str = my_string;
    let arr = str.split("");
    console.log(arr);
    return arr.map((i)=>i*n).join("");
}

/**
 * 답이 "NaN,NaN,NaN,NaN,NaN"
 * 
 * map 콜백함수의 식에서 문제가 있는듯 하다.
 * NaN은 숫자가 아니라는 뜻 임으로 i*n 의 식이 잘못 되었다.
 * 
 * srr (my_string을 배열로 쪼갠것)의 요소는 문자형 요소 이지만 *3을 하는 순간 
 * 문자형 요소 * 정수 로 계산 돼는 순간 두 요소중 하나를 숫자로 변환 하려는 시도를 한다.
 * 
 * 이때 문자열이 숫자로 변해서 결과가 달라진다. 
 * 
 */


function solution (my_string,n) {
    let str = my_string;
    let arr = str.split("");
    console.log(arr);
    return arr.map((i)=>i.repeat(n)).join("");
}

/**
 * 각 요소를 반복 시킬때는 repeat() 이라는 메서드를 사용한다.
 * repeat 메서드는 반복 하고자 하는 요소.repeat(반복 시키길 원하는 횟수); 형식이다.
 * 
 * 문제에서 my_string의 문자 요소를 n번씩 반복 시키라고 했기 때문에,
 * i.repeat(n)형식 으로 callback함수의 식을 사용해야 한다.
 */