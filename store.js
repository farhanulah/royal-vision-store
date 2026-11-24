
const IMG = "https://royalvisionstore.wordpress.com/wp-content/uploads/2026/11/";
const WA_NUM = "923074400002";
const PRODUCTS = [
 {id:1, name:"Royal Vision Gold", price:4500, img:"01-royal-vision-gold-4500.jpg", cat:"sunglasses"},
 {id:2, name:"Royal Vision Black Aviator", price:4000, img:"02-royal-vision-black-aviator-4000.jpg", cat:"aviator"},
 {id:3, name:"MAYBACH", price:4500, img:"03-maybach-4500.jpg", cat:"sunglasses"},
 {id:4, name:"Cartier", price:4500, img:"04-cartier-4500.jpg", cat:"sunglasses"},
 {id:5, name:"PRADA", price:5000, img:"05-prada-5000.jpg", cat:"sunglasses"},
 {id:6, name:"Cartier", price:3500, img:"06-cartier-3500.jpg", cat:"sunglasses"},
 {id:7, name:"DITA", price:4500, img:"07-dita-4500.jpg", cat:"sunglasses"},
 {id:8, name:"Cartier Gold", price:3500, img:"08-cartier-gold-3500.jpg", cat:"sunglasses"},
 {id:9, name:"Cartier Square", price:4500, img:"09-cartier-square-4500.jpg", cat:"sunglasses"},
 {id:10, name:"MAYBACH (Design 2)", price:4500, img:"10-maybach-4500-b.jpg", cat:"sunglasses"},
 {id:11, name:"Shopard", price:3500, img:"11-shopard-3500.jpg", cat:"sunglasses"},
 {id:12, name:"Cartier Black", price:3500, img:"12-cartier-black-3500.jpg", cat:"sunglasses"},
 {id:13, name:"Cartier Tortoise", price:3500, img:"13-cartier-tortoise-3500.jpg", cat:"sunglasses"},
 {id:14, name:"PRADA", price:3500, img:"14-prada-3500.jpg", cat:"sunglasses"},
 {id:15, name:"Ray-Ban", price:3000, img:"15-rayban-3000.jpg", cat:"sunglasses"},
 {id:16, name:"Shopard", price:4500, img:"16-shopard-4500.jpg", cat:"sunglasses"},
 {id:17, name:"Cartier Gold Black", price:3500, img:"17-cartier-goldblack-3500.jpg", cat:"sunglasses"},
 {id:18, name:"Celine", price:2500, img:"18-celine-2500.jpg", tag:"ladies", cat:"ladies"},
 {id:19, name:"Celine (with tag)", price:2500, img:"19-celine-tag-2500.jpg", tag:"ladies", cat:"ladies"},
 {id:20, name:"Louis Vuitton", price:3000, img:"20-louis-vuitton-3000.jpg", cat:"sunglasses"},
 {id:21, name:"Louis Vuitton Clear", price:3000, img:"21-louis-vuitton-clear-3000.jpg", cat:"classic"},
 {id:22, name:"MOSCOT", price:2500, img:"22-moscot-2500.jpg", cat:"classic"},
 {id:23, name:"Louis Vuitton Brown", price:3500, img:"23-louis-vuitton-brown-3500.jpg", cat:"sunglasses"},
 {id:24, name:"DITA", price:2799, img:"24-dita-2799.jpg", cat:"sunglasses"},
 {id:25, name:"Louis Vuitton Clear Green", price:3250, img:"25-louis-vuitton-clear-green-3250.jpg", cat:"classic"},
 {id:26, name:"MOSCOT Black", price:2500, img:"26-moscot-black-2500.jpg", cat:"classic"},
 {id:27, name:"Marc Jacobs", price:2399, img:"27-marc-jacobs-2399.jpg", cat:"sunglasses"},
 {id:28, name:"DITA", price:2650, img:"28-dita-2650.jpg", cat:"sunglasses"},
 {id:29, name:"DITA Lifestyle", price:2650, img:"29-dita-lifestyle-2650.jpg", cat:"sunglasses"},
 {id:30, name:"DITA Lifestyle (Design 2)", price:2650, img:"30-dita-lifestyle-2650-b.jpg", cat:"sunglasses"},
 {id:31, name:"Marc Jacobs Ladies", price:2850, img:"31-marc-jacobs-ladies-2850.jpg", tag:"ladies", cat:"ladies"},
 {id:32, name:"John Dalia", price:2750, img:"32-john-dalia-2750.jpg", cat:"sunglasses"},
 {id:33, name:"Louis Vuitton", price:3450, img:"33-louis-vuitton-3450.jpg", cat:"sunglasses"},
 {id:34, name:"DITA Ladies", price:2850, img:"34-dita-ladies-2850.jpg", tag:"ladies", cat:"ladies"},
 {id:35, name:"JMM", price:2350, img:"35-jmm-2350.jpg", cat:"classic"},
 {id:36, name:"Jhon Dalia", price:2700, img:"36-jhon-dalia-2700.jpg", cat:"sunglasses"},
 {id:37, name:"MOSCOT Ladies", price:2950, img:"37-moscot-ladies-2950.jpg", tag:"ladies", cat:"ladies"},
 {id:38, name:"MOSCOT Men", price:2750, img:"38-moscot-men-2750.jpg", cat:"classic"},
 {id:39, name:"Ray-Ban Acetate Brown", price:3000, img:"images/39-rayban-acetate-brown-3000.jpg", cat:"classic"},
 {id:40, name:"GUCCI Acetate Blue", price:3250, img:"images/40-gucci-acetate-blue-3250.jpg", cat:"ladies", tag:"ladies"},
 {id:41, name:"PORSCHE Grey Matte", price:2750, img:"images/41-porsche-grey-matte-2750.jpg", cat:"ladies", tag:"ladies"},
 {id:42, name:"POLICE Acetate Brown", price:2750, img:"images/42-police-acetate-brown-2750.jpg", cat:"classic"},
 {id:43, name:"POLICE Black Grey Gradient", price:2750, img:"images/43-police-black-grey-gradient-2750.jpg", cat:"classic"},
 {id:44, name:"POLICE Acetate Black", price:2750, img:"images/44-police-acetate-black-2750.jpg", cat:"ladies", tag:"ladies"},
 {id:45, name:"GUCCI Acetate Brown", price:2900, img:"images/45-gucci-acetate-brown-2900.jpg", cat:"ladies", tag:"ladies"},
 {id:46, name:"PRADA Acetate Black", price:2850, img:"images/46-prada-acetate-black-2850.jpg", cat:"classic"},
 {id:47, name:"PORSCHE Matte Black", price:2750, img:"images/47-porsche-matte-black-2750.jpg", cat:"classic"},
 {id:48, name:"POLICE Black Brown", price:2850, img:"images/48-police-black-brown-2850.jpg", cat:"classic"}
,
 {id:49, name:"BOSS Black Grey Gradient", price:2850, img:"images/49-boss-black-grey-gradient-2850.jpg", cat:"classic"},
 {id:50, name:"CHANEL Transparent", price:2750, img:"images/50-chanel-transparent-2750.jpg", cat:"classic"},
 {id:51, name:"POLICE Grey Transparent", price:2750, img:"images/51-police-grey-transparent-2750.jpg", cat:"classic"},
 {id:52, name:"POLICE TR-90 Black", price:2750, img:"images/52-police-tr90-black-2750.jpg", cat:"classic"},
 {id:53, name:"Ray-Ban TR-90 Teal", price:2950, img:"images/53-rayban-tr90-teal-2950.jpg", cat:"classic"},
 {id:54, name:"DITA Round Black", price:2650, img:"images/54-dita-round-black-2650.jpg", cat:"classic"},
 {id:55, name:"DITA Round White", price:2850, img:"images/55-dita-round-white-ladies-2850.jpg", cat:"ladies", tag:"ladies"},
 {id:56, name:"GUCCI Clear", price:2750, img:"images/56-gucci-clear-2750.jpg", cat:"classic"},
 {id:57, name:"POLICE Green", price:2950, img:"images/57-police-green-ladies-2950.jpg", cat:"ladies", tag:"ladies"},
 {id:58, name:"PRADA Gold Black", price:2950, img:"images/58-prada-gold-black-2950.jpg", cat:"classic"}
,
 {id:59, name:"GUCCI Teal Gradient", price:3250, img:"images/59-gucci-teal-gradient-ladies-3250.jpg", cat:"ladies", tag:"ladies"},
 {id:60, name:"POLICE Clear", price:2950, img:"images/60-police-clear-ladies-2950.jpg", cat:"ladies", tag:"ladies"},
 {id:61, name:"Ray-Ban Yellow", price:2850, img:"images/61-rayban-yellow-2850.jpg", cat:"classic"},
 {id:62, name:"DITA Grey", price:2950, img:"images/62-dita-grey-ladies-2950.jpg", cat:"ladies", tag:"ladies"},
 {id:63, name:"GUCCI Purple", price:2850, img:"images/63-gucci-purple-ladies-2850.jpg", cat:"ladies", tag:"ladies"},
 {id:64, name:"Ray-Ban Navy Aviator", price:2750, img:"images/64-rayban-navy-aviator-2750.jpg", cat:"classic"},
 {id:65, name:"Ray-Ban Clear White", price:2650, img:"images/65-rayban-clear-white-2650.jpg", cat:"classic"},
 {id:66, name:"Ray-Ban Navy", price:2850, img:"images/66-rayban-navy-2850.jpg", cat:"classic"}

];
const imgSrc = p => p.img.includes("/") ? p.img : IMG + p.img;
const fmt = n => "Rs " + n.toLocaleString("en-PK");
const byId = id => PRODUCTS.find(p => p.id === id);
const waSvg = '<svg width="19" height="19" viewBox="0 0 24 24" fill="#1c8a49"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm4.52 16.87c-.25-.12-1.47-.72-1.69-.81-.22-.08-.37-.12-.53.13-.16.24-.62.8-.76.97-.14.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.53-1.29-.74-1.74-.2-.42-.4-.37-.53-.37h-.46c-.16 0-.41.06-.62.25-.22.18-.82.8-.82 2.01 0 1.21.85 2.37.97 2.53.12.17 1.68 2.56 4.07 3.59.57.25 1.01.39 1.36.5.57.18 1.09.16 1.5.1.46-.07 1.47-.6 1.79-1.22.32-.62.32-1.15.22-1.26-.1-.1-.23-.16-.48-.28z"/></svg>';

