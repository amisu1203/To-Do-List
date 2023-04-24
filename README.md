# 📌 To-Do List Project
이 프로젝트는 사용자의 일정 관리를 위해 만들어진 To-Do list 프로젝트입니다. 사용자는 해야 할 일의 제목과 내용을 작성하고 추가하기 버튼을 누릅니다. `WORKING ZONE`에 새로운 할 일이 추가되며 가장 최신의 일정이 상단으로 올라갑니다. 사용자는 할 일을 완료하면 완료 버튼을 눌러 `DONE ZONE`으로 할 일을 이동시킬 수 있습니다. 

**지금 바로 [✨이 곳을✨](https://to-do-list-one-tawny.vercel.app/) 눌러 프로젝트를 확인해보세요**

![투두 움짤](https://user-images.githubusercontent.com/93499095/232104960-404c6672-9072-4094-963f-65fe7305dc22.gif)


## 👀 기능 소개
1. 할 일의 제목과 내용을 작성하여 `추가하기` 버튼을 누르면 'WORKING ZONE'으로 할 일이 추가됩니다.
2. 할 일을 완료하여 `완료` 버튼을 누르면 'DONE ZONE'으로 할 일이 이동합니다.
3. 실수로 `완료` 버튼을 눌렀을 경우, 'DONE ZONE'에서 `취소` 버튼을 누르면 다시 'WORKING ZONE'으로 할 일이 추가됩니다.
4. 'DONE ZONE'과 'WORKING ZONE' 모두 `삭제` 버튼을 누르면 모든 ZONE에서 할 일이 사라집니다.
5. `상세보기` 버튼을 눌러 할 일의 상세 페이지로 이동할 수 있습니다.

<br>

## 📘 컴포넌트 소개

<img width="231" alt="image" src="https://user-images.githubusercontent.com/93499095/232193436-d032c723-3ac8-42ba-b684-4ef519fc1057.png">

최상위 컴포넌트는 `APP`은 `CreateToDo`, `Working`, `Done`을 자식 컴포넌트로 가지고 있습니다.
1. `CreateToDo` 컴포넌트는 사용자의 입력 값을 받고, `App` 컴포넌트로부터 onCreate 함수를 prop으로 전달받아 새로운 데이터를 저장합니다.
2. `Working` 컴포넌트는 `TodoList` 자식 컴포넌트로 가지고 있습니다. 이때, TodoList 컴포넌트는 데이터의 속성 중 `isDone`이 false인 데이터들만 사용하게 됩니다. 이 데이터를 가지고 map 메서드를 통해 각각의 아이디를 가진 `TodoItem` 컴포넌트를 생성합니다. 따라서 working 상태로 분류될 할 일들이 `TodoList`에 들어가게 됩니다. 이 컴포넌트에서는 삭제 버튼을 눌러 부모에게 해당 데이터의 id 값을 전달하여, 해당 id를 제외한 새로운 데이터로 렌더링하게 합니다. 또한 완료 버튼을 눌러 isDone의 값을 true로 만들어 `Done` 영역으로 이동하게 합니다.
3. `Done` 컴포넌트는 `DoneList`를 자식 컴포넌트로 가지고 있습니다. 이때, DoneList 컴포넌트는 데이터의 속성 중 `isDone`이 true인 데이터들만 사용하게 됩니다. 이 데이터를 가지고 map 메서드를 통해 각각의 아이디를 가진 `DoneItem` 컴포넌트를 생성합니다. 따라서 Done 상태로 분류될 할 일들이 `DoneList`에 들어가게 됩니다. 이 컴포넌트에서는 삭제 버튼을 눌러 부모에게 해당 데이터의 id 값을 전달하여, 해당 id를 제외한 새로운 데이터로 렌더링하게 합니다. 또한 취소 버튼을 눌러 isDone의 값을 false 만들어 다시 `Working` 영역으로 이동하게 합니다.


<br>

## git clone 시 사용 방법
1. `$ npm install` : pakage.json의 패키지들을 일괄 설치해주세요.

2. `$ npm start` : app을 실행 시켜주시고, [http://localhost:3000](http://localhost:3000)에 접속하여 사용해주세요.
