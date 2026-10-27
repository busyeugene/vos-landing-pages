/* Comparison page: Craftable, and Craftable with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT, usually a multi-unit
 * group's operator or purchasing lead. VoiceOrder Solutions comes through the restaurant's distributor,
 * and only reaches distributors that offer it.
 * Same frame as the MarginEdge pilot: keep Craftable, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, sync or "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: Craftable is the CONTROL layer of a group's back office, purchase order to payment, built for
 * finance and purchasing. VoiceOrder Solutions is the routine reorder a kitchen speaks to a distributor
 * that offers it. FAQ 4 says plainly that a spoken order is never a Craftable purchase order, so it
 * skips Craftable's approvals, budgets and invoice matching: that trade-off is the page's honesty.
 * ⚠ TRAPS (all in _build/research/competitors/craftable.md):
 *   1. VOICE: Craftable announced "Voice Audit AI" (counts and audits by voice, 2026-05-28; the site
 *      still says "Coming Soon") and its roadmap names "purchasing, and voice". Never "they type, we
 *      speak", "no voice" or "no AI". Safe: their voice is for counts; their ordering is built on screen.
 *      They use "Hands-free"; we never do.
 *   2. Craftable orders from ANY vendor (email/text to the rep, EDI, punchout). Conceded in row 3 and FAQ 5.
 *   3. Approvals, budgets, contract pricing and invoice matching are Craftable's. Both-tick row 5, scoped to Craftable orders.
 *   4. Pricing is NOT published (/pricing 404): stated neutrally in the setup-and-cost FAQ 7. Third-party figures stay off.
 *   5. No published setup timeline: none is invented, and Craftable is never made to look slow.
 *   6. Order guides need their eProcurement add-on: not mentioned.
 * Their customer counts, savings and accuracy figures are not repeated.
 */
