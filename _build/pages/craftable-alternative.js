/* Comparison page: Craftable, and Craftable with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT, usually a multi-unit
 * group's operator or purchasing lead. VoiceOrder Solutions comes through the restaurant's distributor,
 * and only reaches distributors that offer it.
 * Same frame as the MarginEdge pilot: keep Craftable, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, sync or "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: Craftable is the CONTROL layer of a group's back office, purchase order to payment, built for
 * finance and purchasing. VoiceOrder Solutions is the routine reorder a kitchen speaks to a distributor
 * that offers it. FAQ 3 says plainly that a spoken order is never a Craftable purchase order, so it
 * skips Craftable's approvals, budgets and invoice matching: that trade-off is the page's honesty.
 * ⚠ TRAPS (all in _build/research/competitors/craftable.md):
 *   1. VOICE: Craftable announced "Voice Audit AI" (counts and audits by voice, 2026-05-28; the site
 *      still says "Coming Soon") and its roadmap names "purchasing, and voice". Never "they type, we
 *      speak", "no voice" or "no AI". Safe: their voice is for counts; their ordering is built on screen.
 *      They use "Hands-free"; we never do.
 *   2. Craftable orders from ANY vendor (email/text to the rep, EDI, punchout). Conceded in row 2 and FAQ 4.
 *   3. Approvals, budgets, contract pricing and invoice matching are Craftable's. Both-tick row 3.
 *   4. Pricing is NOT published (/pricing 404): parity with us, FAQ 7. Third-party figures stay off.
 *   5. No published setup timeline: none is invented, and Craftable is never made to look slow.
 *   6. Order guides need their eProcurement add-on: not mentioned.
 * Their customer counts, savings and accuracy figures are not repeated.
 */
