"use strict";const BASE_URL=window.location.protocol+"//"+window.location.host,PATH_URL=window.location.pathname,FULL_URL=window.location.href,GET_PARAM=e=>new URL(FULL_URL).searchParams.get(e);function fadeOut(e,t=!1,o=null){if(!e)return!1;e.style.opacity=1,function n(){(e.style.opacity-=.1)<0?(t?e.style.display="none":e.remove(),o instanceof Function?o():window[o]instanceof Function&&window[o]()):requestAnimationFrame(n)}()}function smoothScroll(e){e&&e.scrollIntoView({behavior:"smooth"})}function smoothScrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}app.header={init:function(){document.getElementById("header")}},console.log("%cMade by passion","background:#da4648;color:#fff;padding:10px;font-weight:bold;"),document.addEventListener("click",(e=>{if("A"!==e.target.tagName)return!1;const t=e.target,o=t.getAttribute("href");if("#"===o)e.preventDefault(),smoothScrollToTop();else if("#"===o.charAt(0)||"/"===o.charAt(0)&&"#"===o.charAt(1)){if(!t.hash)return!1;const o=document.querySelector(t.hash);o&&(e.preventDefault(),smoothScroll(o))}})),window.onload=()=>{document.querySelectorAll("img").forEach((e=>{e.complete&&void 0!==e.naturalWidth&&e.naturalWidth<=0&&(e.src=BASE_URL+"/img/no-image.jpg")}))},document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("a").forEach((e=>{e.hasAttribute("href")&&e.href.startsWith("tel:")&&(e.href="tel:"+e.href.replaceAll(/[^\d+]/g,""))})),document.querySelectorAll("a").forEach((e=>{e.hasAttribute("target")&&"_blank"===e.getAttribute("target")&&e.setAttribute("rel","noopener noreferrer nofollow")})),document.addEventListener("contextmenu",(e=>{"IMG"===e.target.nodeName&&e.preventDefault()}))})),app.header.init();const toggleBall=document.querySelector(".toggle-section"),pricingCards=document.querySelectorAll(".pricing-card");toggleBall.addEventListener("click",(()=>{toggleBall.classList.toggle("active"),pricingCards.forEach((e=>{e.classList.toggle("yearly")}))}));var mobileMenuOpened=document.querySelector(".mobile-toggle"),mobileMenu=document.querySelector(".mobile-menu");const mobileMenuOpen=document.querySelector(".open-toggle"),mobileMenuClose=document.querySelector(".close-toggle"),main=document.querySelector(".main"),header=document.querySelector("#header");mobileMenuOpened.addEventListener("click",(()=>{mobileMenu.classList.toggle("active"),mobileMenuClose.classList.toggle("active"),mobileMenuOpen.classList.toggle("active"),main.classList.toggle("active"),header.classList.toggle("active")}));