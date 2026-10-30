/* =========================================================
   APEX MOTORS — script.js
   Vanilla JS. No frameworks. Organized by feature.
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA — demo inventory. In production this would come
      from a backend / headless CMS.
   --------------------------------------------------------- */
const BRANDS = ["Mercedes-Benz","BMW","Audi","Porsche","Lexus","Tesla","Ferrari","Lamborghini","Land Rover"];

const VEHICLES = [
  {
    id:"v1", brand:"Porsche", model:"911 Turbo S", year:2025, type:"Coupe", fuel:"Petrol",
    transmission:"Automatic", price:231000, mileage:1200, engine:"3.7L Twin-Turbo Flat-6",
    hp:640, seats:4, status:"in-stock",
    img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"],
    interior:["Carbon-fiber trim","Adaptive sport seats","Bose surround sound"],
    exterior:["21-in center-lock wheels","Sport Design mirrors","LED matrix headlights"],
    safety:["Adaptive cruise control","Night vision assist","360° camera"]
  },
  {
    id:"v2", brand:"Ferrari", model:"Roma", year:2024, type:"Coupe", fuel:"Petrol",
    transmission:"Automatic", price:268000, mileage:850, engine:"3.9L Twin-Turbo V8",
    hp:611, seats:4, status:"reserved",
    img:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop"],
    interior:["Hand-stitched leather","Dual-cockpit design","15-speaker JBL audio"],
    exterior:["Daytona-style seats","Active aero","Matte carbon accents"],
    safety:["Side slip control","ADAS suite","Parking sensors"]
  },
  {
    id:"v3", brand:"Lamborghini", model:"Huracán EVO", year:2024, type:"Coupe", fuel:"Petrol",
    transmission:"Automatic", price:279000, mileage:2100, engine:"5.2L V10",
    hp:631, seats:2, status:"in-stock",
    img:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop"],
    interior:["Alcantara cabin","Digital cockpit","Carbon-ceramic sport seats"],
    exterior:["Forged wheels","Aero splitter","LDA-tuned suspension"],
    safety:["LDVI dynamic control","Reverse camera","Lane assist"]
  },
  {
    id:"v4", brand:"Tesla", model:"Model S Plaid", year:2026, type:"Electric", fuel:"Electric",
    transmission:"Single-Speed", price:112000, mileage:400, engine:"Tri-Motor Electric",
    hp:1020, seats:5, status:"in-stock",
    img:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1600&auto=format&fit=crop"],
    interior:["17-in cinematic display","22-speaker audio","Vegan leather seating"],
    exterior:["Aero wheels","Glass roof","Retractable door handles"],
    safety:["Autopilot","Full self-driving capable","8-camera suite"]
  },
  {
    id:"v5", brand:"Mercedes-Benz", model:"S-Class S580", year:2025, type:"Sedan", fuel:"Hybrid",
    transmission:"Automatic", price:142000, mileage:1800, engine:"4.0L V8 Hybrid",
    hp:496, seats:5, status:"in-stock",
    img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop"],
    interior:["MBUX hyperscreen","Massage seats","Burmester 4D sound"],
    exterior:["Digital light LED","Air Body Control","Chrome accents"],
    safety:["Pre-Safe impulse side","Active steering assist","Night view"]
  },
  {
    id:"v6", brand:"BMW", model:"M8 Competition", year:2024, type:"Coupe", fuel:"Petrol",
    transmission:"Automatic", price:132000, mileage:3400, engine:"4.4L Twin-Turbo V8",
    hp:617, seats:4, status:"in-stock",
    img:"https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=1600&auto=format&fit=crop"],
    interior:["M sport seats","Carbon trim","Harman Kardon audio"],
    exterior:["M carbon roof","20-in M wheels","Adaptive M suspension"],
    safety:["M Drive Professional","Active blind spot","Head-up display"]
  },
  {
    id:"v7", brand:"Audi", model:"RS e-tron GT", year:2026, type:"Electric", fuel:"Electric",
    transmission:"Single-Speed", price:148000, mileage:600, engine:"Dual-Motor Electric",
    hp:637, seats:4, status:"in-stock",
    img:"https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1600&auto=format&fit=crop"],
    interior:["Valcona leather","Matrix OLED cluster","B&O 3D sound"],
    exterior:["Carbon roof","Adaptive air suspension","Matrix LED headlights"],
    safety:["Audi pre sense","360 camera","Adaptive cruise assist"]
  },
  {
    id:"v8", brand:"Land Rover", model:"Range Rover SV", year:2025, type:"SUV", fuel:"Petrol",
    transmission:"Automatic", price:196000, mileage:1500, engine:"4.4L Twin-Turbo V8",
    hp:523, seats:5, status:"in-stock",
    img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop"],
    interior:["Executive class rear seats","Semi-aniline leather","23-speaker Meridian audio"],
    exterior:["23-in gloss wheels","Satin body wrap options","Pixel LED headlights"],
    safety:["Terrain response 2","Adaptive off-road cruise","360 parking aid"]
  },
  {
    id:"v9", brand:"Lexus", model:"LC 500 Convertible", year:2024, type:"Convertible", fuel:"Petrol",
    transmission:"Automatic", price:101000, mileage:2600, engine:"5.0L V8",
    hp:471, seats:4, status:"sold",
    img:"https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop"],
    interior:["Semi-aniline leather","Mark Levinson audio","Heated/ventilated seats"],
    exterior:["Fabric power soft top","21-in forged wheels","Triple-beam LED headlamps"],
    safety:["Lexus Safety System+","Blind spot monitor","Rear cross traffic alert"]
  },
  {
    id:"v10", brand:"Porsche", model:"Taycan Turbo S", year:2026, type:"Electric", fuel:"Electric",
    transmission:"Single-Speed", price:186000, mileage:300, engine:"Dual-Motor Electric",
    hp:750, seats:4, status:"in-stock",
    img:"https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop"],
    interior:["Sport Chrono package","14-way seats","Burmester 3D sound"],
    exterior:["21-in Aero wheels","Matrix LED headlights","Panoramic roof"],
    safety:["InnoDrive with adaptive cruise","Night vision assist","Surround view"]
  },
  {
    id:"v11", brand:"BMW", model:"X7 M60i", year:2025, type:"SUV", fuel:"Petrol",
    transmission:"Automatic", price:118000, mileage:2900, engine:"4.4L Twin-Turbo V8",
    hp:523, seats:7, status:"in-stock",
    img:"https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?q=80&w=1600&auto=format&fit=crop"],
    interior:["Captain's chairs","Sky Lounge panoramic roof","Bowers & Wilkins audio"],
    exterior:["Illuminated kidney grille","22-in wheels","Adaptive LED headlights"],
    safety:["Driving Assistant Professional","Parking Assistant Plus","Surround camera"]
  },
  {
    id:"v12", brand:"Mercedes-Benz", model:"AMG GT 63 S", year:2024, type:"Sedan", fuel:"Petrol",
    transmission:"Automatic", price:176000, mileage:4100, engine:"4.0L Twin-Turbo V8",
    hp:630, seats:4, status:"in-stock",
    img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    gallery:["https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop"],
    interior:["AMG Performance seats","Nappa leather","Burmester high-end sound"],
    exterior:["AMG Night package","21-in cross-spoke wheels","Active aero"],
    safety:["AMG Track Pace","Active distance assist","Attention assist"]
  }
];

