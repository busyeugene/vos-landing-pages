/* Comparison page: Orderly, and Orderly with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT. VoiceOrder
 * Solutions comes through the restaurant's distributor, and only reaches distributors that offer it.
 * Same frame as the MarginEdge pilot: keep Orderly, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, a sync or an "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: Orderly's pitch is NO DATA ENTRY: it shows what the food COST, built from the invoice.
 * VoiceOrder Solutions keeps the other half, a record of what you ASKED FOR, for a distributor that
 * gave you the app. Because Orderly works from invoices, the invoice for a VOS-ordered delivery still
 * reaches Orderly's food cost the usual way (the invoice does that; the products have no link).
 * ⚠ TRAPS (all in _build/research/competitors/orderly.md):
 *   0. Orderly is now "Back Office" by Buyers Edge Platform. Named ONCE, in the comparison lead.
 *   1. Orderly HAS ordering: custom order guides, orders to "all your vendors" from phone or desktop,
 *      par-based ordering and over-ordering alerts (paid add-on). Their reach is wider than ours:
 *      conceded in row 5 and FAQ 4. Never "one place for all suppliers" as our point.
 *   2. How an Orderly order reaches the supplier is NOT published. No mechanism is stated here.
 *   3. No voice found on their sites, but their pitch is "no data entry", so never "they type, we
 *      speak" and never "no AI" (the parent advertises AI Matching; Orderly learns ordering patterns).
 *   4. Pricing is PUBLISHED, on two sites with different figures. No figure on this page; FAQ 7.
 *   5. "orderly" is also an English word. It is never used in its ordinary sense on this page,
 *      so the keyword counts stay honest.
 * Their customer counts and savings figures are never repeated.
 */
