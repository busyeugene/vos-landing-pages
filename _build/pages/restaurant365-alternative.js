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
 *      matching for that distributor, and its approvals. Said plainly in FAQ 3 and coexistence card 1.
 *   8. Review round 2026-10-27: the page is anchored on the distributor you still phone, text or
 *      reach through a rep (R365 EDI reaches select vendors only; the rest get an emailed PO).
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
      <h1>Not A Restaurant365 Alternative: Speak What You Phone In</h1>
      <p class="lead mt-16">
        Still phoning or texting a rep for one supplier? If that distributor gives you our app, speak that order from the walk-in, fix what is wrong, and send it at any hour. Lines come from their guide, priced for your account, and a text or notification confirms it was sent.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Check If My Distributor Offers It →</a>
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
      <h2>Restaurant365 runs the books and the stock.<br>Add one thing: saying aloud the order you would have called in.</h2>
      <p class="lead mt-16">
        The rows that differ show what changes with our app: how a single distributor's order gets placed. Shared ticks are Restaurant365's own work, and a Restaurant365 alternative would have to match all of them. Rows about speaking an order matter only for a distributor with our app.
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
            <td>Accounting, bills and financial reports</td>
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
            <td>Order guide built and priced by your distributor</td>
            <td><span class="check-yes">✓</span></td>
            <td>Your own templates, or guides from listed vendors</td>
          </tr>
          <tr>
            <td>Suggested quantities from pars and forecast sales</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Text or push alert once the order is sent</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Purchase orders by email, or by EDI with select vendors</td>
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
      <h2>Why some operators look for an alternative to Restaurant365</h2>
      <p class="lead mt-16">
        Restaurant365 runs accounting, inventory and labor in one system, and it centers on those books. Sometimes a search for a Restaurant365 alternative is about something smaller: one distributor, and how its order gets there. That step is separate, and you can change it on its own.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">📨</div>
        <h4>Direct links reach select vendors only</h4>
        <p class="text-muted mt-12">
          Restaurant365 can pass an order straight into a vendor's system, but only where that vendor supports it. The rest get it by email.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📋</div>
        <h4>Some orders still mean a call</h4>
        <p class="text-muted mt-12">
          If one distributor still takes your orders over the phone, by text or through a rep, Restaurant365 can plan the order, but someone still has to read it out to them.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🗂️</div>
        <h4>You maintain that vendor's template</h4>
        <p class="text-muted mt-12">
          Restaurant365 links order guides for vendors on its list. For a distributor that is not on it, the template you order from is one your team builds.
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
      <h2>What changes for that one distributor</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Speak it, read it over, send it</h3>
          <p class="mt-12 text-muted">
            This is for the order you would otherwise read out to a rep. Pull up the app in the walk-in and say what you need; each item appears as a line from that distributor's guide. Change an amount or delete a line, then send. Nothing leaves until you have checked it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>You see every line and can fix it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Order at any hour, with the rep's office closed</span>
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
              <span>The same distributor and the same rep</span>
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
            Orders you send in the app get a number and a timestamp. A text or phone notification then confirms it went out. If a delivery comes up short, that number and the time it was sent are there to point to.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirms the order was sent, not what will arrive</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Shows who placed it, and when</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Phoning the rep or leaving a message gets none of this</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Useful when you check a delivery against your order</span>
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
            The delivery still comes with an invoice, and it goes into Restaurant365 the same way your other invoices do. Costs, counts and reports keep running.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Pars, recipes and counts do not move</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Food cost reports run as they do now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Planning and par checks still happen there</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Bills and payroll keep running there</span>
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
      <h2>Most of the setup sits with your distributor</h2>
      <p class="lead mt-16">
        All you need is a phone, plus a distributor offering the app. Nothing goes on a computer.
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
          Speak the items, read the list over, then send. A confirmation that it went out follows.
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
            "The distributor I used to call now gets our order through the app."
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
      <h2>Restaurant365 for the books, VoiceOrder Solutions for saying the order</h2>
      <p class="lead mt-16">
        This is not a Restaurant365 replacement. Restaurant365 plans what to buy, approves it, takes in the delivery and pays the bill. Our app takes one part of that, for distributors that have it: the order, said aloud, with each line checked before it goes.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>No PO, so no approval step</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Anything spoken in our app skips the purchase order in Restaurant365, and with it your approvals there. Its spend shows up once the invoice is entered, not on the day you order.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>Let Restaurant365 plan, then say it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Use Restaurant365's suggested quantities or Fill to Par to see what is short with that distributor. Then say that list into our app and review each line.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🎯</div>
        <h4>Pick the right distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          It suits a distributor you would otherwise phone or message. If every order to them needs approval or receiving against a PO, keep that one in Restaurant365. Order from each distributor in one place only, so no item is ordered twice.
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
        Twenty minutes with a made-up restaurant: we say an order into a demo guide, fix a line, send it, and show you the copy that lands on the distributor's desk.
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
          No. Restaurant365 already plans your orders and sends them to your vendors. Voice ordering sits beside it, for any distributor of yours that has our app: you say that order aloud instead of calling it in.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Restaurant365?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We are not a Restaurant365 competitor at bookkeeping, stock counts, schedules or payroll: we do none of those. We do one smaller job: an order you say to your distributor, with every item checked by you before sending. If that job is what sent you searching for a Restaurant365 alternative, adding it may be all you need.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and Restaurant365 connect, and what about POs?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. They are not linked in any way, and each company supports only its own product. Nothing you say in our app becomes a Restaurant365 purchase order, so Restaurant365 never sees that order. For that distributor, the order skips your Restaurant365 approvals, and there is no PO to receive the delivery against or to match the invoice to. If your team checks every delivery against its PO, weigh that trade before you move one distributor's orders to voice.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Restaurant365's AI already drafts my purchase orders. Why speak one?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For a vendor on EDI, keep the AI draft: it goes straight into their system. For a distributor you call or message, that draft still has to be phoned in, or emailed for someone to read. In our app you speak it from their guide and look over the lines yourself before it is sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can every supplier I buy from be reached this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only distributors that give you our app. Restaurant365 can email a PO to any vendor with an address on file, and send by EDI to select vendors. We cannot. Keep sending through Restaurant365 for everyone else, and ask your other distributors whether they have it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if a line comes out different from what I said?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Every line is on screen before you send, so that is the moment to correct it: swap the item, change the amount, or take the line out. Checking those lines is what protects the order, so skimming them can let an error slip past. We give no order number to orders phoned in or left on voicemail, only to those sent in the app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The account and your guide are set up by your distributor. If yours does not offer it, or you are not certain, write to us and we will find out who to talk to. Most restaurants are ordering in the app the same day it is set up. On cost, check with your distributor, as they are the ones who provide the app. Our site shows no price, and Restaurant365 gives quotes instead of a public price list.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Restaurant365 details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Taken from restaurant365.com and its public help docs on 27 October 2026: the product pages, their pricing page (quote only) and the guides on creating and sending purchase orders. Their customer counts and savings figures are theirs and are left out here. Anything outdated here is our mistake to fix.
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
  <h2>Your next phoned-in order can be spoken instead</h2>
  <p>Check whether your distributor has our app. If you are unsure, send us their name and we will look into it.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Orders taken 24/7</span>
    <span>✓ You review every line first</span>
    <span>✓ A confirmation once it is sent</span>
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
