/* Comparison page: Lightspeed Restaurant, and Lightspeed with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (wave 4, 2026-11-09): the reader is the RESTAURANT that runs Lightspeed as its POS.
 * VoiceOrder Solutions comes through the restaurant's distributor, and only reaches distributors that
 * offer it. Keep Lightspeed, add VoiceOrder Solutions beside it for one job: the order to a distributor.
 * The two products do NOT connect (FAQ 3). Never imply an integration, a sync or an "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: ORDERS COMING IN vs THE ORDER GOING OUT. On a POS page "ordering" means guests (Order
 *   Anywhere, tableside, QR, online, takeout calls). This page is about the kitchen's order to its food
 *   distributor, and says so in the hero trust line (Supply orders only). Lightspeed already sends supply orders as
 *   purchase orders by email, and its own K-Series help center says what to do when you still PHONE a
 *   supplier: create the purchase order anyway, skip the email, receive it for stock ("To update stock
 *   levels only"). That phone call is the step we change, with a distributor that offers our app.
 * ⚠ TRAPS (all in _build/research/competitors/lightspeed-pos.md):
 *   1. Lightspeed HAS inventory and purchasing: stock deducted as dishes sell, low stock alerts, reorder
 *      points/pars, recurring orders, POs emailed to any supplier, receiving. Ticks in both columns.
 *      Inventory is in some plans and an add-on for others (pricing page): FAQ 4 says so neutrally.
 *   2. Lightspeed AI exists (typed questions about sales, staff, service). Conceded as a row. Never
 *      "no AI" or "they type, we speak". Voice ordering of supplies is not listed: dated in FAQ 8.
 *   3. Guest phone/voice ordering: none native found; not on this page (Toast and Lavu carry the guest-voice FAQ).
 *   4. A spoken order makes no purchase order in Lightspeed, so its stock does not count that delivery
 *      until someone records it there: coexistence card 1 and FAQ 5, using Lightspeed's own advice.
 *   5. Pricing is PUBLISHED (Enterprise quoted). Figures stay OFF the page; FAQ 7 says so neutrally.
 *   6. Product lines differ (K-Series, U-Series formerly Upserve, O-Series). Purchasing quotes come
 *      from the K-Series help center and the sourcing FAQ says so.
 *   7. The distributor partnership and the retail supplier network are NOT mentioned (named products
 *      are banned, and neither is an ordering link).
 * None of their customer counts, country counts or testimonial claims are repeated.
 * Review 2026-11-09 (wave 4 FIXES4): re-angled from "guests in, supplies out" (Toast owns it) to STOCK
 *   plus Lightspeed's own K-Series steps for phoned orders. Plan-scoping card dropped (Altametrics owns
 *   plan tier; Lightspeed's pricing page shows the inventory tools on every plan card and as an add-on,
 *   now only in FAQ 4). Order-number row became the phone-confirmation row (Lightspeed POs are numbered).
 *   Guest-voice FAQ 4 replaced by the inventory add-on question. FAQ 5 says the time saved is the call;
 *   recording in Lightspeed takes as long as after a call. No order-history claims: quote the number.
 * Verification round 2026-11-09 (VERIFY4): H1 "Restock Without Calling"; no pointers at the page in the comparison
 *   lead; guide "loaded" by the distributor (never "kept current"); problem card 2 on pars + the supplier
 *   list you set up (Lightspeed does show pars on a PO: never imply it only repeats last week); the
 *   K-Series stock-only setting folded into coexistence card 1; phoned-order steps capped at 3 (problem
 *   card 1, coexistence card 1, FAQ 5); final H2 sells, no chore.
 */
