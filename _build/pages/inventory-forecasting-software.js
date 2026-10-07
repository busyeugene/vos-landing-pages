/* Page 23 - PRIMARY: inventory forecasting software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY: inventory forecasting tool (H3), forecasting and inventory management software (H3, Tier B),
 *   inventory forecast software (body), inventory forecasting system (body),
 *   inventory forecasting solution (body), best inventory forecasting software (FAQ, Tier B),
 *   inventory forecasting software free (FAQ, Tier C: nothing free, quote-based),
 *   buy ai based inventory forecasting software (FAQ, Tier C: no model, no AI),
 *   inventory forecasting software for multinational forecasts (FAQ, Tier C: wrong buyer size).
 *   Airtable also listed the hyphenated "buy ai-based ..."; qa.js and kwaudit.js treat the hyphen and
 *   the space as the same token, so it is deduped.
 *
 * ** THE CLAIM RISK ON THIS PAGE **
 * CLAUDE.md claim rules say "Never: forecasting", and the KB says VOS is "not a demand-forecasting
 * engine". So this page is a REFRAME, handled exactly like distribution-resource-planning:
 *   - the hero lead opens by saying VOS is not inventory forecasting software;
 *   - FAQ 1 repeats it, open by default;
 *   - the comparison table carries honest ✗ rows for demand models, seasonality, safety stock and AI;
 *   - no sentence anywhere describes VOS as producing, running or improving a forecast.
 * What VOS legitimately supplies is the dated, itemized order history a forecast is computed from.
 * Nothing on this page may be reworded into a capability claim without re-reading the claim rules.
 *
 * Separation: inventory planning owns "how much should I stock for next week" (also no engine).
 * This page owns the narrower question "where does the history my forecast runs on come from?"
 */
