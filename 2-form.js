import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a={email:"",message:""},t=document.querySelector(".feedback-form"),s=document.querySelector('input[name="email"]'),m=document.querySelector('textarea[name="message"]'),l="feedback-form-state";document.addEventListener("DOMContentLoaded",r);t.addEventListener("input",n);t.addEventListener("submit",o);function n(e){e.target.name==="email"?a.email=e.target.value:e.target.name==="message"&&(a.message=e.target.value),localStorage.setItem(l,JSON.stringify(a))}function o(e){e.preventDefault(),s.value===""||m.value===""?alert("Fill please all fields"):(console.log(a),t.reset(),a.email="",a.message="",localStorage.removeItem(l))}function r(){const e=JSON.parse(localStorage.getItem(l));e&&(a.email=e.email,a.message=e.message,s.value=e.email,m.value=e.message)}
//# sourceMappingURL=2-form.js.map
