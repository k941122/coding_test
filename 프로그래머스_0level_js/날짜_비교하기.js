/**
 * 날짜 비교하기
 * 
 * 문제 설명
 * 
 * 정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 
 * [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, 
 * day는 날짜를 나타냅니다.
 * 
 * 만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한 사항
 * 
 * - date1의 길이 = date2의 길이 = 3
 *   0 ≤ year ≤ 10,000
 *   1 ≤ month ≤ 12
 *   day는 month에 따라 가능한 날짜로 주어집니다.
 * 
 * 
 * 입출력 예시
 * 
 *     date1	       date2	    result
 * [2021, 12, 28]	[2021, 12, 29]	  1
 * [1024, 10, 24]	[1024, 10, 24]	  0
 * 
 * 입출력 예시 설명
 * 
 * ex1) date1이 date2보다 하루 앞서기 때문에 1을 return 합니다.
 * ex2) date1과 date2는 날짜가 서로 같으므로 date1이 더 앞서는 날짜가 아닙니다. 따라서 0을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * date1 배열의 요소와 date2배열의 요소들의 값을 0부터 2까지 차레대로 비교하고 
 * 
 * date1 < date2 라면 true = 1, 아니면 false = 0
 * 
 */


// ▼ 오답 코드
function solution (date1,date2) {
    for(let i = 0; i <=date1.length; i++) {
        if (i < date2[i]) {
            return 1
        } else if (i>=date2[i]) {
            return 0
        }
    }
}

/**
 * for 반복문이 date1을 loop할때 마다. 
 * date1의 원소가 date2의 원소와 값을 비교해서 date2의 원소가 크다면 1을
 * 아니라면 0을 출력하게 했다.
 * 
 * 테스트 2
 * 입력값 〉	[1024, 10, 24], [1024, 10, 24]
 * 기댓값 〉	0
 * 실행 결과 〉	실행한 결괏값 1이 기댓값 0과 다릅니다.
 * 
 * 하지만 테스트 2번에서 오답이 나왔다.
 */


// ▼ 정답 코드
function solution (date1, date2) {
    let [year1,month1,day1] = date1;
    let [year2,month2,day2] = date2;
    if(year1 !== year2) return year1<year2?1:0;
    if(month1 !== month2) return month1<month2?1:0;
    if(day1 !== day2) return day1<day2?1:0;
    return 0;
}

/**
 * 구조 분해 할당으로 date1과 date2의 요소를 정의한뒤,
 * 
 * if문 3개를 이용해 year month day 요소의 값들이 서로 일치하지 않을 경우
 * 
 * 삼항연산자를 이용해 date1의 요소가 date2의 요소보다 작을 경우 1을 출력하고 아니면 0을 출력하게 했다.
 * 
 * 기본적인 return 값은 0으로 설정해서 date1과date2의 모든 요소의 값이 같은 경우 0을 출력한다.
 * 
 * 오답 코드에서 실수 했던 부분은, date2의 요소의 값은 고정되 있는데 date1의 요소의 값만
 * 변하고 있어서 그런것 같다.
 */

// ▼  새로운 메서드

function solution (date1 , dat2) {
    return new Date(date1) < new Date(date2)?1:0;
}

/**
 *  new Date 메서드는 현재 날짜와 시간을 나타 내는 값을 가진다.
 *  인수를 전달하지 않으면 현재 날짜와 시간을 가지고
 * 
 * 인수로 숫자타입을 전달하면 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 가지는 
 * 값을 반환한다.
 * 
 * 그리고 이번 문제에서 사용한 new Date에 dateString을 넣으면 
 * 지정된 날짜와 시간을 가지는 값을 반환한다. 
 * 
 * ※ 이때 전달한 문자열은 Date.parse 메소드에 의해 해석 가능한 형식 이어야 한다.
 */