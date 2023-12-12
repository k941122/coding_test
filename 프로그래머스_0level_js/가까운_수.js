/**
 * 가까운 수
 * 
 * 문제 설명
 * 
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때, 
 * array에 들어있는 정수 중 n과 가장 가까운 수를 
 * return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ array의 길이 ≤ 100
 * - 1 ≤ array의 원소 ≤ 100
 * - 1 ≤ n ≤ 100
 * - 1 ≤ n ≤ 100
 * 
 * 입출력 예시
 * 
 * array	n	result
 * [3, 10, 28]	20	28
 * [10, 11, 12]	13	12
 * 
 * 입출력 예시 설명
 * 
 * ex1) 3, 10, 28 중 20과 가장 가까운 수는 28입니다.
 * ex2) 10, 11, 12 중 13과 가장 가까운 수는 12입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * array = 정수배열
 * 
 * n 정수
 * 
 * n과 가까운 정수 return -> filter join 
 * 
 * filter의 callback식 어떻게 쓰지? n빼기 i 값이 가장 적게 나와야 될듯? Math.min
 * 
 */

// 오답 코드
function solution (array,n) {
    return array.filter((v)=> Math.min(n-v));
}

/**
 * 원래의 배열들이 출력되서 나와버림! filter 메서드가 아니거나 callback에 문제가 있는듯함
 */

// 정답 코드

function solution (array,n) {
    return array.reduce((acc,cur) => {
        let curValue = Math.abs(cur - n);
        let resultValue = Math.abs(acc - n);

        if (curValue < resultValue || (curValue === resultValue && acc > cur)) 
            return cur;

            return acc;
        
    }, array[0])
}

/**
 * 해당 문제는 array 배열중 n과 가까운 요소를 고르는 것이다.
 * 
 * reduce를 이용해 acc cur을 매개변수로 받고,
 * 
 * curValue 와 resultValue 라는 변수를  세운다.
 * 
 * curValue 에는 cur(현재 값) - n(정수) 를 뺀값을 Math.abs 메서드를 이용해 절대값을 구해준다.
 * 
 * resultValue 는 acc(누적값)에 n을 뺀값을 값으로 가진다. 이 변수 역시 Math.abs 메서드를 이용한다.
 * 
 * if else 문으로 특정 조건에 부합하면 return 하는 형식으로 식을 적었다.
 * 
 * if문 조건은 curValue 가 resultValue 보다 작거나, (or) 
 * curValue 가 resultValue 와 같고 (and) acc(누적값)이 cur(현재값) 보다 클때 
 * cur을 return 하고 아니면 acc를  return 한다.
 */

