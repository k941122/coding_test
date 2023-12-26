/**
 * 주사위 게임 3
 * 
 * 문제 설명
 * 
 * 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
 * 
 * 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
 * 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 
 * (10 × p + q)2 점을 얻습니다.
 * 
 * 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 
 * (p + q) × |p - q|점을 얻습니다.
 * 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 
 * p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
 * 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 
 * 점수를 얻습니다.
 * 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 
 * 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - a, b, c, d는 1 이상 6 이하의 정수입니다.
 * 
 * 
 * 입출력 예시
 * 
 * a	b	c	d	result
 * 2	2	2	2	2222
 * 4	1	4	4	1681
 * 6	3	3	6	27
 * 2	5	2	6	30
 * 6	4	2	5	2
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번에서 네 주사위 숫자가 모두 2로 같으므로 1111 × 2 = 2222점을 얻습니다. 
 * 따라서 2222를 return 합니다.
 * 
 * ex2) 예제 2번에서 세 주사위에서 나온 숫자가 4로 같고 나머지 다른 주사위에서 
 *      나온 숫자가 1이므로 (10 × 4 + 1)2 = 412 = 1681점을 얻습니다. 따라서 1681을 return 합니다.
 * 
 * ex3) 예제 3번에서 a, d는 6으로, b, c는 3으로 각각 같으므로 
 *      (6 + 3) × |6 - 3| = 9 × 3 = 27점을 얻습니다. 따라서 27을 return 합니다.
 * 
 * ex4) 예제 4번에서 두 주사위에서 2가 나오고 나머지 다른 두 주사위에서 각각 
 *      5, 6이 나왔으므로 5 × 6 = 30점을 얻습니다. 따라서 30을 return 합니다.
 * 
 * ex5) 예제 5번에서 네 주사위 숫자가 모두 다르고 나온 숫자 중 가장 작은 숫자가 
 *      2이므로 2점을 얻습니다. 따라서 2를 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * if else 문으로 작성하기 
 * 
 * 네 주사위 눈금 같으면 1111*p
 * 
 * 세 주사위 눈금이 같고 나머지가 다르면? (10*p+q)^2
 * 
 * 두 쌍의 주사위에서 눈금이 같고 다른 두 주사위의 눈금이 각각 p 와 q이면 
 * q*r
 * 
 * 네 주사위의 눈금이 모두 다르면 가장 작은 눈금의 이 점수!!
 * 
 * 
 * 
 */

//▼ 오답 코드
function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    dice.sort((x, y) => x - y);

    if (dice[0] === dice[3]) {
        return 1111 * dice[0];
    }

    if ((dice[0] === dice[2] && dice[3] === dice[1]) || (dice[0] === dice[1] && dice[3] === dice[2])) {
        const p = dice[0];
        const q = dice[3];
        return Math.pow(10 * p + q, 2);
    }

    if (dice[0] === dice[1] && dice[2] === dice[3]) {
        const p = dice[0];
        const q = dice[2];
        return q * dice[3];
    }
}

/**
 * 테스트 2
입력값 〉	4, 1, 4, 4
기댓값 〉	1681
실행 결과 〉	실행한 결괏값 1이 기댓값 1681과 다릅니다.
출력 〉	2222
1
1296
2
2
테스트 3
입력값 〉	6, 3, 3, 6
기댓값 〉	27
실행 결과 〉	실행한 결괏값 1296이 기댓값 27과 다릅니다.
출력 〉	2222
1
1296
2
2
테스트 4
입력값 〉	2, 5, 2, 6
기댓값 〉	30
실행 결과 〉	실행한 결괏값 2이 기댓값 30과 다릅니다.
출력 〉	2222
1
1296
2
2
 *
 *
 * 테스트 2~4가 틀리게 나온다.
 * 
 * 
 */


//▼ 정답 코드
function solution(a, b, c, d) {
    const nums = [a, b, c, d];
    const appear = {}
    
    for(let i =0;i<4;i++){
        const num = nums[i];
        appear[num] = (appear[num] || 0) + 1;
    }
    
    const count = Math.max(...Object.values(appear));
    const entries = Object.entries(appear).sort((a,b)=>a[1] - b[1])
    
    let answer = 0;
    switch(count){
        case 4:
            answer = 1111 * a;
            break;
        case 3:
            answer = (10 * Number(entries[1][0]) + Number(entries[0][0])) ** 2
            break;
        case 2:
            if(entries.length === 2){
                answer = (Number(entries[1][0]) + Number(entries[0][0])) * Math.abs(Number(entries[1][0]) - Number(entries[0][0]))
            }
            if(entries.length === 3){
                const newEntries = entries.filter((el)=> el[1]===1)
                answer = Number(newEntries[1][0]) * Number(newEntries[0][0])
            }
            break;
        case 1:
            answer = Math.min(...nums);
            break;
    }
    
    return answer;
}

/**
 * nums 변수에 a,b,c,d 요소를 가진 배열 을 값으로 저장한다. 여기서 요소 4개는 4개의
 * 주사위를 뜻한다. 
 * 
 * 그리고 주사위의 눈금이 나타난 횟수를 저장할 객체 appear을 만든다. 
 * 
 * 위 appear 객체에 각 눈금이 나타낸 횟수를 저장하기 위해 for문을 이용하는데,
 * 각 주사위의 눈금횟수를 나타내기 위해 4번 반복한다. 
 * nums 배열을 순회하면서 눈금이 나타난 횟수를 apear 객체에 저장한다.
 * 
 * count 변수에 가장 큰 값을 저장하고 
 * 
 * Object.entries(appear) 객체 메서드를 이용해서 apear 객체를 [눈금,횟수] 배열로
 * 변환해 준다. 이 배열은 횟수를 기준으로 정렬하게 된다.
 * 
 * switch case 문을 이용해서 count의 값에 따라 case에 따른 결과를 계산한다.
 * 
 * count에 할당된 값(1~4)에 따라, 문제에서 말한 식을 적용해서 계산한 값을 
 * answer에 저장한다. 
 * 
 * 
 * 
 * 
 */