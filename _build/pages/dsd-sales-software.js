/* Page 20 - PRIMARY: DSD sales software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY: DSD sales app (H3), direct store delivery software for small business (H3),
 *   mobile direct store delivery software (body), DSD route sales software (Tier B, body + FAQ),
 *   direct store delivery software (only ever inside the two longer variants, so it counts 2x).
 * Audience: DSD food distributors (a named VOS buyer segment on the live site).
 * ANGLE (its one question): "How do DSD accounts order ahead so the truck carries the right product?"
 *   Distributor sales owns the rep's week; order fulfillment owns the pick line.
 *   This page owns the gap between stops: the order arriving before the truck is loaded.
 * NOT claimed, and marked ✗ in the comparison on purpose: route planning or optimization,
 *   van sales and settlement, invoicing on the truck, proof of delivery, driver handhelds,
 *   mileage or GPS. The Tier C FAQ says outright that route accounting is a different product.
 * Live-site fact used: DSD page says drivers show up with the right product and the back office
 *   processes clean orders.
 */
module.exports = {
  title: 'DSD Sales Software for Direct Store Delivery | VOS',
  description: "Your accounts send tomorrow's order tonight, so the truck loads against real demand. DSD sales software that takes spoken orders around the clock.",
  related: ["distributor-sales-software","order-taking-software","inventory-tracking-software"],
  relatedHeading: 'More on orders, stock and the selling side',
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
      <h1>DSD Sales Software For Orders Placed Ahead.</h1>
      <p class="lead mt-16">
        Stop building tomorrow's load from guesswork. Your stores and kitchens speak their order into the app the night
        before, so the load matches what accounts asked for, item by item.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Built for DSD and independents</span>
        <span class="hero-trust-dot"></span>
        <span>No IT work needed</span>
        <span class="hero-trust-dot"></span>
        <span>Nothing to fit or install</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (tomorrow's orders by account, pre-route) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Tomorrow's orders listed<br>by account, in before<br>the load is built
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
      <div class="stat-label">ordering, so a store can send after close</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved against writing the order up at the stop</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">covers setup for most distributors, with no IT work</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>The order gets written at the stop. The product is on the shelf back home.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      On a DSD run, the order and the load get decided hours apart. When the first one is a guess, the second one is wrong:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🚚</div>
        <h4 class="mb-8">"We loaded for last week"</h4>
        <p class="text-muted" style="font-size:15px;">
          Nobody knew what the stores wanted, so the truck went out on an average
          and came back carrying half of it.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📝</div>
        <h4 class="mb-8">"It is on a pad in the cab"</h4>
        <p class="text-muted" style="font-size:15px;">
          Handwritten at the counter, keyed in that evening if the driver
          remembers. One digit out and the next delivery is short.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⏰</div>
        <h4 class="mb-8">"The manager was not in"</h4>
        <p class="text-muted" style="font-size:15px;">
          Whoever can say what to order is off shift when the driver calls, so
          you get whatever the closer guessed at.
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
      <span class="eyebrow">Order First, Load Second</span>
      <h2>What DSD sales software has to fix between stops</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 - DSD sales app -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Ordered The Night Before</span>
          <h3>A DSD sales app the store manager uses, not the driver.</h3>
          <p class="mt-12 text-muted">
            The person who knows the shelf is the one holding the phone. They
            talk through their list after close, check it on screen, and send it.
            By morning your team is loading against stated orders rather than a
            pattern from last month.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Spoken from the guide you loaded for that account</span></li>
            <li><span class="bullet-check">✓</span><span>Sent at 11pm if that is when the shift ends</span></li>
            <li><span class="bullet-check">✓</span><span>Read back on screen before it leaves their hands</span></li>
            <li><span class="bullet-check">✓</span><span>Confirmed by an alert or a text</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How orders get off the telephone →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Store manager speaking<br>an order after close,<br>list shown to approve
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: PRIMARY in body (use 3 of 6) + SECONDARY mobile direct store delivery software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Right Product On The Truck</span>
          <h3>Load against orders you can count.</h3>
          <p class="mt-12 text-muted">
            This is the point of DSD sales software for a small delivery business:
            knowing the day's demand before the truck is packed. Orders land with the account and the items on them, and your own stock
            view moves with the ordering, so the two sit together before anything
            is loaded. Mobile direct store delivery software helps the driver, but it cannot
            fix an order nobody placed yet.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Each order carries its account, its items and its send time</span></li>
            <li><span class="bullet-check">✓</span><span>Stock visibility that follows the ordering, fed by your own system</span></li>
            <li><span class="bullet-check">✓</span><span>On your side the catalog moves as stock levels do</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer surprises once the run is underway</span></li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">Who can see the same stock numbers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Tomorrow's orders, in<br>and itemized by account
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY DSD route sales software (Tier B) - scope limit stated here -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Where VOS Stops</span>
          <h3>The intake layer, not the truck layer.</h3>
          <p class="mt-12 text-muted">
            Be clear on the boundary before you buy. If you need DSD route sales
            software to settle van stock, print an invoice at the counter or
            capture a signature, that is route accounting and VOS is not it. What VOS does is put a complete, confirmed order in front of all of that.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Orders arrive matched to your SKUs, ready for whoever processes them</span></li>
            <li><span class="bullet-check">✓</span><span>Delivered into your systems in the format you choose</span></li>
            <li><span class="bullet-check">✓</span><span>Runs beside whatever route tool or ERP you have now</span></li>
            <li><span class="bullet-check">✓</span><span>No route building, settlement or signature capture in VOS</span></li>
          </ul>
          <a href="/order-fulfillment-software" class="feature-link">What this does for your pickers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>An app order handed to<br>an existing route and<br>accounting system
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: SECONDARY IN H3 - direct store delivery software for small business -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Sized For Your Operation</span>
          <h3>Direct store delivery software for small business, not a rollout.</h3>
          <p class="mt-12 text-muted">
            A five-truck operation cannot carry a twelve-month implementation.
            You send us the guides your stops buy from, we do the loading and the
            account setup, and your customers download an app they already know
            how to talk to.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>No hardware, no installs, no IT staff needed</span></li>
            <li><span class="bullet-check">✓</span><span>Accounts added one at a time as you win them</span></li>
            <li><span class="bullet-check">✓</span><span>Priced by quote for your business</span></li>
            <li><span class="bullet-check">✓</span><span>Works on the phone in a manager's apron pocket</span></li>
          </ul>
          <a href="/distributor-sales-software" class="feature-link">What it changes for your reps →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Account setup for a<br>small DSD operation in<br>the admin platform
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
      <h2>Details that matter on a delivery week.</h2>
      <p class="lead mt-16">The parts of the product a DSD team runs into by day three.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🔢</div>
        <h4>A Record For Anything Sent</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Anything sent through the app carries its own number, plus the day and
          minute it went, filed against the store it came from. Disputes get settled by looking.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏬</div>
        <h4>A Guide For Every Store</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each store orders from its own item list at its own prices, so a banner
          site and an independent are not sharing a catalog.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗃️</div>
        <h4>Back Office Gets It Clean</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders arrive itemized and coded, so your office processes them instead
          of deciphering a pad from the cab.
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
      <h3 style="margin-bottom:10px;">See tomorrow's orders arrive before you pack the truck</h3>
      <p class="text-muted" style="font-size:16px;">
        In 20 minutes you can see how a store would send its order after close.
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
      <h2>Running before your next delivery week</h2>
      <p class="lead mt-16">
        No handhelds to order, no training week, no change to how the trucks get
        loaded until the orders start arriving.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send the guides for your stops</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          What each store buys, at the price you give them, with your item codes. A spreadsheet per account is plenty.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We open each account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The loading and the setup are on us. Most distributors go live inside 24 to 48 hours of handing it over.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Stores order, you load to it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your office receives them in whichever shape you chose. Most accounts send their first one the day they are set up.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: store account provisioning and delivery format setup in the VOS admin platform
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
      <h2>Heard on the delivery side</h2>
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
            "Our managers send their lists overnight. We pack to orders now, and
            the trucks come home emptier."
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
            "No more pads in the cab. The order reaches the office coded, so nobody is deciphering handwriting at seven at night."
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
     Primary in the lead (use 4 of 6). Honest ✗ rows for every route-accounting function.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>The order, not the truck.<br>Know which one you are buying.</h2>
      <p class="lead mt-16">
        Plenty of DSD sales software is really route accounting: settling van
        stock, printing invoices at the counter. VOS sits upstream of all that, and the table below says where it stops.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">DSD Route Accounting Suite</th>
            <th style="width:22%;">Order Written at the Stop</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account places its own order before the visit</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Spoken by the customer, delivered as text</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Open after the store closes</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Per-store item list and prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>From memory</td>
          </tr>
          <tr>
            <td>Van stock, settlement and counter invoicing</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>On paper</td>
          </tr>
          <tr>
            <td>Route building and delivery sequencing</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Proof of delivery and signatures</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Paper ticket</td>
          </tr>
          <tr>
            <td>Hardware your team has to carry</td>
            <td>None</td>
            <td>Handhelds or printers</td>
            <td>A pad</td>
          </tr>
          <tr>
            <td>Time to switch on</td>
            <td>A day or two for most</td>
            <td>Months</td>
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
     FAQ 1 carries the primary in the question (use 5 of 6).
     FAQ 3 carries it in an answer (use 6 of 6).
     FAQ 2 is the Tier C route-accounting disambiguation.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>DSD questions, answered plainly</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          What does DSD sales software mean here, exactly?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          In our case it means one job: your direct store delivery accounts place
          their orders themselves, by voice, in an app, before the truck is
          loaded. The term gets used for everything from route settlement to
          merchandising audits, so it is worth pinning down. We do the ordering
          end and nothing past the loading bay.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this a replacement for our route accounting system?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Route accounting handles van inventory, settlement, counter
          invoicing and driver reconciliation, and none of that is in VOS. Keep
          the system you have. VOS feeds it orders that were already confirmed by the customer, so your
          office starts from something clean.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can drivers use it at the stop?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It is designed for the account to use, not the driver, and that is the
          point of running DSD sales software this way. The manager who walks the
          shelves speaks the order on their own phone, at a time that suits them.
          If a store genuinely cannot do that, keep taking those orders however you
          do today.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we need to give our stores tablets or scanners?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. The app runs on iPhone and Android, on phones store staff already
          have. There is no barcode scanning, no printer and no device program to budget for, which is usually the thing that stalls a DSD technology
          project.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do orders reach our office and our ERP?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You pick one route at onboarding: a PDF, Excel or Word attachment, EDI, QuickBooks, or an API hook into the
          system behind your office. Pick EDI, the API or QuickBooks as the route and nobody keys the order
          again.
          An emailed file may still be entered by hand on your side.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it tell us what to put on each truck?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not as an instruction, no. What it gives you is the orders themselves, each with the account, the
          items and the time it was sent, plus a stock view drawn from the tools you have. The loading decision stays with
          your team, which is where the local knowledge is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We run five trucks. Is that too small?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That is the size VOS was designed around. DSD operations and independents of that size are the buyers we
          serve, and there is no IT project, no implementation team and no
          enterprise contract. We quote per distributor.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What about accounts that will never use an app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Some stores will keep calling, and that is fine. Those orders get written up as they are now, and they carry no number or
          stamp from us.
          The gain comes from the accounts that do switch, which is usually the
          ones ordering two or three times a week.
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
  <h2>Ready to load against real orders?</h2>
  <p>Watch a store send tomorrow's order once the doors are locked.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No handhelds to buy</span>
    <span>✓ Keep your route system</span>
    <span>✓ Accounts opened on our side</span>
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
        <li><a href="#features">Ordered The Night Before</a></li>
        <li><a href="#features">Right Product On The Truck</a></li>
        <li><a href="#features">Where VOS Stops</a></li>
        <li><a href="#features">Sized For Your Operation</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/wholesale-ordering-software">Wholesale Ordering</a></li>
        <li><a href="/supplier-management-software">Supplier Management (kitchens)</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Route Accounting</a></li>
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
