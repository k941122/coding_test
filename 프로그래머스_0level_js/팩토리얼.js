/**
 * 팩토리얼
 * 
 * 문제 설명
 * 
 * i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
 * 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 
 * n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 
 * return 하도록 solution 함수를 완성해주세요.
 * 
 * i! ≤ n
 * 
 * 제한 사항
 * 
 * - 0 < n ≤ 3,628,800
 * 
 * 입출력 예시
 * 
 *   n	    result
 * 3628800	 10
 *   7	     3
 * 
 * 입출력 예시 설명
 * 
 * ex1) 10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.
 * ex2) 3! = 6, 4! = 24입니다. n이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 팩토리얼 - 1부터 시작 1  1*2 1*2*3
 * 
 * 증가하는 순서 -> i와 비례하게 커진다 5! 120 6!720 
 * 
 * n과 팩토리얼 비교해서 팩토리얼 <= n
 * 
 * i를 1부터 시작 하나씩 증가 하여 각 단계에서 i팩토리얼 계산 하고 n과 비교 reduce?
 * 
 * 팩토리얼 <= n 끝 if else? 
 * 
 * 
 * 어떤 식과 메서드를 써야 할가? 
 * 
 * for? 
 * 
 * 
 */

function solution (n) {
    return Array(Array(i),(_,i) =>i +1)
          .reduce ((acc,cur) => {
            let sum = acc * cur;
            if(sum <=n) {
                return acc;
            } 
    }, 1)
}

/**
 * Array.from 매서드의 총 길이를 나오는 자리에 작성된 i가
 * ReferenceError: i is not defined 이라는 애러가 나왔다. 
 * 
 * i가 정의되지 않은것 같은데, 좀더 찾아 봐야 겠다.
 */


function solution (n) {
    return Array(Array({length: n}),(_,i) =>i +1)
          .reduce ((acc,cur) => {
            let sum = acc * cur;
            if(sum <=n) {
                return sum;
            } 
            return acc;
    }, 1)
}

/**
 * loength n을 Array 메서드의 길이로 주었다.
 * 그리고 reduce 메서드 에서 
 * sum 변수를 if 문 밖으로 빼준다음
 * if문의 조건이 참일 경우 return sum을 해주라고 변경 하였다.
 * 
 * 하지만 테스트 1,2역시 틀리게 나왔다.
 * 
 * 
 * 테스트 1
 * 입력값 〉	3628800
 * 기댓값 〉	10
 * 실행 결과 〉	실행한 결괏값 3628800이 기댓값 10과 다릅니다.
 * 
 * 
 * 테스트 2
 * 입력값 〉	7
 * 기댓값 〉	3
 * 실행 결과 〉	실행한 결괏값 6이 기댓값 3과 다릅니다.
 * 
 */

function solution (n) {
    let factorial = 1;
    let i = 1;
    while (factorial <= n) {
        factorial *= i;
        if (fatorial > n) {
            break;
        }
        i++;
    }
    return i-1;
}

/**
 * factorial 변수에 1을 할당하고, i의 값을 1로 할당한다.
 * 
 * 그리고 while 문으로 반복을 해주는데, fatorial의 값이 n보다 작거나 같을때 까지
 * 반복해준다.
 * 
 * while문이 반복될때마다 factorial에는 i의 값이 곱해 져서 할당 되는데, i++를 이용해
 * while 문이 끝날떼 마다 1씩 더해준다. (n까지의 요소들을 곱해줘야 되기 때문에 1,2,3,....n)
 * 
 * 여기서 factorial의 값이 n보다 커지는 순간 break를 이용해  while 반복을 멈춰준다.
 * 
 * 마지막으로 return 에서 i -1을 해주는데, 그 이유는 i값을 증가시켜 factorial을 계산하고
 * 그 결과가 n을 초과하는지 확인 해서이다. 이 경우 i는 어쩔수 없이 n을 초과하는 i가 출력 되기 때문에
 * 그 직전인 i를 구하기 위해 -1을 하는 것이다.
 */