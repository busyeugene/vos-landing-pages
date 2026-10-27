/* Comparison page: WISK, and WISK with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT or BAR. VoiceOrder
 * Solutions comes through the venue's distributor, and only reaches distributors that offer it.
 * Same frame as the MarginEdge pilot: keep WISK, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, sync or "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: WISK works out what you need from the COUNT (bar first: bottles, scale, pour cost); the FOOD
 * order to a distributor on VoiceOrder Solutions is spoken from that distributor's own guide. Beverage
 * and liquor-board orders, and every supplier not on VoiceOrder Solutions, stay in WISK.
 * ⚠ TRAPS (all in _build/research/competitors/wisk.md):
 *   1. WISK HAS ordering: pars, order guide, prefill by par or sales, sent by EMAIL AND TEXT to ANY
 *      supplier, with open tracking. "Any supplier" is THEIR win: conceded in row 7 and FAQ 4.
 *      Suggested ordering is tier-gated: not stated here at all.
 *   2. WISK uses AI (invoices) and the camera (barcodes, invoice photos). Never "they type, we
 *      speak", "no AI". Their invoice copy says "hands-free": never echo it.
 *   3. Supplier integrations (Sysco, GFS, US Foods, liquor boards) are for INVOICES. Never "no link
 *      to your distributor"; the honest contrast is what the rep receives (an email or text).
 *   4. Pricing is PUBLISHED per outlet. Figures stay OFF the page; FAQ 7 concedes it.
 *   5. Their invoice processing is "24-48 business hours": no 24-48 figure anywhere on this page.
 * Their numbers contradict each other (savings, hours, client counts); none are repeated.
 */
