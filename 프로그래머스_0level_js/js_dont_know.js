
/**
 * 조건(삼항)연산자란? 
 * 
 * 조건(삼항)연산자는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다.
 * 앞에서 부터 조건문,물음표(?),조건문이 참(truthy)일 경우 실행할 표현식, 콜론(:), 조건문이 거짓(falsy)일 경우 실행할 표현식이 배치 됩니다.
 * 해당 연산자는 if..else문의 대체재로 자주 사용됩니다.
 * 
 */

//조건(삼항)연산자 예제 코드!

function discount (isMember) {
    return isMember ? '1000원' : '2000원'
}

console.log(isMember(true)); // 1000원
console.log(isMember(false)); //2000원

/**
 * Math.floor 매서드 란?
 * 
 * Math 메서드 : 수학적인 상수와 함수를 위한 속성과 매서드를 가진 내장객체.
 * Math는 Number 자료형만 지원한다. 
 * 
 * Math.floor(); 는 무엇인가?
 * 
 * Math.floor() 함수는 주어진 숫자와 같거나 작은 정수중에서 가장 큰수를 반환 한다.
 * 
 * 구문
 * Math.floor(x);
 * 
 * 매개변수(parameter)
 * x
 * 
 * 반환 값
 * 주어진 수 이하의 가장 큰 정수!
 * 
 * floor()은 Math의 정적 메스드 이므로, 사용자가 생성한 Math 객체의 매서드로 호출할수 없고
 * 항상 Math.floor()를 사용해야 합니다. (Math는 생성자가 아닙니다.)
 * 
 * ex) console.log(Math.floor(45.95);) //45
 * 
 * 위 예시의 경우 Math.floor 일반괄호 안에 45.95 라는 숫자에서 
 * 큰 숫자인 45만 인출하며 소수점 자리인 .95는 인출하지 않는다.
 * 
 * 
 */