/* Comparison page: MarginEdge, and MarginEdge with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT. VoiceOrder
 * Solutions comes through the restaurant's distributor, and only reaches distributors that offer it.
 * Same frame as the twelve distributor compare pages: keep MarginEdge, add VoiceOrder Solutions
 * beside it for one job. The two products do NOT connect (FAQ 3). Never imply an integration.
 * Eugene called it an "extension"; the copy says "beside / add" because "extension" implies a
 * link that does not exist (his own call on the October pages).
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: MarginEdge works on the INVOICE after the truck has been; VoiceOrder Solutions is the ORDER
 * before it. Their own pitch is the invoice, so the split is theirs to agree with.
 * ⚠ TRAPS (all in _build/research/competitors/marginedge.md):
 *   1. MarginEdge HAS ordering: order guides, pars, a suggested quantity, web and mobile, sent to
 *      ANY supplier that takes email. "Works with any supplier" is THEIR win: conceded in row 5
 *      and FAQ 4.
 *   2. They connect to distributors on the INVOICE side (GFS, Ben E. Keith, Shamrock, US Foods).
 *      Never "no link to your distributor".
 *   3. AI is central (invoice coding, Tom, forecasting, an AI Connector into ChatGPT/Claude/Gemini).
 *      Never "they type, we speak", "no AI" or "no voice". Say what we do instead.
 *   4. Pricing is PUBLISHED (flat per location). Figures stay OFF the page; FAQ 7 concedes it.
 *   5. Their invoice coding is "24-48 hours": never put it next to a setup time of ours.
 *   6. Help-center ordering mechanics came from search snippets (403). Nothing here leans on them.
 * Their customer counts disagree with each other (12,000+ vs 13,000+); none are repeated.
 */
