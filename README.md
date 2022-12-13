# 깃 명령어

### git 명령어는 git으로 시작한다.

## 맨처음 폴더를 깃으로 관리할때

### git init

## 깃 상태확인

### git status

## 추적하고싶지 않은 폴더 파일

### .gitignore

## 수정 완료된 파일을 stage-area로 올리기

### git add

#### git add \* 전부 stage-area로 올리기

#### git add . 변경내역이 있는것만

#### git add 파일명 파일명을 가진 것만

## git 버전 생성 commit

### git commit -m "커밋메시지"

---

## 수정파일 올리기

1. 수정한게 있어야 한다.
   - 파일에 수정이력이 없으면 workingtree clean 이라는 오류 메시지 출력

### 작업순서

1. git add 파일명 (와일드카드)

- git add \* : 모든파일
- git add . : 수정된 파일
  - 서버에 올릴때는 파일명으로 많이 한다.

2. git commit -m "massage"

- 깃 버전생성 및 메세지 붙히기
  - 깃 커밋시 메시지 내용은 공동작업자가 이해할 수 있도록 수정내용을 구체적으로 작성해야 한다.

1. git push origin main(default)