module.exports = {
  title: "Not a Craftable Alternative: Keep It, Add Voice Ordering",
  description: 'Not a Craftable alternative: keep its approvals and budgets, and speak routine reorders to a distributor that offers VoiceOrder Solutions.',
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
        Say your weekly reorder from the walk-in, look over every item, then send it with an order number and a confirmation back to your phone. It works with a distributor you still phone or text, if they hand out our app. They keep your guide and your prices current.
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
      <div class="stat-label">less per order than phoning the rep</div>
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
     are ticks in BOTH. Only rows 2 and 4 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Keep Craftable, Add Voice</span>
      <h2>Keep every Craftable control.<br>Speak the reorders you repeat each week.</h2>
      <p class="lead mt-16">
        The highlighted column adds spoken orders to any distributor of yours that offers VoiceOrder Solutions. If you came looking for a Craftable alternative, notice that both columns keep Craftable. Every tick for approvals, budgets, stock and invoices is Craftable's own work; the spoken-order rows apply only where a distributor has our app.
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
            <td>Purchasing, inventory, bill pay and reporting in one platform</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order by speaking, then check on screen</td>
            <td><span class="check-yes">✓</span></td>
            <td>Built on screen from a form or guide</td>
          </tr>
          <tr>
            <td>Orders to any vendor by email or text, and directly to vendors linked to Craftable</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order guide built by your distributor</td>
            <td><span class="check-yes">✓</span></td>
            <td>You build the guide; vendors can keep their catalog current</td>
          </tr>
          <tr>
            <td>Approval limits, budgets and contract prices on Craftable orders</td>
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
        Craftable is built so finance and purchasing can control spend at every location. Sometimes a search for a Craftable competitor starts with one distributor, the one a kitchen still phones, texts or orders from through a rep.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>Control is the point of Craftable</h4>
        <p class="text-muted mt-12">
          Craftable's own pitch is control at the purchase order: who may buy what, at which contract price, checked against the invoice before payment. A Craftable alternative chosen only for faster ordering would give that up. Keep the controls, and speak only the reorders nobody has to approve.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Some orders still go by phone</h4>
        <p class="text-muted mt-12">
          A late top-up or a changed quantity sometimes goes to the rep by call or text instead of through Craftable. A call like that leaves nothing in writing to check the delivery against.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🖥️</div>
        <h4>Craftable's voice feature is for counts</h4>
        <p class="text-muted mt-12">
          Craftable has announced Voice Audit AI for counts and audits. Its ordering is still done on screen, in a form, a guide, a catalog or a vendor's own ordering site. Saying a reorder aloud is a separate step you can add.
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
      <h2>Not a Craftable alternative, just one reorder said aloud</h2>
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
              <span>Ready in the app once they add your account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Changes made on their side, not yours</span>
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
          <h3>Payments and reports stay in Craftable</h3>
          <p class="mt-12 text-muted">
            Craftable still holds your counts and recipes, and still handles bill pay. Reorders you say into our app go to the distributor, and nothing is created in Craftable. The invoice for that delivery goes into Craftable as usual.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Approval rules still cover orders built in Craftable</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts, pars and recipes left where they are</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Reports run as they do today</span>
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
        Nothing gets installed on a computer, and most of the setup is done by your distributor.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask which distributor has it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they offer VoiceOrder Solutions, they open an account for your kitchen and load its guide. Not sure which one? Ask us.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Put it on your phone</h4>
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
            "I do the produce order from the walk-in at close, so it is in before the morning crew arrives."
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
        We are not a Craftable replacement. Craftable keeps approvals, budgets, counts, bills and reports for every location. Our part is one step, and only with a distributor that provides our app: a reorder spoken, looked over, then sent.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>No purchase order to match the invoice to</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Craftable checks each invoice against its purchase order. Our app's orders have none, so for that delivery, check the invoice against what you sent.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>Count in Craftable, then speak what is low</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Run your Craftable count and see what sits below par. For a distributor on our app, say those items instead of building the order in Craftable, and review every line before you send.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">✅</div>
        <h4>Best for reorders that need no sign-off</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          It suits a distributor whose routine reorder your team may send without approval. If every order to that distributor needs approval, keep it in Craftable. Give each distributor one ordering channel, Craftable or our app, never both.
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
        Twenty minutes, using an example distributor guide: we speak a reorder, correct one line, and open the copy the distributor gets.
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
          No. Craftable runs a group's back office from the first order to the paid bill. If a supplier you phone or message today has our app, you can speak that reorder there instead.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Craftable?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at approvals, budgets, inventory, invoices, payments or reporting: we do none of those. Our job is smaller: a reorder you speak to a distributor and check before it goes. If slow reordering is the reason for your Craftable alternative search, that one job may be all you need beside it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will an order from your app show up in Craftable?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. The two products do not connect, nothing is shared between them, and each team supports its own software only. An order given in our app goes to your distributor and is never created as a Craftable purchase order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do orders I speak go through Craftable's approvals?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. They go straight to the distributor, so Craftable's approvals and invoice matching never see them. Craftable's budget does not see that order when you place it. Where sign-off matters, leave that distributor's orders in Craftable.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I reach all my vendors this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only the distributors who run VoiceOrder Solutions for their accounts. Craftable gets an order to any vendor with an email address or phone number, and we cannot. Use Craftable for all other vendors, and ask your distributors whether they have our app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if I say 12 cases and the review screen shows 2?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Every line shows on screen before it goes, so correct the number there or delete the line. Your review is the safeguard, and a hurried look can still let an error through. An order you phone in or leave on voicemail gets no order number from us; only orders sent in the app get one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The distributor handles setup. Once your account is added, your guide is in the app, and most first orders go in that same day. If yours does not offer it, or you are not sure, message us and we will find whoever can help. Cost is a question for your distributor, because you get the app from them, and we post no price list. Craftable quotes its prices rather than publishing them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Craftable details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Gathered from craftable.com and its help center on 27 October 2026: the platform and ordering pages, the help articles on placing orders, and their press releases. We leave out the operator totals and savings Craftable quotes about itself. If Craftable has changed something since then, tell us and we will fix the page.
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
  <h2>Craftable guards the spend; you speak the weekly order</h2>
  <p>Ask us whether any of your distributors has VoiceOrder Solutions, and we will find out for you.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Set up by your distributor</span>
    <span>✓ Prices on your account</span>
    <span>✓ Order number on app orders</span>
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
