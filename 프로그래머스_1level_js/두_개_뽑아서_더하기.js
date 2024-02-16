/**
 * 두 개 뽑아서 더하기
 * 
 * 문제 설명
 * 
 * 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 
 * 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 
 * return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - numbers의 길이는 2 이상 100 이하입니다.
 *   numbers의 모든 수는 0 이상 100 이하입니다.
 * 
 * 입출력 예시
 * 
 * numbers	        result
 * [2,1,3,4,1]	[2,3,4,5,6,7]
 * [5,0,2,7]	[2,5,7,9,12]
 * 
 * 입출력 예시 설명 
 * 
 * ex1) 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
 *      3 = 2 + 1 입니다.
 *      4 = 1 + 3 입니다.
 *      5 = 1 + 4 = 2 + 3 입니다.
 *      6 = 2 + 4 입니다.
 *      7 = 3 + 4 입니다.
 *      따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
 * 
 * ex2) 2 = 0 + 2 입니다.
 *      5 = 5 + 0 입니다.
 *      7 = 0 + 7 = 5 + 2 입니다.
 *      9 = 2 + 7 입니다.
 *      12 = 5 + 7 입니다.
 *      따라서 [2,5,7,9,12] 를 return 해야 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * numbers 정수배열
 * 
 * 서로 다른 인덱스의 두개의 수 를 더해서 만들수  있는 수 
 * 
 * 배열에 오름차순으로 담기
 * 
 * 
 * 
 */

function solution(numbers) {
    let answer = [];
    for(let i =0; i <numbers.length;i++){
        for(let j = i+1;j<numbers.length;j++){
            if(i !==j){
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }

    answer = [...new Set(answer)]

    answer.sort((a,b)=>a-b);

    return answer;
}

/**
 * 이중 for문으로 두개의 인덱스의 값을 추출해서 더해준다. 이때 numbers의 길이만큼 
 * 순회한다.
 * 
 * 이중 for 문에서 j 기본값을 설정할때 i(외부 for문의 index)에 +1을 해주는 이유는 
 * 해당 i와 j가 각각 다른 index여야 하기 때문이다.
 * 
 * 이중 for문을  순회할때마다 if문을 이용해 i와 j의 값(index)가 다르면 
 * answer(빈배열의 값)에 push를 이용해 numbers의 i와 j 인덱스의 값을 더해준것을 
 * 뒤에서부터 넣어준다. 
 * 
 * 그리고 new Set() 메서드를 이용해 중복된 값을 제거해주는 배열을 만드는데 
 * 이때 set()은 객체를 만들기 때문에 빈괄호 안에 spread 문법을 사용하고
 * new Set(answer)형식으로 만들어야 한다. 
 * 
 * 그리고 해당 배열을 sort를 이용해 내림 차순으로 배열 하면 된다.
 */