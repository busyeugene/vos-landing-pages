/* Page 22 - PRIMARY: distributor analytics software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY: "distributor reporting & analytics" (H3, Tier B), applying distributor analytics (body, Tier B),
 *   how analytics improve distributor profitability (FAQ question, Tier B).
 * NOTE on the ampersand: the "&" is written as a LITERAL & in the HTML, not &amp;. qa.js counts
 *   keywords on raw markup without decoding entities, so &amp; would read as a missing secondary.
 *   kwaudit.js decodes &amp; to & and so matches either way. Do not "fix" this to an entity.
 * Audience: food distributors (seller side).
 * ANGLE (its one question): "Where does the clean order data behind my reports come from?"
 *   Distribution resource planning owns the forward-looking plan (pickers, trucks, buying).
 *   This page owns measurement after the fact: the record each order leaves behind.
 * REFRAME, same treatment as the DRP page: VOS is NOT analytics software. No dashboards, no KPIs,
 *   no charts, no fill-rate or margin reporting. Said in the hero lead, FAQ 1 (open by default)
 *   and as honest ✗ rows in the comparison table.
 * Claim care: order history per account, order numbers and timestamps are verified. Everything a
 *   BI tool does is explicitly disclaimed. No ROI or percentage figures anywhere.
 */
