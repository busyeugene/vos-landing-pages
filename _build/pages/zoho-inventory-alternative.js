/* Comparison page: Zoho Inventory, and Zoho Inventory with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 wave 2 (inventory systems; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Zoho Inventory,
 * never its replacement. Table = "Zoho Inventory + VoiceOrder Solutions" vs "Zoho Inventory on its own";
 * every Zoho strength (warehouses, batches and expiry, price lists, picking, invoices, the portal) is a
 * check mark in both columns. Separate products with no built-in link (FAQ 4, S1/S2).
 * Angle: Zoho's customer portal already has the kitchens logged in, and it is the one place they cannot
 * order. Zoho's own help: "Your customers cannot add items and place orders directly from the customer
 * portal" (they view sales orders, pay invoices, check deliveries). So the kitchen that paid online still
 * calls, and staff create the sales order. Zoho's route to customer ordering is a separate Zoho Commerce
 * store (typed, browsed; B2B price lists on its higher plans). The app adds the missing step.
 * ⚠ Scope "cannot order" to the PORTAL only: Zoho Commerce does take orders.
 * ⚠ Third-party automation services already connect phone voice agents and a smart speaker to Zoho
 *   Inventory sales orders: problem card 3 concedes it without naming them. Never "the only voice option".
 * ⚠ Zoho has food customers (seafood, a winery): never "not built for food".
 * ⚠ Zoho publishes plan prices (incl. a free plan, plans capped by orders per month): conceded in the cost
 *   FAQ, no figure, no comparison with ours. Zia (Ask Zia, AI agents) is staff-side: since the 2026-11-09
 *   review (T7) it has its own FAQ 5 ("works at your desk; the app sits with the chef").
 * ⚠ Their sales-order import takes CSV/TSV only, so the page never claims our emailed file imports.
 * ⚠ Inventory wave: concede every stock capability; canonical stock lines only.
 * Every Zoho claim is sourced and dated in _build/research/competitors/zoho-inventory.md.
 * Review 2026-11-09 (wave 2 FIXES2 T1-T7 + page items): voice connectors moved from FAQ 5 to problem card 3;
 *   FAQ 5 is now the Zia / AI-at-your-desk FAQ (T7 keeps it on this page); coexistence card 3 is the Zoho
 *   Commerce store; the price-list card became the T3 line in the guides row; table row 9 (online channel
 *   orders, a tie) swapped for the chef-review row; "line" -> "item", "your kitchens" -> restaurants.
 */