const money = n => "$" + Math.round(n).toLocaleString("en-US");

/* ---------------------------------------------------------
   2. STATE
   --------------------------------------------------------- */
let activeFilters = {};
let visibleCount = 6;
const PAGE_SIZE = 6;

/* ---------------------------------------------------------
   3. INIT
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  populateBrandFilter();
  renderBrandStrip();
  renderInventory();
  renderWhyUs();
  renderStats();
  renderServices();
  populateCompareSelects();
  renderCompare();
  renderTestimonials();
  renderGallery();
  renderSocialIcons();
  populateTestDriveVehicles();

  initNav();
  initScrollProgress();
  initScrollReveal();
  initBackToTop();
  initSearchForm();
  initCompare();
  initFinanceCalculator();
  initModals();
  initLightbox();
  initForms();

  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------
   4. LOADER
   --------------------------------------------------------- */
function initLoader(){
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("is-hidden"), 900);
  });
  // fallback in case 'load' already fired
  setTimeout(() => loader.classList.add("is-hidden"), 2500);
}

/* ---------------------------------------------------------
   5. BRAND STRIP + FILTER OPTIONS
   --------------------------------------------------------- */
function renderBrandStrip(){
  const grid = document.getElementById("brandGrid");
  grid.innerHTML = BRANDS.map(b => `<div class="brand-card">${b}</div>`).join("");
}
function populateBrandFilter(){
  const sel = document.getElementById("fBrand");
  BRANDS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b; opt.textContent = b;
    sel.appendChild(opt);
  });
}

