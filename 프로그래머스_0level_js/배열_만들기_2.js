/**
 * 배열 만들기 2
 * 
 * 문제 설명
 * 
 * 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 
 * 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 * 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 * 
 * 제한 사항
 * 
 * - 1 ≤ l ≤ r ≤ 1,000,000
 * 
 * 입출력 예시
 * 
 * l	r	result
 * 5	555	[5, 50, 55, 500, 505, 550, 555]
 * 10	20	[-1]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 5 이상 555 이하의 0과 5로만 이루어진 정수는 작은 수부터 
 *      5, 50, 55, 500, 505, 550, 555가 있습니다. 따라서 
 *      [5, 50, 55, 500, 505, 550, 555]를 return 합니다.
 * 
 * ex2) 10 이상 20 이하이면서 0과 5로만 이루어진 정수는 없습니다. 따라서 [-1]을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 정수 l r
 * 
 * l 이상 r 이하 의 정수
 * 
 * 0과 5를 포함한 정수를 오름차순으로 정렬
 * 
 * 없으면 -1 return 
 * 
 * l부터 시작해서 r로 끝나는 배열 만들기
 * 
 * 해당 배열을 map을 통해 stirng 으로 바꾸고 filter로 includes 0, 5 를 포함 하는 것만 출력
 * 
 * 해당 배열의 요소를 숫자형으로 바꾸고 sort로 오름차순 만들기
 * 
 * 삼항 연산자로!arr.length arr 출력 아니면 -1
 * 
 */

function solution(l, r) {
    let arr = Array.from({ length: r - l + 1 }, (_, i) => l + i);

    let filterArr = arr.filter(v => {
        const str = v.toString();
        return str.split('').every(char => char === '0' || char === '5');
    });

    let answer = filterArr.sort((a, b) => a - b);

    return answer.length > 0 ? answer : [-1];
}

/**
 * arr 변수에 r로 시작하고 l로 끝나는 배열을, Array.from 메서드를 통해서  만들어 준다.
 * 
 * filterArr 변수에 위에서 만든 arr배열에 filter를 적용해서 
 * filter 메서드 안에 값을 의미하는 v를 숫자형으로 바꿔주고 
 * str에 그값을 할당해준 다음 return 해줘서 해당 v를 배열로 만들어서 every 메서드로 
 *  true 또는 false 를 구별해 준 다음 filter가 true인 배열을 반환해 준다.
 * 
 * ,filterArr 배열의 요소를 map을 이용해 다시 Number로 바꾸고 
 * sort를 이용해 오름차순 정렬을 해준다.
 */