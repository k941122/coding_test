/**
 * 모스 부호 1
 * 
 * 문제 설명
 * 
 * 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 
 * 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 
 * 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 모스부호는 다음과 같습니다.
 * 
 * morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
 * }
 * 
 * 제한 사항
 * 
 * - 1 ≤ letter의 길이 ≤ 1,000
 * - return값은 소문자입니다.
 * - letter의 모스부호는 공백으로 나누어져 있습니다.
 * - letter에 공백은 연속으로 두 개 이상 존재하지 않습니다.
 * - 해독할 수 없는 편지는 주어지지 않습니다.
 * - 편지의 시작과 끝에는 공백이 없습니다.
 * 
 * 입출력 에시
 * 
 *         letter	             result
 * ".... . .-.. .-.. ---"	    "hello"
 * ".--. -.-- - .... --- -."	"python"
 * 
 * 입출력 에시 설명
 * 
 * ex1) .... = h
 *         . = e
 *      .-.. = l
 *      .-.. = l
 *       --- = o
 * 따라서 "hello"를 return 합니다.
 * 
 * ex2) .... = h
 *         . = e
 *      .-.. = l
 *      .-.. = l
 *       --- = o
 * 따라서 "hello"를 return 합니다.
 * 
 * 
 */

/**
 * 
 * 문제 해석
 * 
 * 객체 선택? -> 
 * 
 * map 을 이용해서? 모스 부호는 공백으로 나누어져 있음
 * 
 * 
 * 
 * switch case문? 
 * 
 */

//▼ 오답 코드
function solution (letter) {
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    return letter.split("").map((v) => morse[v]).join("");
}

/**
 * 테스트 1
 * 입력값 〉	".... . .-.. .-.. ---"
 * 기댓값 〉	"hello"
 * 실행 결과 〉	실행한 결괏값 "eeeeeeteeeteettt"이 기댓값 "hello"과 다릅니다.
 * 테스트 2
 * 입력값 〉	".--. -.-- - .... --- -."
 * 기댓값 〉	"python"
 * 실행 결과 〉	실행한 결괏값 "ettetettteeeetttte"이 기댓값 "python"과 다릅니다.
 * 
 * split으로 공백 기준 배열을 만들고, map을 이용해 해당 요소들을 morse 객체의 값들로 바꿔주려고 했다.
 * 하지만 틀린 답이 나왔다.
 */


//▼ 정답 코드
function solution (letter) {
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    return letter.split(" ").map((v) => morse[v]).join("");
}

/**
 * 위의 오답과 코드를 보니 split 메서드에 공백을 표시 하기 위한 "" 큰 따옴표에 
 * 공백이 없었다. 
 * 
 * 공백을 추가하니 정상적으로 통과가 됬다.
 */