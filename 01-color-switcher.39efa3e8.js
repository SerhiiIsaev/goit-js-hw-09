const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body");e.addEventListener("click",(function(t){o=setInterval(r,1e3),e.disabled=!0})),t.addEventListener("click",(function(t){clearInterval(o),e.disabled=!1})),e.disabled=!1;let o=0;function r(){n.style.backgroundColor=c()}function c(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}console.log(c());
//# sourceMappingURL=01-color-switcher.39efa3e8.js.map
