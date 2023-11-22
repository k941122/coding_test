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
 */