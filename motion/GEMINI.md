# Gemini 프로젝트 컨텍스트: motion

이 문서는 `motion` 프로젝트의 개요를 설명하여 AI 어시스턴트가 프로젝트의 구조와 규칙을 더 잘 이해하도록 돕습니다.

## 1. 기술 스택 (Technology Stack)

-   **언어**: TypeScript
-   **컴파일러**: `tsc` (TypeScript Compiler)
-   **런타임**: 웹 브라우저 (정적 HTML, CSS, JS)
-   **스타일링**: 순수 CSS (`style/style.css`)
-   **의존성 관리**: 별도의 의존성 관리 도구(예: `package.json`)는 사용하지 않고 있습니다.

## 2. 프로젝트 구조 (Project Structure)

```
/
├── src/                     # TypeScript 소스 코드
│   ├── app.ts               # 애플리케이션의 메인 진입점
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── component.ts     # 모든 컴포넌트의 기반이 되는 BaseComponent 정의
│   │   ├── page.ts          # 페이지 레이아웃 관련 컴포넌트
│   │   ├── dialog/          # 사용자 입력용 다이얼로그 컴포넌트
│   │   └── page/item/       # Image, Video, Note, Todo 등 개별 아이템 컴포넌트
│   └── decorators/          # 드래그 앤 드롭과 같은 추가 기능을 위한 데코레이터
├── dist/                    # 컴파일된 JavaScript 파일 및 소스맵
├── assets/                  # 이미지 등 정적 에셋
├── style/                   # CSS 스타일시트
├── index.html               # 애플리케이션의 진입점 HTML 파일
└── tsconfig.json            # TypeScript 컴파일러 설정 파일
```

## 3. 코딩 컨벤션 및 아키텍처 (Coding Conventions & Architecture)

-   **아키텍처**:
    -   컴포넌트 기반 아키텍처를 사용합니다.
    -   `src/components/component.ts`에 정의된 `BaseComponent` 클래스를 상속하여 새로운 UI 컴포넌트를 생성합니다.
    -   각 컴포넌트는 자신의 HTML 구조, 상태 및 동작을 캡슐화합니다.
-   **네이밍 컨벤션**:
    -   클래스 및 인터페이스: `PascalCase` (예: `ImageComponent`, `Component`)
    -   변수 및 함수: `camelCase` (예: `attachTo`, `imageElement`)
-   **모듈 시스템**: ES2015 모듈 시스템 (`import`/`export`)을 사용합니다.
-   **DOM 조작**:
    -   컴포넌트는 생성자에서 HTML 문자열을 기반으로 DOM 요소를 만듭니다.
    -   `attachTo` 메소드를 사용하여 부모 요소에 자신을 추가하고, `removeFrom`를 사용하여 제거합니다.
-   **타입 시스템**: `tsconfig.json`에 `"strict": true`로 설정되어 있어, 엄격한 타입 검사를 준수해야 합니다.
-   **데코레이터**: 클래스에 동적인 기능을 부여하기 위해 TypeScript 데코레이터(예: `@Draggable`)를 사용합니다. (`experimentalDecorators` 활성화)

## 4. 중요 설정 (Important Configurations)

-   **`tsconfig.json`**:
    -   `"target": "es6"`: 코드는 ES6 사양의 JavaScript로 컴파일됩니다.
    -   `"module": "ES2015"`: ES2015 모듈 문법을 사용합니다.
    -   `"outDir": "./dist"`: 컴파일된 결과물은 `dist` 폴더에 저장됩니다.
    -   `"rootDir": "./src"`: 소스 코드의 루트 디렉토리를 `src`로 지정합니다.
    -   `"strict": true`: 모든 엄격한 타입 검사 옵션을 활성화하여 코드 안정성을 높입니다.
    -   `"noEmitOnError": true`: 컴파일 시 에러가 있으면 JavaScript 파일을 생성하지 않습니다.

## 5. 빌드 및 실행 (Build & Run)

-   **빌드**: `package.json`이 없으므로, 터미널에서 `tsc` 명령어를 직접 실행하여 프로젝트를 빌드해야 합니다.
-   **실행**: 빌드 후 생성된 `dist/app.js`를 참조하는 `index.html` 파일을 웹 브라우저에서 직접 열어 애플리케이션을 실행합니다. (`live-server` 활용)
