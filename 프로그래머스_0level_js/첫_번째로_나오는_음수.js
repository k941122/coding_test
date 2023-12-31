
/**
 * 첫 번째로 나오는 음수
 * 
 * 문제 설명
 * 
 * 정수 리스트 num_list가 주어질 때, 
 * 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 
 * 음수가 없다면 -1을 return합니다.
 * 
 * 제한 사항
 * - 5 ≤ num_list의 길이 ≤ 100
 * - -10 ≤ num_list의 원소 ≤ 100
 * 
 * 입출력 예시
 * 
 * num_list	                    result
 * [12, 4, 15, 46, 38, -2, 15]	  5
 * [13, 22, 53, 24, 15, 6]	      -1
 * 
 * 입출력 예시 설명
 * 
 * ex1)5번 인덱스에서 음수가 처음 등장하므로 5를 return합니다.
 * ex2)음수가 없으므로 -1을 return합니다.
 * 
 */

/**
 * 식세우기
 * 
 * num_list 배열에서 처음으로 음수인 부분만 index 추출
 * 
 * 배열을 돌면서 음수를 찾아야됨
 * 
 * for 반복문 사용!
 * 
 * for 반복문 안에 음수인 요소 인덱스를 찾아야 함으로 if 사용
 * 
 * 
 */

// ▼ 오답 코드
function solution (num_list) {
    let answer = -1;
    for (let i = 0; i <= num_list; i++) {
        if(num_list[i] < 0) {
            answer = i;
        }
    }
    return answer;
}

/**
 * 테스트 1
 * 입력값 〉	[12, 4, 15, 46, 38, -2, 15] 
 * 기댓값 〉	5
 * 실행 결과 〉	실행한 결괏값 -1이 기댓값 5과 다릅니다.
 * 
 * 
 * 
 */

// ▼ 정답 코드
function solution (num_list) {
    return num_list.findIndex(v=>v<0);
}

/**
 * 첫번째 음수 index를 찾으려고 하니, findIndex 메서드가 있었다.
 * 해당 배열에서 찾고자 하는 index를 검색하는 건데, 일반괄호 안에 
 * callback 함수 식을 새워서 값을 매개변수로 받고 그 매개변수가 0보다 작은 index를
 * return 하라는 것이다.
 */
