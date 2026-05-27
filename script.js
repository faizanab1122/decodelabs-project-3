  /* ==========================================================
       NAV BUTTONS — now work because elements exist in DOM
    ========================================================== */
    document.getElementById('js-loginBtn').onclick = function () {
      window.location.href = 'login.html';
    };
 
    document.getElementById('js-getStartedBtn').onclick = function () {
      window.location.href = 'register.html';
    };
 
    document.getElementById('js-heroDemoBtn').onclick = function () {
      document.getElementById('js-demo-form').scrollIntoView({ behavior: 'smooth' });
    };
 
    document.getElementById('js-heroFreeBtn').onclick = function () {
      window.location.href = 'register.html';
    };
 
    /* ==========================================================
       HAMBURGER — mobile nav toggle
       IPO: click → toggle .is-open → nav links show/hide
    ========================================================== */
    const hamburger = document.getElementById('js-hamburger');
    const navLinks  = document.getElementById('js-nav-links');
 
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
 
    /* ==========================================================
       SEARCH BAR TOGGLE
       IPO: click search icon → show/hide search bar
            type in input → show live result count hint
    ========================================================== */
    const searchBtn   = document.getElementById('js-search-btn');
    const searchBar   = document.getElementById('js-search-bar');
    const searchClose = document.getElementById('js-search-close');
    const searchInput = document.getElementById('js-search-input');
    const searchResult= document.getElementById('js-search-result');
 
    searchBtn.addEventListener('click', function () {
      const isVisible = searchBar.style.display !== 'none';
      searchBar.style.display = isVisible ? 'none' : 'block';
      if (!isVisible) searchInput.focus();
    });
 
    searchClose.addEventListener('click', function () {
      searchBar.style.display = 'none';
      searchInput.value = '';
      searchResult.textContent = '';
    });
 
    searchInput.addEventListener('input', function () {
      const q = searchInput.value.trim();
      searchResult.textContent = q ? 'Showing results for: "' + q + '"' : '';
    });
 
    /* ==========================================================
       DARK MODE TOGGLE
       IPO: click pill → flip isDarkMode → add/remove .is-dark
            on body → CSS variables switch automatically
    ========================================================== */
    let isDarkMode = false;
    const darkToggle = document.getElementById('js-dark-toggle');
    const themeLabel = document.getElementById('js-theme-label');
 
    darkToggle.addEventListener('click', function () {
      isDarkMode = !isDarkMode;
      document.body.classList.toggle('is-dark');
      themeLabel.textContent = isDarkMode ? 'Dark' : 'Light';
    });
 
    /* ==========================================================
       LANGUAGE SELECTOR
       IPO: change dropdown → update a visible language badge
    ========================================================== */
    const langSelect = document.getElementById('js-lang-select');
 
    langSelect.addEventListener('change', function () {
      const names = { en: 'English', ur: 'اردو', hi: 'हिन्दी', ar: 'العربية' };
      console.log('Language switched to:', names[langSelect.value]);
      // In a real site you'd swap text content or reload with locale param
    });
 
    /* ==========================================================
       FEATURE 1 — HUB SEARCH FILTER
       IPO: type → filter hubsData array → re-render grid
    ========================================================== */
    const hubsData = [
      { icon: '📣', name: 'Marketing Hub',   desc: 'AI-powered lead generation, marketing automation, and analytics.' },
      { icon: '💼', name: 'Sales Hub',        desc: 'Prospecting workspace, deal management, and sales automation.' },
      { icon: '🎧', name: 'Service Hub',      desc: 'Omni-channel help desk, AI chatbot, and customer success workspace.' },
      { icon: '✍️', name: 'Content Hub',      desc: 'AI content creation, content remix, and brand voice tools.' },
      { icon: '⚙️', name: 'Operations Hub',   desc: 'Data sync, programmable automation, and AI data quality tools.' },
      { icon: '🛒', name: 'Commerce Hub',     desc: 'Invoices, subscriptions, quotes, and payment links for B2B.' },
    ];
 
    const hubsGrid  = document.getElementById('js-hubs-grid');
    const hubSearch = document.getElementById('js-hub-search');
    const hubClear  = document.getElementById('js-hub-clear');
 
    function renderHubs(query) {
      hubsGrid.innerHTML = '';
 
      const filtered = hubsData.filter(function (h) {
        const q = query.toLowerCase();
        return h.name.toLowerCase().includes(q) || h.desc.toLowerCase().includes(q);
      });
 
      if (filtered.length === 0) {
        const msg = document.createElement('div');
        msg.classList.add('no-result');
        msg.textContent = 'No hubs match "' + query + '". Try "Sales" or "AI".';
        hubsGrid.appendChild(msg);
        return;
      }
 
      filtered.forEach(function (h) {
        const card = document.createElement('div');
        card.classList.add('hub-card');
        card.innerHTML =
          '<div class="hub-icon">' + h.icon + '</div>' +
          '<div class="hub-name">' + h.name + '</div>' +
          '<div class="hub-desc">' + h.desc + '</div>';
        hubsGrid.appendChild(card);
      });
    }
 
    renderHubs('');  // show all on load
 
    hubSearch.addEventListener('input', function () { renderHubs(hubSearch.value); });
 
    hubClear.addEventListener('click', function () {
      hubSearch.value = '';
      renderHubs('');
      hubSearch.focus();
    });
 
    /* ==========================================================
       FEATURE 2 — DEMO FORM WITH SUCCESS MESSAGE
       IPO: click submit → validate → hide form → show success
    ========================================================== */
    const demoForm    = document.getElementById('js-demo-form');
    const formSuccess = document.getElementById('js-form-success');
    const formError   = document.getElementById('js-form-error');
    const submitBtn   = document.getElementById('js-demo-submit');
    const resetBtn    = document.getElementById('js-form-reset');
 
    submitBtn.addEventListener('click', function () {
      const fname   = document.getElementById('js-fname').value.trim();
      const lname   = document.getElementById('js-lname').value.trim();
      const email   = document.getElementById('js-email').value.trim();
      const company = document.getElementById('js-company').value.trim();
      const size    = document.getElementById('js-size').value;
      const hub     = document.getElementById('js-hub-pick').value;
 
      if (!fname || !lname || !email || !company || !size || !hub) {
        formError.style.display = 'block';
        return;
      }
 
      formError.style.display = 'none';
      document.getElementById('js-success-name').textContent  = 'Thanks, ' + fname + '!';
      document.getElementById('js-success-email').textContent = email;
 
      demoForm.style.display = 'none';
      formSuccess.classList.add('is-visible');
    });
 
    resetBtn.addEventListener('click', function () {
      formSuccess.classList.remove('is-visible');
      demoForm.style.display = 'block';
      demoForm.querySelectorAll('input, select').forEach(function (el) { el.value = ''; });
    });
 
    /* ==========================================================
       FEATURE 3 — PRICING TOGGLE (Monthly ↔ Annual)
       IPO: click toggle → flip isAnnual state → update prices
    ========================================================== */
    let isAnnual = false;
 
    const prices = {
      starter: { monthly: '$20',    annual: '$15' },
      pro:     { monthly: '$890',   annual: '$668' },
      ent:     { monthly: '$3,600', annual: '$2,700' },
    };
 
    const priceToggle = document.getElementById('js-price-toggle');
    const priceThumb  = document.getElementById('js-price-thumb');
    const lblMonthly  = document.getElementById('js-lbl-monthly');
    const lblAnnual   = document.getElementById('js-lbl-annual');
 
    function updatePrices() {
      const k = isAnnual ? 'annual' : 'monthly';
      document.getElementById('js-p-starter').innerHTML = prices.starter[k] + '<span>/mo</span>';
      document.getElementById('js-p-pro').innerHTML     = prices.pro[k]     + '<span>/mo</span>';
      document.getElementById('js-p-ent').innerHTML     = prices.ent[k]     + '<span>/mo</span>';
      lblMonthly.classList.toggle('is-active', !isAnnual);
      lblAnnual.classList.toggle('is-active',   isAnnual);
      priceThumb.style.transform = isAnnual ? 'translateX(20px)' : 'translateX(0)';
    }
 
    priceToggle.addEventListener('click', function () {
      isAnnual = !isAnnual;
      updatePrices();
    });
 
    /* ==========================================================
       FEATURE 4 — BLOG POST SAVE / BOOKMARK
       IPO: click Save → toggle .is-saved → update live counter
    ========================================================== */
    const blogData = [
      { emoji: '📱', title: 'The Psychology of Short-Form Content: Why We Love Bite-Sized…', author: 'Erica Santiago',  date: '7/23/24' },
      { emoji: '🎓', title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',    author: 'Amy Porterfield',  date: '7/23/24' },
      { emoji: '🌍', title: 'How To Do Representation in Marketing the Right Way',           author: 'Sonia Thompson',   date: '7/23/24' },
      { emoji: '🤖', title: 'How to Use AI For a More Effective Social Media Strategy',      author: 'Ross Simmonds',    date: '8/28/24' },
    ];
 
    const blogList    = document.getElementById('js-blog-list');
    const savedCount  = document.getElementById('js-saved-count');
    let   totalSaved  = 0;
 
    blogData.forEach(function (post) {
      let saved = false;
 
      const row = document.createElement('div');
      row.classList.add('blog-row');
 
      row.innerHTML =
        '<div class="blog-emoji">' + post.emoji + '</div>' +
        '<div class="blog-info">' +
          '<div class="blog-title">' + post.title + '</div>' +
          '<div class="blog-meta">' + post.author + ' · ' + post.date + '</div>' +
        '</div>';
 
      const btn = document.createElement('button');
      btn.classList.add('save-btn');
      btn.textContent = 'Save';
      row.appendChild(btn);
      blogList.appendChild(row);
 
      btn.addEventListener('click', function () {
        saved = !saved;
        totalSaved += saved ? 1 : -1;
 
        btn.textContent = saved ? '✓ Saved' : 'Save';
        btn.classList.toggle('is-saved', saved);
        row.classList.toggle('is-saved', saved);
 
        savedCount.innerHTML =
          'You have saved <span>' + totalSaved + '</span> post(s).';
      });
    });
 
    /* ==========================================================
       FEATURE 5 — FAQ ACCORDION
       IPO: click header → close all panels → open clicked one
    ========================================================== */
    document.querySelectorAll('.js-acc-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item   = btn.parentElement;
        const isOpen = item.classList.contains('is-open');
 
        // close all
        document.querySelectorAll('.acc-item').forEach(function (el) {
          el.classList.remove('is-open');
        });
 
        // open clicked if it was closed
        if (!isOpen) item.classList.add('is-open');
      });
    });