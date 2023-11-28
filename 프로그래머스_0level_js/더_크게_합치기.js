/**
 * 더 크게 합치기
 * 
 * 문제 설명
 * 
 * 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 
 * 예를 들면 다음과 같습니다.
 * 
 * 12 ⊕ 3 = 123
 * 3 ⊕ 12 = 312
 * 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
 * 
 * 제한 사항
 * - 1 ≤ a, b < 10,000
 * 
 * 입출력 예시
 * 
 * a	b	result
 * 9	91	991
 * 89	8	898
 * 
 * 입출력 예시 설명
 * 
 * ex1) a ⊕ b = 991 이고, b ⊕ a = 919 입니다. 
 *      둘 중 더 큰 값은 991 이므로 991을 return 합니다.
 * 
 * ex2) a ⊕ b = 898 이고, b ⊕ a = 889 입니다. 
 *     둘 중 더 큰 값은 898 이므로 898을 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * a b 는 정수 숫자형 매개변수이다.
 * 
 * a와b를 더하는 것이 아닌 그대로 붙이는? 것이다. => 관련 매서드? 숫자형 배열로 만든다음 값을 추출?
 * 
 * 
 * 
 * a와b를 붙이는 값과 b와a를 붙이는 값 중에서 더 큰 수를 return 해라. if문 ? 삼항 연산자?
 * 
 * 
 * 
 */

function solution (a,b) {
    let arra = [a.toString()];
    let arrb = [b.toString()];
    if (arra[0]+arrb[0] < arrb[0]+arra[0]) {
        return Number(arrb[0]+arra[0]);
    } return Number(arra[0]+arrb[0]);
}

/**
 * 정수 a 와 b를 문자형 배열로 바꾼뒤 
 * 
 * if문 조건문 에서 a,b의 문자형 배열의 index (0번째)를 서로 더해줘서 하나로 만든 값을
 * 비교해서 a+b 와 b+a 중 더 큰 값을 return 해주게 했다.
 * 
 * return 한 값은 Number() 메서드를 통해 문자형을 숫자형으로 바꿔 줬다.
 */

// Math.max() 메서드를 이용해서 풀기.

function solution (a,b) {
    return Math.max(+(a.toString()+b.toString()), +(b.toString()+a.toString()));
}

/**
 * Math.max()는 해당 배열 중에서 가장 큰값을 출력하는 메서드 이다.
 * 
 * 메서드 일반 괄호 안의 식은 문자형으로 변환한 a 와 b를 더한값, b와 a를 더한 값중에서
 * 더 큰 값을 출력하는 식이다.
 * 
 * +(a.toString()+b.toString()) a문자형 + b문자형 의 식 앞에 +가 붙은 이유는
 * 최종적으로 a+b의 문자형 값을 숫자형으로 강제 변환한 하려고 그러는 것이다.
 */
