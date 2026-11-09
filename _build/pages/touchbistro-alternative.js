/* Comparison page: TouchBistro, and TouchBistro with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (wave 4, 2026-11-09): the reader is the RESTAURANT that runs TouchBistro. VoiceOrder
 * Solutions comes through the restaurant's distributor, and only reaches distributors that offer it.
 * Same frame as the other operator pages: keep TouchBistro, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, a sync or an "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle (rebuilt 2026-11-09 after review): "which reason is yours?". If the reason is the POS, you need another POS; if it is the supply order, that step changes alone. (Old angle: "No new POS needed".) A "TouchBistro alternative" search is often a POS search. We are not a
 *   POS, and the page says so. If the pain is the food order to a distributor, that one step changes on
 *   its own: TouchBistro keeps service, and its supply ordering (back-office add-ons or partner tools)
 *   stays where it is. Its own facts: POS vs back office, guest orders vs supply orders, and Inventory
 *   Management's "select vendors online, the rest by email".
 * ⚠ TRAPS (all in _build/research/competitors/touchbistro.md):
 *   1. On a POS page "voice ordering" reads as GUESTS phoning in takeout. Hero lead, trust line, table
 *      lead and FAQ 4 say it is the kitchen's supply order. TouchBistro sells no guest phone AI itself.
 *   2. TouchBistro DOES order supplies: Inventory Management (suggested orders per vendor, POs by email,
 *      online to select vendors, a mobile app that sends POs) and Profit Management (any vendor, order
 *      guides, invoice processing). All conceded with ticks in both columns. Never "the POS cannot order".
 *   3. Profit Management is powered by a partner that has its own operator page here, and the
 *      integrations list names five more such tools. NONE is named on this page.
 *   4. Pricing: POS plans published, the back-office add-ons quoted. Figures stay OFF (homepage and
 *      pricing page disagree on the bundle price anyway). FAQ 7 states it neutrally.
 *   5. Not "iPad POS": their /pos/ page no longer says iPad.
 *   6. A spoken order makes no purchase order in TouchBistro: coexistence card 1 and FAQ 5.
 * None of TouchBistro's percentages or case-study figures are repeated.
 * Review 2026-11-09 (wave 4 FIXES4 + sameness): H1 now "Change Only Your Ordering" (verify round); problem card 1 promoted,
 *   cards 2-3 TouchBistro-only (two add-ons; built on screen); coexistence cards = no PO in TouchBistro (with the
 *   step), partner inventory apps stay linked, online vendors stay; FAQ 4 = "is the POS itself the reason?"
 *   (guest-voice FAQ dropped, owned by toast/lavu); order row is the phone confirmation only (their POs are
 *   numbered); P1/P2 cost + no-distributor wording; region scope of Inventory Management in the sourcing FAQ.
 */
