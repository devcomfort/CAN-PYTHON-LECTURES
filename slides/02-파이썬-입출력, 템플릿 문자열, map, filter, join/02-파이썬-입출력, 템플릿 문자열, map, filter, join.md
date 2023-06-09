---
marp: true
paginate: true
footer: 2023 CAN 파이썬 스터디 - bit.ly/3oWarda
---

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css" integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>

# 목차

1. 입력 함수: `input()`
2. 출력 함수: `print()`
3. map
4. ~~filter~~: 다음 기회에 (함수 개념 필요함)
5. join
6. 템플릿 문자열: f-string
7. 템플릿 문자열: %-formatting
<!-- 8. 좌우 정렬 함수 `.center()`, `.left()`, `.right()` -->

---

# 입력 함수 `input()`

```python
# 형식: 1번 코드와 2번 코드가 같은 내용입니다 - C/C++언어 코더들에게
input(<출력 내용>)

# 1번 코드
print(<출력 내용>)
input()

# 2번 코드
input(<출력 내용>)
```

---

# 입력 함수 활용 : 특정 형태의 변수 입력 받기 (실습)

`input()` 함수는 기본적으로 문자열로만 입력을 받을 수 있습니다.

```python
입력값 = input()  # 입력한 내용이 문자열, str로만 저장됩니다.

# 다음과 같이 특정 자료형으로 변경할 수 있습니다.
정수_입력값 = int(input())  # 정수로 변경
실수_입력값 = float(input())  # 실수로 변경
```

---

# 입력 함수의 문제점 : 한 줄씩만 받을 수 있음

```
2 3 4
```

위와 같이 연속되게 숫자가 입력되는 경우 받을 수 없습니다.
이에 대한 해법은 추후 `map` 구현체 설명에서 소개됩니다!

```python
# 미리보기
숫자들 = list(map(int, input().split()))  # 연속되게 입력된 숫자들 입력 받기
```

---

# 출력 함수 소개 : `print()`

<small>

```python
print(..., sep=' ', end='\n')
# sep은 ... 구간에 입력된 값의 구분자, end는 모든 내용을 출력한 뒤 출력하는 값입니다.
# 기본값: (sep = ' '), (end = '\n')

# 예시:
print(1, 2, 3, sep=', ', end='\n')  # 출력: 1, 2, 3
print('a', 'b', 'c', sep='|', end='\n')  # 출력: a|b|c

# 예시 (아래 내용을 순서대로 실행해보세요, 2줄 짜리 예시입니다)
print(1, 2, 3, sep=', ', end='|||')
print('a', 'b', 'c', sep='&', end='\n')
```

위의 예시를 모두 입력했다면 `sep`와 `end`에 대해서는 모두 이해했을 것이라 생각됩니다. 그래서 단순 정리를 하겠습니다:

- `sep`은 print 함수에 입력된 변수를 구분하여 출력하니 위한 `구분자` 입니다. (기본값: `' '`)
- `end`는 print 함수에서 사용자가 입력한 모든 변수를 출력하고 마지막으로 출력하는 문자입니다 (기본값: `'\n'`)

</small>

---

# map 구현체

가장 일상에서 접하기 쉬운 상황은 게임할 때 하는 '키 매핑'이 있을 것 같습니다.
`map` 구현체는 리스트/튜플의 각 요소에 어떠한 함수를 적용해주는 구현체입니다.

```python
# 형식
map(<자료형>, <리스트/튜플>)  # <map object at 0x7f5e1fae5900>
map(<함수>, <리스트/튜플>)  # <map object at 0x7f5e1fb63160>

# 리스트 형태로 보려면:
list(map(str, [1, 2, 3]))  # ["1", "2", "3"]
list(map(lambda v: v * 2, [1, 2, 3]))  # [2, 4, 6]

숫자들: list = [1, 2, 3, 4, 5]
list(map(str, 숫자들))  # ["1", "2", "3", "4", "5"]
```
---

# join 구현체

join 함수는 `<구분자>`를 기준으로 `<문자열 리스트>` 속 요소를 합쳐주는 함수입니다.

```python
# 형식
<구분자>.join(<문자열 리스트>)

# 예시
', '.join(['1', '2', '3'])  # 1, 2, 3
'|'.join(['a', 'b', 'c'])  # a|b|c

# 직접 구현하면:
리스트 = ['1', '2', '3']
sep = ', '
결과값 = ''
for 번짓수, 값 in enumerate(리스트):
  결과값 += 값
  if 번짓수 < len(리스트) - 1:
    결과값 += '\n'
```

---

# 템플릿 문자열: f-string

템플릿 문자열이란, 원하는 위치에 선언된 변수를 삽입하는 문법을 말합니다.
그 중 f-string은 문자열 앞에 `f`를 붙이고 변수를 삽입하고자 하는 위치에 `{`, `}` 괄호를 통해 위치를 확보합니다.

```python
# 예시
a: int = 10
print(f"a는 {a} 입니다.")ㅒ
print(f"a * 100은 {a * 100} 입니다.")

# f-string 없이, 문자열 연산으로 하면:
print("a는 " + str(a) + "입니다.")  # str 형태로 안 바꾸면 오류가 발생합니다.
```

---

# 템플릿 문자열: %-formatting

%-formatting은 C/C++, Java 등에서 사용되는 문법과 유사합니다.
C/C++을 사용하던 사람이라면 익숙할 것이라 생각합니다.

%-formatting에서는 `%`를 기준으로 **어떤 자료형의 변수**가 **어떤 형식으로 들어갈 지** 선언하는 방식입니다.
`%`를 기준으로 할 수 있는 형식 선언에는 다양한 알파벳이 사용됩니다.

`%d`: 정수, `%f`: 실수, `%g`: 실수(자동으로 반올림), `%s`: 문자열
`%x`: 16진법 숫자, `%o`:  8진법 숫자, `%e`: 지수 표기법 표현의 숫자

---

# %-formatting 예시

원하는 내용을 실행해보세요 (실습)

```python
print("%d" % (100))  # 출력: 100 | 정수 출력
print("%f" % (3.141592))  # 출력: 3.141592 | 소수점 6자리(기본적)와 함께 출력
print("%g" % (3.140000))  # 출력: 3.14 | raeding-zero, 소수점 뒤의 의미 없는 0을 제거해서 출력
print("%s" % ("Hello World!"))  # 출력: Hello World! | 문자열 출력
print("%x" % (15))  # 출력: f | 10진법 데이터를 16진법으로 출력
print("%o" % (15))  # 출력: 17 | 10진법 데이터를 8진법으로 출력
print("%e" % (3.141592))  # 출력: 3.141592e+00 | 지수 표기법 기반의 출력

print("%.2f" % (3.141592))  # 출력: 3.14 | 2번째 자리에서 반올림!
print("%.3f" % (3.141592))  # 출력: 3.142 | 3번째 자리에서 반올림!
```