module.exports = {
  title: 'Order History for Inventory Forecasting Software | VOS',
  description: "VOS is not a forecasting engine. It captures customer orders by voice, dated and itemized, so your inventory forecasting software starts from fact.",
  related: ["inventory-planning-software","inventory-replenishment-software","inventory-tracking-software"],
  relatedHeading: 'More on stock and what to order next',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1 (use 1 of 6). Scope limit is the FIRST thing the lead says.
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Real Order History For Inventory Forecasting Software.</h1>
      <p class="lead mt-16">
        VOS is not inventory forecasting software and runs no demand model. It supplies the thing one is computed from. The kitchens you supply talk
        each order into the app, so the history behind the math is dated,
        itemized and tied to a named buyer.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>No model to tune</span>
        <span class="hero-trust-dot"></span>
        <span>Your history, not ours</span>
        <span class="hero-trust-dot"></span>
        <span>Sits beside your tools</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (per-account order history, dated line items) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Dated line items for one<br>account, order after<br>order
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
      <div class="stat-number">24/7</div>
      <div class="stat-label">intake, so weekend demand is not invisible</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">is all most distributors wait to begin collecting</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">no longer spent writing one order down</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>A forecast is arithmetic. The hard part is what you feed it.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Distributors rarely struggle with the math. They struggle because the
      history underneath it was never recorded properly:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🗒️</div>
        <h4 class="mb-8">"It lives on invoices, not orders"</h4>
        <p class="text-muted" style="font-size:15px;">
          You know what shipped. Nobody kept a record of what was asked for.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📅</div>
        <h4 class="mb-8">"Everything is dated Monday"</h4>
        <p class="text-muted" style="font-size:15px;">
          Calls from Friday and Sunday all get keyed in together, so the shape of
          the week disappears before anyone sees it.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧮</div>
        <h4 class="mb-8">"We bought the tool and it guessed"</h4>
        <p class="text-muted" style="font-size:15px;">
          Point a clever model at thin, retyped history and it produces confident
          nonsense. Nobody trusts it twice.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 6: FEATURE DEEP-DIVE - ALTERNATING ROWS
     Features H2 carries the primary (use 2 of 6).
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">

    <div class="text-center" style="max-width: 760px; margin: 0 auto 72px;">
      <span class="eyebrow">Better Input</span>
      <h2>What your inventory forecasting software is working from</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 - inventory forecasting tool + PRIMARY in body (use 3 of 6) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Demand, Not Invoices</span>
          <h3>Give an inventory forecasting tool what customers asked for.</h3>
          <p class="mt-12 text-muted">
            An invoice records what left the building. The order records what the
            kitchen wanted, including the lines you had to substitute or could
            not fill. Feed inventory forecasting software the second one and you
            are modeling demand rather than modeling your own shortages.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>The quantity requested, as the customer said it</span></li>
            <li><span class="bullet-check">✓</span><span>Each line against the code you sell it under</span></li>
            <li><span class="bullet-check">✓</span><span>Confirmed by the buyer before it reached you</span></li>
            <li><span class="bullet-check">✓</span><span>Kept per account, so patterns are per customer</span></li>
          </ul>
          <a href="/inventory-planning-software" class="feature-link">Deciding how much to hold next week →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Requested quantities,<br>order after order, dated<br>by the hour
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY inventory forecast software (body) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">The Clock Matters</span>
          <h3>Orders dated when they happened, not when they were typed.</h3>
          <p class="mt-12 text-muted">
            Each order from the app arrives with the hour it was sent. Weekend and late-night
            demand stops collapsing into Monday, which is usually the first thing
            inventory forecast software gets wrong about a food business.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A timestamp from the moment of ordering</span></li>
            <li><span class="bullet-check">✓</span><span>Its own reference number, for tracing one back</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing waits in voicemail to be entered</span></li>
            <li><span class="bullet-check">✓</span><span>Captured whether or not your office is open</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">Following one order through →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Overnight and weekend<br>orders with their own<br>send times
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 - forecasting and inventory management software (Tier B)
         + inventory forecasting system (body). The scope limit again, in plain words. -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Where VOS Stops</span>
          <h3>Next to your forecasting and inventory management software.</h3>
          <p class="mt-12 text-muted">
            To be unambiguous: VOS calculates nothing. There is no seasonality
            setting, no safety stock rule and no reorder point in it. Whatever inventory forecasting system you own keeps doing the
            thinking, and we hand it cleaner history to work from.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Records delivered by whichever route you choose</span></li>
            <li><span class="bullet-check">✓</span><span>On the direct routes nothing is keyed a second time</span></li>
            <li><span class="bullet-check">✓</span><span>Your ERP and your inventory system stay in charge</span></li>
            <li><span class="bullet-check">✓</span><span>No model, no tuning, no data science on your side</span></li>
          </ul>
          <a href="/distributor-analytics-software" class="feature-link">What else the records feed →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order records leaving VOS<br>into an existing planning<br>system
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: SECONDARY inventory forecasting solution (body) + the stock-visibility fact -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Today's Shelf</span>
          <h3>See what is on hand while orders land.</h3>
          <p class="mt-12 text-muted">
            A projection is one half of the decision. VOS shows live stock that shifts with the ordering, and customer guides
            move when levels do. Any inventory forecasting solution looks at next month; this shows what
            is on the shelf now.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Stock across the full catalog, not only today's lines</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer surprises before a picking day</span></li>
            <li><span class="bullet-check">✓</span><span>Levels are read from your own stock records</span></li>
            <li><span class="bullet-check">✓</span><span>The demo shows how your stock levels connect</span></li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">Tracking what is on hand →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Catalog stock view with<br>incoming orders along<br>the side
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ============================================================
     SECTION 7: FEATURE CARDS - SUPPORTING CAPABILITIES
     ============================================================ -->
<section class="section-pad bg-light" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Also Built In</span>
      <h2>What comes along with it.</h2>
      <p class="lead mt-16">None of this predicts anything. All of it is useful anyway.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Per-Account Patterns</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Because history is filed by account, you can see which kitchens changed
          their ordering and which did not.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏷️</div>
        <h4>One Code Per Product</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders arrive against your own catalog, so nothing has to be reconciled
          across three spellings afterwards.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗄️</div>
        <h4>Searchable On The Web</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your staff open one screen to find an account, its guide, or something
          ordered last month.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     HORIZONTAL MID-PAGE CTA STRIP
     ============================================================ -->
<section aria-label="Mid-page call to action" style="background:var(--color-light-bg);border-top:1px solid #e4e7ed;border-bottom:1px solid #e4e7ed;padding:48px 24px;">
  <div style="max-width:var(--max-width);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;">
    <div style="max-width:580px;">
      <h3 style="margin-bottom:10px;">See the history a month of app orders leaves</h3>
      <p class="text-muted" style="font-size:16px;">
        On a 20-minute call you will know exactly which fields would reach the
        tool that does the calculating.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 8: HOW IT WORKS
     ============================================================ -->
<section class="section-pad" id="how-it-works" aria-label="How it works">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Simple Setup</span>
      <h2>Collecting properly by this time next week</h2>
      <p class="lead mt-16">
        There is no implementation and nothing to calibrate. You hand over item
        lists, we open accounts, history begins.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Hand over the guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          What a given account buys, priced as you agreed, carrying your codes.
          Whatever format you keep them in.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We load them and open accounts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A day or two for most distributors. Buyers get the app and talk to it; nothing is asked of your IT staff.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Pick where records go</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Email, EDI, QuickBooks or straight into the system that does your
          planning. Set once, then left alone.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: guide upload, account provisioning and record delivery setup in VOS
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 9: TESTIMONIALS
     ============================================================ -->
<section class="section-pad bg-light" id="testimonials" aria-label="Customer testimonials">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Real Teams. Real Results.</span>
      <h2>Distributors on what the history changed</h2>
    </div>

    <div class="testimonials-grid">
      <div class="testimonial-card featured">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">
          "I used to spend hours every week ordering food. Now it's simple, super
          easy, and I have free time to spend on other aspects of my restaurant."
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

      <div style="display: flex; flex-direction: column; gap: 24px;">

        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "We finally know what Sunday looks like. It used to be buried in
            Monday's data entry."
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
            "Our planning tool was fine. The history we were pointing it at was
            the problem all along."
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
     SECTION 11: COMPARISON TABLE
     Deliberately ✗ on every forecasting function. This table is the page's
     honesty check: if a VOS column cell here ever turns into a ✓ for a model,
     seasonality, safety stock or AI, the claim rules have been broken.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>We do not forecast.<br>We fix what gets forecast from.</h2>
      <p class="lead mt-16">
        Read the ✗ marks in our column as the point of the page. VOS computes nothing about the future, and a planning suite captures
        nothing while a buyer is talking. They are different jobs.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">Forecasting / Demand Planning Suite</th>
            <th style="width:22%;">Spreadsheet + Phone Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Records what the customer actually asked for</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>If somebody notes it</td>
          </tr>
          <tr>
            <td>Timestamps demand at the hour it arrived</td>
            <td><span class="check-yes">✓</span></td>
            <td>Whatever it is fed</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Statistical demand models</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>By hand</td>
          </tr>
          <tr>
            <td>Seasonality and trend settings</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Reorder point and buffer calculations</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Machine learning on your history</td>
            <td><span class="check-no">✗</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Stock on hand, as it stands</td>
            <td>A view, from your own system</td>
            <td>Varies</td>
            <td>A count, when someone does one</td>
          </tr>
          <tr>
            <td>Collects orders outside working hours</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>Voicemail will take it</td>
          </tr>
          <tr>
            <td>What it asks of your team</td>
            <td>Send us item lists</td>
            <td>Setup and tuning</td>
            <td>Daily typing</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style="border-bottom:none;"></td>
            <td style="border-bottom:none;padding:20px 24px;">
              <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary" style="padding:11px 20px;font-size:14px;width:100%;justify-content:center;">Book a Demo →</a>
            </td>
            <td style="border-bottom:none;"></td>
            <td style="border-bottom:none;"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 12: FAQ
     FAQ 1 is the scope limit, open by default, primary in the question (use 5 of 6).
     FAQ 3 carries the primary in an answer (use 6 of 6).
     FAQ 5, 6, 7 are the Tier C disambiguations (free, AI, multinational).
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Straight answers about forecasting and VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS inventory forecasting software?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Nothing in it models demand, fits a seasonality curve or works out
          safety stock, and nothing predicts next month. VOS is the ordering front door plus a current picture of stock. We say this first
          because the word in your search points somewhere we deliberately do not
          go.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Then why would a distributor shopping for forecasting talk to you?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Often the reason a forecast is wrong is what went into it.
          Phone orders retyped a day late, invoices standing in for demand, no
          record of what you could not fill. Fix the capture and the tool you already own has something better to
          read.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What exactly would the planning tool get?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For anything sent through the app: the account, the items against your
          own codes, the quantities as the buyer confirmed them, a reference
          number and the time it was sent. Inventory forecasting software reading
          that gets demand, dated at the hour, rather than a shipping summary.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What is the best inventory forecasting software to pair this with?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We do not rank them and we name no products, partly because the right
          answer depends on what your ERP already includes. A planning module you are already paying for may become usable once the
          order data stops being typed in by hand.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is any of this inventory forecasting software free?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing on this page is a forecasting product, free or paid. VOS itself
          is quoted per distributor and we publish no prices, so the answer is to ask on the demo call. If a no-cost forecasting tool is
          what you need, that is not something we sell.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can we buy AI based inventory forecasting software from you?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS uses no artificial intelligence to project demand and makes no
          claims of that kind. Voice is used to capture what a person says, and
          that person reviews every line before sending. Prediction is not part
          of the product.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We need inventory forecasting software for multinational forecasts. Is this it?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, on two counts. VOS does not forecast, and it is built for smaller food distributors and
          DSD operations rather than global supply chains. Multi-country planning, currencies and
          transfer flows are outside what we do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the stock levels in VOS come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From whatever you count stock in today. VOS is not where your stock is recorded and it does not count anything on
          a shelf; it runs alongside what you
          have, with the catalog updating as levels change. On the demo we walk
          through how that connection would work for you.
        </div>
      </div>

    </div>
  </div>
</section>


<!--@RELATED-->


<!-- ============================================================
     SECTION 13: FINAL CONVERSION CTA
     ============================================================ -->
<section class="final-cta" id="demo" aria-label="Sign up call to action">
  <h2>Ready to forecast from something real?</h2>
  <p>Keep the tool you have. Change what it is reading.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No model to configure</span>
    <span>✓ Keep your planning tool</span>
    <span>✓ Demand dated by the hour</span>
    <span>✓ Apps for iOS and Android</span>
  </div>
</section>


<!-- ============================================================
     SECTION 14: FOOTER
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
        <li><a href="#features">Demand, Not Invoices</a></li>
        <li><a href="#features">The Clock Matters</a></li>
        <li><a href="#features">Where VOS Stops</a></li>
        <li><a href="#features">Today's Shelf</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/distribution-resource-planning-software">Distribution Resource Planning</a></li>
        <li><a href="/distributor-analytics-software">Distributor Analytics</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock (kitchens)</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Forecasting Suites</a></li>
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
