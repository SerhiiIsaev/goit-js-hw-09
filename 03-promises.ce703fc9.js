!function(){var e=document.querySelector("form"),o=document.querySelector("button");function n(e,o){Math.random()>.3?console.log("✅ Fulfilled promise ".concat(e," in ").concat(o,"ms")):console.log("❌ Rejected promise ".concat(e," in ").concat(o,"ms"))}e.addEventListener("submit",(function(o){o.preventDefault();for(var t=o.currentTarget.elements,c=0;c<Number(t.amount.value);c+=1)n(c+1,Number(t.step.value));console.log(Number(t.amount.value)),e.reset()})),console.log(o)}();
//# sourceMappingURL=03-promises.ce703fc9.js.map