module.exports = {
  title: "Not an Orderly Alternative: Keep Orderly, Add Voice Ordering",
  description: 'Speak your next order to a distributor on VoiceOrder Solutions and keep Orderly for food cost from invoices. An Orderly alternative that replaces nothing.',
  related: ["marginedge-alternative","xtrachef-alternative","restaurant365-alternative"],
  relatedHeading: "More tools that can stay beside us",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not An Orderly Alternative: Speak Your Next Order</h1>
      <p class="lead mt-16">
        Tell the VoiceOrder Solutions app what you need out loud, look over each line, then send it to your distributor with its own number and the time it was sent. Your products and agreed prices are already loaded. Orderly keeps working out your food cost, invoice by invoice.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VoiceOrder Solutions →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Comes through your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Orderly left untouched</span>
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
      <div class="stat-label">is when most restaurants send a first order once the account opens</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">back per order, versus placing it by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">to send an order, late nights and Sundays included</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with Orderly
     alone. Food cost, invoice capture, ordering to all vendors, recipe costing, pars and
     phone-or-desktop ordering are ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Orderly, Plus One Step</span>
      <h2>Orderly still shows what the food cost you.<br>Voice only changes how you ask for it.</h2>
      <p class="lead mt-16">
        Ordering by voice, with a check of each line, is all this adds. One column is your restaurant on Orderly alone; the other shows it with our app added for a distributor who supplies it. Orderly still turns your invoices into food cost numbers, which is why this is not an Orderly alternative. The two do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Orderly + VoiceOrder Solutions</th>
            <th style="width:30%;">Orderly on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Food cost tracked from invoices, without counts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Speak it, then review every line first</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Invoices sent in by photo, scan or EDI</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Guide loaded by the distributor, prices included</td>
            <td><span class="check-yes">✓</span></td>
            <td>Custom guides you create</td>
          </tr>
          <tr>
            <td>Orders sent to all your vendors</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Numbered and timed orders to that distributor</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Recipe costs and price creep alerts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Par-based ordering, as a paid add-on</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders placed from a phone or a desktop</td>
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
     SECTION 6: WHY OWNERS LOOK ELSEWHERE
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container">
    <div class="text-center" style="max-width: 680px; margin: 0 auto;">
      <span class="eyebrow">Before You Compare</span>
      <h2>What sends owners looking for an alternative to Orderly</h2>
      <p class="lead mt-16">
        Orderly, now Back Office by Buyers Edge Platform, is built to tell you what your food really cost. Looking up an Orderly competitor rarely means its numbers are wrong. Often the trigger is the monthly bill, or the act of ordering. What you asked your distributor for is a separate job, and it can change on its own.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>Its job starts when the invoice arrives</h4>
        <p class="text-muted mt-12">
          Orderly promises no data entry and no counts: snap or sync the invoice, and your cost of goods is tracked for you, with a team sending weekly suggestions. All of that follows a delivery. Asking for the delivery is a different step.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📍</div>
        <h4>A monthly price for each site</h4>
        <p class="text-muted mt-12">
          Orderly lists its prices on its website, charged per site and month to month. That openness counts in its favor. Leaving would mean moving every invoice and report, and it would not change how you ask for one delivery.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📲</div>
        <h4>A distributor of yours may hand you an app</h4>
        <p class="text-muted mt-12">
          Certain food suppliers now set their restaurant customers up on our app, with the lines each one buys at the price it pays. If yours does, that order can be spoken, with no change to your Orderly setup.
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
      <h2>Skip the Orderly alternative and add this instead</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Speak the order, look it over, send it</h3>
          <p class="mt-12 text-muted">
            Open the app at the pass or in the walk-in and say what you need. Each item shows up as a line from that distributor's guide. Change a quantity or drop a line before you send. Nothing goes until you send it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each line is yours to check before it goes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Send it at 2 a.m. if that is when you get to it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the phone already in your pocket</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Called away halfway? Pick up where you stopped</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">How placing an order works →</a>
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
          <h3>The guide comes from the distributor</h3>
          <p class="mt-12 text-muted">
            You do not build this guide. The distributor loads what your restaurant buys from them, at the prices set for your account, under their item codes, and updates it when something changes.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Just your usual items, not their full range</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Priced by the distributor for you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Kept up to date on their side</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You keep the same rep and the same terms</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Buying from more than one supplier →</a>
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
          <span class="eyebrow">Proof Of The Ask</span>
          <h3>A record of what you asked for</h3>
          <p class="mt-12 text-muted">
            Orderly shows what a delivery cost once its invoice is in. VoiceOrder Solutions keeps the other half: whatever you send in the app is numbered, dated and timed, and a confirmation comes back to your phone. If a delivery comes up short, quote that number instead of a call nobody logged.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A number on each order sent from the app</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stamped with the time you sent it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed back to you by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders you phone in or leave on voicemail get no number</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">Tracking what each supplier confirmed →</a>
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
          <span class="eyebrow">Your Food Cost</span>
          <h3>Orderly keeps reading the invoice</h3>
          <p class="mt-12 text-muted">
            The truck arrives with an invoice, as it does now. Snap it, scan it or let it sync, the way you send invoices to Orderly today, and that delivery is counted like any other. VoiceOrder Solutions plays no part in that.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Invoices reach Orderly the way they do now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Weekly suggestions and recipe costing as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Ordering from other vendors goes on as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No data passes between the two</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">Ordering as part of your stock routine →</a>
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
      <h2>How a restaurant gets the app</h2>
      <p class="lead mt-16">
        No computer to set up, and no change to your Orderly account.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask whether your supplier offers it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they offer VoiceOrder Solutions, they open your account and add the products you order from them. Not sure who to ask? Contact us and we will connect you with the right person.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Sign in and find your guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Install it on your phone and sign in. Your guide is already there.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Say the order and confirm it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Speak it, read the lines, then send. Nothing else to learn.
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
      <h2>From the people who place the orders</h2>
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
            "I send the produce order from the office after service. It takes a couple of minutes now."
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
            "When a delivery is short, I give them the order number. It is no longer my word against theirs."
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
      <h2>Orderly shows the cost, VoiceOrder Solutions sends the order</h2>
      <p class="lead mt-16">
        We are not an Orderly replacement. Orderly keeps your invoices, food costs and reports. Our contribution is a single step, available only through distributors on our app: a reorder spoken, looked over, then sent. If a simpler order is what you hoped an Orderly alternative would bring, this is that part, and the rest stays put.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Your other suppliers stay in Orderly</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If a supplier is not on VoiceOrder Solutions, you order from them the way you do now. You only use it with suppliers who set you up.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧮</div>
        <h4>That delivery is still costed</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orderly builds food cost from invoices, not from orders. When a delivery you ordered by voice arrives, its invoice goes to Orderly as usual and the cost is counted. That is the invoice at work: the two products are not linked.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔌</div>
        <h4>Start with one distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Nothing in Orderly is touched, and nothing flows across. Try it with one distributor first and see how it suits you.
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
      <h3 style="margin-bottom:10px;">See the app from both ends</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute demo of the guide a distributor loads, an order given by voice, and what arrives on their side. Orderly stays out of it.
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
      <h2>What owners ask before they try it</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Should I look for an Orderly alternative to get voice ordering?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Orderly is food cost management built from your invoices, and ordering is already part of it. Where one of your suppliers hands you our app, the order to them can be talked through while Orderly keeps tracking cost.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Orderly?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at food cost, invoices, recipe costing or paying bills: we offer none of those. Ours is one narrow job, an order said out loud to your distributor and checked one line at a time. If ordering is what made you look for an Orderly alternative, that job beside Orderly may cover it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and Orderly connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is no link between them and no shared support. Spoken orders head to your distributor, not into Orderly, so Orderly's par ordering and over-ordering alerts will not see that order. Orderly still receives the invoice for that delivery by your usual route.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I order from every supplier with VoiceOrder Solutions?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, only from distributors that offer it. Orderly lets you order from all your vendors, and we cannot, so stay with it for the others. Then ask your other suppliers if they use VoiceOrder Solutions.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens if a line comes out wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You see each line before sending, so fix the item or remove it there. That check is the safeguard, and a quick glance can still miss a mistake. Also, an order phoned in or left on voicemail is not numbered by us; only orders sent in the app are.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I start using it?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor. When they add your account, your guide is ready in the app. Not sure if yours offers it? Get in touch, and we can find out for you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How much does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Ask the distributor, since the app reaches you through them. Orderly publishes its prices; we do not publish any. Your Orderly plan does not change.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Orderly details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From Orderly's two sites, getorderly.com and bepbackoffice.com, as they stood on 27 October 2026: the product, pricing, onboarding and FAQ pages. Any restaurant counts or savings Orderly cites stay off this page. Spot something Orderly has since changed? Tell us and we will correct it.
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
  <h2>Keep Orderly, and order out loud</h2>
  <p>Ask your distributor or ask us, and see an order go from your phone to their desk.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Comes through your distributor</span>
    <span>✓ Your account's own prices</span>
    <span>✓ Orderly carries on as is</span>
    <span>✓ iPhone and Android</span>
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
        <li><a href="#comparison">Orderly + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-entry-software">Order Entry</a></li>
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
