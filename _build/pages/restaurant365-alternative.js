/* Comparison page: Restaurant365, and Restaurant365 with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT (owner, or its
 * finance or purchasing lead). VoiceOrder Solutions comes through the restaurant's distributor, and
 * only reaches distributors that offer it. Same frame as the MarginEdge pilot: keep Restaurant365,
 * add VoiceOrder Solutions beside it for one job. The two products do NOT connect (FAQ 3). Never
 * imply an integration, a sync or an "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: Restaurant365 is the back office (their own word) that already PLANS the order and keeps
 * the books on it. VoiceOrder Solutions is only the moment the kitchen PLACES the order, by voice,
 * with a distributor that offers the app.
 * ⚠ TRAPS (all in _build/research/competitors/restaurant365.md):
 *   1. R365 already builds the order: pars, "Suggest Qty" from usage and forecast sales, AI-driven
 *      purchase orders, templates, multi-vendor orders, a mobile app. Never claim VOS picks better
 *      quantities; "suggested quantities" is a tick in BOTH columns (row 5).
 *   2. R365 sends POs by EDI to select large distributors and by email to any vendor with an email
 *      on file. The vendor does not have to join anything. Conceded in row 7 and FAQ 5.
 *   3. R365 POs carry numbers and statuses, so "a number on every order" is NOT a win here. The
 *      differing rows are: the order is spoken and checked (2), the guide is kept by the distributor
 *      (4), the confirmation comes back to your phone (6, "Not listed on their site").
 *   4. AI is everywhere on their site (AI POs, AI Dashboards answering typed prompts). No voice found.
 *      Never "no AI", never "they type, we speak". Row 2's cell lists how an R365 order IS built.
 *   5. A spoken order never becomes an R365 purchase order, so it skips their receiving and PO
 *      matching for that distributor. Said plainly in FAQ 4 as a trade-off.
 *   6. Implementation is "a few weeks" (an accounting rollout). Never called slow; no setup row.
 *   7. Pricing is quote-only on their site (parity). Third-party figures are NOT used.
 * Their customer counts, partner counts and savings figures are never repeated.
 */
