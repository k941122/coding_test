/**
 * 캐릭터의 좌표
 * 
 * 문제 설명
 * 
 * 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 
 * 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 
 * 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 
 * [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 
 * 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 
 * 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 
 * 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.
 * 
 * 제한 사항
 * 
 * - board은 [가로 크기, 세로 크기] 형태로 주어집니다.
 * - board의 가로 크기와 세로 크기는 홀수입니다.
 * - board의 크기를 벗어난 방향키 입력은 무시합니다.
 * - 0 ≤ keyinput의 길이 ≤ 50
 * - 1 ≤ board[0] ≤ 99
 * - 1 ≤ board[1] ≤ 99
 * - keyinput은 항상 up, down, left, right만 주어집니다.
 * 
 * 입출력 예시
 * 
 *                    keyinput	                   board	result
 * ["left", "right", "up", "right", "right"]	[11, 11]	[2, 1]
 * ["down", "down", "down", "down", "down"]	      [7, 9]	[0, -4]
 * 
 * 입출력 에시 설명
 * 
 * ex1) [0, 0]에서 왼쪽으로 한 칸 오른쪽으로 한 칸 위로 한 칸 오른쪽으로 
 *      두 칸 이동한 좌표는 [2, 1]입니다.
 * 
 * ex2) [0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만 맵의 세로 
 *      크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * keyinput 요소 
 * up - [0,1]
 * down -[0,-1]
 * left - [-1,0]
 * rigth - [1,0]
 * 
 * board - 맵크기 [홀수 숫자,홀수 숫자]
 * 
 * borad의 크기를 벗어난 방향키 입력은 무시
 * 
 * 캐릭터는 board의 중앙에 위치 
 * 
 * if else if
 * 
 * board 에서 캐릭터 좌표 구하기 ? 0번 인덱스와 1번 인덱스 -1 /2
 * 
 * 
 * 
 * 
 */

function solution(keyinput, board) {
    let answer = [0, 0];

    const boardX = (board[0] - 1) / 2;
    const boardY = (board[1] - 1) / 2;

    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "up" && answer[1] < boardY) answer[1]++;
        else if (keyinput[i] === "down" && answer[1] > -boardY) answer[1]--;
        else if (keyinput[i] === "left" && answer[0] > -boardX) answer[0]--;
        else if (keyinput[i] === "right" && answer[0] < boardX) answer[0]++;
    }

    return answer;
}

/**
 * 반환해야될 좌표 값 answer을의 x,y 값을 0으로 설정하고
 * 
 * 각 board의 x와y의 이동할수 있는 제한을 걸기 위해
 * boardX 와 boardY 변수에 캐릭터가 이동할수 있는 리미트를 걸었다.
 * 리미트는 board의 x,y 값의 -1을 하고 절반으로 나눈 값이 제한되는 범위이다.
 * 
 * 그리고 keyinput의 길이만큼 순회하는 for문을 작성해서 keyinput의 요소들을 순회해 준다.
 * 
 * for문 내부에 if else if 문 으로 up down left rigth 일때 마다 
 * answer의 x , y 값을 증감 하거나 마이너스를 했다. 
 * 이때 keyinput의 요소가 up down left right 와 일치하면서 answer 의 x혹은y값이 
 * 앞서 설정한 제한 범위 내에서 움직이는지를 조건식으로 넣었다. 
 */