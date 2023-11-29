/**
 * 카운트 업
 * 
 * 문세 설명
 * 
 * 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 
 * 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * -  0 ≤ start_num ≤ end_num ≤ 50
 * 
 * 입출력 에시
 * 
 * start_num	end_num	result
 * 3	10	[3, 4, 5, 6, 7, 8, 9, 10]
 * 
 * 입출력 예시 설명
 * 
 * ex1)3부터 10까지의 숫자들을 담은 리스트 [3, 4, 5, 6, 7, 8, 9, 10]를 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 시작 숫자 부터 끝 숫자 까지의 배열을 return 하시오.
 * 
 * Array.from (Array(end_num), start_num)
 * 
 */

// ▼ 내가 쓴 정답 코드
function solution (start_num,end_num) {
    let answer = [];
    for (let i = start_num; i <= end_num;i++) {
        answer.push(i)
    }
    return answer;
}

/**
 * for 반복문을 이용해서, 초기값을 start 로, end 보다 작거나 같을 때 까지 loop 시켰다.
 * 한번 loop 할때마다 빈배열에 뒤에서부터 i값을 push 해주었다.
 */

// ▼ 좀더 효율적인 코드!
function solution (start,end) {
    return Array(end - start +1).fill(start).map((x,i) => x+i);
}

/**
 * Array() 메서드에 end - start 를 해줘서 빼준 값에 +1을 해주면 전체 길이가 나옵니다.
 * 
 * 이렇게 만든 배열에 fill 메서드로 start 정수를 넣어 줍니다.
 * 
 * start 정수로 가득찬 배열을 map 메서드를 이용해 값과 인덱스를 더해서 각 요소에 누적 시켜주면
 * 원하는 배열이 return 됩니다.
 */
