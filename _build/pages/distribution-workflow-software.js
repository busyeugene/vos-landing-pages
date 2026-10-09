/* Page 26 - PRIMARY: distribution workflow software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY: distribution workflow management software (H3), distribution workflow solution (body).
 * Audience: food distributors (seller side).
 * ANGLE (its one question): "What sequence does an order follow, and who touches it?"
 *   Distribution automation owns which manual steps disappear. Wholesale operations owns where VOS
 *   sits in the stack. This page owns the sequence itself: one path, the same on every shift,
 *   with each handoff in a known place.
 * REFRAME: VOS is not a workflow builder. There is no designer, no approval chain, no task
 *   assignment and no rules engine. It fixes the first leg of the path so the rest is repeatable.
 *   Said in the hero lead, FAQ 1 (open by default) and as honest ✗ rows in the comparison.
 * Avoid in the H1: "every order" trips the claim rule about scope, so the H1 says "every shift".
 */
module.exports = {
  title: 'Distribution Workflow Software for Order Handoffs | VOS',
  description: "One path from the customer's order to your delivery, the same on every shift. VOS is the distribution workflow software for the first leg of that path.",
  related: ["distribution-automation-software","order-fulfillment-software","distributor-analytics-software"],
  relatedHeading: 'More on the order path and its handoffs',
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
      <h1>Distribution Workflow Software That Holds Every Shift.</h1>
      <p class="lead mt-16">
        VOS builds you no flowchart. It settles the first leg instead. The restaurants on your books talk
        their order into the app, and it reaches your team by one agreed route,
        in one shape, whoever happens to be working.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>One route, set once</span>
        <span class="hero-trust-dot"></span>
        <span>Works on any shift</span>
        <span class="hero-trust-dot"></span>
        <span>No rules to configure</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (the path: buyer -> app -> agreed delivery route) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>The path an order takes,<br>from a buyer's phone to<br>your office
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
      <div class="stat-label">the same path, whether or not anyone is in</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">less handling on each order that takes it</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">to put one shared path in place for most distributors</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>There is a process. It lives in four people's heads.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Ask two staff how an order gets from a chef to the pick list and you get
      two answers. That is not a documentation problem, it is a path problem:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🔀</div>
        <h4 class="mb-8">"It depends who picks up"</h4>
        <p class="text-muted" style="font-size:15px;">
          One takes it on a pad, one texts it to the warehouse, one remembers to
          enter it. Same business, three paths.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🎒</div>
        <h4 class="mb-8">"Only Dave knows that account"</h4>
        <p class="text-muted" style="font-size:15px;">
          Which items they get, what price, who to call about a short. When Dave
          is off, the account gets guesswork.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🫳</div>
        <h4 class="mb-8">"It fell between two people"</h4>
        <p class="text-muted" style="font-size:15px;">
          The order was taken and never entered, or entered twice. Nobody can tell you where it stopped, because nothing recorded the
          handoff.
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
      <span class="eyebrow">One Path, Written Down</span>
      <h2>What distribution workflow software has to pin down</h2>
    </div>


    <!-- Feature 1: who starts it -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">The Path Starts Outside</span>
          <h3>The customer takes the first step, not your staff.</h3>
          <p class="mt-12 text-muted">
            Today the path begins when somebody of yours answers a phone, which
            means it begins differently every time. Move that start to the buyer and it is identical each time: their
            guide, their words, their approval.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Begins with whoever knows what is needed</span></li>
            <li><span class="bullet-check">✓</span><span>Items and prices come from the guide set up for them</span></li>
            <li><span class="bullet-check">✓</span><span>No dependency on who is on shift</span></li>
            <li><span class="bullet-check">✓</span><span>The same at 6am and at 11pm</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Keeping account guides right →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A buyer starting the<br>order themselves, from<br>their own guide
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 - distribution workflow management software + PRIMARY in body (use 3 of 6) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">One Handoff, Not Four</span>
          <h3>Distribution workflow management software, without the build.</h3>
          <p class="mt-12 text-muted">
            You do not need a rules engine to fix this. Orders leave the app by one route you agree with us and land identically
            each time, which is most of what people want from distribution
            workflow software in the first place.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>One delivery method, agreed with you up front</span></li>
            <li><span class="bullet-check">✓</span><span>A file by email, a QuickBooks entry, EDI or a live connection</span></li>
            <li><span class="bullet-check">✓</span><span>With a direct feed nobody has to key it in</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing for your team to remember to forward</span></li>
          </ul>
          <a href="/order-fulfillment-software" class="feature-link">What the pickers receive →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A single agreed route<br>out of VOS into an<br>existing system
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY distribution workflow solution (body) - the record of the handoff -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Handoffs On Record</span>
          <h3>You can tell where an order got to.</h3>
          <p class="mt-12 text-muted">
            Anything out of the app has a reference, a stamped time and the account
            attached, so "did that come in?" has an answer. Any distribution workflow solution worth running has to make the handoff
            visible, and that is the piece a telephone call never provides.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A reference number on anything sent from the app</span></li>
            <li><span class="bullet-check">✓</span><span>The buyer gets a confirmation when it lands</span></li>
            <li><span class="bullet-check">✓</span><span>Kept by account on one screen</span></li>
            <li><span class="bullet-check">✓</span><span>Phone orders stay invisible to this, as they always were</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">Following an order through →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order references and send<br>times listed under one<br>account
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: exceptions -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Exceptions Still Need People</span>
          <h3>A short is a conversation. Have it earlier.</h3>
          <p class="mt-12 text-muted">
            Nothing automates away a line you cannot fill. What changes is the
            timing: with stock visibility moving alongside the ordering, your people are
            looking at it while there is still a morning to act in.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Stock across the catalog, moving as your levels do</span></li>
            <li><span class="bullet-check">✓</span><span>Orders in earlier, so substitutions are not last minute</span></li>
            <li><span class="bullet-check">✓</span><span>A person decides the swap, every time</span></li>
            <li><span class="bullet-check">✓</span><span>Sits next to the stock tools you run now</span></li>
          </ul>
          <a href="/inventory-control-software" class="feature-link">Where shorts and substitutions cost margin →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Stock levels shown next<br>to the day's orders
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
      <h2>Things that keep the path clean.</h2>
      <p class="lead mt-16">Small by themselves, and the reason the process does not drift back.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Account Knowledge Out Of Heads</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          What an account buys and at what price lives in its guide, not in one
          colleague's memory of a conversation.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🆗</div>
        <h4>Approval Sits With The Buyer</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          They read the lines and send them. There is no internal sign-off step
          to chase on your side.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧑‍💼</div>
        <h4>A Day Off Is Not A Crisis</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          With the path outside your staffing, somebody being off does not change how an account's order arrives.
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
      <h3 style="margin-bottom:10px;">Draw your order path with us in 20 minutes</h3>
      <p class="text-muted" style="font-size:16px;">
        Tell us how it runs today and we will point at the legs this would
        replace.
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
      <h2>Agreeing the path takes one conversation</h2>
      <p class="lead mt-16">
        There is nothing to diagram and no process to write up. You tell us two
        things, we do the rest.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>What each account can order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A guide per customer: items, your prices, your codes. However it is
          held today usually works.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Where finished orders land</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The same destination for every account: an inbox, QuickBooks, EDI or the API. That
          decision is the whole workflow design.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>We set each account up and off it goes</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          For most distributors the whole thing takes 24 to 48 hours. Buyers get the app and usually order the same day.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: guide setup and the single delivery route chosen in the VOS admin platform
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
      <h2>Teams on running a single path</h2>
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
            "Holiday weeks used to be chaos because the process was really three
            processes. Now it is one."
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
            "Orders arrive the same way now, so nothing waits on someone remembering
            to pass it on."
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
     Honest ✗ rows: no designer, no approval chains, no task assignment,
     nothing that a real BPM tool is bought for.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>No diagram to draw.<br>One leg done properly.</h2>
      <p class="lead mt-16">
        Distribution workflow software can mean a modeling platform, or it can
        mean one dependable path. If you want to model the whole business, you
        want the middle column. If you want orders turning up in one predictable shape, read ours.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">Workflow / BPM Platform</th>
            <th style="width:22%;">However It Runs Today</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Order starts the same way each time</td>
            <td><span class="check-yes">✓</span></td>
            <td>Once modeled</td>
            <td>Depends who answers</td>
          </tr>
          <tr>
            <td>A single way in to your systems</td>
            <td><span class="check-yes">✓</span></td>
            <td>Once built</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Handoff leaves a reference and a time</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Only on email</td>
          </tr>
          <tr>
            <td>Works when a key person is away</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Drag-and-drop process designer</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Internal approval chains and task queues</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>By email</td>
          </tr>
          <tr>
            <td>Covers warehouse, delivery and billing steps</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Partly</td>
          </tr>
          <tr>
            <td>Needs somebody to own and maintain it</td>
            <td>No</td>
            <td>Yes</td>
            <td>Everybody, informally</td>
          </tr>
          <tr>
            <td>Time until it is working</td>
            <td>A day or two for most</td>
            <td>A project</td>
            <td>It is working, after a fashion</td>
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
     FAQ 1 is the scope limit with the primary in the question (use 5 of 6), open by default.
     FAQ 4 carries the primary in an answer (use 6 of 6).
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>What people ask about the process</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS distribution workflow software in the usual sense?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          Not in the sense of a tool you design processes in. There is no
          canvas, no rules engine, no task queue and no approval chain here.
          What VOS does is make one leg of the path fixed: how a customer's
          order is created and how it reaches you. Everything downstream stays
          yours to run.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can we build different paths for different accounts?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The guide is per account, so what a customer can order and at what
          price varies. Where a completed order goes is agreed with us up front, so it lands the
          same way whoever is on shift. Fewer variations is the
          point, and it is why this needs no maintenance.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Who handles it when an item is out?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          A person on your team, as now. VOS does not decide substitutions or
          notify anybody on your behalf. The difference is that orders tend to
          arrive earlier and stock levels are visible beside them, so the
          decision happens before picking rather than during it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we need to write the process down first?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, and that is much of the appeal. Adopting
          distribution workflow software normally starts with weeks of mapping.
          Here you decide two things, the guides and the delivery method, and the
          path follows from those.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does this work while half our accounts still phone?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You will be running two paths for a while, and it is better to admit
          that than pretend otherwise. Calls get written up as they are now,
          with no reference or send time attached. The app path grows as
          accounts move across.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it connect to the systems we already use?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, by whichever single route suits you: by email as a PDF, Excel or Word file, through EDI, into QuickBooks, or
          straight into your ERP over the API. Take one of the direct feeds and there is no entry step at all.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will our staff have to work differently?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They work in the same systems they do now. What changes is what turns
          up in them: finished, coded orders in place of messages to interpret.
          Nobody has to learn a new screen on your side of the path.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What size of distributor is this aimed at?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Smaller food distributors, independents and DSD rounds included. You need no IT staff, nobody to own the process and no enterprise
          contract, and we quote per distributor rather than publishing a price
          list.
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
  <h2>Ready for one way of doing it?</h2>
  <p>See the path one order follows, from a kitchen's phone into your systems.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Nothing to model</span>
    <span>✓ One route for everyone</span>
    <span>✓ No process owner needed</span>
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
        <li><a href="#features">The Path Starts Outside</a></li>
        <li><a href="#features">One Handoff, Not Four</a></li>
        <li><a href="#features">Handoffs On Record</a></li>
        <li><a href="#features">Exceptions Still Need People</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist (kitchens)</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Workflow Platforms</a></li>
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
