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
