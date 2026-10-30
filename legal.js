/* =========================================================
   APEX MOTORS - legal.js
   Shared behavior for privacy.html / terms.html / cookies.html
   (Lightweight sibling of script.js, no inventory/homepage deps)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNav();
  initScrollProgress();
  initScrollReveal();
  initBackToTop();
  initTocScrollSpy();
  initSocialToast();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* Loader */
function initLoader(){
  const loader = document.getElementById("loader");
  if(!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("is-hidden"), 700);
  });
  setTimeout(() => loader.classList.add("is-hidden"), 2000);
}

/* Nav */
function initNav(){
  const header = document.getElementById("siteHeader");
  const nav = document.querySelector(".nav");
  const toggle = document.getElementById("navToggle");
  if(!header || !nav || !toggle) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive:true });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("[data-nav]").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Scroll progress bar */
function initScrollProgress(){
  const bar = document.getElementById("scrollProgress");
  if(!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + "%";
  }, { passive:true });
}

/* Scroll reveal for .will-reveal elements */
function initScrollReveal(){
  const targets = document.querySelectorAll(".will-reveal");
  if(!targets.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.12 });
  targets.forEach(el => io.observe(el));
}

/* Back to top */
function initBackToTop(){
  const btn = document.getElementById("backToTop");
  if(!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 600);
  }, { passive:true });
  btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}

/* Table-of-contents scroll spy */
function initTocScrollSpy(){
  const tocLinks = document.querySelectorAll(".legal-toc a");
  if(!tocLinks.length) return;
  const blocks = Array.from(tocLinks).map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        tocLinks.forEach(l => l.classList.remove("is-active"));
        const match = document.querySelector(`.legal-toc a[href="#${entry.target.id}"]`);
        if(match) match.classList.add("is-active");
      }
    });
  }, { rootMargin:"-20% 0px -65% 0px" });

  blocks.forEach(b => io.observe(b));
}

/* Social icon toast (footer) */
function initSocialToast(){
  const wrap = document.getElementById("socialIcons");
  const toast = document.getElementById("socialToast");
  if(!wrap || !toast) return;
  wrap.addEventListener("click", e => {
    if(!e.target.closest("[data-social]")) return;
    toast.classList.add("is-visible");
    clearTimeout(initSocialToast._t);
    initSocialToast._t = setTimeout(() => toast.classList.remove("is-visible"), 2800);
  });
}
