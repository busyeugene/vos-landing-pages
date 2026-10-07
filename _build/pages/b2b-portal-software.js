/* Page 17 - PRIMARY: B2B portal software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY: B2B order portal (H3), B2B buyer portal (body), B2B customer portal (body),
 *   B2B portal solutions (body), B2B sales portal (Tier B, reframed to the rep's side),
 *   B2B customer portal development (Tier C FAQ), B2B travel portal software (Tier C FAQ).
 * Audience: food distributors (seller side).
 * ANGLE (its one question): "Can I give accounts self-service ordering without building a portal?"
 *   Order taking owns the intake channel; this page owns the build-vs-buy decision and the
 *   per-account self-service side (own account, own guide, own prices, own history).
 * SCOPE: customers order in the iOS/Android app. The web side is the admin platform, for the
 *   distributor's team. The page says so outright rather than implying a customer web store.
 * Not claimed: customers seeing live availability, a browsable storefront, carts, payments.
 */
module.exports = {
  title: 'B2B Portal Software for Food Distributors | VOS',
  description: "Your accounts serve themselves and you build nothing. VOS is B2B portal software your customers speak to, and most distributors are live in 24 to 48 hours.",
  related: ["order-taking-software","catalog-management-software","wholesale-ordering-software"],
  relatedHeading: 'More on the channel your accounts order through',
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
      <h1>B2B Portal Software Your Accounts Can Speak To.</h1>
      <p class="lead mt-16">
        Give the restaurants you supply a self-service way to order, with no portal to build. The kitchens you sell to talk an order into the app,
        straight from the guide you set up, and it lands with your team itemized
        against your SKUs.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Nothing to build</span>
        <span class="hero-trust-dot"></span>
        <span>Accounts opened for you</span>
        <span class="hero-trust-dot"></span>
        <span>Your SKUs, your prices</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (one account's guide + its confirmed order) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>One account's own guide,<br>its prices, and a<br>confirmed order number
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
      <div class="stat-label">self-service, including hours nobody is in your office</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">of setup for most, and then buyers can order</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">comes off an order that once meant waiting on hold</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Your buyers want to help themselves. You do not want a software project.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Sooner or later, writing orders down by hand stops scaling. The usual answer is
      a development project. Here is what that choice looks like from the inside:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧰</div>
        <h4 class="mb-8">"We looked into it and gave up"</h4>
        <p class="text-muted" style="font-size:15px;">
          The quotes assumed an IT team we do not have, so the whole idea went
          back in the drawer and buyers kept calling.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🙅</div>
        <h4 class="mb-8">"We launched one and nobody signed in"</h4>
        <p class="text-muted" style="font-size:15px;">
          A chef with flour on both hands will not hunt through a menu tree. If
          the new way is slower than calling you, calling you wins.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🌙</div>
        <h4 class="mb-8">"The kitchen decides at 11pm"</h4>
        <p class="text-muted" style="font-size:15px;">
          Service ends long after your office shuts. It sits in voicemail until morning, then somebody writes it out by hand.
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
      <span class="eyebrow">What Self-Service Needs</span>
      <h2>What B2B portal software has to get right in food distribution</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 - B2B order portal -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">An Account Of Their Own</span>
          <h3>Hand each buyer a B2B order portal in their pocket.</h3>
          <p class="mt-12 text-muted">
            You send us the guide an account buys from. We load those items, the
            prices you agreed with them and the SKUs behind them, then open the
            account. Nothing for your buyer to configure, nothing for you to host.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>One guide per account, holding what that kitchen actually buys</span></li>
            <li><span class="bullet-check">✓</span><span>The prices you set for them, never a public list</span></li>
            <li><span class="bullet-check">✓</span><span>We create the accounts, so your team configures nothing</span></li>
            <li><span class="bullet-check">✓</span><span>Apps for iPhone and Android, nothing to install on a PC</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Keeping a buyer's guide current →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Account provisioning in<br>the VOS admin platform,<br>with the guide attached
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: PRIMARY in body (use 3 of 6) + SECONDARY B2B buyer portal -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Ordering By Voice</span>
          <h3>Talking beats hunting through a catalog.</h3>
          <p class="mt-12 text-muted">
            Most B2B portal software asks a buyer to search, filter and click a
            path to 40 line items. In VOS your customer says them instead, reads
            the whole list back on screen, and sends it. That difference decides
            whether a B2B buyer portal gets used again next week.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Talk down the list in that account's own guide</span></li>
            <li><span class="bullet-check">✓</span><span>Each line shown for review before anything is sent</span></li>
            <li><span class="bullet-check">✓</span><span>Interrupted mid-order? The app holds their place</span></li>
            <li><span class="bullet-check">✓</span><span>A push notice or a text says the order arrived</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">The order taking side of the same flow →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Spoken order shown as<br>lines to check before<br>the buyer sends it
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY B2B customer portal (body) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Orders In Your Format</span>
          <h3>Orders turn up in a shape your office can use.</h3>
          <p class="mt-12 text-muted">
            A B2B customer portal is only worth having if what comes out of it fits the way your office works. We agree the delivery route with you up front,
            and orders take it from then on: a file in your inbox, a QuickBooks
            entry, or a feed wired straight into the system you run.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>You pick the format once, during onboarding</span></li>
            <li><span class="bullet-check">✓</span><span>With EDI, QuickBooks or the API, nobody keys the order again</span></li>
            <li><span class="bullet-check">✓</span><span>Each line already matched to one of your SKUs</span></li>
            <li><span class="bullet-check">✓</span><span>Your ERP, your pricing rules and your invoicing stay put</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">Numbers and timestamps on app orders →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Delivery format picker:<br>email, EDI, API or<br>QuickBooks
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: SECONDARY B2B portal solutions + B2B sales portal (Tier B) -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Your Team's Side</span>
          <h3>One screen on the web for the people who sell.</h3>
          <p class="mt-12 text-muted">
            Plenty of B2B portal solutions leave your staff maintaining the thing
            forever. Your staff work from the VOS admin platform instead: edit a guide, reprice a line, look up an earlier order. Reps
            get the account view a B2B sales portal is usually bought for, and
            stop writing the orders up themselves.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Change a price or pull an item from a customer's own guide</span></li>
            <li><span class="bullet-check">✓</span><span>Dated order history, kept per account</span></li>
            <li><span class="bullet-check">✓</span><span>Push a deal to your accounts, or send it as a text</span></li>
            <li><span class="bullet-check">✓</span><span>Reps walk in knowing what that kitchen has been buying</span></li>
          </ul>
          <a href="/distributor-sales-software" class="feature-link">What this frees your reps up to do →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Admin platform: accounts,<br>guides and past orders<br>on one screen
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
      <h2>Smaller pieces that make self-service stick.</h2>
      <p class="lead mt-16">Details that decide whether an account keeps ordering this way after week one.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🔢</div>
        <h4>Numbered The Moment It Sends</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Any order the app sends carries its own number plus the minute it left, so
          a question about one has an answer.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💬</div>
        <h4>Confirmed Before It Sends</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The buyer sees the finished order written out and approves it, which is where a bad quantity gets caught.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">👥</div>
        <h4>Accounts Added As You Win Them</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Send over a new customer's guide and we set that account up. Growth does
          not mean another round of development.
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
      <h3 style="margin-bottom:10px;">See self-service ordering without the build</h3>
      <p class="text-muted" style="font-size:16px;">
        Give us 20 minutes to show how an account gets its own guide and starts
        ordering.
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
      <h2>Three steps, no IT project</h2>
      <p class="lead mt-16">
        There is no server to stand up and no launch to schedule. You hand over
        guides, we switch accounts on.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send us the guides you keep</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          One per account, with the items, the agreed prices and your SKU codes.
          A spreadsheet is fine.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We load them and open the accounts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your buyers download the app, reach their own account, and see only
          their own items at their own prices.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders come to you, not to voicemail</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Spoken, checked and sent in the format you chose. Most buyers order on the day they first open it.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: guide upload and account provisioning inside the VOS admin platform
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
      <h2>From the chefs who order and the teams who ship</h2>
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
            "We had two quotes to build something like this. We were taking app
            orders the week we signed instead."
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
            "Our chefs never signed in to the old site. They talk to this one, so
            they actually use it."
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
     Primary keyword in the lead paragraph (use 4 of 6).
     Honest ✗ row: VOS has no storefront, cart or payment side.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Buy the ordering channel.<br>Skip the build.</h2>
      <p class="lead mt-16">
        Three ways to put B2B portal software in front of your accounts,
        and what each one asks of you. VOS is not a webshop: there is no
        storefront, cart or card payment in it.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">Custom Portal Build</th>
            <th style="width:22%;">Phone + Email Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goes live without an IT project</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Buyers order by speaking, not searching</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>Spoken, nothing written</td>
          </tr>
          <tr>
            <td>Per-account items and agreed prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>If built that way</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Open outside your office hours</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Voicemail takes it</td>
          </tr>
          <tr>
            <td>A number and a time on arrival</td>
            <td><span class="check-yes">✓</span></td>
            <td>Depends on the spec</td>
            <td>Email has a send time</td>
          </tr>
          <tr>
            <td>Storefront, cart and card payment</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Who maintains the software</td>
            <td>We do</td>
            <td>You do, forever</td>
            <td>Nothing to maintain</td>
          </tr>
          <tr>
            <td>What adding your next account takes</td>
            <td>Send us a guide</td>
            <td>Developer time</td>
            <td>More phone calls</td>
          </tr>
          <tr>
            <td>Time to first order</td>
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
     FAQ 1 carries the primary in the question (use 5 of 6), open by default.
     FAQ 4 carries it in an answer (use 6 of 6): the different-item split kwaudit wants.
     FAQ 6 and 7 are the Tier C disambiguations.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Straight answers on portals and VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS B2B portal software, or something else?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          It does the job distributors buy a portal for: your customers serve
          themselves, from their own item list, at the prices you gave them, at
          any hour. It does it through an app they speak to rather than a website
          they browse, and it holds no storefront, shopping cart or payment
          handling. Your team's side, where guides and accounts are managed, runs
          on the web.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can our customers order from a web browser?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Ordering happens on a phone, in the app. The web side is where your own staff edit guides, open accounts and look
          up past orders. We would rather be plain about that than have you
          promise your accounts a desktop screen.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How is this different from a webshop for wholesale?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          A webshop is built around browsing and checkout. A kitchen reordering
          40 familiar items every week is not browsing. VOS starts from the guide
          you built for that account, so the buyer talks through a list they
          already know, checks it, and sends it. Nothing to search for.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does getting started take from our side?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          A guide for every buyer, and a decision on how orders should
          reach you. That is the whole lift. Unlike B2B portal software you commission, there is nothing to design,
          host or patch. Most distributors are up and running in 24 to 48 hours,
          and most of their customers send something in that same day.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will orders drop into the system we already run?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Orders can arrive as a PDF, Excel or Word attachment, through EDI, into
          QuickBooks, or over an API link to whatever platform your office runs
          on. On the EDI, QuickBooks and API routes nobody enters it a second time. Emailed files may still be keyed in,
          which is worth weighing when you choose.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do you take on B2B customer portal development for us?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. We are not an agency and we do not take build work, custom
          front-ends, or bespoke integrations beyond the delivery formats listed
          above. VOS is a finished product you switch on. If what you need really
          is a bespoke portal, a development shop is the right call, not us.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We were looking for B2B travel portal software. Is this it?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Travel portals book flights, hotels and cars out of global
          distribution systems, and VOS does none of that. VOS serves food distributors who supply restaurants and grocery stores. If you
          arrived here after travel booking, this is the wrong product.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens to accounts that keep phoning?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing breaks. Your team writes those up the way it does today, and
          those calls carry no VOS number or timestamp. A sensible start is the customers who order most often, then let the rest
          follow once they see it working.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Are we too small for this?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS exists for exactly that kind of operation, with no IT
          department required. You need no developer, no IT staff and no project
          plan. Pricing is quoted per distributor, so ask us what it looks like at
          your account count.
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
  <h2>Ready to let buyers serve themselves?</h2>
  <p>See what an account sees, and what lands in your office afterwards.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No software to host</span>
    <span>✓ No developer needed</span>
    <span>✓ Your prices stay yours</span>
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
        <li><a href="#features">An Account Of Their Own</a></li>
        <li><a href="#features">Ordering By Voice</a></li>
        <li><a href="#features">Orders In Your Format</a></li>
        <li><a href="#features">Your Team's Side</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/distributor-sales-software">Distributor Sales</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/order-entry-software">Order Entry (restaurants)</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Portal Builds</a></li>
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
