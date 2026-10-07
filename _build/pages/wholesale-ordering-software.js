/* Page 18 - PRIMARY: wholesale ordering software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY: wholesale ordering app (H3), wholesale order management software (H3, Tier B),
 *   wholesale ordering platform (body), wholesale ordering system (body), wholesale order software (body),
 *   wholesale order taking software (Tier B, links out), wholesale order fulfillment software (Tier B, links out).
 * Audience: food distributors (seller side).
 * ANGLE (its one question): "How do wholesale orders arrive itemized and priced per account?"
 *   Order taking owns the intake channel (getting off the phone); order fulfillment owns the pick line.
 *   This page owns the wholesale order itself: pack sizes, each buyer's own price list, SKU codes,
 *   and the record that comes with it.
 * NOT claimed: order minimums, cut-off enforcement, credit limits, invoicing or payment. VOS carries
 *   the items and prices the distributor loads; it does not police order rules.
 */
module.exports = {
  title: 'Wholesale Ordering Software for Food Distributors | VOS',
  description: "Buyers speak an order into an app and you receive it priced to their own list. Wholesale ordering software that writes each line against your SKU codes.",
  related: ["order-taking-software","b2b-portal-software","order-fulfillment-software"],
  relatedHeading: 'More on taking and filling wholesale orders',
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
      <h1>Wholesale Ordering Software With A Guide Per Buyer.</h1>
      <p class="lead mt-16">
        Your accounts speak an order into the app from the item list you
        built for them. It reaches you written out in full, at that buyer's own
        prices, with your SKU codes already on it.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Your prices per account</span>
        <span class="hero-trust-dot"></span>
        <span>Usually live in 24-48 hrs</span>
        <span class="hero-trust-dot"></span>
        <span>No ERP to replace</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (wholesale order with pack sizes + SKU codes) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>A wholesale order coded<br>to your item list, at<br>that buyer's prices
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
      <div class="stat-label">less work per order than taking it down a phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">open, so a buyer can send at 2am if they like</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most buyers put in their first app order</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>A wholesale order is 40 lines. One of them is always wrong.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Wholesale is not one item in a basket. It is a long, repeating list with
      pack sizes, unit counts and a price that shifts from customer to customer. Three places
      that goes sideways:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📦</div>
        <h4 class="mb-8">"They said two, they meant two cases"</h4>
        <p class="text-muted" style="font-size:15px;">
          Cases, sleeves, each: the unit never gets said out loud on a call. The short turns up on the dock next morning instead.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🏷️</div>
        <h4 class="mb-8">"That is not the price we gave them"</h4>
        <p class="text-muted" style="font-size:15px;">
          Each account has its own agreed list. Pull a price off the wrong one
          and you are either losing margin or making an awkward call.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">✍️</div>
        <h4 class="mb-8">"We key the same order in twice"</h4>
        <p class="text-muted" style="font-size:15px;">
          Once on the notepad while they talk, again into the system afterwards.
          Two chances to mistype a code nobody checks.
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
      <span class="eyebrow">Line By Line</span>
      <h2>What wholesale ordering software has to carry on each line</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 - wholesale ordering app -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Said, Then Checked</span>
          <h3>A wholesale ordering app your buyer talks through.</h3>
          <p class="mt-12 text-muted">
            The buyer works down the guide out loud: item, how many, next. The
            app writes it up as they go, and they read the finished list back
            before it leaves. Catching a stray quantity is their job, on their
            screen, not yours on the dock.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Each line tied to one of your own SKUs</span></li>
            <li><span class="bullet-check">✓</span><span>The buyer signs off every line before it sends</span></li>
            <li><span class="bullet-check">✓</span><span>Walk off mid-order and the app keeps what was said</span></li>
            <li><span class="bullet-check">✓</span><span>An alert on their phone, or a text, once it reaches you</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">Moving accounts off the telephone →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order being built by<br>voice, with units shown<br>beside each quantity
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: PRIMARY in body (use 3 of 6) + SECONDARY wholesale ordering platform -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Their List, Your Numbers</span>
          <h3>One guide per account, at the prices you agreed.</h3>
          <p class="mt-12 text-muted">
            This is where wholesale ordering software either fits your business
            or fights it. A buyer only ever sees the items you sell them, at the
            figures on their own sheet. You keep control of both from one web screen, so a wholesale ordering
            platform never becomes a second set of prices to maintain.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Loaded straight from the sheet you send us</span></li>
            <li><span class="bullet-check">✓</span><span>Change one figure for an account without touching the rest</span></li>
            <li><span class="bullet-check">✓</span><span>Pull a line that is out, and it leaves their guide</span></li>
            <li><span class="bullet-check">✓</span><span>One figure changes in one place, so nobody is holding a second price list</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Keeping account guides current →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Two accounts, two price<br>sheets, same catalog<br>underneath
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY wholesale order management software (H3, Tier B) + wholesale ordering system (body) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Into Your Systems</span>
          <h3>The front door to your wholesale order management software.</h3>
          <p class="mt-12 text-muted">
            VOS takes the orders in; it does not replace the back office. Orders
            leave us in the shape you asked for, whether that is a file in an
            inbox, a QuickBooks entry, or a feed wired into your ERP. Whatever
            wholesale ordering system you run stays exactly where it is.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>SKU codes on the order when it arrives, not added later</span></li>
            <li><span class="bullet-check">✓</span><span>Where the route is EDI, an API feed or QuickBooks, no one re-enters a line</span></li>
            <li><span class="bullet-check">✓</span><span>One delivery format agreed with you at onboarding</span></li>
            <li><span class="bullet-check">✓</span><span>Your invoicing, your credit rules and your reporting carry on</span></li>
          </ul>
          <a href="/order-fulfillment-software" class="feature-link">From a sent order to the dock →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Same order leaving as<br>EDI, as Excel, and over<br>the API
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: SECONDARY wholesale order software (body) -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">A Record Per Order</span>
          <h3>Dated history for the accounts ordering in the app.</h3>
          <p class="mt-12 text-muted">
            Orders sent through VOS each get a number and the time they went out,
            filed under the account that placed them. Plain wholesale order
            software stops at taking the order. Having the history is what settles
            a "we never asked for that" conversation in about ten seconds.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Who ordered it, and the minute it was sent</span></li>
            <li><span class="bullet-check">✓</span><span>Look up an earlier app order from one screen on the web</span></li>
            <li><span class="bullet-check">✓</span><span>Reps see an account's buying pattern before they visit</span></li>
            <li><span class="bullet-check">✓</span><span>Orders taken by phone or voicemail carry no number, so fewer of those helps</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">Checking where an order got to →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Account history: numbered,<br>timestamped orders in<br>date order
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
      <h2>The rest of what a wholesale week needs.</h2>
      <p class="lead mt-16">Pieces that matter once the first dozen buyers have switched.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🧑‍🍳</div>
        <h4>Nothing For Buyers To Learn</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          They say what they say on the phone now. There is no catalog tree to
          learn and no training session to book.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Admin On One Screen</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Guides, accounts and past orders live together on the web, so a price
          change takes a minute rather than a ticket.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🚚</div>
        <h4>Works For DSD Routes Too</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Direct store delivery accounts can send ahead of the stop, so the truck
          is loaded against orders rather than a hunch.
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
      <h3 style="margin-bottom:10px;">See a 40-line order come in clean</h3>
      <p class="text-muted" style="font-size:16px;">
        Book 20 minutes and follow one order from a kitchen to your office.
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
      <h2>From a spreadsheet to live orders</h2>
      <p class="lead mt-16">
        No migration, no data project. You give us the lists you keep already, and we do the loading.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Hand over the price sheets</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          One sheet per account: items, prices and SKU codes. However you keep them
          today is usually fine.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We build the guides and accounts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each buyer ends up with their own list in the app, on iPhone or
          Android. For most distributors that is a day or two of work on our side.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Pick where orders should land</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Email, EDI, QuickBooks or a direct connection, agreed once. App orders
          keep taking that route from then on.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: price sheet upload and per-account guide setup in the VOS admin platform
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
      <h2>Wholesale buyers and the distributors behind them</h2>
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
            "Units were our biggest headache. Orders arrive on our own item codes now, and the dock argues with us
            a lot less."
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
            "Each customer sees their own sheet. We stopped worrying about who
            was quoted what three years ago."
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
     Honest ✗ rows: no warehouse functions, no invoicing, no order rules.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>The order lands clean.<br>Your office keeps the rest.</h2>
      <p class="lead mt-16">
        Good wholesale ordering software knows its own edges. VOS is the intake
        layer: invoicing, credit and warehouse work stay with the systems that
        already do them, and this table says so plainly.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">Wholesale ERP Order Module</th>
            <th style="width:22%;">Phone, Fax + Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Buyers place orders themselves, any hour</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Fax or voicemail will take it</td>
          </tr>
          <tr>
            <td>Order spoken, delivered as a written list</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Lines tied to your own SKUs</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed in later</td>
          </tr>
          <tr>
            <td>Per-account price sheets</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Manual lookup</td>
          </tr>
          <tr>
            <td>Up and running with no IT project</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Invoicing, credit limits and statements</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Picking, packing and warehouse moves</td>
            <td><span class="check-no">✗</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Sends orders on by EDI, API or QuickBooks</td>
            <td><span class="check-yes">✓</span></td>
            <td>It is the destination</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>What a buyer has to learn</td>
            <td>Nothing, they talk</td>
            <td>A screen and a login</td>
            <td>Your office hours</td>
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
     FAQ 5 carries it in an answer (use 6 of 6).
     FAQ 3 and 4 handle the Tier B fulfillment / order taking variants.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Wholesale ordering, answered plainly</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          What does wholesale ordering software actually have to do?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          Three things, in this trade. Let a buyer send 40 familiar lines without dialing anyone. Hold the right price and the right unit for that
          particular account. Deliver the result to the seller in a form their
          systems can read. VOS does those three and leaves billing, credit terms
          and the warehouse to the software you have.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do buyers get the units right when they are talking?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The guide we load holds each item as a SKU you sell, so nobody has to
          guess which pack was meant. The buyer then sees the full order written
          out and approves it before sending. The safeguard is that read-back,
          and it belongs to the person who knows what they meant.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this wholesale order taking software, or something for the buyer?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Both sides of the same order. The buyer gets an app with their own
          guide; you get the order in your format, with history per account. If
          your question is mainly about getting accounts off the phone, our order
          taking page covers that side in more detail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it handle the warehouse side as well?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. If you are shopping for wholesale order fulfillment software to run
          bins, pick paths or packing, VOS is not that and will not pretend to
          be. What it does for fulfillment is hand your pickers complete,
          confirmed orders earlier in the day.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will it fit alongside the ERP we already have?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That is the normal setup. Wholesale ordering software sitting in front
          of an existing ERP is what VOS is built for. Orders land by email as
          PDF, Excel or Word, by EDI, inside QuickBooks, or down an API link, and
          the ERP stays the system of record. Nothing migrates.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can we set order minimums or a cut-off time?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          VOS does not enforce order rules such as minimums, delivery days or a
          cut-off, so those stay where they are today, in your agreement with the
          account and in your own system. What changes is that orders tend to
          arrive earlier, which makes a cut-off easier to hold in practice.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we have to move every account over at once?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, and there is no need to. Start with the customers who order two or three times a week, because
          that is where the hours are. The
          rest keep calling, and their orders get written up the way they always
          were.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long before we are taking orders this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors, 24 to 48 hours. We load the guides, open the
          accounts and connect the delivery format you picked. There is no
          implementation phase and no IT work on your side. Most buyers order on the day they are set up.
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
  <h2>Ready for orders that land priced and coded?</h2>
  <p>See how a spoken list arrives as a coded, priced order.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Your price sheets, loaded for you</span>
    <span>✓ Coded to your own SKUs</span>
    <span>✓ No ERP migration</span>
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
        <li><a href="#features">Said, Then Checked</a></li>
        <li><a href="#features">Their List, Your Numbers</a></li>
        <li><a href="#features">Into Your Systems</a></li>
        <li><a href="#features">A Record Per Order</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/inventory-tracking-software">Inventory Tracking</a></li>
        <li><a href="/dsd-sales-software">DSD Sales</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs ERP Order Modules</a></li>
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