module.exports = {
  title: "Not a Restaurant365 Alternative: Keep It, Add Voice Ordering",
  description: 'Keep Restaurant365 for your books and counts, and speak the next order to a distributor that offers VoiceOrder Solutions. No Restaurant365 alternative needed.',
  related: ["marketman-alternative","craftable-alternative","orderly-alternative"],
  relatedHeading: "Other back offices that sit beside us",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A Restaurant365 Alternative: Say Your Orders Aloud</h1>
      <p class="lead mt-16">
        Read your order aloud into the VoiceOrder Solutions app, fix any line that looks wrong, and send it to your distributor at any hour, if they offer the app. Your distributor loads the products you buy, at your prices. Restaurant365 still does your accounting and stock counts.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VoiceOrder Solutions →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Your distributor does the setup</span>
        <span class="hero-trust-dot"></span>
        <span>Restaurant365 left as is</span>
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
      <div class="stat-label">is when most restaurants begin sending orders in the app</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved per app order versus calling the rep</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">ordering, whenever the kitchen is ready</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with Restaurant365
     alone. Accounting, inventory and food cost, suggested quantities, sending to any vendor,
     scheduling and payroll, and a mobile ordering app are ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Restaurant365, Plus One Step</span>
      <h2>Restaurant365 does the books and stock.<br>Add one thing: ordering from your distributor by voice.</h2>
      <p class="lead mt-16">
        Voice ordering is the single change in this table. One column is your restaurant on Restaurant365 alone; the other includes our app for distributors of yours that have it. Restaurant365 already handles your accounting, tracks your stock and sends purchase orders, so a Restaurant365 alternative would replace far more than the order. The two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Restaurant365 + VoiceOrder Solutions</th>
            <th style="width:30%;">Restaurant365 on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accounting, AP and financial reports</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Speak the order, then check each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed, scanned or filled to par</td>
          </tr>
          <tr>
            <td>Inventory counts, recipes and food cost</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Item list and prices kept by your distributor</td>
            <td><span class="check-yes">✓</span></td>
            <td>Your own templates, or guides from listed vendors</td>
          </tr>
          <tr>
            <td>Suggested quantities from pars and forecast sales</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A confirmation back on your phone</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Purchase orders to any vendor by EDI or email</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Scheduling, payroll and HR</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A mobile app for placing orders</td>
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
      <h2>What sends operators looking for an alternative to Restaurant365</h2>
      <p class="lead mt-16">
        A search for a Restaurant365 competitor is rarely about the books. Restaurant365 holds accounting, inventory and labor in one place, and it does that job. The question tends to be smaller: how each order actually gets to your distributor.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🗂️</div>
        <h4>It is your entire back office</h4>
        <p class="text-muted mt-12">
          Restaurant365 puts accounting, inventory, scheduling and payroll in one system. Leaving it means moving all of that, which is a big project to change how one task gets done.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📋</div>
        <h4>The order is already planned</h4>
        <p class="text-muted mt-12">
          Restaurant365 suggests amounts from past usage and expected sales, fills to par, and its AI can draft purchase orders. What is left is placing it: you add items by typing, barcode scanning or a template, then it goes out by email or EDI.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📲</div>
        <h4>Your distributor may hand you an app</h4>
        <p class="text-muted mt-12">
          Some suppliers already equip their restaurant accounts with our app, set up with every product the kitchen orders and the price agreed for it. If one of yours does, that order can be spoken, with no change at all to Restaurant365.
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
      <span class="eyebrow">What It Adds</span>
      <h2>What the app adds, and what it leaves alone</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Speak it, read it over, send it</h3>
          <p class="mt-12 text-muted">
            Pull up the app at the prep table or in the walk-in and say what you need. Each item shows up as a line from your guide with that distributor. Change an amount or delete a line, then send. Nothing is sent until you have checked it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>You see every line and can fix it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Send it at any hour, with the rep's office closed</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the phone in your pocket</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Called away halfway? It keeps your spot</span>
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
          <span class="eyebrow">Your Order Guide</span>
          <h3>The guide comes from your distributor</h3>
          <p class="mt-12 text-muted">
            The list is built by your distributor: the products you order from them, at your account's prices, under their item codes. They keep it up to date, so there is no order template for that vendor for you to maintain.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only the items you normally buy, not their full catalog</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Priced for your account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Changed on their side when products change</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The same rep and the same terms</span>
            </li>
          </ul>
          <a href="/restaurant-checklist-software" class="feature-link">Ordering the same way on every shift →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Your guide from<br>one distributor,<br>at your account prices
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Confirmation</span>
          <h3>Word back on your phone</h3>
          <p class="mt-12 text-muted">
            Anything you send from the app is numbered and timestamped, and a confirmation reaches you by notification or text. If something arrives short, the order number on your confirmation is there to point to.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Its own order number and send time</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed by text or a phone notification</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Shows who placed it, and when</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A call or voicemail to the rep gets none of this</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">What each supplier confirmed →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A sent order with<br>its number and<br>the confirmation
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 4 -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Your Back Office</span>
          <h3>Your books and counts stay in Restaurant365</h3>
          <p class="mt-12 text-muted">
            The delivery still comes with an invoice, and it reaches Restaurant365 the same as your other invoices. Costs, counts and reports carry on as before.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Invoices go in the way they do today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pars and recipes do not move</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You order from every other vendor as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No data passes between the two</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">How ordering fits with your stock →</a>
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
      <h2>Your distributor handles most of the setup</h2>
      <p class="lead mt-16">
        You install nothing on a computer, and Restaurant365 is not touched.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask which suppliers have it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they offer VoiceOrder Solutions, they open an account for you and add your order guide. Not sure who to ask? Send us a note and we will put you in touch.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Add the app to your phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Log in on your phone. Your guide is there when you open it.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Say the order, look it over</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Speak the items, look over each line, and send. Then the confirmation arrives.
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
      <h2>From the kitchens that order this way</h2>
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
            "Our costs and counts live where they always did. Getting the order out is just quicker."
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
            "I talk through the order as I walk out of the cooler, and the confirmation shows up on my phone."
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
      <span class="eyebrow">Side By Side</span>
      <h2>Restaurant365 for the books, VoiceOrder Solutions for the spoken order</h2>
      <p class="lead mt-16">
        This is not a Restaurant365 replacement. Restaurant365 keeps the accounting, the inventory and the POs for your other vendors. We take on a single task, through the distributors who have us: saying the order and checking it before it goes. If a quicker order was why you searched for a Restaurant365 alternative, that is the part we cover.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📧</div>
        <h4>Other vendors still get POs</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Any vendor not on our app gets its POs from Restaurant365 exactly as now. It only reaches the suppliers who gave you access.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>The invoice still reaches your books</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Since the two do not connect, that order is not in Restaurant365. Its invoice is, once it comes in the usual way, so that spend is still counted.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧪</div>
        <h4>Try it with one distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Nothing in Restaurant365 needs to change. Start with whichever distributor gave you the app and see how a week of orders goes.
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
      <h3 style="margin-bottom:10px;">See what the distributor gets when an order is spoken</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute demo: a sample restaurant guide, one order dictated and checked, and the version that reaches the distributor. Restaurant365 plays no part in it.
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
      <h2>Questions about a Restaurant365 alternative</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a Restaurant365 alternative to use voice ordering?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Restaurant365 already plans your orders and sends them to your vendors. When a distributor of yours runs our app, you can give that order aloud, and Restaurant365 keeps running the rest.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Restaurant365?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at bookkeeping, stock counts, staff schedules or payroll: we do none of those. We do one smaller job: an order you say to your distributor, with every item confirmed by you before sending. If that one job is what sent you searching for a Restaurant365 alternative, adding it may be all you need.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and Restaurant365 connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. They are not linked in any way, and each company supports only its own product. Only your distributor receives what you say. Restaurant365 does not see that order. It sees the invoice, as it does for any delivery.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens to purchase orders and receiving?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing you dictate in our app becomes a Restaurant365 purchase order. So for that distributor there is no PO in Restaurant365 to receive the delivery against or to match the invoice to. If your team checks every delivery against a PO, weigh that trade before you move one distributor's orders to voice.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I order from all my suppliers this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only from distributors that give you our app. Restaurant365 can email a PO to any vendor with an address on file, and send to several large distributors by EDI. We cannot. Carry on with it for everyone else, and ask your other distributors if they have it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if the app gets an item wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You see each line before it is sent, so that is where you fix it: change the item or the amount, or remove it. That review is the safeguard, so a quick glance can still miss a mistake. Also, an order you phone in or leave on voicemail gets no order number from us. Only orders sent in the app do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor, who creates your account and sets up your guide. Most restaurants are ordering in the app that same day. Ask them about cost too, since they are the ones who provide the app. Neither Restaurant365 nor we publish prices, and your Restaurant365 plan stays as it is. Not sure whether yours has it? Contact us and we will connect you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Restaurant365 details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Taken from restaurant365.com and its public help docs on 27 October 2026: the product pages, their pricing page and the guides on creating and sending purchase orders. Their customer counts and savings figures are theirs and are left out here. Anything outdated here is our mistake to fix.
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
  <h2>Keep Restaurant365, and say your next order</h2>
  <p>Check with your distributor or with us, and see how ordering by voice would work for your kitchen.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Setup done by your distributor</span>
    <span>✓ Prices from your account</span>
    <span>✓ Restaurant365 untouched</span>
    <span>✓ Runs on iOS and Android</span>
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
        <li><a href="#features">Confirmations</a></li>
        <li><a href="#how-it-works">Getting Started</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">Restaurant365 + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/supplier-management-software">Supplier Management</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
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
