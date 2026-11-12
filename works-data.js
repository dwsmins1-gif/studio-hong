/* ==========================================================================
   STUDIO HONG — 작품 데이터
   --------------------------------------------------------------------------
   작품을 추가·수정할 때는 이 파일만 고치면 됩니다. 목록 순서대로 표시됩니다.

   title     : 작품 제목
   genre     : history | sf | drama | mv | brand | faith(기독교) | health(건강백년)
               여러 장르는 배열로: ['history', 'sf']
               아직 정하지 않았으면 '' (빈칸) → '장르 확인 필요'로 표시
   year      : 제작 연도 (선택)
   runtime   : 러닝타임, 예) "3:42" (선택)
   desc      : 짧은 소개 1~2문장
   youtubeId : 유튜브 영상 ID (https://youtu.be/XXXXXXXXXXX 의 XXXXXXXXXXX)
   thumb     : 직접 만든 썸네일 경로 (선택, 예: "assets/works/01.jpg")
               비워 두면 유튜브 썸네일을 사용합니다.
   featured  : true 이면 홈 화면 맨 위에 크게 노출되는 대표작
               (홈 화면 아래 4칸은 목록 순서대로 자동으로 채워집니다)
   ========================================================================== */

window.STUDIO_HONG_GENRES = [
  { key: 'all',     ko: '전체',       en: 'All' },
  { key: 'history', ko: '역사',       en: 'History' },
  { key: 'sf',      ko: 'SF',         en: 'Science Fiction' },
  { key: 'drama',   ko: '드라마',     en: 'Drama' },
  { key: 'mv',      ko: '뮤직비디오', en: 'Music Video' },
  { key: 'brand',   ko: '브랜드 영상', en: 'Brand Film' },
  { key: 'faith',   ko: '기독교',     en: 'Christian' },
  { key: 'health',  ko: '건강백년',   en: 'Health' },
];

