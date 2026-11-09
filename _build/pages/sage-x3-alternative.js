/* Comparison page: Sage X3, and Sage X3 with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Sage X3,
 * never its replacement. Table = "Sage X3 + VoiceOrder Solutions" vs "Sage X3 on its own"; every
 * Sage X3 strength is a tick in both columns. No built-in link between the two (FAQ 5); whether an X3 setup
 * takes our formats in directly is a demo question, never a claim (named-integration ban).
 * Angle, distinct from NECS Entree ("typed vs spoken, inside vs beside") and NetSuite ("where the
 * order ends up vs where it starts"): Sage X3 is SET UP FOR EACH BUSINESS BY A SAGE PARTNER, and that
 * project is scoped around the product (lots, recalls, allergens, quality, credit checks, the
 * warehouse). X3's own order tools point inward, at reps with mobile access and "customer call
 * centre support"; a customer portal comes from Sage's marketplace or a partner build. VoiceOrder
 * Solutions adds the kitchen's side without reopening that setup: nothing is built inside X3.
 * ⚠ X3's food page speaks to food MANUFACTURERS (recipes, formulas); never say X3 is "not for food"
 *   or "not for distributors": it has a distribution page and food customers.
 * ⚠ Partner portals for X3 exist and claim days to weeks: never "a portal takes months", never
 *   "X3 customers cannot order online". The page says only that Sage lists none as an X3 feature.
 * ⚠ A partner already sells REP-side voice for X3 (FAQ 4 concedes it, unnamed). Never "the only voice
 *   option for Sage X3".
 * ⚠ Sage's "automate up to 75% of orders", "50%" and "40%" are unaudited: never repeated. X3's
 *   "as little as 50 working days" go-live stays off the page.
 * ⚠ Only Sage X3 facts: Sage 100, 300, Intacct and 50 are different products.
 * No price is published for X3 (partner quote), so pricing is parity. Every claim is sourced and dated
 * in _build/research/competitors/sage-x3.md.
 * Review 2026-11-09 (wave-1 fix list, shared S1-S10 + page items): H1 now on the partner build
 * ("Add The Kitchen's Side"); FAQ 5 spells out what each delivery format means for the desk (EDI/API
 * can go straight in IF the X3 setup takes it, the demo shows whether; email = a checked file your
 * team enters); S3 records wording (X3 = system of record; we hold guides, prices, app orders);
 * problem card 3 is now Copilot-for-staff (the replacement proposition lives only in the cost FAQ);
 * the Copilot FAQ was folded into that card and replaced by "Does our Sage partner need to be
 * involved?" (S6 scoping). Login/install claims are scoped to setup.
 */
