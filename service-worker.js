// 시간대별 주간 계획표 — Service Worker
// 오프라인 캐시 + PWA 설치 가능 조건 충족용 최소 구현.
// 캐시 이름을 바꾸면(예: 버전 번호 증가) 사용자 디바이스에서 자동으로
// 이전 캐시가 정리되고 새 자산을 받아옵니다.

const CACHE_NAME = "weekly-schedule-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

// 네트워크 우선 → 실패 시 캐시 응답.
// 데이터 변경 시 최신 HTML을 빠르게 받게 하고, 오프라인일 땐 캐시로 동작.
self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  // 같은 출처 요청만 처리 (외부 폰트/CDN 등은 건드리지 않음)
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html"))),
  );
});
