document.querySelector("[data-start]").addEventListener("click",(function(){t=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3),startBtn.disabled=!0})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t),stopBtn.disabled=!1}));let t=null;
//# sourceMappingURL=01-color-switcher.605ef3a0.js.map
