/**
 * Array.reduce(); 메서드
 * 
 * reduce 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고,
 * 하나의 결과값을 반환합니다.
 * 
 * reducer 함수는 네 개의 인자를 가집니다.
 * 
 * 1. 누산기 (acc)
 * 2. 현재 값 (cur)
 * 3. 현재 인덱스 (idx)
 * 4. 원본 배열 (src)
 * 
 * 리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지 되므로
 * 결국 최종 결과는 하나의 값이 된다.
 * 
 * 
 * reduce() 구문
 * 
 * arr.reduce(callback[, initalValue])
 * 
 * 매개 변수 (parameter)
 * 
 * callback - 배열의 각 요소에 대해 실행할 함수, 다음 네 가지 인수를 받습니다.
 * 
 * - accumulator
 *   누산기는 콜백의 반환값을 누적한다. 콜백 이전의 반환값, 콜백의 첫 번째 호출
 *   이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
 *  - currentValue
 *    처리할 현재 요소.
 *  - currentIndex
 *    처리할 현재 요소의 인덱스, initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
 * - array
 *   reduce()를 호출한 배열
 * 
 * initialValue 
 * callback의 최초 호출에서 첫 번째 인수(acc=누산기)에 제공하는 값, 초기값을 제공하지 않으면 배열의
 * 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생한다.
 * 
 * 
 * ▽reduce 작동 방식!
 * 
 * let arr = [0,1,2,3,4]
 * arr.reduce((accumlator,currentValue,currentIndex,array) => acc +cur);
 * 위 식에서 콜백은 4번 호출됨! 
 * 
 * callback     accumulator   currentValue  curentIndex   array      반환값
 * 1번째 호출        0              1            1      [0,1,2,3,4]     1
 * 2번째 호출        1              2            2      [0,1,2,3,4]     3
 * 3번째 호출        3              3            3      [0,1,2,3,4]     6
 * 4번째 호출        6              4            4      [0,1,2,3,4]     10
 * 
 * reduce는 for문 처럼 배열의 각 요소를 loop 하면서 특정 동작을 수행한다.
 * 위에서도 callback 함수에 acc(누산기) 와 acc(현재 값) 을 통해 acc에 cur 현재 값을 
 * 누적시킨 값을 도출한다. 
 * 
 * acc(누산기)에 초기값을 작성하지 않았음으로 0 이고, currentValue는 배열의 두 번째 값임으로 1이다.
 * currentIndex 역시 1(배열의 두 번째) 이다. 
 * 
 * acc(누산기)와 cur(현재값)이 배열의 currentIndex만큼 반복 하면서 4번을 반복하고
 * acc에 누적된 값이 나오게 된다.
 * 
 * ▽ reduce()의 두번 째 인수로 초기값을 제공하는 경우
 * 
 * let arr = [0,1,2,3,4]
 * arr.reduce((accumlator,currentValue,currentIndex,array) => acc + cur, 10 )
 * 결과값 => 20
 * 
 * callback     accumulator   currentValue  curentIndex   array      반환값
 * 1번째 호출        10             0            0      [0,1,2,3,4]     10
 * 2번째 호출        10             1            1      [0,1,2,3,4]     11
 * 3번째 호출        11             2            2      [0,1,2,3,4]     13
 * 4번째 호출        13             3            3      [0,1,2,3,4]     16
 * 5번째 호출        16             4            4      [0,1,2,3,4]     20
 * 
 * reduce()의 두번재 인자에 설정된 숫자는 acc(누산기)의 초기값이 된다.
 * 그래서 arr 배열의 요소의 순서대로 순회를 해서 누적된 합을 배열의 순회를 끝내면 
 * return 한다.
 * 
 * ▽ 객체 배열에서의 값 합산!
 * 
 * let initialValue = 0;  -> initialValue (초기값) 설정!
 * let obj = [{x:1},{x:2},{x:3}]
 * 
 * const obj_re = obj.reduce((accumlator, currentValue )=> accumlator + currentValue.x;,initialValue);
 * console.log(obj_re); -> 6
 * 
 * ※객체(Object)로 이루어진 배열(Array)에 들어 있는 값을 합산하기 위해서는 반드시! 
 *   초기값을 주어 각 항목이 여러분의 함수를 거치도록 해야 합니다.
 * 
 * 콜백함수 return에 있는 식에 currentValue.x는 객체 x의 현제 값 을 의미한다. 
 * 
 * 객체를 요소로  가진 배열에 reduce 매서드를  쓸때 initialValue를 설정해야 하는 이유는
 * accumlator(누산기)의 값이 설정되지 않았을 경우 배열의 첫번째 요소에서 가져오는데 
 * 객체는 그 요소의 값이 읽히지 않기 때문이다.  
 * 
 * ▽ 중첩 배열 펼치기
 * 
 * let flattened = [[0,1],[2,3],[4,5]]
 * 
 * const flat_zip = flattened.reduce((accumlator,currentValue) => accumlator.concat(currentValue),[]);
 * 
 * reduce의 두번째 인자에 빈배열( [] )을 삽입하고 이 두번재 인자가 acc의 초기값이 된다.
 * acc에 concat(두개이상의 배열을 병합하는 매서드!)를 이용해 중첩된 배열들을 index 데로
 * acc에 누적시킨다. 
 * 
 * 그러면 누적된 [0,1,2,3,4,5] 배열이 return 된다.
 * 
 * 
 * 
 * 
 * 
 */