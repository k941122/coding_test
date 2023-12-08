/**
 * 가까운 1 찾기
 * 
 * 문제 설명
 * 
 * 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 
 * 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 
 * 찾아서 반환하는 solution 함수를 완성해 주세요.
 * 
 * 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
 * 
 * 제한 사항
 * 
 * - 3 ≤ arr의 길이 ≤ 100'000
 *   arr의 원소는 전부 1 또는 0입니다.
 * 
 * 입출력 예시
 * 
 *        arr	         idx	result
 * [0, 0, 0, 1]	           1	   3
 * [1, 0, 0, 1, 0, 0]	   4	  -1
 * [1, 1, 1, 1, 0]	       3	   3
 * 
 * 입출력 예시 설명
 * 
 * ex1) 1보다 크면서 원소가 1인 가장 작은 인덱스는 3입니다. 따라서 3을 return 합니다.
 * ex2) 4번 인덱스 이후에 1은 등장하지 않습니다. 따라서 -1을 return 합니다
 * ex3) 3번 인덱스의 값이 1입니다. 따라서 3을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * arr = 정수배열 -> 배열의 요소는 0과1
 * 
 * idx = 정수
 * 
 * idx < arr[index]
 * 
 * arr[index]의 element = 1
 * 
 * false 라면 -1
 * 
 * 삼항 연산자로 처리!
 * 
 * for문?
 * 
 * 
 */

// ▼ 오답 코드
function solution (arr,idx) {
    for (let i = 0; i <= arr.length; i++) {
        const cur = arr[i];
        if (idx < cur && cur == 1) {
            return i;
        } return -1
    }
}

/**
 * 테스트 1번,3번 오답처리 됬다. 전부다 -1(false)로 떳다.
 * 
 */

// ▼ 정답 코드
function solution (arr,idx) {
    return arr.indexOf(1,idx);
}

/**
 * indexOf 메서드는 특정 인덱스를 찾을때 시작점 을 찾을수 있다.
 * 
 * indexOf(찾고싶은 값, 시작점 설정);
 * 
 * 배열이름.indexOf(1,idx); 를 쓰면 해당 배열에서 
 * 찾고싶은 값(searchElement)과 시작점(fromIndex)을 설정할수 있다.
 */

