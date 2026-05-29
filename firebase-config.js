// Firebase 프로젝트 설정.
//
// Firebase 콘솔(console.firebase.google.com) → 본인 프로젝트 → 톱니바퀴(⚙) →
// 프로젝트 설정 → "내 앱" → 웹 앱(</>) → SDK 설정 및 구성에서 받은 값을
// 아래 따옴표 안에 그대로 붙여넣으세요.
//
// 값을 비워두면 로컬 저장(localStorage)만 사용되며, 로그인 버튼이 숨겨집니다.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyA7t4r6l34cqhg6IVAU4n-T5-nLW2EeiNA",
  authDomain: "schedule-0527.firebaseapp.com",
  projectId: "schedule-0527",
  storageBucket: "schedule-0527.firebasestorage.app",
  messagingSenderId: "667173376390",
  appId: "1:667173376390:web:6fde53ccb6bd6d020adc07"
};

// 구글 캘린더 연동용 OAuth 2.0 웹 클라이언트 ID.
// Google Cloud Console → API 및 서비스 → 사용자 인증 정보에서
// "OAuth 2.0 클라이언트 ID"의 웹 클라이언트 ID를 복사해 넣으세요.
// (xxxxxxxx.apps.googleusercontent.com 형태)
// 비워두면 "구글 캘린더 연동" 버튼이 숨겨집니다.
window.GOOGLE_CLIENT_ID = "667173376390-5sresqul4u0rikluv52uekfpn6975sh6.apps.googleusercontent.com";
