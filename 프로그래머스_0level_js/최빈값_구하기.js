/**
 * 최빈값 구하기
 * 
 * 문제 설명
 * 
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
 * 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 
 * 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
 * 
 * 제한 사항
 * 
 * - 0 < array의 길이 < 100
 * - 0 ≤ array의 원소 < 1000
 * 
 * 입출력 예시
 * 
 * array	result
[1, 2, 3, 3, 3, 4]	3
[1, 1, 2, 2]	-1
[1]	1
 * 
 * 입출력 예시 설명
 * 
 * ex1) [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.
 * 
 * ex2) [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.
 * 
 * ex3) [1]에는 1만 있으므로 최빈값은 1입니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 최빈값 가장 자주 나오는값
 * 
 * 정수배열 array
 * 
 * 가장 자주 나오는 값을 측정 
 * 
 * 없으면 -1 return
 * 
 */

function solution(array) {
    const obj = {};
  
    array.forEach((number) => {

      if (!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    });
  
    let highestValue = 0;
  
    for (let key in obj) {
      const value = obj[key];
      if (value > highestValue) {
        highestValue = value;
        highestValueKey = Number(key); 
      }
    }
  
    const maximum = Math.max(...Object.values(obj));
  
    const mode = Object.keys(obj).filter((key) => obj[key] === maximum);
  
    return mode.length === 1 ? highestValueKey : -1;
  }

/**
 * 주어진 배열을 객체에 넣기 위해 객체를 생성한다,
 * 
 * 그리고 난뒤 array배열안에 숫자를 key로 숫자의 개수를 value로 객체에 넣어준다.
 * 이때 array배열을 forEach문을 이용해 순회해 주면서 number 값을 매개변수로 받아서
 * 
 * if문 조건에서 obj의 요소가 number이 아니면 obj[number] -> 객체의 요소는 1로 할당해 주고
 * 
 * 숫자면 해당 객체의 값에 1을 누적 시킨다.
 * 
 * 가장큰 숫자의 개수를 가지고 있는걸 구하기 위해 
 * 
 * hightestValue 에 0으로 초기화 시키고
 * for  in 문으로 해당 obj 객체의 key 를 순회한다.
 * 
 * value 를 obj의 키값이라고 할때
 * 
 * if문의 조건으로 value 가 obj의 키값보다 크면 
 * heighestValue 는 value 로 값을 매겨주고
 * 
 * hightestValuekey값은 Number의 키값과 같다.
 * 
 * Math.max 메서드로 객체 내부의 최고 값을 찾은다음
 * 
 * mode 상수에 최대값의 value를 가지고 있느, key들로 배열을 생성한다.
 * filter 메서드 안에서 obj 객체의 key값이 위에서 구한 maximum 변수에 할당된
 * 최대값들과 일치하는 것만을 배열로 만들어 출력 한다.
 * 
 * 삼항 연산자를 사용해서 mode의 길이가 1 이면 hightestValue 값을 출력 하고
 * 아니면 -1을 출력한다.
 */