module.exports = {
  title: 'Distributor Analytics Software Needs Clean Orders | VOS',
  description: "Reports are only as honest as the orders behind them. VOS hands distributor analytics software itemized, dated order records instead of phone notes.",
  related: ["distribution-resource-planning-software","order-tracking-software","wholesale-operations-software"],
  relatedHeading: 'More on what your order data feeds',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1 (use 1 of 6). Scope limit in the lead, on purpose.
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Distributor Analytics Software Runs On Clean Orders.</h1>
      <p class="lead mt-16">
        VOS does not draw you a dashboard. It fixes what the dashboard is drawn
        from: your customers say what they need into the app, and each order arrives itemized, dated and tied to an account.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Feeds the tools you have</span>
        <span class="hero-trust-dot"></span>
        <span>No dashboards here</span>
        <span class="hero-trust-dot"></span>
        <span>Records per account</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (order records list: account, items, date, number) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Order records by account,<br>each one dated and<br>numbered
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
      <div class="stat-label">capture, so late orders still leave a record</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">is what switching VOS on takes for most firms</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">of handling gone from an order taken by voice</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Nobody argues with the chart. They argue with the numbers in it.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      A report built on handwritten notes and voicemail is a guess with
      gridlines. Three reasons the numbers do not hold up:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🫥</div>
        <h4 class="mb-8">"Half the orders left no trace"</h4>
        <p class="text-muted" style="font-size:15px;">
          A call has no record, no stamp and no line items until somebody types
          one up. What was never captured cannot be measured.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔤</div>
        <h4 class="mb-8">"The same item, three spellings"</h4>
        <p class="text-muted" style="font-size:15px;">
          Typed in by three people over two years, so a report splits one
          product into three and the totals mean nothing.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🕰️</div>
        <h4 class="mb-8">"We know the week, not the hour"</h4>
        <p class="text-muted" style="font-size:15px;">
          Without a timestamp you cannot tell an early order from a panic one,
          and that difference is the whole story.
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
      <span class="eyebrow">Fix The Input First</span>
      <h2>What distributor analytics software cannot fix on its own</h2>
    </div>


    <!-- Feature 1: structured capture -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Captured, Not Transcribed</span>
          <h3>Orders become data at the moment they are spoken.</h3>
          <p class="mt-12 text-muted">
            A customer talks through the guide you loaded for them, so each line already arrives under the code you use. Nothing passes through
            a notepad on the way in, which is where meaning usually leaks out.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Each line lands on a code from your catalog</span></li>
            <li><span class="bullet-check">✓</span><span>Each quantity sits on one of your own SKUs</span></li>
            <li><span class="bullet-check">✓</span><span>The buyer confirms the lines, so errors get caught at source</span></li>
            <li><span class="bullet-check">✓</span><span>One spelling per product, because there is no typing</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Where the item codes come from →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Spoken line resolving to<br>a SKU on the account's<br>guide
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 (literal ampersand) + PRIMARY in body (use 3 of 6) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">A Record Per Order</span>
          <h3>What distributor reporting & analytics needs: a dated trail.</h3>
          <p class="mt-12 text-muted">
            An order out of the app brings its own number and the time it was sent,
            filed under that account. Feed that into whatever
            distributor analytics software you use and the output stops being a
            best guess about last quarter.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Its own number on anything sent from the app</span></li>
            <li><span class="bullet-check">✓</span><span>The hour it was placed, not just the day</span></li>
            <li><span class="bullet-check">✓</span><span>Who placed it, held against their account</span></li>
            <li><span class="bullet-check">✓</span><span>Earlier orders, still there to read</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">Following a single order →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>An account's order trail<br>with numbers, dates<br>and times
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY applying distributor analytics (body, Tier B) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Out To Your Tools</span>
          <h3>Goes where your reporting already lives.</h3>
          <p class="mt-12 text-muted">
            Applying distributor analytics is easier in a tool your team already
            trusts, so we pass the records to it as well as holding them on your
            own VOS screen.
            Pick the route once: a file in an inbox, a QuickBooks entry, EDI, or a direct link to your ERP.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Nothing new for your analyst to learn</span></li>
            <li><span class="bullet-check">✓</span><span>With EDI, the API or QuickBooks nothing is keyed twice</span></li>
            <li><span class="bullet-check">✓</span><span>Your ERP stays the system of record</span></li>
            <li><span class="bullet-check">✓</span><span>No export project to schedule</span></li>
          </ul>
          <a href="/distribution-resource-planning-software" class="feature-link">Feeding your distribution plan →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Delivery format picker,<br>with records heading<br>into an ERP
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: stock side -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Stock In The Picture</span>
          <h3>What you had, beside what they asked for.</h3>
          <p class="mt-12 text-muted">
            Order records on their own tell you what was wanted. VOS also shows live stock that shifts with the ordering, fed by your own
            inventory system, so demand and availability sit next to each other
            rather than in two different meetings.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Stock view across the whole catalog, not just today's lines</span></li>
            <li><span class="bullet-check">✓</span><span>The catalog on your side updates as stock levels change</span></li>
            <li><span class="bullet-check">✓</span><span>Works beside whatever you count stock in today</span></li>
            <li><span class="bullet-check">✓</span><span>The demo walks through how your levels would connect</span></li>
          </ul>
          <a href="/inventory-control-software" class="feature-link">Where shorts cost you margin →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Stock levels alongside<br>the day's incoming<br>order lines
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
      <h2>The rest of what comes with it.</h2>
      <p class="lead mt-16">Useful next to the records, and not a reporting feature in sight.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🌃</div>
        <h4>Prices As You Agreed Them</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each guide carries the figures you set for that customer, so the record
          shows what they were actually charged.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">👤</div>
        <h4>Reps Freed From Order Taking</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          When customers order themselves, your reps spend the week selling instead
          of writing lists down.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧩</div>
        <h4>Additive By Design</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Built to connect, so it extends the platform you run rather than asking
          you to leave it.
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
      <h3 style="margin-bottom:10px;">See the record one app order leaves behind</h3>
      <p class="text-muted" style="font-size:16px;">
        Ask for the 20-minute demo and see what lands in your systems, and what
        shape it is in.
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
      <h2>Better records by the end of the week</h2>
      <p class="lead mt-16">
        No data warehouse, no migration, no build phase. Three steps and
        your order trail starts filling up on its own.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Give us the item lists</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A list for each account, carrying your codes. That is what makes the orders
          comparable later.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We provision each account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Most firms are switched on in 24 to 48 hours, with nothing asked of
          your IT people.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Records build as people order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The trail fills up on its own. Most buyers are ordering the day
          they are set up.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: item list upload and account provisioning in the VOS admin platform
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
      <h2>What better records changed</h2>
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
            "Our monthly numbers used to come with an asterisk. They do not any
            more, because the orders arrive as data."
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
            "I can finally see what an account stopped ordering, because the history
            is item by item."
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
     Honest ✗ rows throughout the VOS column: dashboards, KPIs and charts are
     somebody else's product and the table says so.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>We are the source.<br>Not the chart.</h2>
      <p class="lead mt-16">
        Worth saying plainly: distributor analytics software draws the charts, and
        VOS draws none of them. No dashboard, no KPI and no chart anywhere in
        it. Here is what each side actually does.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">BI or Analytics Tool</th>
            <th style="width:22%;">Phone + Email Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Captures the order in the first place</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>On paper first</td>
          </tr>
          <tr>
            <td>Each line sits on your own product code</td>
            <td><span class="check-yes">✓</span></td>
            <td>Whatever it is fed</td>
            <td>Typed in later</td>
          </tr>
          <tr>
            <td>A reference, plus a timestamp</td>
            <td><span class="check-yes">✓</span></td>
            <td>Whatever it is fed</td>
            <td>Email carries a time</td>
          </tr>
          <tr>
            <td>Dashboards, KPIs and charts</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Fill rate and margin reporting</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Demand prediction</td>
            <td><span class="check-no">✗</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Hands records to your ERP by EDI or API</td>
            <td><span class="check-yes">✓</span></td>
            <td>Reads from it</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Captures orders outside office hours</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>Voicemail takes it</td>
          </tr>
          <tr>
            <td>Time before it is useful</td>
            <td>A day or two for most</td>
            <td>After a build</td>
            <td>Already running</td>
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
     FAQ 4 carries the primary in an answer (use 6 of 6).
     FAQ 3 holds the third secondary as its question.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Reporting questions, answered without spin</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS distributor analytics software?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No, and it is better to say so on the way in. VOS builds no
          dashboards, calculates no KPIs and draws no charts. It is the layer
          underneath: your customers' spoken orders captured as structured records, numbered,
          timed and matched to your own codes, then handed to whatever you report
          with.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          So what do we actually get to look at?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          On the web you get the orders each account sent from the app, the items on
          them, its own number and when it was sent, along with the guide it
          orders from. It is a record you can read back through, not a reporting suite, and nobody here will pretend
          otherwise.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          People ask how analytics improve distributor profitability. What is realistic?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Honest answer: analytics change nothing by themselves, and we publish
          no figures claiming otherwise. What a reliable order trail lets you do
          is spot an account whose ordering slipped, or a product nobody reorders. Acting on those is where any
          gain comes from.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can we get the records into our own warehouse or BI tool?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, through the delivery route you pick at onboarding: by email as a PDF, Excel or Word file, through EDI, into QuickBooks, or
          straight into your ERP over the API. From there your own pipeline takes over. An order emailed as a file may still be keyed in by your office.
          Distributor analytics software downstream sees orders that never passed
          through a notepad.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it forecast anything?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS runs no forecasting model and predicts nothing about next
          month. It records what was ordered and when. If a forecast is what you are after, the tool that produces one reads
          these records rather than retyped phone notes.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What about the orders that still come by phone?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They stay as they are, and they bring no reference or stamp from us, so
          they will not show up in anything built on VOS records. That gap
          is worth knowing about: the more of your customers switch, the more of the picture is real.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we need an analyst to make this worth it?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. You do not need somebody with that job title. The
          records are useful on their own when a customer queries a delivery or a
          rep wants to know what a kitchen has stopped buying, long before anyone
          builds a report.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long until there is enough history to be useful?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The trail starts from the first order, so a few weeks in you have
          patterns per account. We do not backfill your old phone orders,
          because we were not there for them.
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
  <h2>Want numbers you would defend?</h2>
  <p>Start with how an order reaches you. See a spoken order land as a record.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No reporting project</span>
    <span>✓ Keep your BI tool</span>
    <span>✓ An order trail you can search</span>
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
        <li><a href="#features">Captured, Not Transcribed</a></li>
        <li><a href="#features">A Record Per Order</a></li>
        <li><a href="#features">Out To Your Tools</a></li>
        <li><a href="#features">Stock In The Picture</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/inventory-planning-software">Inventory Planning</a></li>
        <li><a href="/inventory-forecasting-software">Inventory Forecasting</a></li>
        <li><a href="/distribution-workflow-software">Distribution Workflow</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs BI Tools</a></li>
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
