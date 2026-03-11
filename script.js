/* =========================
LOADER
========================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

let loader=document.getElementById("loader")
if(loader){
loader.style.display="none"
}

},2000)

})

/* =========================
DARK / LIGHT MODE
========================= */

const toggle=document.getElementById("modeToggle")
const navLogo=document.getElementById("siteLogo")
const heroLogo=document.getElementById("heroLogo")

if(toggle){

toggle.onclick=function(){

document.body.classList.toggle("light")

if(document.body.classList.contains("light")){

toggle.textContent="☀️"

navLogo.src="img/logo-light.png"
heroLogo.src="img/logo-light.png"

}else{

toggle.textContent="🌙"

navLogo.src="img/logo-dark.png"
heroLogo.src="img/logo-dark.png"

}

}

}

/* =========================
SCROLL REVEAL
========================= */

const reveal=document.querySelectorAll(".reveal")

function show(){

let windowHeight=window.innerHeight

reveal.forEach(el=>{

let top=el.getBoundingClientRect().top

if(top<windowHeight-60){
el.classList.add("active")
}

})

}

window.addEventListener("scroll",show)
window.addEventListener("load",show)

/* =========================
FAQ TOGGLE
========================= */

let faqBtn=document.querySelectorAll(".faqBtn")

faqBtn.forEach(btn=>{

btn.onclick=()=>{

let text=btn.nextElementSibling

text.style.display=
text.style.display==="block"
?"none":"block"

}

})

/* =========================
SCROLL TO TOP
========================= */

let topBtn=document.getElementById("topBtn")

if(topBtn){

window.onscroll=()=>{

if(document.documentElement.scrollTop>200){
topBtn.style.display="block"
}else{
topBtn.style.display="none"
}

}

topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
})
}

}

/* =========================
ZOOM GAMBAR LIVERY
========================= */

let imgs=document.querySelectorAll(".zoom")
let modal=document.getElementById("imgModal")
let modalImg=document.getElementById("modalImg")

if(imgs && modal){

imgs.forEach(img=>{

img.onclick=()=>{

modal.style.display="flex"
modalImg.src=img.src

}

})

modal.onclick=()=>{
modal.style.display="none"
}

}

/* =========================
ORDER WHATSAPP OTOMATIS
========================= */

let orders=document.querySelectorAll(".order")

orders.forEach(btn=>{

btn.onclick=function(e){

e.preventDefault()

let card=this.closest(".card")
let produk=card.querySelector("h3").innerText

let pesan=
`Halo ZIMM x KYY STORE

Nama:
Pesanan: ${produk}
Pembayaran: DANA / GOPAY
Email Akun:
Password Akun:`

let url="https://wa.me/62895805295495?text="+encodeURIComponent(pesan)

window.open(url)

}

})

/* =========================
COUNTER PEMBELI LIVERY
========================= */

let buys=document.querySelectorAll(".buy")
let buyer=document.getElementById("buyer")
let count=20

buys.forEach(btn=>{

btn.onclick=()=>{

count++

if(buyer){
buyer.innerHTML=count+"+<br>Pembeli"
}

}

})

/* =========================
AUTO BADGE TERMAHAL / TERMURAH
========================= */

let allCards=document.querySelectorAll(".card")
let prices=[]

allCards.forEach(card=>{

let priceText=card.querySelector("p").innerText.replace(/[^0-9]/g,"")
let price=parseInt(priceText)

prices.push({card,price})

})

let maxPrice=Math.max(...prices.map(p=>p.price))
let minPrice=Math.min(...prices.map(p=>p.price))

allCards.forEach(card=>{

let existing=card.querySelector(".badge")
if(existing) existing.remove()

})

prices.forEach(p=>{

let badge=document.createElement("span")
badge.classList.add("badge")

if(p.price===maxPrice){

badge.innerText="TERMAHAL"

}else if(p.price===minPrice){

badge.innerText="TERMURAH"

}else{

return

}

p.card.appendChild(badge)

})

