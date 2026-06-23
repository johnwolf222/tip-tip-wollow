"use strict";

/*
  Tip Top Willow's Restaurant Website
  File: script.js

  This file controls:
  - Header links
  - Open/closed status
  - Hero badges
  - Featured special
  - Fan favorites
  - Menu tabs
  - Reviews
  - Gallery
  - FAQs
  - Hours
  - Catering note form
  - Mobile navigation
  - Scroll reveal animation
  - Local restaurant SEO schema
*/

const data = window.RESTAURANT_DATA;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

let activeMenuIndex = 0;

function safeText(value) {
  return value === undefined || value === null ? "" : String(value);
}

function setText(selector, value) {
  const element = $(selector);

  if (element) {
    element.textContent = safeText(value);
  }
}

function setHtml(selector, value) {
  const element = $(selector);

  if (element) {
    element.innerHTML = safeText(value);
  }
}

function setHref(selector, value) {
  const element = $(selector);

  if (element && value) {
    element.href = value;
  }
}

function setImage(selector, src, alt) {
  const image = $(selector);

  if (image && src) {
    image.src = src;

    if (alt) {
      image.alt = alt;
    }
  }
}

function escapeHtml(value) {
  return safeText(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTodayHours() {
  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });

  if (!data || !Array.isArray(data.hours)) {
    return {
      dayName,
      today: null
    };
  }

  return {
    dayName,
    today: data.hours.find((entry) => entry.day === dayName) || null
  };
}

function setLinks() {
  if (!data) return;

  document.title = `${data.name} | Authentic Caribbean Restaurant in Jonesboro, GA`;

  const phoneLinks = [
    "#header-call",
    "#hero-call",
    "#call-link",
    "#catering-call",
    "#visit-call",
    "#footer-phone"
  ];

  phoneLinks.forEach((selector) => {
    const link = $(selector);

    if (!link) return;

    link.href = data.phoneHref;
    link.setAttribute("aria-label", `Call Tip Top Willow’s at ${data.phoneDisplay}`);

    if (selector === "#header-call") {
      link.textContent = `Call Ahead: ${data.phoneDisplay}`;
    }

    if (selector === "#footer-phone") {
      link.textContent = data.phoneDisplay;
    }
  });

  setHref("#uber-link", data.orderLinks?.uberEats);
  setHref("#doordash-link", data.orderLinks?.doorDash);
  setHref("#directions-link", data.mapsHref);
  setHref("#visit-directions", data.mapsHref);
  setHref("#mobile-directions", data.mapsHref);
  setHref("#footer-instagram", data.social?.instagram);
  setHref("#footer-facebook", data.social?.facebook);

  setText("#footer-address", data.address);
  setText("#visit-address", data.address);
  setText("#hero-pitch", data.shortPitch);
  setText("#story-copy", data.story);
  setText("#year", new Date().getFullYear());

  setImage("#hero-image", data.images?.hero, `${data.name} Caribbean plate`);
  setImage("#storefront-image", data.images?.storefront, `${data.name} storefront`);
}

function openStatus() {
  if (!data) return;

  const status = $("#open-status");
  if (!status) return;

  const { dayName, today } = getTodayHours();

  if (!today || safeText(today.time).toLowerCase().includes("closed")) {
    status.textContent = "Closed today";
    return;
  }

  status.textContent = `Open ${dayName} • ${today.time}`;
}

function renderBadges() {
  if (!data) return;

  const container = $("#hero-badges");
  if (!container) return;

  const badges = Array.isArray(data.heroBadges) ? data.heroBadges : [];

  container.innerHTML = badges
    .map((badge) => `<span>${escapeHtml(badge)}</span>`)
    .join("");
}

function renderFeature() {
  if (!data) return;

  const feature = $("#feature-special");
  if (!feature) return;

  const special = data.optionalPromo?.enabled ? data.optionalPromo : data.featureSpecial;

  if (!special) {
    feature.innerHTML = "";
    return;
  }

  const eyebrow = special.eyebrow || "Featured";
  const price = special.price ? `<em>${escapeHtml(special.price)}</em>` : "";

  feature.innerHTML = `
    <span>${escapeHtml(eyebrow)}</span>
    <strong>${escapeHtml(special.title)} ${price}</strong>
    <p>${escapeHtml(special.description)}</p>
  `;
}

