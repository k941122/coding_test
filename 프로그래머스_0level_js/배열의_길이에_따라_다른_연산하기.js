/**
 * 배열의 길이에 따라 다른 연산하기
 * 
 * 문제 설명
 * 
 * 정수 배열 arr과 정수 n이 매개변수로 주어집니다. 
 * arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, 
 * arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ arr의 길이 ≤ 1,000
 * - 1 ≤ arr의 원소 ≤ 1,000
 * - 1 ≤ n ≤ 1,000
 * 
 * 입출력 예시
 * 
 *   arr	                n	       result
 * [49, 12, 100, 276, 33]	27	 [76, 12, 127, 276, 60]
 * [444, 555, 666, 777]	    100	 [444, 655, 666, 877]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 arr의 길이는 5로 홀수입니다. 
 *      따라서 arr의 짝수 인덱스 0, 2, 4에 주어진 n 값인 27을 더하면 
 *      [76, 12, 127, 276, 60]이 됩니다. 
 *      따라서 [76, 12, 127, 276, 60]를 return 합니다.
 * 
 * ex2) 예제 2번의 arr의 길이는 4로 짝수입니다. 
 *      따라서 arr의 홀수 인덱스 1, 3에 주어진 n 값인 100을 더하면 
 *      [444, 655, 666, 877]이 됩니다. 따라서 
 *      [444, 655, 666, 877]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * arr = 정수 배열
 * n = 정수
 * 
 * arr.length = 홀수 ?
 * 
 * [n(arr의 모든 짝수 index)] 
 * 
 * arr.length = 짝수 ?
 * 
 * [n(arr의 모든 홀수 index)]
 * 
 */

function solution (arr,n) {
    let len = arr.length;
    if (len%2 !== 0) {
        return arr.map((a,i) => i%2 ===0 ? a+n : a);
    }
     return arr.map((a,i) => i%2 !== 0 ? a+n : a);
}

/**
 * if blook scope (if문의 실행할 식이 써지는 공간)에 return이 서져 있으면 
 * else는 필요 없다.
 */

/**
 * arr 배열의 길이가 홀수이냐 짝수 이냐에 따라서 다른 계산 조건이 주어지기 때문에 
 * if문을 사용했다.
 * 
 * arr 배열이 짝수라면 해당 배열의 홀수 index 전부에 정수 n을 더하고
 * arr 배열이 홀수라면 해당 배열의 짝수 index 전부에 짝수 n을 더하는 것을 봤을때,
 * 계산이 반복된다는 것을 알수 있었다. 
 * 
 * 그러므로 map 메서드를 사용해서 풀어야 했다.
 * 
 * arr.lenght%2 !== 0 (홀수) 일때
 * arr.map((a,i) => i%2 ===0 ? a+n :a);
 * 
 * arr.map 배열에 화살표 함수를 쓰고, 각 배열 요소에 접근 할 때 해당 요소의 인덱스를 i로
 * 나타 냈다. 그리고 index의 현재 요소의 값을 a로 지정한뒤 i%2의 나머지가 0과 일치하는지
 * 아닌지로 짝수 홀수를 구분한 다음 삼항 연산자로 index의 값에 n을 더해주고 아니면 
 * 현재의 값(a)를 나오게 했다.
 * 
 * map의 배열의 모든 요소에 대해 일괄적으로 작업을 수행하는 반복작업 기능을 이용한
 * 코드였다.
 */


