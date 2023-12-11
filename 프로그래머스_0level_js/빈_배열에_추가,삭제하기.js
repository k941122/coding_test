/**
 * 빈 배열에 추가,삭제하기
 * 
 * 문제 설명
 * 
 * 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 
 * 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, 
 * flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 
 * 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 = flag의 길이 ≤ 100
 * - arr의 모든 원소는 1 이상 9 이하의 정수입니다.
 * - 현재 X의 길이보다 더 많은 원소를 빼는 입력은 주어지지 않습니다.
 * 
 * 입출력 예시
 * 
 *        arr	                   flag	                         result
 * [3, 2, 4, 1, 3]	[true, false, true, false, false]	[3, 3, 3, 3, 4, 4, 4, 4] 
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번에서 X의 변화를 표로 나타내면 다음과 같습니다
 * 
 * i	flag[i]	arr[i]	X
 *                      []
 * 0	true	3	[3, 3, 3, 3, 3, 3]
 * 1	false	2	[3, 3, 3, 3]
 * 2	true	4	[3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4]
 * 3	false	1	[3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4]
 * 4	false	3	[3, 3, 3, 3, 4, 4, 4, 4]
 * 
 * 따라서 [3, 3, 3, 3, 4, 4, 4, 4]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 아무것도 들어가지 않은 배열 x = []
 * 
 * arr = 정수 배열
 * 
 * flag = boolean 배열
 * 
 * flag [i] = true = arr[i]*2
 * 
 * flag[i] = false = 마지막 arr[i]개의 원소 제거 
 * 
 * reduce ? 
 * 
 */

function solution (arr,flag) {
    return arr.reduce((acc,cur,i) => {
        if(flag[i]) {
            acc.push(...Array(cur *2).fill(cur));
        } else {
            acc.splice(acc.length - cur);
        }
        return acc;
    }, [])
}

/**
 * 정수 배열 arr을 reduce를 이용해 새로운 배열로 만들어 줘야 합니다.
 * 왜 reduce를 배열을 사용 했냐면, 초기값을 빈배열[]로 설정하면 acc를 이용해
 * 새로운 배열을 누적 시킬수 있다.
 * 
 * reduce의 매개변수는 acc cur idx 를 받는다.
 * callback 함수로 ifelse를 이용해 flag [i]가 참이면 실행되는 식과 거짓이면 실행되는 식을
 * 다르게 설정했다.
 * 
 * flag[i]가 true 이면 acc(누산기)에 push 메서드를 이용해서 해당 식을 뒤에서 부터 순차적으로 넣어준다.
 * ... spread 문법을 이용해 뒤의 Array 배열 생성 메서드로 만들어진 배열의 요소들을 분리한다.
 * 
 * Array 배열 생성 메서드를 이용해 cur(현재값)의 2배의 길이가 되는 배열을 만들고,
 * fill 메서드를 이용해 cur(현재값)을 앞의 배열 요소들에 채워 준다.
 * 
 * 만약 else (false)일 경우 acc (누산기)의 원래 배열을 변경하는 splice 메서드를 이용해
 * 원하는 만큼의 범위를 삭제한다. 
 * 
 * acc의 전체 길이에서 cur(현재값)을 뺀만큼을 삭제한다. 
 * 
 * 해당 결과들을 배열의 길이만큼 reduce가 loop해주면 원하는 배열이 나온다.
 */