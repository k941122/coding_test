/**
 * 문자열 밀기
 * 
 * 문제 설명
 * 
 * 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막
 *  문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 
 * 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 
 * 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한 사항
 * 
 * - 0 < A의 길이 = B의 길이 < 100
 * - A, B는 알파벳 소문자로 이루어져 있습니다.
 * 
 * 입출력 에시
 * 
 *    A	      B	    result
 * "hello"	"ohell"	  1
 * "apple"	"elppa"	 -1
 * "atat"	"tata"	  1
 * "abc"	"abc"	  0
 * 
 * 입출력 예시 설명
 * 
 * ex1) "hello"를 오른쪽으로 한 칸 밀면 "ohell"가 됩니다.
 * ex2) "apple"은 몇 번을 밀어도 "elppa"가 될 수 없습니다.
 * ex3) "atat"는 오른쪽으로 한 칸, 세 칸을 밀면 "tata"가 되므로 최소 횟수인 1을 반환합니다.
 * ex4) "abc"는 밀지 않아도 "abc"이므로 0을 반환합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * A B 는 문자형 이다. 이 문자형의 알파벳을 하나씩 이동해서 B와 같은 형태를 만들고
 * 만들지 못하면 -1을 RETURN 하라 
 * 
 * if 문을 이용
 * 
 * for 반복문? map ? 
 * 
 * a를 배열화 시키기! 
 * 
 * for문 속에 넣을 식 구하기 -> a의 첫번째 인덱스를 마지막 으로 옮겨서 문자형으로 만든뒤
 * B와 비교하기 
 * 
 */


//▼ 오답 코드 01
function solution (A,B) {
    let answer = 0;
    let arr = A.split("");

    if (A === B) answer = 0
    for (let i =0; i < arr.length; i++) {
        let arr2 = arr.unshift(arr.pop()).join("");

        if (arr2 === B) {
            answer += 1;
        }
    }

    return !answer? answer:-1; 
}

/**
 * TypeError: arr.unshift(...).join is not a function
 * 
 * 해당 부분이 함수가 아니라고 나왔다. 알아보니, unshift 메서드는 배열에 요소를 추가한뒤
 * 길이를 출력하기 때문에 숫자이고. 숫자 타입에는 join 메서드를 사용할수 없다.
 * 
 * 
 */


//▼ 오답 코드 02




function solution (A,B) {
    let answer = 0;
    let arr = A.split("");

    if (A === B) answer = 0
    for (let i =0; i < arr.length; i++) {
        arr.unshift(arr.pop());

        if (arr.join("") === B) {
            answer += 1;
        }
    }

    return !answer? answer:-1; 
}

/**
 * 테스트 1
입력값 〉	"hello", "ohell"
기댓값 〉	1
실행 결과 〉	실행한 결괏값 -1이 기댓값 1과 다릅니다.
테스트 2
입력값 〉	"apple", "elppa"
기댓값 〉	-1
실행 결과 〉	실행한 결괏값 0이 기댓값 -1과 다릅니다.
테스트 3
입력값 〉	"atat", "tata"
기댓값 〉	1
실행 결과 〉	실행한 결괏값 -1이 기댓값 1과 다릅니다.
테스트 4
입력값 〉	"abc", "abc"
기댓값 〉	0
실행 결과 〉	실행한 결괏값 -1이 기댓값 0과 다릅니다.

값이 틀리게 나왔다. 코드를 살펴보니. answer += 1이 if (arr.join("") === B)
안에 있는게 아닌 밖으로 나와 있어야 했다. answer에 누적 되는것은 for문을 돌때마다
unshift(arr.pop()) (첫번재 인덱스를 뒤로 옳기는 코드)가 반복되는 횟수 였기 때문이다.

또한 삼항 연산자 부분에서 코드 오류가 난 부분이, answer이 0이 아니면 asnwer 맞으면 -1이라고 했는데
0은 A와B가 처음부터 일치했을때 사용될 결과 이기 때문에 틀렸다.

 */


// ▼ 정답 코드
function solution (A,B) {
    if (A === B) return 0

    let arr = A.split("");
    let answer = 0;
    

    
    for (let i =0; i < arr.length; i++) {
        arr.unshift(arr.pop());
        answer += 1;

        if (arr.join("") === B) {
            return answer;
        }
    }

    return -1; 
}

/**
 * if 문에서 A와B의 값이 일치한다면 0을 출력하고
 * 
 * A를 split 메서드를 통해 배열로 만들어 준뒤 for문의 조건에서 a배열의 길이 보다 작을때 까지만
 * loop해 준다.
 * 
 * 해당 for문을 한번 loop 할때마다 위에서 만들어 놓은 변수 arr의 요소의 인덱스를 변경 시키기 위해
 * unshift 메서드 안에 pop 메서드를 사용한다. unshift 는 배열의 맨앞에 새로운 요소를 추가 하는건데
 * 그 안에 pop 메서드를 이용해서 맨뒤의 요소를 가지고 와서 출력 해준다. 
 * 
 * 그러면 배열의 시작 부분에 맨 뒤의 요소가 오개되면서 새로운 배열이 만들어 진다.
 * 
 * 그리고 한번 loop 할때마다 answer에 1씩 누적 시키고 
 * 
 * if 문을 이용해 unshift를 이용해 만들어진 배열을 join으로 문자형으로 만들어 준다음
 * B와 비교해서 값이 일치하면 누적된 answer을 출력 시킨다. 
 * 
 * 이 모든 것들과 일치 하지 않을때 최초 return 에 설정된 -1이 출력 된다.
 */