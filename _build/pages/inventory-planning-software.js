/* Page 5 — PRIMARY: inventory planning software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * AUDIENCE: food distributors (pass 1 relevance rewrite, 2026-09-15).
 *   One question: "How much should I stock for next week's customer orders?"
 * SECONDARY: demand and inventory planning software (Tier B, H3: planning needs orders + stock; VOS supplies both, no forecast)
 *            supply chain inventory planning software (Tier B, H3: reframed to 24/7 order capture)
 *            inventory planning tool (body) / inventory planning platform (Tier B, FAQ 1: VOS works alongside it)
 *            inventory planning and optimization software (Tier B, FAQ, scope-honest answer)
 * NOTE: VOS is NOT a forecasting or optimization engine and the page says so (FAQ 3, comparison row 2).
 *       Claims limited to order history per account, 24/7 capture, real-time stock visibility tied to
 *       orders, per-account order guides, and working alongside existing systems. No par levels.
 */
module.exports = {
  title: 'Inventory Planning Software for Food Distributors | VOS',
  description: 'VOS inventory planning software gives food distributors dated order history for every account, 24/7 order capture and a live stock view to plan next week.',
  related: ["inventory-replenishment-software","inventory-tracking-software","distribution-resource-planning-software"],
  relatedHeading: 'The rest of the stock picture',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "inventory planning software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">Inventory Planning Software for Food Distributors</span>
      <h1>Inventory Planning Software Built on Real Customer Orders.</h1>
      <p class="lead mt-16">
        Plan next week's stock from what your customers actually ordered. VOS is
        inventory planning software that keeps each account's order history,
        stamped with the date and time, alongside a live view of your stock.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Works alongside your current systems</span>
        <span class="hero-trust-dot"></span>
        <span>Live in 24 to 48 hours</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android + web admin</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (per-account order history + live stock view) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Admin platform with one<br>account's order history and<br>a live stock view
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
      <div class="stat-number">Per account</div>
      <div class="stat-label">order history to plan from, not an industry average</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">order capture, so late orders stay in your numbers</div>
    </div>
    <div>
      <div class="stat-number">Real-time</div>
      <div class="stat-label">stock visibility tied to incoming orders</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Next week's stock is somebody's best guess.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Most distributors decide how much to bring in from memory, old invoices and
      gut feel. It works out roughly. Roughly is expensive. Here's what it costs:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🎲</div>
        <h4 class="mb-8">"We bring in the same amount every week"</h4>
        <p class="text-muted" style="font-size:15px;">
          Busy week or slow week, the buy barely changes. So you run short on what
          your accounts want most, or sit on product that isn't moving.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧠</div>
        <h4 class="mb-8">"Only our buyer knows who orders what"</h4>
        <p class="text-muted" style="font-size:15px;">
          That knowledge lives in one head, or in a rep's notebook. When that
          person is out, whoever covers either over-buys to be safe or misses something.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4 class="mb-8">"Late-night orders never made it into our numbers"</h4>
        <p class="text-muted" style="font-size:15px;">
          An after-hours order gets written on a sticky note, typed in late, or
          lost. Your records say that demand never happened.
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
      <span class="eyebrow">Plan From Real Orders</span>
      <h2>Inventory planning software for distributors who stock a week at a time</h2>
    </div>


    <!-- Feature 1: Usage history -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Account Order History</span>
          <h3>See what every account ordered, and when.</h3>
          <p class="mt-12 text-muted">
            Every order your customers place through VOS is filed under the account
            that placed it, with its own order number, date and timestamp. Instead of
            asking a rep what the steakhouse usually takes, you look it up. It's an
            inventory planning tool built on your own customers' orders.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A unique number on every order you receive</span></li>
            <li><span class="bullet-check">✓</span><span>Full history for each account in the admin platform</span></li>
            <li><span class="bullet-check">✓</span><span>See who ordered what, and when</span></li>
            <li><span class="bullet-check">✓</span><span>No piecing last month together from emails</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">See where each customer order stands →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>One account's order history<br>with order numbers, dates<br>and timestamps
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 (Tier B) – demand and inventory planning software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Orders and Stock</span>
          <h3>Demand and inventory planning software runs on two facts: orders and stock.</h3>
          <p class="mt-12 text-muted">
            VOS gives you both. Orders from your accounts arrive stamped and filed,
            and your stock view updates in real time as they land. VOS does not
            predict next week for you. It shows what was ordered and what you have,
            so your buyer decides with facts.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Stock that moves with order activity</span></li>
            <li><span class="bullet-check">✓</span><span>Visibility across your full product catalog</span></li>
            <li><span class="bullet-check">✓</span><span>Catalog updates as stock levels change</span></li>
            <li><span class="bullet-check">✓</span><span>No forecast model to set up or second-guess</span></li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">See stock tracking as orders come in →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Live stock view by item<br>updating as new<br>orders arrive
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 (Tier B) – supply chain inventory planning software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Open 24/7</span>
          <h3>Supply chain inventory planning software never sees the order that went to voicemail.</h3>
          <p class="mt-12 text-muted">
            For an independent distributor, the hole in the plan is often simple:
            orders left after hours that never reach the system. VOS takes orders
            24/7, whether a chef orders after closing or before morning prep, so late
            demand lands in the same history as the rest.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Orders taken any hour, seven days a week</span></li>
            <li><span class="bullet-check">✓</span><span>Late orders filed with the rest of that account's history</span></li>
            <li><span class="bullet-check">✓</span><span>No message to type up the next morning</span></li>
            <li><span class="bullet-check">✓</span><span>Orders save if a customer gets pulled away</span></li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">See ordering from your customer's side →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>After-hours orders arriving<br>with date and time<br>stamps
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: Plan then order in one motion -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Clean Order Lines</span>
          <h3>Every order line is an item you actually carry.</h3>
          <p class="mt-12 text-muted">
            Each account orders from its own order guide: the items it buys, at the
            prices you set, on your SKUs. Nobody asks for "the usual" or "the good
            chicken". So when you plan, past orders match the items in your own
            catalog.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A separate guide for every account</span></li>
            <li><span class="bullet-check">✓</span><span>Your items, prices and SKUs on every line</span></li>
            <li><span class="bullet-check">✓</span><span>Customers review and confirm before sending</span></li>
            <li><span class="bullet-check">✓</span><span>Saves your customers 20 to 30 minutes an order</span></li>
          </ul>
          <a href="/order-entry-software" class="feature-link">See how customers place orders →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A customer's order guide<br>with your items, prices<br>and SKUs
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
      <h2>All the tools your buyer needs to plan a week.</h2>
      <p class="lead mt-16">No extra apps and no workarounds. Here's what you plan from.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📈</div>
        <h4>Account Order History</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every order each customer has placed, filed by account in the admin
          platform, ready to check before you buy.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>Order Guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each account gets a guide listing its regular items, so orders
          arrive on your item list, not in shorthand.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔔</div>
        <h4>Order Confirmations</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers get a push or text confirmation, so both sides agree on
          what was ordered.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Live Stock View</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Know where each item stands before you commit to a buy, so the plan
          starts from today's numbers.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📉</div>
        <h4>Fewer Stockouts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Plan with real orders in view and face fewer stockout surprises and
          last-minute substitutions.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Voice Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your customers speak their order. VOS turns it into a clean digital
          order for your team.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>iOS + Android App</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your accounts place orders from a phone, wherever they are in the kitchen.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>24/7 Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders placed after close are captured and waiting when your team
          starts the day.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>No System Replacement</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Keep your systems and your process. VOS adds clean order data
          without changing the rest.
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
      <h3 style="margin-bottom:10px;">See the order record your weekly buy can start from</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a free 20-minute walkthrough. We'll show you order history by account,
        real-time stock and round-the-clock ordering working together, for a
        distributor like you.
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
      <h2>Up and running in two days or less</h2>
      <p class="lead mt-16">
        No IT team. No systems to rip out. Three steps and the weekly buy
        stops being a guess.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Share your order guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Send us each customer's order guide. We upload them to the admin
          platform and set up every account.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Your customers start ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          They download the app and order by voice, any hour. Most place a
          first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Plan from the record</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders pile up into a record for each account, and stock stays current
          as they land. You make the buying call in your own system.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS admin platform showing order history for a customer account
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
      <h2>What distributors and their customers say</h2>
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
            "Our buyer used to plan the week from memory. Now we check what each
            account actually ordered before we buy."
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
            "Orders that came in overnight used to go missing from our numbers.
            Now they show up timestamped like every other order."
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
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Real orders for your stock plan.<br>Not a forecasting engine.</h2>
      <p class="lead mt-16">
        Enterprise planning suites forecast for national networks and need a team
        to run them. Here's how VOS compares for a small or mid-size distributor.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Enterprise Planning Suite</th>
            <th style="width:22%;">Memory + Spreadsheet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Separate order history per account</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Statistical demand forecasting</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Built around customer order guides</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Real-time stock linked to customer orders</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Captures customer orders 24/7</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Voice ordering for your customers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Customers order from their phone</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>Varies</td>
          </tr>
          <tr>
            <td>Needs an analyst to run it</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Cost of being wrong</td>
            <td>Caught early</td>
            <td>Caught early</td>
            <td>Found on delivery day</td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>24 to 48 hours</td>
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
     Q2 defends against cannibalising /inventory-tracking-software
     Q3 sets honest scope on "optimization" (see open question Q2 in the plan)
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Common questions about planning stock with VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need to replace my current system to use VOS?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Keep your ERP, inventory planning platform or spreadsheet. VOS works
          alongside them. Orders reach your team by email (PDF, Excel or Word), EDI,
          API or QuickBooks, so nothing on your back end has to change.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How is inventory planning software different from inventory tracking?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Tracking answers what is on hand right now. Planning answers how much to
          stock for next week. VOS feeds both from the same orders: a current picture
          of stock for today, and a dated history of what each account bought to plan
          the week ahead. This page covers the planning side.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this inventory planning and optimization software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not in the forecasting sense. VOS does not predict demand or work out an
          ideal stock level for you. It gives you clean order history by account and
          a real-time view of stock tied to those orders. If you run a forecasting or
          optimization tool, that record is what it should be reading.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the planning numbers come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From real orders. Each order in VOS carries the account, who ordered and
          when, and every line comes from that account's order guide. This inventory
          planning software keeps that record. Your buyer reads it with current stock,
          then places the buy with your suppliers the way you do today.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do I need months of history before it's useful?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Seeing current stock helps from your first day. Order history grows with
          every new order, so it gets more useful each week, but you don't have to
          wait for it to plan with better facts.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I see order history for each customer account?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Each account has a separate order guide and history in the admin
          platform. A busy downtown restaurant is never mixed in with a quiet cafe
          across town, so you can see what each one really buys.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS built for a distributor my size?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. VOS was built for small to mid-size food distributors, not enterprise
          companies with IT and planning departments. Pricing is quote-based. Book a
          demo and we'll quote for your accounts and your setup.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are set up within 24 to 48 hours, with no complex
          implementation. You send your customer order guides, and VOS loads them and
          sets up each account for you.
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
  <h2>Ready to stop guessing next week's stock?</h2>
  <p>Plan from what your customers really order, not from one person's memory.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No IT project required</span>
    <span>✓ Account setup done for you</span>
    <span>✓ Customers order on iOS or Android</span>
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
        <li><a href="#features">Order History</a></li>
        <li><a href="#features">Real-Time Stock</a></li>
        <li><a href="#features">24/7 Order Capture</a></li>
        <li><a href="#features">Customer Order Guides</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/inventory-control-software">Inventory Control</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Spreadsheets</a></li>
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
