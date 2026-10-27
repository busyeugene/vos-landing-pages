/* Comparison page: Pepperi, and Pepperi with VoiceOrder Solutions added. `compare` block order.
 * REFRAMED 2026-10-21 (client, via Eugene): VoiceOrder Solutions is the voice step a distributor
 * ADDS beside Pepperi, never its replacement: Pepperi keeps the visit, we take the reorder between
 * visits. Table = "Pepperi + VoiceOrder Solutions" vs "Pepperi on its own": every Pepperi strength
 * is a tick in both columns. The two do NOT connect (FAQ 4). Brand in full, never "VOS".
 * The notes below are from the original build.
 * ⚠ Pepperi is NOT Pepper. `/pepper-alternative` is a different company. names.js is whole-word
 * and unit-tests this exact pair, but never cite one company's facts on the other's page, and
 * never reuse Pepper's published 35-90 day rollout figure here: Pepperi publishes no timeline.
 * Angle, used by no other page in the set: Pepperi's centre of gravity is THE VISIT. Route
 * accounting, van sales, store audits, shelf compliance, merchandisers, trade promotions, CRM:
 * all of it serves the selling organisation out in the field. VOS is about the reorder that
 * happens when nobody is there.
 * ⚠ They DO have customer self-service ordering (branded B2B eCommerce portal, buyer-specific
 * catalogs and pricing). The distinction is not that their buyers cannot order. It is typed or
 * tapped in a storefront versus spoken, and one channel of a field sales platform versus the
 * whole product.
 * Pepperi takes the first five table rows outright. That is deliberate.
 * Pricing is parity: both quote-based, neither publishes. Never used as an argument.
 * Every claim is sourced and dated in _build/research/competitors/pepperi.md.
 */
