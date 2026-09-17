import { CommandLineIcon, HtmlIcon, ReactIcon, WebIcon } from "@/assets";
import type { ArticleItem, FilterType } from "@/types";

export const FILTER_DATA: { key: FilterType; label: string }[] = [
  { key: "react", label: "REACT" },
  { key: "web", label: "WEB" },
  { key: "html", label: "HTML / CSS" },
  { key: "etc", label: "ETC" },
];

export const ARTICLE_DATA: ArticleItem[] = [
  {
    type: "react",
    title: "[React] 리액트",
    desc: "React의 특징부터 Library와 Framework, IoC, DOM과 Virtual DOM까지 React를 이해하기 위한 핵심 개념 정리",
    link: "https://velog.io/@hojinch99/React-%EB%A6%AC%EC%95%A1%ED%8A%B8",
    icon: ReactIcon,
  },
  {
    type: "react",
    title: "[React] 리액트 Props & State",
    desc: "Props와 State의 개념부터 데이터 전달 방식, State 변경에 따른 리렌더링까지 React의 데이터 관리 방식 정리",
    link: "https://velog.io/@hojinch99/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-Props-State",
    icon: ReactIcon,
  },
  {
    type: "react",
    title: "[React] 리액트 Props Drilling",
    desc: "Props Drilling의 개념부터 장단점, 컴포넌트 간 데이터 전달과 해결 방법까지 React의 데이터 전달 방식 정리",
    link: "https://velog.io/@hojinch99/React-Props-Drilling",
    icon: ReactIcon,
  },
  {
    type: "react",
    title: "[React] 리액트 Lifecycle",
    desc: "React 컴포넌트의 Mount, Update, Unmount부터 생명주기 메서드까지 React Lifecycle 정리",
    link: "https://velog.io/@hojinch99/React-Lifecycle",
    icon: ReactIcon,
  },
  {
    type: "web",
    title: "[WEB] 브라우저 렌더링 과정",
    desc: "URL 입력부터 DOM과 CSSOM 생성, 렌더링 트리와 Layout, Paint까지 브라우저 렌더링 과정 정리",
    link: "https://velog.io/@hojinch99/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95",
    icon: WebIcon,
  },
  {
    type: "web",
    title: "[WEB] SPA, MPA, CSR, SSR",
    desc: "SPA와 MPA의 차이부터 CSR과 SSR의 렌더링 방식과 동작 과정까지 웹 렌더링 방식 정리",
    link: "https://velog.io/@hojinch99/WEB-SPA-MPA-CSR-SSR",
    icon: WebIcon,
  },
  {
    type: "web",
    title: "[WEB] SEO(검색 엔진 최적화)",
    desc: "SEO의 개념부터 검색 엔진의 크롤링과 색인, Meta 태그와 robots.txt, Open Graph까지 검색 엔진 최적화 방법 정리",
    link: "https://velog.io/@hojinch99/WEB-SEO%EA%B2%80%EC%83%89-%EC%97%94%EC%A7%84-%EC%B5%9C%EC%A0%81%ED%99%94",
    icon: WebIcon,
  },
  {
    type: "web",
    title: "[WEB] REST API",
    desc: "REST의 개념부터 구성 요소와 REST의 원칙, REST API 설계 규칙과 RESTful까지 웹 API의 기본 개념 정리",
    link: "https://velog.io/@hojinch99/WEB-REST-API",
    icon: WebIcon,
  },
  {
    type: "html",
    title: "[HTML/CSS] CSS Cascading",
    desc: "CSS Cascading의 개념부터 중요도, 명시도와 코드 작성 순서, 스타일 상속까지 CSS 우선순위 정리",
    link: "https://velog.io/@hojinch99/HTMLCSS-CSS",
    icon: HtmlIcon,
  },
  {
    type: "html",
    title: "[HTML/CSS] CSS Display & Flex 속성",
    desc: "Display의 기본 개념부터 Flex의 특징, flex-direction, justify-content, align-items까지 CSS 레이아웃 속성 정리",
    link: "https://velog.io/@hojinch99/HTMLCSS-CSS-Display-Flex-%EC%86%8D%EC%84%B1",
    icon: HtmlIcon,
  },
  {
    type: "html",
    title: "[HTML/CSS] CSS Position 속성",
    desc: "CSS Position의 기본 개념부터 static, relative, absolute, fixed, sticky까지 요소의 위치 배치 방식 정리",
    link: "https://velog.io/@hojinch99/HTMLCSS-CSS-Position-%EC%86%8D%EC%84%B1",
    icon: HtmlIcon,
  },
  {
    type: "html",
    title: "[HTML/CSS] HTML Semantic Markup",
    desc: "Semantic Markup의 개념부터 주요 시맨틱 태그와 SEO, 웹 접근성, 유지보수까지 HTML 의미 구조 정리",
    link: "https://velog.io/@hojinch99/HTMLCSS-HTML-Semantic-Markup",
    icon: HtmlIcon,
  },
  {
    type: "etc",
    title: "[프로젝트] 야간 카페 지도 서비스 기획",
    desc: "야간 카페 탐색의 불편함을 해결하기 위한 위치 기반 지도 서비스 기획과 주요 기능 정리",
    link: "https://velog.io/@hojinch99/%EC%95%BC%EA%B0%84-%EC%B9%B4%ED%8E%98-%EC%A7%80%EB%8F%84-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B8%B0%ED%9A%8D",
    icon: CommandLineIcon,
  },
  {
    type: "etc",
    title: "[프로젝트] 야간 카페 지도 서비스 트러블 슈팅",
    desc: "지도 중복 생성부터 컴포넌트 간 의존성, Custom Overlay 제어까지 야간 카페 지도 서비스의 주요 트러블 슈팅 정리",
    link: "https://velog.io/@hojinch99/%EC%95%BC%EA%B0%84-%EC%B9%B4%ED%8E%98-%EC%A7%80%EB%8F%84-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85",
    icon: CommandLineIcon,
  },
  {
    type: "etc",
    title: "[프로젝트] Next.js 드라마 몰아보기 서비스 트러블 슈팅",
    desc: "Server와 Client Components의 차이부터 데이터 패칭과 캐싱, Supabase RLS, Suspense 적용까지 Next.js 서비스 트러블 슈팅 정리",
    link: "https://velog.io/@hojinch99/Next.js-%EB%93%9C%EB%9D%BC%EB%A7%88-%EB%AA%B0%EC%95%84%EB%B3%B4%EA%B8%B0-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85",
    icon: CommandLineIcon,
  },
  {
    type: "etc",
    title: "[프로젝트] 맛집 추천 서비스 개발 문제점 및 개선점",
    desc: "데이터 수집부터 지도 렌더링과 이미지 최적화, Skeleton UI와 무한 스크롤까지 맛집 추천 서비스의 주요 문제와 개선 과정 정리",
    link: "https://velog.io/@hojinch99/%EB%A7%9B%EC%A7%91-%EC%B6%94%EC%B2%9C-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EB%B0%9C-%EC%A4%91-%EB%B0%9C%EC%83%9D%ED%95%9C-%EB%AC%B8%EC%A0%9C%EC%A0%90",
    icon: CommandLineIcon,
  },
];
