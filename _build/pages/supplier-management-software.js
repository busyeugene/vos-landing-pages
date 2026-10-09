/* Page 21 - PRIMARY: supplier management software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY, Tier A/B: supplier management tool (H3), supplier management portal software (H3),
 *   supplier management platform (body), supplier management system (body),
 *   supplier management system software (body), best supplier management software (FAQ).
 * SECONDARY, Tier C (grouped into 3 disambiguating FAQs, never written up as capabilities):
 *   supplier relationship management srm software + supplier performance management software +
 *   supplier lifecycle management software  -> FAQ "is this an SRM";
 *   supplier information management software + supplier master data management software +
 *   supplier quality management software    -> FAQ "records, documents, certificates";
 *   supplier managed inventory software     -> FAQ "is this VMI/SMI".
 * Audience: RESTAURANT OPERATORS. Added to the OPERATOR sets in template.js and claims.js.
 *   Operator CTA ladder: hero "Get Set Up With VOS", mid "Book a Free Demo", final "Ask About Getting Started".
 * ANGLE (its one question): "What did I order from each supplier, and what did they confirm?"
 *   Restaurant purchasing owns the buying act (one app, many suppliers). This page owns the
 *   per-supplier record: a number, a time and a confirmation on each order you send.
 * SCOPE LIMIT, important: the KB lists "customers viewing their own order history" as UNCONFIRMED.
 *   So this page claims only per-order numbering, timestamps and confirmations on the operator side,
 *   and FAQ 5 sends the "can I browse everything I ever ordered" question to the distributor,
 *   whose admin platform is where history is confirmed to live.
 * Also NOT claimed: price comparison across suppliers (Q5), approval workflows, contracts,
 *   scorecards, supplier vetting or onboarding, spend analytics. All marked ✗ in the comparison.
 * Multi-supplier is always scoped to "suppliers on VOS" (open question, carried from batch 2).
 */
