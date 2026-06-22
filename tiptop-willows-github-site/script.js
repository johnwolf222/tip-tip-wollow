const data = window.RESTAURANT_DATA;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function setLinks() {
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
    if (link) {
      link.href = data.phoneHref;
      if (["#header-call", "#call-link", "#footer-phone"].includes(selector)) {
        link.textContent = selector === "#header-call" ? `Call Ahead: ${data.phoneDisplay}` : data.phoneDisplay;
      }
    }
  });

  $("#uber-link").href = data.orderLinks.uberEats;
  $("#doordash-link").href = data.orderLinks.doorDash;
  $("#directions-link").href = data.mapsHref;
  $("#visit-directions").href = data.mapsHref;
  $("#mobile-directions").href = data.mapsHref;
  $("#footer-instagram").href = data.social.instagram;
  $("#footer-facebook").href = data.social.facebook;
  $("#footer-address").textContent = data.address;
  $("#visit-address").textContent = data.address;
  $("#hero-pitch").textContent = data.shortPitch;
  $("#story-copy").textContent = data.story;
  $("#hero-image").src = data.images.hero;
  $("#storefront-image").src = data.images.storefront;
  $("#year").textContent = new Date().getFullYear();
}

function openStatus() {
  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const today = data.hours.find((entry) => entry.day === dayName);
  const status = $("#open-status");

  if (!today || today.time.toLowerCase().includes("closed")) {
    status.textContent = `Closed today • Call ahead: ${data.phoneDisplay}`;
    return;
  }

  status.textContent = `Open ${dayName} • ${today.time}`;
}

function renderBadges() {
  const container = $("#hero-badges");
  container.innerHTML = data.heroBadges.map((badge) => `<span>${badge}</span>`).join("");
}

function renderFeature() {
  const special = data.optionalPromo.enabled ? data.optionalPromo : data.featureSpecial;
  $("#feature-special").innerHTML = `
    <span>${special.eyebrow || "Featured"}</span>
    <strong>${special.title} ${special.price ? `<em>${special.price}</em>` : ""}</strong>
    <p>${special.description}</p>
  `;
}

function renderFavorites() {
  const html = data.favorites
    .map(
      (item) => `
      <article class="food-card reveal">
        <img src="${data.images[item.imageKey]}" alt="${item.name} plate" loading="lazy" />
        <div class="food-card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </article>
    `
    )
    .join("");
  $("#favorites-grid").innerHTML = html;
}

let activeMenuIndex = 0;

function renderMenuTabs() {
  const tabs = data.menu
    .map(
      (section, index) => `
      <button class="menu-tab ${index === activeMenuIndex ? "active" : ""}" type="button" data-menu-index="${index}">
        ${section.category}
      </button>
    `
    )
    .join("");
  $("#menu-tabs").innerHTML = tabs;

  $$(".menu-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeMenuIndex = Number(tab.dataset.menuIndex);
      renderMenuTabs();
      renderMenuPanel();
    });
  });
}

function renderMenuPanel() {
  const section = data.menu[activeMenuIndex];
  const items = section.items
    .map(
      (item) => `
      <article class="menu-item reveal visible">
        <div class="menu-item-top">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.description}</p>
      </article>
    `
    )
    .join("");

  $("#menu-panel").innerHTML = `
    <div class="menu-panel-heading">
      <h3>${section.category}</h3>
      <p>${section.note || ""}</p>
    </div>
    <div class="menu-items">${items}</div>
  `;
}

function renderReviews() {
  $("#review-grid").innerHTML = data.reviews
    .map(
      (review) => `
      <article class="review-card reveal">
        <p>“${review.quote}”</p>
        <strong>— ${review.name}</strong>
      </article>
    `
    )
    .join("");
}

function renderGallery() {
  const gallery = [
    { src: data.images.hero, alt: "Brown stew chicken" },
    { src: data.images.oxtails, alt: "Oxtail plate with rice and plantains" },
    { src: data.images.jerkChicken, alt: "Jerk chicken plate with rice, cabbage, and plantains" },
    { src: data.images.curryGoat, alt: "Curry goat plate" },
    { src: data.images.storefront, alt: "Tip Top Willow’s storefront" }
  ];

  $("#gallery-grid").innerHTML = gallery
    .map(
      (image) => `
      <a class="gallery-item reveal" href="${image.src}" target="_blank" rel="noopener">
        <img src="${image.src}" alt="${image.alt}" loading="lazy" />
      </a>
    `
    )
    .join("");
}

function renderFaqs() {
  $("#faq-list").innerHTML = data.faqs
    .map(
      (item) => `
      <details class="faq-item reveal">
        <summary><strong>${item.q}</strong></summary>
        <p>${item.a}</p>
      </details>
    `
    )
    .join("");
}

function renderHours() {
  $("#hours-list").innerHTML = data.hours
    .map(
      (entry) => `
      <div class="hours-row">
        <strong>${entry.day}</strong>
        <span>${entry.time}</span>
      </div>
    `
    )
    .join("");
}

function cateringForm() {
  const form = $("#catering-form");
  const result = $("#form-result");

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

    navigator.clipboard?.writeText(note).catch(() => {});
  });
}

function navigation() {
  const toggle = $(".nav-toggle");
  const links = $("[data-nav-links]");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function revealOnScroll() {
  const items = $$(".reveal");
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
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

function schemaJson() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: data.legalName,
    description: data.shortPitch,
    telephone: data.phoneDisplay,
    servesCuisine: ["Caribbean", "Jamaican", "Guyanese"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "8514 GA-85",
      addressLocality: "Jonesboro",
      addressRegion: "GA",
      postalCode: "30238",
      addressCountry: "US"
    },
    url: "https://tiptopwillows.com/",
    sameAs: [data.social.instagram, data.social.facebook],
    image: [data.images.hero, data.images.oxtails, data.images.jerkChicken],
    openingHoursSpecification: data.hours
      .filter((entry) => !entry.time.toLowerCase().includes("closed"))
      .map((entry) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: entry.day,
        opens: "11:00",
        closes: entry.day === "Sunday" && entry.time.includes("7:00") ? "19:00" : "20:00"
      }))
  };

  $("#schema-json").textContent = JSON.stringify(schema, null, 2);
}

function init() {
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