/* ---------- Marquee ---------- */
(function(){
  const brands = "DITA ✦ PRADA ✦ MAYBACH ✦ CARTIER ✦ LOUIS VUITTON ✦ MOSCOT ✦ RAY-BAN ✦ MARC JACOBS ✦ CELINE ✦ JMM ✦ JOHN DALIA ✦ SHOPARD ✦ ";
  const _mt = document.getElementById("marqueeTrack"); if(_mt) _mt.innerHTML = "<span>"+brands+"</span><span>"+brands+"</span>";
})();

/* ---------- Countdown to midnight ---------- */
(function(){
  const el = document.getElementById("countdown"); if(!el) return;
  function tick(){
    const now = new Date(); const end = new Date(now); end.setHours(24,0,0,0);
    let s = Math.max(0, Math.floor((end - now)/1000));
    const h = String(Math.floor(s/3600)).padStart(2,"0"), m = String(Math.floor(s%3600/60)).padStart(2,"0"), ss = String(s%60).padStart(2,"0");
    el.textContent = h+":"+m+":"+ss;
  }
  tick(); setInterval(tick, 1000);
})();

/* ---------- Shop grid / filters ---------- */
let curFilter = "all", curSearch = "", curSort = "featured";
const grid = document.getElementById("grid");
function passes(p){
  if(curFilter === "sunglasses" && !(p.cat === "sunglasses" || p.cat === "aviator")) return false;
  if(curFilter === "aviator" && p.cat !== "aviator") return false;
  if(curFilter === "classic" && p.cat !== "classic") return false;
  if(curFilter === "ladies" && p.tag !== "ladies") return false;
  if(curFilter === "premium" && p.price < 4000) return false;
  if(curFilter === "under3000" && p.price >= 3000) return false;
  if(curSearch && !p.name.toLowerCase().includes(curSearch)) return false;
  return true;
}
function renderGrid(){
  if(!grid) return;
  let list = PRODUCTS.filter(passes);
  if(curSort === "low") list = [...list].sort((a,b)=>a.price-b.price);
  if(curSort === "high") list = [...list].sort((a,b)=>b.price-a.price);
  if(!list.length){ grid.innerHTML = '<div class="empty">No products match your search. Try another brand or filter.</div>'; return; }
  grid.innerHTML = list.map(p => `
    <article class="card">
      <div class="ph"><img loading="lazy" src="${imgSrc(p)}" alt="${p.name} — ${fmt(p.price)}"></div>
      <div class="bd">
        <h3>${p.name}</h3>
        <div class="price">${fmt(p.price)} <small>COD AVAILABLE</small></div>
        <div class="acts">
          <button class="add" data-add="${p.id}">Add to Cart</button>
          <a class="wa-ic" target="_blank" rel="noopener" aria-label="Order ${p.name} on WhatsApp"
             href="https://wa.me/${WA_NUM}?text=${encodeURIComponent("I want to order: " + p.name + " (" + fmt(p.price) + ")")}">${waSvg}</a>
        </div>
      </div>
    </article>`).join("");
}
if (grid) {
  document.getElementById("chips").addEventListener("click", e => {
    const b = e.target.closest(".chip"); if(!b) return;
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === b));
    curFilter = b.dataset.filter; renderGrid();
  });
  const _se = document.getElementById("search");
  if (_se) _se.addEventListener("input", e => { curSearch = e.target.value.trim().toLowerCase(); renderGrid(); });
  const _so = document.getElementById("sort");
  if (_so) _so.addEventListener("change", e => { curSort = e.target.value; renderGrid(); });
  const _cat = new URLSearchParams(location.search).get("cat");
  if (_cat) { curFilter = _cat; document.querySelectorAll(".chip").forEach(ch => ch.classList.toggle("on", ch.dataset.filter === _cat)); }
  renderGrid();
}
/* ---------- Featured (home) ---------- */
const fg = document.getElementById("featuredGrid");
if (fg) {
  fg.innerHTML = PRODUCTS.slice(0, 8).map(p => `
    <article class="card">
      <div class="ph"><img loading="lazy" src="${imgSrc(p)}" alt="${p.name} — ${fmt(p.price)}"></div>
      <div class="bd">
        <h3>${p.name}</h3>
        <div class="price">${fmt(p.price)} <small>COD AVAILABLE</small></div>
        <div class="acts">
          <button class="add" data-add="${p.id}">Add to Cart</button>
          <a class="wa-ic" target="_blank" rel="noopener" aria-label="Order ${p.name} on WhatsApp"
             href="https://wa.me/${WA_NUM}?text=${encodeURIComponent("I want to order: " + p.name + " (" + fmt(p.price) + ")")}">${waSvg}</a>
        </div>
      </div>
    </article>`).join("");
}

