/**
 * 합성수 찾기
 * 
 * 문제 설명
 * 
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
 * 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ n ≤ 100
 * 
 * 입출력 예시 
 * 
 * n	result
 * 10	5
 * 15	8
 * 
 * 입출력 예시 설명
 * 
 * ex1) 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
 * ex2) 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 약수 개수가 3개 이상 -> 합성수
 * 
 * n 이하의 합성수 갯수 return 
 * 
 */

function solution (n) {
    return Array.from(Array(n),(_,i)=> i+1).filter((v)=> v%2===0).length
}

/**
 * 합성수를 보니 2로 나눠지는 특징이 보여서, filter 메서드에 배열의 요소를 
 * 2로 나눈 나머지 값이 0이 되는 것만 출력 하게 한다음 length를 이용해서 갯수를
 * 측정했다.
 * 
 * 테스트 2
 * 입력값 〉	15
 * 기댓값 〉	8
 * 실행 결과 〉	실행한 결괏값 7이 기댓값 8과 다릅니다.
 * 
 * 
 */

function solution (n) {
    let arr = [];

    for (let i = 1; i <= n;i++) {
        for (let j =2; j < i; j++ ) {
            if(i%j === 0){                         
            arr.push(i)
            }
        }
    }
    return [...new Set(arr)].length;
}

/**
 * 비어있는 배열 arr을 생성하고,
 * 
 * 이중 for문을 작성한다. 
 * 
 * 외부 for문 에서는 i를 1로 설정하고 n만큼 루프하게 한다. 
 * 
 * 내부 for문은 j에 2를 설정하고 i의 크기 보다 작을때 까지 순회한다. 
 * 해당 i의 값을 arr 배열에 push 한다. 
 * 
 * 외부 for문에 i를 1로 설정한 이유는 배열이 아닌 숫자 이기 때문에 1부터 시작하는 것이고
 * 내부 for문에서 j의 값을 2로 설정한 이유는 합성수는 2로 나눠지기 때문이다. 
 * 또한 내부 for문의 조건에서 i보다 j의 값이 작아야 되는데, j의 값은 기본적으로 2 이기 때문에
 * 외부 for 문에서 들어온 1,2는 받아 들이지 못한다. 
 * 
 * 이렇게 순차적으로 1~n까지의 숫자가 외부 for에 들어가 내부 for문에 서 동작을 마치고 
 * 2로 나누어 지는 숫자 만이 answer에 push 한다.
 * 
 * 이 배열을 new set() 메서드를 이용해서 중복되는 숫자를 지워주고. (6과12처럼 2와3으로 나눠지는 숫자는 지워야 한다.)
 * .length 를 통해 갯수를 구했다.
 */