/* ---------------------------------------------------------
   6. INVENTORY RENDERING + FILTERING
   --------------------------------------------------------- */
function getFilteredVehicles(){
  return VEHICLES.filter(v => {
    if(activeFilters.brand && v.brand !== activeFilters.brand) return false;
    if(activeFilters.type && v.type !== activeFilters.type) return false;
    if(activeFilters.year && String(v.year) !== activeFilters.year) return false;
    if(activeFilters.fuel && v.fuel !== activeFilters.fuel) return false;
    if(activeFilters.transmission && v.transmission !== activeFilters.transmission) return false;
    if(activeFilters.price){
      const [min,max] = activeFilters.price.split("-").map(Number);
      if(v.price < min || v.price > max) return false;
    }
    return true;
  });
}

function vehicleCardHTML(v){
  const badgeClass = v.status === "in-stock" ? "in-stock" : v.status === "reserved" ? "reserved" : "sold";
  const badgeText = v.status === "in-stock" ? "In Stock" : v.status === "reserved" ? "Reserved" : "Sold";
  return `
  <article class="vehicle-card will-reveal">
    <div class="vehicle-media">
      <img src="${v.img}" alt="${v.year} ${v.brand} ${v.model}" loading="lazy">
      <span class="vehicle-badge ${badgeClass}">${badgeText}</span>
      <span class="vehicle-price-tag">${money(v.price)}</span>
    </div>
    <div class="vehicle-info">
      <h3>${v.brand} ${v.model}</h3>
      <p class="vehicle-year">${v.year} · ${v.type}</p>
      <div class="vehicle-specs">
        <div><span>Mileage</span> ${v.mileage.toLocaleString()} mi</div>
        <div><span>Engine</span> ${v.engine}</div>
        <div><span>Fuel</span> ${v.fuel}</div>
        <div><span>Trans.</span> ${v.transmission}</div>
      </div>
      <button class="btn btn-outline" data-view-vehicle="${v.id}">View Details</button>
    </div>
  </article>`;
}

function renderInventory(){
  const grid = document.getElementById("inventoryGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");
  const filtered = getFilteredVehicles();

  resultsCount.textContent = `${filtered.length} vehicle${filtered.length === 1 ? "" : "s"} available`;

  if(filtered.length === 0){
    grid.innerHTML = "";
    noResults.hidden = false;
    removeLoadMore();
    return;
  }
  noResults.hidden = true;

  const toShow = filtered.slice(0, visibleCount);
  grid.innerHTML = toShow.map(vehicleCardHTML).join("");

  removeLoadMore();
  if(filtered.length > visibleCount){
    const wrap = document.createElement("div");
    wrap.className = "load-more-wrap";
    wrap.id = "loadMoreWrap";
    wrap.innerHTML = `<button class="btn btn-ghost" id="loadMoreBtn">Load More Vehicles</button>`;
    grid.insertAdjacentElement("afterend", wrap);
    document.getElementById("loadMoreBtn").addEventListener("click", () => {
      visibleCount += PAGE_SIZE;
      renderInventory();
      refreshRevealObservers();
    });
  }

  refreshRevealObservers();
}
function removeLoadMore(){
  const existing = document.getElementById("loadMoreWrap");
  if(existing) existing.remove();
}

function initSearchForm(){
  const form = document.getElementById("searchForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    activeFilters = {
      brand: data.get("brand") || "",
      type: data.get("type") || "",
      price: data.get("price") || "",
      year: data.get("year") || "",
      fuel: data.get("fuel") || "",
      transmission: data.get("transmission") || ""
    };
    visibleCount = PAGE_SIZE;
    renderInventory();
    document.getElementById("inventory").scrollIntoView({ behavior:"smooth", block:"start" });
  });

  document.getElementById("resetFilters").addEventListener("click", () => {
    form.reset();
    activeFilters = {};
    visibleCount = PAGE_SIZE;
    renderInventory();
  });
}