/* ---------- Cart ---------- */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("rv_cart") || "{}") || {}; } catch(e){ cart = {}; }
Object.keys(cart).forEach(k => { if(!byId(+k)) delete cart[k]; });
const drawer = document.getElementById("drawer"), overlay = document.getElementById("overlay");
function saveCart(){ localStorage.setItem("rv_cart", JSON.stringify(cart)); }
function cartCount(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function cartTotal(){ return Object.entries(cart).reduce((a,[id,q])=>a + byId(+id).price*q, 0); }
function renderCart(){
  document.getElementById("cartCount").textContent = cartCount();
  const box = document.getElementById("cartItems");
  const entries = Object.entries(cart);
  if(!entries.length){
    box.innerHTML = '<div class="noitems">Your cart is empty.<br>Add something royal 👑</div>';
  } else {
    box.innerHTML = entries.map(([id,q]) => { const p = byId(+id); return `
      <div class="it">
        <img src="${imgSrc(p)}" alt="${p.name}">
        <div class="inf">
          <h4>${p.name}</h4>
          <div class="p">${fmt(p.price)} × ${q} = ${fmt(p.price*q)}</div>
          <span class="qty">
            <button data-dec="${p.id}" aria-label="Decrease">−</button><b>${q}</b><button data-inc="${p.id}" aria-label="Increase">+</button>
          </span><br>
          <button class="rm" data-rm="${p.id}">Remove</button>
        </div>
      </div>`; }).join("");
  }
  document.getElementById("cartTotal").textContent = fmt(cartTotal());
  document.getElementById("checkoutBtn").disabled = !entries.length;
}
function openCart(){ renderCart(); drawer.classList.add("open"); overlay.classList.add("show"); }
function closeCart(){ drawer.classList.remove("open"); overlay.classList.remove("show"); }
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("contBtn").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.getElementById("cartItems").addEventListener("click", e => {
  const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]"), rm = e.target.closest("[data-rm]");
  if(inc){ cart[inc.dataset.inc]++; }
  else if(dec){ const id = dec.dataset.dec; cart[id]--; if(cart[id] <= 0) delete cart[id]; }
  else if(rm){ delete cart[rm.dataset.rm]; }
  else return;
  saveCart(); renderCart();
});
function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); renderCart();
  toast("Added to cart: <b>" + byId(id).name + "</b> — " + fmt(byId(id).price));
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-add]"); if(b) addToCart(+b.dataset.add);
});

