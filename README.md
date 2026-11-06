# Handoff: STUDIO HONG 홈페이지

## Overview
STUDIO HONG(AI 시네마틱 영상 스튜디오)의 2페이지 홈페이지입니다.
- `index.html` — 홈: 로고 영상 히어로 → (버튼/메뉴 클릭 시 공개) 대표 작품 → 소개 → 제작 분야 → 제작 문의
- `works.html` — 전체 작품 아카이브 (장르 필터)

## About the Design Files
이 폴더의 파일은 **HTML로 만든 디자인 레퍼런스이자, 그대로 동작하는 정적 사이트**입니다. 빌드 과정이 필요 없으므로 폴더째로 정적 호스팅(Genspark Code, Netlify, GitHub Pages, Vercel 등)에 올리면 바로 공개됩니다. 기존 코드베이스(React/Next 등)로 옮길 경우 아래 명세에 따라 동일하게 재현하세요.

## Fidelity
**High-fidelity.** 색상, 타이포, 간격, 인터랙션 모두 최종값입니다.

## Screens / Views

### 1. Hero (index.html, 첫 화면)
- 높이 100svh, 배경 `#D2C8BC`(로고 영상의 한지색과 동일), 하단 120px 그라데이션으로 `#EEE8DE`에 연결
- 데스크톱: 2열 그리드 `5fr / 9fr` (≤1100px: `1fr / 1.25fr`). 왼쪽 문구, 오른쪽 16:9 영상(방사형 mask로 가장자리를 종이와 섞음, 오른쪽 여백 쪽으로 튀어나오게 배치)
- ≤899px: 세로 배치, 영상 폭 118%, 문구는 아래, 버튼은 가로로 나란히(flex 1 1 160px)
- 문구:
  - Kicker: `AI CINEMATIC FILM STUDIO` (12px / 600 / letter-spacing .24em, 앞에 28px 선)
  - H1: `상상을 영화로 만드는 / AI 영상 스튜디오` — Noto Serif KR 600, clamp(34px, 3.6vw, 58px), line-height 1.28, '영화'만 `#C02A1E`
  - Sub: `역사와 SF, 다양한 장르의 시네마틱 영상을 제작합니다.` — 15–18px, `#3B3732`
  - 버튼: `대표 작품 보기 →` (primary, 먹색 배경→hover 다홍) / `제작 문의` (ghost 테두리). 높이 52px, 패딩 0 28px, 모서리 각짐(0)
- 문구 등장: 0.9s cubic-bezier(.2,.7,.2,1) 페이드업, 순차 지연 80ms

### 2. Works (대표 작품)
- 섹션 헤더: eyebrow `Selected Works`(다홍 점) + 제목 `Works` (Cormorant Garamond 500, clamp(44px, 6.4vw, 92px)) + 한글 부제 `STUDIO HONG의 대표 작품` + 우측 `전체 작품 보기 →`
- 대표작 1편(`featured: true` 첫 항목) — 2.39:1 시네마스코프 썸네일(모바일 16:9), 제목 clamp(26px, 3vw, 40px)
- 아래 2열 그리드(≤760px 1열)에 4편 (목록 순서)
- 하단: 장르 인덱스(작품 있는 장르만, 개수 표시) + `전체 작품 보기` 버튼
- 카드: 16:9 썸네일(hover 시 scale 1.03, 0.8s), 좌하단 `▶ PLAY` 라벨(hover 시 표시, 터치 기기는 항상), 장르(다홍, 11.5px, uppercase), 제목(Noto Serif KR 600), 소개(15px)

### 3. About
- 배경 `#E5DDD1`, 2열 `4fr / 7fr`(왼쪽 비움). 진술문 Noto Serif KR 600 clamp(26px, 3vw, 44px), '영화적인 영상' 다홍. 본문 2열 → 모바일 1열. 하단 금색 선 + 금색 워드마크

### 4. Services
- 5행 리스트: 번호(italic) / 영문명 Cormorant clamp(30px, 3.6vw, 52px) + 한글명 / 설명 / → . 각 행은 `works.html?genre=키`로 링크. hover 시 이름 `#9E2117`, 화살표 다홍

