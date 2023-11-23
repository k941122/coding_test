/**
 * 
 * Map 메서드!
 * 
 * map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아
 * 새로운 배열을 반환 하는것.
 * 
 * ▽ 예시 코드!
 * 
 * const array1 = [1,4,9,16];
 * const map1 = array1.map((x) => x*2);
 * 
 * console.log(map1); -> Array [2,8,16,32]
 * 
 * 
 * map 메서드는 array1 배열의 각 요소에 대해 주어진 콜백 함수를 호출하고, 그 함수의 
 * 반환값으로이루어진 새로운 배열인 "map1"을 생성한다.!
 * 구문
 * 
 * arr.mpa(callback(currentValue[,index[,array]][thisArg])
 * 
 * 매개변수(parameter)
 * 
 * callback - 새로운 배열 요소를 생성하는 함수. 다음 세가자 인수를 가진다!
 *  - currentValue - 처리할 현재요소.
 *  - index - 처리할 현재 요소의 인덱스(순서).
 *  - array - map()을 호출할 배열
 * 
 * thisArg - callback을 실행할때 this 로 사용되는 값.
 * 
 * 반환값 - 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.
 * 
 * 
 * map 매서드는 기존 배열을 변경하지 않고 새로운 배열을 반환!
 * 원본 배열은 유지되면서 변형된 값을 얻을수 있음!
 * 
 * 원본과 새로운 배열 둘다 유지!
 * 
 */