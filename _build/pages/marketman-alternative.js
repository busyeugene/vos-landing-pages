/* Comparison page: MarketMan, and MarketMan with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT. VoiceOrder
 * Solutions comes through the restaurant's distributor, and only reaches distributors that offer it.
 * Same frame as the MarginEdge pilot: keep MarketMan, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, a sync or an "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: the deepest overlap of the batch. MarketMan already turns counts and pars into a suggested
 * order and sends it in one click, two-way with some large distributors ("No more emails, texts,
 * calls, or faxing."). So the page is about the distributor that is NOT linked that way and still
 * takes the order by phone or through the rep, and that offers VoiceOrder Solutions. For a supplier
 * already linked both ways to MarketMan we add little, and the page says so ONCE (FAQ 2). Review 2026-10-27: a spoken order
 *   skips MarketMan's approvals and makes no PO there; said in FAQ 3, coexistence card 1 and the
 *   receiving FAQ 4, and the table's approvals row is scoped to orders made in MarketMan.
 * ⚠ TRAPS (all in _build/research/competitors/marketman.md):
 *   1. AI is all over their ordering ("AI Ordering", Smart Ordering, AI receiving, OCR invoices).
 *      Never "they type, we speak", "no AI" or "no voice". Voice is absent today: dated in FAQ 8.
 *   2. They publish BOTH "2-4 weeks" and "24-48 hours" for onboarding. No row or sentence rests on
 *      setup speed.
 *   3. MarketMan receiving runs off a PO made in MarketMan. A spoken order makes none there: FAQ 4
 *      (receiving) and coexistence card 1 say so as a trade-off. Never claim what MarketMan does with an
 *      invoice that has no matching PO.
 *   4. Pricing is PUBLISHED. Figures stay OFF the page; FAQ 7 concedes it.
 *   5. Named distributors (Sysco, US Foods...) are NOT named: claims.js bans them, and the page
 *      only needs "some large distributors".
 *   6. The help center did not load, so the "API, EDI, Excel, email, text, or even fax" line is
 *      unverified and unused. Nothing here says how MarketMan reaches a non-linked supplier.
 *   7. Their owner's distributor tools and the Pepper partnership are not mentioned.
 * None of their customer counts or savings figures are repeated.
 */
