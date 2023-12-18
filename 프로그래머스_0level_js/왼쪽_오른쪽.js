/**
 * 왼족 오른쪽
 * 
 * 문제 설명
 * 
 * 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 
 * 있습니다. str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 
 * 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 먼저 나오는 문자열이 "r"이라
 * 면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 
 * return하도록 solution 함수를 완성해주세요. "l"이나 "r"이 없다면 빈 리스트를 return합니다.
 * 
 * 제한 사항
 * 
 * - 1 ≤ str_list의 길이 ≤ 20
 * - str_list는 "u", "d", "l", "r" 네 개의 문자열로 이루어져 있습니다.
 * 
 * 입출력 에시
 * 
 *  str_list	           result
 * ["u", "u", "l", "r"]	["u", "u"]
 * ["l"]	                []
 * 
 * 입출력 에시 설명
 * 
 * ex1) "r"보다 "l"이 먼저 나왔기 때문에 "l"의 왼쪽에 있는 문자열들을 담은 리스트인 ["u", "u"]를 return합니다.
 * ex2) "l"의 왼쪽에 문자열이 없기 때문에 빈 리스트를 return합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * str_list 는 ud lr 
 * 
 * l 이 먼저 나오면 l의 왼쪽에 있는 요소
 * 
 * r 이 먼저 나오면 r 의 오른족에 있는 요소
 * 
 * 의외로 if else 관련 해서 풀면 될것 같다, 
 * 
 * if (lr 없을 경우) 빈배열
 * else if (l이 있을 경우)
 * else r이 없을 경우
 * 
 */

function solution (str_list) {
    const list = str_list.findIndex(value => value === "l"||value === "r");

    if(list === -1) {
        return [];
    } else if (str_list[list] === "l") {
        return str_list.slice(0,list);
    }else {
        return str_list.slice(list+1);
    }
}


/**
 * 이 문제는 findIndex 메서드를 이용해 for문을 이용하지 않고 풀수 있었다.
 * 
 * list 변수에 str_list 배열에 findIndex 함수를 적용해 value가 "l" 또는 "r" 인 요소의
 * 첫번째 index를 반환 하게 했다. 
 * findIndex 함수는 해당 배열의 요소에 주어진 콜백 함수의 조건을 보고 true면 true를 나오게하는
 * 첫번째 요소의 인덱스를 나오게 한다. 만약 조건에 부합하는 요소가 없으면 -1을 출력한다.
 * 
 * if 문 에서 findIndex를 적용시킨 배열에서 l과r이 나오지않았다면 -1이 나오게 되므로
 * -1과 값이 같은 경우 [] 빈 배열을 출력 하게 했다.
 * 
 * else if문 에서 str_list배열에서 list 에서 나온 인덱스에 해당하는 요소를 불러와서
 * 이 요소가 "l"과 같으면 str_list 배열에서 slice 메서드를 이용해 l의 왼쪽 범위인
 * 0부터 list 까지의 범위를 추출 한다.
 * 
 * else 문에서는 -1도 "l"도 아니라면 "r"이기 때문에 
 * str_list 배열에서 slice 메서드로 list 에 +1을 더해줘야한다.
 * 왜냐하면 r은 오른쪽 요소들을 출력 해야 되는데, r이 먼저 나온 list 는 
 * str_list에서 r의 index를 출력하고, slice는 r의 오른쪽 부터 시작 되야 되기 때문에
 * +1 해야 한다.
 * 
 * if 에서 위에서 
 */