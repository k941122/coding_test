/**
 * 숨어있는 숫자의 덧셈 2
 * 
 * 문제 설명
 * 
 * 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 
 * 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - 1 ≤ my_string 안의 자연수 ≤ 1000
 * - 연속된 수는 하나의 숫자로 간주합니다.
 * - 000123과 같이 0이 선행하는 경우는 없습니다.
 * - 문자열에 자연수가 없는 경우 0을 return 해주세요.
 * 
 * 입출력 에시
 * 
 *     my_string	result
 * "aAb1B2cC34oOp"	37
 * "1a2b3c4d123Z"	133
 * 
 * 입출력 에시 설명
 * 
 * ex1) "aAb1B2cC34oOp"안의 자연수는 1, 2, 34 입니다. 따라서 
 *      1 + 2 + 34 = 37 을 return합니다.
 * 
 * ex2) "1a2b3c4d123Z"안의 자연수는 1, 2, 3, 4, 123 입니다. 
 *      따라서 1 + 2 + 3 + 4 + 123 = 133 을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * myString 은 소문자 대문자 자연수가 섞인 문자형 
 * 
 * 자연수의 합을 구해라
 * 
 * 연속된 수는 하나의 숫자로 간주함
 * 
 * 문자열에 자연수가 없으면 0
 * 
 * 배열?
 * 
 * 문자형만 삭제? 
 * 
 * 정규 표현식 ! 
 * 
 * 
 * 
 * 
 * 
 */

function solution (my_string) {
    const number = /\d+/g;
    const numbers = my_string.match(number);

    if (!numbers) {
        return 0;
    }
    return numbers.reduce((acc,cur) => acc + parseInt(cur), 0)
}

/**
 * 정규 표현식과 match 를 이용해 식을 세울수 있다.
 * 
 * number 변수에 정규 표현식을 값으로 넣는데, 
 * 
 * //g를 먼저 써서 해당 문자열 혹은 영역에 전역으로 적용 됨을 선언한뒤
 * 내부에 \d 를 이용해 0부터 9까지의 어떤 숫자라도 일치 시킨다는 의미를 담아준다.
 * +는 앞선 숫자가 연속으로 나올 경우 하나로 일치 시킨다.
 * 
 * 이 정규 표현식을 담은 number을  my_string 문자열에 match 메서드 매개변수 부분에 넣어준다.
 * 그러면 match를 통해 문자열에 일치하는 요소들만 배열화 되어 나오게 된다. 
 * 
 * 그 배열을 reduce를 이용해 모두 더해 주는데, parseInt 에 현재 값을 넣어서 
 * 숫자화 시킨뒤 acc (누산기)에 누적 시켜준다.
 * 
 * 만약 my_string에 정수가 없을경우
 * 
 * if문 에서 numbers(숫자형)가 없다면 return 0을 출력해 준다.
 * 
 */