/* ---------------------------------------------------------
   7. WHY US / SERVICES / STATS DATA
   --------------------------------------------------------- */
const WHY_US = [
  { icon:"✓", title:"Certified Vehicles", desc:"Every vehicle passes a rigorous multi-point certification before it reaches our floor." },
  { icon:"⚙", title:"Multi-Point Inspection", desc:"200+ checkpoints covering performance, safety, and cosmetic condition." },
  { icon:"$", title:"Financing Solutions", desc:"Tailored financing and leasing structured around how you actually drive." },
  { icon:"⇄", title:"Nationwide Delivery", desc:"White-glove, enclosed-transport delivery to your door, anywhere in the country." },
  { icon:"🛡", title:"Warranty Included", desc:"Every vehicle leaves Apex backed by a comprehensive limited warranty." },
  { icon:"↻", title:"Trade-In Program", desc:"Transparent, data-backed valuations — trade in the same day you buy." }
];
function renderWhyUs(){
  document.getElementById("whyGrid").innerHTML = WHY_US.map(w => `
    <div class="why-card will-reveal">
      <div class="why-icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>`).join("");
}

const SERVICES = [
  { icon:"$", title:"Vehicle Financing", desc:"Competitive rate structures for qualified buyers." },
  { icon:"↻", title:"Trade-In Valuation", desc:"Instant, data-driven estimates on your current vehicle." },
  { icon:"⏱", title:"Test Drive Booking", desc:"Schedule private, by-appointment test drives." },
  { icon:"⚙", title:"Vehicle Maintenance", desc:"Factory-trained technicians, genuine parts only." },
  { icon:"🛡", title:"Extended Warranty", desc:"Extend your coverage well beyond the standard term." },
  { icon:"✈", title:"Import Assistance", desc:"End-to-end support for international acquisitions." },
  { icon:"◈", title:"Insurance Support", desc:"Connect with specialty insurers for high-value vehicles." }
];
function renderServices(){
  document.getElementById("servicesGrid").innerHTML = SERVICES.map(s => `
    <div class="service-card will-reveal">
      <div class="why-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join("");
}

const STATS = [
  { target:184, label:"Vehicles Available", suffix:"+" },
  { target:6200, label:"Happy Customers", suffix:"+" },
  { target:16, label:"Years of Experience", suffix:"" },
  { target:9, label:"Luxury Brands", suffix:"" },
  { target:3400, label:"Test Drives Completed", suffix:"+" }
];
function renderStats(){
  document.getElementById("statsGrid").innerHTML = STATS.map((s,i) => `
    <div class="will-reveal">
      <p class="stat-num" data-count-target="${s.target}" data-count-suffix="${s.suffix}">0</p>
      <p class="stat-label">${s.label}</p>
    </div>`).join("");
}

/* ---------------------------------------------------------
   8. COMPARE
   --------------------------------------------------------- */
function populateCompareSelects(){
  const a = document.getElementById("compareA");
  const b = document.getElementById("compareB");
  const opts = VEHICLES.map(v => `<option value="${v.id}">${v.brand} ${v.model}</option>`).join("");
  a.innerHTML = opts;
  b.innerHTML = opts;
  b.selectedIndex = Math.min(1, VEHICLES.length - 1);
}
function initCompare(){
  document.getElementById("compareA").addEventListener("change", renderCompare);
  document.getElementById("compareB").addEventListener("change", renderCompare);
}
function renderCompare(){
  const a = VEHICLES.find(v => v.id === document.getElementById("compareA").value) || VEHICLES[0];
  const b = VEHICLES.find(v => v.id === document.getElementById("compareB").value) || VEHICLES[1];

  document.getElementById("compareHeadA").textContent = `${a.brand} ${a.model}`;
  document.getElementById("compareHeadB").textContent = `${b.brand} ${b.model}`;

  const rows = [
    ["Price", money(a.price), money(b.price)],
    ["Horsepower", `${a.hp} hp`, `${b.hp} hp`],
    ["Fuel Type", a.fuel, b.fuel],
    ["Transmission", a.transmission, b.transmission],
    ["Mileage", `${a.mileage.toLocaleString()} mi`, `${b.mileage.toLocaleString()} mi`],
    ["Engine", a.engine, b.engine],
    ["Seating Capacity", a.seats, b.seats]
  ];
  document.getElementById("compareBody").innerHTML = rows.map(r => `
    <tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("");
}

/* ---------------------------------------------------------
   9. FINANCE CALCULATOR
   --------------------------------------------------------- */
function initFinanceCalculator(){
  const price = document.getElementById("calcPrice");
  const down = document.getElementById("calcDown");
  const rate = document.getElementById("calcRate");
  const term = document.getElementById("calcTerm");
  const result = document.getElementById("calcResult");

  function calc(){
    const p = Math.max(0, Number(price.value) || 0);
    const d = Math.max(0, Number(down.value) || 0);
    const r = (Number(rate.value) || 0) / 100 / 12;
    const n = Number(term.value);
    const principal = Math.max(0, p - d);

    let monthly;
    if(r === 0){
      monthly = principal / n;
    } else {
      monthly = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    if(!isFinite(monthly) || isNaN(monthly)) monthly = 0;
    result.textContent = money(monthly);
  }
  [price, down, rate, term].forEach(el => el.addEventListener("input", calc));
  calc();
}


/* ---------------------------------------------------------
   10. TESTIMONIALS
   --------------------------------------------------------- */
const TESTIMONIALS = [
  { name:"Marcus Whitfield", role:"Porsche 911 Turbo S Owner", stars:5, photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    quote:"From the first walkaround to delivery, everything felt considered. Apex found me a spec I didn't know existed." },
  { name:"Elena Marchetti", role:"Ferrari Roma Owner", stars:5, photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    quote:"The trade-in valuation was fair and fast, and the financing team structured terms I actually understood." },
  { name:"David Osei", role:"Taycan Turbo S Owner", stars:5, photo:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    quote:"Nationwide delivery meant I never had to leave home, and the car arrived exactly as described." }
];
function renderTestimonials(){
  document.getElementById("testimonialTrack").innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card will-reveal">
      <div class="testimonial-stars">${"★".repeat(t.stars)}</div>
      <p class="quote">"${t.quote}"</p>
      <div class="testimonial-person">
        <img src="${t.photo}" alt="${t.name}" loading="lazy">
        <div>
          <h4>${t.name}</h4>
          <span>${t.role}</span>
        </div>
      </div>
    </div>`).join("");
}

/* ---------------------------------------------------------
   11. GALLERY
   --------------------------------------------------------- */
const GALLERY = [
  { src:"https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1200&auto=format&fit=crop", label:"Showroom Floor", cls:"wide" },
  { src:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop", label:"Sports Collection", cls:"tall" },
  { src:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900&auto=format&fit=crop", label:"Luxury Interior", cls:"" },
  { src:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=900&auto=format&fit=crop", label:"SUV Line-up", cls:"" },
  { src:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200&auto=format&fit=crop", label:"Electric Vehicles", cls:"wide" },
  { src:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=900&auto=format&fit=crop", label:"Customer Delivery", cls:"" }
];
function renderGallery(){
  document.getElementById("galleryGrid").innerHTML = GALLERY.map((g,i) => `
    <div class="gallery-item ${g.cls} will-reveal" data-gallery-index="${i}">
      <img src="${g.src}" alt="${g.label}" loading="lazy">
      <div class="gallery-overlay"><span>${g.label}</span></div>
    </div>`).join("");
}

/* ---------------------------------------------------------
   12. SOCIAL ICONS
   --------------------------------------------------------- */
const SOCIALS = ["IG","FB","X","TT"];
function renderSocialIcons(){
  document.getElementById("socialIcons").innerHTML = SOCIALS.map(s =>
    `<button type="button" data-social="${s}" aria-label="${s}">${s}</button>`).join("");
  document.getElementById("socialIcons").addEventListener("click", e => {
    if(e.target.closest("[data-social]")) showToast();
  });
}
function showToast(){
  const toast = document.getElementById("socialToast");
  toast.classList.add("is-visible");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

/* ---------------------------------------------------------
   13. TEST DRIVE VEHICLE OPTIONS
   --------------------------------------------------------- */
function populateTestDriveVehicles(){
  const sel = document.getElementById("tdVehicle");
  sel.innerHTML = VEHICLES.map(v => `<option value="${v.id}">${v.brand} ${v.model} (${v.year})</option>`).join("");
}


/* ---------------------------------------------------------
   14. NAVIGATION (sticky, mobile toggle, active link)
   --------------------------------------------------------- */
function initNav(){
  const header = document.getElementById("siteHeader");
  const nav = document.querySelector(".nav");
  const toggle = document.getElementById("navToggle");
  const links = document.querySelectorAll("[data-nav]");

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive:true });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Active section highlighting
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        links.forEach(l => l.classList.remove("is-active"));
        const match = document.querySelector(`[data-nav][href="#${entry.target.id}"]`);
        if(match) match.classList.add("is-active");
      }
    });
  }, { rootMargin:"-45% 0px -50% 0px" });
  sections.forEach(s => io.observe(s));
}

/* ---------------------------------------------------------
   15. SCROLL PROGRESS BAR
   --------------------------------------------------------- */
function initScrollProgress(){
  const bar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + "%";
  }, { passive:true });
}

/* ---------------------------------------------------------
   16. SCROLL REVEAL + ANIMATED COUNTERS
   --------------------------------------------------------- */
let revealObserver;
function initScrollReveal(){
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        if(entry.target.hasAttribute("data-count-target")){
          animateCounter(entry.target);
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });

  refreshRevealObservers();
}
function refreshRevealObservers(){
  document.querySelectorAll(".will-reveal:not(.is-visible), [data-count-target]:not(.is-visible)").forEach(el => {
    if(revealObserver) revealObserver.observe(el);
  });
}
function animateCounter(el){
  const target = Number(el.getAttribute("data-count-target"));
  const suffix = el.getAttribute("data-count-suffix") || "";
  const duration = 1400;
  const start = performance.now();
  function tick(now){
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
    if(progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------------------------------------------------------
   17. BACK TO TOP
   --------------------------------------------------------- */
function initBackToTop(){
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 600);
  }, { passive:true });
  btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}


/* ---------------------------------------------------------
   18. MODALS — vehicle details + test drive booking
   --------------------------------------------------------- */
function openModal(modal){
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeModal(modal){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

function vehicleModalHTML(v){
  const badgeText = v.status === "in-stock" ? "In Stock" : v.status === "reserved" ? "Reserved" : "Sold";
  const monthlyEst = Math.round((v.price * 0.8 * (0.065/12)) / (1 - Math.pow(1 + 0.065/12, -48)));
  return `
    <div class="vd-gallery">
      <img src="${v.gallery[0]}" alt="${v.brand} ${v.model}">
      <span class="vd-badge">${badgeText}</span>
    </div>
    <div class="vd-content">
      <div class="vd-head">
        <div>
          <h3>${v.brand} ${v.model}</h3>
          <p class="vehicle-year">${v.year} · ${v.type}</p>
        </div>
        <div class="vd-price">${money(v.price)}</div>
      </div>

      <div class="vd-specs-grid">
        <div class="vd-spec"><span>Mileage</span><strong>${v.mileage.toLocaleString()} mi</strong></div>
        <div class="vd-spec"><span>Engine</span><strong>${v.engine}</strong></div>
        <div class="vd-spec"><span>Horsepower</span><strong>${v.hp} hp</strong></div>
        <div class="vd-spec"><span>Fuel Type</span><strong>${v.fuel}</strong></div>
        <div class="vd-spec"><span>Transmission</span><strong>${v.transmission}</strong></div>
        <div class="vd-spec"><span>Seating</span><strong>${v.seats} seats</strong></div>
      </div>

      <div class="vd-section">
        <h4>Interior Highlights</h4>
        <div class="vd-tags">${v.interior.map(i => `<span>${i}</span>`).join("")}</div>
      </div>
      <div class="vd-section">
        <h4>Exterior Highlights</h4>
        <div class="vd-tags">${v.exterior.map(i => `<span>${i}</span>`).join("")}</div>
      </div>
      <div class="vd-section">
        <h4>Safety Features</h4>
        <div class="vd-tags">${v.safety.map(i => `<span>${i}</span>`).join("")}</div>
      </div>

      <div class="vd-finance-note">
        💳 Financing available from an estimated <strong>${money(monthlyEst)}/mo</strong> — see the Finance Calculator for a custom quote.
      </div>

      <div class="vd-actions">
        <button class="btn btn-gold" data-book-vehicle="${v.id}">Book Test Drive</button>
        <a href="#finance" class="btn btn-outline" data-close-modal>View Financing</a>
      </div>
    </div>
  `;
}

function initModals(){
  const vehicleModal = document.getElementById("vehicleModal");
  const testDriveModal = document.getElementById("testDriveModal");

  document.addEventListener("click", e => {
    const viewBtn = e.target.closest("[data-view-vehicle]");
    if(viewBtn){
      const v = VEHICLES.find(x => x.id === viewBtn.getAttribute("data-view-vehicle"));
      if(v){
        document.getElementById("vehicleModalBody").innerHTML = vehicleModalHTML(v);
        openModal(vehicleModal);
      }
    }

    const bookBtn = e.target.closest("[data-book-vehicle]");
    if(bookBtn){
      closeModal(vehicleModal);
      document.getElementById("tdVehicle").value = bookBtn.getAttribute("data-book-vehicle");
      openModal(testDriveModal);
    }

    if(e.target.id === "navTestDriveBtn" || e.target.id === "heroTestDriveBtn"){
      openModal(testDriveModal);
    }

    if(e.target.closest("[data-close-modal]")){
      closeModal(vehicleModal);
      closeModal(testDriveModal);
    }
  });

  document.addEventListener("keydown", e => {
    if(e.key === "Escape"){
      closeModal(vehicleModal);
      closeModal(testDriveModal);
    }
  });
}

/* ---------------------------------------------------------
   19. LIGHTBOX
   --------------------------------------------------------- */
let lightboxIndex = 0;
function initLightbox(){
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");

  document.addEventListener("click", e => {
    const item = e.target.closest("[data-gallery-index]");
    if(item){
      lightboxIndex = Number(item.getAttribute("data-gallery-index"));
      updateLightbox();
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden","false");
      document.body.style.overflow = "hidden";
    }
    if(e.target.closest("[data-close-lightbox]")){
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden","true");
      document.body.style.overflow = "";
    }
  });

  document.getElementById("lightboxPrev").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex - 1 + GALLERY.length) % GALLERY.length;
    updateLightbox();
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex + 1) % GALLERY.length;
    updateLightbox();
  });

  document.addEventListener("keydown", e => {
    if(!lightbox.classList.contains("is-open")) return;
    if(e.key === "Escape"){
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    if(e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
    if(e.key === "ArrowRight") document.getElementById("lightboxNext").click();
  });

  function updateLightbox(){
    const g = GALLERY[lightboxIndex];
    img.src = g.src;
    img.alt = g.label;
  }
}


/* ---------------------------------------------------------
   20. FORMS — contact, test drive, newsletter (demo submits)
   --------------------------------------------------------- */
function initForms(){
  // Contact form (Netlify-compatible; also demo-success for local preview)
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", e => {
    if(!contactForm.checkValidity()) return;
    e.preventDefault();
    const encode = data => Object.keys(data).map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])).join("&");
    fetch("/", {
      method:"POST",
      headers:{ "Content-Type":"application/x-www-form-urlencoded" },
      body: encode({
        "form-name":"contact",
        name: document.getElementById("cName").value,
        email: document.getElementById("cEmail").value,
        phone: document.getElementById("cPhone").value,
        message: document.getElementById("cMessage").value
      })
    }).catch(() => {}).finally(() => {
      document.getElementById("contactSuccess").hidden = false;
      contactForm.reset();
    });
  });

  // Test drive booking
  const tdForm = document.getElementById("testDriveForm");
  tdForm.addEventListener("submit", e => {
    e.preventDefault();
    tdForm.hidden = true;
    document.getElementById("testDriveSuccess").hidden = false;
  });
  document.getElementById("testDriveModal").addEventListener("transitionend", e => {
    if(e.propertyName === "opacity" && !document.getElementById("testDriveModal").classList.contains("is-open")){
      setTimeout(() => {
        tdForm.hidden = false;
        tdForm.reset();
        document.getElementById("testDriveSuccess").hidden = true;
      }, 300);
    }
  });

  // Newsletter
  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    newsletterForm.hidden = true;
    document.getElementById("newsletterSuccess").hidden = false;
  });
}
