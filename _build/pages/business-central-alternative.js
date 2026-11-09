/* Comparison page: Business Central, and Business Central with VoiceOrder Solutions added. `compare` order.
 * Batch 2 (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Business
 * Central, never its replacement. Table = "Business Central + VoiceOrder Solutions" vs "Business Central
 * on its own"; every Business Central strength ticks in both columns. The two do NOT connect (FAQ 5);
 * which format a Business Central setup takes in is a demo question, never a claim.
 * Angle, distinct from NECS Entree ("typed vs spoken, inside vs beside") and NetSuite ("where the order
 * ends up vs where it starts"): WHEN and BY WHOM the order is checked. Business Central already has AI
 * order capture, the Sales Order Agent, which reads customer emails and PDFs, makes a quote first and
 * has your staff approve every reply: the check happens AFTER the request has left the kitchen. With
 * VoiceOrder Solutions the kitchen speaks the order and fixes each line BEFORE it sends. A kitchen that
 * phones leaves nothing in the inbox for the agent to read.
 * ⚠ The Sales Order Agent is generally available, English (US) included, billed on Copilot Credits.
 *   Concede it fully (table row ticks both sides, coexistence card 2, FAQ 3). Never call it unreliable,
 *   and never imply a VoiceOrder Solutions order cannot be wrong (FAQ 3 says so).
 * ⚠ Staff can type a phoned order into an agent task by hand: never "it cannot take phone orders".
 * ⚠ Third-party voice add-ons exist (point-of-sale voice ordering, custom extensions). FAQ 4 concedes
 *   them without naming anyone; never "the only voice option for Business Central".
 * ⚠ Business Central PUBLISHES per-user plan prices. The table row is theirs; no figure on the page.
 * ⚠ Built for small and midsize businesses: never "too big" or "enterprise". No native customer portal
 *   (partners sell them) and no native catch weight or EDI (partner apps): no tick, no "no" either.
 * ⚠ Never write "Microsoft Dynamics" (claims.js ban) or any partner/app name.
  * Every claim is sourced and dated in _build/research/competitors/business-central.md.
 *
 * Review 2026-11-09 (wave-1 fix list, shared S1-S10 + page items). Supersedes the notes above where
 * they differ: the pricing row is GONE from the table (Business Central's published prices are
 * conceded in the cost FAQ only); the table now has "An ordering app in each kitchen's hands" vs
 * "Needs a partner add-on" and "AI line suggestions while your staff enter an order" (both columns,
 * the staff-side line-suggestion feature in the digest); the two near-identical speak/check rows are
 * merged into one. Problem card 3 is now the phone pain (the agent reads what was written, so a call
 * is still entered by hand, as an order or an agent task); the replacement proposition lives ONLY in
 * the cost FAQ, which carries the `business central replacement` secondary. FAQ 4 is now "Can
 * kitchens use Business Central's own mobile app?" (staff app, licensed users) with a one-line
 * concession that voice add-ons exist for drive-thru lanes and kiosks. FAQ 5 spells out each way an
 * order arrives (EDI/API straight in if their setup allows, a demo question; email = a reviewed file
 * your team still enters). "buyer" is "chef" / "kitchen" throughout.
 */
