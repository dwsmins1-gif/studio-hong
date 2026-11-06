/* ==========================================================================
   STUDIO HONG — 작품 데이터
   --------------------------------------------------------------------------
   작품을 추가·수정할 때는 이 파일만 고치면 됩니다. 목록 순서대로 표시됩니다.

   title     : 작품 제목
   genre     : history | sf | drama | mv | brand
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
];

window.STUDIO_HONG_WORKS = [
  { title: '회천', genre: 'history', year: '', runtime: '',
    desc: '역사적 배경을 바탕으로 제작한 AI 시네마틱 단편',
    youtubeId: 'tvOXhCQr_a8', thumb: '', featured: true },

  { title: '인류 최후의 반격', genre: 'sf', year: '', runtime: '',
    desc: '인류의 생존을 건 마지막 반격을 그린 AI 시네마틱 영상',
    youtubeId: 'jxIXNKwLur0', thumb: '', featured: false },

  { title: '대한의 이름으로, 네 죄를 묻는다', genre: ['history', 'sf'], year: '', runtime: '',
    desc: '임진왜란의 전장에 현대 특전부대가 개입하는 대체역사 시네마틱 영화',
    youtubeId: 'Xtw5ttl3QCU', thumb: '', featured: false },

  { title: '흥남철수', genre: 'history', year: '', runtime: '',
    desc: '한국전쟁 당시 흥남철수 현장을 그린 AI 시네마틱 전쟁 영상',
    youtubeId: '3cXJ2UhVw-I', thumb: '', featured: false },

  { title: '파워글러브', genre: 'sf', year: '', runtime: '',
    desc: '파워글러브를 손에 넣은 주인공의 특별한 능력과 모험을 그린 AI 시네마틱 영상',
    youtubeId: 'SdjmEug8dvg', thumb: '', featured: false },

  { title: '지하세계 액션', genre: 'sf', year: '', runtime: '',
    desc: '지하세계에 떨어진 주인공이 검을 들고 괴물들과 맞서는 판타지 액션 영상',
    youtubeId: 'Asf3Y0-Cf0A', thumb: '', featured: false },

  { title: '일진의 폭행이 부른 비극', genre: 'drama', year: '', runtime: '',
    desc: '학교 폭력이 한 학생의 삶에 남긴 비극을 그린 AI 단편영화',
    youtubeId: 'D4uWbCI0MSc', thumb: '', featured: false },

  { title: '흥부네 강아지', genre: 'mv', year: '', runtime: '',
    desc: '흥부네 강아지를 중심으로 한 AI 영상',
    youtubeId: 'Zvgg_og0M_E', thumb: '', featured: false },
];
