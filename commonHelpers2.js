import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),l="feedback-form-state",o=e.elements.email,s=e.elements.message;localStorage.length>0&&(o.value=JSON.parse(localStorage.getItem(l)).email,s.value=JSON.parse(localStorage.getItem(l)).message);const t={email:"",message:""};e.addEventListener("input",a=>{a.target.type==="email"?t.email=a.target.value.trim():t.message=a.target.value.trim(),localStorage.setItem(l,JSON.stringify(t)),console.log(localStorage)});e.addEventListener("submit",a=>{if(o.value===""||s.value===""){alert("Fill please all fields");return}console.log(t),localStorage.clear(),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map