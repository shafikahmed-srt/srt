(function(){
  function applyLang(lang){
    const isAr = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    const btn = document.getElementById("langBtn");
    if(btn) btn.textContent = isAr ? "EN" : "AR";
  }

  window.toggleLang = function(){
    const current = localStorage.getItem("lang") || "en";
    const next = current === "en" ? "ar" : "en";
    localStorage.setItem("lang", next);
    applyLang(next);
  };

  applyLang(localStorage.getItem("lang") || "en");
})();