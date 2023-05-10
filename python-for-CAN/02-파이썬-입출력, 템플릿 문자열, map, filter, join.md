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
4. filter
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

---

# filter 구현체

---

# join 구현체