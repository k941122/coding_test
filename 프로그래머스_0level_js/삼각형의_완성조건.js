/**
 * 삼각형의 완성조건(1)
 * 
 * 문제 설명
 * 
 * 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 * 
 * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 
 * 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
 * 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 
 * solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - sides의 원소는 자연수입니다.
 * - sides의 길이는 3입니다.
 * - 1 ≤ sides의 원소 ≤ 1,000
 * 
 * 입출력 예시
 * 
 *   sides	       result
 * [1, 2, 3]	     2
 * [3, 6, 2]	     2
 * [199, 72, 222]	 1
 * 
 * 입출력 예시 설명
 * 
 * ex1) 가장 큰 변인 3이 나머지 두 변의 합 3과 같으므로 삼각형을 완성할 수 없습니다. 
 *      따라서 2를 return합니다.
 * 
 * ex2) 가장 큰 변인 6이 나머지 두 변의 합 5보다 크므로 삼각형을 완성할 수 없습니다. 
 *      따라서 2를 return합니다.
 * 
 * ex3) 가장 큰 변인 222가 나머지 두 변의 합 271보다 작으므로 삼각형을 
 *      완성할 수 있습니다. 따라서 1을 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 3개의 숫자형 배열 = sides
 * 
 * 가장 큰수 Math.max
 * 
 * a : 배열중에 가장 큰수 < b+c = true 
 * 아니면 flase 
 * 
 * 위에는 삼항 연산자로 풀수 있을듯?
 * 
 */

//▼ 마지막 3번 문제에서 자꾸 틀림..!

function solution (sides) {
    let answer = 0;
    let arr = sides.sort((a,b) => b -a);
    let large =  Math.max(...arr);
    let rest = arr.shift(0);
    let rest_sum = rest[0]+rest[1]
    answer = sides.reduce((acc,cur) => acc&&large < rest_sum ? 1:2,1  )
    return answer;
}

//▼ 정답 코드

function solution (sides) {
    let answer = 0;
    let arr = sides.sort((a,b) => b -a);
    let large =  Math.max(...arr);
    let rest = arr.slice(1);
    let rest_sum = rest[0]+rest[1]
    answer = sides.reduce((acc , cur) => acc&&large < rest_sum ? 1:2 ,1 )
    return answer;
}

/**
 * 먼저 차분하게 숫자형 배열중 가장 큰값과 나머지를 구해야 하기 때문에 내림 차순 배열을
 * 만들기 위해 sort 매서드를 사용해서, 콜백함수의 매개변수로 a,b를 넣어준뒤, b-a 형식으로
 * 큰 값을 앞으로 작은 값을 뒤로 보냈다.
 * 
 * 그리고 해당 배열에서 가장 큰값을 골라내기 위해 Math.max 메서드를 이용해서 배열 중에서
 * 가장 큰수를 추출했다.
 * 
 * 큰수를 제외한 나머지 요소를 가져오고 싶어서 slice 메서드를 이용해 index 번호 1 아래의
 * 요소를 제거해 내림 차순으로 정렬된 배열에서 가장 큰 요소(index 0)를 제거했다.
 * 
 * 그리고 가장 큰 요소가 제거된 배열에서 첫번째 요소와 두번째 요소를 더해줬다.
 * 
 * 위의 과정을 거쳐 reduce 함수에서 callback 함수와 acc의 초깃값 1을 매개 변수로
 * acc(누적기그리고 가장 큰값이 나머지 합보다 작으면 1을 아니면 2를 내보내게 하는 
 * 삼항 연산자를 이용해서 값을 구했다. 
 * 
 * reduce에서 1이 초깃값으로 이용된 이유는 초깃값이 없으면 배열의 첫번째 요소로 계속 초기화
 * 되어서 배열을 순회 할수 없고, 처음부터 true(1)값을 설정해 줘야 조건이 맞으면 true(1)로 남고
 * 아니면 false(2)가 되기 때문이다
 * 
 * 
 * 
 */

