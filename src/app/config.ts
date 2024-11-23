export function baseUrl(): string {
  const lang = localStorage.getItem("lang");

  let base = "http://127.0.0.1:8000/en/api/";
  if (lang) {
    base = `http://127.0.0.1:8000/${lang}/api/`;
  }
  return base;
}

