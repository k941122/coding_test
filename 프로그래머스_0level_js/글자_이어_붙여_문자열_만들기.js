
/**
 * 글자 이어 붙여 문자열 만들기
 * 
 * 문제 설명
 * 
 * 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다.
 *  my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 
 * 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - my_string의 원소는 영소문자로 이루어져 있습니다.
 * - 1 ≤ index_list의 길이 ≤ 1,000
 * - 0 ≤ index_list의 원소 < my_string의 길이
 * 
 * 입출력 예시
 * 
 *     my_string	              index_list	                              result
 *  "cvsgiorszzzmrpaqpe"	[16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]	 "programmers"
 *  "zpiaz"	                [1, 2, 0, 0, 3]	                             "pizza"
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 my_string에서 인덱스 3, 5, 6, 11, 12, 14, 16, 17에 해당하는 글자는 
 * 각각 g, o, r, m, r, a, p, e이므로 my_string에서 index_list에 들어있는 
 * 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, r, o, g, r, a, m, m, e, r, s입니다. 따라서 "programmers"를 return 합니다.
 * 
 * ex2) 예제 2번의 my_string에서 인덱스 0, 1, 2, 3에 해당하는 글자는 
 * 각각 z, p, i, a이므로 my_string에서 index_list에 들어있는 원소에 해당하는 
 * 인덱스의 글자들은 각각 순서대로 p, i, z, z, a입니다. 따라서 "pizza"를 return 합니다.
 */



function solution (my_string,index_list) {
    let answer = '';
    let len_str = my_string.length;
    let len_in = index_list.length;
    for (let i = 0; i <= len_in; i++ ) {
        if (index_list[i] >= 0&&index_list[i]<len_str) {
                answer += my_string[index_list[i]]
        }
    }
    return answer;
}

/**
 * 위 코드를 for 반복문으로 index_list의 길이 만큼 반복 시키고
 * 반복 시키는 동안 if 문을 이용해 index_list의 i값이 0 보다 크거나 같고 index_list의 요소가 my_string의 길이보다 작은지 확인한다.
 * 만약 index_list의 요소(i)가 위의 조건과 일치 한다면,
 * 
 * indexlist의 요소(i)에 해당하는 my_string의 문자를 answer에 누적 시킨다.
 * 
 * for문이 index_list 의 길이만큼 loop 가 끝난다면 해당 문자열이 return 된다!
 */


//▽ Array.reduce 를 통한 풀이!

function solution02 (my_string,index_list) {
    return index_list.reduce(( acc , cur ) => {
        acc += my_string[cur];

        return acc;
    }, '');
}

/**
 * 위의 코드는 js의 reduce 메서드를 이용한 풀이이다.
 * 
 * index_list를 reduce 메서드를 이용해 (acc(누산기: 리듀서 함수의 반환값),cur(현재 값: 처리할 현재 요소)) 를 인자로 받아
 * acc(누산기)에 my_string의 배열 순서로 [cur(index_list)] 을 가진 값을 누적 시키고 그 값을 return 해준다. 
 */


