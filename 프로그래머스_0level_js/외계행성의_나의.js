/**
 * 외계행성의 나이
 * 
 * 문제 설명
 * 
 * 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
 * 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 
 * 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 
 * 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 
 * PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - age는 자연수입니다.
 * - age ≤ 1,000
 * - PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
 * 
 * 입출력 예시
 * 
 * age	result
 * 23	"cd"
 * 51	"fb"
 * 100	"baa"
 * 
 * 입출력 예시 설명
 * 
 * ex1) age가 23이므로 "cd"를 return합니다.
 * ex2) age가 51이므로 "fb"를 return합니다.
 * ex3) age가 100이므로 "baa"를 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * a-0 b--1 ... j-9 형식으로 대치시켜 age 를 알파벳으로 변하게 하시오.
 * 
 * 객체를 반들고? map 을이용?
 * 
 * 
 */

// ▼ 정답 코드
function solution (age) {
    const string = {
        0:"a",
        1:"b",
        2:"c",
        3:"d",
        4:"e",
        5:"f",
        6:"g",
        7:"h",
        8:"i",
        9:"j"
    }
    return [...age].map(v=>string[v]).join;
}

/**
 *     return [...age].map(v=>string[v]).join;
 *                ^
 * 
 * TypeError: age is not iterable
 * 
 * age 매개변수를 배열로 만들려고 했지만, type 오류가 생겼다.
 * 오류 메세지를 보니 iterable이 아닌 값을 배열이나 문자열로 반복 하려고 할때
 * 생기는 오류라고 한다. 주로 숫자나 null undefined 인데, age는 정수 임으로 
 * age자체를 문자열로 만들어야 될것 같다.
 */

// ▼ 정답 코드
function solution (age) {
    const strings = {
        0:"a",
        1:"b",
        2:"c",
        3:"d",
        4:"e",
        5:"f",
        6:"g",
        7:"h",
        8:"i",
        9:"j"
    }
    return age.toString().split("").map(v=>strings[v]).join;
}

/**
 * age를 toString 메서드를 이용해 문자형으로 반든뒤 split 을 이용해 배열로 바꿨다.
 * 하지만 테스트 1,2,3 모두 undefined가 나왔다. 
 */


// ▼ 정답 코드
function solution (age) {
    const strings = {
        0:"a",
        1:"b",
        2:"c",
        3:"d",
        4:"e",
        5:"f",
        6:"g",
        7:"h",
        8:"i",
        9:"j"
    }
    return age.toString().split("").map(v=>strings[v]).join("");
}

/**
 * join 메서드 뒤에 ()를 빠트린체 작성해서 오류가 났다. 
 * 자잘하게 나는 오타를 주의 해야 겠다.
 */