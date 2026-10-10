/* Comparison page: VOS vs Pepper. Block order is the `compare` variant, not the 16-section
 * feature template: the table sits high (section 5) and the mid-CTA block repeats.
 * Every Pepper claim is sourced and dated in _build/research/competitors/pepper.md.
 */
module.exports = {
  title: "Pepper Alternative for Food Distributors in 2026",
  description: 'Your accounts speak each order into an app and check it before sending. This Pepper alternative is up and running in 24 to 48 hours for most.',
  related: ["order-taking-software","wholesale-ordering-software","b2b-portal-software"],
  relatedHeading: "More ways VOS works at the order desk",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>The Pepper Alternative Built On Voice Ordering.</h1>
      <p class="lead mt-16">
        VOS is a Pepper alternative built for independents and DSD operations. Your
        accounts put each order into the app by voice, read it over, then send it. It lands on
        your desk with a timestamp, in whichever format you take orders in now. Most distributors
        are up and running in 24 to 48 hours.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See It Side By Side</a>
      </div>

      <div class="hero-trust">
        <span>Nothing to switch off</span>
        <span class="hero-trust-dot"></span>
        <span>Keep the ERP you run</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (the "Push to Speak" mobile UI) -->
      <div class="img-placeholder tall">
        📸 Screenshot:<br>VOS "Push to Speak" screen<br>with the order review list
      </div>
    </div>

  </div>
</section>


<!--@LOGOBAR-->


<!-- ============================================================
     SECTION 4: WITH VOS / WITHOUT A DEDICATED ORDERING APP
     ============================================================ -->
<section class="section-pad bg-light" id="split" aria-label="With and without VOS">
  <div class="container">
    <div class="text-center" style="max-width: 600px; margin: 0 auto 56px;">
      <span class="eyebrow">The Difference</span>
      <h2>Two ways an order can reach your desk</h2>
      <p class="lead mt-16">
        One way, the customer builds the order and signs off on it. The other way, software or
        someone on your side works out afterward what the customer meant.
      </p>
    </div>

    <div class="feature-row">
      <div>
        <h3>The customer sends a finished order</h3>
        <p class="mt-12 text-muted">
          Your account opens VOS, presses to speak, and says items and quantities. The app sets
          it out as a list. They read it, fix anything that looks wrong, and send.
        </p>
        <ul class="feature-bullets mt-24">
          <li>
            <span class="bullet-check">✓</span>
            <span>Whoever built the order is the one who signs it off, right then</span>
          </li>
          <li>
            <span class="bullet-check">✓</span>
            <span>Items come from that account's own guide, priced the way you set them</span>
          </li>
          <li>
            <span class="bullet-check">✓</span>
            <span>What they send carries a number on it, plus the date and the time</span>
          </li>
          <li>
            <span class="bullet-check">✓</span>
            <span>A half-built order saves itself if a shift pulls them away</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Someone works out what arrived</h3>
        <p class="mt-12 text-muted">
          A voicemail, a text, a photo of a clipboard. Whatever the kitchen reached for that
          night still has to become a line-by-line order before the warehouse can work from it.
        </p>
        <ul class="feature-bullets mt-24">
          <li>
            <span class="bullet-check">✓</span>
            <span>Nobody confirmed the order while the caller was still on it</span>
          </li>
          <li>
            <span class="bullet-check">✓</span>
            <span>A rep rings back about the two lines that were not clear</span>
          </li>
          <li>
            <span class="bullet-check">✓</span>
            <span>Orders left after close wait for the first person in</span>
          </li>
          <li>
            <span class="bullet-check">✓</span>
            <span>The record starts when your team keys it, not when the kitchen sent it</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE (moved high: it is what the visitor came for)
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Side By Side</span>
      <h2>VoiceOrder Solutions vs Pepper.<br>A layer, not a platform.</h2>
      <p class="lead mt-16">
        Pepper sells a broad platform to independents. VOS is the ordering layer
        that bolts on beside the stack you have now, so most distributors weighing a Pepper
        alternative are really choosing between those two shapes. Pepper details below were read
        off usepepper.com on 10 October 2026.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:33%;">VoiceOrder Solutions</th>
            <th style="width:33%;">Pepper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>How the order is captured</td>
            <td>Your customer says it into the app</td>
            <td>Storefront ordering, or Order Agent reads an email, text, photo or PDF the customer already sent</td>
          </tr>
          <tr>
            <td>Customer signs off on every line first</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies by channel</td>
          </tr>
          <tr>
            <td>Up and running</td>
            <td>24-48 hours for most</td>
            <td>35 to 90 days, per Pepper's published range</td>
          </tr>
          <tr>
            <td>What rollout asks of you</td>
            <td>Hand over your guides</td>
            <td>Five phases, with a manager assigned</td>
          </tr>
          <tr>
            <td>Scope of the product</td>
            <td>Ordering plus inventory visibility</td>
            <td>Storefront, sales, finance, pricing and marketing</td>
          </tr>
          <tr>
            <td>Fits around your current systems</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Its own guide for every account, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A number and a timestamp on the order</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders out as PDF, Excel, Word, EDI, API or QuickBooks</td>
            <td><span class="check-yes">✓</span></td>
            <td>Through its ERP integrations</td>
          </tr>
          <tr>
            <td>An app the customer's own staff use</td>
            <td><span class="check-yes">✓</span></td>
            <td>Branded storefront and app</td>
          </tr>
          <tr>
            <td>Pricing</td>
            <td>On request</td>
            <td>On request</td>
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
     SECTION 6: MID-PAGE CTA (1 of 2)
     ============================================================ -->
<section aria-label="Mid-page call to action" style="background:var(--color-light-bg);border-top:1px solid #e4e7ed;border-bottom:1px solid #e4e7ed;padding:48px 24px;">
  <div style="max-width:var(--max-width);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;">
    <div style="max-width:580px;">
      <h3 style="margin-bottom:10px;">Watch one order travel from a kitchen to your desk</h3>
      <p class="text-muted" style="font-size:16px;">
        Book 20 minutes. We follow one spoken order all the way through to what your office
        opens, and you can judge the fit against anything else on your shortlist.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 7: WHAT PEPPER IS (factual, sourced)
     ============================================================ -->
<section class="section-pad" id="what-is-pepper" aria-label="What Pepper is">
  <div class="container">
    <div style="max-width: 760px; margin: 0 auto;">
      <span class="eyebrow">Straight Answer</span>
      <h2>What Pepper does, and where VOS is different</h2>
      <p class="lead mt-16">
        Pepper, from Pomegranate Technologies, calls itself an AI-first platform aimed at
        independent distributors. It is a wide product: a storefront for digital ordering, an Order Agent for
        order entry, plus hubs for sales, finance, marketing and pricing. Distributors who buy it
        are buying a platform to run the business on.
      </p>
      <p class="mt-16 text-muted">
        Its Order Agent and VOS answer the same question from opposite ends. Order Agent works on
        your inbound side: it reads whatever came in, a message, a photo or a PDF, and turns
        that into a digital order. VOS starts on the customer's side. Their staff open an app
        and say what they need, then look over the list before any of it reaches you.
      </p>

      <h3 class="mt-48">A simpler alternative to Pepper, scoped to ordering</h3>
      <p class="mt-12 text-muted">
        VOS is not a full Pepper replacement, and it does not try to be. It covers how an order
        gets to you and what you can see of your stock. Your storefront, your finance tools and
        your ERP stay where they are. That is the reason it goes in fast: there is no
        platform migration underneath it, so the work is loading those guides and setting up
        accounts. Pepper's own guidance puts a typical rollout between 35 and 90 days, across five
        phases, staffed with an implementation manager and a deployed engineer. Both are honest
        numbers for what each product is doing.
      </p>
      <p class="mt-16 text-muted">
        So if you are weighing one Pepper competitor against another, the useful question is not
        which has more modules. It is whether you want to move your business onto a platform this
        quarter, or add one ordering layer this week and let everything else stay put.
      </p>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 8: FEATURE DEEP-DIVE
     ============================================================ -->
<section class="section-pad bg-light" id="features" aria-label="Feature details">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto 72px;">
      <span class="eyebrow">What You Get</span>
      <h2>What this Pepper alternative covers</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>They talk. It comes out as a list.</h3>
          <p class="mt-12 text-muted">
            A chef counts the walk-in and says what is short. Each item turns into a line you can
            read, with the quantity beside it. Nothing to type, no time on hold, and no message
            for your team to interpret in the morning.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Press to speak, then read the lines back before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Order from the cooler, the line or the office out back</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the iPhone or Android handset they already carry</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves about 20 to 30 minutes against the same order on the phone</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How VOS takes orders →</a>
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
          <span class="eyebrow">Order Guides</span>
          <h3>Each account gets a list of its own</h3>
          <p class="mt-12 text-muted">
            You hand over the guides each kitchen already buys from. VOS loads each one against your SKUs at the
            prices you hold for that account, so a spoken item lands on the right line and nobody
            guesses which pack was meant.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each account sees only what it actually orders from you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your prices, your SKUs, under your control, not the customer's</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Change a guide once and it holds from then on</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You keep the catalog; the customer gets the convenience</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Keeping guides current →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Admin platform<br>order guide editor<br>for one account
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Delivery Formats</span>
          <h3>The order shows up in a shape you already handle</h3>
          <p class="mt-12 text-muted">
            VOS does not ask your office to work somewhere new. Finished orders go out as email
            with a PDF, Excel or Word file, or straight into your ERP over the API, over EDI, or
            into QuickBooks.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Email goes to a rep or straight to your purchasing team</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing to retype over EDI, QuickBooks or the API</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your pick, invoice and delivery steps stay exactly as they are</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing in your stack has to come out first</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">What an order looks like →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>One order delivered<br>as a PDF and<br>over the API
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4 -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Inventory Visibility</span>
          <h3>Watch stock move as the orders land</h3>
          <p class="mt-12 text-muted">
            VOS gives you real-time inventory visibility tied to what is being ordered, and the catalog
            updates as levels change. It is not where your stock lives: your own inventory system
            stays in charge, and a demo covers how the two connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Visibility across the catalog, not just the fast movers</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stockouts surprise you less often when a big order lands late</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock figures come from the system doing your counting today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing to count by hand inside VOS</span>
            </li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">More on stock visibility →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Stock levels beside<br>incoming customer<br>orders
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ============================================================
     SECTION 9: STATS STRIP
     ============================================================ -->
<section class="stats-strip" aria-label="Key results">
  <div class="stats-grid">
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">Saved on each order that moves off the phone</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is when most distributors go live</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is when the first orders usually arrive</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 10: SUPPORTING FEATURES
     ============================================================ -->
<section class="section-pad" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Also Built In</span>
      <h2>Smaller things that save you a call</h2>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>One place to manage it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Update a guide, add an account, or look back over what a customer has ordered.
          It is all in the same place, and your team does not need a ticket to change anything.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔢</div>
        <h4>A record per order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Everything sent this way gets a number of its own, with the time on it and the account
          behind it. Orders still phoned in do not get that.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>Nothing to buy for the kitchen</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS is an iOS and Android app on handsets your accounts own already. Nothing to
          ship to a kitchen, nothing to mount on a wall, nothing that needs replacing in two years.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 11: MID-PAGE CTA (2 of 2)
     ============================================================ -->
<section aria-label="Mid-page call to action" style="background:var(--color-light-bg);border-top:1px solid #e4e7ed;border-bottom:1px solid #e4e7ed;padding:48px 24px;">
  <div style="max-width:var(--max-width);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;">
    <div style="max-width:580px;">
      <h3 style="margin-bottom:10px;">Still deciding between a platform and a layer?</h3>
      <p class="text-muted" style="font-size:16px;">
        Bring the shortlist. We will show what VOS covers, say plainly what it leaves alone,
        and you can weigh that against a bigger rollout.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 12: HOW IT WORKS
     ============================================================ -->
<section class="section-pad" id="how-it-works" aria-label="How it works">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Getting Started</span>
      <h2>Three steps, and no migration to schedule</h2>
      <p class="lead mt-16">
        There is nothing to migrate here. Send us the guides your office works from, and we
        do the loading.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send over your guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever form they are in now. We load each account's items and your prices
          into one admin screen, matched to your SKUs.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Your accounts get the app</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We create the account and walk the kitchen through it. Most are ordering
          before that day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>It shows up ready</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Confirmed by the customer, with a number and the time it was sent, in the
          format your system takes.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS admin platform showing customer accounts and order guide upload
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 13: TESTIMONIALS
     ============================================================ -->
<section class="section-pad bg-light" id="testimonials" aria-label="Customer testimonials">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Real Teams. Real Results.</span>
      <h2>What it sounds like once it is in</h2>
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
            "We looked at the big platforms and could not face a rollout that ran
            into next quarter. This went in over two days and the guides were the
            only homework."
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
            "The part that sold our order desk was the customer checking the list
            themselves. We stopped ringing kitchens back about the lines nobody
            could make out."
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
     SECTION 15: FAQ
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Questions distributors ask when they compare the two</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS a true Pepper alternative, or a different kind of product?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          Both, depending on what you are trying to fix. If the goal is to get orders off the
          phone and into something structured, VOS does that job and you can compare the two
          directly. If the goal is one platform running your storefront, your reps, your
          collections and your pricing, Pepper is built wide for that and VOS is not.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS better than Pepper?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For getting orders in on a short timeline, we think so: your customers get an app they
          open on purpose, they approve each line themselves, and getting started does not take a
          quarter. For a distributor who wants to move the whole business onto one platform,
          that is a bigger product than VOS, and the honest answer is that we are not trying to
          be it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly can we actually be taking orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors reach that point in a day or two. There is no IT project here,
          and nothing to pull out of your stack, which is the main reason a Pepper alternative
          gets shortlisted at all.
          Pepper's own published window is a good deal longer, which is fair for the amount of
          platform it stands up.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we have to drop Pepper to bring VOS in?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS is additive by design and runs beside what you already have, so nothing needs
          switching off to try it. Plenty of distributors come to us with an ERP they like and a
          storefront they are keeping, and VOS covers how the order arrives.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will VOS replace our ERP or order management system?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, it does not. VOS is the way in: it gets the order from your customer to you,
          confirmed and itemized. From there it reaches your existing software or your inbox, and
          how you pick, bill and ship does not change.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does VOS cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We quote by distributor, so tell us how many accounts you have and we will price it.
          Pepper quotes too, and publishes no rate card either, so a demo on both sides is the
          only way to compare the two fairly.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do our customers need new hardware or a tablet?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS works on the iOS or Android phone the kitchen already has. We send nothing out,
          there is nothing to bolt to a counter, and no device for you to support.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens to the customers who still call their order in?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They can keep phoning, and your team handles those exactly as it does now. Worth being
          clear though: a call or a voicemail does not get a VOS order number, a timestamp
          or a stock movement. Only what comes through the app does.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS only for restaurants, or do store accounts work too?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Both. We sell to independent distributors and to DSD, not to enterprise, and the
          accounts on it are restaurants, kitchens and retail stores. For DSD, the orders are in
          before the truck loads, so drivers carry what the account asked for.
        </div>
      </div>

    </div>
  </div>
</section>


<!--@RELATED-->


<!-- ============================================================
     SECTION 17: FINAL CONVERSION CTA
     ============================================================ -->
<section class="final-cta" id="demo" aria-label="Sign up call to action">
  <h2>Compare it against your shortlist</h2>
  <p>Twenty minutes, one real order, and a straight answer on what VOS does and does not cover.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No IT project to run</span>
    <span>✓ Nothing to rip out</span>
    <span>✓ Sends orders in your format</span>
    <span>✓ Ask us for a quote</span>
  </div>
</section>


<!-- ============================================================
     SECTION 18: FOOTER
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
        <li><a href="#features">Delivery Formats</a></li>
        <li><a href="#features">Inventory Visibility</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Pepper</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/distributor-sales-software">Distributor Sales</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
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
