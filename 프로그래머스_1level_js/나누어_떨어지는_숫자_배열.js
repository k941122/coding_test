/**
 * 나누어 떨어지는 숫자 배열
 * 
 * 문제 설명
 * 
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 
 * 배열을 반환하는 함수, solution을 작성해주세요.
 * divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 * 
 * 제한 사항
 * 
 * - arr은 자연수를 담은 배열입니다.
 * 
 * - 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
 * 
 * - divisor는 자연수입니다.
 * 
 * - array는 길이 1 이상인 배열입니다.
 * 
 * 입출력 예시
 * 
 * arr	divisor	return
 * [5, 9, 7, 10]	5	[5, 10]
 * [2, 36, 1, 3]	1	[1, 2, 3, 36]
 * [3,2,6]	10	[-1]
 * 
 * 입출력 예시 설명
 * 
 * ex1) arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.
 * 
 * ex2) arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.
 * 
 * ex3) 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * arr 베열
 * 
 * divisor 자연수
 * 
 * arr 배열의 요소중 divisor로 나누어 떨어지는 요소만 
 * 출력해서 return 하시오 
 * 
 * 여기서 나누어 떨어지는 수가 없다면 -1을 return 할것!
 * 
 */

function solution(arr, divisor) {
    const divNum = arr.filter((v) => v%divisor === 0).sort((a,b) => a-b);
    const answer = divNum.length !== 0 ?divNum: [-1];
    return answer
}

/**
 * divNum 상수에 arr배열에 filter 메서드를 이용해서 요소의 값(v)에 divisor을 나눠서 0으로
 * 떨어지는 것만 return 해준후 결과 값을 sort메서드를 이용해 오름차순 배열을 해줬다.
 * 
 * answer 상수에 divNum 배열의 길이가 0이 아닐경우 true면 divNum을 retrun false면 [-1]을 retrun 해줬다.
 */