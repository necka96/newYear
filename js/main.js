let searchBtn = document.querySelector("#search-btn")
let searchFrom = document.querySelector(".search")
let navbar = document.querySelector(".navbar")
let menuBtn = document.querySelector("#menu-btn")
searchBtn.addEventListener("click", ()=>{
 searchFrom.classList.toggle("active")
 searchBtn.classList.toggle("fa-times")
 navbar.classList.remove("active")
 menuBtn.classList.remove("fa-times")
})

menuBtn.addEventListener("click", ()=>{
 navbar.classList.toggle("active")
 menuBtn.classList.toggle("fa-times")
 searchFrom.classList.remove("active")
 searchBtn.classList.remove("fa-times")
})
window.addEventListener("scroll", ()=>{
 searchFrom.classList.remove("active")
 searchBtn.classList.remove("fa-times")
 navbar.classList.remove("active")
 menuBtn.classList.remove("fa-times")
 if(window.scrollY > 650){
  document.querySelector(".header").classList.add("active")
 }else{
  document.querySelector(".header").classList.remove("active")
 }

 let value = window.scrollY / 10
 document.querySelector(".home .mountians").style.bottom = `${-value}%`
 document.querySelector(".home .content").style.bottom = `${value}%`
 document.querySelector(".home .moon").style.marginTop = `${-value}%`
 document.querySelector(".home .cloud-1").style.right = `${-value}%`
 document.querySelector(".home .cloud-2").style.left = `${-value}%`
})