module.exports = {
  title: "Not a TouchBistro Alternative: Keep It, Add Voice Ordering",
  description: "If the POS is the problem, you need another one. If it's the supply order, speak it to a distributor that offers our app. No TouchBistro alternative needed.",
  related: ["lavu-pos-alternative","toast-pos-alternative","marginedge-alternative"],
  relatedHeading: "Other restaurant tools that can stay as they are",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A TouchBistro Alternative: Change Only Your Ordering</h1>
      <p class="lead mt-16">
        If supply ordering, not service, is why you are looking, keep your POS and speak your orders into our app. Look over each line from your distributor's order guide (your regular items, priced for your account), then send, and the order gets a number. This needs a distributor that has VoiceOrder Solutions.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Check If My Distributor Offers It →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>For kitchen supply orders</span>
        <span class="hero-trust-dot"></span>
        <span>Via your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>TouchBistro stays as is</span>
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
      <div class="stat-label">saved per order, compared with calling your rep</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most kitchens get started, after the distributor adds them</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">to place supply orders, after service or before opening</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with TouchBistro
     alone. Service, counts, suggested orders, emailed and online purchase orders, costing,
     partner tools and the mobile app are ticks in BOTH. Only rows 2, 5 and 7 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Your POS Stays Put</span>
      <h2>TouchBistro + VoiceOrder Solutions<br>vs TouchBistro on its own</h2>
      <p class="lead mt-16">
        Here is what changes for the food you buy, not the meals you sell. The ticks for service, counts and purchase orders are TouchBistro's own, some from add-ons it sells. Voice ordering adds a spoken, checked order with distributors on our app, and needs no TouchBistro alternative.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">TouchBistro + VoiceOrder Solutions</th>
            <th style="width:30%;">TouchBistro on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tables, payments and tableside orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Say what you need, then look over the lines</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Counts and a suggested order for each vendor</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Purchase orders emailed, or sent online to some vendors</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Items and prices loaded by the distributor before you order</td>
            <td>For distributors on our app</td>
            <td>Prices updated from invoices, with Profit Management</td>
          </tr>
          <tr>
            <td>Recipe costing and food cost reports</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order confirmed back to your phone</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not described on their site</td>
          </tr>
          <tr>
            <td>Partner inventory tools linked to the POS</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An app for iPhone and Android phones</td>
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
      <span class="eyebrow">Which Reason Is Yours?</span>
      <h2>Why people look for a TouchBistro competitor</h2>
      <p class="lead mt-16">
        An alternative to TouchBistro means swapping the POS and retraining every server on it. Sometimes the reason is service. Sometimes it is how you order from your distributor, and that part can change on its own.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">💳</div>
        <h4>If it's the register or the floor</h4>
        <p class="text-muted mt-12">
          If the reason is payments, the floor plan or the menu screens, the TouchBistro alternative you need is another POS. VoiceOrder Solutions is not one.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Supply ordering is sold separately</h4>
        <p class="text-muted mt-12">
          TouchBistro sells supply ordering in two add-ons, Inventory Management and Profit Management, quoted apart from the POS. If you run neither, and no partner tool, your distributor gets the order as it does today: by phone, by message or through the rep.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📧</div>
        <h4>Built on screen, not spoken</h4>
        <p class="text-muted mt-12">
          Inventory Management turns the suggestion for each vendor into a PO (purchase order). It emails the PO, or sends it online to select vendors. Both paths have you build the order on a screen. Neither, on their site, has you say it aloud.
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
      <h2>If the food order is the problem, no TouchBistro alternative is needed</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Say your list standing in the walk-in</h3>
          <p class="mt-12 text-muted">
            In the walk-in or dry storage, say what you need into the app. What you say shows up as lines from your order guide. Fix an amount or remove a line, then send.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing goes until you have checked the lines</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Order at 1 a.m. if that is when you finish</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the iPhone or Android phone you carry</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled onto the floor mid-order? It waits, saved</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">How placing an order by voice works →</a>
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
          <span class="eyebrow">The Distributor's List</span>
          <h3>Your usual items, already priced for your account</h3>
          <p class="mt-12 text-muted">
            The distributor loads the products you buy from them, at the prices they set for your account, under their own item codes, and can change that guide from their side.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only what you normally buy, not their full catalog</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The prices on your account, line by line</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No product list for you to type in</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your rep stays your rep</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Buying from several suppliers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>The order guide,<br>with your<br>account prices
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Your Copy Of The Order</span>
          <h3>Numbered, dated and timed, every time you send in the app</h3>
          <p class="mt-12 text-muted">
            When you send from the app, you get a number, the day and the time on the order, and a confirmation reaches your phone. If cases are missing when it arrives, give your rep that number.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Records the minute you sent it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmation by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A number to quote when something is missing</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Calls and voicemails still get no number from us</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">Tracking what every supplier confirmed →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A sent order with<br>its number, date<br>and time
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 4 -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Your Front Of House</span>
          <h3>Servers keep the screens they know</h3>
          <p class="mt-12 text-muted">
            Tables, payments, the menu, tableside orders and guests' online orders all stay in TouchBistro. Nobody on the floor has new software to learn, because our app is only for ordering from your distributor, on your own phone.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Guests keep ordering through TouchBistro</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your counts and recipes are untouched</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Sales reports come from the POS as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Invoices are handled as they are today</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">Where ordering sits next to your stock counts →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A spoken supply order,<br>next to a busy<br>dining room
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
      <h2>How a kitchen gets started</h2>
      <p class="lead mt-16">
        Your distributor sets up the account, so there is nothing to install on the POS and no new hardware.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Make sure your distributor has it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they offer it, they create your login and load your guide. Unsure who to ask? Contact us to find out.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Sign in on your phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Download the app and log in. Your guide is waiting there.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Read it out, look it over, send</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Speak the items, look over the lines, and send the order.
        </p>
      </div>
    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VoiceOrder Solutions app with a distributor's order guide and a sent order
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
      <h2>What kitchens say about ordering this way</h2>
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
            "I do the produce order on my phone in the walk-in now, before we open, not on a call after the last table."
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
            "When the dairy came in short, I had the order number on my phone, so there was nothing to argue about."
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
      <h2>Which orders move to our app, and which stay with TouchBistro</h2>
      <p class="lead mt-16">
        This is not a TouchBistro replacement. TouchBistro runs the dining room, and add-ons such as Inventory Management handle counts and costs. Orders move over only for distributors on VoiceOrder Solutions: spoken from the walk-in, then reviewed before they leave.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>TouchBistro gets no copy of the order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Nothing you send from our app turns into a PO in TouchBistro's Inventory Management. If you track those items there, record the delivery there yourself, as you would for any order made outside it.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📊</div>
        <h4>Partner inventory apps stay linked</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A partner inventory app linked to TouchBistro keeps its link. Count in it as you do now. Where a distributor uses our app, read out the items you need and check the lines.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Leave online vendors where they are</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If a vendor already takes your orders online through TouchBistro, leave that vendor there. Our app is for a distributor you still reach by phone or through the rep.
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
      <h3 style="margin-bottom:10px;">Follow one sample order from the walk-in to a distributor</h3>
      <p class="text-muted" style="font-size:16px;">
        Our 20-minute demo speaks a short list into the app, changes one item, and shows what lands at the distributor's end.
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
      <h2>Questions from restaurants on TouchBistro</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a TouchBistro alternative to speak a supply order?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. All it takes is a distributor with our app. Then you talk that order into the app, so there is no call to make.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than TouchBistro?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The two are built for separate jobs. Payments, tables, tableside orders, guest online orders, staff and stock counts: we do none of these, and we are not a POS. Ours is the order to a distributor on our app, spoken aloud and checked one item at a time. In TouchBistro's add-ons, you put each order together on screen; if you prefer to say it, that takes no TouchBistro alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and TouchBistro connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. They are separate companies, each with its own help desk, and they share no data. Whatever you say in our app is sent to your distributor alone; neither TouchBistro nor a tool linked to it gets a copy.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          If my reason for leaving is the POS itself, will this help?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not with that part. Payments, tables or menu screens need a different POS, and we do not make one. If you move to another POS later, ordering in our app carries on as before, because it was never connected to TouchBistro.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          I already order through TouchBistro Inventory Management. How does this fit?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Stay with it for the vendors you order from online or by email. Where a distributor has our app, you can speak that order instead. Send each distributor's order from one place only, so nothing is ordered twice.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens if I say "six" and the screen shows sixteen?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You catch it on the review screen before sending: change the amount, swap the item, or delete the line. That review is the safeguard, so a hurried glance can still let a mistake through. A phoned-in or voicemail order gets no number from us; only orders placed in the app carry one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor: they open your account, and most kitchens place a first order the same day. If yours does not have it, order from them as you do today, and get in touch: we will work out who you should talk to. For cost, ask the distributor you would get the app from; we publish no price. TouchBistro lists prices for its POS plans and gives quotes for its back-office tools.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the TouchBistro details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From touchbistro.com as we read it on 9 November 2026: its POS page, the pages for both back-office add-ons, plus pricing and integrations. On that date we saw nothing there about ordering supplies by speaking. Inventory Management is offered in the continental US and in Canada outside Quebec. We left out TouchBistro's own customer counts and savings claims. If any of it has gone out of date, send us a note and we will put it right.
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
  <h2>Ordering supplies was the reason? Keep TouchBistro and speak your next order to the distributor.</h2>
  <p>Ask your distributor whether they offer VoiceOrder Solutions. If they are hard to reach, ask us and we will check.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Set up by your distributor</span>
    <span>✓ Items at your prices</span>
    <span>✓ Order day or night</span>
    <span>✓ iPhone + Android</span>
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
        <li><a href="#comparison">TouchBistro + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/supplier-management-software">Supplier Management</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
        <li><a href="/order-tracking-software">Order Tracking for Distributors</a></li>
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
