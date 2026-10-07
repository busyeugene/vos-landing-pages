/* Page 24 - PRIMARY: wholesale operations software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY (one only, from Airtable): erp for wholesale distribution operations.
 *   It carries the Tier B reframe AND satisfies kwaudit's "a secondary must appear in an H1-H3",
 *   so it sits in the feature-3 H3. Airtable's list had a trailing empty item; dropped.
 * Audience: food distributors (seller side).
 * ANGLE (its one question): "Where does VOS sit in the stack that runs a wholesale business?"
 *   This page is the systems map. Distribution automation owns the manual steps on the order path;
 *   distribution workflow owns the sequence and the handoffs; this one owns build-of-stack:
 *   what you already have, what the hole is, and what VOS is and is not.
 * SCOPE, stated in the hero, the H3 and the comparison: VOS is not an ERP. No accounting, no
 *   payroll, no warehouse management, no purchasing from the distributor's own suppliers.
 */
module.exports = {
  title: 'Wholesale Operations Software: The Order Layer | VOS',
  description: "Your office software is fine. The hole is at the intake end: VOS is the wholesale operations software that turns customer calls into usable order records.",
  related: ["distribution-workflow-software","distribution-automation-software","distributor-analytics-software"],
  relatedHeading: 'More on how the distribution side runs',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1 (use 1 of 6).
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Wholesale Operations Software Starts At The Order.</h1>
      <p class="lead mt-16">
        VOS is not an ERP and replaces nothing you own. It fills the gap at the
        front: the kitchens you sell to talk their orders into the app, and what reaches
        your office is already written up and coded.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Nothing gets replaced</span>
        <span class="hero-trust-dot"></span>
        <span>Start with a few accounts</span>
        <span class="hero-trust-dot"></span>
        <span>No implementation phase</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (VOS between customer and existing systems) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>VOS sitting between a<br>customer's app and the<br>systems you own
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
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">is all it takes to switch VOS on for most</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">of handling saved against a call per order</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">intake, with nobody rostered to answer it</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>You bought good systems. The orders still arrive by voice.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Most wholesale businesses have perfectly decent software from the moment
      an order is entered onward. The trouble is everything before that:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🚪</div>
        <h4 class="mb-8">"Our systems start too late"</h4>
        <p class="text-muted" style="font-size:15px;">
          Nothing is digital until a person keys it. Up to that point the
          business runs on handwriting and memory.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">👥</div>
        <h4 class="mb-8">"Two staff exist to do data entry"</h4>
        <p class="text-muted" style="font-size:15px;">
          Their whole morning is turning messages into records. It is the least
          automated job in a business full of automation.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧱</div>
        <h4 class="mb-8">"Fixing it means a new platform"</h4>
        <p class="text-muted" style="font-size:15px;">
          Every quote for it arrives as a migration, a year of work and a reason
          to retrain everyone.
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
      <span class="eyebrow">Mind The Gap</span>
      <h2>Where most wholesale operations software leaves a hole</h2>
    </div>


    <!-- Feature 1: the intake layer -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">The Missing Layer</span>
          <h3>Close the gap between a customer and your systems.</h3>
          <p class="mt-12 text-muted">
            Your accounts get an app loaded with the items you sell them at your
            agreed figures. They talk the order through; it arrives written out against your codes. That one change moves the digital boundary of your
            business out to where the customer is.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A guide of their own per account, holding your prices</span></li>
            <li><span class="bullet-check">✓</span><span>Orders land coded, ready for whatever handles them next</span></li>
            <li><span class="bullet-check">✓</span><span>Accounts order at any hour without reaching anyone</span></li>
            <li><span class="bullet-check">✓</span><span>Each buyer checks the lines before sending</span></li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">The mechanics of a wholesale order →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A spoken order becoming<br>coded lines on its way<br>to the office
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: PRIMARY in body (use 3 of 6) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Additive, Not A Swap</span>
          <h3>Nothing you own has to go.</h3>
          <p class="mt-12 text-muted">
            Buying wholesale operations software usually means a migration.
            This does not: your accounting, your invoicing, your warehouse routine and your
            reporting all carry on untouched, and orders turn up in whatever
            shape they already expect.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Nothing to move and no switchover weekend</span></li>
            <li><span class="bullet-check">✓</span><span>Delivery by emailed file, EDI, QuickBooks or a direct connection</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing is entered twice when the feed is direct</span></li>
            <li><span class="bullet-check">✓</span><span>Made to plug in, so it stretches what your platform does</span></li>
          </ul>
          <a href="/distribution-automation-software" class="feature-link">Which manual steps disappear →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Delivery format options<br>next to an untouched<br>accounting system
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 - erp for wholesale distribution operations (Tier B) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Beside Your ERP</span>
          <h3>Pairs with an ERP for wholesale distribution operations.</h3>
          <p class="mt-12 text-muted">
            An ERP is the spine of the business and VOS is not trying to be one.
            There is no general ledger here, no payroll, no bin locations and no
            buying from your own suppliers. We take the front door and leave the
            spine alone.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Your ERP stays in charge of the books</span></li>
            <li><span class="bullet-check">✓</span><span>Orders feed in through EDI or the API</span></li>
            <li><span class="bullet-check">✓</span><span>No license to renegotiate and no module to switch off</span></li>
            <li><span class="bullet-check">✓</span><span>Works the same whether you run an ERP or a spreadsheet</span></li>
          </ul>
          <a href="/order-fulfillment-software" class="feature-link">What reaches your pickers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>An EDI feed arriving in<br>a distributor's existing<br>ERP
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: one screen + stock -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">One Screen To Run It</span>
          <h3>Your office side lives on the web.</h3>
          <p class="mt-12 text-muted">
            Account guides, customer records and order history all sit on one screen. Changing an account's price is something your own team does, not a ticket
            for somebody else, and live stock shifts with the ordering, drawn from your own records.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Edit an item or a price on one customer's list</span></li>
            <li><span class="bullet-check">✓</span><span>Add an account the day you win it</span></li>
            <li><span class="bullet-check">✓</span><span>Stock right across your catalog, kept current as levels move</span></li>
            <li><span class="bullet-check">✓</span><span>Runs with whatever holds your stock today</span></li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">Who sees the same stock numbers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Admin platform with<br>accounts, guides and a<br>stock panel
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
      <h2>Odds and ends you get anyway.</h2>
      <p class="lead mt-16">Small things, and all of them useful by week two.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">⏯️</div>
        <h4>Interrupted Orders Survive</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A cook pulled away comes back to the same spot in the list, with nothing
          said twice.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧍</div>
        <h4>Reps Back On The Road</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          With reorders handled in the app, your reps are out selling rather than
          taking dictation.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">👐</div>
        <h4>Nobody To Retrain</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your staff keep working in the systems they know. The only new thing is
          where the orders come from.
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
      <h3 style="margin-bottom:10px;">See where this would sit in your stack</h3>
      <p class="text-muted" style="font-size:16px;">
        Tell us what you run on a 20-minute call and we will show you the join.
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
      <h2>No project, no cutover, no retraining</h2>
      <p class="lead mt-16">
        The reason this is quick is that nothing underneath it moves. Three steps and the front end behaves differently.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Tell us what a customer buys</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Items, your prices, your codes. However you hold that today is almost
          certainly good enough.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Choose where orders should land</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An inbox, QuickBooks, EDI or the API. Whichever your office handles
          best today.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>We provision each account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          For most distributors that is a day or two, then buyers download it. After
          go-live you change guides and prices yourself on the web; we only do
          the initial load.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: account provisioning and delivery routing inside the VOS admin platform
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
      <h2>Operators on what actually changed</h2>
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
            "We were quoted a platform replacement to solve this. We solved it in
            a week without touching the platform."
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
            "The morning typing is gone. Same team, same software, different
            start to the day."
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
     Honest ✗ rows for every ERP function VOS has no part in.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>One layer of the stack.<br>Clearly labeled.</h2>
      <p class="lead mt-16">
        A map of who does what, including the long list of jobs VOS has no
        business doing. Treat wholesale operations software as a stack rather
        than a single purchase: if you need those rows, you need the middle
        column too.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">Wholesale ERP Suite</th>
            <th style="width:22%;">Spreadsheets + Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Customers place their own orders</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Spoken orders turned into coded lines</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Per-account item lists and prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Looked up each time</td>
          </tr>
          <tr>
            <td>General ledger and invoicing</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Partly</td>
          </tr>
          <tr>
            <td>Warehouse management and picking</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Purchasing from your own vendors</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>By phone</td>
          </tr>
          <tr>
            <td>Payroll and HR</td>
            <td><span class="check-no">✗</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>What adopting it asks of you</td>
            <td>Some item lists</td>
            <td>A migration</td>
            <td>Nothing new</td>
          </tr>
          <tr>
            <td>How long before it is running</td>
            <td>A day or two for most</td>
            <td>Months</td>
            <td>Running now</td>
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
     FAQ 1 carries the primary in the question (use 5 of 6), open by default.
     FAQ 3 carries it in an answer (use 6 of 6).
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Stack questions, answered plainly</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS wholesale operations software or an ERP?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          It is one layer, not the whole thing. VOS handles how orders arrive
          from your customers and the record each one leaves. It does not do your ledger, your billing, your warehouse or your own
          buying. An ERP does those, and the two run alongside each other rather than
          competing.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We have no ERP, just spreadsheets. Does that matter?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at all, and plenty of distributors in this trade are in that position.
          Orders can land as an emailed Excel or PDF file, which drops straight
          into how a spreadsheet operation already works. You can add
          heavier systems later without unpicking this.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will this create two places to keep prices?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It does mean the guides in VOS hold the prices your customers order
          at, so those need to stay right. In practice that is one screen on the web, and your own team does it. Decent wholesale operations software
          should not make price upkeep somebody's new job, and this does not.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do orders get into what we already run?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You choose the route when we set you up: by email as a PDF, Excel or Word file, through EDI, into QuickBooks, or
          straight into your ERP over the API. Take one of the direct feeds and the typing stops. A file sent by email may still get keyed in on your side.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it handle the warehouse or the trucks?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Bin locations, picking routes, scanning and delivery paperwork are all
          outside it. What it does for those teams is get them
          complete, confirmed orders earlier in the day, which is usually the
          constraint rather than the software.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens to the staff doing order entry now?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Worth thinking about before rollout. The typing was never the valuable part, so the usual answer is customer
          service, chasing shorts and selling. Accounts still phoning will keep
          them busy for a while yet.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is our business too small for something like this?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Unlikely. VOS is aimed at smaller distributors, DSD rounds included, and there is
          no IT requirement and no implementation team.
          Pricing is by quote for each distributor.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can we start with part of the customer base?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That is what we recommend. Pick the busiest accounts, get them on the app, and leave the rest
          exactly as they are. Nothing
          about the rollout is all or nothing.
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
  <h2>Ready to plug the hole at intake?</h2>
  <p>Keep every system you have. Change only how orders get in.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No migration</span>
    <span>✓ No cutover date</span>
    <span>✓ Nobody retrained</span>
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
        <li><a href="#features">The Missing Layer</a></li>
        <li><a href="#features">Additive, Not A Swap</a></li>
        <li><a href="#features">Beside Your ERP</a></li>
        <li><a href="#features">One Screen To Run It</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/inventory-forecasting-software">Inventory Forecasting</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs ERP Suites</a></li>
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