/* ---------- Toast ---------- */
let toastTimer;
function toast(html){
  const t = document.getElementById("toast");
  t.innerHTML = html; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>t.classList.remove("show"), 2600);
}

/* ---------- Reviews slider ---------- */
const REVIEWS = [
 {stars:5, text:"“Ordered the DITA frame — quality is genuinely premium, and it arrived exactly like the photo. The confirmation call made everything easy.”", name:"Ahmed · Lahore"},
 {stars:5, text:"“The ladies Celine is so light and stylish, I wear it all day. Cash on Delivery means zero tension. Highly recommended!”", name:"Fatima · Karachi"},
 {stars:4, text:"“Bought the MOSCOT Men for daily use. Honest price, solid frame, fast reply on WhatsApp. Royal Vision is my go-to now.”", name:"Usman · Mardan"}
];
let revIdx = 0, revTimer;
function showReview(i){
  revIdx = (i + REVIEWS.length) % REVIEWS.length;
  const r = REVIEWS[revIdx];
  document.getElementById("revStars").textContent = "★".repeat(r.stars) + "☆".repeat(5 - r.stars);
  document.getElementById("revText").textContent = r.text;
  document.getElementById("revName").textContent = "— " + r.name;
  document.querySelectorAll("#revDots button").forEach((d,j)=>d.classList.toggle("on", j === revIdx));
}
if (document.getElementById("revDots")) {
const dotsBox = document.getElementById("revDots");
REVIEWS.forEach((_,i)=>{ const b = document.createElement("button"); b.setAttribute("aria-label","Review " + (i+1)); b.addEventListener("click", ()=>{ showReview(i); resetRevTimer(); }); dotsBox.appendChild(b); });
function resetRevTimer(){ clearInterval(revTimer); revTimer = setInterval(()=>showReview(revIdx+1), 6000); }
document.getElementById("revPrev").addEventListener("click", ()=>{ showReview(revIdx-1); resetRevTimer(); });
document.getElementById("revNext").addEventListener("click", ()=>{ showReview(revIdx+1); resetRevTimer(); });
showReview(0); resetRevTimer();
}

