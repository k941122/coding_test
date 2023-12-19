/**
 * 문자열 여러번 뒤집기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. 
 * queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 
 * 의미입니다. my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - my_string은 영소문자로만 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - queries의 원소는 [s, e]의 형태로 0 ≤ s ≤ e < my_string의 길이를 만족합니다.
 * - 1 ≤ queries의 길이 ≤ 1,000
 * 
 * 입출력 예시
 * 
 * my_string	                     queries	            result
 * "rermgorpsam"	[[2, 3], [0, 7], [5, 9], [6, 10]]	"programmers"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 my_string은 "rermgorpsam"이고 주어진 queries를 순서대로 처리하면 
 *      다음과 같습니다.
 * 
 * queries	my_string
 *          "rermgorpsam"
 * [2, 3]	"remrgorpsam"
 * [0, 7]	"progrmersam"
 * [5, 9]	"prograsremm"
 * [6, 10]	"programmers"
 * 따라서 "programmers"를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * my_string은 문자열 요소
 * 
 * queries는 이차원 배열
 * 
 * 이중 배열 안의 해당 요소 만큼 my_string의 index를 움직여라.
 * 
 * for문으로 queries 길이 만큼 순환
 * 
 * 순환 할때마다 my_string의  값을 slice 한다. s,e의 범위 만큼 +1
 * 
 * 
 * 
 */

function solution (my_string,queries) {
    let str_arr = [...my_string];
    for (let i = 0; i<=queries.length;i++) {
        str_arr.slice(0,str_arr.length +1).reverse();
    }
    return str_arr.join("");
}

/**
 * 테스트 1
 * 입력값 〉	"rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]]
 * 기댓값 〉	"programmers"
 * 실행 결과 〉	실행한 결괏값 "rermgorpsam"이 기댓값 "programmers"과 다릅니다.
 * 
 * 딱히 변화가 없었다.
 */


function solution (my_string,queries) {
    let str_arr = [...my_string];

    for(let i = 0; i<queries.length; i++) {
        let [start,end] = queries[i];
        let part = str_arr.slice(start,end+1).reverse();
        for (let j = start; j<= end;j++) {
            str_arr[j] = part[j - start];
        }
    }
    return str_arr.join("");
}

/**
 * 코드를 보니 배열의 요소 배열에 담긴 값을 담을 곳이 없었고,
 * 그렇기 때문에 slice 메서드 에서 start end 인덱스를 넣어도 효과가 없었다.
 * 
 * 또한 slice는 원본을 보존 하기 때문에 원본을 찾아 오기 위한  내부 for문 역시 필요 했다.
 * 
 * my_string을 str_arr로 배열화 시키고 
 * for문을 이용해 queries 배열 길이 만큼 loop 시킨다. 
 * 
 * for문 내부에 구조분해 할당으로 queries의 요소들을 [start,end]에 할당해 주고
 * 
 * part 변수에 str_arr 배열을 slice 를 이용해서 원하는 부분까지를 잘라준다. 
 * 그리고 reverse를 이용해서 두집어 준다.
 * 
 * 만든 part 에 저장된 reverse된 부분 문자열을 원래의 배열에 복사하기 위해
 * 내부 for문을 이용해서 초기값 j를 start 로 설정하고, j가 end와 작거나 같을때 까지 반복 시켜준다.
 * 
 * 이때 원본 배열의 요소 j(start)는 part(slice로 추출한 부분)의 인덱스로 대체해 준다.
 * 
 * 외부 for문과 내부 for문 을 돌면서 수정된 배열은 loop 가 다 끝나면
 * return에 반환 되는데 변경된 배열 str_arr을 join 메서드로 문자열로 만들어 주면 된다.
 */