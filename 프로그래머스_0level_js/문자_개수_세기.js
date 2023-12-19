/**
 * 문자 개수 세기
 * 
 * 문제 설명
 * 
 * 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
 *  my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, 
 * my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 
 * 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 
 * solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * -  1 ≤ my_string의 길이 ≤ 1,000
 * 
 * 입출력 예시
 * 
 *   my_string	              result
 * "Programmers"	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
 * 
 * 입출력 에시 설명
 * 
 * ex1) 예제 1번의 my_string에서 'P'가 1개, 'a'가 1개, 'e'가 1개, 'g'가 1개, 
 * 'm'이 2개, 'o'가 1개, 'r'가 3개, 's'가 1개 있으므로 
 * [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 
 * 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 
 * 3, 1, 0, 0, 0, 0, 0, 0, 0]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * 알패벳 대소문자로 이루어진 문자열 my_string
 * 
 * 문자열의 알파벳에서 소문자 a~z 대문자 A~Z 를 있다면 1 없는것은 0으로 52개의 정수 배열로 나타내라
 * 
 * 52개의 인덱스를 가진 배열 만들기 0으로 이루어진 배열 만들기 
 * 
 * mystring에 대한 반복문 for 
 * 
 * 
 * 
 */

function solution(my_string) {
    const arr = Array(52).fill(0)

    return [...my_string].reduce((acc, cur) => {

        let curIdx
        const curAlpha= cur.charCodeAt()

        if(curAlpha >= 97) {
         curIdx = curAlpha - 71   
        } else {
         curIdx = curAlpha-65   
        }
         
        acc[curIdx] = acc[curIdx] ?? 0
        acc[curIdx]++

        return acc
    }, arr)
}

/**
 * arr이라는 배열에 52 값을 가진 배열을 만들고, fill로 요소의 값을 0으로 채웠다.
 * 
 * 그리고 난뒤 my_string을 spread 문법을 통해 배열화 시킨뒤 각 요소들을 reduce를 이용해
 * 
 * arr 배열에 요소를 acc의 기본값으로 설정한뒤 reduce를 실생시켜 준다.
 * 
 * curAlpha는 cur(현재값)에 charCodeAt 메서드를 통해 아스키 코드 값을 넣어준다.
 * 
 * curIdx는 현재 문자가 결과배열에서 어느 위치에 있는지 나타내는 인덱스를 표시 해준다
 * 
 * 이 curIdx를 if문의 조건에 curAlpha(아스키 코드값)이 97보다 크거나 같을때
 * curIdx에 cur Alpha - 71을 빼준다. 왜 97이냐면 소문자의 아스키 코드는 97 이상이기 때문이다.
 * 
 * 소문자의 경우 curAlpha에 71을 빼주는 이유가 소문자 a의 아스키 코드인 97에서 26(대문자
 * 알파벳 개수)를 제외하고, 추가적으로 45를 빼서 소문자가 배열의 뒷부분에 인덱스에
 * 위치하도록 하는 계산 이다.
 * 
 * else 부분은 소문자가 아닌 대문자의 경우이다. 대문자의 경우 curAlpha에 65를 뺀다.
 * 대문자 A의 아스키 코드인 65를 빼서 ,대문자가 배열의 앞부분 인덱스에 위치하도록 하는 계산이다.
 * 
 * acc[curIdx]가 undefined 일때 0을 할당하기 위해 acc[curIdx] = acc[curIdx] ?? 0 작성 했다.
 * acc의 curIdx에 1을 누적 시키면서 해당 인덱스에 몇번 나왔는지를 기록한다(동일한 알파벳이)
 */