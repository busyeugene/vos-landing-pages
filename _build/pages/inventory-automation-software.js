/* Page 16 - PRIMARY: inventory automation software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * SECONDARY: restaurant inventory automation software (Tier A, H3; added from GSC data, pos 11 on main domain)
 *            inventory automation management software (Tier A, body; from Eugene's brief)
 * Separation: tracking = "what do I have right now?"; replenishment = "it's low, get more in fast";
 * automation = "what can I stop doing by hand?" (the busywork across the whole inventory workflow).
 * NOT claimed: POS-based depletion, barcode/RFID/sensor counting, unattended auto-ordering.
 * Sep 2026 review: distributor-first. No par gaps, suggested reorders or POS depletion claimed.
 */
module.exports = {
  title: 'Inventory Automation Software for Food Distributors | VOS',
  description: 'Cut order busywork. With this inventory automation software, customers order by voice 24/7, and your stock view and catalog update as orders land.',
  related: ["inventory-tracking-software","inventory-replenishment-software","order-taking-software"],
  relatedHeading: 'Keep stock and orders moving',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "inventory automation software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Inventory Automation Software That Cuts Order Calls.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is inventory automation software for small and midsize
        food distributors. Your customers speak orders into the app at any hour and
        confirm each one before sending, so nobody writes down a phone order. You
        receive each order in your format,
        and stock and the catalog update with it.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>No systems to replace</span>
        <span class="hero-trust-dot"></span>
        <span>Most live in 24-48 hours</span>
        <span class="hero-trust-dot"></span>
        <span>Apps for iPhone and Android</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (incoming orders in your format, live stock view, catalog updates) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Incoming orders, stock<br>levels, and catalog updates<br>on one screen
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
      <div class="stat-label">ordering, even after hours</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">first order for most customers</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved per voice order compared with calling</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Hand-typed orders and stale stock sheets eat up your team's day.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Answering order calls, replaying voicemails, typing orders into your system, adjusting the stock list after each order. A lot of it doesn't need a person. Here's where
      those hours go:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧮</div>
        <h4 class="mb-8">"The stock sheet is always behind"</h4>
        <p class="text-muted" style="font-size:15px;">
          Orders come in all morning, but the sheet only catches up once someone tallies them. A stockout nobody saw coming turns into a call to the customer.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4 class="mb-8">"Every order gets keyed in by hand"</h4>
        <p class="text-muted" style="font-size:15px;">
          Calls and voicemails all get written down and typed into your system. Each one is a chance for a typo, and a disputed amount comes down to memory.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🗃️</div>
        <h4 class="mb-8">"Late orders wait in voicemail"</h4>
        <p class="text-muted" style="font-size:15px;">
          Customers call after their kitchens close for the night and leave messages. Someone plays them back
          in the morning, and some orders never make it in.
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
      <span class="eyebrow">Busywork Out, Judgment In</span>
      <h2>Inventory automation software that removes manual tasks, not your judgment</h2>
    </div>


    <!-- Feature 1: stock that moves with orders -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Self-Updating Stock</span>
          <h3>Stock that moves when orders do.</h3>
          <p class="mt-12 text-muted">
            The quantity left of each item drops as soon as a customer sends in an order through the app. At close, nobody has to tally app orders against a stock sheet.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Inventory adjusts the second a customer submits in the app</span></li>
            <li><span class="bullet-check">✓</span><span>Less end-of-day tallying for app orders</span></li>
            <li><span class="bullet-check">✓</span><span>Reps spend less time checking what's left</span></li>
            <li><span class="bullet-check">✓</span><span>Sits beside the tools your warehouse uses today</span></li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">See inventory tracking →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Stock levels updating<br>as customer orders<br>come in
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 (Tier A) (distributor side, Sep 2026 review) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Catalog Updates</span>
          <h3>A catalog that edits itself as stock moves.</h3>
          <p class="mt-12 text-muted">
            When app orders pull stock down, your catalog in VOS updates with it. Nobody edits product lists by hand each time an item runs low or sells out.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Catalog follows stock levels on its own</span></li>
            <li><span class="bullet-check">✓</span><span>No hand edits when an item is gone</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer shortages that surprise customers on delivery day</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer substitution calls to make</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Manage each account's catalog and order guide →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Catalog item changing<br>as its stock level<br>drops
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: catalog + supplier formats (secondary in body) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Order Hand-Off</span>
          <h3>Orders land in your format, ready to process.</h3>
          <p class="mt-12 text-muted">
            Every account works from its own guide: the products it usually orders,
            priced your way and matched to your SKUs. Once the customer confirms an order, VOS emails
            it to your team as a PDF, Excel or Word attachment, or sends it straight in through EDI, API, QuickBooks or your own platform. Over one of those direct links, nobody types the order into your system.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Order guides set up account by account</span></li>
            <li><span class="bullet-check">✓</span><span>No SKU lookups or price checks by hand</span></li>
            <li><span class="bullet-check">✓</span><span>Sent the way your team already works</span></li>
            <li><span class="bullet-check">✓</span><span>Confirmed by the customer before it's sent</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">Explore order taking for distributors →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A confirmed customer order<br>arriving as a PDF<br>in your inbox
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: records -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Records That Keep Themselves</span>
          <h3>The paperwork files itself.</h3>
          <p class="mt-12 text-muted">
            Each order is numbered and stamped with the day and minute it
            goes in, and the customer receives a confirmation. Nobody
            files a copy or types up notes from a call. If a quantity is ever
            disputed, the record shows exactly what was sent.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Every past app order kept on file</span></li>
            <li><span class="bullet-check">✓</span><span>Who ordered what, and when, on record</span></li>
            <li><span class="bullet-check">✓</span><span>Customers hear back by text or in the app</span></li>
            <li><span class="bullet-check">✓</span><span>Easy to look up when a customer questions an order</span></li>
          </ul>
          <a href="/inventory-control-software" class="feature-link">See where order errors cost you margin →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order history with<br>order numbers and<br>timestamps
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
      <h2>More work VOS handles for your team.</h2>
      <p class="lead mt-16">Extras for your office and for the customers ordering in the app.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📊</div>
        <h4>Freed-Up Sales Reps</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your reps can sell instead of taking orders over the phone.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔔</div>
        <h4>Promo Alerts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Tell customers about specials through the app or by text, not a
          round of phone calls.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📝</div>
        <h4>Order Review by the Customer</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers check each order before it goes out, so fewer wrong
          quantities get through to you.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Voice Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers can just say what they need into the app instead of dialing your office.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <h4>Unfinished Orders Saved</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If a customer is interrupted halfway through, VOS saves the order so they can pick it up again.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔄</div>
        <h4>Full-Catalog Coverage</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Stock and catalog updates cover every item you carry, from top sellers to slow movers.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Web Admin for Your Team</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Keep every account and its order guide up to date yourself, all in
          one place on the web.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>Always-On Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts can put an order in from their phones at any hour, even after
          you close. It reaches your queue the moment it's sent.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>Platform and ERP Connections</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          API-ready, so VOS can link to your distribution platform or ERP and
          add to what it already does.
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
      <h3 style="margin-bottom:10px;">See orders arrive while your phone stays quiet</h3>
      <p class="text-muted" style="font-size:16px;">
        A free demo takes 20 minutes. Watch a sample order come through, and
        see how stock and the catalog follow it.
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
        Nothing for your team to install or code. Your part is sharing what each account buys. After that, VOS does the busywork.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send the guides your accounts use</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We upload them for you. Your team doesn't have to build a
          thing.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Let us set up each account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers get the app, and most are ordering the
          same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Let it run</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          New orders arrive formatted the way you picked, and stock keeps
          pace. You manage it all from one place.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS admin platform showing customer accounts, order guides, and order history
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
      <h2>What distributors and the kitchens they supply tell us</h2>
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
            "Mornings at our order desk meant a stack of voicemails. Now whatever
            came in overnight is waiting for us, in the format we use."
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
            "I thought automation meant losing control of our catalog. It doesn't.
            We still set every item and price, and VOS keeps it in step with stock."
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
     Honest ✗ row for VOS on POS-based depletion (assumption Q13).
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Automation for your order desk.<br>Not a warehouse overhaul.</h2>
      <p class="lead mt-16">
        Warehouse suites start in the stockroom, often with scanners and months of setup. VOS is inventory automation software that starts at the order instead, with none of that. Compare
        them row by row.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Warehouse Automation Suite</th>
            <th style="width:22%;">Spreadsheet + Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock adjusts as orders reach the system</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Catalog updates with stock</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Orders taken outside business hours</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Voicemail</td>
          </tr>
          <tr>
            <td>Customer confirms each order in the app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Verbal only</td>
          </tr>
          <tr>
            <td>Orders delivered the way you process them</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Voice orders from customers, no call needed</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Barcode scanning and bin locations</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Hardware to buy and install</td>
            <td>None</td>
            <td>Scanners, often more</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Keeping order records current</td>
            <td>Automatic</td>
            <td>Automatic</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>A day or two for most</td>
            <td>Often months</td>
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
     Q3: never auto-sends. Q4: no POS depletion (assumption Q13), stated outright.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>What to know about inventory automation management software</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Does VOS work with our ERP and accounting software?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          It's built to, and you don't replace anything. Your ERP, accounting, and warehouse tools stay put. VOS sits in front of them and hands off each order in the form your team works with: by email, through EDI or API, into QuickBooks, or over a direct platform link.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does inventory automation software actually automate?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For a distributor, the manual work around orders and stock: taking orders
          day and night, handing them over already checked by the customer,
          updating the stock view as each one comes in, keeping the catalog in line
          with current stock, and logging every app order with a number and time stamp.
          Your team still makes every decision.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS reorder stock or send orders on its own?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS does not send purchase orders to your own suppliers when stock
          drops. It never orders on a customer's behalf, either. Each account reviews and confirms its own order before it reaches you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS scan barcodes or manage the warehouse?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS is not built to run a warehouse. It does not scan barcodes, assign bin locations, or plan pick paths.
          Its stock view is tied to what customers order, and it runs beside whatever you use in the warehouse today. Ask for a demo to see how the stock records you keep now would tie in.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS restaurant inventory automation software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not the kind that counts a kitchen's stock or reorders by itself. VOS is made for food distributors. Their restaurant customers get VOS through them and place orders by voice from a guide set up for their kitchen, so a restaurant looking for VOS should ask its distributor.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens to orders placed after hours?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They come in like any other order. VOS never closes, so an order
          placed at 11pm, after the kitchen closes, is in your queue right away, with no
          voicemail for anyone to play back.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is automation worth it for a smaller distributor?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. This inventory automation software saves 20-30 minutes an order over phone ordering, and a small team feels that time the
          most. VOS is designed for independent distributors, not
          enterprises with their own IT department. You get a quote up front, so
          you see the cost before you commit.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast can our team be up and running?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Expect 24 to 48 hours for most distributors. Send over the guides you work from today, and we load them and get your customers set up to order. There's no IT project, and the demo covers linking the inventory figures you already keep.
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
  <h2>Want to stop writing up phone orders and updating stock by hand?</h2>
  <p>Let VOS take order write-ups and order-by-order stock updates off your team, while you keep control of the catalog and each customer still signs off on its own order.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ We set up your customer accounts</span>
    <span>✓ Your systems stay exactly as they are</span>
    <span>✓ No hardware to install</span>
    <span>✓ Ask us for a quote</span>
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
        <li><a href="#features">Self-Updating Stock</a></li>
        <li><a href="#features">Auto-Updating Catalog</a></li>
        <li><a href="#features">Orders in Your Format</a></li>
        <li><a href="#features">Automatic Records</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/inventory-control-software">Inventory Control</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Warehouse Automation</a></li>
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
