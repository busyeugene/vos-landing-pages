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
  description: "See low stock as customer orders land, so your buyer can restock before an account's order comes up short. Inventory replenishment software for distributors.",
  related: ["inventory-planning-software","inventory-tracking-software","inventory-automation-software"],
  relatedHeading: 'More ways to stay ahead of your stock',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "inventory replenishment software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Inventory Replenishment Software That Shows Low Stock.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is inventory replenishment software for food
        distributors. The chefs and store managers you supply speak their orders into the VOS ordering app, and stock for each item on the order drops right away. Your buyer spots low items sooner, so fewer shortages take your customers by surprise.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>No rip-and-replace</span>
        <span class="hero-trust-dot"></span>
        <span>Live in a day or two for most</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android + web admin</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (stock view updating as customer orders land) -->
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
      <div class="stat-number">Same Day</div>
      <div class="stat-label">for most accounts' first app order</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved on each order your accounts place</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Orders ship short when nobody sees low stock in time.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Some shortages start with a supplier that ran out. Many more happen because stock figures lagged behind demand, or the orders that should have warned
      you sat in voicemail until it was too late to reorder. Here's how it goes:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">😬</div>
        <h4 class="mb-8">"We found out it was gone when we went to pick it"</h4>
        <p class="text-muted" style="font-size:15px;">
          Yesterday's phone orders weren't keyed in yet, so the stock sheet said there was plenty. The first real sign was an empty shelf and an order you couldn't fill.
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
        <h4 class="mb-8">"The kitchen didn't know until the truck showed up"</h4>
        <p class="text-muted" style="font-size:15px;">
          By the time anyone saw the dip, the supplier's cutoff had passed. The kitchen found out when the truck arrived short, and your rep took the angry call.
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
            When an account submits an order in the app, your stock figures in VOS move with it.
            Your team sees which items are dropping as demand comes in. That leaves
            your buyer more room to work with the supplier's lead time, instead of
            finding out when an account gets less than it ordered.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Numbers shift with each order as it lands</span></li>
            <li><span class="bullet-check">✓</span><span>Every item you carry in view, not just the best sellers</span></li>
            <li><span class="bullet-check">✓</span><span>Your catalog adjusts automatically when stock moves</span></li>
            <li><span class="bullet-check">✓</span><span>Runs alongside your current inventory system</span></li>
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


    <!-- Feature 2: SECONDARY IN H3 (Tier B) – automated inventory replenishment software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">The Restock Call</span>
          <h3>Automated inventory replenishment software, minus the automatic reorder.</h3>
          <p class="mt-12 text-muted">
            The automatic part is the order data. Each order an account sends in the app arrives digitized and timestamped, with no voicemail to type up, and your stock
            numbers change with it. The reorder
            decision stays with your buyer. VOS does not draft or send purchase orders to your suppliers.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Each order is tagged with a unique order number and a timestamp</span></li>
            <li><span class="bullet-check">✓</span><span>Order history shows what each account really buys</span></li>
            <li><span class="bullet-check">✓</span><span>Your buyer reorders in the tools already in place</span></li>
            <li><span class="bullet-check">✓</span><span>Shows who placed every order in the app, and when</span></li>
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
          <h3>Your accounts restock from you on iPhone or Android.</h3>
          <p class="mt-12 text-muted">
            For your restaurant accounts, VOS is iPhone inventory replenishment software for the kitchen, and it runs the same on Android. They walk the cooler and say what they need. Their guide
            lists the products you sell them, priced by you and matched to your SKUs. They review the order before they submit, so it reaches you complete and shows up in your stock at once.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>One app for iPhone and Android</span></li>
            <li><span class="bullet-check">✓</span><span>Every account works from a guide you control</span></li>
            <li><span class="bullet-check">✓</span><span>Customers check every line before it goes</span></li>
            <li><span class="bullet-check">✓</span><span>A half-done order saves if someone gets called away</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">See how customers send you orders from the app →</a>
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
            Your accounts can order 24/7, so an order placed after close isn't stuck as a voicemail
            overnight. It lands with your team right away, in your chosen
            format, and your buyer sees that demand before placing the day's
            reorder.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Orders captured around the clock, weekends included</span></li>
            <li><span class="bullet-check">✓</span><span>Sent straight through, not held until 9am</span></li>
            <li><span class="bullet-check">✓</span><span>Email with a PDF, Excel or Word file</span></li>
            <li><span class="bullet-check">✓</span><span>Or EDI, API, QuickBooks or a platform link</span></li>
          </ul>
          <a href="/inventory-automation-software" class="feature-link">See which manual tasks your team can drop →</a>
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
      <span class="eyebrow">Also Built In</span>
      <h2>What else comes with VOS.</h2>
      <p class="lead mt-16">More tools for your team and the accounts you supply.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📊</div>
        <h4>Fewer Substitutions</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders reach you the minute they are sent, so fewer lines get swapped
          just before the truck goes out.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📝</div>
        <h4>Right Product on the Truck</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          For DSD distributors, clean, early orders help drivers head out with
          what each customer ordered.
        </p>
      </div>



      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>Phone Notifications</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts get confirmations and your promos by text or in-app push.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>More Time for Reps</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders arrive through the app instead of your reps' phones, which
          frees them up to sell.
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
        <h4>API and Platform Connections</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS plugs into distribution management platforms, ERPs and food
          service software through its API, adding to what you already run.
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
      <h3 style="margin-bottom:10px;">See how an order lands and stock changes with it</h3>
      <p class="text-muted" style="font-size:16px;">
        The walkthrough is free and takes 20 minutes. You'll see how voice orders arrive and
        how stock moves with each one.
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
      <h2>Most distributors take orders within 24-48 hours</h2>
      <p class="lead mt-16">
        No sales history to clean up first. Three steps, and low stock catches
        you off guard less often.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Share the guides your team uses now</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load every account's item list and set it up for you.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Get your accounts ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers download VOS for iOS or Android. Most are ordering the
          same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Restock on current numbers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders arrive in your usual format. Once your stock levels are connected, they update each time an app order lands. Your buyer checks the levels, decides what to restock and orders it the usual way.
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
      <h2>What restaurants and distributors say about VOS</h2>
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
            "We used to learn an item was low when an account's delivery went out
            without it. Now orders land as they're placed, and we see the dip sooner."
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
        Big replenishment suites forecast demand across whole store and warehouse
        networks. Most distributors your size need simpler inventory replenishment software: complete orders from their accounts and stock numbers that move with each order from the app. Here's how VOS compares.
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
            <td>Reorders stay a person's decision</td>
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
            <td>Voice orders that arrive in writing</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Takes orders 24/7</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Voicemail only</td>
          </tr>
          <tr>
            <td>A guide for each account, in an app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Forecasts demand and calculates reorder points</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>No analyst needed to run it</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>24-48 hrs for most</td>
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
      <h2>What buyers ask about restocking with VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we have to replace our inventory system or change how we buy?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. VOS is an add-on to the systems you run now. Through its API, it can also connect to an ERP or a distribution platform. Your buyer keeps the same suppliers and places purchase orders the same way. The difference is what they work from: customer orders that show up clean and on time, and stock that stays current as those orders land. On a demo, we can show how stock levels like yours would connect.
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
          Does VOS create purchase orders or reorder automatically?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. This inventory replenishment software never creates a purchase order or places an order with your suppliers.
          It gives your buyer current stock levels and timestamped customer orders.
          Your buyer decides what to reorder and how much, then places the order
          through your usual system.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS count as replenishment inventory optimization software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not in the math sense. VOS does not set reorder points or safety stock,
          work out order quantities or forecast demand, and it needs no data team.
          What it improves is the input those calculations depend on: complete
          orders that land early, so each restock decision rests on stock figures that keep up with orders, not ones that lag behind.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is there a phone app for our accounts?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. VOS runs on iOS and Android, so your customers can order right from the kitchen. They talk through the order, review it and submit it. Your team looks after accounts and guides in a web admin.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does our team know an item is running low?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Your buyer watches stock levels drop in VOS as orders from the app arrive, for every item in your catalog. There are no reorder points
          built in, so what counts as low, and when to reorder, is your buyer's call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does the catalog change when something sells out?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Your VOS catalog adjusts on its own whenever stock moves, so accounts run into fewer surprise shortages and late swaps, and your reps field fewer tough calls about them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does it take to get started?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup takes 24 to 48 hours for most distributors. We build each account from the guide you send, and customers usually have an order in that same day. No IT project needed.
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
  <p>Spot the dip while you can still restock, not when a customer calls.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No IT project</span>
    <span>✓ Your purchasing process stays the same</span>
    <span>✓ Keep the software you have</span>
    <span>✓ Ask for a quote</span>
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
        <li><a href="#features">Timestamped Orders</a></li>
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