module.exports = {
  title: 'Supplier Management Software for Restaurants | VOS',
  description: "Order from every supplier on VOS in one app, by voice, with a number and a time on what you send. Supplier management software your distributor switches on.",
  related: ["restaurant-purchasing-software","order-entry-software","restaurant-stock-management-software"],
  relatedHeading: 'More for the ordering side of your kitchen',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1 (use 1 of 6). Operator hero: says VOS comes via the distributor.
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Supplier Management Software That Starts With The Order.</h1>
      <p class="lead mt-16">
        Every supplier you use on VOS lives in one app. Say your order, look over every line, and send it with a dated
        record attached. Your food
        distributors are the ones who set this up: each loads the guide you buy
        from.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VOS →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Your distributor switches it on</span>
        <span class="hero-trust-dot"></span>
        <span>A record per order</span>
        <span class="hero-trust-dot"></span>
        <span>Runs on your phone</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (two suppliers' guides + a confirmed order) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Two suppliers' guides and<br>one sent order showing<br>its number and time
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
      <div class="stat-label">off an order you used to place by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">ordering, including after the last cover goes out</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most kitchens send something for the first time</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Four suppliers, four habits, no single record.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      One takes texts, one wants a call before ten, one has a rep who writes it
      down. When something goes wrong, there is nothing to point at:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🤔</div>
        <h4 class="mb-8">"Did we order that or not?"</h4>
        <p class="text-muted" style="font-size:15px;">
          The order lived in a Tuesday phone call. Now two cases are missing
          and it is your word against theirs.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📒</div>
        <h4 class="mb-8">"It is in someone's head"</h4>
        <p class="text-muted" style="font-size:15px;">
          Your sous chef knows which supplier covers which items. On her day off
          that knowledge leaves the building.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔁</div>
        <h4 class="mb-8">"We ordered it twice"</h4>
        <p class="text-muted" style="font-size:15px;">
          Two people chasing the same missing case, two suppliers delivering it,
          and a crate of waste by Friday.
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
      <span class="eyebrow">One Place, One Record</span>
      <h2>What supplier management software looks like in a working kitchen</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 - supplier management tool -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Each Supplier, Own Guide</span>
          <h3>A supplier management tool that begins at the order.</h3>
          <p class="mt-12 text-muted">
            Each distributor that offers VOS loads the items it sells you, at the
            rates you settled with them. You pick the supplier, speak the
            list, and send it. No remembering who carries what, and no digging
            out last month's email to find a code.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A guide of its own for each supplier, holding only what they sell you</span></li>
            <li><span class="bullet-check">✓</span><span>The prices you negotiated, loaded by that supplier</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing for you to set up or maintain</span></li>
            <li><span class="bullet-check">✓</span><span>Covers the suppliers who are on VOS, which may not be all of them</span></li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">The buying side, in one app →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Supplier picker, each<br>with its own guide<br>and prices
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: PRIMARY in body (use 3 of 6) + SECONDARY supplier management platform -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">A Number On What You Send</span>
          <h3>Each order you put in through the app carries a time and a number.</h3>
          <p class="mt-12 text-muted">
            This is the part most supplier management software skips for a
            kitchen. The order you speak gets written out, you approve it, and it
            goes with its own number and timestamp. A supplier management
            platform that cannot tell you when you sent something is not much use
            on a Monday morning.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>You read the order right through before it sends</span></li>
            <li><span class="bullet-check">✓</span><span>Anything you send gets its own number, dated and timed</span></li>
            <li><span class="bullet-check">✓</span><span>A push notice or text confirms it reached the supplier</span></li>
            <li><span class="bullet-check">✓</span><span>Pulled off the floor halfway through? The app holds your place</span></li>
          </ul>
          <a href="/order-entry-software" class="feature-link">How placing an order works →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A sent order, stamped<br>and dated, as the<br>kitchen sees it
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY supplier management portal software (H3) + supplier management system (body) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Nothing To Administer</span>
          <h3>Supplier management portal software, without the admin.</h3>
          <p class="mt-12 text-muted">
            A kitchen does not have a procurement department. There is no supplier management system here for you to log into,
            configure or keep in order. Your distributor does the loading on
            their side, and your side is an app you talk to. Anyone on the schedule can be shown it in two minutes.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>No logins to hand out, no templates to build</span></li>
            <li><span class="bullet-check">✓</span><span>Your distributor looks after the item prices</span></li>
            <li><span class="bullet-check">✓</span><span>Works the same on every shift, with no training day</span></li>
            <li><span class="bullet-check">✓</span><span>Apps for iPhone and Android, on the phone you carry</span></li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">Ordering against what is on the shelf →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>The app a cook opens,<br>with no setup screens<br>to work through
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: SECONDARY supplier management system software (body) -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Fewer Awkward Calls</span>
          <h3>Something to point at when the delivery is light.</h3>
          <p class="mt-12 text-muted">
            A spoken order leaves no trace. One sent from the app has a number, a time and lines you approved, so
            the conversation is about the delivery rather than about memory. That is the everyday value of supplier management system software in a
            restaurant.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Lines you checked yourself, not a rep's handwriting</span></li>
            <li><span class="bullet-check">✓</span><span>Each line tied to the item code your supplier ships</span></li>
            <li><span class="bullet-check">✓</span><span>Your distributor gets the lines you signed off</span></li>
            <li><span class="bullet-check">✓</span><span>Orders you still phone in carry none of this</span></li>
          </ul>
          <a href="/vendor-management-software" class="feature-link">What your distributor sees on their side →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>An approved order, line<br>by line, as the supplier<br>received it
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
      <h2>Things a kitchen notices in week one.</h2>
      <p class="lead mt-16">Small, practical, and the reason people keep using it past the novelty.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Talk, Do Not Type</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Say what you need the way you would to a rep. Your phone does the
          recording and the writing down.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">👩‍🍳</div>
        <h4>Anyone On Shift Can Send It</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Ordering stops being one person's job, because the guide and the prices
          are already in the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📵</div>
        <h4>No Hold Music</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          No waiting on a line, no voicemail, no calling back twice because the
          first message was unclear.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     HORIZONTAL MID-PAGE CTA STRIP
     Mid CTA keeps the distributor CTA label per the template.
     ============================================================ -->
<section aria-label="Mid-page call to action" style="background:var(--color-light-bg);border-top:1px solid #e4e7ed;border-bottom:1px solid #e4e7ed;padding:48px 24px;">
  <div style="max-width:var(--max-width);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;">
    <div style="max-width:580px;">
      <h3 style="margin-bottom:10px;">See how an order to one supplier works</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute call shows you the app a cook would use, and who to ask
        about getting it.
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
      <span class="eyebrow">How You Get It</span>
      <h2>It comes through the distributors you already buy from</h2>
      <p class="lead mt-16">
        You do not buy VOS from us and install it. A supplier brings it to you,
        and your account arrives ready to order from.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask your distributor about VOS</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Or contact us and we will introduce you to someone there. Switching it
          on is their decision, not ours.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>They load your guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your items, your rates, your account. Distributors are usually running
          inside 24 to 48 hours.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>You speak your order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Download it, say the list, check it, off it goes. Most kitchens are ordering the same day.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: the app on a phone, showing a supplier's guide ready to order from
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
      <h2>From kitchens that order this way</h2>
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
            "When a case is missing I have the order with a time on it. That
            conversation takes a minute now."
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
            "Two of our three suppliers are in it. Whoever is closing can put
            the order in, not just me."
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
     Primary in the lead (use 4 of 6). Honest ✗ rows for every real SRM function.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>The ordering end of it.<br>Not a buying office.</h2>
      <p class="lead mt-16">
        Corporate supplier management software handles contracts, scoring and
        spend analysis. A restaurant needs it placed and recorded. Here is where the line falls.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">SRM / Procurement Suite</th>
            <th style="width:22%;">Calls, Texts + Emails</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Order spoken, sent in minutes</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>A call takes longer</td>
          </tr>
          <tr>
            <td>The suppliers you have on VOS, in one app</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Your own rates on the item list</td>
            <td><span class="check-yes">✓</span></td>
            <td>If maintained</td>
            <td>Looked up each time</td>
          </tr>
          <tr>
            <td>A number and a time on each one</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Email only</td>
          </tr>
          <tr>
            <td>Contracts, scorecards and supplier vetting</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Price comparison across suppliers</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>By hand</td>
          </tr>
          <tr>
            <td>Approval steps before an order goes out</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Who sets it up</td>
            <td>Your distributor</td>
            <td>You do</td>
            <td>Nobody</td>
          </tr>
          <tr>
            <td>What a new starter has to learn</td>
            <td>How to talk</td>
            <td>A system</td>
            <td>Who to ring</td>
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
     FAQ 2 carries it in an answer (use 6 of 6).
     FAQ 6, 7, 8 are the Tier C disambiguations (SRM family / records family / VMI).
     FAQ 5 is the honest limit on order history, per the open question in the KB.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Supplier questions from restaurant teams</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS supplier management software for a restaurant?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          For the ordering half of it, yes. You order from each supplier that is
          on VOS out of one app, by voice, and what you say is written out,
          approved by you and stamped with its own number. It does not
          hold contracts, score your suppliers or compare their prices, and we
          would rather set that expectation now than at the demo.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What is the best supplier management software for a small kitchen?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The one your team will actually use at the end of a shift. Most
          supplier management software is built for a buyer at a desk with time
          to fill in fields. A kitchen needs the order out in two minutes while
          the walk-in door is still open, which is the thinking behind ordering
          by voice.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I get all my suppliers in there?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only the ones that offer VOS, because each supplier loads your guide
          and prices on their own side. If two of your four distributors use it,
          those two are in the app and the others carry on as they are. If you want the others on it, we can approach them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it stop us ordering the same thing twice?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Partly, and only by making the ordering visible. Orders go from one app rather than from three phones, and each one is
          confirmed back to you, so the person locking up can tell that one already went. VOS does
          not count your stock or block a duplicate on its own.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I look back at everything we have ever ordered?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Each order you place in VOS is logged with the minute it went out, and
          you get a confirmation when it lands. How far back your own app view goes is
          worth asking your distributor, because the full history sits on their
          admin platform. We would rather you ask them than assume from this
          page.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this supplier relationship management SRM software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. If you are shopping for supplier performance management software to
          run scorecards, or supplier lifecycle management software to handle
          onboarding, renewals and offboarding, VOS handles none of that. Those
          tools manage the relationship. VOS places the order and records it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it store supplier documents and certificates?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Supplier information management software and supplier master data
          management software exist to hold that: bank details, insurance,
          addresses, approved vendor records. Food safety audits belong to
          supplier quality management software. None of it is in VOS, which holds your guides and the orders you send.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this supplier managed inventory software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Under supplier managed inventory the supplier watches your levels
          and tops you up. In VOS you decide and you push it out; nothing is ordered on your behalf and nothing leaves
          without a person sending it. Your supplier sees what you asked for, not what is on your shelves.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does it cost us?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That is a question for your distributor, since they are the ones who
          take VOS on and decide what it means for their customers. We do not
          publish pricing. Ask the rep you deal with, or get in touch and we will find out who to
          speak to.
        </div>
      </div>

    </div>
  </div>
</section>


<!--@RELATED-->


<!-- ============================================================
     SECTION 13: FINAL CONVERSION CTA
     Operator final CTA label.
     ============================================================ -->
<section class="final-cta" id="demo" aria-label="Sign up call to action">
  <h2>Want your suppliers in one app?</h2>
  <p>Tell us who you buy from and we will point you to the right distributor.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Your distributor turns it on</span>
    <span>✓ Your rates are already loaded</span>
    <span>✓ Speak an order at any hour</span>
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
        <li><a href="#features">Each Supplier, Own Guide</a></li>
        <li><a href="#features">A Number On What You Send</a></li>
        <li><a href="#features">Nothing To Administer</a></li>
        <li><a href="#features">Fewer Awkward Calls</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
        <li><a href="/vendor-management-software">Vendor Management (distributors)</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs SRM Suites</a></li>
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