module.exports = {
  title: "Not a MarginEdge Alternative: Keep It, Add Voice Ordering",
  description: 'Keep MarginEdge for invoices and food cost, and speak your next order to a distributor on VoiceOrder Solutions. A MarginEdge alternative that replaces nothing.',
  related: ["orderly-alternative","xtrachef-alternative","wisk-alternative"],
  relatedHeading: "Other back-office tools you can keep",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A MarginEdge Alternative: Order Before The Invoice</h1>
      <p class="lead mt-16">
        Say what you need into the VoiceOrder Solutions app, look the lines over, and send it to your distributor with its own number attached. If a supplier you buy from offers it, your products and prices are loaded for you. MarginEdge keeps handling the invoice once the delivery lands.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VoiceOrder Solutions →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Set up by your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>MarginEdge stays as it is</span>
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
      <div class="stat-label">is when most kitchens begin ordering in the app</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved on each order versus a call to your rep</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">ordering, even after your rep's line has closed</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with MarginEdge
     alone. Invoices, food cost, ordering to any supplier, pars, recipes and phone ordering are
     ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">MarginEdge Today, Plus Voice</span>
      <h2>MarginEdge, plus ordering out loud.<br>The same back office, one new step.</h2>
      <p class="lead mt-16">
        Spoken ordering is the only addition here. One column shows your restaurant on MarginEdge alone; the other adds VoiceOrder Solutions wherever a distributor of yours runs it. MarginEdge already codes invoices, costs recipes and emails orders to suppliers, so a MarginEdge alternative is rarely the fix you need. The two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">MarginEdge + VoiceOrder Solutions</th>
            <th style="width:30%;">MarginEdge on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoices captured by photo, email or EDI</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order out loud and review it first</td>
            <td><span class="check-yes">✓</span></td>
            <td>Quantities set on the order guide</td>
          </tr>
          <tr>
            <td>Food cost and a daily P&amp;L</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Items and prices loaded by your distributor</td>
            <td><span class="check-yes">✓</span></td>
            <td>A guide you keep for each vendor</td>
          </tr>
          <tr>
            <td>Order from any supplier that takes email</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Your distributor receives it numbered and timed</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Par levels with a suggested quantity</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Recipe costing and price alerts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Ordering from your phone</td>
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
      <h2>Why operators look for an alternative to MarginEdge</h2>
      <p class="lead mt-16">
        Searching for a MarginEdge competitor seldom means anything is broken. MarginEdge reads invoices and tracks costs well. The search tends to start with cost per site, or with ordering, which happens before everything MarginEdge does after delivery.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>It starts once the truck has been</h4>
        <p class="text-muted mt-12">
          MarginEdge is built around the invoice: snap a photo and it is coded, costed and booked. That is the work after a delivery. The ordering before it is its own job, and you can change it on its own.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📍</div>
        <h4>The price grows with each site</h4>
        <p class="text-muted mt-12">
          MarginEdge publishes one flat monthly price per location, with extras such as a bar scale. Being open about price is a plus. Moving every invoice, recipe and report elsewhere to save on it is a big step, though, and it would not change how one order gets placed.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📲</div>
        <h4>Your distributor may already offer an app</h4>
        <p class="text-muted mt-12">
          A few food distributors now include VoiceOrder Solutions for the restaurants they serve, set up with what each kitchen normally orders and what it pays. If one of yours does, the order to them can be spoken, and MarginEdge does not have to change at all.
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
      <h2>A MarginEdge alternative that only adds a step</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Say the order, then check every line</h3>
          <p class="mt-12 text-muted">
            Stand in the walk-in, open the app and say what you need. The lines come up from your guide with that distributor. Fix anything that looks off, then send. Nothing leaves until you have looked it over.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>You check each line before it is sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Order at any hour, long after the rep has gone home</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on your own iPhone or Android phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled onto the line midway? It keeps your place</span>
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
          <h3>Your distributor's items, at your prices</h3>
          <p class="mt-12 text-muted">
            Your distributor builds the guide: the products you buy from them, at the prices set for your account, under their own item codes. When something changes, they update it, so there is no second copy for you to keep in step.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only what you buy, with no catalog to scroll</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The prices agreed for your account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Kept current by the distributor, not by you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your rep and your terms are unchanged</span>
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
          <span class="eyebrow">A Paper Trail</span>
          <h3>Proof of what you asked for</h3>
          <p class="mt-12 text-muted">
            Each order sent from the app carries an order number, the date and the time, and a confirmation comes back to your phone. If a case goes missing, you can point to the order you sent instead of a phone call nobody wrote down.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Number, date and time on each app order</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A confirmation by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Check a short delivery against what you sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Calls and voicemails to your rep get none of this</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">Keeping track of what each supplier confirmed →</a>
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
          <span class="eyebrow">Your Back Office</span>
          <h3>MarginEdge picks up when the invoice lands</h3>
          <p class="mt-12 text-muted">
            The delivery still comes with an invoice, and it goes into MarginEdge the way yours do now. Your margins keep updating as before. Your counts, pars and recipes stay where they are.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Invoices captured exactly as they are today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts and pars stay in MarginEdge</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Other suppliers carry on exactly as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing moves between the two products</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">Where ordering fits in your stock routine →</a>
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
      <h2>Three steps, and your distributor does the setup</h2>
      <p class="lead mt-16">
        There is nothing to install on a computer and nothing to change in MarginEdge.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask your distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they offer VoiceOrder Solutions, they open your account and load your guide. Not sure? Contact us and we will put you in touch with the right person.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Put the app on your phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Sign in on your phone, and your guide is already waiting.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Speak, check, send</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Say it, look at each line, then send. That is the whole routine.
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
      <h2>What ordering feels like now</h2>
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
            "I do the order in the walk-in after close, and it is with them before they open."
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
            "Our orders have numbers on them now, so a missing case is a two-minute conversation."
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
      <span class="eyebrow">Keep Both</span>
      <h2>MarginEdge runs the numbers, VoiceOrder Solutions carries the order</h2>
      <p class="lead mt-16">
        We are not a MarginEdge replacement. MarginEdge keeps the invoices, the costing and the books. We add a single step, for any distributor that provides it: speaking the order, with a check before sending. If easier ordering is what you wanted from a MarginEdge alternative, this is that part, and nothing else moves.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📧</div>
        <h4>Every other supplier stays in MarginEdge</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Any supplier not on our app keeps receiving MarginEdge's emailed orders as before. Keep the app for the distributors who hand it to you.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧮</div>
        <h4>Your costs still include that delivery</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An order you give by voice does not appear on MarginEdge's order screen, because the two do not connect. Its invoice does, once you send it in as usual, so the cost of that delivery is not lost.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔌</div>
        <h4>No settings to change</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          MarginEdge is left exactly as configured, and no data moves anywhere. Start with a single distributor's order.
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
      <h3 style="margin-bottom:10px;">See how a distributor sets up your guide</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute walkthrough: how the guide is built, a real order spoken into the app, and what lands on your distributor's side. None of it touches MarginEdge.
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
      <h2>What restaurant operators ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a MarginEdge alternative for voice ordering?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. MarginEdge is a back office that starts from the invoice, and it can already email your suppliers an order. Where a distributor of yours provides our app, use your voice for that order and leave MarginEdge to do the rest.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than MarginEdge?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at coding invoices, costing recipes, paying bills or closing your books: we do none of them. We do one narrower thing: a distributor order spoken aloud and confirmed one line at a time. If ordering is what sent you looking for a MarginEdge alternative, that narrower job, beside it, may be all you need.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Are VoiceOrder Solutions and MarginEdge linked?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Nothing links the two, and neither company supports the other. Orders placed by voice travel to your distributor, not into MarginEdge. MarginEdge still receives that delivery's invoice the way it receives the rest.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I order from all my suppliers this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only from distributors who use VoiceOrder Solutions. MarginEdge can email an order to any supplier at all, and we cannot. Keep doing that for the rest, and ask your other suppliers if they have it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if the app gets an item wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You see every line before it goes, so that is where you catch it: change the item or take it out. That check is the safeguard, which means a rushed glance can still let a mistake through. One more limit: an order phoned in or left on voicemail gets no order number from us. Only what you send in the app does.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor. Once they add you, your guide is waiting in the app, and most kitchens are ordering that same day. Not sure whether yours has it? Contact us and we will find out for you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does it cost me?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That is a question for your distributor, since they are the ones offering it. MarginEdge is open about its price and publishes a flat rate per location; we do not publish one. Your MarginEdge plan stays the same either way.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the MarginEdge details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Read off marginedge.com as it stood on 27 October 2026: their feature pages, price list and release notes. Their restaurant totals and time-saving claims are left off this page. If any of it has changed, the mistake is at our end.
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
  <h2>Keep MarginEdge, and speak the next order</h2>
  <p>Check with your distributor, or with us, and see how it works from the walk-in to their desk.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Set up by your distributor</span>
    <span>✓ Your agreed prices</span>
    <span>✓ Your back office stays put</span>
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
        <li><a href="#comparison">MarginEdge + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
        <li><a href="/order-taking-software">Order Taking for Distributors</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
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
