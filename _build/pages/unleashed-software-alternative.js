/* Comparison page: Unleashed Software, and Unleashed with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 wave 2 (inventory systems; Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Unleashed,
 * never its replacement. Table = "Unleashed + VoiceOrder Solutions" vs "Unleashed on its own"; every
 * Unleashed strength is a tick in both columns. They are separate products with no built-in link
 * (FAQ 5); whether an Unleashed setup takes our EDI or API orders directly is a demo question.
 * Naming: the company calls itself "Unleashed"; the keyword is "unleashed software", so the brand is
 * written "Unleashed Software" wherever a keyword phrase sits and "Unleashed" elsewhere. The word
 * "unleashed" is never used as ordinary English on this page.
 * Angle (Unleashed-specific, from its own help centre): Unleashed RETIRED its mobile sales app in May
 * 2024 and moved order processing into the B2B Store so "sales teams on the road" can "process orders
 * on a customer's behalf". So in an Unleashed shop, any order a customer does not type into the store
 * is entered by your people: a rep at the store checkout, or the desk. VoiceOrder Solutions hands that
 * entry back to the chef (spoken in our app, checked line by line), and the rep's time goes to selling
 * (KB: "Free Your Sales Reps to Sell"). H1 "Reps Sell, Chefs Order".
 * Distinct from: Acumatica (kitchens skipping the portal: we never argue who uses the B2B Store),
 * Pepperi (orders between visits / repeat orders), Prophet 21 (inside sales on the phone), NetSuite
 * (another module), Syspro (orders in writing; food page = plant floor), Odoo (what is short today).
 * ⚠ The B2B Store takes orders after hours, shows live stock and takes card payments: never give
 *   VoiceOrder Solutions a win on 24/7, stock visibility or payments against Unleashed.
 * ⚠ Unleashed's CRM already sends missing-order alerts: conceded (table row 9, coexistence card 3).
 * ⚠ Other companies already sell order capture for Unleashed (an app in Unleashed's own integration
 *   marketplace that reads emailed orders with AI; another that reads email, text and voicemail
 *   orders). FAQ 4 concedes it without naming them; never "the only voice option for Unleashed".
 * ⚠ Unleashed PUBLISHES prices (plans, add-ons, onboarding packages): conceded in the cost FAQ, no
 *   figure on the page, no pricing row in the table.
 * ⚠ Its Access Evo AI serves staff; that argument is reserved for sage-x3 and prophet-21, so it is
 *   not used here.
  * Every claim is sourced and dated in _build/research/competitors/unleashed.md.
 * Review 2026-11-09 (wave 2 FIXES2 T1-T7 + page items): rep route scoped to "store checkout or a sales
 *   order"; problem lead says EDI orders skip reps and states the desk-retyping rule once (T2); pallet/units
 *   row dropped (KB Q14) for a visit-selling row; catalog-follows-stock bullet removed (T1); prices said
 *   once, in coexistence card 1 (T3); "line" -> "item" for order items; mid/final CTAs carry the angle.
 */