function renderFavorites() {
  if (!data) return;

  const grid = $("#favorites-grid");
  if (!grid) return;

  const favorites = Array.isArray(data.favorites) ? data.favorites : [];

  grid.innerHTML = favorites
    .map((item) => {
      const imageSrc = data.images?.[item.imageKey] || "";
      const name = escapeHtml(item.name);
      const description = escapeHtml(item.description);

      return `
        <article class="food-card reveal">
          <img src="${imageSrc}" alt="${name} plate" loading="lazy" />
          <div class="food-card-content">
            <h3>${name}</h3>
            <p>${description}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMenuTabs() {
  if (!data) return;

  const tabsContainer = $("#menu-tabs");
  if (!tabsContainer) return;

  const menuSections = Array.isArray(data.menu) ? data.menu : [];

  if (activeMenuIndex >= menuSections.length) {
    activeMenuIndex = 0;
  }

  tabsContainer.innerHTML = menuSections
    .map((section, index) => {
      const activeClass = index === activeMenuIndex ? "active" : "";

      return `
        <button class="menu-tab ${activeClass}" type="button" data-menu-index="${index}">
          ${escapeHtml(section.category)}
        </button>
      `;
    })
    .join("");

  $$(".menu-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeMenuIndex = Number(tab.dataset.menuIndex);
      renderMenuTabs();
      renderMenuPanel();
    });
  });
}

function renderMenuPanel() {
  if (!data) return;

  const panel = $("#menu-panel");
  if (!panel) return;

  const menuSections = Array.isArray(data.menu) ? data.menu : [];
  const section = menuSections[activeMenuIndex];

  if (!section) {
    panel.innerHTML = "";
    return;
  }

  const items = Array.isArray(section.items) ? section.items : [];

  const menuItems = items
    .map((item) => {
      return `
        <article class="menu-item reveal visible">
          <div class="menu-item-top">
            <h3>${escapeHtml(item.name)}</h3>
            <span class="price">${escapeHtml(item.price)}</span>
          </div>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `;
    })
    .join("");

  panel.innerHTML = `
    <div class="menu-panel-heading">
      <h3>${escapeHtml(section.category)}</h3>
      <p>${escapeHtml(section.note || "")}</p>
    </div>
    <div class="menu-items">${menuItems}</div>
  `;
}

function renderReviews() {
  if (!data) return;

  const grid = $("#review-grid");
  if (!grid) return;

  const reviews = Array.isArray(data.reviews) ? data.reviews : [];

  grid.innerHTML = reviews
    .map((review) => {
      return `
        <article class="review-card reveal">
          <p>“${escapeHtml(review.quote)}”</p>
          <strong>— ${escapeHtml(review.name)}</strong>
        </article>
      `;
    })
    .join("");
}

function renderGallery() {
  if (!data) return;

  const grid = $("#gallery-grid");
  if (!grid) return;

  const gallery = [
    {
      src: data.images?.hero,
      alt: "Brown stew chicken"
    },
    {
      src: data.images?.oxtails,
      alt: "Oxtail plate with rice and plantains"
    },
    {
      src: data.images?.jerkChicken,
      alt: "Jerk chicken plate with rice, cabbage, and plantains"
    },
    {
      src: data.images?.curryGoat,
      alt: "Curry goat plate"
    },
    {
      src: data.images?.storefront,
      alt: "Tip Top Willow’s storefront"
    }
  ].filter((image) => image.src);

  grid.innerHTML = gallery
    .map((image) => {
      return `
        <a class="gallery-item reveal" href="${image.src}" target="_blank" rel="noopener">
          <img src="${image.src}" alt="${escapeHtml(image.alt)}" loading="lazy" />
        </a>
      `;
    })
    .join("");
}

function renderFaqs() {
  if (!data) return;

  const list = $("#faq-list");
  if (!list) return;

  const faqs = Array.isArray(data.faqs) ? data.faqs : [];

  list.innerHTML = faqs
    .map((item) => {
      return `
        <details class="faq-item reveal">
          <summary><strong>${escapeHtml(item.q)}</strong></summary>
          <p>${escapeHtml(item.a)}</p>
        </details>
      `;
    })
    .join("");
}

function renderHours() {
  if (!data) return;

  const list = $("#hours-list");
  if (!list) return;

  const hours = Array.isArray(data.hours) ? data.hours : [];

  list.innerHTML = hours
    .map((entry) => {
      return `
        <div class="hours-row">
          <strong>${escapeHtml(entry.day)}</strong>
          <span>${escapeHtml(entry.time)}</span>
        </div>
      `;
    })
    .join("");
}

function cateringForm() {
  if (!data) return;

  const form = $("#catering-form");
  const result = $("#form-result");

  if (!form || !result) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const note = [
      "Catering inquiry for Tip Top Willow’s",
      "",
      `Name: ${formData.get("name") || ""}`,
      `Phone: ${formData.get("phone") || ""}`,
      `Event date: ${formData.get("date") || ""}`,
      `Guest count: ${formData.get("guests") || ""}`,
      `Food interests: ${formData.get("message") || ""}`,
      "",
      `Call: ${data.phoneDisplay}`
    ].join("\n");

    result.hidden = false;
    result.textContent = note;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(note).catch(() => {});
    }
  });
}

function navigation() {
  const toggle = $(".nav-toggle");
  const links = $("[data-nav-links]");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.addEventListener("click", (event) => {
    const clickedLink = event.target.closest("a");

    if (clickedLink) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function revealOnScroll() {
  const items = $$(".reveal");

  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  items.forEach((item) => observer.observe(item));
}

function schemaJson() {
  if (!data) return;

  const schemaTarget = $("#schema-json");
  if (!schemaTarget) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: data.legalName,
    description: data.shortPitch,
    telephone: data.phoneDisplay,
    servesCuisine: ["Caribbean", "Jamaican", "Guyanese"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8514 GA-85",
      addressLocality: "Jonesboro",
      addressRegion: "GA",
      postalCode: "30238",
      addressCountry: "US"
    },
    url: "https://tiptopwillows.com/",
    sameAs: [data.social?.instagram, data.social?.facebook].filter(Boolean),
    image: [data.images?.hero, data.images?.oxtails, data.images?.jerkChicken].filter(Boolean),
    openingHoursSpecification: Array.isArray(data.hours)
      ? data.hours
          .filter((entry) => !safeText(entry.time).toLowerCase().includes("closed"))
          .map((entry) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: entry.day,
            opens: "11:00",
            closes:
              entry.day === "Sunday" && safeText(entry.time).includes("7:00")
                ? "19:00"
                : "20:00"
          }))
      : []
  };

  schemaTarget.textContent = JSON.stringify(schema, null, 2);
}

function init() {
  if (!data) {
    console.error("Restaurant data is missing. Make sure data.js loads before script.js.");
    return;
  }

  setLinks();
  openStatus();
  renderBadges();
  renderFeature();
  renderFavorites();
  renderMenuTabs();
  renderMenuPanel();
  renderReviews();
  renderGallery();
  renderFaqs();
  renderHours();
  cateringForm();
  navigation();
  schemaJson();
  revealOnScroll();
}

init();
