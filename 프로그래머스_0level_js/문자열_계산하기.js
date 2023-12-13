/**
 * 문자열 계산하기
 * 
 * 문제 설명
 * 
 * my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
 * 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 
 * return 하는 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 연산자는 +, -만 존재합니다.
 * - 문자열의 시작과 끝에는 공백이 없습니다.
 * - 0으로 시작하는 숫자는 주어지지 않습니다.
 * - 잘못된 수식은 주어지지 않습니다.
 * - 5 ≤ my_string의 길이 ≤ 100
 * - my_string을 계산한 결과값은 1 이상 100,000 이하입니다.
 *   my_string의 중간 계산 값은 -100,000 이상 100,000 이하입니다.
 *   계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수입니다.
 *   my_string에는 연산자가 적어도 하나 포함되어 있습니다.
 * - return type 은 정수형입니다.
 * - my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.
 * 
 * 입출력 예시
 * 
 * my_string	result
 * "3 + 4"	      7
 * 
 * 입출력 예시 설명
 * 
 * ex1) 3 + 4 = 7을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 이거에 해당하는 메서드가 있음.
 * 
 */

// ▼ 오답 코드
function solution (my_string) {
    let arr = [...my_string]
    if (arr[1] === "+") {
        return arr[0] + arr[2];
    } else if (arr[1] === "-"){
        return arr[0] - arr[2]
    }
}

/**
 * 단순히 한자릿 숫자만 생각해서 mystring을 배열화 시키면 3개의 index가 나오겠구나 싶었는데
 * 생각해 보니 더 많은 자리의 숫자가 있을수도 있다는걸 알았다. 
 */



function solution (my_string) {
    let arr = my_string.split(" ");
    let answer = Nnmber(my_string[0]);

    arr.forEach((v,i) => {
        if( v=== "+") {
            answer += Number(arr[i+1]);
        }
        if (v === "-") {
            answer -= Number(arr[i+1])
        }
    })
    return answer
}

/**
 * 공백을 기준으로 split 메서드를 이용해 배열을 만들어 준다 (arr)
 * 
 * answer 변수를 만들고 Number 메서드를 이용해 my_string의 0인 요소를 설정해준다.
 * 
 * arr 배열을 forEach를 이용해 순회하는데, 
 * 
 * if문 두개를 이용해 + 가 나오면 Number 메서드 안의 arr배열 요소에 +1을 더해준 값을 answer에 누적시키고
 * 
 * 다른if 에서는 arr의 요소의 값에 -가 나오면 answer에 Number 메서드 안의 arr 요소의 값에서 +1된 것을 감산 시킨다.
 */