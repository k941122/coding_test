/**
 * k의 개수
 * 
 * 문제 설명
 * 
 * 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
 * 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 
 * return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ i < j ≤ 100,000
 * - 0 ≤ k ≤ 9
 * 
 * 입출력 에시 
 * 
 * i	j	k	result
 * 1	13	1	6
 * 10	50	5	5
 * 3	10	2	0
 * 
 * 입출력 에시 설명
 * 
 * ex1) 본문과 동일합니다.
 * ex2) 10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.
 * ex3) 3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * ij 까지의 배열중 k가 등장하는 횟수를 찾으시오
 * 
 * let arr = Array.from({length: j - 1 +1}, (v,idx) => i +idx)
 * 
 * 배열로 만들고 
 * 그 배열을 문자형으로 통합하고
 * includes 통해 k가 몇번 나오는지 출력? 
 * 
 * 
 * 
 */

// ▼ 오답 코드
function solution (i,j,k) {
    let arr = Array.from({length: j - 1 +1}, (v,idx) => i +idx);
    let string = arr.join("");
    return string.split(k).length;
}

/**
 * 해당 i j 매개 변수로 array.from 메서드를 이용해서 배열을 만든후
 * 해당 배열을 join을 통해 문자열로 만들고 slit 을 이용해 k를 출력 하려고 했다.
 * 하지만 오답이 나왔다.
 * 
 */

//▼ 오답 코드
function solution (i,j,k) {
    let arr = Array.from({length: j - 1 +1}, (v,idx) => i +idx);
    let answer = arr.map(String).filter(v => v.includes(k)).length-1
    return answer
}

/**
 * 생성된 배열을 map메서드를 이용해 문자열 요소로 바꾼ㄴ뒤 
 * filter를 의 callback 식 include를 통해 해당 요소의 값에 
 * k가 있을 경우 에만 걸러주려고 했다.
 * 
 */

// ▼ 정답 코드
function solution (i,j,k) {
    let str = "";
    for (i; i<=j; i++) {
        str += i
    }
    return str.split(k).length -1;
}

/**
 * str 이라는 비어있는 문자열을 만들어 주고
 * 
 * for문에 기본값으로 i를 넣고 i가 j보다 작거나 같을때 까지 반복해주는 것을 
 * 이용해 i부터 j 까지의 숫자 값을 만들었다. 
 * 
 * 그 값을 str 문자열에 += 를 통해 삽입한다. 
 * 
 * 완성된 str을 return  부분에서 split을 이용해 k 부분을 기준으로 배열의 요소를 만들어 준다.
 * 그런데 split 으로 배열의 요소를 나눌경우 마지막 k 뒤에 있는 숫자들 역시 요소화 됨으로
 * 배열의 길이를 측정하는 length 메서드를 이용한뒤 -1을 해줘야 한다.
 * 
 */