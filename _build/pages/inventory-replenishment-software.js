/* Page 14 - PRIMARY: inventory replenishment software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * AUDIENCE: distributor. One question: "It's running low. How do I restock before a customer's order comes up short?"
 * SECONDARY: automated inventory replenishment software (Tier B, H3: order data flows on its own, the buyer restocks)
 *            iphone inventory replenishment software (Tier A, H3: accounts restock their kitchens in the iOS app)
 *            replenishment inventory optimization software (Tier B, FAQ, no reorder math claimed)
 * Separation vs inventory planning: planning = "how much should I stock for next week?" (forward, weekly).
 * Replenishment = "it's running low, restock in time" (stock levels tied to live orders + clean customer reorders).
 * NEVER claims purchase orders to the distributor's own suppliers, reorder quantities, par levels,
 * or an order sent by the software. (Assumption Q10 no longer applies to this page.)
 */
module.exports = {
  title: 'Inventory Replenishment Software for Food Distributors | VOS',
  description: 'VOS is inventory replenishment software for food distributors. See what is running low as customer orders land, and restock before an order comes up short.',
  related: ["inventory-planning-software","inventory-tracking-software","inventory-automation-software"],
  relatedHeading: 'Before and after the restock',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "inventory replenishment software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">Inventory Replenishment Software for Food Distributors</span>
      <h1>Inventory Replenishment Software That Keeps Pace With Orders.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is inventory replenishment software for food
        distributors. Stock levels update as customer orders land, so your buyer
        spots what is getting low while there is still time to restock. No new
        purchasing system. Fewer surprises for your customers.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Works alongside your current systems</span>
        <span class="hero-trust-dot"></span>
        <span>Live in 24-48 hours</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android + web admin</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (below-par alert + suggested reorder list) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Admin view of stock levels<br>moving as customer<br>orders arrive
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
      <div class="stat-label">customer orders captured, after hours too</div>
    </div>
    <div>
      <div class="stat-number">Real-time</div>
      <div class="stat-label">stock levels tied to incoming orders</div>
    </div>
    <div>
      <div class="stat-number">20-30 min</div>
      <div class="stat-label">saved on every order your accounts place</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>An order comes up short when low stock shows up late.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Distributors rarely run short because a product was impossible to buy. It
      happens because the stock numbers lagged, or the orders that should have
      warned them were stuck in voicemail. Here's how it goes:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">😬</div>
        <h4 class="mb-8">"We found out it was gone when we went to pick it"</h4>
        <p class="text-muted" style="font-size:15px;">
          The spreadsheet said there was plenty. The first real sign was an empty
          shelf and a customer order you couldn't fill.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⏳</div>
        <h4 class="mb-8">"The orders that would have warned us came in late"</h4>
        <p class="text-muted" style="font-size:15px;">
          Three accounts left after-hours voicemails for the same item. Nobody keyed
          them in until morning, after the buyer had already ordered from the supplier.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🙋</div>
        <h4 class="mb-8">"The customer found out on delivery day"</h4>
        <p class="text-muted" style="font-size:15px;">
          Nobody told the kitchen the item was out. They found the gap when the
          truck arrived, and your rep took the angry call.
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

    <div class="text-center" style="max-width: 740px; margin: 0 auto 72px;">
      <span class="eyebrow">The Restock Loop</span>
      <h2>Inventory replenishment software that starts with the customer order</h2>
    </div>


    <!-- Feature 1: the trigger -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">The Early Signal</span>
          <h3>Spot low stock while you can still act on it.</h3>
          <p class="mt-12 text-muted">
            Every customer order that comes in moves your on-hand numbers in VOS.
            Your team sees which items are dropping and what needs attention before the
            next pick, not after an account gets less than it ordered.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Numbers shift with each order as it lands</span></li>
            <li><span class="bullet-check">✓</span><span>Every item you carry in view, not just the best sellers</span></li>
            <li><span class="bullet-check">✓</span><span>Catalog updates as stock levels change</span></li>
            <li><span class="bullet-check">✓</span><span>Sits next to the inventory system you run today</span></li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">See live inventory tracking →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Catalog stock levels<br>changing as new orders<br>come in
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 (Tier B) – automated inventory replenishment software (assumption Q10) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">The Restock Call</span>
          <h3>Automated inventory replenishment software, with your buyer in charge.</h3>
          <p class="mt-12 text-muted">
            Part of the loop runs by itself: each customer order arrives digitized and
            timestamped, and your numbers update with it. The restock stays with your
            buyer. VOS does not write purchase orders to your suppliers, and it never
            sends an order on its own.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Each order carries a number, date and timestamp</span></li>
            <li><span class="bullet-check">✓</span><span>Order history kept in one place for your buyer</span></li>
            <li><span class="bullet-check">✓</span><span>Restocking happens in the system you already use</span></li>
            <li><span class="bullet-check">✓</span><span>No purchase orders created on your behalf</span></li>
          </ul>
          <a href="/inventory-planning-software" class="feature-link">See how to plan next week's stock →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order history with order<br>numbers, dates and<br>timestamps
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 (Tier A) – iphone inventory replenishment software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">From Their Kitchen</span>
          <h3>iPhone inventory replenishment software for the kitchens you supply.</h3>
          <p class="mt-12 text-muted">
            Your restaurant accounts restock their own kitchens in the VOS app on
            iPhone or Android. They walk the cooler and speak the order, working from
            a guide with your items, prices and SKUs. They review it before they
            submit, so the order that reaches you is complete.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>One app for iPhone and Android</span></li>
            <li><span class="bullet-check">✓</span><span>Each account orders from a guide you control</span></li>
            <li><span class="bullet-check">✓</span><span>Customers check every line before it goes</span></li>
            <li><span class="bullet-check">✓</span><span>Progress saves if they get pulled away</span></li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">See stock management from the kitchen side →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>iPhone app order screen<br>with voice input and<br>order guide items
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: any hour -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Any Hour</span>
          <h3>The 11pm order is waiting before your buyer starts.</h3>
          <p class="mt-12 text-muted">
            Your accounts can order 24/7, so a closeout order doesn't sit in voicemail
            until morning. It reaches your team right away, in the format you already
            take, and your buyer sees it before placing the day's restock.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Orders captured around the clock, weekends included</span></li>
            <li><span class="bullet-check">✓</span><span>Delivered in real time, not at 9am</span></li>
            <li><span class="bullet-check">✓</span><span>Email with a PDF, Excel or Word file</span></li>
            <li><span class="bullet-check">✓</span><span>Or EDI, API, QuickBooks or a platform link</span></li>
          </ul>
          <a href="/order-entry-software" class="feature-link">See how accounts place their orders →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Customer order received<br>after hours, ready for<br>the morning team
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
      <h2>What your team works with to restock in time.</h2>
      <p class="lead mt-16">Each piece of the restock loop, ready once you are live.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📊</div>
        <h4>Real-Time Stock View</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your numbers move with order activity, so a dip shows up while you
          can do something about it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📝</div>
        <h4>Full-Catalog View</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          See every product you stock, not only the ones that already ran
          out.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔄</div>
        <h4>Automatic Catalog Updates</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          When what's on hand changes, your catalog follows, so it stays current.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Voice Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your customers say what they need into the app and confirm it before it reaches you.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>iPhone + Android</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts order wherever they notice a gap, not only from a desk.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>24/7 Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A midnight order sits ready for your team first thing.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Per-Account Order Guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every account buys your items, at your prices, tied to your
          SKUs.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Admin Platform</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Update order guides, manage accounts and look back through order
          history in one place.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>No System Replacement</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS works next to your inventory and purchasing tools. Your buyer
          restocks the same way as today.
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
      <h3 style="margin-bottom:10px;">See how incoming orders show you what to restock</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a free 20-minute walkthrough. We'll show you voice orders arriving
        and stock levels moving with them, for a distribution business like yours.
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
      <h2>Up and running in a day or two</h2>
      <p class="lead mt-16">
        No IT project. No systems to rip out. Three steps, and low stock stops
        catching you off guard.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Share your order guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Send us each customer's order guide. We upload it and set up the
          account for you.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Your accounts start ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers download the app on iOS or Android. Most are ordering the
          same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Restock on current numbers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders reach your team in your format, the stock picture updates with each one, and your buyer knows what to bring in.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS admin platform with incoming customer orders and current stock levels
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
      <h2>What the restaurants you serve say about VOS</h2>
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
            "We used to learn an item was low when a customer's order couldn't be
            filled. Now orders land as they're placed, and we see the dip in time."
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
            "Our accounts send orders from their phones after close. They're waiting
            for us in the morning, before we buy from our own suppliers."
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
     Honest ✗ row for VOS on statistical forecasting.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Built for the restock.<br>Not a forecasting project.</h2>
      <p class="lead mt-16">
        Big replenishment suites model demand across whole warehouse networks. A
        small to mid-size distributor needs clean orders and a current view of what
        is low. Here's how VOS compares.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Forecasting Suite</th>
            <th style="width:22%;">Clipboard + Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock levels that move with incoming orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Catalog kept current as stock changes</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>A person sends every order, never the software</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Customers order in a mobile app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Voice ordering</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Takes orders 24/7</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Each account's own order guide in an app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Statistical demand forecasting</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Needs an analyst to run it</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>1-2 days</td>
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
     Q2 defends against cannibalising /inventory-planning-software
     Q3 states outright that VOS never auto-sends
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Common questions about restocking with VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Does VOS change how we buy from our own suppliers?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Your buyer keeps the same suppliers and places purchase orders the same way. What changes is what they work from: customer orders that arrive clean and on time, and stock figures that stay current as those orders land.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is inventory replenishment software the same as inventory planning?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Planning looks ahead and asks how much to stock for next week. Replenishment is day to day: something just ran low, and you need more in before a customer feels it. VOS helps with that daily side by tying stock to real orders as they arrive.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it place orders automatically?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. This inventory replenishment software never sends anything by itself,
          and it does not create purchase orders for your own suppliers. It gives your
          buyer up-to-date stock and timestamped customer orders. Your buyer decides
          what to restock and orders it through your usual system.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this replenishment inventory optimization software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not in the math sense. VOS does not work out reorder quantities or run
          demand models, and it does not need a data team. What it improves is the
          input: complete orders that land early, so restock decisions rest on
          real numbers instead of yesterday's spreadsheet.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can our customers order from their phones?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. The VOS mobile app runs on iOS and Android, so your customers place orders right in the kitchen. They talk through the order, review it and submit it. Your team handles accounts and order guides in the admin platform on the web.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do we see what is running low?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          VOS ties your stock to order activity across the whole catalog. As
          customer orders come in, your team can see which items are getting thin.
          When to restock, and how much, stays your buyer's call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if an item runs out before we restock?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Your VOS catalog changes when stock does, so it matches what is on hand.
          That means fewer stockout surprises for your accounts, fewer last-minute
          substitutions and fewer awkward calls for your reps.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running within 24 to 48 hours. You share your customers' order guides, we load them and set up each account, and most customers place a first order the same day. No IT project needed.
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
  <h2>Ready to restock before your customers feel it?</h2>
  <p>Join distributors who catch a dip while orders are still coming in, not when a customer calls.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Live within 2 days</span>
    <span>✓ Your purchasing process stays the same</span>
    <span>✓ No system replacement needed</span>
    <span>✓ Pricing on request</span>
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
        <li><a href="#features">Real-Time Stock View</a></li>
        <li><a href="#features">Catalog Updates</a></li>
        <li><a href="#features">Voice Ordering</a></li>
        <li><a href="#features">24/7 Ordering</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/order-taking-software">Order Taking</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Forecasting Suites</a></li>
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