/* ---------- Newsletter ---------- */
document.getElementById("newsForm").addEventListener("submit", e => {
  e.preventDefault();
  const em = document.getElementById("newsEmail").value.trim();
  if(!em) return;
  let list = []; try { list = JSON.parse(localStorage.getItem("rv_news") || "[]"); } catch(_){}
  if(!list.includes(em)) list.push(em);
  localStorage.setItem("rv_news", JSON.stringify(list));
  document.getElementById("newsOk").style.display = "block";
  document.getElementById("newsEmail").value = "";
  toast("Subscribed: <b>" + em + "</b>");
});

/* ---------- Mobile nav ---------- */
document.getElementById("burger").addEventListener("click", ()=>document.getElementById("mnav").classList.toggle("open"));
document.querySelectorAll("#mnav a").forEach(a=>a.addEventListener("click", ()=>document.getElementById("mnav").classList.remove("open")));

/* ---------- Checkout ---------- */
const modal = document.getElementById("modal");
function itemsText(){
  return Object.entries(cart).map(([id,q]) => { const p = byId(+id); return q > 1 ? p.name + " (Qty " + q + ") — " + fmt(p.price*q) : p.name + " — " + fmt(p.price); }).join("\n");
}
function renderSummary(){
  const rows = Object.entries(cart).map(([id,q]) => { const p = byId(+id); return `<div><span>${p.name} × ${q}</span><span>${fmt(p.price*q)}</span></div>`; }).join("");
  document.getElementById("orderSummary").innerHTML = rows + `<div class="tot"><span>Total (COD)</span><span>${fmt(cartTotal())}</span></div>`;
}
function openCheckout(){
  if(!Object.keys(cart).length) return;
  closeCart();
  document.getElementById("checkoutView").style.display = "block";
  document.getElementById("successView").style.display = "none";
  document.getElementById("formErr").style.display = "none";
  renderSummary();
  modal.classList.add("open");
}
function closeCheckout(){ modal.classList.remove("open"); }
document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("modalBg").addEventListener("click", closeCheckout);
document.getElementById("cancelCheckout").addEventListener("click", closeCheckout);
document.getElementById("successClose").addEventListener("click", closeCheckout);
document.addEventListener("keydown", e => { if(e.key === "Escape"){ closeCheckout(); closeCart(); } });

