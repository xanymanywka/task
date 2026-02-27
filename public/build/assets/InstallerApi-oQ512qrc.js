import{c as a}from"./createLucideIcon-Pim5AETY.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=a("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=a("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function s(){var e;const t=(e=document.querySelector('meta[name="csrf-token"]'))==null?void 0:e.getAttribute("content");return t||(console.error("CSRF token not found. This may cause installation issues."),"installer-csrf-fallback")}async function u(t,e={}){const r={method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s(),Accept:"application/json","X-Requested-With":"XMLHttpRequest"},credentials:"same-origin"},o={...r,...e,headers:{...r.headers,...e.headers}};return fetch(t,o)}async function d(t){if(!t.ok){let e="Request failed";try{e=(await t.json()).message||e}catch{e=t.statusText||e}throw new Error(e)}try{return await t.json()}catch{throw new Error("Invalid response format")}}export{i as C,l as X,d as h,u as i};