module.exports = {
  title: "Not a Sage X3 Alternative: Keep Sage X3, Add Voice Ordering",
  description: "Keep the Sage X3 setup your partner built. Kitchens speak each order into an app and check every line. Not a Sage X3 alternative: it adds the kitchen's side.",
  related: ["netsuite-alternative","necs-entree-alternative","orderease-alternative"],
  relatedHeading: "More ERPs that stay put when kitchens order by voice",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Sage X3 Alternative: Add The Kitchen's Side</h1>
      <p class="lead mt-16">
        Add spoken, checked kitchen orders beside the X3 setup your Sage partner built around lots, quality and the warehouse. With VoiceOrder Solutions, kitchens say their order into our app and look over each line before it reaches you. To start, nothing your partner built has to change.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Nothing built in X3 to start</span>
        <span class="hero-trust-dot"></span>
        <span>Every line checked by the kitchen</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (the "Push to Speak" mobile UI) -->
      <div class="img-placeholder tall">
        📸 Screenshot:<br>VoiceOrder Solutions "Push to Speak"<br>screen with the order review list
      </div>
    </div>

  </div>
</section>


<!--@LOGOBAR-->


<!-- ============================================================
     SECTION 4: STATS STRIP
     ============================================================ -->
<section class="stats-strip" aria-label="Key results">
  <div class="stats-grid">
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">Saved on each order your desk no longer takes by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Kitchens can send orders, office open or not</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Gets most distributors up and running</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Sage X3 is a full ERP and takes six of nine rows in both columns. Only the three rows about
     how a kitchen gets its order to you differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Add, Don't Replace</span>
      <h2>Sage X3 plus VoiceOrder Solutions.<br>The partner build stays as it is.</h2>
      <p class="lead mt-16">
        VoiceOrder Solutions lets a kitchen speak its order and correct it before it goes. The jobs Sage X3 already does for you carry on, so both sides of those rows are checked. Only the rows about how kitchens place orders with you differ. This is not a Sage X3 alternative in the usual sense, where the ERP itself changes: each product stands alone, with no built-in link between them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Sage X3 + VoiceOrder Solutions</th>
            <th style="width:30%;">Sage X3 on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lot, batch and recall controls</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens talk through the order and approve each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Entered by your staff or through an add-on</td>
          </tr>
          <tr>
            <td>Allergen reporting and quality checks</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A kitchen orders after hours, numbered and timed</td>
            <td><span class="check-yes">✓</span></td>
            <td>Waits as a voicemail or email</td>
          </tr>
          <tr>
            <td>Credit checks as an order is entered</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Reps see customers, stock and quotes on mobile</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchen ordering set up from a spreadsheet</td>
            <td><span class="check-yes">✓</span></td>
            <td>Through a Sage marketplace or partner-built portal</td>
          </tr>
          <tr>
            <td>Purchasing, replenishment and site transfers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Warehouse, packing and shipping</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style="border-bottom:none;"></td>
            <td style="border-bottom:none;padding:20px 24px;">
              <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary" style="padding:11px 20px;font-size:14px;width:100%;justify-content:center;">Book a Demo →</a>
            </td>
            <td style="border-bottom:none;"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 6: WHY TEAMS LOOK ELSEWHERE
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Why Teams Compare</span>
      <h2>Why search for a Sage X3 competitor at all?</h2>
      <p class="lead mt-16">
        Most teams who look up a Sage X3 alternative chose X3 for its food depth and still want it. What they often find is that the setup project stopped short of how a kitchen gets an order to you. Three situations come up.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>The project covered lots and the warehouse</h4>
        <p class="text-muted mt-12">
          X3 was shaped around recalls, quality checks and stock. If nobody built anything for the kitchens, orders still come in as calls, texts and voicemails for your desk to enter.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>Ordering for kitchens is a marketplace add-on</h4>
        <p class="text-muted mt-12">
          Sage X3's own sales tools serve your reps and your call-center staff. For customers ordering themselves, Sage points to its marketplace or a partner build: a portal that suits kitchens happy to log in and search.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🤖</div>
        <h4>Copilot answers your team, not your kitchens</h4>
        <p class="text-muted mt-12">
          Sage's February 2026 release added a sales agent to Copilot that warns your team about overdue orders and slipping demand. It works inside X3 for your staff, and no Sage page we read describes it taking an order from a kitchen.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 7: FEATURE DEEP-DIVE
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">
    <div class="text-center" style="max-width: 620px; margin: 0 auto 72px;">
      <span class="eyebrow">What You Get</span>
      <h2>An app your kitchens order from, not a Sage X3 alternative</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Said by the chef, corrected before it is sent</h3>
          <p class="mt-12 text-muted">
            A chef says what the kitchen needs while looking at the shelf. The app turns it into lines from that account's guide, they fix anything that is off, and they send it. No portal to log in to, no search box and no call to your desk.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Wrong item or amount? The kitchen fixes it before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Open for orders 24/7, long after your office closes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the iOS or Android phone the kitchen owns</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Interrupted halfway? The order waits where they stopped</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">See how orders come in →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Push to Speak,<br>then the line-by-line<br>review screen
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Order Guides</span>
          <h3>A guide for every account, built from your export</h3>
          <p class="mt-12 text-muted">
            Send us a spreadsheet of each account's usual items and agreed prices. We build one guide per account under your item codes. Your item master stays in X3, and you keep each guide's prices current in our admin platform.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each kitchen sees only its own list</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You set the prices and choose what each guide holds</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Update a guide and the very next order reflects it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>To begin, nobody builds an X3 screen, workflow or add-on</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">How guides stay current →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Admin platform<br>order guide editor<br>for one account
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Delivery Formats</span>
          <h3>Delivered as a file, or over EDI or the API</h3>
          <p class="mt-12 text-muted">
            A finished order can reach you by email as a PDF, a spreadsheet or a document, or travel by EDI, through the API or into QuickBooks. An emailed order needs nothing set up in X3; which other format suits your setup is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to a rep, a shared inbox or the order desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Credit checks, allocation and shipping still run in X3</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your phone line keeps working for accounts that prefer it</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">See a finished order →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>One order delivered<br>as a PDF and<br>over the API
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4 -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Inventory Visibility</span>
          <h3>What is in stock, beside what is being ordered</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog updates whenever stock changes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises on a busy delivery day</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lots, batches and recalls stay with Sage X3</span>
            </li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">Stock visibility in detail →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Stock levels beside<br>incoming customer<br>orders
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ============================================================
     SECTION 8: HOW IT WORKS
     ============================================================ -->
<section class="section-pad bg-light" id="how-it-works" aria-label="How it works">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Getting Started</span>
      <h2>Getting kitchens ordering, with no work inside X3</h2>
      <p class="lead mt-16">
        You export a list from X3, we do the setup, and kitchens start ordering from their phones.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Pull a price list out of X3</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet of item codes and the price each account pays is usually all we need. We never need a login to X3, and nothing is installed.

        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We load each account's guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each kitchen downloads the app and finds its own guide waiting. Most kitchens order for the first time that same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Each order lands checked and numbered</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The kitchen has checked every line, and it comes with an order number and a timestamp, in the format you picked.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VoiceOrder Solutions admin platform showing customer accounts and order guide upload
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 9: TESTIMONIALS
     ============================================================ -->
<section class="section-pad" id="testimonials" aria-label="Customer testimonials">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Real Teams. Real Results.</span>
      <h2>What your office notices first</h2>
    </div>

    <div class="testimonials-grid">

      <!-- Featured testimonial -->
      <div class="testimonial-card featured">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">
          "I used to spend hours every week ordering food. Now it's simple,
          super easy, and I have free time to spend on other aspects of my
          restaurant."
        </p>
        <div class="testimonial-author">
          <!-- DEVS: Replace with Tony Luna's photo -->
          <div class="author-avatar">Photo</div>
          <div>
            <div class="author-name" style="color:#fff;">Tony Luna</div>
            <div class="author-role">Owner-Chef, Prairie Moon</div>
          </div>
        </div>
      </div>

      <!-- Supporting testimonials -->
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "X3 runs our traceability and the warehouse. Now our restaurants send orders from their phones, and we never reopened the project."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">Photo</div>
            <div>
              <div class="author-name">[Customer Name]</div>
              <div class="author-role">[Company Name] · [City]</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "The chefs we supply go through the order at the shelf and fix it on their phone. When we open, it is waiting with a number on it."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">Photo</div>
            <div>
              <div class="author-name">[Customer Name]</div>
              <div class="author-role">[Company Name] · [City]</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


<!--@INTEGRATIONS-->


<!-- ============================================================
     SECTION 11: WHEN THE TWO WORK TOGETHER
     ============================================================ -->
<section class="section-pad bg-light" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 620px; margin: 0 auto;">
      <span class="eyebrow">Who Does What</span>
      <h2>How Sage X3 and VoiceOrder Solutions share the order</h2>
      <p class="lead mt-16">
        X3 handles every step once an order is in. VoiceOrder Solutions covers the step before, when the kitchen puts the order together, so it is an addition, not an alternative to Sage X3.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🔒</div>
        <h4>Traceability and credit stay in X3</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Lots, recalls, allergen records, credit limits and invoices are kept in X3, your system of record. We hold the order guide for each account and its prices, which your team edits in our admin tool. We also keep the orders kitchens send through the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📞</div>
        <h4>Phone and portal accounts carry on</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Restaurants that phone your desk, or order through a portal a partner built for your X3, carry on as before. Our app is for kitchens that would rather speak than type. A call your desk still takes is entered the way it is today, with no order number from us.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛠️</div>
        <h4>Your partner's plans go ahead as scheduled</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Sage X3 upgrades and anything your partner is building go ahead on their own schedule. We install nothing in X3, and an order emailed to you needs no change there at all.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 12: MID-PAGE CTA
     ============================================================ -->
<section aria-label="Mid-page call to action" style="background:var(--color-light-bg);border-top:1px solid #e4e7ed;border-bottom:1px solid #e4e7ed;padding:48px 24px;">
  <div style="max-width:var(--max-width);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;">
    <div style="max-width:580px;">
      <h3 style="margin-bottom:10px;">Twenty minutes: one spoken kitchen order and how it could reach X3</h3>
      <p class="text-muted" style="font-size:16px;">
        Watch an order said into the app, one line changed and sent, then ask how your partner's X3 setup could take it in.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 13: FAQ
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Questions Sage X3 users bring to a demo</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VoiceOrder Solutions a Sage X3 alternative?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. X3 keeps your customer accounts, lots, billing and stock, exactly as your partner configured it. VoiceOrder Solutions adds the kitchen's end: chefs say their orders into an app and fix any wrong line before it is sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is it better than Sage X3?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only at one job: giving kitchens their own way to get an order to you, a job X3's own tools leave to your reps and phone staff. Once the order is in, X3 is the system you keep.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can customers order through Sage X3 without calling us?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Sage's own X3 pages list no customer portal among its features. They point to the Sage marketplace instead, where partners offer portals and online stores. Those let kitchen staff search and reorder by typing. Ours suits chefs who find talking quicker than typing, with each line checked before it goes.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does anyone sell voice tools for X3?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. At least one company sells voice for X3, built for your own team to create orders and look things up by talking. Ours sits on the customer's side: the kitchen talks the order through in our app and corrects any line before it goes to you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does Sage X3 link to VoiceOrder Solutions?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is no ready-made link between the two, and Sage's support and ours each cover only their own software. If your X3 setup accepts EDI or API orders, they arrive without anyone typing them again; a demo will show whether yours does. By email, each order comes as a PDF, Excel or Word file whose lines were checked in the kitchen, and your staff type it in from that file instead of from a call or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does our Sage partner need to be involved?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not to get started. Setting up needs no X3 login and installs nothing: we work from a spreadsheet you export. If you later want orders to arrive by EDI or through the API, the demo covers what that would need on your side, which may mean a word with your partner.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly can we start, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors go live within 24 to 48 hours, because no work happens inside X3. Neither side publishes prices: X3 comes quoted through a Sage partner, and we quote per distributor. A Sage X3 replacement is a different scale of decision: it moves traceability, finance and the warehouse at once, often with a new implementation partner. That is the kind of Sage X3 alternative we do not sell.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Sage X3 details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From sage.com, reviewed on 9 November 2026: the X3 product, distribution, food and supply chain pages, Sage's Copilot announcement from February 2026, and a search for voice tools sold for X3. Sage publishes no X3 prices, so none appear here. Anything out of date since then is our mistake to fix.
        </div>
      </div>

    </div>
  </div>
</section>


<!--@RELATED-->


<!-- ============================================================
     SECTION 15: FINAL CONVERSION CTA
     ============================================================ -->
<section class="final-cta" id="demo" aria-label="Sign up call to action">
  <h2>Keep your X3 as built, and let each kitchen say its own order</h2>
  <p>A 20-minute demo: one order spoken, checked and sent, and a straight answer on how it would reach you.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No IT project to run</span>
    <span>✓ Nothing to rip out</span>
    <span>✓ Sends orders in your format</span>
    <span>✓ Ask us for a quote</span>
  </div>
</section>


<!-- ============================================================
     SECTION 16: FOOTER
     ============================================================ -->
<footer class="footer" role="contentinfo">
  <div class="footer-grid">

    <div>
      <div class="footer-brand-name">VoiceOrder<span> Solutions</span></div>
      <p class="footer-tagline">
        Your customers order. Your team delivers.<br>
        We handle everything in between.
      </p>
    </div>

    <div class="footer-col">
      <h5>Features</h5>
      <ul role="list">
        <li><a href="#features">Voice Ordering</a></li>
        <li><a href="#features">Order Guides</a></li>
        <li><a href="#features">Delivery Formats</a></li>
        <li><a href="#features">Inventory Visibility</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">Sage X3 + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/distribution-workflow-software">Distribution Workflow</a></li>
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <span>© 2026 VoiceOrder Solutions. All rights reserved.</span>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <a href="https://www.voiceordersolutions.com/" style="color:rgba(255,255,255,0.4);text-decoration:none;">Privacy Policy</a>
      <a href="https://www.voiceordersolutions.com/" style="color:rgba(255,255,255,0.4);text-decoration:none;">Terms of Service</a>
    </div>
  </div>
</footer>


<!--@SCRIPT-->
`,
};
