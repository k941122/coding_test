/**
 * 두 수의 연산값 비교하기
 * 
 * 문제 설명
 * 
 * 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 
 * 예를 들면 다음과 같습니다.
 * 
 * 12 ⊕ 3 = 123
 * 3 ⊕ 12 = 312
 * 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 
 * return하는 solution 함수를 완성해 주세요.
 * 
 * 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.
 * 
 * 제한 사항
 * 
 * - 1 ≤ a, b < 10,000
 * 
 * 입출력 예시
 * 
 * a	b	result
 * 2	91	364
 * 91	2	912
 * 
 * 입출력 예시 설명
 * 
 * ex1) a ⊕ b = 291 이고, 2 * a * b = 364 입니다. 둘 중 더 큰 값은 364 이므로 
 *      364를 return 합니다.
 * 
 * ex2) a ⊕ b = 912 이고, 2 * a * b = 364 입니다. 
 *      둘 중 더 큰 값은 912 이므로 912를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 숫자형 a,b를 그대로 붙여쓰기 -> 관련 메서드 찾아보기 -> 문자형 
 * 
 * 2*a*b
 * 
 * 삼항 연산자 쓰기
 * 
 */

function solution (a,b) {
    return Number(String(a)+String(b)) >2*a*b? Number(String(a)+String(b)):
           Number(String(a)+String(b)) <2*a*b? 2*a*b:
           Number(String(a)+String(b)) =2*a*b? Number(String(a)+String(b)):"";
}

/**
 * Stirng 메서드를 이용해 정수 a,b를 문자열로 변형시키고 + 를 이용해서 이어 붙인뒤
 * Number 메서드를 이용해서 "a"+"b"를 숫자형 으로 변형 한다. 
 * 
 * 해당 숫자형과 2*a*b을 비교해서 true값에 지시하는 값을 넣는다.
 * 위 부분을 삼항 연산자로 간단하게 표현한다.
 */

// ▼ 간단한 코드!

function solution (a,b) {
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 < num2 ? num1 : num2;
}

/**
 * parseInt를 통해 괄호안의 식을 숫자로 변환 시켜준다.
 * a+"" 은 정수형 a에 공백인 "" 큰 따옴표를 더해줘서 숫자형으로 만들어 준다는 의미이다.
 * 
 * 해당 식들을 변수에 저장후 삼항 연산자를 통해 true false로 원하는 값을 표현한다.
 * 
 * num1 === num2 일때 num1을 return 하라는건, 결국 flase값에 num2적용 하라는 것과 
 * 똑같기 때문에 작성하지 않아도 된다. 
 */