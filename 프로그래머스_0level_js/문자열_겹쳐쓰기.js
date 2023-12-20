/**
 * 문자열 겹쳐쓰기
 * 
 * 문제 설명
 * 
 * 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
 * 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 
 * 문자열 overwrite_string으로 바꾼 문자열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
 * 
 * - 1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
 * 
 * - 0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이
 * 
 * 입출력 예시
 * 
 * my_string	overwrite_string	s	result
 * "He11oWor1d"	"lloWorl"	2	"HelloWorld"
 * "Program29b8UYP"	"merS123"	7	"ProgrammerS123"
 * 
 * 입출력 에시 설명
 * 
 * ex1) 예제 1번의 my_string에서 인덱스 2부터 overwrite_string의 
 *      길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 
 *      "HelloWorld"를 return 합니다.
 * 
 * ex2) 예제 2번의 my_string에서 인덱스 7부터 overwrite_string의 길이만큼에 해당하는 
 *      부분은 "29b8UYP"이고 이를 "merS123"로 바꾼 "ProgrammerS123"를 return 합니다.
 * 
 * 
 */

/**
 * 문제 해석
 * 
 * my_string을 s 인덱스 부터 overwrite_stirng 길이 만큼, overwrite_stirng 의 범위로 바꾸는것
 * 
 * my_string 배열화 시키기 
 * 
 * 배열화 시킨 my_string을 splice 이용해 s 부터 overwrite_stirng 길이로 분할 하고 overweirte_string으로 넣기
 * 
 *  해당 배열을 join을 이용해 문자열로 만들기 
 * 
 */


function solution(my_string, overwrite_string, s) {
    const arr = [...my_string];
    arr.splice(s,overwrite_string.length, overwrite_string);
    return arr.join("");
}
/**
 * my_string을 spread 문법을 이용해 배열로 만든후 arr의 값으로 할당한다.
 * 따로 변수에 할당하는 이유는 splice를 사용할시 원본 배열에 영향을 주기 때문이다.
 * 
 * 배열화 시킨 arr을 splice를 이용해 s부터 overwrite_string의 길이 만틈 잘라내고 
 * 맨 끝에 overwrite_string 을 넣어서 잘라낸 부분에 해당 문자열을 추가해준다.
 */