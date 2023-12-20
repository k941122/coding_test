/**
 * 정사각형으로 만들기
 * 
 * 문제 설명
 * 
 * 이차원 정수 배열 arr이 매개변수로 주어집니다. 
 * arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 
 * 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 
 * 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 100
 * 
 * - 1 ≤ arr의 원소의 길이 ≤ 100
 *   arr의 모든 원소의 길이는 같습니다.
 * 
 * - 1 ≤ arr의 원소의 원소 ≤ 1,000
 * 
 * 입출력 예시
 * 
 *       arr	result
 * [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]	[[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]
 * [[57, 192, 534, 2], [9, 345, 192, 999]]	[[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]
 * [[1, 2], [3, 4]]	[[1, 2], [3, 4]]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 arr은 행의 수가 4, 열의 수가 3입니다. 행의 수가 
 *      더 많으므로 열의 수를 4로 만들기 위해 arr의 각 행의 끝에 0을 추가한 이차원 배열 
 *      [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]를 
 *      return 합니다.
 * 
 * ex2) 예제 2번의 arr은 행의 수가 2, 열의 수가 4입니다. 
 *      열의 수가 더 많으므로 행의 수를 4로 만들기 위해 arr의 각 열의 끝에 0을 추가한 
 *      이차원 배열 [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], 
 *      [0, 0, 0, 0]]을 return 합니다.
 * 
 * ex3) 예제 3번의 arr은 행의 수와 열의 수가 2로 같습니다. 따라서 0을 추가하지 않고 
 *      [[1, 2], [3, 4]]을 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * 이차원 배열 arr 
 * 
 * arr의 행과 열의 수를 비교해서 더 많은 쪽에 0을 넣어 정 사각형을 만드는 것이다.
 * 
 * 행 - > arr.length
 * 열 => arr[0].length
 * 
 * if(행 > 열 ) -> for let i col i <row -> 
 * 
 */

function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;

    if (row > col) {
        for (let i = col; i <row; i++) {
            for(let j = 0; j < row; j++) {
                arr[j].push(0);
            }
        }
    }else if ( row < col ) {
        for (let i = row; i < col; i++) {
            arr.push(new Array(col).fill(0));
        }
    }
    return arr;
}

/**
 * 행과 열의 요소의 개수를 구한다음
 * 
 * 해당 행과 수의 크기를 비교해 열이 더 클 경우 if 문을 이용해서
 *  이중 for문을 사용해 arr 의 길이를 순환 하면서 내부 for문은 arr의 요소 를 순환하게 했다.
 * 내부 for문에서 행이 열보다 커질때 까지 arr 이차원 배열의 요소에 0을 넣어준다.
 * 
 * 만약 열이 더 클 경우에는 for문을 이용해 열의 갯수 만큼 순환해 준다. 
 * arr 배열에 push메서드를 이용해 새로운 배열을 넣어주는데, col의 길이만큼의 배열을 fill
 * 메서드를 이용해 0으로 채워준다. 
 * 
 * 이렇게 if 문 과 else if 문 을 이용해서 arr의 행과 열을 정사각형으로 만들수 있다.
 */