/**
 * 분수의 덧셈
 * 
 * 문제 설명
 * 
 * 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
 * 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
 * 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 0 <numer1, denom1, numer2, denom2 < 1,000
 * 
 * 입출력 예시
 * 
 * numer1	denom1	numer2	denom2	result
 * 1	      2	      3	      4	    [5, 4]
 * 9	      2	      1	      3	    [29, 6]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
 * 
 * ex2) 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * numer1 denom1 분수 분자 
 * 
 * 두 분수를 더한 값을 기약분수로 나타내기 
 * 
 * 분자와 분모를 순서대로 담기 -> 배열
 * 
 * 분자 분모 최대 공약수 약분 -> 코드로 나타내기 
 * 
 * 유클리드 호제법? 적용
 * 
 */

function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b)
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    let gcd = cal_gcd(denum, num);
    
    return [denum / gcd, num / gcd]
}


/**
 * 재귀 함수(함수 내에서 자기 자신을 호출하는 함수)를 이용해 최대 공약수를 계산한다.
 * 유클리드 호제법을 사용하여 최대 공약수를 계산했는데, 매개변수 a와b를 이용해서
 * a%b가 0인 경우 b가 최대 공약수 이므로 b를 반환한다.
 * 그게 아니라면 cal_gcd(b,a%b)를 호출해서 0이 될때 까지 반복한다. 
 * 
 * denum은 두 분수의 분자를 더한 값이고 num은 두 분수의 분모를 곱한 값이다.
 * 구해진 denum과 num을 cal_gcd 함수에 넣고 계산한 값을 gcd에 저장한다.
 * 
 * return에 gcd(최대 공약수)에 분자와 분모를 나누어 주면 , 기약 분모, 기약 분자의 값이 출력된다.
 */