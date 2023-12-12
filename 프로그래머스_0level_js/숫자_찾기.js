/**
 * 숫자 찾기
 * 
 * 문제 설명
 * 
 * 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 
 * k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 0 < num < 1,000,000
 * - 0 ≤ k < 10
 * - num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
 * 
 * 입출력 예시
 * 
 * num	    k	result
 * 29183	1	  3
 * 232443	4	  4
 * 123456	7	 -1
 * 
 * 입출력 예시 설명
 * 
 * ex1) 29183에서 1은 3번째에 있습니다.
 * ex2) 232443에서 4는 4번째에 처음 등장합니다.
 * ex3) 123456에 7은 없으므로 -1을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * spread 를 이용해 숫자를 배열화 시키기
 * 
 * map 을 이용해 해당 배열의 요소에 접근, 
 * callback 함수식으로 삼항 연산자를 사용
 * 
 * true index return, false면 -1 return
 * 
 * indexOf를 사용하는 것도 나쁘지 않을듯? 
 * 
 * 숫자형 -> 문자형 변환 -> 문자형.indexOf(k) -> 나온 인덱스 반환
 * 
 * 
 * 
 */


function solution (num,k) {
    return num.toString().split("").map((v) => Number(v)).indexOf(k) + 1 || -1
}

/**
 * num 숫자형을 배열화 시키기 위해 toString을 이용해 문자형으로 변환 해준뒤,
 * split 을 이용해 배열화 시켜 주었다. 
 * 
 * 해당 배열을 map 을 이용해 해당 배열의 요소들을 Number 메서드를 이용해 숫자형으로 바꿔주고,
 * .indexOf를 통해 k와 일치하는 인덱스를 찾아 준다. 그게 없다면 -1을 반환한다.
 * 
 * true 부분에 +1이 되는 이유는 함수는 1부터 시작하는 index를 반환하게 되있지만, 
 * 실제로는 0부터 반환 되야 되기 때문에 +1을 해주는 것이다. 
 * 그리고 k가 배열에 없어 반환되는 경우에는 -1이 되는 경우, +1은 0이 되지만 || -1 부분에
 * 때문에 최종적으로 -1이 반환된다.
 * 
 */