window.STUDIO_HONG_WORKS = [
  { title: '회천', genre: 'history', year: '', runtime: '',
    desc: '역사적 배경을 바탕으로 제작한 AI 시네마틱 단편',
    youtubeId: 'tvOXhCQr_a8', thumb: '', featured: true },

  { title: '인류 최후의 반격', genre: 'sf', year: '', runtime: '',
    desc: '인류의 생존을 건 마지막 반격을 그린 AI 시네마틱 영상',
    youtubeId: 'jxIXNKwLur0', thumb: '', featured: false },

  { title: '대한의 이름으로, 네 죄를 묻는다', genre: ['mv', 'brand'], year: '', runtime: '',
    desc: '임진왜란의 전장에 현대 특전부대가 개입하는 대체역사 시네마틱 영화',
    youtubeId: 'Xtw5ttl3QCU', thumb: '', featured: false },

  { title: '흥남철수', genre: ['history', 'brand'], year: '', runtime: '',
    desc: '한국전쟁 당시 흥남철수 현장을 그린 AI 시네마틱 전쟁 영상',
    youtubeId: '3cXJ2UhVw-I', thumb: '', featured: false },

  { title: '파워글러브', genre: ['sf', 'brand'], year: '', runtime: '',
    desc: '파워글러브를 손에 넣은 주인공의 특별한 능력과 모험을 그린 AI 시네마틱 영상',
    youtubeId: 'SdjmEug8dvg', thumb: '', featured: false },

  { title: '지하세계 액션', genre: ['sf', 'brand'], year: '', runtime: '',
    desc: '지하세계에 떨어진 주인공이 검을 들고 괴물들과 맞서는 판타지 액션 영상',
    youtubeId: 'Asf3Y0-Cf0A', thumb: '', featured: false },

  { title: '일진의 폭행이 부른 비극', genre: ['drama', 'brand'], year: '', runtime: '',
    desc: '학교 폭력이 한 학생의 삶에 남긴 비극을 그린 AI 단편영화',
    youtubeId: 'D4uWbCI0MSc', thumb: '', featured: false },

  { title: '흥부네 강아지', genre: 'mv', year: '', runtime: '',
    desc: '흥부네 강아지를 중심으로 한 AI 영상',
    youtubeId: 'Zvgg_og0M_E', thumb: '', featured: false },

  { title: '소돔과 고모라 — 뒤를 돌아보지 말라', genre: 'faith', year: '', runtime: '',
    desc: '쉬운 성경이야기 시리즈. 멸망하는 소돔을 떠나며 뒤를 돌아본 롯의 아내 이야기',
    youtubeId: 'ggpkNfih2NA', thumb: 'assets/works/sodom-gomorrah.jpg', featured: false },

  { title: '형제에게 팔린 소년 — 배신과 용서, 요셉 이야기', genre: 'faith', year: '', runtime: '',
    desc: '쉬운 성경이야기 시리즈. 형제들에게 팔려 간 요셉이 배신을 넘어 용서에 이르는 이야기',
    youtubeId: 'NxGIPfPQ-pA', thumb: 'assets/works/joseph.jpg', featured: false },

  { title: '노아의 방주 — 심판과 은혜의 이야기', genre: 'faith', year: '', runtime: '',
    desc: '쉬운 성경이야기 시리즈. 홍수 심판 속에서 방주를 지은 노아와 하나님의 은혜 이야기',
    youtubeId: 'Ucd3MlZA4Pw', thumb: 'assets/works/noah-c.jpg', featured: false },

  { title: '기드온의 300명 — 믿음으로 수십만을 이기다', genre: 'faith', year: '', runtime: '',
    desc: '쉽게 보는 성경 이야기 · 사사기 6–8장. 300명의 용사로 대군을 물리친 기드온의 믿음',
    youtubeId: 'DJsTrwKAdZg', thumb: 'assets/works/gideon.jpg', featured: false },

  { title: '다윗과 골리앗 — 믿음으로 맞선 소년', genre: 'faith', year: '', runtime: '',
    desc: '쉽게 보는 성경이야기. 물맷돌 하나로 거인 골리앗에 맞선 소년 다윗의 이야기',
    youtubeId: 'FBGGeUSaoww', thumb: 'assets/works/david-goliath.jpg', featured: false },

  { title: '가인과 아벨 — 창세기 최초의 형제 이야기', genre: 'faith', year: '', runtime: '',
    desc: '만화로 보는 성경 이야기 · 창세기 4장. 질투가 부른 인류 최초의 형제 비극',
    youtubeId: '5KkMpl4BWVU', thumb: 'assets/works/cain-abel.jpg', featured: false },

  { title: '천군 — 150명 VS 수나라 30만', genre: 'history', year: '', runtime: '',
    desc: '현대 한국군 150명이 수나라 30만 대군과 맞서는 대체역사 시네마틱 영상',
    youtubeId: 'BFgHgb5osRg', thumb: 'assets/works/cheongun-sui.jpg', featured: false },

  { title: '천군 1597 — 현대 한국군, 조선 전장에 떨어지다', genre: 'history', year: '', runtime: '',
    desc: '정유재란의 조선 전장에 떨어진 현대 한국군을 그린 대체역사 시네마틱 영상',
    youtubeId: 'AA6OIzFnawQ', thumb: 'assets/works/cheongun-1597.jpg', featured: false },

  { title: '천군 645 — 한국군 VS 당나라 50만', genre: 'history', year: '', runtime: '',
    desc: '645년 고구려 전장, 현대 한국군이 당나라 50만 대군에 맞서는 대체역사 시네마틱 영상',
    youtubeId: '5NwZqso_4ZA', thumb: 'assets/works/cheongun-645.jpg', featured: false },

  { title: '팥죽할멈과 호랑이', genre: 'mv', year: '', runtime: '',
    desc: '전래동화 「팥죽할멈과 호랑이」를 귀여운 3D 애니메이션으로 풀어낸 AI 뮤직비디오',
    youtubeId: 'I3XsQpJy2ks', thumb: 'assets/works/patjuk-tiger.jpg', featured: false },

  { title: '너만을 바라보며', genre: 'mv', year: '', runtime: '',
    desc: '소녀와 고양이의 따뜻한 하루를 그림 같은 화면에 담은 AI 뮤직비디오',
    youtubeId: '6e2US6rH3ac', thumb: 'assets/works/only-you.jpg', featured: false },

  { title: 'AI 영상, 이렇게 만들었다 — Flova 제작 과정 공개', genre: 'brand', year: '', runtime: '',
    desc: 'Flova.ai와 함께한 브랜드 협업 영상. 기획부터 결과까지 AI 영상 제작 과정을 공개합니다',
    youtubeId: 'TbQUwb9Ooi4', thumb: 'assets/works/flova-making.jpg', featured: false },

  /* ---------- 건강백년 ---------- */
  { title: '완전 쉽게 알려주는 2026 노인혜택 총정리', genre: 'health', year: '2026', runtime: '',
    desc: '따라만 하면 당장 신청 가능! 신청하지 않으면 받을 수 없는 2026년 노인 혜택을 한눈에 정리',
    youtubeId: 'SWQ-Ql4Sakw', thumb: 'assets/works/senior-benefits-2026.jpg', featured: false },

  { title: '2026년부터 이렇게 달라집니다 — 최저임금부터 생활·복지 제도 총정리', genre: 'health', year: '2026', runtime: '',
    desc: '알아두면 돈이 되고 모르면 손해인 2026년 제도 변화를 쉽게 정리',
    youtubeId: 'eAewQ6KVckw', thumb: 'assets/works/changes-2026.jpg', featured: false },

  { title: '심부전의 주요 경고 신호', genre: 'health', year: '', runtime: '',
    desc: '이 신호를 놓치면 사랑하는 가족을 잃을 수도 있습니다. 생명을 가르는 심부전 경고 신호',
    youtubeId: 'YeN4r9gfy5U', thumb: 'assets/works/heart-failure.jpg', featured: false },

  { title: '대장암, 무섭지 않습니다', genre: 'health', year: '', runtime: '',
    desc: '한 번의 검사, 평생의 예방. 이렇게 하면 대장암을 충분히 막을 수 있습니다',
    youtubeId: 'wDxFlekL3WQ', thumb: 'assets/works/colon-cancer.jpg', featured: false },

  { title: '노년기 건강의 숨은 열쇠, 알부민', genre: 'health', year: '', runtime: '',
    desc: '5분 만에 알아보는 장수의 비밀. 알부민 수치가 노년 건강에 중요한 이유',
    youtubeId: '7cONr6_hnaA', thumb: '', featured: false },

  { title: '파랙틴(천심련), 무릎 관절에 진짜 좋다던데… 꼭 알고 드세요', genre: 'health', year: '', runtime: '',
    desc: '무릎 관절에 도움이 된다는 파랙틴, 사실일까? 꼭 알아야 할 정보를 정리',
    youtubeId: 'tPtXwATNgiY', thumb: 'assets/works/paractin.jpg', featured: false },
];