module.exports = {
  title: "Not a Pepperi Alternative: Keep Pepperi, Add Voice Ordering",
  description: 'Keep Pepperi for the visit and add voice for the reorder: accounts speak each order into an app and approve it. A Pepperi alternative your reps work beside.',
  related: ["fresho-alternative","necs-entree-alternative","choco-alternative"],
  relatedHeading: "More platforms that stay when you add voice",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Pepperi Alternative: For Orders Between Visits</h1>
      <p class="lead mt-16">
        Repeat orders that don't need a visit can come in on their own. VoiceOrder Solutions runs beside Pepperi: an account talks through the reorder in our app, checks the lines and sends it. The field team holds on to its routes, store visits and promotions, and stops writing up those repeat orders.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Reorders come in between visits</span>
        <span class="hero-trust-dot"></span>
        <span>Pepperi stays in the field</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (the "Push to Speak" mobile UI) -->
      <div class="img-placeholder tall">
        📸 Screenshot:<br>VoiceOrder Solutions "Push to Speak"<br>screen with the order review list
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
      <div class="stat-label">Saved on each order that used to be a call</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Has most distributors up and running</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is when most accounts first order</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     The first five rows go to Pepperi. Route accounting, retail execution,
     promotions, CRM and offline operation are all real and all theirs. A
     table where the other column loses everything invites a fact-check.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Visit, Then Reorder</span>
      <h2>Pepperi plus VoiceOrder Solutions.<br>The visit and the reorder.</h2>
      <p class="lead mt-16">
        A rep's visit and the reorder after it are two different jobs, and this table covers both. Pepperi is a B2B commerce and field sales platform with van routes, store audits, promotions and CRM. So a Pepperi alternative is mostly about the reorders between visits. The left column has both running; they do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Pepperi + VoiceOrder Solutions</th>
            <th style="width:30%;">Pepperi on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Route accounting and van selling</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Accounts speak the reorder and approve each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed, scanned or uploaded</td>
          </tr>
          <tr>
            <td>Store audits and shelf compliance</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account has its own catalog, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Trade promotions across channels</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Mobile CRM for your reps</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Reps take orders offline in Pepperi</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A branded web store for buyers who like a screen</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Payment collection and proof of delivery</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
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
     SECTION 6: WHY TEAMS LOOK ELSEWHERE
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Why Teams Compare</span>
      <h2>Why distributors look at an alternative to Pepperi</h2>
      <p class="lead mt-16">
        Hardly anybody searching for a Pepperi competitor wants to rebuild how their sales force works. They want one part of the week to stop costing so much, and it is usually the reorder. Three such cases turn up a lot.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧰</div>
        <h4>The product is wider than the problem</h4>
        <p class="text-muted mt-12">
          Pepperi carries route accounting, retail execution, promotions, CRM and analytics. If all you want is a better way to receive orders, replacing Pepperi means a big platform decision to fix one small part of it.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>A storefront does not end the calls</h4>
        <p class="text-muted mt-12">
          Self-service ordering only helps with the accounts who use it. The rest call the desk at the worst hour of the day, and somebody keys those in by hand.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🍳</div>
        <h4>The reorder rarely needs a visit</h4>
        <p class="text-muted mt-12">
          Shelf audits and merchandising earn their keep when a rep is in the store. A chef reordering the same lines every week does not need anyone to drive out, and that order can come in on its own.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 7: FEATURE DEEP-DIVE
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">
    <div class="text-center" style="max-width: 620px; margin: 0 auto 72px;">
      <span class="eyebrow">What You Get</span>
      <h2>What a Pepperi alternative actually adds</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>A chef talks, and that is the order</h3>
          <p class="mt-12 text-muted">
            They go through the cooler, say what is short, and the items come up as a list from their own guide. They correct whatever looks wrong and send it. For accounts a portal never won over, that is the easier habit.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The kitchen's buyer reads the lines before anything leaves</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Said from a walk-in or an office, at any hour</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on their own iOS or Android phone, with no device from you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Reps stop writing up reorders from accounts on the app, so that time goes into selling</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How order capture works →</a>
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
          <h3>One list per account, priced the way you priced it</h3>
          <p class="mt-12 text-muted">
            Send over the lists you keep today. Each account gets the items it buys under your codes, at the price you set for that customer, and setup is done. You keep the
            catalog and the pricing; they get the convenience.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A kitchen never sees a line it does not buy</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your prices, set per account, on every line</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit a guide once and the next order already has it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your team handles every account from a single admin screen</span>
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
          <h3>It turns up the way your office already works</h3>
          <p class="mt-12 text-muted">
            A finished order goes out as an email carrying a PDF, Excel or Word file, or straight
            into your system over the API, over EDI, or into QuickBooks. Whichever route your desk
            already trusts is the route it takes.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to a named rep, or to the purchasing desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI, the API or QuickBooks, nobody on your team retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Its own number, with the date and time it was sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, billing and delivery go on exactly as now</span>
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
          <h3>Stock in view as the orders come in</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity, and the catalog
            updates as stock levels change. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The whole catalog, not just the fast movers</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises on a late, heavy order</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing is counted or bought on our side</span>
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
     SECTION 8: HOW IT WORKS
     ============================================================ -->
<section class="section-pad bg-light" id="how-it-works" aria-label="How it works">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Getting Started</span>
      <h2>Three steps, and no rollout to manage</h2>
      <p class="lead mt-16">
        There is no territory to map and no team to train. You hand over the lists, we set up each login, and your customers begin ordering.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Hand over your guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet is plenty. Items and the price per account load into one admin screen, under the codes you already use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Each account gets set up</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load each guide and create the login, then the kitchen downloads the app. Most of them
          send something in before the day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders arrive finished</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The customer has approved it. It carries a number and the time it was sent, in the format your system takes.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VoiceOrder Solutions admin platform showing customer accounts and order guide upload
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 9: TESTIMONIALS
     ============================================================ -->
<section class="section-pad" id="testimonials" aria-label="Customer testimonials">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Real Teams. Real Results.</span>
      <h2>What the order desk notices first</h2>
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
            "Our reps spent mornings on order messages. Now the regulars send their own, and the reps get out selling sooner."
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
            "The chefs speak to the app the way they would to us on the phone, then check it on the screen. It just arrives."
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
     SECTION 11: WHEN THE TWO WORK TOGETHER
     ============================================================ -->
<section class="section-pad bg-light" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 620px; margin: 0 auto;">
      <span class="eyebrow">Both, Not One</span>
      <h2>Where Pepperi and VoiceOrder Solutions each fit</h2>
      <p class="lead mt-16">
        Keeping Pepperi is the common case with us, not the exception. We are not a Pepperi replacement: your field team keeps its routes, its audits and its promotions, and the orders that never needed a visit arrive on their own. For most distributors, that is what a Pepperi alternative turns out to mean.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🚐</div>
        <h4>Your reps keep every tool they have</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Routes, audits, van stock and promotions carry on in Pepperi. We take nothing out of a rep's hands. We just take the app's reorders off their plate.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🖱️</div>
        <h4>Self-service stays for those who enjoy it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Buyers who are happy clicking through a catalog should carry on. Our app is for kitchens that never took to one and still phone instead.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📍</div>
        <h4>Start with the accounts nobody gets around to visiting</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Pick the kitchens your reps rarely reach and open those first. Nothing about the territory or the route plan has to change to try it.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 12: MID-PAGE CTA
     ============================================================ -->
<section aria-label="Mid-page call to action" style="background:var(--color-light-bg);border-top:1px solid #e4e7ed;border-bottom:1px solid #e4e7ed;padding:48px 24px;">
  <div style="max-width:var(--max-width);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;">
    <div style="max-width:580px;">
      <h3 style="margin-bottom:10px;">See one order go the whole way through</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. A chef speaks one reorder, and you see it arrive laid out as your desk is used to seeing them.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 13: FAQ
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>What distributors with field reps ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Pepperi alternative to take reorders by voice?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Pepperi keeps serving your sales organization: the rep, the van and the shelf. VoiceOrder Solutions works beside it and deals only with how the reorder reaches you, so the better question is which part of the week hurts.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Pepperi?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At pulling an order out of a kitchen that will never log in, we think so. At everything else on their product list the question does not really apply: we have no route accounting, no store audits, no CRM and no promotion engine. That is the reason to keep both.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't Pepperi already let customers order for themselves?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It does. They offer a branded self-service portal with each buyer's own catalog and pricing. Every way into it still means using a screen: searching the catalog, scanning a barcode or uploading a file. The accounts that were not going to do that are the ones our app suits.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is Pepperi connected to VoiceOrder Solutions?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Nothing ties them together, and each company backs only its own product. Pepperi's orders keep flowing the way they do now, and ours reach your own system by a separate route, in any format listed above.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Won't some accounts end up with a portal and an app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only the ones you choose. Buyers happy in the Pepperi portal can stay there; offer our app to the kitchens that still phone. Those calls keep coming in as they do today, without an order number from us, because only what is sent through our app gets one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does each one cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Pepperi publishes no price on its own site, and neither do we. Third-party directories do carry figures for them, so check any number you are shown against their own site. Since Pepperi stays, the only question on our side is what one added step costs, and a quote answers that.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast could this be running?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors this is running in 24 to 48 hours, and most kitchens get a first order in the same day. There is no IT project, since nothing in Pepperi is connected or changed, so adding us asks far less than a Pepperi alternative that takes over from it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Pepperi details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Sourced from pepperi.com as it stood on 10 October 2026: their product modules, the buyer portal, the offline apps and their own words about the market they sell to. No price or rollout time is published by them, so neither is guessed at here. Anything out of date since is our error, not theirs.
        </div>
      </div>

    </div>
  </div>
</section>


<!--@RELATED-->


<!-- ============================================================
     SECTION 15: FINAL CONVERSION CTA
     ============================================================ -->
<section class="final-cta" id="demo" aria-label="Sign up call to action">
  <h2>Let the reorders look after themselves</h2>
  <p>Twenty minutes, and one reorder that comes in while your reps are out selling.</p>

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
     SECTION 16: FOOTER
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
        <li><a href="#comparison">Pepperi + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-taking-software">Order Taking</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
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