module.exports = {
  title: "Not a Craftable Alternative: Keep It, Add Voice Ordering",
  description: 'Keep Craftable for approvals, AP and reporting, and speak your reorder to a distributor on VoiceOrder Solutions. A Craftable alternative that adds a step.',
  related: ["wisk-alternative","apicbase-alternative","marketman-alternative"],
  relatedHeading: "More group back offices, with one step added",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A Craftable Alternative: Speak The Routine Reorder</h1>
      <p class="lead mt-16">
        Say your usual reorder into the VoiceOrder Solutions app, look over every item, and send it to your distributor, numbered and timed. Where a distributor offers the app, they load your products and your prices. Craftable keeps its approvals, invoices and reports.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VoiceOrder Solutions →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Comes from your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Craftable left as it is</span>
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
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most kitchens send a first order once their distributor adds them</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">less on each order than placing it by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">the app takes your order, whatever time the kitchen closes</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the group with both tools, column 3 with Craftable alone.
     Craftable's back office, ordering to any vendor, approvals, pars, invoice AI and recipe costing
     are ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Keep Craftable, Add Voice</span>
      <h2>Keep every Craftable control.<br>Speak the reorders you repeat each week.</h2>
      <p class="lead mt-16">
        Only one job changes: how a repeat order gets to a distributor that offers VoiceOrder Solutions. One column is your group on Craftable alone; the other adds our app next to it. Craftable already runs purchasing, inventory and AP, so a Craftable alternative is seldom what a group needs. The two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Craftable + VoiceOrder Solutions</th>
            <th style="width:30%;">Craftable on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Purchasing, inventory, AP and reporting in one platform</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Spoken order, reviewed before it is sent</td>
            <td><span class="check-yes">✓</span></td>
            <td>Built on screen from a form or guide</td>
          </tr>
          <tr>
            <td>Orders to any vendor by email, text, EDI or punchout</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Guide built and kept up by your distributor</td>
            <td><span class="check-yes">✓</span></td>
            <td>Guides you assemble from vendor catalogs</td>
          </tr>
          <tr>
            <td>Approval limits, budgets and contract prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Bar inventory alongside the food</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Pars and counts that feed a draft order</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Invoices read from a photo, PDF or email</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Recipe costs on current vendor prices</td>
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
      <span class="eyebrow">Why People Search</span>
      <h2>Why groups look for an alternative to Craftable</h2>
      <p class="lead mt-16">
        A search for a Craftable competitor rarely means the platform has let you down. Craftable is built so finance and purchasing can control spend at every location. The search often starts in the kitchen, where whoever does the reorder wants speed more than another screen.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>It is built for the finance team</h4>
        <p class="text-muted mt-12">
          Craftable's own pitch is control at the purchase order: who may buy what, at which contract price, checked against the invoice before payment. That suits the people who sign off on spending. The cook doing Tuesday's reorder has a different job.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🖥️</div>
        <h4>Ordering in Craftable happens on a screen</h4>
        <p class="text-muted mt-12">
          In Craftable, you build an order in a form, a guide, a catalog or a vendor's own site. Craftable has announced voice for counts and audits; its ordering is done on screen. Speaking a reorder is a separate step you can add.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📲</div>
        <h4>A distributor of yours may offer an app</h4>
        <p class="text-muted mt-12">
          Certain distributors hand our app to the kitchens they supply, with each site's regular lines and negotiated prices already in place. Where one of yours does, that reorder can be spoken, and Craftable carries on as it is.
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
      <span class="eyebrow">What Changes</span>
      <h2>Not a Craftable alternative, just a faster reorder</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Say what you need, review it, then send</h3>
          <p class="mt-12 text-muted">
            Open the app at the end of the count and say the order. Each item shows up as a line from your guide with that distributor. Change a quantity or take something off, then send when it looks right. Nothing goes until you choose to send.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each line is yours to check before it goes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Send it at any hour, even after the rep's office closes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Called away halfway through? It saves where you were</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the phone already in your pocket</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">Step by step through placing an order →</a>
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
          <span class="eyebrow">Your Order Guide</span>
          <h3>A guide your distributor builds and keeps current</h3>
          <p class="mt-12 text-muted">
            Your distributor sets up the guide with the items your kitchen buys from them, at the prices on your account, under their own item codes. When an item or a price changes, the update comes from them, not from your purchasing lead.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only what you buy from that distributor</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Prices set for your account by the distributor</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Changes made on their side, not yours</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Same rep, same delivery days, same terms</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Ordering from several suppliers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A distributor's<br>order guide with<br>your account prices
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">A Clear Record</span>
          <h3>Something to point to when a case is short</h3>
          <p class="mt-12 text-muted">
            Any order sent from the app has its own order number, the date and the time, and a confirmation reaches your phone. When a delivery arrives light, your team can check it against what was sent, not against someone's memory of a call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Numbered, dated and timed when you send</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmation by push notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Shows who placed it, and when</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Phone and voicemail orders get no number from us</span>
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
          <span class="eyebrow">Craftable Keeps Its Job</span>
          <h3>Approvals and payments stay in Craftable</h3>
          <p class="mt-12 text-muted">
            Craftable still holds your counts, recipes, invoices, payments and reports. The invoice for a delivery you ordered by voice can go into Craftable the way invoices do today. No purchase order is made, though: an order you give by voice is not created in Craftable.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Invoices captured in Craftable as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts, pars and recipes left where they are</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders to other suppliers go out from Craftable</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No data passes between the two</span>
            </li>
          </ul>
          <a href="/restaurant-checklist-software" class="feature-link">Making the reorder the same on every shift →</a>
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
      <span class="eyebrow">How To Start</span>
      <h2>Three steps, starting with your distributor</h2>
      <p class="lead mt-16">
        Nothing gets installed on a computer, and Craftable is not touched.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask which distributor has it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they offer VoiceOrder Solutions, they open an account for your kitchen and load its guide. Not sure? Contact us and we will connect you.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Put it on the kitchen's phones</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Install it on an iPhone or Android phone, sign in, and the guide is there.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Speak the reorder and send it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Talk through the order, look it over, then tap send.
        </p>
      </div>
    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VoiceOrder Solutions app showing your guide and a sent order
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
      <h2>How the reorder goes now</h2>
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
            "Whoever closes does the order from the walk-in, so it is in before the morning crew arrives."
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
            "When a case goes missing, we look up the order number instead of arguing about a phone call."
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
      <h2>Craftable controls the spend, VoiceOrder Solutions speeds the reorder</h2>
      <p class="lead mt-16">
        We are not a Craftable replacement. Craftable keeps the spend controls, the counts, the bills and the reports. Our part is narrow, and only where a distributor provides it: a reorder spoken and checked before it is sent. Should easier reordering be what you hoped a Craftable alternative would bring, that is our whole contribution; nothing else in Craftable changes.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📧</div>
        <h4>Every other vendor stays on Craftable</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Suppliers without our app keep getting their orders from Craftable, as now. Save the app for the distributors that hand it to you.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>That delivery's invoice still lands in Craftable</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Our app's orders never show in Craftable, since the two do not connect. The invoice for that delivery can still be captured there as usual, so the cost is counted.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧪</div>
        <h4>Start with one distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Craftable keeps every setting you gave it, and nothing passes from one product to the other. Try the app on one distributor's reorder and see how it fits.
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
      <h3 style="margin-bottom:10px;">See a reorder go from spoken to sent</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute demo: the guide a distributor prepares, one reorder talked through, and the copy their team receives. Craftable is not part of it.
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
      <h2>What multi-unit buyers ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a Craftable alternative to speak my orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Craftable runs a group's back office from ordering through to paying the bill, and it can already order from any supplier. If a distributor your group buys from uses our app, kitchens can order from them by voice while Craftable handles the rest.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Craftable?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at approvals, budgets, inventory, invoices, payments or reporting: we do none of those. Our job is smaller: a reorder you speak to a distributor and check before it goes. If quick reordering is the reason for your Craftable alternative search, that single job may be all you need beside it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will an order from your app show up in Craftable?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Nothing ties them together, and each company services only its own software. A reorder you give our app by voice is never a Craftable purchase order, so it skips Craftable's approvals, budgets and invoice matching for that distributor. That is a real trade-off: if your group needs sign-off on every order, keep those orders in Craftable.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I reach all my vendors this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only the distributors who run VoiceOrder Solutions for their accounts. Craftable gets an order to any vendor with an email address or phone number, and we cannot. Use Craftable for all other vendors, and ask them about our app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens if the app hears an item wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Every line is on screen before you send, so that is where you fix it: change the item or delete it. That review is the safeguard, and a quick glance can still miss a mistake. Also note that an order phoned in or left on voicemail gets no order number from us. Those numbers come only with app orders.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does my kitchen get set up?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor. Once they add your account, your guide is in the app, and most kitchens put in their first order that same day. Not sure if yours offers it? Ask us and we will find out.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What will it cost us?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Your distributor can answer that, since they are the ones who give you the app. Craftable prices by quote, and so do we. Your Craftable subscription does not change.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Craftable details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Gathered from craftable.com and its help center on 27 October 2026: the platform and ordering pages, the help articles on placing orders, and their press releases. We leave out the operator totals and savings Craftable quotes about itself. Should Craftable have changed something since then, tell us and we will fix the page.
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
  <h2>Keep Craftable, and start speaking the reorder</h2>
  <p>Talk to your distributor or to us, and see how a reorder said into the app reaches them.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Set up by your distributor</span>
    <span>✓ Prices on your account</span>
    <span>✓ Craftable stays in place</span>
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
        <li><a href="#comparison">Craftable + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
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