module.exports = {
  title: "Not a Lightspeed POS Alternative: Keep It, Add Voice Ordering",
  description: "Keep Lightspeed for guests and stock. Where your distributor has our app, speak your supply order and fix any line first. No Lightspeed POS alternative needed.",
  related: ["toast-pos-alternative","lavu-pos-alternative","touchbistro-alternative"],
  relatedHeading: "More systems a kitchen can keep",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A Lightspeed POS Alternative: Restock Without Calling</h1>
      <p class="lead mt-16">
        If a distributor's rep still gets your restock by phone, say it into the VoiceOrder Solutions app instead. Order from their order guide (the products you buy from them most, at your account's pricing), read over each line, and get a confirmation on your phone. It works only if your distributor has the app.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Check If My Distributor Offers It →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Supply orders only</span>
        <span class="hero-trust-dot"></span>
        <span>Your register stays on Lightspeed</span>
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
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved on each order, compared with calling it in to the rep</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">to order when the stock runs low, not when the rep picks up</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most kitchens start ordering, once the distributor adds them</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with Lightspeed alone.
     Guest ordering, stock from sales, emailed purchase orders, reorder points, receiving and
     Lightspeed AI are ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Stock Stays In Lightspeed</span>
      <h2>What happens to the call to your rep<br>when the distributor has the app?</h2>
      <p class="lead mt-16">
        Where a distributor is on our app, you get a restock you speak, a guide they load for you and each order confirmed on your phone. If supply ordering is why you are weighing a Lightspeed POS alternative, Lightspeed still keeps the POS, the stock and Lightspeed AI, and those ticks are its own.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Lightspeed + VoiceOrder Solutions</th>
            <th style="width:30%;">Lightspeed on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Guest orders at the table, by QR code and online</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Speak your supply list, then look over each item</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Stock that drops as dishes sell, with low stock alerts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Item list loaded by the distributor</td>
            <td>For distributors using our app</td>
            <td>A supplier list you set up</td>
          </tr>
          <tr>
            <td>Purchase orders emailed to any supplier</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A confirmation sent back to your phone</td>
            <td><span class="check-yes">✓</span></td>
            <td>None listed on their site</td>
          </tr>
          <tr>
            <td>Reorder points and recurring orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Receiving deliveries into stock, plus recipe costs</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Lightspeed AI for questions about sales and service</td>
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
      <h2>Why kitchens look for an alternative to Lightspeed POS</h2>
      <p class="lead mt-16">
        Lightspeed emails each purchase order to the address you saved for that supplier. When the search for a Lightspeed POS competitor starts, the cause is sometimes the supply order, not the register.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>When your rep works from the phone</h4>
        <p class="text-muted mt-12">
          Lightspeed can email purchase orders, but some distributors still work from the phone. For those, Lightspeed's own help articles, for its K-Series restaurant POS, tell you to create the order there and skip the email. Then you make the call as before.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📅</div>
        <h4>Pars say how much to order</h4>
        <p class="text-muted mt-12">
          Lightspeed shows stock and par levels as you build an order, and can repeat orders on a schedule. The items on it come from suppliers you set up in Lightspeed yourself.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">💬</div>
        <h4>Lightspeed AI is there for questions</h4>
        <p class="text-muted mt-12">
          Lightspeed AI takes questions on sales, servers, shifts and online-order results, and can set up a menu from a file. Supply orders are not among the topics it lists, so they still go out as an emailed purchase order or a call.
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
      <h2>Keep the stock tools, speak the restock: no Lightspeed POS alternative needed</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Speak your order after close</h3>
          <p class="mt-12 text-muted">
            When service ends and you can see what is short, open the app and say what you need from that distributor. What you say turns into lines you can read. Fix a quantity, remove a line, then send it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>You approve each line before anything is sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Open at any hour, even when the rep is not</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the phone you carry</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A table needs you mid-order? It waits, saved</span>
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
          <span class="eyebrow">Your Account's Guide</span>
          <h3>A guide the distributor sets up for you</h3>
          <p class="mt-12 text-muted">
            Your distributor loads the guide, with the prices on your account for each line, and can update it from their side, so there is no list for you to keep. Your supplier list in Lightspeed is not involved.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only what you normally order from them</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lines carry your account pricing</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No product list to type in first</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You still deal with the same rep</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Buying from more than one supplier →</a>
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
          <span class="eyebrow">Proof Of The Order</span>
          <h3>A number, a time and a confirmation</h3>
          <p class="mt-12 text-muted">
            An order sent in the app gets its own order number, with the date and time, and a confirmation comes back to your phone. If the truck shows up short, that number is what you give the rep.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The exact time you sent it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lands with the rep or their purchasing team</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A phoned-in order gets no number from us</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">Records of what each supplier confirmed →</a>
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
          <span class="eyebrow">On The Lightspeed Side</span>
          <h3>Lightspeed's stock tools carry on as before</h3>
          <p class="mt-12 text-muted">
            Tables, tickets, payments, online orders and the stock your dishes use all carry on in Lightspeed. None of that calls for a Lightspeed POS alternative, and your servers see nothing new.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Your servers' screens look the same</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Any pars and reorder points stay as you set them</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Alerts and reports work as they do now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No new hardware at the counter</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">Ordering next to the stock you track →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A spoken supply order<br>next to a POS<br>low stock alert
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
      <h2>From your distributor to your first order</h2>
      <p class="lead mt-16">
        Your distributor handles the account and the guide. You bring a phone.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Start with your distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Ask if they offer the app. If they do, they set up your account and add your guide. If you cannot find out, contact us.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Get the app and sign in</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Install it on your phone. Your guide is waiting when you log in.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Say it, read it, send it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Speak your list, look over the lines, and tap send.
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
            "I close out the register, see what we went through, and the produce order is sent before I lock up."
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
            "When the delivery is off, I give them the number from the app. No arguing over what I said on a call."
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
      <h2>Keep Lightspeed's stock right while you speak orders</h2>
      <p class="lead mt-16">
        This is not a Lightspeed POS replacement. Lightspeed keeps the register and the inventory. VoiceOrder Solutions takes over one job: the call you make to a distributor, once that distributor has our app.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Record it the way Lightspeed says for phoned orders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Lightspeed gets no copy of what you say in our app, so its stock misses that delivery until you add it. Make the order in Lightspeed with the email skipped, then receive the delivery into stock. In K-Series, you can also set that supplier to update stock levels only, so no email is offered.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔔</div>
        <h4>Let a low stock alert start the order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          When Lightspeed flags an item that distributor carries, add it when you next order from them in our app. The alert itself stays in Lightspeed.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Watch for recurring orders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If Lightspeed already emails that distributor a recurring order, keep that order or speak it in our app, not both, or the same goods could arrive twice.
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
      <h3 style="margin-bottom:10px;">See a supply order leave the phone and reach a distributor</h3>
      <p class="text-muted" style="font-size:16px;">
        In the 20-minute demo you see a made-up guide, an order read out with one line corrected, and what lands at the distributor.
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
      <h2>Questions from Lightspeed restaurants</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Should I look for a Lightspeed POS alternative just to place supply orders by talking?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Keep Lightspeed for the register, and keep its stock and purchasing tools too. If a distributor of yours offers our app, you can say what you need to them rather than call or email.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Lightspeed POS?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Each does a different job. We take no guest orders, run no tables, take no payments and track no stock. If phoning your rep is what sent you looking for a Lightspeed POS alternative, a distributor with our app means you can speak that restock instead.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and Lightspeed connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Each runs on its own, and neither support team covers the other. Anything you say in the app travels to your distributor, and Lightspeed never gets a copy.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do I need Lightspeed's inventory add-on to use this?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Our app works the same whatever Lightspeed plan you are on, with or without its inventory tools. On Lightspeed's pricing page, advanced inventory, which holds its purchase orders, is in some plans and sold as an add-on for the rest.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          If my supply order went through your app, does Lightspeed stock count the delivery?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not by itself. Record it in Lightspeed the way you handle orders you phone, then receive it when the delivery comes in. What you save is time on the phone with your rep; entering it there takes as long as it does after a call today. If anything is short, quote the number on your confirmation to your rep.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if I say romaine and the line shows iceberg?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Change it before you send. On the review screen, correct the item or the quantity, or delete the line. That review is the safeguard, so a quick glance can still let a mistake through. A call or a voicemail to the distributor gets no order number from us; only orders sent in the app do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The distributor opens your account with your guide in it, and most kitchens place a first order the same day. No app at your distributor yet? Then order from them as you always have, and get in touch with us: we will track down the right person to talk to. Since VoiceOrder Solutions reaches you through the distributor, ask them what it costs; we publish no price. Lightspeed lists prices for most of its plans.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Lightspeed details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          On 9 November 2026 we read lightspeedhq.com and the K-Series help center: the restaurant, inventory, pricing and AI pages, and the articles on purchase orders. Features differ between Lightspeed's restaurant products. On that date we found nothing there about ordering from suppliers by voice, and we do not repeat their customer numbers. If something here is no longer current, tell us and we will fix it.
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
  <h2>Low on stock at close? Say the restock and get a confirmation back.</h2>
  <p>Check with your distributor about VoiceOrder Solutions, or ask us and we will find out for you.</p>
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
        <li><a href="#comparison">Lightspeed + VoiceOrder Solutions</a></li>
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
