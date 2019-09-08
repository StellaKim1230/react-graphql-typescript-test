# react-typescript-graphql-tutorial

## 1. 설치과정

### 프로젝트 만들기

`$ npx create-react-app graphql-typescript-react --typescript`

### 필요한 의존성 모듈 설치

`$ yarn add apollo-boost react-apollo react-apollo-hooks graphql-tag graphql`

### graphql-codepen/cli 설치

`$ yarn add -D @graphql-codegen/cli`

`$ gpl-gen init` 시 수행 단계
1. React로 빌드 된 애플리케이션.
2. 스키마는 아래 url로 정의한다. `https://spacexdata.herokuapp.com/graphql`
3. 쿼리 선언을 위해 모든 TypeScript 파일을 검색 할 수 있도록 작업 및 조각 위치를 설정해야한다. `../src/components/**/*.{ts,tsx}`
4. 기본 플러그인 "TypeScript", "TypeScript Operations", "TypeScript React Apollo"를 사용한다.
5. 생성된 대상을 (.tsx는 react-apollo 플러그인에 필요)로 업데이트 해야한다. `src/generated/graphql.tsx`
6. 내부 검사 파일을 생성하지 마십시오.
7. 기본 파일을 사용한다. `codegen.yml`
8. 실행 스크립트를 작성한다. `codegen` `yarn codegen`

### 추가 작업 사항
* scss 사용할 경우 의존성 node-sass를 설치해야 한다.
* query.ts 에서 쿼리 작성 후 codegen을 한번 실행줘야 작성한 쿼리가 적용된다.
* 추가로 의존성 모듈 설치함

```
"@graphql-codegen/typescript"
"@graphql-codegen/typescript-operations"
"@graphql-codegen/typescript-react-apollo"
```

[참고 사이트](https://blog.logrocket.com/build-a-graphql-react-app-with-typescript/)