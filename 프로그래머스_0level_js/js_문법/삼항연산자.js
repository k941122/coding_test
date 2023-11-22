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