(() => {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();