module.exports = {
  title: "Not a Business Central Alternative: Keep It, Add Voice Orders",
  description: 'Kitchens speak orders into an app and fix every line before it reaches you. Business Central stays your ERP: a Business Central alternative you add, not swap.',
  related: ["netsuite-alternative","necs-entree-alternative","wizcommerce-alternative"],
  relatedHeading: "Other systems of record that stay in place",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Business Central Alternative: Orders Checked Before Sending</h1>
      <p class="lead mt-16">
        Get orders that each kitchen has gone over itself, one line at a time. With VoiceOrder Solutions, whoever orders for the kitchen talks it into our app and fixes any wrong line before it goes. The books, the stock and the warehouse remain Business Central's job.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare Both Columns</a>
      </div>

      <div class="hero-trust">
        <span>Business Central stays put</span>
        <span class="hero-trust-dot"></span>
        <span>Checked by the kitchen</span>
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
      <div class="stat-label">Saved on each order that once came by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Open for orders, Sundays and late nights too</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Until most distributors take their first order</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Business Central is a full ERP with its own AI order agent: six rows get a check mark in both
     columns, and only the three rows about how an order starts differ (review 2026-11-09).
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Same ERP, Earlier Check</span>
      <h2>Business Central plus VoiceOrder Solutions.<br>The ERP stays where it is.</h2>
      <p class="lead mt-16">
        Your kitchens get one new step, where they speak and check their own orders. It sits before the ERP, so calling it a Business Central alternative would be wrong. Business Central's finance, stock and AI agent all stay as they are, so both columns get credit for those rows. Nothing joins the two products by default.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Business Central + VoiceOrder Solutions</th>
            <th style="width:30%;">Business Central on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finance, receivables and payables</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens talk through the order and fix any line first</td>
            <td><span class="check-yes">✓</span></td>
            <td>Checked after sending: a quote by email, replies approved by staff</td>
          </tr>
          <tr>
            <td>Lot numbers, expiry dates and FEFO picking</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An AI agent that turns emailed requests into quotes</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An ordering app in each kitchen's hands</td>
            <td><span class="check-yes">✓</span></td>
            <td>Needs a partner add-on</td>
          </tr>
          <tr>
            <td>AI line suggestions while your staff enter an order</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Replenishment planning and warehouse picks</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens that used to call now send orders with a number</td>
            <td><span class="check-yes">✓</span></td>
            <td>Someone writes up the call</td>
          </tr>
          <tr>
            <td>Customer-specific prices and discounts</td>
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
      <span class="eyebrow">Where The Search Starts</span>
      <h2>Why a distributor goes looking for a Business Central competitor</h2>
      <p class="lead mt-16">
        Few distributors searching for a Business Central alternative want to leave the ERP itself. The catch is timing: Business Central's order agent reviews a request only after the kitchen has sent it, and a call gives it nothing to read until someone types it up.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📧</div>
        <h4>Every request starts as a quote</h4>
        <p class="text-muted mt-12">
          Business Central's Sales Order Agent always drafts a sales quote first, even when the customer asked for an order. By default that quote goes back by email and becomes an order only after the customer says yes, so one order can make two trips through the inbox.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔁</div>
        <h4>Mix-ups surface once the kitchen has moved on</h4>
        <p class="text-muted mt-12">
          When the agent is unsure which item was meant, it can email the customer to clarify or ask your staff for help, and someone on your team approves every reply. It is careful work, but the correcting happens after the request has gone, when the kitchen may have moved on.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>A call still has to be typed in</h4>
        <p class="text-muted mt-12">
          The agent starts from what a customer wrote: an email, a PDF or a photo. When a kitchen phones at 6 a.m., somebody on your side answers and enters it by hand, either as an order or as a task for the agent.
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
      <h2>Why this is not a Business Central alternative, and what it adds</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The kitchen fixes a line before you ever see it</h3>
          <p class="mt-12 text-muted">
            Standing in the walk-in, the chef names what is short. Our app turns it into lines from that kitchen's guide, the chef changes anything that came out wrong, and only then does it go. The questions get settled in the kitchen, before the order leaves.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The chef approves every line before it goes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Takes orders at midnight and on a Sunday</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the iOS or Android phone in their pocket</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Interrupted mid-order? It waits where they stopped</span>
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
          <h3>Guides built from your Business Central item list</h3>
          <p class="mt-12 text-muted">
            Export what each account buys to a spreadsheet and send it over. Those items go in under your item numbers, at the prices you gave that customer. Your item master never leaves Business Central; you update each guide and its prices yourself, in our web admin.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each kitchen sees only the items on its own guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You choose what goes in a guide and what it costs</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Update a guide and the very next order picks it up</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup installs nothing inside Business Central</span>
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
          <h3>Handed over in a format your office takes</h3>
          <p class="mt-12 text-muted">
            Each finished order gets to you by email with a PDF, Excel or Word file attached, or over the API, over EDI or into QuickBooks. You pick one, and during the demo we look at how it would reach your ERP. If it comes by email, someone on your team enters it into Business Central, working from a list the kitchen already reviewed instead of taking it down over the phone.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a rep or a shared orders mailbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI, the API or QuickBooks, nobody on your team retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, invoicing and delivery run as they do now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No software has to be retired first</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">What arrives at your desk →</a>
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
          <h3>Stock in view while the orders arrive</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Your catalog keeps up as stock rises and falls</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises after a weekend of orders</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lots, expiry and replenishment remain the ERP's job</span>
            </li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">Read about stock visibility →</a>
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
      <h2>From one Business Central export to the first spoken order</h2>
      <p class="lead mt-16">
        A single export is usually all we need to begin.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Pull a spreadsheet out of Business Central</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Export each customer's usual items with your prices from Business Central to a spreadsheet, keeping your own item numbers.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up the guides, then each kitchen</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each guide is loaded and each account opened, then the kitchen installs the app. Most kitchens have sent an order before that day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Checked orders come to your desk</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders from the app turn up numbered and timestamped, reviewed by the kitchen first, in the format you set.
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
      <h2>What it is like when the kitchen does the checking</h2>
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
            "We send far fewer emails asking which item a kitchen meant. They say it, see it on their own list and fix it before it ever gets to us."
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
            "Our early calls used to get typed in by whoever picked up. Now those kitchens send a checked order the night before."
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
      <span class="eyebrow">Working Together</span>
      <h2>Where each one fits once both are running</h2>
      <p class="lead mt-16">
        Nobody needs an alternative to Business Central to change how kitchens order. Our app handles the minutes before a kitchen presses send; after that, your team takes over in Business Central.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>The ERP keeps customers, stock and invoicing</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Business Central remains your system of record. We hold the order guide for every account, priced your way, plus a copy of every order made in our app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📧</div>
        <h4>Emailed orders can stay with Business Central's agent</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers who email an order or send a PDF can carry on that way, and your staff keep approving the agent's replies. Our app is there for kitchens where talking comes easier than writing. We give no number to an order phoned to you; the app numbers only what comes through it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧩</div>
        <h4>A partner's web portal can stay too</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Business Central has no customer ordering portal of its own; partners sell them as add-on apps. Accounts already using one can carry on. Two ways in for two kinds of kitchen is fine.
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
      <h3 style="margin-bottom:10px;">See a kitchen fix one line, then press send</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes: we talk through one order in the app, correct an item on screen, send it, then look at how it could reach Business Central.
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
      <h2>Answers for teams on Business Central</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Business Central alternative to add voice ordering?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Business Central keeps its job as your ERP, and its agent can keep handling emailed orders. What we add is a check at the kitchen's end, made before anything reaches you. Start with the customers who phone you most.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Business Central?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only at one job: letting the kitchen catch its own mistakes before you receive the order. The rest is Business Central's work, which is why our app sits beside it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't Business Central's AI agent already take orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It does, from email. It reads a customer's message and any PDF or photo, matches the items, prepares a quote first, and asks your staff to approve each reply before it goes. Our app works earlier: a chef says what is needed and fixes each line before it is sent. Neither one makes a wrong order impossible. The difference is who checks it, and when.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can kitchens use Business Central's own mobile app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That app was made for your licensed staff: they sign in with their Business Central user name to review data, edit records and email quotes. It is not an app for your customers to order in. Voice add-ons for Business Central exist too: the one we found is built for drive-thru lanes and self-service kiosks, and partners can build custom ones. Ours sits with the kitchen: the chef talks each order through and corrects any line before it reaches you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does any link join VoiceOrder Solutions and Business Central?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. They are sold separately, nothing links them out of the box, and neither of us offers support for the other side. Over EDI or the API, the app can pass an order straight in with no retyping, if the way Business Central is set up for you allows it; we check that together in the demo. Emailed orders hold lines the kitchen has already approved, and your staff key them in from there instead of from a call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will you need a Business Central login from us?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not to get set up. We need no login and install nothing: we work from an export you send us, so your permissions and customizations are left alone. If EDI or API delivery interests you later, we go through what it needs on your side in the demo.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take, and is pricing published?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup takes 24 to 48 hours for most distributors. Business Central publishes per-user prices for its plans; we publish none and give every distributor its own quote. A Business Central replacement, or any Business Central alternative, means moving every customer, item and ledger to a new system. Our app moves none of them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Business Central details here come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From Microsoft's Business Central product and pricing pages and its help articles, checked on 9 November 2026: the AI order agent, item tracking, the phone app for staff and the plans, plus a web search for voice tools other companies sell for it. Their prices are published there, so we leave the figures to them. If something here no longer holds, write to us and the page gets corrected.
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
  <h2>Keep Business Central, and let kitchens check their own orders</h2>
  <p>Twenty minutes, one spoken order, and an honest look at where it would land.</p>

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
        <li><a href="#comparison">Business Central + VoiceOrder Solutions</a></li>
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