module.exports = {
  title: "Not an Unleashed Software Alternative: Add Voice Ordering",
  description: 'Unleashed keeps your stock and B2B Store. Chefs say each order in our app and check it, so reps write up fewer orders. Not an Unleashed Software alternative.',
  related: ["pepperi-alternative","prophet-21-alternative","odoo-alternative"],
  relatedHeading: "Other systems that keep running while chefs speak their orders",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An Unleashed Software Alternative: Reps Sell, Chefs Order</h1>
      <p class="lead mt-16">
        Give your sales reps fewer orders to write up and more time to sell. With VoiceOrder Solutions, chefs say what they need in our app, check each item and fix anything before sending it to you. Stock, price tiers and the B2B Store stay with Unleashed.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare Side By Side</a>
      </div>

      <div class="hero-trust">
        <span>Reps get time back to sell</span>
        <span class="hero-trust-dot"></span>
        <span>Chefs approve each item</span>
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
      <div class="stat-label">Saved on each order spoken in the app, not phoned in</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">To get most distributors set up and taking orders</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is when most chefs send a first order from the app</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Unleashed takes six of nine rows in both columns. The three that differ are about who enters
     the order and how: the chef by voice in an app, or one of your people at a keyboard.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Chef Or Rep</span>
      <h2>Unleashed plus VoiceOrder Solutions.<br>The chef places it, not the rep.</h2>
      <p class="lead mt-16">
        Chefs at your accounts can put their own orders in by speaking, so a rep no longer has to type them. Unleashed covers the stock side, and its optional B2B Store takes orders from customers who shop there. Since Unleashed stopped supporting its rep ordering app in 2024, a rep who takes an order for a customer enters it at the store checkout or keys it in as an Unleashed sales order. This is not an Unleashed Software alternative: each is its own product, with no built-in connection.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Unleashed + VoiceOrder Solutions</th>
            <th style="width:30%;">Unleashed on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock levels across unlimited warehouses</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who skips the store still orders on their own</td>
            <td><span class="check-yes">✓</span></td>
            <td>Phoned or texted to a rep or your desk</td>
          </tr>
          <tr>
            <td>Batch tracking with expiry dates</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Customer price tiers, kept in Unleashed</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders spoken aloud, then checked one item at a time</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed into the store or a sales order</td>
          </tr>
          <tr>
            <td>Reps can spend the visit selling when chefs order in the app</td>
            <td><span class="check-yes">✓</span></td>
            <td>If an order is given on a visit, the rep enters it</td>
          </tr>
          <tr>
            <td>B2B Store add-on with reorders, favorites and card payments</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An ordering app chefs install on iOS or Android</td>
            <td><span class="check-yes">✓</span></td>
            <td>A mobile-friendly web store</td>
          </tr>
          <tr>
            <td>Alerts when an account misses its usual order (CRM add-on)</td>
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
      <span class="eyebrow">Why People Compare</span>
      <h2>When an alternative to Unleashed Software comes up</h2>
      <p class="lead mt-16">
        An Unleashed Software competitor is rarely what a distributor needs when the real goal is getting reps' time back. With Unleashed on its own, an order that does not come through the store or a customer's EDI is usually entered by one of your people. With our app added, email orders still need typing up by your staff, but each item on them was approved by the chef. An order through EDI or our API might skip the typing entirely, and the demo is where we check that with you.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📱</div>
        <h4>Its sales app was retired in 2024</h4>
        <p class="text-muted mt-12">
          Unleashed ended support for its mobile sales app in May 2024 and moved order processing into its online store, so reps on the road can order for a customer there or enter the sales order themselves. Either way, a rep does the entering.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔔</div>
        <h4>A missing-order alert ends in a conversation</h4>
        <p class="text-muted mt-12">
          Unleashed's CRM can flag an account that has not ordered at its usual pace. When a rep follows up and the chef orders right there, on a visit or over the phone, the rep or your office writes it up.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">💬</div>
        <h4>A chef's text to the rep is still an order someone types up</h4>
        <p class="text-muted mt-12">
          Unleashed's own B2B page asks whether manual orders over email and phone are wasting your hours, and offers the store as the fix. A chef who would rather text a list to their rep than shop online still leaves it for your team to enter.
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
      <h2>Not an Unleashed Software alternative: what changes for your reps</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Chefs talk through the order, then fix any item</h3>
          <p class="mt-12 text-muted">
            The chef taps Push to Speak and lists what the kitchen needs. Our app matches what was said to items in the guide for that account. The chef fixes any item that is off, then sends it, so no rep has to write it down.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Open for orders at any hour, weekends included</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A half-finished order is saved if the chef gets called away</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the iPhone or Android phone the chef already carries</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How order capture works →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Push to Speak,<br>then the item-by-item<br>review screen
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Sales Reps</span>
          <h3>Rep visits go to selling, not writing up orders</h3>
          <p class="mt-12 text-muted">
            Once the chef is sending orders on their own, the rep's time with that account can go to new products, specials and fixing problems. Unleashed's mobile view still gives the rep stock and order history to sell from. Our app sends each order to you directly, so the rep does not have to pass it on.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer late-night texts asking a rep to put an order in</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each app order carries its own number and the time it was sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders still arrive when the rep is off or on vacation</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing new for reps to learn inside Unleashed</span>
            </li>
          </ul>
          <a href="/distributor-sales-software" class="feature-link">More on freeing up reps →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Admin platform list<br>of orders sent by<br>chefs, with times
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Delivery Formats</span>
          <h3>Sent orders reach your team in a format you choose</h3>
          <p class="mt-12 text-muted">
            Choose how each order gets to you: email, EDI, our API or QuickBooks, though one delivered to QuickBooks lands in your accounting, not in Unleashed. Whether Unleashed can take the EDI or API version as it arrives depends on your setup, which a demo can confirm.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Emailed to a rep, to your desk, or both</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Emailed as a PDF, Excel or Word file, whichever your desk prefers</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking and dispatch carry on in Unleashed</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">What an order looks like →</a>
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
          <h3>Stock you can see beside the day's orders</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts stay in Unleashed, and a demo covers how levels would reach the app</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for your team and your reps</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Unleashed still tracks batches, expiry dates and low-stock alerts</span>
            </li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">More on stock visibility →</a>
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
      <h2>Three steps, and Unleashed stays as it is</h2>
      <p class="lead mt-16">
        Setting up needs no Unleashed login and installs nothing in it: we work from a spreadsheet you export. If you later want orders loaded through EDI or the API, the demo covers what that needs on your side.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send us an account export</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An export from Unleashed of each account's usual items and prices is usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up your accounts' guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We build every account's guide under your item codes and open the account. The chef downloads the app, and most kitchens are ordering in it the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Chefs place their own orders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each order arrives checked by the chef, numbered, timed and in the format you chose, with no rep in between.
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
      <h2>What changes for the sales team</h2>
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
            "Our reps spent their evenings turning chefs' texts into orders. Now many of those chefs send the order themselves."
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
            "Visits used to start with taking the order down. Now our reps walk in and talk about new products."
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
      <h2>What Unleashed keeps, and what the chef takes over</h2>
      <p class="lead mt-16">
        We add VoiceOrder Solutions next to Unleashed rather than offering an Unleashed Software alternative, so your account runs exactly as it does today. The one change is that chefs who used to hand their order to a rep can now enter it themselves.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Unleashed still holds stock, customers and invoices</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your Unleashed account keeps customers, stock, batches and invoices. We store the guide for each customer and the orders they send from our app. You keep each guide's prices current in our admin; whether they can update from Unleashed is a question for the demo.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>B2B Store shoppers can keep shopping</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts that enjoy shopping in Unleashed's B2B Store, with its payments and reorders, can carry on there. Our app serves the chefs who would rather not browse a store at all.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔔</div>
        <h4>Missing-order alerts still do their job</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If you run Unleashed's CRM, keep its alerts for accounts that go quiet. What changes is the answer: the chef can respond by ordering in our app, not by dictating to a rep.
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
      <h3 style="margin-bottom:10px;">See a chef's order arrive with no rep in the middle</h3>
      <p class="text-muted" style="font-size:16px;">
        In the demo we run one order from a chef's phone to your team, in the format you would use, and talk through how your Unleashed setup would take it in.
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
      <h2>Asked by distributors running Unleashed</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need an Unleashed Software alternative to let chefs voice their orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Unleashed carries on handling your stock, pricing and B2B Store. What changes is who enters the order: the chef dictates it in our app, reviews each item and hits send, instead of passing it to a rep.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Unleashed Software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For one job, yes: getting each order straight from the chef, so your reps can sell. Stock, batches, purchasing and invoicing are Unleashed's work, which is why we would not call ourselves an Unleashed Software alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Unleashed has a B2B Store already. What does an app add?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Unleashed's store suits customers who like to browse, check stock, pay by card and reorder, and you can keep it. Since 2024 it has also been one place reps enter orders for the accounts they visit. Our app is for the chef who finds talking quicker than typing, so the order does not have to go through the rep.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can't other tools already bring orders into Unleashed?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. An app listed in Unleashed's own integration marketplace uses AI to turn emailed order files, PDFs and spreadsheets into sales orders. Other companies also sell tools that read orders arriving by email, text or voicemail. Those work on something the customer has already sent, or give the customer an app to type into. With ours, the chef speaks the order and looks over each item before it goes, so it reaches you without a rep writing it up.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is there a link between Unleashed and VoiceOrder Solutions?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not directly. We and Unleashed are different companies; neither has built a link to the other, and each supports only its own product. If your account accepts files by EDI or through the API, an order can load into Unleashed with no retyping; we confirm that in the demo. By email, it arrives with an attachment listing every item the chef approved, so your staff key it in from that list instead of a rep's notes or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will our reps still take orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          If a customer wants that, yes: a rep can still put one through the store or key it in for them, and some chefs will keep calling. Fewer chefs lean on a rep once they can order on their own. Phoned orders get no number from us, while each order sent through the app gets its own number and time.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does it cost, and how soon can we start?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          In most cases a distributor is ready in 24 to 48 hours, since nothing inside Unleashed has to change. Unleashed publishes prices for its plans, add-ons and onboarding; we quote per distributor. An Unleashed Software replacement would mean moving your stock records, batches and customers somewhere new. Our app changes how chefs send orders, and that is all it touches.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Unleashed details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From unleashedsoftware.com and Unleashed's help center, as we found them on 9 November 2026: the pricing, B2B Store, sales order, CRM, AI, mobile app, onboarding, wholesale and distribution pages, plus the help article on the retired sales app. The other ordering tools turned up in a search for ones offered to Unleashed users. Spot something out of date? Write to us and we will update the page.
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
  <h2>Let reps sell while chefs send their own orders</h2>
  <p>Give us twenty minutes and we will trace one order from the kitchen to your team, sent by the chef rather than written up by a rep.</p>

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
        <li><a href="#features">Sales Reps</a></li>
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
        <li><a href="#comparison">Unleashed + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/dsd-sales-software">DSD Sales</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
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
