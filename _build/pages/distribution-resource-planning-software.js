/* Page 15 - PRIMARY: distribution resource planning software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * SECONDARY: distribution planning software (Tier B, H3), distribution capacity planning software (Tier B, body)
 * REFRAME (Eugene's call, 2026-09-11): VOS is NOT a DRP system. It is the order-capture layer that feeds one.
 * Scope limit is stated in the hero lead, made visual in the comparison table (honest ✗ rows for network
 * planning, forecasting, transport), and answered outright in FAQ #1 (open by default).
 * Audience: food distributors (seller side), like order taking + fulfillment.
 * Assumption Q12: a distributor can see incoming orders for a delivery day totalled by item.
 * GSC note: DRP terms = 81 impressions in 16 months at pos 35-62 on the main domain. Expect weak performance.
 */
module.exports = {
  title: 'Feed Your Distribution Resource Planning Software | VOS',
  description: "VoiceOrder Solutions feeds your distribution resource planning software clean customer orders, taken 24/7, so tomorrow's volume is known before you plan.",
  related: ['order-fulfillment-software', 'order-taking-software', 'order-tracking-software'],
  relatedHeading: 'The rest of the distributor side',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "distribution resource planning software"
     Scope limit stated in the lead, on purpose.
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Feed Your Distribution Resource Planning Software Clean Orders.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is not distribution resource planning software. It is
        the ordering layer that feeds it. Your customers place orders 24/7 by voice,
        web, or app, so tomorrow's real volume is in before you plan pickers,
        trucks, or buying.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Works with your current systems</span>
        <span class="hero-trust-dot"></span>
        <span>Up and running in 1 day</span>
        <span class="hero-trust-dot"></span>
        <span>Email, PDF, Excel, EDI, API</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (overnight orders for tomorrow's delivery) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Overnight orders for<br>tomorrow's delivery, by<br>account and by item
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
      <div class="stat-label">customer orders arriving overnight, not at 6am</div>
    </div>
    <div>
      <div class="stat-number">One</div>
      <div class="stat-label">queue, every order in the same clean format</div>
    </div>
    <div>
      <div class="stat-number">5</div>
      <div class="stat-label">formats to feed your system: email, PDF, Excel, EDI, API</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Your plan is only as good as the orders it's built on.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Planning tools are only as good as what goes into them. For most food
      distributors, what goes in is late, handwritten, and partly guessed. Here's
      what that costs:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4 class="mb-8">"Half of tomorrow's orders arrive at 6am"</h4>
        <p class="text-muted" style="font-size:15px;">
          Chefs call first thing, so you plan pickers and trucks before you know
          the volume. Then you scramble once the phone stops ringing.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4 class="mb-8">"Our system has the data, but someone typed it in"</h4>
        <p class="text-muted" style="font-size:15px;">
          Orders arrive by voicemail and text, then get keyed into the ERP by hand.
          Every typo becomes a wrong number in the plan.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🎲</div>
        <h4 class="mb-8">"We plan off last week and hope"</h4>
        <p class="text-muted" style="font-size:15px;">
          Without the real orders in hand, the plan is a guess based on a week that
          already happened.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 6: FEATURE DEEP-DIVE – ALTERNATING ROWS
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">

    <div class="text-center" style="max-width: 760px; margin: 0 auto 72px;">
      <span class="eyebrow">Better Input, Better Plan</span>
      <h2>What your distribution resource planning software is missing: early, clean orders</h2>
    </div>


    <!-- Feature 1: orders in early -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Orders In Early</span>
          <h3>Tomorrow's orders are in before you plan.</h3>
          <p class="mt-12 text-muted">
            Your customers can order at 11pm after service, and most do once it is
            easy. By the time your team plans the morning, the orders are already
            sitting in one queue, so whatever distribution resource planning software
            you run gets a real number to work from, not a guess.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Customers order 24/7 by voice, web, or app</span></li>
            <li><span class="bullet-check">✓</span><span>Overnight orders waiting in one queue by morning</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer early-morning calls to write down</span></li>
            <li><span class="bullet-check">✓</span><span>Earlier order cutoffs become realistic</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">See how orders come in →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order queue timestamped<br>overnight, ready before<br>the morning shift
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 (Tier B) – distribution planning software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">A Real Demand Signal</span>
          <h3>Give your distribution planning software a real demand signal.</h3>
          <p class="mt-12 text-muted">
            Every order arrives as clean line items matched to your catalog, with the
            right pack sizes, per account. Orders flow into your existing system as
            email, PDF, Excel, EDI, or a direct API push, so planning runs on what
            customers actually asked for instead of what someone typed.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Line items matched to real catalog items</span></li>
            <li><span class="bullet-check">✓</span><span>Per-account order history as your demand record</span></li>
            <li><span class="bullet-check">✓</span><span>Feeds your ERP or planning tool in the format it reads</span></li>
            <li><span class="bullet-check">✓</span><span>No re-keying between the order and the plan</span></li>
          </ul>
          <a href="/order-fulfillment-software" class="feature-link">See how orders get fulfilled →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Structured order exported<br>as EDI into a distributor's<br>existing system
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: known volume (Tier B secondary in body; assumption Q12) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Plan On Known Volume</span>
          <h3>Plan pickers and trucks on real numbers.</h3>
          <p class="mt-12 text-muted">
            See every order for tomorrow's delivery as it lands, by account and by
            item. Whether you plan capacity in distribution capacity planning software
            or on a whiteboard, it only works if the volume number is real. Now it is.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Tomorrow's orders visible as they arrive</span></li>
            <li><span class="bullet-check">✓</span><span>Totals by item for each delivery day</span></li>
            <li><span class="bullet-check">✓</span><span>Staff the pick shift to the real volume</span></li>
            <li><span class="bullet-check">✓</span><span>Load trucks on actual orders, not estimates</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">See order status tracking →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Item totals for tomorrow's<br>delivery across all<br>accounts
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: shorts up front -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Shorts Up Front</span>
          <h3>Catch shorts before they break the plan.</h3>
          <p class="mt-12 text-muted">
            Live availability is checked against incoming orders, so you know what
            you cannot fill before picking starts. Flag a substitute and confirm it
            with the customer early, instead of finding the gap on the dock.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Live availability against every incoming order</span></li>
            <li><span class="bullet-check">✓</span><span>Substitutions flagged before the pick</span></li>
            <li><span class="bullet-check">✓</span><span>Customers told while they can still adjust</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer credits and redeliveries</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">See per-account catalogs →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Incoming order line flagged<br>short with a suggested<br>substitute
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ============================================================
     SECTION 7: FEATURE CARDS – SUPPORTING CAPABILITIES
     ============================================================ -->
<section class="section-pad bg-light" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Everything Included</span>
      <h2>All the tools that feed a better plan.</h2>
      <p class="lead mt-16">No extra apps. No workarounds. Everything ships with VOS out of the box.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>24/7 Order Intake</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers order after service. Their orders are waiting for you when
          the day starts.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📥</div>
        <h4>One Order Queue</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Voice, web, and app orders in a single list, in one format, in the
          order they arrived.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Structured Line Items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every line matched to a real item, size, and pack. Nothing to decode
          or retype.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏷️</div>
        <h4>Per-Account Catalogs</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each customer sees their own items and pricing, so orders arrive
          already correct.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Order History by Account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every order each customer has placed, searchable, as a record of real
          demand.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Live Availability</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Shorts show up against the order before picking, not on the dock.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Substitutions</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Flag a swap and confirm it up front, so the plan and the customer
          both know.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <h4>Any Delivery Format</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Email, PDF, Excel, EDI, or API. Orders reach your ERP or planning
          tool the way it reads them.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>No System Replacement</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Keep your ERP, your planning tool, and your routes. VOS only changes
          how orders arrive.
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
      <h3 style="margin-bottom:10px;">See tomorrow's orders land before your team clocks in</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a free 20-minute walkthrough. We'll show you 24/7 order intake,
        structured orders, and delivery formats feeding a distributor's existing
        system.
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
      <h2>Up and running in one day</h2>
      <p class="lead mt-16">
        No IT project. No systems to rip out. Three steps and your plan starts
        from real orders.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>We load your catalog and accounts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS imports your products, pack sizes, and account pricing, so every
          incoming order matches a real item.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Your customers order, 24/7</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          They order by voice, web, or app, whenever suits them. Each account sees
          only its own items and prices.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders flow into your plan</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Everything lands structured in one queue and goes to your ERP or planning
          tool in the format it reads.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS account setup and delivery format configuration for a distributor
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
      <h2>What food service teams say about VOS</h2>
    </div>

    <div class="testimonials-grid">

      <!-- DEVS: exact quote pending client sign-off (see knowledge-base/vos-product-facts.md) -->
      <div class="testimonial-card featured">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">
          "VOS simplified the entire ordering process for our kitchen. I place my
          order after close, and my distributor has it before they open. No more
          calling at 6am."
        </p>
        <div class="testimonial-author">
          <!-- DEVS: Replace with Tony Luna's photo -->
          <div class="author-avatar">Photo</div>
          <div>
            <div class="author-name" style="color:#fff;">Tony Luna</div>
            <div class="author-role">Owner-Chef</div>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px;">

        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "Most of our orders now come in the night before. We plan the pick
            shift on real numbers instead of last Tuesday's."
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
            "Nothing gets typed twice anymore. Orders go straight into our system
            as EDI, so the plan starts from clean data."
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
     Deliberately includes honest ✗ rows: VOS does not do network planning,
     forecasting, or transport optimization.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>An input to your planning.<br>Not a replacement for it.</h2>
      <p class="lead mt-16">
        We would rather be clear than oversell. VOS does not plan your network. It
        captures the orders your planning depends on. Here's how it compares.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">DRP / Supply Chain Suite</th>
            <th style="width:22%;">Phone + Fax Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Captures customer orders 24/7</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Orders arrive structured, no re-keying</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Per-account catalogs and pricing</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Voice ordering for your customers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Multi-warehouse network planning</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Demand forecasting models</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Route and transport optimization</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Sends orders to your ERP or planning tool</td>
            <td><span class="check-yes">✓</span></td>
            <td>Receives them</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>What the plan is built on</td>
            <td>Real orders</td>
            <td>Your input data</td>
            <td>Phone notes</td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>1 day</td>
            <td>Months</td>
            <td>None needed</td>
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
     FAQ 1 is the scope limit, open by default, on purpose.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Common questions about VOS and distribution planning</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS distribution resource planning software?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No, and we would rather say so up front. VOS does not plan inventory
          across warehouses, model demand, or optimize transport and capacity. It
          captures your customers' orders, 24/7 and in a clean format, and feeds
          them into whatever planning system you already use. Better input, not a
          replacement.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Then how does it help with distribution planning?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Any distribution resource planning software depends on the demand data
          going into it. When orders arrive by phone at 6am and get typed in by hand,
          the plan starts late and starts wrong. With VOS, orders arrive overnight,
          structured and matched to your catalog, so planning starts from what
          customers actually ordered.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS do route planning or truck capacity?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS does not build routes, schedule drivers, or model truck and
          warehouse capacity. What it gives you is tomorrow's order volume early, by
          account and by item, which is the number those decisions depend on.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can orders flow into our ERP or planning system?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. VOS delivers orders as email, PDF, Excel, or EDI, and integrates with
          distributor platforms through an API, so orders flow in without anyone
          re-typing them. Tell us what your system reads and we set it up during
          onboarding.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          When do our customers' orders come in?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Whenever your customers want. They can order 24/7 by voice, web, or the
          mobile app. Most of the benefit comes from chefs ordering the night before
          instead of calling first thing in the morning.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do our customers need to learn anything?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Very little. Each account sees its own catalog, pack sizes, and pricing.
          They can press to speak and say what they need, and VOS matches it to the
          right item and confirms it. Most chefs are comfortable after one order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this built for small distributors?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. VOS was built for independent and regional food distributors, not
          global supply chains. You do not need a planning department or an IT team
          to run it, and it works alongside whatever system you already have.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most teams are fully set up within one business day. The VOS team imports
          your catalog, pack sizes, and account pricing, and configures how orders
          reach your system. There is no technical work on your end.
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
  <h2>Ready to plan on real orders?</h2>
  <p>Join food distributors who get tomorrow's orders tonight, clean and ready for the plan.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Up and running in 1 day</span>
    <span>✓ Works with your current systems</span>
    <span>✓ No system replacement needed</span>
    <span>✓ Free setup support included</span>
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
        <li><a href="#features">24/7 Order Intake</a></li>
        <li><a href="#features">Structured Orders</a></li>
        <li><a href="#features">Tomorrow's Volume</a></li>
        <li><a href="#features">Shorts Up Front</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/order-taking-software">Order Taking</a></li>
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs DRP Suites</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <span>© 2025 VoiceOrder Solutions. All rights reserved.</span>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <a href="https://www.voiceordersolutions.com/" style="color:rgba(255,255,255,0.4);text-decoration:none;">Privacy Policy</a>
      <a href="https://www.voiceordersolutions.com/" style="color:rgba(255,255,255,0.4);text-decoration:none;">Terms of Service</a>
    </div>
  </div>
</footer>


<!--@SCRIPT-->
`,
};
