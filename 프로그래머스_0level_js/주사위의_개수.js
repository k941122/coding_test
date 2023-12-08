/**
 * 주사위의 개수
 * 
 * 문제 설명
 * 
 * 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 
 * 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 
 * 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
 * 상자에 들어갈 수 있는 주사위의 최대 개수를 
 * return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - box의 길이는 3입니다.
 * - box[0] = 상자의 가로 길이
 * - box[1] = 상자의 세로 길이
 * - box[2] = 상자의 높이 길이
 * - 1 ≤ box의 원소 ≤ 100
 * - 1 ≤ n ≤ 50
 * - n ≤ box의 원소
 * - 주사위는 상자와 평행하게 넣습니다.
 * 
 * 입출력 예시
 * 
 *    box	    n	result
 * [1, 1, 1]	1	 1
 * [10, 8, 6]	3	 12
 * 
 * 입출력 예시 설명
 * 
 * ex1) 상자의 크기가 가로 1, 세로 1, 높이 1이므로 모서리의 길이가 1인 
 *      주사위는 1개 들어갈 수 있습니다.
 * 
 * ex2) 상자의 크기가 가로 10, 세로 8, 높이 6이므로 모서리의 길이가 3인 
 *      주사위는 12개 들어갈 수 있습니다.
 * 
 */

/**
 * 문제 해석
 * 
 * box = 숫자형 배열 길이는 3
 * n 정수 
 * 
 * 각 배열의 요소들의 값과 n을 나눈수를 곱해야 된다.
 * 
 * 
 */

//▼ 오답코드
function solution (box,n) {
    return Math.floor((box[0]/n)*(box[1]/n)*(box[2]/n));
}

/**
 * 테스트 2
 * 입력값 〉	[10, 8, 6], 3
 * 기댓값 〉	12
 * 실행 결과 〉	실행한 결괏값 17이 기댓값 12과 다릅니다.
 * 
 */
// ▼ 정답 코드
function solution (box,n) {
    const box1 = Math.floor(box[0]/n);
    const box2 = Math.floor(box[1]/n);
    const box3 = Math.floor(box[2]/n);
    return box1*box2*box3;
}

/**
 * 아마 위의 오답코드 에서 사칙연산을 수행하던중 무슨 오류가 있었던것 같다.
 * 그래서 box[index]에 n을 나눈 값을 Math.floor 메서드를 이용해서 내려줘서 정확한 값을 구해준뒤
 * 그 값을 변수에 할당했다.
 * 
 * 그리고 return에 해당 변수들을 곱해서 필요한 값을 구했다.
 */

// ▼ 구조분해 할당!

function solution (box,n) {
    let [width,length,height] = box;
    return Math.floor(width/n)*Math.floor(length/n)*Math.floor(height/n);
}

/**
 * 구조분해할당을 이용해 배열을 변수로 연결한뒤 해당 요소들을 주사위 갯수를 구하는 식에
 * 이용한다. 
 */

// ▼ reduce를 이용하기

function solution (box,n) {
    return box.reduce((acc,v) => acc*Math.floor(v/n),1);
}

/**
 * 결국 이 문제는 전체 배열(box)에서 각 요소의 값을 n으로 나눠 주는 하나의 값을 구하는 것이다.
 * 
 * 그렇게 때문에 reduce를 이용한다.
 * 
 * reduce의 매개변수로 acc,v를 이용하고, callback 의 식은 acc(누산기)에 Math.floor(v/n)을 곱해준다.
 * 그러면 누산기에 요소의 값에 n을 나눈 값이 누적되면서 원하는 값이 나온다.
 */