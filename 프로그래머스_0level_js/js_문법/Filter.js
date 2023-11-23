/**
 * Filter() 메서드
 * 
 * Array의 인스턴스 filter() 메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고,
 * 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.
 * 
 * 
 * ▽예시 코드!
 * 
 * cosnt cosmatic = ['tonner','lipstick','lotion','eyebrow','ampoule'];
 * 
 * const reuslt = cosmatic.filter((cosmatic) => cosmatic.length > 7);
 * 
 * console.log(result); -> ['lipstick'];
 * 
 * 구문
 * 
 * filter(callbackFn)
 * filter(callbackFn, thisArg)
 * 
 * 매개변수(parameter)
 * 
 * callbackFn - 배열의 각요소에 대해 실행할 함수, 결과 배열에 요소를 유지하려면 참 값을
 *              반환하고 그렇지 않으면 거짓값을 반환해야 한다. 이 함수는 다음 인수를 통해
 *              호출됨!
 *  - elemnet -> 배열에서 처리중인 현재 요소.
 *  - index -> 배열에서 처리 중인 현재 요소의 인덱스. 
 *  - array -> filter가 호출된 배열!
 * 
 * thisArg -> callbackFn을 실행할때 this 값으로 사용할 값입니다. (순회매서드 참조!)
 * 
 * 반환 값 - 주어진 배열의 일부에 대한 얕은 복사본으로, 주어진 배열에서 제공된 함수에
 *           의해 구현된 테스트를 통과한 요소로만 필터링 합니다. 테스트를 통과한 요소가
 *           없으면 빈 배열이 반환 됩니다.
 * 
 * filter 매서드 정리!!!!
 * 
 * filter는 주어진 배열(Array)를 callback 함수에 정의된 조건(코드)에 따라서 분류한뒤 
 * 맞는 분류에 해당되는 요소,값만 필터링해서 반환되는 것이다. 
 * 조건에 통과한 요소가 없다면 빈 배열이 반환 된다!
 * 
 * 
 */