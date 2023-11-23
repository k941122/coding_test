/**
 * Fill 매서드
 * 
 * Array 인스턴스의 fill()매서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로
 * 변경합니다. 그리고 수정된 배열을 반환 합니다.
 * 
 * ▽코드 예시
 * 
 * const array1 = [1,2,3,4];
 * 
 * cnosole.log(array1.fill(0,2,4)); -> [1,2,0,0]
 * 
 * console.log(array1.fill(5,1)); -> [1,5,5,5]
 * 
 * console.log(array1.fill(6)); -> [6,6,6,6]
 * 
 * 
 * 구문 
 * 
 * fill(value)
 * fill(value, start)
 * fill(value,start,end)
 * 
 * 매개 변수(parameter)
 * 
 * value - 배열을 채울 값입니다. 배열의 모든 요소는 정확히 이 값이 될 것입니다.
 *         value가 객체일 경우, 배열의 각 슬롯은 해당 객체를 참조합니다.
 * 
 * start - 채우기를 시작할 0 기반 인덱스로, 정수로 변환된다.
 * 
 *  - 음수 인덱스는 배열의 끝부터 거꾸로  센다.
 *    start < 0인 경우, start + array.length가 사용 됩니다.
 * 
 *  - start < -array.length 또는 start가 생략된 경우, 0이 사용됩니다.
 * 
 *  - start >= array.length 이면, 아무 인덱스도 채워지지 않습니다.
 * 
 * end - 채우기를 끝낼 0 기반 인덱스로, 정수로 변환 된다. fill()은 end까지 채우며,
 *       end는 포함하지 않습니다.
 * 
 *  - 음수 인덱슨는 배열의 끝부터 거꾸로 셉니다. end <  0인 경우, end + array.length가 사용됨
 * 
 *  - end < -array.length 이면, 0이 사용됩니다.
 * 
 * - end >= array.length 이거나 end가 생략된 경우, array.length가 사용되어 끝까지 모든
 *   인덱스가 채워집니다.
 * 
 *  - end가 정수로 변환된 후, after 보다 앞에 위치하면, 아무 인덱스도 채워지지 않습니다.
 * 
 * 변환 값 - value 로 채워진 변경된 배열 입니다.
 * 
 * 
 * fill 매서드에 대한 정리!
 * 
 * 배열이름.fill(채우고자 하는 값,시작 index, 끝 index);
 * 
 * -> fill 매서드의 채우고자 하는 값에 숫자형 혹은 문자형을 넣고
 *    시작 index는 fill 매서드가 적용되는 배열에서 시작 되는  요소 순서를 지정한다.
 *    끝 index는 fill 매서드가 적용되는 배열에서 끝나는 요소 순서를 지정한다.
 *    
 * ※ fill메서드의 시작 index 부터 채우고자 하는 값이 채워지지만.
 *    끝 index는 지정된 끝 index 이전 까지만 채워진다. (끝 index 자리의 요소는 그대로 있음)
 * 
 * 
 * 
 * 
 * 
 * 
 */