window.onload=function(){const o=document.getElementById("js-loading");o.classList.add("is-loaded"),document.getElementById("js-header").classList.add("is-show")};const naviShadow=function(){const e=document.getElementsByClassName("js-navShadow");var t=Math.floor(.01*window.innerHeight);for(let o=0;o<e.length;o++)Math.floor(e[o].getBoundingClientRect().top)<t?e[o].classList.add("is-shadow"):e[o].classList.remove("is-shadow")};window.addEventListener("scroll",naviShadow,!1);const modalWrapOpen=function(o){const t=o.currentTarget.dataset.modalOpen;Array.from(document.querySelectorAll(".p-work__modal")).forEach((o,e)=>{o.getAttribute("data-modal")===t&&o.classList.toggle("is_open")})};Array.from(document.querySelectorAll(".p-work__figure")).forEach(o=>{o.addEventListener("click",modalWrapOpen)});const modalCloseAction=function(o){const e=o.currentTarget.closest(".p-work__modal");e.classList.toggle("is_open")};Array.from(document.querySelectorAll(".p-work__close")).forEach(o=>{o.addEventListener("click",modalCloseAction)}),Array.from(document.querySelectorAll(".p-work__mask")).forEach(o=>{o.addEventListener("click",modalCloseAction)});