/**
 * 소인수 분해
 * 
 * 문제 설명
 * 
 * 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 
 * 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
 * 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 
 * n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 2 ≤ n ≤ 10,000
 * 
 * 입출력 예시
 * 
 * n	result
 * 12	[2, 3]
 * 17	[17]
 * 420	[2, 3, 5, 7]
 * 
 * 입출력 에시 설명
 * 
 * ex1) 12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.
 * ex2) 17은 소수입니다. 따라서 [17]을 return 해야 합니다.
 * ex3) 420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 소인수 분해 - 어떤 수의 소수들을 곱으로 표현
 * 
 * n의 소인수 분해를 구하시오. -> 오름차순 (sort) -> 배열로
 * 
 * 
 * 
 */


function solution (n) {
    let arr = [];
    let divid = 2;
    while (n >= 2) {
        if (n%divid === 0) {
            arr.push(i);
            n = n/i;
        } else i++;
    }
    return arr.sort((a,b) = a - b);
}

/**
 *     return arr.sort((a , b) = a - b);
                    ^^^^^^^

 * SyntaxError: Invalid left-hand side in assignment

                       문법적인 오류가 떳다.
 */

                       
                       function solution (n) {
                        let arr = [];
                        let divid = 2;
                        while (n >= 2) {
                            if (n%divid === 0) {
                                arr.push(divid);
                                n = n/divid;
                            } else divid++;
                        }
                        return [...new Set(arr)];
                    }

                    /**
                     * 계속해서 sort 메서드에 오류가 나고, i 부분 역시 오류가 나길래
                     * i를 divid 로 변수명을 바꾸고, set 메서드로 중복되는 요소를 제거해 줬다.
                     * 
                     * divid 에 2를 넣은 이유는 소인수 분해가 되는 가장 작은 값이 2라서 이다.
                     * 제한 사항에 n이 2가 될수 있다고 했기에, while의 조건문에 n>=2라고 적고
                     * n이 이보다 크거나 작을때 까지 while문을 반복 시킨다.
                     * 
                     * while 문 안에 if 조건문 n을 divid(2)로 나눈 나머지 값이 0이 라면 
                     * arr 배열에 들어온 divid 값을 push 메서드로 넣어준다.
                     * 
                     * 조건문 n나누기 divid가 0일 경우 divid의 소인수만 남도록
                     * n 의 값은 n나누기 divid 라는 식을 작성 했다.
                     * 
                     * else 라면 divid값을 1씩늘려 while 문을 반복하도록 
                     * divid ++를 작성 했다. 
                     * 
                     * divid의 모든 배수를 제거하기위해 n나누기 divid를 진행할때마다 
                     * arr 에 중복된 값이 들어왔기 때문에 set 메서드를 이용해 줃복된 요소를 지웠다.
                     * 
                     * 
                     */