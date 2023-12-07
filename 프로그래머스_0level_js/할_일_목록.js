/**
 * 할 일 목록
 * 
 * 문제 설명
 * 
 * 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 
 * 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 
 * 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * - 1 ≤ todo_list의 길이 1 ≤ 100
 * - 2 ≤ todo_list의 원소의 길이 ≤ 20 
 *   todo_list의 원소는 영소문자로만 이루어져 있습니다.
 *   todo_list의 원소는 모두 서로 다릅니다.
 * - finished[i]는 true 또는 false이고 true는 todo_list[i]를 마쳤음을, 
 *   false는 아직 마치지 못했음을 나타냅니다.
 * - 아직 마치지 못한 일이 적어도 하나 있습니다.
 * 
 * 입출력 예시
 * 
 *                        todo_list	                                       finished	                     result
 * ["problemsolving", "practiceguitar", "swim", "studygraph"]	[true, false, true, false]	["practiceguitar", "studygraph"]
 * 
 * 입출력 예시 설명
 * 
 * ex1) 예제 1번의 todo_list 중에서 "problemsolving"과 "swim"은 마쳤고, 
 *      "practiceguitar"와 "studygraph"는 아직 마치지 못했으므로 
 *       todo_list에서 나온 순서대로 담은 문자열 배열 
 *       ["practiceguitar", "studygraph"]를 return 합니다.
 * 
 */

/**
 * 문제 해석
 * 
 * todo_list (문자열 배열)
 * 
 * fisinished (문자열 배열) -> 완료한 일들 ->제거 해야됨 (false)
 * 
 * 완료하지 못한 일들을 담은 배열 -> true
 * 
 * todolist 배열에 finished 배열의 요소들이 일치하는 부분을 제거
 * 
 * finished 배열의 요소들이 있는가?
 * 
 * 
 * 
 */

// ▼ 오답 코드
function solution (todo_list, finished) {
    return todo_list.map((v,i) => !v.includes(finished[i])? v:"");
}

/**
 * todolist 배열에서 map 메서드를 이용해 callback 식에서 삼항 연산자를 이용해
 * 맞으면 v를 반환하고 아니면 공백을 return 하려고 했다. 하지만 계속 오답이 나왔다.
 */

function solution (todo_list, finished) {
    return todo_list.filter((v,i) => finished[i] === false);
}

/**
 * 사용된 메서드를 map 에서 filter로 바꾸고 value 와 index를 매게변수로 준 callback을
 * 이용해서 finished의 요소가 false 로 설정해 주면 todo_list 배열에서 finished 요소가 삭제된다.
 * 
 */