function getForm(){
  return {
    name: document.getElementById("fName").value.trim(),
    phone: document.getElementById("fPhone").value.trim(),
    whatsapp: document.getElementById("fWhatsapp").value.trim(),
    address: document.getElementById("fAddress").value.trim(),
    city: document.getElementById("fCity").value.trim(),
    note: document.getElementById("fNote").value.trim()
  };
}
function validate(f){
  const bad = [];
  const mark = (id, isBad) => document.getElementById(id).classList.toggle("err", isBad);
  mark("fName", !f.name); if(!f.name) bad.push("your name");
  const phoneOk = /^(\+92|0)?3\d{9}$/.test(f.phone.replace(/[\s-]/g,""));
  mark("fPhone", !phoneOk); if(!phoneOk) bad.push("a valid mobile number (e.g. 0307 4400002)");
  const waOk = /^(\+92|0)?3\d{9}$/.test(f.whatsapp.replace(/[\s-]/g,""));
  mark("fWhatsapp", !waOk); if(!waOk) bad.push("your WhatsApp number");
  mark("fAddress", !f.address); if(!f.address) bad.push("your complete address");
  mark("fCity", !f.city); if(!f.city) bad.push("your city");
  return bad;
}
function showErr(msg){
  const e = document.getElementById("formErr");
  e.innerHTML = msg; e.style.display = "block";
  e.scrollIntoView({behavior:"smooth", block:"center"});
}
function orderText(f, oid){
  return "New Order — Royal Vision" + (oid ? " (" + oid + ")" : "") + "\n\nItems:\n" + itemsText() + "\n\nProduct Pictures:\n" + Object.entries(cart).map(([id,q]) => imgSrc(byId(+id))).join("\n") + "\n\nTotal: " + fmt(cartTotal()) + " (Cash on Delivery)\n\nName: " + f.name + "\nMobile: " + f.phone + "\nWhatsApp: " + f.whatsapp + "\nAddress: " + f.address + "\nCity: " + f.city + (f.note ? "\nNote: " + f.note : "");
}
document.getElementById("orderForm").addEventListener("submit", async e => {
  e.preventDefault();
  const f = getForm();
  const bad = validate(f);
  if(bad.length){ showErr("Please add " + bad.join(", ") + " so we can deliver your order."); return; }
  const btn = document.getElementById("placeBtn");
  btn.disabled = true; btn.textContent = "Placing order…";
  const oid = "RV-" + Date.now().toString().slice(-8);
  try {
    const res = await fetch("https://formsubmit.co/ajax/fk402273@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: "New Order — Royal Vision",
        _template: "table",
        order_id: oid,
        name: f.name,
        phone: f.phone,
        whatsapp: f.whatsapp,
        address: f.address,
        city: f.city,
        note: f.note || "—",
        pictures: Object.entries(cart).map(([id,q]) => { const p = byId(+id); return p.name + ": " + imgSrc(p); }).join("\n"),
        items: itemsText(),
        total: fmt(cartTotal()),
        payment: "Cash on Delivery"
      })
    });
    if(!res.ok) throw new Error("Email service error");
    document.getElementById("orderIdBox").textContent = oid;
    document.getElementById("checkoutView").style.display = "none";
    document.getElementById("successView").style.display = "block";
    cart = {}; saveCart(); renderCart();
  } catch(err) {
    showErr("⚠️ The email order could not be sent right now. Please use <b>“Order via WhatsApp”</b> below — your items and details will be sent there instead, and we will confirm on call.");
    document.getElementById("waOrderBtn").focus();
  } finally {
    btn.disabled = false; btn.textContent = "Place Order";
  }
});
document.getElementById("waOrderBtn").addEventListener("click", () => {
  const f = getForm();
  const bad = validate(f);
  if(bad.length){ showErr("Please add " + bad.join(", ") + " — then tap Order via WhatsApp."); return; }
  window.open("https://wa.me/" + WA_NUM + "?text=" + encodeURIComponent(orderText(f, null)), "_blank");
});