module.exports = {
  title: "Not a WISK Alternative: Keep WISK, Add Voice Ordering",
  description: 'Keep counting in WISK and speak your food order to a distributor on VoiceOrder Solutions, checking each line. Not a WISK alternative: one more tool beside it.',
  related: ["craftable-alternative","marginedge-alternative","apicbase-alternative"],
  relatedHeading: "More back offices that stay in place",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A WISK Alternative: Speak The Food Order</h1>
      <p class="lead mt-16">
        Say what you need into the VoiceOrder Solutions app, review the lines, and send it all to your distributor, stamped with its own number and the time. That distributor loads your products and account prices. WISK goes on counting stock, tracking pours and handling every supplier our app does not reach.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VoiceOrder Solutions →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Comes from your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Keep WISK as it is</span>
        <span class="hero-trust-dot"></span>
        <span>iPhone and Android</span>
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
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most venues get their first order in</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved per order against the same call to your rep</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">open for orders, after the bar closes too</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the venue with both tools, column 3 with WISK alone. The
     count, pour cost, invoices, ordering to any supplier, recipe costing and the phone app are
     ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">WISK Today, One Step Added</span>
      <h2>WISK as you run it today.<br>Plus your voice, for one distributor's order.</h2>
      <p class="lead mt-16">
        Just one thing changes here: how you get an order to one distributor. One column is your venue on WISK alone; the other adds our app for one distributor that supplies it. WISK already counts stock, costs recipes and sends orders out to your suppliers, so a WISK alternative is seldom what you need. The two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">WISK + VoiceOrder Solutions</th>
            <th style="width:30%;">WISK on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Counts by barcode scan and Bluetooth scale</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Spoken order, reviewed before sending</td>
            <td><span class="check-yes">✓</span></td>
            <td>Prefilled from your pars, then sent</td>
          </tr>
          <tr>
            <td>Pour cost, usage and variance</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Guide built by the distributor, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>Your own item list in WISK</td>
          </tr>
          <tr>
            <td>Invoices read by AI, synced to QuickBooks</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Numbered and dated when the distributor gets it</td>
            <td><span class="check-yes">✓</span></td>
            <td>An email or text for the rep</td>
          </tr>
          <tr>
            <td>Send orders to any supplier you buy from</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Recipe and cocktail costing</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An app on your phone for ordering</td>
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
     SECTION 6: WHY OPERATORS LOOK ELSEWHERE
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container">
    <div class="text-center" style="max-width: 680px; margin: 0 auto;">
      <span class="eyebrow">Before You Look Elsewhere</span>
      <h2>Why bars and restaurants look for an alternative to WISK</h2>
      <p class="lead mt-16">
        Looking up a WISK competitor seldom points to a problem with the count. WISK does the bar count and pour cost very well. The question usually comes from the monthly price, or from the food side, where an order still goes out as an email or a text for a rep to read.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🍾</div>
        <h4>It grew up behind the bar</h4>
        <p class="text-muted mt-12">
          WISK leads with the beverage program: a bottle database, a Bluetooth scale for partial bottles and links to liquor boards. Its price list sells beverage and food as separate products. Ordering from your food supplier is its own job, and you can change it by itself.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">💳</div>
        <h4>The plan is priced per venue</h4>
        <p class="text-muted mt-12">
          WISK publishes its plans by outlet, which is more open than most. Moving your counts, recipes and invoice history somewhere else to save on it is a large job, and it would not change how a food order gets to a distributor.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📲</div>
        <h4>A distributor of yours may hand you an app</h4>
        <p class="text-muted mt-12">
          Some food distributors now set up their bar and restaurant customers on our app, with the items each one buys at its own prices. If yours does, that one order can be spoken, and WISK carries on as before.
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
      <h2>Skip the WISK alternative, add one step</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Read the lines before anything is sent</h3>
          <p class="mt-12 text-muted">
            After the count, open the app and say what the kitchen needs from that distributor. Each item shows up as a line from your guide. Change a quantity or drop a line, then send. Nothing is sent until you choose to send it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each line is yours to check before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Open around the clock, long after the rep's office closes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your own iPhone or Android, no extra device</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Called away to the bar? Pick up the order where you stopped</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">Step by step: placing an order →</a>
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
          <span class="eyebrow">The Distributor's Guide</span>
          <h3>The guide comes from the distributor</h3>
          <p class="mt-12 text-muted">
            Your distributor loads the products you buy from them, at the prices agreed for your account, under their item codes. You do not build or keep this list. When they change an item or a price, they update the guide.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Just your usual items, not the full catalog</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your account's own prices</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Updated on their side</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Same rep and the same terms as now</span>
            </li>
          </ul>
          <a href="/restaurant-checklist-software" class="feature-link">Keeping ordering steady across shifts →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Your distributor's<br>guide, priced<br>for your account
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Order Records</span>
          <h3>A numbered order on the distributor's side</h3>
          <p class="mt-12 text-muted">
            An order sent in the app reaches the distributor with an order number, the date and the time, and you get a confirmation. When a case is short, you have a record to point to.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each app order carries a number, date and time</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed to you by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Settle a short delivery with facts</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A call or a voicemail to the rep gets no number from us</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">What each supplier confirmed →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A sent order showing<br>its number and<br>the time it went
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 4 -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Your Count And Costs</span>
          <h3>WISK still counts, costs and reads invoices</h3>
          <p class="mt-12 text-muted">
            Counting, the scale, pour costs and your bar suppliers are still WISK's job. When the food delivery arrives, its invoice goes into WISK the way it does today, so your costs still include it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts and pars untouched</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Beverage buying handled as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Invoices entered just as now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No data passes between the two apps</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">Stock checks and the order that follows →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>An order said aloud,<br>then the delivery<br>and its invoice
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
      <h2>Getting going takes three steps</h2>
      <p class="lead mt-16">
        No hardware to buy, and no change to your WISK setup.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask the distributor first</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your distributor creates the account and adds your guide, if they offer VoiceOrder Solutions. Unsure? Reach out to us and we'll connect you with someone there.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Get the app on your phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Sign in, and the guide your distributor built is there.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Talk it through, then send</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Talk through the order, check what came up, then tap send.
        </p>
      </div>
    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: the VoiceOrder Solutions app showing your guide and an order already sent
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
      <h2>Heard from kitchens using the app</h2>
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
            "Once the count is done, I talk through what we need and it's sent before I lock up."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">Photo</div>
            <div>
              <div class="author-name">[Customer Name]</div>
              <div class="author-role">[Restaurant Name] · [City]</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "I get a confirmation every time, so I know it went through."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">Photo</div>
            <div>
              <div class="author-name">[Customer Name]</div>
              <div class="author-role">[Restaurant Name] · [City]</div>
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
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Use Both</span>
      <h2>Count and cost in WISK, order one distributor by voice</h2>
      <p class="lead mt-16">
        This is not a WISK replacement. WISK keeps counting, costing and reading invoices. We handle one job, via the distributors we work with: an order said aloud, then checked over. If a quicker order is what you hoped a WISK alternative would bring, that piece fits next to it.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">🍷</div>
        <h4>Beverage and other suppliers stay in WISK</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Keep sending liquor-board orders, and orders to any supplier without our app, from WISK just as you do now.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>That delivery still lands in your costs</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          What you say into our app will not appear among WISK's orders, because the two do not connect. Its invoice comes into WISK as normal, so the cost still lands.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">⚙️</div>
        <h4>Nothing to set up in WISK</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your WISK account is left as it is. Start with one distributor and see how it goes.
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
      <h3 style="margin-bottom:10px;">See how your guide becomes a sent order</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute demo: a distributor's food guide, one order dictated and reviewed, and the result at the distributor's desk. WISK is not part of it.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 13: FAQ
     Eight items, to match the eight accordion slots on the Webflow page.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Questions owners ask before adding it</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a WISK alternative to speak my orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. WISK handles your counts and costs, and it can already send your suppliers an order. Where a food supplier of yours has our app, talk that order through, and WISK keeps everything else.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than WISK?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at counting bottles, weighing partials, pour cost or reading invoices: we do none of those. We do one smaller job: an order to your distributor, said aloud and looked over before it goes. If ordering is why you started looking at a WISK alternative, that job may be all you need, alongside WISK.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and WISK connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is no link of any kind, and each of us supports our own product alone. An order you speak goes to your distributor, not into WISK. The invoice for that delivery reaches WISK however it reaches it now.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I send every supplier's order this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, only to food distributors who run VoiceOrder Solutions. WISK can get an order to any supplier at all, and we cannot. Use WISK for liquor and the rest, and ask your other food suppliers if they have the app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens if a line comes out wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You see each line before sending, so you fix the item or remove it there. That check is the safeguard, and a quick glance can still miss something. Orders given over the phone or by voicemail get no order number from us; only orders you send in the app carry one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I start?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor. Once they add you and set up your guide, most kitchens are sending orders that day. Not sure if yours offers it? Ask us and we'll check for you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What will it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That depends on your distributor, because they are the ones who offer the app. WISK lists its prices on its own site; we do not publish one. Your WISK plan stays the same.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the WISK details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From wisk.ai and the WISK help center, read on 27 October 2026: the feature pages, the plans page and the help articles on ordering. Their savings figures and customer counts are theirs and are left off this page. If any of it is out of date, the error is ours.
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
  <h2>Keep WISK. Speak your next order to the distributor.</h2>
  <p>Talk to your distributor or to us, and see how an order travels from your phone to their office.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Through your distributor</span>
    <span>✓ Your guide, built for you</span>
    <span>✓ WISK stays as it is</span>
    <span>✓ iOS + Android</span>
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
        <li><a href="#features">Order Records</a></li>
        <li><a href="#how-it-works">Getting Started</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">WISK + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
        <li><a href="/order-taking-software">Order Taking for Distributors</a></li>
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
