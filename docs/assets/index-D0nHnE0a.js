(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.body.innerHTML=`
    <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center text-gray-800 dark:text-gray-200">
      <h1 class="text-4xl font-bold mb-4">🚧 Site Under Construction 🚧</h1>
      <p class="text-lg">We're working hard to launch something awesome. Check back soon!</p>
    </div>
  `;
