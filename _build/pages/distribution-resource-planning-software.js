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
  title: 'Order Data for Distribution Resource Planning Software | VOS',
  description: "Not a DRP system: VOS feeds your distribution resource planning software customer orders taken 24/7, so tomorrow's real demand is in before you plan.",
  related: ["order-fulfillment-software","inventory-planning-software","order-tracking-software"],
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
      <h1>Feed Your Distribution Resource Planning Software Real Orders.</h1>
      <p class="lead mt-16">
        Every plan starts from demand data. VOS is not distribution resource
        planning software. It is the ordering layer that supplies that data: your
        restaurant customers order by voice in the app at any hour, so tomorrow's
        actual orders are waiting when you plan pickers, trucks, or your own buying.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Works with your current systems</span>
        <span class="hero-trust-dot"></span>
        <span>Live within 48 hours</span>
        <span class="hero-trust-dot"></span>
        <span>PDF, Excel, Word, EDI, API, QuickBooks</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (overnight orders for tomorrow's delivery) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Overnight orders for<br>tomorrow's delivery, with<br>order numbers and times
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
      <div class="stat-label">ordering, so late-night orders count in the morning plan</div>
    </div>
    <div>
      <div class="stat-number">Every</div>
      <div class="stat-label">order checked by the customer before it reaches your plan</div>
    </div>
    <div>
      <div class="stat-number">20–30 Min</div>
      <div class="stat-label">saved per order, compared with phone and voicemail</div>
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
      Planning software can only work with the data it is given. For many food
      distributors, that data is late, handwritten, and partly guessed. Here's
      what it costs:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4 class="mb-8">"Tomorrow's orders keep arriving at 6am"</h4>
        <p class="text-muted" style="font-size:15px;">
          Chefs call first thing, so the pick crew and the trucks get set before
          anyone knows the volume. Then you scramble once the phone stops ringing.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4 class="mb-8">"Our system has the data, but someone typed it in"</h4>
        <p class="text-muted" style="font-size:15px;">
          Orders sit in voicemail and texts, then get keyed into the ERP by hand.
          Every typo becomes a wrong number in the plan.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🎲</div>
        <h4 class="mb-8">"We plan off last week and hope"</h4>
        <p class="text-muted" style="font-size:15px;">
          When real orders show up late, last week's numbers stand in for this
          week's demand. That is a forecast of a week that already happened.
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
      <h2>What your distribution resource planning software runs on: early, accurate orders</h2>
    </div>


    <!-- Feature 1: orders in early -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Orders In Early</span>
          <h3>Tomorrow's orders are in before you plan.</h3>
          <p class="mt-12 text-muted">
            Your customers can order at 11pm after service. By the time your team
            plans the morning, those orders are already in, so whatever distribution
            resource planning software you run gets actual demand to work from,
            not a guess.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Chefs can order the night before, once service ends</span></li>
            <li><span class="bullet-check">✓</span><span>More lead time between the order and the pick</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer early-morning calls to write down</span></li>
            <li><span class="bullet-check">✓</span><span>An earlier order cutoff becomes easier to hold</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">See the order taking side →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Orders timestamped<br>overnight, ready before<br>the morning shift
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
            Every order arrives as line items tied to your SKUs, at the prices you
            set for that account. It reaches your system in the format you choose,
            ready to become a sales order. Your planning run starts from what customers asked
            for, not from what someone typed.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Item, quantity and account on every line</span></li>
            <li><span class="bullet-check">✓</span><span>Written orders, not notes from a phone call</span></li>
            <li><span class="bullet-check">✓</span><span>A running order history for each account</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing to retype when orders come by EDI, API or QuickBooks</span></li>
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
          <h3>Plan tomorrow's capacity on orders already in.</h3>
          <p class="mt-12 text-muted">
            See each order for tomorrow's delivery as it lands, and which account
            placed it. Whether you plan capacity in distribution capacity planning software
            or on a whiteboard, it only works if the volume number is real. Now it is.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Order data your own system can total by item</span></li>
            <li><span class="bullet-check">✓</span><span>Staff the pick shift to the real volume</span></li>
            <li><span class="bullet-check">✓</span><span>Load trucks on actual orders, not estimates</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer late orders after the pick has started</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">See how order tracking works →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Tomorrow's orders listed<br>by account as they<br>arrive
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
            Stock levels update alongside order activity, so you can see what is
            running short before picking starts. That keeps the plan from counting
            on product you do not have.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Real-time stock view tied to incoming orders</span></li>
            <li><span class="bullet-check">✓</span><span>Customer catalogs update when stock changes</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer stockout surprises and late substitutions</span></li>
            <li><span class="bullet-check">✓</span><span>Works next to your current inventory tools</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">See how catalogs stay current →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Real-time stock levels<br>next to tomorrow's<br>incoming orders
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
      <p class="lead mt-16">Each one makes the order data behind your plan more accurate.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>24/7 Order Intake</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts place orders after service, and each one is waiting when your
          day starts.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📥</div>
        <h4>Numbered and Timestamped</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each order gets a unique number and a timestamp, so you can trace it
          back to who placed it and when.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Structured Line Items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each line carries your SKU and the quantity, ready for your system to read.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏷️</div>
        <h4>Account Order Guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each customer orders from its own guide at your prices, so every line
          matches what you sell.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Order History by Account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your admin platform keeps every order each account has placed, a running
          record of actual demand.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Live Availability</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Stock updates with each new order, and shortfalls show up before the pick, not on the dock.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Push and Text Confirmations</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers get a confirmation by push notification or text, so they know the order went through.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <h4>Any Delivery Format</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          EDI or API for bigger systems, QuickBooks or a simple email for smaller ones.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>Works Beside Your ERP</h4>
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
        A 20-minute demo shows after-hours orders reaching your system in a form
        your plan can use.
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
      <h2>Live within two days, not months</h2>
      <p class="lead mt-16">
        No IT project and no new planning system. Three steps, and real orders
        start feeding the tools you plan with.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Share every account's order guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load its items, your prices and your SKUs, so every incoming order matches your item list.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Accounts order any hour, by voice</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          They install the app on iPhone or Android and speak the order whenever
          it suits them.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Your planning gets real numbers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every order lands in the format you picked, ready for the system you plan from.
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
      <h2>What distributors and their customers tell us</h2>
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
            "Our customers send orders the night before now, so we set the pick
            crew by what was ordered, not by last Tuesday's guess."
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
            as EDI, so our planning begins with accurate data."
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
        To be clear about the boundary: VOS does not plan your network. It captures the orders your planning depends on. Here's where each option fits.
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
            <td>Orders arrive itemized, ready for your system</td>
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
            <td>Pushes orders into your existing ERP</td>
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
            <td>1 to 2 days</td>
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
          What is distribution resource planning software, and is VOS one?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          DRP software works out how much stock each location needs, and when,
          based on demand and lead times. DRP is often a module inside an ERP. VOS is not
          one. It does not forecast demand, plan stock across warehouses, or
          optimize transport and capacity. It captures your customers' orders at
          any hour, with each line matched to your SKUs, and sends them to the planning
          system you use today. Better input, not a replacement.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does better order data help my distribution planning?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Any distribution resource planning software depends on the demand data
          going into it. When orders are phoned in at 6am and typed in by hand,
          the plan starts late and starts wrong. With VOS, orders can arrive
          overnight, tied to your SKUs and checked by the customer, so planning
          starts from what customers actually ordered.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS do route planning or truck capacity?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS does not build routes, schedule drivers, or model truck and
          warehouse capacity. What it gives you is tomorrow's orders early, with the
          account and items on each one, which is the data those decisions depend on.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can orders flow into our ERP or planning system?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. VOS can send each order as an email with a PDF, Excel or Word file, through EDI, into QuickBooks, or over an API connection to your ERP or distribution platform. With EDI, QuickBooks or the API, nobody re-types the order. We set the format with you during onboarding.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can our customers order after hours?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, day or night. A chef can send the next day's order late at night instead of phoning it in at dawn, and it is there when your team starts work.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do our customers need to learn anything?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Very little. They talk through the order from their own order guide in
          the app. If they get pulled away, it saves where they stopped, and they
          review it before it is sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this built for small distributors?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. VOS is made for small to mid-size independent food distributors, not
          enterprise supply chains. You do not need a planning department or an IT team
          to run it, and it fits beside the tools you run today. Pricing
          is quoted for each distributor, so ask on a demo call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast can we go live?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running within 24 to 48 hours. You send us each customer's order guide, we load it and set up their account, then we connect order delivery to the format you use. Your customers can usually place a first order that same day.
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
  <p>Get tomorrow's customer orders tonight, confirmed and ready for the plan.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Accounts set up for you</span>
    <span>✓ Your ERP stays in place</span>
    <span>✓ No IT project</span>
    <span>✓ iOS and Android apps</span>
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
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/inventory-replenishment-software">Inventory Replenishment</a></li>
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
