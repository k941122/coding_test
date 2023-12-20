/**
 * 그림 확대
 * 
 * 문제 설명
 * 
 * 직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 
 * 크기의 픽셀로 이루어져 있습니다. 이 그림 파일을 나타낸 문자열 배열 
 * picture과 정수 k가 매개변수로 주어질 때, 이 그림 파일을 가로 세로로 
 * k배 늘린 그림 파일을 나타내도록 문자열 배열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ picture의 길이 ≤ 20
 * - 1 ≤ picture의 원소의 길이 ≤ 20
 * - 모든 picture의 원소의 길이는 같습니다.
 * - picture의 원소는 '.'과 'x'로 이루어져 있습니다.
 * - 1 ≤ k ≤ 10
 * 
 * 입출력 예시 
 * 
 * icture	k	result
 * [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."]	2	["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]
 * ["x.x", ".x.", "x.x"]	3	["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]
 * 
 * 입출력 에시 설명
 * 
 * ex1) 예제 1번의 picture는 다음과 같습니다.
 * 
.xx...xx.
x..x.x..x
x...x...x
.x.....x.
..x...x..
...x.x...
....x....

 * 이를 가로 세로로 k배, 즉 2배 확대하면 그림 파일은 다음과 같습니다.

..xxxx......xxxx..
..xxxx......xxxx..
xx....xx..xx....xx
xx....xx..xx....xx
xx......xx......xx
xx......xx......xx
..xx..........xx..
..xx..........xx..
....xx......xx....
....xx......xx....
......xx..xx......
......xx..xx......
........xx........
........xx........

 * 따라서 ["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]를 return 합니다.
 * 
 * ex2) 예제 2번의 picture는 다음과 같습니다.

x.x
.x.
x.x

 * 이를 가로 세로로 k배, 즉 3배 확대하면 그림 파일은 다음과 같습니다.

xxx...xxx
xxx...xxx
xxx...xxx
...xxx...
...xxx...
...xxx...
xxx...xxx
xxx...xxx
xxx...xxx

 * 따라서 ["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]를 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * 문자열 배열 picture 
 * 
 * 가로 새로 k배 확대 외부 for 문 picture 길이 만큼
 * 
 * 각 문자열 -> 한 행 
 * 
 * 각 문자는 1*1 크기
 * 
 * 각행을 k배 확대 -> 내부 for문 k번 순환
 * 
 * 행 반복 -> 확대된 각행을 k번 반복 하여 세로방향 확대
 * 
 * 확대된 행들 모아 새로운 문자열 
 * 
 */

function solution(picture, k) {
    var answer = [];

    for (let i = 0; i < picture.length; i++) {

        let expand = picture[i].split('').map((v)=>v.repeat(k)).join("");

        for (let j = 0; j < k; j++) {
            answer.push(expand)
        }
    }
    return answer;
}

/**
 * 외부 for문에 picture 의 길이 만큼 순환하게 한다음 
 * 내부에 expand 변수를 만들고 picture의 원소(for문의 i값)을 배열화 한다음 
 * 해당 요소들의 값을 k번 repeat 메서드를 통해 반복 시킨다. 그리고 해당 배열을 join으로 문자열로 만든다
 * 
 * 그후 내부 for 문에서 k번 동안 answer(빈배열)에 push를 이용해 순차적으로 expand (picure의 요소를 k번 반복 시킨 문자열)
 * 을 넣는다. 
 */