/* Comparison page: Odoo, and Odoo with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Odoo,
 * never its replacement. Table = "Odoo + VoiceOrder Solutions" vs "Odoo on its own"; every Odoo
 * strength is a tick in both columns. The two do NOT connect (FAQ 5); whether an Odoo database
 * takes our formats in directly is a demo question, never a claim.
 * Angle, distinct from NECS Entree ("typed vs spoken, inside vs beside") and NetSuite ("where the
 * order ends up vs where it starts"): Odoo answers every new need with ANOTHER APP in the same
 * database ("There is an app for that"). For the kitchen that still phones, Odoo's own next app is
 * an invitation-only web shop and portal the kitchen has to sign in to. VoiceOrder Solutions is the
 * one piece NOT installed into Odoo: nothing is added to the database, and kitchens need no login.
 * ⚠ Odoo HAS customer ordering: B2B shop "On invitation", per-customer pricelists, "Order Again" in
 *   the portal, quick reorder from the cart (Odoo 19). The difference is signing in and typing.
 * ⚠ Odoo HAS voice and AI: Odoo 19 dictation and meeting transcription, AI agents, a livechat AI
 *   agent. All of it serves the people logged in to Odoo. Never "Odoo has no voice / no AI".
 * ⚠ Third-party add-ons already sell voice ordering for Odoo (an AI phone agent) and emailed-order
 *   readers. FAQ 4 concedes it without naming them; never "the only voice option for Odoo".
 * ⚠ Odoo PUBLISHES its prices, and portal (customer) users are not paid seats. Conceded in the cost
 *   FAQ; no figure on the page, and no cost-per-login argument.
 * ⚠ Odoo does barcode scanning, lots, expiry and replenishment rules: conceded in the table.
 * ⚠ Odoo serves small companies and food distributors: never "too big" or "not for food".
 * Every claim is sourced and dated in _build/research/competitors/odoo.md.
 * Review 2026-11-09 (wave-1 FIXES S1-S10 + odoo section): angle sharpened to "Order Again refills a
 *   past order; the chef says what is short today" (H1, hero, table row 4, problem card 3, FAQs 2-3).
 *   The two products have no built-in link (never "do not connect": the stock sentence says the levels
 *   connect). FAQ 5 spells out EDI/API (lands without retyping IF their Odoo takes it, demo confirms)
 *   vs email (a file the chef already checked, still keyed in by the desk). Login/module claims are
 *   scoped to setup (FAQ 6). Records card: Odoo keeps customers/stock/billing; we keep each guide, its
 *   prices and the orders sent in the app. "Odoo replacement" lives only in the cost FAQ. AI-for-staff
 *   card dropped (sage-x3 and prophet-21 own it); FAQ 4 keeps the phone-bot contrast.
 */