module.exports = {
  title: "Not a MarketMan Alternative: Keep It, Add Voice Ordering",
  description: 'Still phoning one distributor? If they offer our app, say the order, check each line and get an order number. Keep MarketMan: no MarketMan alternative needed.',
  related: ["restaurant365-alternative","craftable-alternative","xtrachef-alternative"],
  relatedHeading: "Other platforms you can keep as they are",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A MarketMan Alternative: Skip The Supplier Call</h1>
      <p class="lead mt-16">
        Instead of the call, speak your list into the VoiceOrder Solutions app, check the lines from your distributor's guide, priced for your account, and send a numbered order. It is for a distributor you phone or order through a rep, and only if that distributor offers it.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VoiceOrder Solutions →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Comes from your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Keep MarketMan as set up</span>
        <span class="hero-trust-dot"></span>
        <span>iPhone or Android</span>
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
      <div class="stat-label">is when most kitchens can start, after the distributor adds them</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">less per order than talking it through on the phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">for ordering, even on nights the supplier is closed</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with MarketMan
     alone. Pars and suggested orders, invoices, two-way supplier links, recipe costing, phone
     ordering and multi-site control are ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Both Columns Keep MarketMan</span>
      <h2>What MarketMan does, in both columns.<br>What ordering by voice adds.</h2>
      <p class="lead mt-16">
        Speaking the order, from the distributor's own guide, is what the combined column adds. If you came here weighing a MarketMan alternative, this shows what changes if you keep MarketMan instead. Every tick for counting, costing and approvals is MarketMan's own; spoken ordering works only with distributors on our app.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">MarketMan + VoiceOrder Solutions</th>
            <th style="width:30%;">MarketMan on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Counts, pars and a suggested order</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Say the order aloud, then check each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Invoice scanning and food cost tracking</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Items and prices kept current by the supplier</td>
            <td>Linked suppliers and distributors on our app</td>
            <td>For linked suppliers</td>
          </tr>
          <tr>
            <td>Two-way links with some large distributors</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Central kitchen and commissary ordering</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Recipe and menu costing</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A mobile app for iOS and Android</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Approvals and transfers, on orders made in MarketMan</td>
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
      <span class="eyebrow">Before You Compare</span>
      <h2>Why people search for an alternative to MarketMan</h2>
      <p class="lead mt-16">
        Sometimes the reason to check a MarketMan competitor has nothing to do with the counts or the costing. It starts with how one distributor takes its orders.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>One supplier still wants a call</h4>
        <p class="text-muted mt-12">
          MarketMan sends purchase orders from the web or the mobile app. Some suppliers still work mainly by phone or through the rep, whatever your software sends.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📦</div>
        <h4>Supplier links depend on the plan</h4>
        <p class="text-muted mt-12">
          Each MarketMan plan includes a set number of direct supplier links (EDI), with more on higher plans. A smaller supplier may have no such link to offer.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🌙</div>
        <h4>The count ends after the rep goes home</h4>
        <p class="text-muted mt-12">
          MarketMan can show what is short as soon as the night count is done. With a distributor who takes orders over the phone, the order still waits for the rep to pick up next morning, and a MarketMan alternative would not change that.
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
      <h2>No MarketMan alternative needed to change one order</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Say it once, see each line, then send</h3>
          <p class="mt-12 text-muted">
            Open the app in the storeroom and say what you need from that distributor. The lines appear from the guide set up for your account. Change a quantity or delete a line, and send it only when it looks right.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every line is yours to review before it goes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Send it at midnight if that is when the count is done</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Uses the phone already in your pocket</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Called away halfway? The order is saved</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">More on placing an order by voice →</a>
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
          <span class="eyebrow">Your Supplier's Guide</span>
          <h3>The distributor keeps your list and prices up to date</h3>
          <p class="mt-12 text-muted">
            The distributor loads the products you buy from them, at your account's prices, under their item codes. When a price or an item changes, they make the change. MarketMan does this too for suppliers linked to it both ways; this is for the ones that are not.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Just your usual items, not their whole catalog</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Priced the way your account is priced</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No item list for you to build</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Same distributor, same rep</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Ordering from several suppliers →</a>
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
          <span class="eyebrow">A Record Of It</span>
          <h3>Each app order carries a number and a time</h3>
          <p class="mt-12 text-muted">
            Orders you send in the app get an order number, a date and a time stamp, and a confirmation reaches your phone. When a delivery comes up short, you have the order itself to show, not your memory of a call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Shows exactly when you sent it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed back to you by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Easy to hold up against the delivery</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Phone calls and voicemails still get no number from us</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">What each supplier confirmed →</a>
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
          <span class="eyebrow">Your MarketMan Setup</span>
          <h3>MarketMan still does the counting and costing</h3>
          <p class="mt-12 text-muted">
            MarketMan keeps every job it does today: counts, pars, recipe costs and invoice scanning. Only one thing changes: the order you used to phone to that one distributor gets spoken instead.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock counts carry on in MarketMan</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Reports work as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Invoices still go in by photo or email</span>
            </li>
            
          </ul>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A spoken order,<br>then the delivery<br>and its invoice
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
      <h2>Three steps, starting with your distributor</h2>
      <p class="lead mt-16">
        Your distributor handles the setup, so no computer or new hardware is needed.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Check your distributor has the app</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they do, they open an account for you and upload your guide. Not sure? Get in touch and we can check for you.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Log in on your phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Download the app and sign in; your guide is already loaded.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Read out the order, then send</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Speak the order, check it, and send. You are done.
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
      <h2>From kitchens that order this way</h2>
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
            "The produce order used to wait until our rep picked up. Now I send it as soon as the count is finished."
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
            "If a case is missing, I read them the order number and it gets sorted out quickly."
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
      <h2>Let MarketMan plan the order, then say it to one distributor</h2>
      <p class="lead mt-16">
        This is not a MarketMan replacement. MarketMan decides what you need and tracks what it cost. VoiceOrder Solutions carries one part of that: the order to a distributor on our app, spoken on your phone and checked before it goes.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>Spoken orders skip MarketMan's purchase order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          No purchase order gets created in MarketMan, so that order skips any approval you have set up there. MarketMan does not see that order; its invoice goes in the way it does today.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📊</div>
        <h4>Count, check the pars, then speak what is short</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Run your usual MarketMan count and let its pars show what is short from that distributor. Then open our app, say that list, and look over each line before you send.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Best for routine reorders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          It suits reorders that need no sign-off. If every order to a distributor needs approval, or that distributor is linked both ways to MarketMan, keep it in MarketMan. Send each distributor's orders from one app only, so the same order never goes out twice.
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
      <h3 style="margin-bottom:10px;">See how an order travels from the storeroom to the supplier</h3>
      <p class="text-muted" style="font-size:16px;">
        In 20 minutes, see an example guide in the app, a practice order read out and corrected, and the copy that reaches the distributor.
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
      <h2>Questions from operators who run MarketMan</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a MarketMan alternative to start speaking my orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. MarketMan already turns your counts and pars into an order and passes it to your suppliers. Where one of your distributors has our app, you can order from that one by voice instead.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than MarketMan?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For counts, pars, suggested orders, invoices, recipe costs or approvals across locations, no: we do none of those. We do one job: you say an order in our app for one distributor and check each item first. Where MarketMan has a two-way link with a supplier, we add little for that supplier. If phoning one distributor is what made you look for a MarketMan alternative, that one job may be enough.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and MarketMan connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. They are separate, and neither one's support team covers the other. Orders said in our app go only to your distributor, so MarketMan never sees them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I receive a delivery I ordered by voice?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          MarketMan holds no order for it, so check what arrives against your confirmation and its order number. Then enter the invoice in MarketMan as usual.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I order from every supplier in the app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only from the distributors that run VoiceOrder Solutions. MarketMan can order from far more suppliers than we reach. Keep those in MarketMan, and ask your other suppliers whether they have our app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if the app gets an item or a quantity wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You fix it on the review screen before you send: change the item or the amount, or delete the line. That check is the safeguard, and a rushed look can still let a mistake through. An order made by phone or left on voicemail gets no order number from us; only app orders do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Your distributor opens your account, and most kitchens send their first order on the day it opens. If your distributor does not have the app, or you cannot tell, contact us and we will put you in touch with whoever handles it. On price, check with your distributor: the app reaches you through them, and we list no price of our own. MarketMan publishes its plans.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the MarketMan details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From marketman.com as we read it on 27 October 2026: their features, published plans and partner list. We found no voice ordering there on that date. We have left MarketMan's customer and savings claims off this page. If something has changed, tell us and we will correct it.
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
  <h2>Count in MarketMan, then send that distributor's order with no phone call</h2>
  <p>Ask your distributor whether they offer VoiceOrder Solutions, or ask us and we will find out.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Through your distributor</span>
    <span>✓ Your account prices</span>
    <span>✓ Order at any hour</span>
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
        <li><a href="#comparison">MarketMan + VoiceOrder Solutions</a></li>
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
