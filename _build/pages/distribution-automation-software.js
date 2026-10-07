/* Page 25 - PRIMARY: distribution automation software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY: distribution automation system (H3), distribution automation solution (body),
 *   automated software distribution (Tier C, FAQ question) and automated software distribution tool
 *   (Tier C, same FAQ answer). The bare phrase therefore appears twice, which is qa.js's limit.
 * Two Tier C disambiguations on this page, both real alternative meanings of the head term:
 *   1. "automated software distribution" = IT software deployment to endpoints. Not us.
 *   2. "distribution automation" = electricity grid automation (feeders, switches, outage
 *      management). Also not us. Answered honestly rather than ignored.
 * Audience: food distributors (seller side).
 * ANGLE (its one question): "Which manual steps between a customer's order and my delivery go away?"
 *   Scoped STRICTLY to the order path: capture, confirmation, delivery into systems, the record.
 *   Inventory automation owns the stock side (par gaps, suggested reorders, catalog updates) and
 *   this page must not drift there: stock gets one link and nothing more.
 * NOT claimed: automated ordering (a person always sends), route or warehouse automation,
 *   invoice or payment automation, approval workflows. All ✗ in the comparison.
 */
module.exports = {
  title: 'Distribution Automation Software for Orders | VOS',
  description: "Take the hand-work out of the order path. VOS is distribution automation software for one stretch of it: capture, approval, then delivery into your systems.",
  related: ["distribution-workflow-software","wholesale-operations-software","order-fulfillment-software"],
  relatedHeading: 'More on the path an order takes',
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
      <h1>Distribution Automation Software For The Order Path.</h1>
      <p class="lead mt-16">
        Count the hands an order passes through before it is real. With VOS the kitchens you supply say it into the app, confirm it
        themselves, and it arrives in your systems as a coded record.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Nothing sends itself</span>
        <span class="hero-trust-dot"></span>
        <span>A day or two for most</span>
        <span class="hero-trust-dot"></span>
        <span>No middleware to babysit</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (order path: spoken, confirmed, delivered) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>One order spoken,<br>confirmed, then delivered<br>as a record
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
      <div class="stat-label">of hand-work removed from one order</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">running, with nobody staffing the inbox</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">is the whole setup for most food distributors</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Six people touch an order before anything gets picked.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Nobody designed it this way. It accumulated. Three stretches of that journey still done entirely by hand:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4 class="mb-8">"Listen, write, read back"</h4>
        <p class="text-muted" style="font-size:15px;">
          Someone takes the call, scribbles the list, repeats it, then fixes
          whatever got misheard. Twenty minutes per customer.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4 class="mb-8">"Then it gets typed in again"</h4>
        <p class="text-muted" style="font-size:15px;">
          The same lines go from a pad into a screen, matched to codes from
          memory, with one more chance to go wrong.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📣</div>
        <h4 class="mb-8">"And somebody rings them back"</h4>
        <p class="text-muted" style="font-size:15px;">
          To confirm it, to query a quantity, or to say an item is out. Another
          call, another note, another gap.
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
      <span class="eyebrow">Steps That Disappear</span>
      <h2>What distribution automation software can take off your team</h2>
    </div>


    <!-- Feature 1: capture -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Capture Without A Person</span>
          <h3>The order writes itself up as it is spoken.</h3>
          <p class="mt-12 text-muted">
            Your customer works down their own account guide and the app builds the
            list as they go. Nobody on your side listens, writes, or reads anything back, because
            whoever knows the order is the one creating it.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>No call to answer and no voicemail to clear</span></li>
            <li><span class="bullet-check">✓</span><span>Lines matched to your codes as they are said</span></li>
            <li><span class="bullet-check">✓</span><span>Each quantity attached to one of your SKUs</span></li>
            <li><span class="bullet-check">✓</span><span>Works at 2am as well as at 2pm</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How intake changes for your team →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>An order assembling<br>itself as the buyer<br>talks
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 - distribution automation system + PRIMARY in body (use 3 of 6) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Checked At Source</span>
          <h3>A distribution automation system still needs a human yes.</h3>
          <p class="mt-12 text-muted">
            The buyer reads the completed order and approves it before anything
            leaves their phone, then gets a confirmation when it lands. That is
            deliberate: distribution automation software that fires orders off
            without anyone looking just automates the mistakes.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Approval sits with the person who placed it</span></li>
            <li><span class="bullet-check">✓</span><span>We never submit an order for somebody</span></li>
            <li><span class="bullet-check">✓</span><span>Their confirmation arrives as an alert or a text</span></li>
            <li><span class="bullet-check">✓</span><span>Interrupted halfway? Their place is held</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">Where a sent order stands →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Approval screen, then the<br>confirmation arriving<br>back
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY distribution automation solution (body) - delivery into systems -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Delivered, Not Dictated</span>
          <h3>Straight into your systems on a direct feed.</h3>
          <p class="mt-12 text-muted">
            The last manual step on the path is somebody entering the order
            where it belongs. Choose EDI, QuickBooks or the API and that step is gone outright,
            which is the part of any distribution automation solution your office
            actually feels.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>One delivery route, agreed at onboarding</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing gets keyed again on those routes</span></li>
            <li><span class="bullet-check">✓</span><span>A file sent by email may still need keying on your side</span></li>
            <li><span class="bullet-check">✓</span><span>Your ERP and invoicing carry on as they are</span></li>
          </ul>
          <a href="/inventory-automation-software" class="feature-link">The stock side of the same idea →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>An order arriving over<br>EDI with no one<br>touching it
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: records -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Paperwork That Writes Itself</span>
          <h3>Each order files itself against the customer.</h3>
          <p class="mt-12 text-muted">
            Reference number, time of sending and line items, kept beside the account
            that ordered. Nobody maintains a log, nobody updates a
            spreadsheet, and a query about last Tuesday is a search rather than
            a conversation.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Its own reference on anything the app sends</span></li>
            <li><span class="bullet-check">✓</span><span>Filed against the account automatically</span></li>
            <li><span class="bullet-check">✓</span><span>Kept on one screen for your staff</span></li>
            <li><span class="bullet-check">✓</span><span>Phone orders carry none of this, as before</span></li>
          </ul>
          <a href="/distributor-analytics-software" class="feature-link">What those records are good for →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order log building up<br>on its own, account by<br>account
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
      <h2>Other hand-work that goes quiet.</h2>
      <p class="lead mt-16">Smaller jobs nobody counts until they stop appearing.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📬</div>
        <h4>Offers Without A Phone Round</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Send a promotion by a push or a text into the app, rather than working
          down a sheet of numbers.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📊</div>
        <h4>Stock Visible While Orders Land</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A stock picture that moves with the ordering, drawn from the inventory
          tools you have.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🙋</div>
        <h4>Fewer Chasing Calls</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A confirmation goes back on its own, so customers ring less often to
          ask whether it arrived.
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
      <h3 style="margin-bottom:10px;">Count the steps that would disappear</h3>
      <p class="text-muted" style="font-size:16px;">
        Walk us through the journey an order makes today, and we will show you
        what is left afterwards.
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
      <h2>Automating this takes no developer</h2>
      <p class="lead mt-16">
        There is nothing to build, script or connect before you start. Three
        steps, and the manual stretch at the front is gone.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send the account guides over</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          What they buy, at your figures, with your codes: one guide each. A
          spreadsheet each is fine.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We load and provision</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Most distributors are switched on inside 24 to 48 hours. Nothing is
          installed on a machine of yours.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders begin arriving finished</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Spoken, approved and delivered by your chosen route. Most buyers send
          one the day they are set up.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: guide loading and delivery route configuration in the VOS admin platform
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
      <h2>What stopped being done by hand</h2>
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
            "Nobody reads an order back down the phone here any more. It turns up
            finished."
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
            "We tried scripting our way out of this twice. Changing where the orders start worked instead."
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
     Honest ✗ rows: VOS automates the order path and nothing else, and never
     sends an order without a person.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>One stretch of the chain.<br>Automated properly.</h2>
      <p class="lead mt-16">
        Distribution automation software covers very different ground depending on
        who is selling it. VOS automates the run from a customer's decision to a
        record in your system. Trucks, warehouses and invoices are not on that list, and the ✗
        marks say so.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">ERP Automation Module</th>
            <th style="width:22%;">Manual Order Desk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Removes the call from order intake</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Arrives coded, no entry step on direct routes</td>
            <td><span class="check-yes">✓</span></td>
            <td>Once it is inside</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>The customer is told it arrived</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Another call</td>
          </tr>
          <tr>
            <td>Customer approves before anything moves</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Only when read back</td>
          </tr>
          <tr>
            <td>Sends orders with no human involved</td>
            <td><span class="check-no">✗</span></td>
            <td>Sometimes</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Warehouse and picking automation</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Routing and delivery scheduling</td>
            <td><span class="check-no">✗</span></td>
            <td>Varies</td>
            <td>On a whiteboard</td>
          </tr>
          <tr>
            <td>Invoice and payment automation</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Work to get it live</td>
            <td>Send item lists</td>
            <td>A configuration project</td>
            <td>None, it is people</td>
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
     FAQ 6 and 7 are the two Tier C disambiguations (IT deployment, electricity grid).
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>What gets automated, and what does not</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Which parts does distribution automation software like this cover?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          One stretch, end to end: a customer deciding what they need, the order being written up and
          approved, and the result landing in your systems coded, with its own
          reference. Everything after that, from picking to delivery to the invoice, belongs
          to the software you have.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will it place orders for our customers automatically?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, and that is a design decision rather than a missing feature. A
          person reads the lines and sends them. Nothing goes out on a customer's behalf, because an order sent by a
          machine on a bad assumption is a credit note with extra steps.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can we really get rid of the retyping?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          On the EDI, QuickBooks and API routes, yes: the record arrives in your
          system without anyone touching it. If you take orders as an emailed PDF, Excel or Word file instead,
          somebody may still key it in. That is the one choice in setting up
          distribution automation software worth thinking about properly.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we need middleware or a developer?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is nothing to host, no script to write and no integration
          platform in the middle. We agree the delivery method with you during onboarding and it keeps
          working without maintenance.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can the old way keep running alongside it?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Those calls still get handled by a person, exactly as now, and they
          carry no reference or send time from us. The place to begin is your most frequent orderers, since that is where
          the hours pile up.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this automated software distribution, as in deploying software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. If you are looking for an automated software distribution tool to
          push applications and patches out to laptops and servers, that is a different field entirely. VOS has no part in it. We are about food
          orders moving from a restaurant to its distributor.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does this relate to grid distribution automation?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Also no. In the electricity industry the same term covers feeder
          switching, fault location and outage management on a power network.
          Nothing here touches utilities. The overlap is only in the words.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How many accounts need to move for this to be worth doing?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Savings land per order, not per customer, so it turns on how often they
          order. Start with the handful of customers ordering most often. We quote for each distributor, so ask us to run through the arithmetic on
          the call.
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
  <h2>Ready to take the hand-work out?</h2>
  <p>See an order travel from spoken to filed with nobody typing in between.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No scripts to maintain</span>
    <span>✓ A person always approves</span>
    <span>✓ No middleware</span>
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
        <li><a href="#features">Capture Without A Person</a></li>
        <li><a href="#features">Checked At Source</a></li>
        <li><a href="#features">Delivered, Not Dictated</a></li>
        <li><a href="#features">Paperwork That Writes Itself</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/inventory-automation-software">Inventory Automation</a></li>
        <li><a href="/order-taking-software">Order Taking</a></li>
        <li><a href="/distributor-analytics-software">Distributor Analytics</a></li>
        <li><a href="/supplier-management-software">Supplier Management (kitchens)</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Automation Modules</a></li>
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