module.exports = {
  title: "Not an Odoo Alternative: Keep Odoo, Add Voice Ordering",
  description: 'Chefs say what ran short today into an app and look over every item before it is sent to you. Not an Odoo alternative: Odoo keeps your books, stock and shop.',
  related: ["netsuite-alternative","necs-entree-alternative","orderease-alternative"],
  relatedHeading: "Other platforms you keep while kitchens start speaking orders",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An Odoo Alternative: Chefs Say Today's Shortages</h1>
      <p class="lead mt-16">
        Get each kitchen's order the way the chef says it, checked by the chef in the VoiceOrder Solutions app before it is sent. Odoo's Order Again refills a cart from a past order; our app starts from what ran short today. Odoo carries on running your accounting, stock and online shop.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Your Odoo apps stay put</span>
        <span class="hero-trust-dot"></span>
        <span>No Odoo login for kitchens</span>
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
      <div class="stat-label">Saved per spoken order versus a call</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Ordering window, nights and Sundays included</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Until most distributors are taking orders</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Odoo is a full ERP and takes five of nine rows in both columns. The four rows that
     differ are about how a kitchen's order reaches you (row order alternates, no negative cells).
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">One Step Added</span>
      <h2>Odoo plus VoiceOrder Solutions.<br>Every Odoo app stays installed.</h2>
      <p class="lead mt-16">
        Rather than calling you, kitchens can use their voice in our app, and every app you already use stays where it is. If you searched for an Odoo alternative, know that we are not another ERP to move to. Invoices, stock and your online shop are covered in both columns. The rows where the columns part ways are about how an order gets from the kitchen to you. The two stay separate products, each with its own job.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Odoo + VoiceOrder Solutions</th>
            <th style="width:30%;">Odoo on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lot numbers, expiry dates and traceability</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Chefs speak what they need, then correct each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Signed in to your shop, then typed</td>
          </tr>
          <tr>
            <td>Accounting, invoicing and online payments</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Ordering what is short now, by voice</td>
            <td><span class="check-yes">✓</span></td>
            <td>Searched and typed in the shop, or copied with Order Again</td>
          </tr>
          <tr>
            <td>Order Again for repeat orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A kitchen that used to call you sends an order with a number</td>
            <td><span class="check-yes">✓</span></td>
            <td>Your staff enter the call in Sales</td>
          </tr>
          <tr>
            <td>A pricelist for each customer</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Customer ordering set up from your order guides</td>
            <td><span class="check-yes">✓</span></td>
            <td>Set up in Odoo's eCommerce app</td>
          </tr>
          <tr>
            <td>Replenishment rules and barcode scanning</td>
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
      <span class="eyebrow">Why Distributors Compare</span>
      <h2>Why some distributors start looking at an Odoo competitor</h2>
      <p class="lead mt-16">
        Not every distributor who searches for an Odoo alternative wants to leave it. In Odoo, each new need gets another app, and for kitchens used to phoning you, that app is a web shop to sign in to. Here are three reasons the phone stays busy anyway.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Odoo Sales starts after someone types the call</h4>
        <p class="text-muted mt-12">
          Odoo handles every step once a quotation exists. Before that, a chef calls at 6 a.m., texts a photo or leaves a message, and someone in your office enters it in Odoo Sales one line at a time.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔐</div>
        <h4>A shop login suits some kitchens</h4>
        <p class="text-muted mt-12">
          Odoo's shop can be set to invitation only, with each customer's pricelist and an Order Again button. Kitchens that sign in use it well. The ones that never set a password keep calling.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔁</div>
        <h4>Order Again copies what was bought before</h4>
        <p class="text-muted mt-12">
          Odoo's portal can refill the cart from a previous order, and the chef then adjusts each quantity. When what ran out this week is not what ran out last week, a call can feel quicker than editing old quantities.
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
      <h2>No Odoo alternative needed: here is what we add</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The chef names what ran out, then checks the list</h3>
          <p class="mt-12 text-muted">
            The chef opens our app and says what is running low. It lists those items from that kitchen's own guide, they fix anything that looks wrong, and they send it. No shop password, no search bar, no time on hold.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The kitchen approves each line before it leaves the phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Open for orders after your office has closed for the night</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the iPhone or Android phone the chef already owns</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A half-built order waits if the chef gets pulled away</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How kitchens send orders →</a>
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
          <h3>One spreadsheet becomes each account's guide</h3>
          <p class="mt-12 text-muted">
            Export what each customer buys out of Odoo into a spreadsheet. We turn those rows into one guide for every customer, under your own codes and at the price you set for them. Odoo keeps the full product list; each guide holds just the lines that kitchen buys.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A kitchen sees only the items in its own guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You choose the price and the lines in each guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Update a guide and the kitchen's next order comes from it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each account and its order history, kept in one place</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">How guides stay up to date →</a>
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
          <h3>Pick how each order lands with your team</h3>
          <p class="mt-12 text-muted">
            A finished order can reach you as an email with a PDF, Excel or Word file, over EDI, through the API, or into QuickBooks. Which one fits how you run Odoo is something we work out with you in the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Goes to one rep or to a shared orders inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, delivery and invoices run in Odoo as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Keep taking orders in the online shop too</span>
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
          <h3>How much is left, next to what was ordered</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity, and the catalog updates as stock changes. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock for your catalog in one view, tied to orders</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises after a big Friday order</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lots, expiry and scanning stay with Odoo Inventory</span>
            </li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">How stock visibility works →</a>
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
      <h2>One Odoo export, then the first spoken order</h2>
      <p class="lead mt-16">
        You send a file, we set up the accounts, and the kitchens begin ordering.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Pull each account's items out of Odoo</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet from Odoo is usually all we need: the items each customer takes and the price, under your codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Each kitchen gets its guide and the app</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load the guides and open the accounts; the kitchen downloads the app. Most place a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Your desk receives the kitchen's checked order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one comes in checked by the customer, with a number and the time it was sent, in the format you picked.
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
      <h2>In the words of the order desk</h2>
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
            "Chefs phoned us because last week's order never matched this week's. Now they say what ran out and check it before it reaches us."
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
            "The early-morning calls have slowed down. Kitchens send what they need when they notice it, even after we close."
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
      <span class="eyebrow">Working Next To Odoo</span>
      <h2>Which jobs Odoo keeps, and the one we take on</h2>
      <p class="lead mt-16">
        This is not an alternative to Odoo, and it is not one more Odoo app either: nothing of ours is installed in your database. We handle the order a kitchen says aloud; Odoo runs the sale, the stock and the invoice from there.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🗄️</div>
        <h4>Odoo is still where your records live</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your customer list, stock and billing stay in Odoo. We keep the guide for every kitchen, at prices you update in our admin platform, along with every order placed through our app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛍️</div>
        <h4>Kitchens on the Odoo shop can stay on it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If some accounts already use Order Again in your Odoo shop, leave them be. Save our app for the accounts whose chefs still reach for the phone to order. A call to your office gets no number from us; every order spoken in our app is numbered.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💳</div>
        <h4>Billing stays with Odoo</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Quotes, invoices and any online payment you take remain in Odoo and its customer portal. We take the kitchen's order; the bill still comes from Odoo.
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
      <h3 style="margin-bottom:10px;">Watch us talk an order into the app, then ask how it would reach Odoo</h3>
      <p class="text-muted" style="font-size:16px;">
        It is a twenty-minute call: we fix one item before sending, and then go over which delivery format would suit you.
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
      <h2>Questions Odoo users ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Would an Odoo alternative fix the phone orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Another ERP would still get the same calls, because they come from chefs who would rather not sign in and type. Give those accounts our app to say what they need, and keep every other part of Odoo as it is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Odoo?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only at one job: collecting what a kitchen ran short of today, spoken by the chef and checked before it reaches you. Outside that, Odoo does far more, so we run next to it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Odoo already lets customers reorder. Why add this?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It does. An invitation-only shop shows each customer its own pricelist, and Order Again in the portal copies an older order into the cart. Both mean signing in first, then searching or editing quantities. Ours begins with whatever the chef notices is missing today.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Are there voice ordering tools for Odoo already?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Add-ons in Odoo's app store can have an AI answer a customer's phone call and build the sale, and other tools read emailed orders. On a call to a phone bot, there is no list on screen to look over while ordering. In our app, the chef sees every line and fixes it before sending.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Are Odoo and VoiceOrder Solutions linked?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Neither product comes with a link to the other, and each of the two companies supports only its own software. Orders that come through EDI or the API can land in Odoo without anyone typing them again, if your Odoo is set up to accept them that way; we confirm that in the demo. An order that goes by email shows up as an attached file the chef has already gone over, and someone on your team keys it in from that rather than from a call or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we have to install anything in Odoo?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not to get started. Our setup asks for no access to your Odoo account and adds no module: we start from a file you pull out of Odoo. If, later on, you would like orders to arrive over EDI or the API, we walk through what your side would need during the demo.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does it take, and how does pricing compare?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Going live takes 24 to 48 hours for most distributors. Odoo puts its prices on its website; we do not, and quote per distributor instead. Moving to an Odoo alternative means a full Odoo replacement: every app, record and habit at once. Adding us leaves all of them where they are.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Odoo details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From odoo.com, Odoo's own documentation and its app store, checked on 9 November 2026: the food distribution page, the eCommerce and B2B setup guides, the Odoo 19 release notes, the page listing their plans and the add-ons sold for Odoo. We leave their prices and figures off this page. If any of it no longer matches Odoo today, tell us and we will fix it.
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
  <h2>Keep Odoo, and let each chef say today's order in their own words</h2>
  <p>Twenty minutes, one order spoken and sent, and a straight answer on how it would reach you.</p>

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
        <li><a href="#comparison">Odoo + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
        <li><a href="/distribution-workflow-software">Distribution Workflow</a></li>
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
