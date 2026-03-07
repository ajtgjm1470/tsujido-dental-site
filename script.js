document.addEventListener("DOMContentLoaded", () => {
  // 軽いスクロールアニメーション
  const scrollItems = document.querySelectorAll("[data-scroll]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    scrollItems.forEach((el) => observer.observe(el));
  } else {
    scrollItems.forEach((el) => el.classList.add("is-visible"));
  }

  // ヘッダーナビのスムーススクロール（オフセット付き）
  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const internalLinks = document.querySelectorAll(
    'a[href^="#"]:not([href="#"])'
  );

  internalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const targetEl = targetId && document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const rect = targetEl.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - headerHeight - 8;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
});

let slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);