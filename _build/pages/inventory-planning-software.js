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
  description: 'Inventory planning software for food distributors: dated order history per account, 24/7 order capture and a live stock view, so you plan without guesswork.',
  related: ["inventory-replenishment-software","inventory-tracking-software","distribution-resource-planning-software"],
  relatedHeading: 'More on stock, restocking and planning',
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
        Decide how much to bring in from what your customers actually ordered,
        not a hunch. VOS is inventory planning software that keeps every customer
        account's orders, dated and filed, along with a live view of your stock.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Nothing to rip out or replace</span>
        <span class="hero-trust-dot"></span>
        <span>Set up in a day or two</span>
        <span class="hero-trust-dot"></span>
        <span>Android and iOS apps, plus web admin</span>
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
      <div class="stat-label">order history, so each customer's buying shows on its own</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">order capture, so late orders stay in your numbers</div>
    </div>
    <div>
      <div class="stat-number">Real-time</div>
      <div class="stat-label">stock visibility that keeps pace with orders</div>
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
      Many distributors work out the next buy from memory, old invoices and gut feel.
      Guess low and you stock out. Guess high and cash sits in product nobody
      ordered. Here's how it happens:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🎲</div>
        <h4 class="mb-8">"We bring in the same amount every week"</h4>
        <p class="text-muted" style="font-size:15px;">
          Busy week or slow week, the buy barely changes, even when your accounts'
          orders do. The items they want most are the first to run out.
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
          An after-hours voicemail ends up on a sticky note, and sticky notes get
          lost. Then your sales history says that demand never happened.
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
      <h2>Inventory planning software is only as good as the orders behind it</h2>
    </div>


    <!-- Feature 1: Usage history -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Account Order History</span>
          <h3>See what every account ordered, and when.</h3>
          <p class="mt-12 text-muted">
            Each order that comes through VOS is filed under the account
            that sent it and stamped with the day and hour. Instead of asking a
            rep what the steakhouse usually takes, you look it up. It's an inventory
            planning tool built on your own customers' orders.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A unique number on every order you receive</span></li>
            <li><span class="bullet-check">✓</span><span>Each account's full history kept in one place</span></li>
            <li><span class="bullet-check">✓</span><span>The person who placed each order, not just the account</span></li>
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
            and your stock view refreshes the moment each one lands. VOS does not
            predict next week for you. It shows what was ordered and what you have,
            so your buyer decides with facts.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Stock that moves with order activity</span></li>
            <li><span class="bullet-check">✓</span><span>Visibility across your full product catalog</span></li>
            <li><span class="bullet-check">✓</span><span>Your catalog updates itself when stock changes</span></li>
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
          <h3>Supply chain inventory planning software can't count the order that went to voicemail.</h3>
          <p class="mt-12 text-muted">
            For an independent distributor, the hole in the plan is often simple:
            orders left after hours that never reach the system. VOS takes orders
            around the clock, whether a chef orders after closing or before morning prep, so late
            demand lands in the same history as the rest.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Orders taken any hour, seven days a week</span></li>
            <li><span class="bullet-check">✓</span><span>Late orders filed with the rest of that account's history</span></li>
            <li><span class="bullet-check">✓</span><span>No message to type up the next morning</span></li>
            <li><span class="bullet-check">✓</span><span>Timestamps that show when late orders arrive</span></li>
          </ul>
          <a href="/distribution-resource-planning-software" class="feature-link">See how 24/7 orders feed distribution planning →</a>
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
            Every account buys from its own guide: what it orders,
            at the prices you set, on your SKUs. Nobody asks for "the usual" or "the good
            chicken". So past orders already match your catalog when you sit down to
            plan, with no cleanup first.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A separate guide for every account</span></li>
            <li><span class="bullet-check">✓</span><span>History that adds up by item, not by nickname</span></li>
            <li><span class="bullet-check">✓</span><span>Customers review and confirm before sending</span></li>
            <li><span class="bullet-check">✓</span><span>Your SKUs and prices on every line</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">See how account catalogs stay current →</a>
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
      <h2>More tools on both sides of the order.</h2>
      <p class="lead mt-16">An admin platform for your team and an app for your customers. Here's what comes with it.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📈</div>
        <h4>Account Management</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Add or edit customer accounts from one admin screen. A new account's
          orders are on file from the start.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>Order Guide Updates</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Change the items on an account's guide as your range changes, so
          what they order keeps matching what you stock.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔔</div>
        <h4>Order Confirmations</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers get a confirmation on their phone, so both sides agree on
          what was ordered.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Promos for Extra Stock</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Over-bought an item? Send your accounts a deal alert straight to
          their phones.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📉</div>
        <h4>Fewer Stockouts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Plan with real orders in view. You run out less often, and fewer
          orders need a late swap.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Voice Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers talk through the order and save 20 to 30 minutes each time.
          VOS turns it into a clean digital order for your team.
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
        <h4>Order Auto-Save</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An order in progress saves itself, so a chef called away can finish
          it later.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>No System Swap</h4>
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
        In 20 minutes, we'll walk through a single account's history, current
        stock and after-hours ordering, set up the way a distributor your size
        would use them.
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
      <h2>Ready for orders in two days or less</h2>
      <p class="lead mt-16">
        Three steps, no IT hires, and your ERP and spreadsheets stay put. Then your
        buyer works from real order data.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Your team sends order guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Hand us your current order guides, one per account. We load
          them into VOS and build each account for you.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Accounts begin placing orders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          They get the app and say what they need, at any hour. Most have
          an order in by the end of that day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Your buyer plans from the record</h4>
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
      <h2>What we hear from distributors and the kitchens they serve</h2>
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
        Enterprise planning suites forecast demand and set reorder points, but they
        need clean data and a team to run them. VOS keeps the dated, per-account
        order record that planning depends on. See how the options stack up for a
        small or mid-size distributor.
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
            <td>Order guides tailored to each account</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Live stock picture driven by orders</td>
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
            <td>Ordering app on your customers' phones</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Runs without a planning analyst</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>When a shortfall shows up</td>
            <td>Caught early</td>
            <td>Caught early</td>
            <td>Found while picking</td>
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
      <h2>Questions buyers ask about planning with VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Can I keep planning in my ERP or a spreadsheet?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          Yes. VOS works alongside your ERP, inventory planning platform or
          spreadsheet. Orders land by email (PDF, Excel or Word), EDI, API or
          QuickBooks, so nothing on your back end has to change.
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
          of stock for today, and a dated history of what each account bought for
          planning ahead. This page covers the planning side.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this inventory planning and optimization software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not in the forecasting sense. VOS does not predict demand, calculate reorder
          points or safety stock, or work out an ideal stock level for you. It gives
          you clean order history by account and a real-time view of stock tied to
          those orders. If you run a forecasting or optimization tool, that record
          is what it should be reading.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the planning numbers come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From real orders. Each order in VOS carries the account, who ordered and
          when, and the items on it all come from that customer's guide. This inventory
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
          No. Forecasting tools often want a year of clean sales records before they
          help. VOS doesn't need that. Seeing current stock helps from your first
          day, and order history grows with every new order, so it gets more useful
          each week.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I pull up the orders for just one account?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Every account's guide and history sit apart from the rest. A busy
          downtown restaurant is never mixed in with a quiet cafe
          across town, so you can see what each one really buys.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS built for a distributor my size?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. We designed VOS around independent distributors in the food trade, not large firms with
          their own IT staff and planning teams. There's no list price: ask for a
          demo and we'll quote for your accounts and your setup.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast can we get set up?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          A typical distributor is live within 48 hours, and there's no long
          rollout. You send over your guides, VOS turns each one into a ready
          account, and most accounts are ordering the same day they get the app. Your order
          history starts with that first order.
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
  <h2>Ready to plan next week without the guesswork?</h2>
  <p>Give your buyer a dated record of what each customer buys, not one person's memory.</p>

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
