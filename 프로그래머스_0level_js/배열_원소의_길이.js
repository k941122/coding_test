
/**
 * 배열 원소의 길이!
 * 
 * 문제 설명
 * 문자열 배열 strlist가 매개변수로 주어집니다. 
 * strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * - 1 ≤ strlist 원소의 길이 ≤ 100
 * - strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.
 * 
 * 입출력 예시 
 * 
 *           strlist	               result
 * ["We", "are", "the", "world!"]	[2, 3, 3, 6]
 * ["I", "Love", "Programmers."]	[1, 4, 12]
 * 
 * 입출력 예시 설명
 * ex1) ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.
 * ex2) ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.
 * 
 */

function solution (strlist) {
    let answer = [];//들어온 배열이 담길 변수!
    let len = strlist.length; //배열의 길이를 측정해주는 .length 
    for (let i = 0; i < len; i++ ) { // i 는 length로 길이가 측정되 분해된? 배열요소, 즉 for문은 strlist의 배열 요소를 배열의 전체 요소 갯수 만큼 반환시키기 위해사용
         let convert = strlist[i].length; // strlist[i]는 배열의 요소 1개 이고 => 이 요소의 길이를 측정하는 Array.length를 쓴다. => 배열 요소(문자열)의 갯수를 세주는 것! 
         answer.push(convert); //for문 위에 선언된 변수 answer에 Array.push를 이용해서 위에서 선언된 con변수를 answer 변수의 값, 비어있는 배열 안에 앞에서 부터 for문 조건이 끝날때 가지 배열의 각요소 갯수를 넣어준다.
         return answer; //위의 배열 answer을 호출한 곳으로 return 해준다.
    }
}

/**
 * let answer = [];
 * 아래 for문에서 반복적으로 실행될, "strlist의 문자열 요소의 갯수"가 들어갈 "
 * 비어있는 배열([])"을 값으로 가진 변수이다.
 * 
 * let len = strlist.length;
 * 매개변수로 들어올 배열의 길이(요소의 갯수)를 구하는 식을 가진 변수이다.
 * 
 * for (let i = 0; i < len; i++) { } 
 * for 반복문을 쓰는 이유는 들어온 "배열의 요소 갯수" 만큼 반복해야 되기 때문이다. 
 * (먼저 선언된 answer 변수의 값인 비어있는 변수[]로 strlist의 문자열 요소의 갯수가 들어가야 되기 때문)
 * ※ i = index = 이 함수에서는 배열의 요소를 의미한다.
 * 
 * let con =strlist[i].length; 
 * con 이라는 변수 안에 strlist의 요소(i)의 갯수를 세는 ,length를 이용한 값을 넣었다.
 * 
 * answer.push(con);
 * 빈 배열이 값으로 매겨진 변수 answer에 
 * 변수 con(배열의 문자열 요소의 갯수를 값으로 가진) 을 배열 뒤에 push한다.
 * 
 * ▽Array.push("배열앞에 넣을 무언가");
 *  배열의 끝에 하나 이상의 요소를 추가하고, 새로운 길이를 반환한다.
 * 
 */


