/**
 * 영어가  싫어요
 * 
 * 문제 설명
 * 
 * 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
 * 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 
 * return 하도록 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - numbers는 소문자로만 구성되어 있습니다.
 * - numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
 * - 1 ≤ numbers의 길이 ≤ 50
 * - "zero"는 numbers의 맨 앞에 올 수 없습니다.
 * 
 * 입출력 에시 
 * 
 * numbers	result
 * "onetwothreefourfivesixseveneightnine"	123456789
 * "onefourzerosixseven"	14067
 * 
 * 입출력 예시 설명
 * 
 * ex1) "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
 * 
 * ex2) "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 문자열로 붙어있는 one two three 를 1 2 3으로 변환 할것
 * 
 * switch case? 
 * 
 * 
 * 
 */

function solution (numbers) {
    const numStr = ["zero","one","two","three","four","five","six","seven","eight","nine"]

    numStr.forEach((item,idx) => {
        numbers = numbers.replaceAll(item,idx);
    });
    return Number(numbers); 
}

/**
 * numbers의 문자열 요소에 있는 숫자들을 의미하는 단어들을 추출해 내기 위해 
 * 먼저 numStr 이라는 배열을 만든뒤 0부터9까지를 영어로 적은 문자형을 요소로 넣었다.
 * 
 * 그리고 해당 배열을 forEach를 이용해 순회해 주었는데
 * 이때 numbers의 값을 replaceAll 메서드를 통해 numbers의 item 들을 numStr의 index 로 
 * 대체한다.
 * 
 * 그러면 "zero"는 numStr의 index 0으로 "one"은 index 1로 바뀐다.
 * 
 * forEach 에서 영어로 작성된 숫자들은 정수형 문자열로 바뀌게 된다.]
 * 
 * return에 Number 메서드를 이용해 numbers를 숫자형으로 바꿔준다.
 * 
 */