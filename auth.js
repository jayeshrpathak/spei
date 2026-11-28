(function () {
  const AUTH_KEY = "spei_portal_unlocked";
  const REDIRECT_KEY = "spei_redirect_after_auth";

  function getTodayPassword() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const yyyy = now.getFullYear();
    return `${dd}${mm}${yyyy}`;
  }

  if (localStorage.getItem(AUTH_KEY) !== getTodayPassword()) {
    sessionStorage.setItem(REDIRECT_KEY, window.location.href);
    const indexUrl = new URL("index.html", document.currentScript.src).href;
    window.location.replace(indexUrl);
  }
})();