renderCart();

/* ---------- Picture preview with zoom (all product cards) ---------- */
const pv = document.getElementById("preview");
let pvScale = 1, pvX = 0, pvY = 0, pvId = null;
function pvApply(){ const im = document.getElementById("pvImg"); if(im) im.style.transform = "translate(" + pvX + "px," + pvY + "px) scale(" + pvScale + ")"; }
function pvReset(){ pvScale = 1; pvX = 0; pvY = 0; pvApply(); }
function openPreview(id){
  const p = byId(id); if(!p || !pv) return; pvId = id;
  document.getElementById("pvImg").src = imgSrc(p);
  document.getElementById("pvName").textContent = p.name;
  document.getElementById("pvPrice").textContent = fmt(p.price);
  document.getElementById("pvAdd").dataset.add = id;
  document.getElementById("pvWa").href = "https://wa.me/" + WA_NUM + "?text=" + encodeURIComponent("I want to order: " + p.name + " (" + fmt(p.price) + ")\nPicture: " + imgSrc(p));
  pvReset(); pv.classList.add("open"); document.body.style.overflow = "hidden";
}
function closePreview(){ if(!pv) return; pv.classList.remove("open"); document.body.style.overflow = ""; }
if (pv) {
  document.getElementById("pvClose").addEventListener("click", closePreview);
  document.getElementById("pvBg").addEventListener("click", closePreview);
  document.addEventListener("keydown", e => { if(e.key === "Escape") closePreview(); });
  document.getElementById("pvIn").addEventListener("click", () => { pvScale = Math.min(3.5, pvScale + 0.5); pvApply(); });
  document.getElementById("pvOut").addEventListener("click", () => { pvScale = Math.max(1, pvScale - 0.5); if(pvScale === 1){ pvX = 0; pvY = 0; } pvApply(); });
  document.getElementById("pvReset").addEventListener("click", pvReset);
  const stage = document.getElementById("pvStage"), im = document.getElementById("pvImg");
  im.addEventListener("click", () => { pvScale = pvScale > 1 ? 1 : 2; if(pvScale === 1){ pvX = 0; pvY = 0; } pvApply(); });
  stage.addEventListener("wheel", e => { e.preventDefault(); pvScale = Math.min(3.5, Math.max(1, pvScale + (e.deltaY < 0 ? 0.25 : -0.25))); if(pvScale === 1){ pvX = 0; pvY = 0; } pvApply(); }, {passive:false});
  let drag = null;
  im.addEventListener("pointerdown", e => { if(pvScale > 1){ drag = {x: e.clientX - pvX, y: e.clientY - pvY}; im.setPointerCapture(e.pointerId); } });
  im.addEventListener("pointermove", e => { if(drag){ pvX = e.clientX - drag.x; pvY = e.clientY - drag.y; pvApply(); } });
  im.addEventListener("pointerup", () => { drag = null; });
  document.getElementById("pvAdd").addEventListener("click", () => { closePreview(); openCart(); });
}
document.addEventListener("click", e => {
  const ph = e.target.closest(".card .ph");
  if (ph) { const card = ph.closest(".card"); const b = card && card.querySelector("[data-add]"); if (b) openPreview(+b.dataset.add); }
});
/* ---------- Catalog page (4 options) ---------- */
/* Classification checked picture-by-picture (24 Nov): ids 1-38 have dark/tinted
   lenses (sunglasses); ids 39-66 have clear/white lenses (eyesight frames). */
