/**
 * 부분 문자열 이어 붙여 문자열 만들기
 * 
 * 문제 설명
 * 
 * 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 
 * 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 
 * 인덱스 e까지의 부분 문자열을 의미합니다. 
 * 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 
 * 문자열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한 사항
 * 
 * - 1 ≤ my_strings의 길이 = parts의 길이 ≤ 100
 * - 1 ≤ my_strings의 원소의 길이 ≤ 100
 * - parts[i]를 [s, e]라 할 때, 다음을 만족합니다.
 *   0 ≤ s ≤ e < my_strings[i]의 길이
 * 
 * 입출력 예시
 * 
 *                     my_strings	                                      parts	                   result
 * ["progressive", "hamburger", "hammer", "ahocorasick"]	[[0, 4], [1, 2], [3, 5], [7, 7]]	"programmers"
 * 
 * 입출력 예시 
 * 
 * ex1) 예제 1번의 입력을 보기 좋게 표로 나타내면 다음과 같습니다.
 *
 * i	my_strings[i]	parts[i]	부분 문자열
 * 0	"progressive"	[0, 4]	"progr"
 * 1	"hamburger"	[1, 2]	"am"
 * 2	"hammer"	[3, 5]	"mer"
 * 3	"ahocorasick"	[7, 7]	"s"
 * 
 * 각 부분 문자열을 순서대로 이어 붙인 문자열은 "programmers"입니다. 
 * 따라서 "programmers"를 return 합니다.
 * 
 */

/**
 * 문제 분석
 * 
 * parts 는 숫자형 배열들
 * my_strings 는 문자형들
 * 
 * 문자형에서 숫자형 배열들의 길이만큼 쪼개서 합쳐라
 * 
 * mystrings를 배열화 시키되(2) ,을 기준으로 각 문자열을 나눠야한다(1). -> 관련 메서드
 * -> split(,)? , 
 * 
 * mystrings 에서 part 배열에 일치하는 index만 추출해야 된다. filter 메서드 사용 
 * filter 메서드에서 어떻게 callback 식을 세울것 인가?
 * 
 * 추출한 배열들을 하나의 문자열로 합쳐야 된다 join("")
 * 
 */

function solution (my_strings, parts) {
    let result = ""
    my_strings.forEach((str,index)=> {
        const [s,e] =parts[index];
        const part = str.slicec(s,e +1);
        result += part;
    }
    );
    return result
}

/**
 * forEach문을 이용하여 mystrings 배열의 각 문자열에 대해 반복한다.
 * forEach문에서 parts배열에서 인덱스의 시작 s 끝 e를 가져온다.
 * slice 메서드를 이용해서 s부터 e까지 문자를 가져온다.
 * 이걸 result에 += 를 이용해 누적한다.
 * slice 메서드는 끝 인덱스를 포함하지 않음으로 e+1을 이용해서 부분 문자열을 정확히 가져온다.
 */