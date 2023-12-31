/**
 * 조건에 맞게 수열 변환하기 2
 * 
 * 문제 설명
 * 
 * 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 
 * 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
 * 
 * 이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, 
 * arr(x) = arr(x + 1)인 x가 항상 존재합니다. 이러한 x 중 가장 작은 값을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 
 * 인덱스의 원소가 각각 서로 같음을 의미합니다.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 1,000,000
 *   1 ≤ arr의 원소의 값 ≤ 100
 * 
 * 입출력 에시
 * 
 *            arr	      result
 * [1, 2, 3, 100, 99, 98]	5
 * 
 * 입출력 예시 설명
 * 
 * ex1) 위 작업을 반복하면 다음과 같이 arr가 변합니다.
반복 횟수	arr
0	[1, 2, 3, 100, 99, 98]
1	[3, 2, 7, 50, 99, 49]
2	[7, 2, 15, 25, 99, 99]
3	[15, 2, 31, 51, 99, 99]
4	[31, 2, 63, 51, 99, 99]
5	[63, 2, 63, 51, 99, 99]
6	[63, 2, 63, 51, 99, 99]
 * 이후로 arr가 변하지 않으며, arr(5) = arr(6)이므로 5를 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * arr 에 대해 특정 규칙에 따라 변하게 한다.
 * 
 * 50보다 크거나 같은 짝수 -> 원소를 2로 나눠줌 -> if 문?
 * 
 * 50보다 작은 홀수 원소를 2곱한후 1더하기
 * 
 * x번 반복 while? 
 * 
 * arr(x) 
 * 
 * arr(x) = arr(x+1) 인 x 항상존제
 * 
 * 가장 작은 값 return 하는 함수 완성
 * 
 * 
 * 
 */

function solution(arr) {
    let x = 0;
    let prev = [...arr];

    while (true) {
        const next = prev.map((v) => {
            if (v >= 50 && v % 2 === 0) {
                return v / 2;
            } else if (v < 50 && v % 2 === 1) {
                return v * 2 + 1;
            } else {
                return v; 
            }
        });

        const isEqual = prev.every((v, i) => v === next[i]);

        if (isEqual) break;
        prev = next;
        x++;
    }

    return x;
}


/**
 * x는 변환을 수행한 횟수를 누적 시키는 것을 의미한다. 
 * 
 * while의 조건에 true를 넣고 무한 루프를 생성하고 배열이 더이상
 * 변하지 않을때까지 계속된다. while문 내부에 next 변수에 
 * prev(arr을 배열화 한것)을 map으로 요소의 값을 바꿔주는데,
 * 
 * callback 식으로 if else 문을 사용해서 조건에 맞을때 map 메서드에 할닽된 v
 * 를 계산해 준다.
 * 
 * isEqual 변수에서는 prev의 요소들의 값이 next의 요소와 같은지 비교햐기 위해
 * every 메서드를 사용했다.
 * 
 * prev = next는 prev의 값을 next로 재할당 해줘서 다음 반복을 위한 준비를 한다.
 * 해당 반복이 진행 될때 마다 x에 1을 증감 시킨다.
 * 
 * if문에서 isEqual (prev와 next 배열이 일치하면) break를 이용해 루프를 종료 시킨다. 
 */