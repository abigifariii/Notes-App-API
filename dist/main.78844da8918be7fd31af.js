(()=>{var n={56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var m=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var s=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},121:()=>{class n extends HTMLElement{connectedCallback(){this.render()}render(){const n=this.getAttribute("active")||"active";this.innerHTML=`\n      <div class="category-list">\n        <div class="category-item ${"active"===n?"active":""}" data-category="active">\n          <i class="fas fa-sticky-note"></i>\n          <span>Active Notes</span>\n        </div>\n        <div class="category-item ${"archived"===n?"active":""}" data-category="archived">\n          <i class="fas fa-archive"></i>\n          <span>Archived Notes</span>\n        </div>\n        <div class="category-item ${"all"===n?"active":""}" data-category="all">\n          <i class="fas fa-list"></i>\n          <span>All Notes</span>\n        </div>\n      </div>\n    `;const e=this.querySelectorAll(".category-item");e.forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.category,r=new CustomEvent("categoryChange",{detail:{category:t}});document.dispatchEvent(r),e.forEach(n=>n.classList.remove("active")),n.classList.add("active")})})}}customElements.define("note-category",n)},205:()=>{class n extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='\n      <header class="app-bar">\n        <div class="app-bar__inner">\n          <h1 class="app-bar__title">\n            <i class="fas fa-book-open"></i> Notes App\n          </h1>\n          <div class="app-bar__actions">\n            <button class="theme-toggle" aria-label="Toggle theme">\n              <i class="fas fa-moon"></i>\n            </button>\n          </div>\n        </div>\n      </header>\n    ';const n=this.querySelector(".theme-toggle");n.addEventListener("click",()=>{document.body.classList.toggle("dark-theme");const e=n.querySelector("i");document.body.classList.contains("dark-theme")?e.classList.replace("fa-moon","fa-sun"):e.classList.replace("fa-sun","fa-moon")})}}customElements.define("note-appbar",n)},249:(n,e,t)=>{"use strict";t.d(e,{A:()=>A});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,':root {\n  --primary-color: #4361ee;\n  --secondary-color: #3f37c9;\n  --accent-color: #4895ef;\n  --light-color: #f8f9fa;\n  --dark-color: #212529;\n  --success-color: #4cc9f0;\n  --warning-color: #f72585;\n  --border-radius: 8px;\n  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  --transition: all 0.3s ease;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  background-color: #f5f7fa;\n  color: var(--dark-color);\n  line-height: 1.6;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  gap: 2rem;\n  padding: 1rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.section-title {\n  margin: 1.5rem 0 1rem;\n  color: var(--secondary-color);\n  font-weight: 600;\n}\n\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.empty-state {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: #666;\n  font-style: italic;\n  padding: 2rem;\n}\n\n/* Loading Indicator */\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.loading-spinner {\n  background: white;\n  padding: 2rem;\n  border-radius: var(--border-radius);\n  text-align: center;\n  box-shadow: var(--box-shadow);\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid var(--primary-color);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* App Bar */\n.app-bar {\n  background: white;\n  box-shadow: var(--box-shadow);\n  padding: 1rem 0;\n  margin-bottom: 1rem;\n}\n\n.app-bar__inner {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.app-bar__title {\n  color: var(--primary-color);\n  font-size: 1.5rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.theme-toggle {\n  background: none;\n  border: 1px solid var(--primary-color);\n  color: var(--primary-color);\n  padding: 0.5rem;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.theme-toggle:hover {\n  background: var(--primary-color);\n  color: white;\n}\n\n@media (max-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n  }\n\n  .notes-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Form styles */\nform {\n  background: white;\n  padding: 1.5rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  margin-bottom: 2rem;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--secondary-color);\n}\n\n.form-group input,\n.form-group textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: var(--border-radius);\n  font-size: 1rem;\n  transition: var(--transition);\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: var(--accent-color);\n  box-shadow: 0 0 0 2px rgba(72, 149, 239, 0.2);\n}\n\n.form-group textarea {\n  min-height: 120px;\n  resize: vertical;\n}\n\n.char-counter {\n  font-size: 0.8rem;\n  color: #666;\n  text-align: right;\n  margin-top: 0.25rem;\n}\n\n.invalid {\n  color: var(--warning-color);\n}\n\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 500;\n  transition: var(--transition);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nbutton:hover {\n  background-color: var(--secondary-color);\n}\n\nbutton.secondary {\n  background-color: #6c757d;\n}\n\nbutton.secondary:hover {\n  background-color: #5a6268;\n}\n\nbutton.danger {\n  background-color: var(--warning-color);\n}\n\nbutton.danger:hover {\n  background-color: #d91a63;\n}\n\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n/* Note item styles */\n.note-item {\n  background: white;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 1.5rem;\n  transition: var(--transition);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.note-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);\n}\n\n.note-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  color: var(--secondary-color);\n}\n\n.note-body {\n  flex-grow: 1;\n  margin-bottom: 1rem;\n  color: #555;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n}\n\n.note-date {\n  font-size: 0.8rem;\n  color: #888;\n  margin-bottom: 1rem;\n}\n\n.note-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n}\n\n/* Sidebar styles */\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.category-list {\n  background: white;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 1rem;\n}\n\n.category-item {\n  padding: 0.75rem 1rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  transition: var(--transition);\n  margin-bottom: 0.5rem;\n}\n\n.category-item:hover {\n  background-color: #f0f2f5;\n}\n\n.category-item.active {\n  background-color: #e6f0ff;\n  color: var(--primary-color);\n  font-weight: 500;\n}\n\n.category-item i {\n  width: 20px;\n  text-align: center;\n}\n\n.search-box {\n  background: white;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 1rem;\n}\n\n.search-input {\n  position: relative;\n}\n\n.search-input i {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n}\n\n.search-box input {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border: 1px solid #ddd;\n  border-radius: var(--border-radius);\n  font-size: 1rem;\n  transition: var(--transition);\n}\n\n.search-box input:focus {\n  outline: none;\n  border-color: var(--accent-color);\n}\n\n/* Dark theme styles */\n.dark-theme {\n  background-color: #121212;\n  color: #e0e0e0;\n}\n\n.dark-theme .app-bar {\n  background-color: #1e1e1e;\n}\n\n.dark-theme .note-item,\n.dark-theme .category-list,\n.dark-theme .search-box,\n.dark-theme form {\n  background-color: #1e1e1e;\n  color: #e0e0e0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n}\n\n.dark-theme .form-group input,\n.dark-theme .form-group textarea,\n.dark-theme .search-box input {\n  background-color: #2d2d2d;\n  color: #e0e0e0;\n  border-color: #444;\n}\n\n.dark-theme .note-title {\n  color: #64b5f6;\n}\n\n.dark-theme .section-title {\n  color: #bb86fc;\n}\n\n.dark-theme .category-item:hover {\n  background-color: #333;\n}\n\n.dark-theme .category-item.active {\n  background-color: #3700b3;\n  color: white;\n}\n\n.dark-theme .char-counter {\n  color: #aaa;\n}\n\n.dark-theme .loading-spinner {\n  background-color: #1e1e1e;\n  color: #e0e0e0;\n}\n\n.dark-theme .app-bar__title {\n  color: #64b5f6;\n}\n\n.dark-theme .theme-toggle {\n  border-color: #64b5f6;\n  color: #64b5f6;\n}\n\n.dark-theme .theme-toggle:hover {\n  background: #64b5f6;\n  color: #121212;\n}\n',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:[':root {\n  --primary-color: #4361ee;\n  --secondary-color: #3f37c9;\n  --accent-color: #4895ef;\n  --light-color: #f8f9fa;\n  --dark-color: #212529;\n  --success-color: #4cc9f0;\n  --warning-color: #f72585;\n  --border-radius: 8px;\n  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  --transition: all 0.3s ease;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  background-color: #f5f7fa;\n  color: var(--dark-color);\n  line-height: 1.6;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  gap: 2rem;\n  padding: 1rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.section-title {\n  margin: 1.5rem 0 1rem;\n  color: var(--secondary-color);\n  font-weight: 600;\n}\n\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.empty-state {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: #666;\n  font-style: italic;\n  padding: 2rem;\n}\n\n/* Loading Indicator */\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.loading-spinner {\n  background: white;\n  padding: 2rem;\n  border-radius: var(--border-radius);\n  text-align: center;\n  box-shadow: var(--box-shadow);\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid var(--primary-color);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* App Bar */\n.app-bar {\n  background: white;\n  box-shadow: var(--box-shadow);\n  padding: 1rem 0;\n  margin-bottom: 1rem;\n}\n\n.app-bar__inner {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.app-bar__title {\n  color: var(--primary-color);\n  font-size: 1.5rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.theme-toggle {\n  background: none;\n  border: 1px solid var(--primary-color);\n  color: var(--primary-color);\n  padding: 0.5rem;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.theme-toggle:hover {\n  background: var(--primary-color);\n  color: white;\n}\n\n@media (max-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n  }\n\n  .notes-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Form styles */\nform {\n  background: white;\n  padding: 1.5rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  margin-bottom: 2rem;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--secondary-color);\n}\n\n.form-group input,\n.form-group textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: var(--border-radius);\n  font-size: 1rem;\n  transition: var(--transition);\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: var(--accent-color);\n  box-shadow: 0 0 0 2px rgba(72, 149, 239, 0.2);\n}\n\n.form-group textarea {\n  min-height: 120px;\n  resize: vertical;\n}\n\n.char-counter {\n  font-size: 0.8rem;\n  color: #666;\n  text-align: right;\n  margin-top: 0.25rem;\n}\n\n.invalid {\n  color: var(--warning-color);\n}\n\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 500;\n  transition: var(--transition);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nbutton:hover {\n  background-color: var(--secondary-color);\n}\n\nbutton.secondary {\n  background-color: #6c757d;\n}\n\nbutton.secondary:hover {\n  background-color: #5a6268;\n}\n\nbutton.danger {\n  background-color: var(--warning-color);\n}\n\nbutton.danger:hover {\n  background-color: #d91a63;\n}\n\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n/* Note item styles */\n.note-item {\n  background: white;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 1.5rem;\n  transition: var(--transition);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.note-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);\n}\n\n.note-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  color: var(--secondary-color);\n}\n\n.note-body {\n  flex-grow: 1;\n  margin-bottom: 1rem;\n  color: #555;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n}\n\n.note-date {\n  font-size: 0.8rem;\n  color: #888;\n  margin-bottom: 1rem;\n}\n\n.note-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n}\n\n/* Sidebar styles */\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.category-list {\n  background: white;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 1rem;\n}\n\n.category-item {\n  padding: 0.75rem 1rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  transition: var(--transition);\n  margin-bottom: 0.5rem;\n}\n\n.category-item:hover {\n  background-color: #f0f2f5;\n}\n\n.category-item.active {\n  background-color: #e6f0ff;\n  color: var(--primary-color);\n  font-weight: 500;\n}\n\n.category-item i {\n  width: 20px;\n  text-align: center;\n}\n\n.search-box {\n  background: white;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 1rem;\n}\n\n.search-input {\n  position: relative;\n}\n\n.search-input i {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n}\n\n.search-box input {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border: 1px solid #ddd;\n  border-radius: var(--border-radius);\n  font-size: 1rem;\n  transition: var(--transition);\n}\n\n.search-box input:focus {\n  outline: none;\n  border-color: var(--accent-color);\n}\n\n/* Dark theme styles */\n.dark-theme {\n  background-color: #121212;\n  color: #e0e0e0;\n}\n\n.dark-theme .app-bar {\n  background-color: #1e1e1e;\n}\n\n.dark-theme .note-item,\n.dark-theme .category-list,\n.dark-theme .search-box,\n.dark-theme form {\n  background-color: #1e1e1e;\n  color: #e0e0e0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n}\n\n.dark-theme .form-group input,\n.dark-theme .form-group textarea,\n.dark-theme .search-box input {\n  background-color: #2d2d2d;\n  color: #e0e0e0;\n  border-color: #444;\n}\n\n.dark-theme .note-title {\n  color: #64b5f6;\n}\n\n.dark-theme .section-title {\n  color: #bb86fc;\n}\n\n.dark-theme .category-item:hover {\n  background-color: #333;\n}\n\n.dark-theme .category-item.active {\n  background-color: #3700b3;\n  color: white;\n}\n\n.dark-theme .char-counter {\n  color: #aaa;\n}\n\n.dark-theme .loading-spinner {\n  background-color: #1e1e1e;\n  color: #e0e0e0;\n}\n\n.dark-theme .app-bar__title {\n  color: #64b5f6;\n}\n\n.dark-theme .theme-toggle {\n  border-color: #64b5f6;\n  color: #64b5f6;\n}\n\n.dark-theme .theme-toggle:hover {\n  background: #64b5f6;\n  color: #121212;\n}\n'],sourceRoot:""}]);const A=i},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t}).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},450:()=>{class n extends HTMLElement{connectedCallback(){this.render()}render(){const n=this.getAttribute("title")||"",e=this.getAttribute("body")||"",t=this.getAttribute("created-at")||(new Date).toISOString(),r=this.getAttribute("note-id")||"",o="true"===this.getAttribute("archived");this.innerHTML=`\n      <div class="note-item">\n        <h3 class="note-title">${n}</h3>\n        <p class="note-body">${e}</p>\n        <p class="note-date">${this.formatDate(t)}</p>\n        <div class="note-actions">\n          <button class="${o?"primary":"secondary"}" id="archive-btn">\n            <i class="fas ${o?"fa-undo":"fa-archive"}"></i>\n            ${o?"Unarchive":"Archive"}\n          </button>\n          <button class="danger" id="delete-btn">\n            <i class="fas fa-trash"></i> Delete\n          </button>\n        </div>\n      </div>\n    `;const a=this.querySelector("#archive-btn"),i=this.querySelector("#delete-btn");a.addEventListener("click",()=>{const n=new CustomEvent("archiveNote",{detail:{id:r}});document.dispatchEvent(n)}),i.addEventListener("click",()=>{if(confirm("Are you sure you want to delete this note?")){const n=new CustomEvent("deleteNote",{detail:{id:r}});document.dispatchEvent(n)}})}formatDate(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}}customElements.define("note-item",n)},484:()=>{class n extends HTMLElement{connectedCallback(){this.render(),this.hide()}render(){this.innerHTML='\n      <div class="loading-overlay">\n        <div class="loading-spinner">\n          <div class="spinner"></div>\n          <p>Loading...</p>\n        </div>\n      </div>\n    '}show(){this.style.display="flex"}hide(){this.style.display="none"}}customElements.define("loading-indicator",n)},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},647:()=>{class n extends HTMLElement{connectedCallback(){this.render(),this.setupValidation()}render(){this.innerHTML='\n      <form id="note-form">\n        <div class="form-group">\n          <label for="note-title">Title</label>\n          <input type="text" id="note-title" placeholder="Note title" maxlength="50" required>\n          <div class="char-counter"><span id="title-counter">0</span>/50</div>\n        </div>\n        \n        <div class="form-group">\n          <label for="note-body">Content</label>\n          <textarea id="note-body" placeholder="Write your note here..." maxlength="1000" required></textarea>\n          <div class="char-counter"><span id="body-counter">0</span>/1000</div>\n        </div>\n        \n        <div class="form-actions">\n          <button type="submit" class="primary">\n            <i class="fas fa-plus"></i> Add Note\n          </button>\n          <button type="reset" class="secondary">\n            <i class="fas fa-eraser"></i> Clear\n          </button>\n        </div>\n      </form>\n    '}setupValidation(){const n=this.querySelector("#note-form"),e=this.querySelector("#note-title"),t=this.querySelector("#note-body"),r=this.querySelector("#title-counter"),o=this.querySelector("#body-counter");e.addEventListener("input",()=>{r.textContent=e.value.length,e.value.length>45?r.classList.add("invalid"):r.classList.remove("invalid")}),t.addEventListener("input",()=>{o.textContent=t.value.length,t.value.length>950?o.classList.add("invalid"):o.classList.remove("invalid")}),n.addEventListener("submit",a=>{if(a.preventDefault(),""===e.value.trim()||""===t.value.trim())return void alert("Please fill in all fields");const i=new CustomEvent("addNote",{detail:{title:e.value.trim(),body:t.value.trim()}});document.dispatchEvent(i),n.reset(),r.textContent="0",o.textContent="0"})}}customElements.define("note-form",n)},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},849:()=>{class n extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='\n      <div class="search-box">\n        <div class="search-input">\n          <i class="fas fa-search"></i>\n          <input type="text" placeholder="Search notes..." id="search-input">\n        </div>\n      </div>\n    ',this.querySelector("#search-input").addEventListener("input",n=>{const e=new CustomEvent("search",{detail:{query:n.target.value}});document.dispatchEvent(e)})}}customElements.define("note-search",n)}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),A=t(56),s=t.n(A),c=t(540),d=t.n(c),l=t(113),m=t.n(l),u=t(249),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(u.A,h),u.A&&u.A.locals&&u.A.locals,t(484),t(205),t(849),t(121),t(647),t(450);const g=class{constructor(){this.baseURL="https://notes-api.dicoding.dev/v2"}async getAllNotes(){try{const n=await fetch(`${this.baseURL}/notes`),e=await n.json();if("success"===e.status)return e.data;throw new Error(e.message)}catch(n){throw console.error("Error fetching notes:",n),n}}async getArchivedNotes(){try{const n=await fetch(`${this.baseURL}/notes/archived`),e=await n.json();if("success"===e.status)return e.data;throw new Error(e.message)}catch(n){throw console.error("Error fetching archived notes:",n),n}}async createNote(n,e){try{const t=await fetch(`${this.baseURL}/notes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,body:e})}),r=await t.json();if("success"===r.status)return r.data;throw new Error(r.message)}catch(n){throw console.error("Error creating note:",n),n}}async deleteNote(n){try{const e=await fetch(`${this.baseURL}/notes/${n}`,{method:"DELETE"}),t=await e.json();if("success"===t.status)return t.message;throw new Error(t.message)}catch(n){throw console.error("Error deleting note:",n),n}}async archiveNote(n){try{const e=await fetch(`${this.baseURL}/notes/${n}/archive`,{method:"POST"}),t=await e.json();if("success"===t.status)return t.message;throw new Error(t.message)}catch(n){throw console.error("Error archiving note:",n),n}}async unarchiveNote(n){try{const e=await fetch(`${this.baseURL}/notes/${n}/unarchive`,{method:"POST"}),t=await e.json();if("success"===t.status)return t.message;throw new Error(t.message)}catch(n){throw console.error("Error unarchiving note:",n),n}}},p=class{constructor(){this.api=new g,this.notes=[],this.archivedNotes=[],this.currentCategory="active",this.searchQuery=""}async init(){this.setupEventListeners(),await this.loadNotes()}setupEventListeners(){document.addEventListener("addNote",async n=>{await this.addNote(n.detail.title,n.detail.body)}),document.addEventListener("categoryChange",n=>{this.currentCategory=n.detail.category,this.renderNotes()}),document.addEventListener("search",n=>{this.searchQuery=n.detail.query.toLowerCase(),this.renderNotes()}),document.addEventListener("deleteNote",async n=>{await this.deleteNote(n.detail.id)}),document.addEventListener("archiveNote",async n=>{await this.toggleArchiveNote(n.detail.id)})}showLoading(){document.querySelector("loading-indicator").show()}hideLoading(){document.querySelector("loading-indicator").hide()}async loadNotes(){try{this.showLoading();const[n,e]=await Promise.all([this.api.getAllNotes(),this.api.getArchivedNotes()]);this.notes=n,this.archivedNotes=e,this.renderNotes()}catch(n){console.error("Failed to load notes:",n),alert("Failed to load notes. Please try again.")}finally{this.hideLoading()}}async addNote(n,e){try{this.showLoading(),await this.api.createNote(n,e),await this.loadNotes()}catch(n){console.error("Failed to add note:",n),alert("Failed to add note. Please try again.")}finally{this.hideLoading()}}async deleteNote(n){try{this.showLoading(),await this.api.deleteNote(n),await this.loadNotes()}catch(n){console.error("Failed to delete note:",n),alert("Failed to delete note. Please try again.")}finally{this.hideLoading()}}async toggleArchiveNote(n){try{this.showLoading(),this.archivedNotes.some(e=>e.id===n)?await this.api.unarchiveNote(n):await this.api.archiveNote(n),await this.loadNotes()}catch(n){console.error("Failed to toggle archive status:",n),alert("Failed to update note. Please try again.")}finally{this.hideLoading()}}filterNotes(n){return this.searchQuery?n.filter(n=>n.title.toLowerCase().includes(this.searchQuery)||n.body.toLowerCase().includes(this.searchQuery)):n}renderNotes(){const n=document.getElementById("active-notes"),e=document.getElementById("archived-notes");n.innerHTML="",e.innerHTML="";const t=this.filterNotes(this.notes),r=this.filterNotes(this.archivedNotes),o=document.querySelector(".section-title"),a=o.nextElementSibling.nextElementSibling;"active"===this.currentCategory?(o.style.display="block",n.style.display="grid",a.style.display="none",e.style.display="none"):"archived"===this.currentCategory?(o.style.display="none",n.style.display="none",a.style.display="block",e.style.display="grid"):(o.style.display="block",n.style.display="grid",a.style.display="block",e.style.display="grid"),"active"!==this.currentCategory&&"all"!==this.currentCategory||t.forEach(e=>{const t=document.createElement("note-item");t.setAttribute("title",e.title),t.setAttribute("body",e.body),t.setAttribute("created-at",e.createdAt),t.setAttribute("note-id",e.id),t.setAttribute("archived","false"),n.appendChild(t)}),"archived"!==this.currentCategory&&"all"!==this.currentCategory||r.forEach(n=>{const t=document.createElement("note-item");t.setAttribute("title",n.title),t.setAttribute("body",n.body),t.setAttribute("created-at",n.createdAt),t.setAttribute("note-id",n.id),t.setAttribute("archived","true"),e.appendChild(t)}),0!==t.length||"active"!==this.currentCategory&&"all"!==this.currentCategory||(n.innerHTML='<p class="empty-state">No active notes found.</p>'),0!==r.length||"archived"!==this.currentCategory&&"all"!==this.currentCategory||(e.innerHTML='<p class="empty-state">No archived notes found.</p>')}};document.addEventListener("DOMContentLoaded",()=>{(new p).init()})})()})();
//# sourceMappingURL=main.78844da8918be7fd31af.js.map