module.exports = {
  title: "Not a Zoho Inventory Alternative: Keep It, Add Voice Ordering",
  description: 'Keep Zoho Inventory for stock, price lists and its portal. Restaurants that call speak orders into an app and check each item. Not a Zoho Inventory alternative.',
  related: ["odoo-alternative","orderease-alternative","bluecart-alternative"],
  relatedHeading: "Other systems that stay put when kitchens order by voice",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Zoho Inventory Alternative: Orders Without The Call</h1>
      <p class="lead mt-16">
        Zoho's customer portal lets a restaurant pay a bill, but not start an order. Inside the VoiceOrder Solutions app, your customer's chef talks through what is short and reviews each item before it reaches you. Zoho Inventory carries on with your stock, prices and portal.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Zoho Inventory unchanged</span>
        <span class="hero-trust-dot"></span>
        <span>Orders, not just payments</span>
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
      <div class="stat-label">Saved for each kitchen order that skips a call to your desk</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Ordering in the app, nights and weekends included</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">To get most distributors up and running</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Zoho Inventory runs the stock, so five of nine rows are ties (Review 2026-11-09).
     The four that differ are about who places the order and who checks it.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Zoho Inventory, Plus One App</span>
      <h2>Zoho Inventory plus VoiceOrder Solutions.<br>Your stock and portal stay put.</h2>
      <p class="lead mt-16">
        Your warehouses, batch records and billing stay in Zoho whichever way you go. If a Zoho Inventory alternative is what you searched for, the real gap is narrower: the portal Zoho gives your customers is built for viewing and paying invoices, with no ordering inside it. There is no built-in tie between the two products, and each is bought separately.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Zoho Inventory + VoiceOrder Solutions</th>
            <th style="width:30%;">Zoho Inventory on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock across several warehouses, with transfers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens talk through what they need, in an app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Phoned in, or typed into a separate online store such as Zoho Commerce</td>
          </tr>
          <tr>
            <td>Batch numbers and expiry dates, traced for recalls</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens order on their own, not just view and pay</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not in its customer portal; online ordering means a separate store</td>
          </tr>
          <tr>
            <td>Price lists assigned to each customer</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Picklists, packing and shipping</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Restaurants that once called send numbered, timed orders</td>
            <td><span class="check-yes">✓</span></td>
            <td>Calls and voice messages have no order number until your team enters them</td>
          </tr>
          <tr>
            <td>Invoices, payments and an accounting sync</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>The chef reviews every item before it is sent</td>
            <td><span class="check-yes">✓</span></td>
            <td>If the order is phoned, only when your team reads it back</td>
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
      <span class="eyebrow">Where The Order Gets Stuck</span>
      <h2>Why some distributors search for a Zoho Inventory competitor</h2>
      <p class="lead mt-16">
        If you are weighing a Zoho Inventory alternative, look first at what a restaurant can do once it logs in to Zoho's portal: it can view its orders and pay its bills there, but has nowhere to put the next one, so that order still reaches you by phone. An order the app emails you is still keyed in by your team, though the chef checked every item before it was sent. Through EDI or the API it can go into Zoho directly if your account allows it, and we check that in the demo.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>Kitchens pay in the portal, then call to order</h4>
        <p class="text-muted mt-12">
          Zoho's help pages say it plainly: customers "cannot add items and place orders directly from the customer portal." They can view sales orders, pay invoices and check deliveries there. Tomorrow's order still arrives as a call, a text or a voicemail.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4>Calls turn into typing for your team</h4>
        <p class="text-muted mt-12">
          In Zoho Inventory, your team creates the sales orders for anything phoned in, at a desk or in its mobile app. A chef's 6 a.m. call only becomes an order in Zoho once somebody has time to key it in.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>Voice links to Zoho exist, but you build them</h4>
        <p class="text-muted mt-12">
          Automation services can hook a phone voice agent or a smart speaker up to Zoho Inventory and turn what was said into a Zoho sales order. You set up that connection and keep it working, and the caller has nothing on screen to correct.
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
      <span class="eyebrow">What It Brings</span>
      <h2>Not a Zoho Inventory alternative: the ordering step its portal leaves out</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Spoken by the chef, corrected on screen, then sent</h3>
          <p class="mt-12 text-muted">
            The chef taps Push to Speak and reads off what the kitchen is short on. The app sets it out as items from that restaurant's own guide; the chef fixes any that are wrong, then sends the order. There is no store to browse and no call to your office.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The chef looks over each item before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Available 24/7, including when your office is closed</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the chef's own iOS or Android phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled away mid-order? It is saved, ready to pick up again</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">See how kitchens send orders →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Push to Speak,<br>then the item-by-item<br>review screen
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Order Guides</span>
          <h3>Guides built from what each account buys in Zoho</h3>
          <p class="mt-12 text-muted">
            Send us a spreadsheet of each account's usual items, with that account's prices from Zoho. We load those items under your item codes. From then on, you keep each guide's prices current in our admin platform; whether they can update from Zoho Inventory is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each kitchen sees only the items it buys from you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You set the price and the items in each guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders placed after a price edit carry the new price</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No add-on to install to get started</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">How guides stay current →</a>
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
          <h3>How a finished order reaches your team</h3>
          <p class="mt-12 text-muted">
            You pick the format: an email with a PDF, Excel or Word attachment, or the order sent straight by EDI or through the API, if your Zoho Inventory account can take orders that way.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>To a rep's inbox or a shared orders address</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, invoicing and delivery carry on in Zoho</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders from the app get their own number and time</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">What a finished order holds →</a>
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
          <h3>Order activity shown next to your stock levels</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts and reorders are still done in Zoho</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for your order desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Zoho still tracks batches, expiry dates and warehouses</span>
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
      <h2>From a Zoho export to the first app order</h2>
      <p class="lead mt-16">
        It starts with a file you already have. We build the guides from it, and each restaurant can begin ordering in the app.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export your customers' items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The price list or item export Zoho already produces, saved as Excel or CSV, is usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We open each kitchen's account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load its guide and set the account up, and the kitchen installs the app. Most place a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders land in the format you picked</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one has been checked by the chef, item by item, and carries a number and a time.
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
      <h2>What changes when restaurants that call start ordering in the app</h2>
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
            "Our restaurants paid their bills online and still called in their orders. Now most of those orders reach us through the app."
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
            "Chefs kept asking why they could pay us online but not order. Now they have an answer, and it is on their phone."
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
      <span class="eyebrow">Both, Side By Side</span>
      <h2>Where Zoho Inventory's job ends and the app's begins</h2>
      <p class="lead mt-16">
        Nothing here is an alternative to Zoho Inventory. Stock, billing and the portal are still Zoho's to run; the app handles the single step none of those do, a kitchen sending its order.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Zoho Inventory keeps the records it holds today</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your customer records, stock, batch history and invoices live there. What we hold is every kitchen's order guide with its prices, kept current by you, along with the orders kitchens place in our app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💳</div>
        <h4>The portal carries on for invoices and payments</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Restaurants keep looking up orders and paying bills there, as they do now. The app is only where an order starts. A call to your office still gets no number from us; only app orders get one.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏷️</div>
        <h4>A Zoho Commerce store can stay for accounts that browse</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If you run one, keep it: some accounts like to search a catalog and type. The app is for the chef who finds it quicker to talk than to search.
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
      <h3 style="margin-bottom:10px;">Watch the step Zoho's portal skips: a chef's order sent from the app</h3>
      <p class="text-muted" style="font-size:16px;">
        Over a 20-minute demo, we read an order aloud into the app, edit one item on screen, and send it. Then we show the formats your desk could get it in, and what an API order would need on the Zoho side.
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
      <h2>Questions from teams that run Zoho Inventory</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Zoho Inventory alternative before kitchens can order on their own?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Your stock stays in Zoho, and its portal keeps handling bills and payments. The one thing the portal will not do is accept an order from the restaurant. Our app fills that gap: a chef tells it what is short, checks the items and sends them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Zoho Inventory?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For one job, yes: the order Zoho's portal cannot take, sent by a chef who would otherwise call, with every item checked first. We do not set out to be a Zoho Inventory replacement. Zoho Inventory does far more, from batches and warehouses to invoices, so the app goes beside it, not in its place.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Our kitchens already use the Zoho customer portal. Why not order there?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Because Zoho built the portal for looking things up: its help pages list viewing sales orders, paying invoices and checking deliveries, and say customers cannot order there. Zoho's answer for online ordering is a separate product, Zoho Commerce. Keep the portal either way; the app only adds the order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does someone here still have to enter app orders into Zoho Inventory?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It depends on the format. Zoho and VoiceOrder Solutions are separate companies, nothing ties our app to Zoho, and each supports only its own software. EDI and API orders can land in Zoho with no retyping, provided your Zoho account is able to take them in; we check that with you in the demo. When you choose email, the order is a file (PDF, Word or Excel) that the chef reviewed before sending, and someone on your side enters it from there rather than from a call or a message left overnight.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't Zoho's own AI already create orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Zoho's AI, Zia, answers questions about stock, orders and customers, and Zoho says AI agents can create orders through its tools. The voice links above are another route. Our app is a different thing: the chef voices the order, then checks each item from their own guide before it is sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does setting this up change anything in our Zoho account?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Getting started needs no Zoho login and installs nothing: we build from a file you pull out of Zoho, and your settings and pricing are left alone. If you later want orders to arrive by EDI or the API, the demo covers what that would take on your side.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon can we be live, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running in 24 to 48 hours. Zoho publishes its plan prices; ours is a quote for your business. Any Zoho Inventory alternative that takes over your stock means moving items, batches, warehouses and the accounting link in one go. Next to that move, adding one new way for restaurants to order is small.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Zoho Inventory details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From zoho.com, visited on 9 November 2026: Zoho Inventory's product, pricing, order management, AI (Zia) and mobile pages, Zoho's support articles about the portal and price lists, and Zoho Commerce's note on B2B selling. The details on voice tools are taken from automation services' own Zoho Inventory listings. If any detail is now wrong, write to us and we will correct this page.
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
  <h2>Keep Zoho's portal for bills, and give restaurants an app to order in</h2>
  <p>One demo: an order read aloud into the app, one item fixed, and the file that lands on your desk.</p>

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
        <li><a href="#comparison">Zoho Inventory + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/inventory-tracking-software">Inventory Tracking</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/inventory-control-software">Inventory Control</a></li>
        <li><a href="/distribution-workflow-software">Distribution Workflow</a></li>
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