### 5. Contact
- 배경 `#1C1A17`(먹), 글자 `#EEE8DE`. 2열 `5fr / 6fr`(≤900px 1열)
- 제목 `함께 만들 이야기를 / 들려주세요.`
- 채널: EMAIL `dwsmins1@gmail.com`(mailto), INSTAGRAM `@dwsmins`(https://www.instagram.com/dwsmins/)
- 양식: 프로젝트 종류(칩 라디오: 역사/SF/드라마/뮤직비디오/브랜드 영상/기타), 원하는 영상 길이(select), 희망 일정, 이름·소속, 회신 이메일, 문의 내용. 제출 시 mailto로 제목 `[STUDIO HONG 제작 문의] {종류}` + 본문 자동 구성. (백엔드 폼 서비스로 교체 가능)

### 6. works.html
- 큰 제목 `Works` clamp(56px, 9vw, 140px), 우측 `NN / NN WORKS` 카운터
- sticky 필터 바(장르 버튼 + 개수, 선택 시 먹색 채움). `?genre=history|sf|drama|mv|brand`로 URL 동기화
- 3열 그리드 → ≤1080px 2열 → ≤640px 1열(필터는 가로 스크롤)

### Nav (공통)
- 고정 72px(모바일 60px). 스크롤 24px 이후 반투명 종이색 + blur(12px) + 하단 선
- 왼쪽 워드마크 `STUDIO HONG` (Cinzel 600, letter-spacing .22em), 오른쪽 `WORKS · ABOUT · SERVICES · CONTACT` (12.5px/600/.18em, hover 시 아래 다홍 점)
- ≤760px 햄버거 → 전체 화면 메뉴(영문 44px + 한글 보조)

## Interactions & Behavior
- **히어로 영상**: 음소거·인라인·loop 없음. 화면 폭 <900px이면 720p mp4, 그 외 VP9 webm(미지원 시 1080p mp4). 히어로가 50% 이상 보일 때 재생 시작. 종료 후 마지막 프레임에서 정지.
  - 대체 이미지(`hero-poster*.jpg` = 마지막 프레임)로 전환: autoplay 거부, 영상 오류, 재생 시작 3.5초 지연, `prefers-reduced-motion`, 데이터 절약 모드/2G
- **단계적 공개**: 첫 방문 시 히어로만 표시(`#rest[hidden]`). `#works/#about/#services/#contact` 링크 클릭 시 나머지를 표시하고 해당 섹션으로 부드럽게 스크롤(주소에 해시를 남기지 않음). 해시 포함 URL로 직접 진입하면 바로 공개 후 이동.
- **영상 모달**: `data-yt` 카드 클릭 → youtube-nocookie 임베드(autoplay) 전체 화면 모달, 배경 클릭/×/Esc로 닫기, 하단 `YouTube에서 보기 ↗`
- **Reveal**: `.reveal` 요소는 IntersectionObserver로 16px 페이드업(0.8s). reduced-motion 시 비활성.

## State Management
- 작품 데이터: `works-data.js`의 `STUDIO_HONG_WORKS` 배열(정적). 필드: `title, genre(문자열 또는 배열), year, runtime, desc, youtubeId, thumb, featured`
- 썸네일: `thumb` 없으면 `i.ytimg.com/vi/{id}/maxresdefault.jpg` → 실패 시 `hqdefault.jpg`
- works.html: `current` 장르(URL 쿼리와 동기화)

## Design Tokens
| 토큰 | 값 | 용도 |
|---|---|---|
| paper-hero | `#D2C8BC` | 히어로 배경(영상과 동일) |
| paper | `#EEE8DE` | 기본 바탕 |
| paper-2 | `#E5DDD1` | About 배경, 썸네일 플레이스홀더 |
| paper-3 | `#DAD0C3` | 썸네일 로딩 배경 |
| ink | `#1C1A17` | 본문/버튼/Contact 배경 |
| ink-2 | `#3B3732` | 보조 텍스트 |
| muted | `#7B7369` | 메타 정보 |
| line | `rgba(28,26,23,.14)` / strong `.32` | 구분선 |
| red | `#C02A1E` (deep `#9E2117`, 어두운 배경용 `#E0574A`) | 포인트 |
| gold | `#9B7A44` | 워드마크·작은 강조만 |

- 폰트: Cinzel(워드마크), Cormorant Garamond(영문 제목), Noto Serif KR(한글 제목), Pretendard(본문)
- 좌우 여백 `--pad: clamp(20px, 5vw, 72px)`, 최대 폭 1440px
- 모서리 반경: 0 (전체 각진 형태). 그림자 없음
- 바탕 전체에 한지 질감 노이즈(SVG fractalNoise, multiply, opacity .35)

## Assets
- `assets/hero-1080.webm` (VP9, 약 437KB), `assets/hero-1080.mp4` (H.264, 약 823KB), `assets/hero-720.mp4` (약 359KB) — 원본 `1106.mp4`(4K, 14MB)를 무음 처리·압축, faststart
- `assets/hero-poster.jpg` (1920w), `assets/hero-poster-sm.jpg` (960w) — 영상 마지막 프레임
- 작품 썸네일: YouTube 자동 썸네일

## Files
- `index.html` — 홈 (페이지 전용 CSS/JS 인라인)
- `works.html` — 전체 작품
- `styles.css` — 공통 스타일/토큰
- `site.js` — 내비, 작품 카드 렌더, 영상 모달, reveal
- `works-data.js` — 작품·장르 데이터 (콘텐츠 수정은 이 파일만)
