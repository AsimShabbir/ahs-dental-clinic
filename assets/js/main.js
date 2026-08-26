(function () {
  const header = document.querySelector("[data-header]");
  const panel = document.querySelector("[data-extra-panel]");
  const backdrop = document.querySelector("[data-panel-backdrop]");
  const openBtn = document.querySelector("[data-panel-open]");
  const closeBtns = document.querySelectorAll("[data-panel-close], [data-panel-backdrop]");

  const setPanel = (open) => {
    if (!panel) return;
    panel.classList.toggle("is-open", open);
    panel.setAttribute("aria-hidden", String(!open));
    if (backdrop) {
      backdrop.classList.toggle("is-open", open);
      backdrop.hidden = !open;
    }
    if (openBtn) openBtn.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("panel-open", open);
  };

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (openBtn) openBtn.addEventListener("click", () => setPanel(true));
  closeBtns.forEach((el) => el.addEventListener("click", () => setPanel(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setPanel(false);
  });
  document.querySelector("[data-to-top]")?.addEventListener("click", () => {
    setPanel(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach((el) => el.classList.remove("is-open"));
      if (!wasOpen) item.classList.add("is-open");
    });
  });

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close">×</button><img alt="">';
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector("img");
  const closeLightbox = () => lightbox.classList.remove("is-open");
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
  document.querySelectorAll("[data-gallery] a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      lightboxImg.src = link.getAttribute("href");
      lightboxImg.alt = link.querySelector("img")?.alt || "";
      lightbox.classList.add("is-open");
    });
  });

  const dateInput = document.querySelector('input[type="date"][name="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }
})();