const EYESIGHT = new Set(); for (let i = 39; i <= 66; i++) EYESIGHT.add(i);
function catGroup(p, g){
  if (g === "sunglasses") return !EYESIGHT.has(p.id);
  if (g === "eyesight") return EYESIGHT.has(p.id);
  if (g === "ladies") return p.tag === "ladies";
  if (g === "men") return p.tag !== "ladies";
  return false;
}
const catGrid = document.getElementById("catalogGrid");
if (catGrid) {
  const lensPanel = document.getElementById("lensPanel");
  function catCard(p){
    return '<article class="card"><div class="ph"><img loading="lazy" src="' + imgSrc(p) + '" alt="' + p.name + '"></div><div class="bd"><h3>' + p.name + '</h3><div class="price">' + fmt(p.price) + ' <small>COD AVAILABLE</small></div><div class="acts"><button class="add" data-add="' + p.id + '">Add to Cart</button><a class="wa-ic" target="_blank" rel="noopener" aria-label="Order on WhatsApp" href="https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent("I want to order: " + p.name + " (" + fmt(p.price) + ")") + '">' + waSvg + '</a></div></div></article>';
  }
  const sel = document.getElementById("catSelect");
  const countEl = document.getElementById("catCount");
  const NAMES = {sunglasses: "Sunglasses", eyesight: "Eyesight Frames", ladies: "Ladies Glasses", men: "Men Glasses"};
  function showCat(g){
    if (sel) sel.value = g;
    if (g === "lenses") { catGrid.innerHTML = ""; catGrid.style.display = "none"; if(lensPanel) lensPanel.style.display = "block"; if(countEl) countEl.textContent = "Lenses — Coming Soon"; return; }
    if (lensPanel) lensPanel.style.display = "none"; catGrid.style.display = "";
    const list = PRODUCTS.filter(p => catGroup(p, g));
    if (countEl) countEl.textContent = list.length + " designs — " + NAMES[g];
    catGrid.innerHTML = list.map(catCard).join("");
  }
  if (sel) sel.addEventListener("change", () => showCat(sel.value));
  const h = (location.hash || "#sunglasses").slice(1);
  showCat(["sunglasses","eyesight","lenses","ladies","men"].includes(h) ? h : "sunglasses");
}
