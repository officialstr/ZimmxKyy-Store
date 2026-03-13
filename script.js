/* =========================
LOADER
========================= */

window.addEventListener("load", function(){

const loader = document.getElementById("loader")
const progress = document.querySelector(".loading-progress")

if(!loader || !progress) return

progress.addEventListener("animationend", function(){

loader.style.opacity = "0"

setTimeout(()=>{
loader.style.display = "none"
},300)

})

})


/* =========================
DARK / LIGHT MODE
========================= */

const toggle = document.getElementById("modeToggle")
const navLogo = document.getElementById("siteLogo")
const heroLogo = document.getElementById("heroLogo")

if(toggle){

toggle.addEventListener("click",function(){

document.body.classList.toggle("light")

if(document.body.classList.contains("light")){

toggle.textContent="☀️"

if(navLogo) navLogo.src="img/logo-light.png"
if(heroLogo) heroLogo.src="img/logo-light.png"

}else{

toggle.textContent="🌙"

if(navLogo) navLogo.src="img/logo-dark.png"
if(heroLogo) heroLogo.src="img/logo-dark.png"

}

})

}


/* =========================
SCROLL REVEAL
========================= */

const reveal = document.querySelectorAll(".reveal")

function showReveal(){

let windowHeight = window.innerHeight

reveal.forEach(el=>{

let top = el.getBoundingClientRect().top

if(top < windowHeight - 60){
el.classList.add("active")
}

})

}

window.addEventListener("scroll",showReveal)
window.addEventListener("load",showReveal)


/* =========================
FAQ TOGGLE
========================= */

const faqBtn = document.querySelectorAll(".faqBtn")

faqBtn.forEach(btn=>{

btn.onclick = ()=>{

const text = btn.nextElementSibling

if(text){

text.style.display =
text.style.display === "block"
? "none"
: "block"

}

}

})


/* =========================
ZOOM GAMBAR
========================= */

const imgs = document.querySelectorAll(".zoom")
const modal = document.getElementById("imgModal")
const modalImg = document.getElementById("modalImg")

if(imgs.length && modal && modalImg){

imgs.forEach(img=>{

img.onclick = ()=>{

modal.style.display="flex"
modalImg.src = img.src

}

})

modal.onclick = ()=>{
modal.style.display="none"
}

}


/* =========================
FORMAT PESAN WA
========================= */

function formatPesan(produk){

return `Halo ZIMM x KYY STORE

Nama:
Pesanan: ${produk}
Pembayaran: DANA / GOPAY
Email Akun:
Password Akun:`

}


/* =========================
ORDER MODIF + AKUN
========================= */

const orderButtons = document.querySelectorAll("#modif .order, #akun .order")

orderButtons.forEach(btn=>{

btn.onclick = function(e){

e.preventDefault()

const card = this.closest(".card")
if(!card) return

const produk = card.querySelector("h3").innerText

const url =
"https://wa.me/6283167210496?text=" +
encodeURIComponent(formatPesan(produk))

window.open(url,"_blank")

}

})


/* =========================
ORDER LIVERY
========================= */

const liveryButtons = document.querySelectorAll("#livery .buy")

liveryButtons.forEach(btn=>{

btn.onclick = function(e){

e.preventDefault()

const card = this.closest(".card")
if(!card) return

const produk = card.querySelector("h3").innerText

const url =
"https://wa.me/6285799237548?text=" +
encodeURIComponent(formatPesan(produk))

window.open(url,"_blank")

}

})


/* =========================
COUNTER PEMBELI
========================= */

let buyer=document.getElementById("buyer")
let count=20

document.querySelectorAll(".buy").forEach(btn=>{

btn.addEventListener("click",function(){

count++

if(buyer){
buyer.innerHTML=count+"+<br>Pembeli"
}

})

})


/* =========================
BADGE TERMAHAL / TERMURAH
========================= */

const allCards = document.querySelectorAll(".card")
let prices = []

allCards.forEach(card=>{

const p = card.querySelector("p")
if(!p) return

const priceText = p.innerText.replace(/[^0-9]/g,"")
const price = parseInt(priceText)

if(!isNaN(price)){
prices.push({card,price})
}

})

if(prices.length){

const maxPrice = Math.max(...prices.map(p=>p.price))
const minPrice = Math.min(...prices.map(p=>p.price))

prices.forEach(p=>{

let badge = document.createElement("span")
badge.classList.add("badge")

if(p.price === maxPrice){
badge.innerText = "TERMAHAL"
}else if(p.price === minPrice){
badge.innerText = "TERMURAH"
}else{
return
}

p.card.appendChild(badge)

})

}