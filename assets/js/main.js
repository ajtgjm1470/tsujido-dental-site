// スクロールアニメーション
document.addEventListener("DOMContentLoaded", () => {
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    scrollItems.forEach((el) => observer.observe(el));
  } else {
    scrollItems.forEach((el) => el.classList.add("is-visible"));
  }

  // スムーススクロール（ヘッダーオフセット付き）
  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const targetEl = targetId && document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const rect = targetEl.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - headerHeight - 16;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });

  // 現在のページに応じてナビゲーションをハイライト
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".site-header__nav a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath || currentPath.startsWith(linkPath + "/")) {
      link.classList.add("is-active");
    }
  });
<<<<<<< HEAD

  // モバイル: ハンバーガー + ドロワー
  const mobileBp = 768;
  const menu = document.querySelector(".site-header__nav");
  if (menu) {
    let toggle = document.querySelector(".menu-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "menu-toggle";
      toggle.setAttribute("aria-label", "メニューを開く");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<span></span><span></span><span></span>';
      document.querySelector(".site-header__inner")?.appendChild(toggle);
    }

    let overlay = document.querySelector(".overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "overlay";
      document.body.appendChild(overlay);
    }

    let closeBtn = menu.querySelector(".menu-close");
    if (!closeBtn) {
      closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "menu-close";
      closeBtn.setAttribute("aria-label", "メニューを閉じる");
      closeBtn.textContent = "×";
      menu.prepend(closeBtn);
    }

    function closeMenu() {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("menu-open");
      toggle?.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      menu.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("menu-open");
      toggle?.setAttribute("aria-expanded", "true");
    }

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    toggle.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > mobileBp) {
        closeMenu();
      }
    });
  }
=======
>>>>>>> d8d7168 (first commit)
});
