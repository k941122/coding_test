
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


// Math.trunc 매서드!!
//정적 Math.trunc() 매서드는 소수점 자리수를 제거해서 정수 부분을 반환!

//구문
Math.trunc(x);

//매개변수
x

//반환값 : 주어진 숫자의 정수 부분!

/**
 * Math의 다른 함수 3개 ("Math.floor(),Math.ceil(),Math.round()") 와는 다르게,
 * Math.trunc(); 는 단순하게 동작한다! 이 메서드는 주어진 값이 양수 이든 음수이든 상관없이
 * 소수점 자릿수를 제거하는 매우 단순한 동작을 한다!
 * 
 * 함수 인자(parameter)는 암묵적으로 숫자로 변환되어 매서드(Math.trunc)에 전달됨
 * 
 * trunc() 함수는 Math의 정적 매서드 이기 때문에 사용자가 생성한 Math 객체의 매서드로 호출하는 것이
 * 아닌 항상 Math.trunc() 형태로 호출해야 합니다. (Math 는 생성자가 아닙니다!)
 * 
 */

//ex)예제 
Math.trunc(13.37); //13
Math.trunc(56.89); //56

//정적 메스드와 일반 메서드의 개념과 차이?
//인스턴스 란?
//filter 함수 알아보고 개념 정리 +예제 작상!


/**
 *  더하기 할당 (+=)
 * 
 * 더하기 할당 연산자는 오른쪽 피연산자의 값을 변수에 더한 결과를 다시 변수에 할당 합니다.
 * 두 피연산자의 타입이 더하기 할당 연산자의 동작을 결정하며, 덧셈 또는 문자열 연결이 가능합니다.
 * 
 * 가능한 기능 : 덧셈(+),문자열 연결(string + string)
 * 
 * 구문
 * x += y; => x = x+y
 * 
 * 
 * ▽ 덧셈 더하기 연산자 예제!
 * 
 * let food = "cake";
 * let num = 10;
 * let boo = true
 * 
 * 위와 같은 변수를 가정할때!
 * 
 * Number + Number -> 덧셈
 * num += 5; -> let num = 15
 * 
 * boolean + Number -> 덧셈
 * boo += 3 -> let boo = 4
 * 
 * boolean + boolean -> 덧셈
 * boo += false -> let boo = 1;
 * 
 * Number + String -> 연결
 * num += "soup" -> let num = "10soup"
 * 
 * String + Boolean -> 연결
 * food += false -? let food = cakefalse;
 * 
 * String + String -> 연결
 * food + "good" -> let food = "cakegood"
 * 
 * 
 * 
 */



