# ✨ 말씀새록 2025 (Bible Revive 2025)

## 🧭 About the Project
**말씀새록 2025**는 새해를 말씀으로 시작할 수 있도록 돕는 랜덤 말씀 카드 웹 앱입니다.  
(Bible Revive 2025 is a New Year’s scripture card web app that helps people begin the year with encouragement and reflection.)

교회에서 연초에 말씀을 뽑던 전통을 디지털화하여, 누구나 모바일로 간편하게 말씀을 받고 바로 공유할 수 있도록 제작했습니다.  
(Inspired by traditional church practices of selecting a verse at the start of each year, this tool modernizes the experience with mobile-first design and instant sharing features.)



## Summary
- **출시일:** 2024년 12월 29일 (Dec 29, 2024)  
- **사용자 수:** 출시 3일 만에 4,000명 이상 사용 (4,000+ in 3 days)  
- **사용된 국가:** 한국, 미국, 독일, 인도네시아, 브라질 등  
  (South Korea, U.S., Germany, Indonesia, Brazil, and more)  
- **개발자:** 이지인 1인 개발  
  (Designed, built, and maintained by Lee Ji IN)



## 🛠 Tech Stack
- **프론트엔드 (Frontend):** React, JavaScript, CSS  
- **도구 (Tools):** html2canvas, KakaoTalk Share API, Google Analytics  
- **호스팅 (Hosting):** Netlify



## 🌟 Key Features
- **랜덤 말씀 추첨**  
  10가지 주제별 100개 이상의 말씀  
  (Random Scripture Drawing: Over 100 Bible verses categorized into 10 themes)

- **이미지 저장 기능**  
  말씀 카드를 PNG 이미지로 저장  
  (Save as Image: Capture and save scripture card as PNG)

- **카카오톡 공유 기능**  
  뽑은 말씀을 Kakao Talk 으로 공유 가능
  (KakaoTalk Sharing)




## Outcome
- 유료 광고 없이 카카오톡 공유만으로 3일 만에 4,000명 도달  
  (Reached 4,000+ users in 3 days via KakaoTalk sharing and no paid marketing)




## 💬 Improvements from User Feedback
- 📲 **공유 기능 개선 — 말씀 고유 링크 전송 기능 추가**  
  기존에는 카카오톡으로 공유 시 서비스 홈 링크만 전달되어 **공유한 말씀 내용이 재현되지 않았습니다.**  
  사용자 요청에 따라, **내가 뽑은 말씀이 그대로 상대방에게도 보이도록 URL에 verse ID를 포함하는 기능**을 추가했습니다.  
  (Improved KakaoTalk sharing: now includes a unique verse ID in the shared URL so the recipient sees the exact same scripture.)

- 👓 **폰트 및 배경 스타일 개선**  
  사용자들이 “배경이 너무 튀어요”, “글자가 잘 안 보여요”라는 피드백을 주셨습니다.  
  이에 따라 전체 UI에 **깔끔한 그라디언트 배경**과 **가독성 높은 prestandard 한글 폰트**를 적용했습니다.  
  (Applied a calm gradient background and a softer, more legible Korean font based on user feedback.)

- 💾 **이미지 저장 UX 개선**  
  “이미지 저장이 어려워요”라는 의견에 따라 **다운로드 버튼**을 새롭게 추가하였습니다.
  (Added a download button for saving images.)


## 💡 배운 점 (What I Learned)
- **기획 → 개발 → 배포 경험**  
  Figma 와이어프레임을 React 컴포넌트로 구현하고 Netlify로 자동 배포 파이프라인을 구축했습니다.  
  (Built an end‑to‑end flow from Figma design to React components and automated Netlify deployment.)

- **카카오톡 공유 이미지 파이프라인 직접 구현**  
  html2canvas로 DOM을 캡처해 Blob/Data URL을 생성한 뒤, Kakao JavaScript SDK(`window.Kakao.Share.sendCustom`)로 바로 전송했습니다.  
  (Implemented a full pipeline: html2canvas → Kakao API)

- **Google Analytics 연동 및 데이터 분석**  
  분석 프로그램을 코드에 연동하여 실시간으로 사용자 데이터를 확인할 수 있게 설정하였습니다. 
  (The analysis program is linked to the code to enable real-time user data verification.)

- **GitHub PR 트러블슈팅과 리베이스 학습**  
  커밋 히스토리 불일치로 PR이 거부된 원인을 파악하였습니다. 
  (Learned to align commit history for clean PRs.)

- **React 레이아웃·네비게이션 핵심 개념 숙달**  
  container vs wrapper 패턴을 구분하고 `styled-components`로 CSS‑in‑JS를 적용했으며, `ReactTyped`와 `useNavigate`를 활용해 애니메이션·라우팅을 구현했습니다.  
  (Deepened understanding of layout patterns, CSS‑in‑JS, animation libraries, and router hooks.)

- **감성적이고 직관적인 UI/UX의 중요성 체감**  
  둥근 한글 폰트 적용, 100vh 중앙 정렬 등 미세한 UI 디테일이 사용자 만족도를 크게 향상시킨다는 것을 경험했습니다.  
  (Confirmed the impact of micro‑UX tweaks—fonts, alignment—on perceived quality.)

- **사용자 피드백 루프 완주 경험**  
  Google Form으로 의견을 수집하고, 기능을 개선한 뒤 재배포·재설문까지 3회 반복하며 빠른 개선 사이클을 완주했습니다.  
  (Completed multiple feedback cycles, turning qualitative comments into shipped features.)



## 📸 Screenshots
<img width="1209" alt="스크린샷 2025-04-11 오후 4 16 40" src="https://github.com/user-attachments/assets/3a53848d-d699-40f3-8c76-d0fe99e27416" />
<img width="1209" alt="스크린샷 2025-04-11 오후 4 17 03" src="https://github.com/user-attachments/assets/7119f9ad-aa3e-4b3a-b9a6-654666dc4930" />


---

## 🔗 Try It Out  
[https://bible-revive-2025.netlify.app/](https://bible-revive-2025.netlify.app/)

