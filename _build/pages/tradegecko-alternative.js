/* Comparison page: TradeGecko (later QuickBooks Commerce), which no longer exists. `compare` block order.
 * Batch 2 wave 5 (Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * FRAME (Eugene, 2026-11-09): unlike every other compare page, this is an HONEST REPLACEMENT page,
 * written gently ("be easy with it"). TradeGecko was bought by Intuit (Aug 2020), renamed QuickBooks
 * Commerce, stopped taking new customers on 9 June 2021, and was retired in stages (10 June 2022 for the
 * standalone product, everyone outside the US; the last version after 31 August 2023).
 * So there is no "Keep TradeGecko" and no "Not A TradeGecko Alternative". VoiceOrder Solutions IS a
 * TradeGecko alternative, but ONLY for the part it replaces: the B2B store restaurants ordered in. It is
 * not an inventory or order-management system and replaces none of TradeGecko's stock, purchasing,
 * warehouses, manufacturing, payments or accounting; the page says the distributor needs (and most
 * likely already moved to) a stock system for that, never naming it, and that we sit beside it.
 * Table = "VoiceOrder Solutions" vs "TradeGecko's B2B store, as it ran" (not "+ / on its own": there is
 * nothing left to keep).
 * Angle (TradeGecko-specific): the B2B store lived INSIDE TradeGecko, so when TradeGecko closed, the
 * stock records and the restaurants' way of ordering had to move together. Our app is a separate
 * product beside whatever stock system you run now. And it is an app the chef SPEAKS into (iOS and
 * Android), where TradeGecko gave customers a web store and kept its own mobile app (iPhone/iPad) for
 * the distributor's team and reps.
 * Distinct from: inFlow ("No more phone orders" promise), Acumatica (kitchens skip the portal), Unleashed
 * (reps sell, chefs order), NetSuite (another module), Fishbowl (the first typing), Odoo (what is short).
 * ⚠ TradeGecko's store took orders at any hour, held per-buyer price lists, and let the buyer review the
 *   cart: ties, never VoiceOrder Solutions wins.
 * ⚠ Store orders became TradeGecko sales orders with nothing retyped: conceded (table row 6, FAQ 4). Ours
 *   are typed by the desk on the email route; EDI/API only if the current system takes it (demo decides).
 * ⚠ Card payments, branding, promo codes, invoices in the store: conceded; we never claim stock shown to
 *   restaurants, order status or order history (KB unconfirmed).
 * ⚠ TradeGecko published prices: no figure on the page, no pricing row. Never repeat its homepage stats.
 * ⚠ tradegecko.com now redirects to an unrelated domain: never link it.
 * ⚠ template.js fails "switch from TradeGecko": the page says "when Intuit ended QuickBooks Commerce",
 *   "if you moved after it closed". Never "left", "abandoned", "stranded".
 * Every claim is sourced and dated in _build/research/competitors/tradegecko.md.
 * Review 2026-11-09 (wave 4 FIXES4): staged retirement timeline; unfair call-in row replaced by
 * "ordering survives a change of stock system"; problem card 2 is today's pain (orders back on the
 * phone); shop-vs-say kept in FAQ 5 only (inFlow owns it); inventory row cut to the canonical stock
 * sentences (no "real-time visibility" on a page that says we track no stock); prices-in-our-admin
 * said once plainly (guide row) + records in FAQ 4; placeholders carry no backstory; CTAs "see how";
 * cost FAQ has onboarding and no comparison with a dead product.
 */
module.exports = {
  title: "TradeGecko Alternative: Restaurants Order by Voice in an App",
  description: "A TradeGecko alternative for the ordering part: restaurants say and check each order in our app, beside the stock system you moved to after TradeGecko.",
  related: ["unleashed-software-alternative","inflow-inventory-alternative","zoho-inventory-alternative"],
  relatedHeading: "Stock systems a voice order can sit beside",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>A TradeGecko Alternative Where Chefs Order Aloud</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions lets restaurants reach you with orders now that TradeGecko's B2B store has closed. In the app, each chef says aloud what is running short, looks over every item, then sends it to you. Stock, purchasing and accounting stay in the system you moved them to.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Spoken, then checked by the chef</span>
        <span class="hero-trust-dot"></span>
        <span>Sits beside your inventory software</span>
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
      <div class="stat-label">Saved per order, compared with taking it by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Open for restaurant orders, nights and weekends too</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Until most distributors are set up and receiving orders</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Two value columns: our app, and TradeGecko's B2B store as it ran before it closed. Three ties
     (per-account prices, after hours, a check before sending), three rows to the store (stock in one
     system, orders landing with nothing retyped, card payments), three to the app (speaking the order,
     an app the chef installs, ordering that survives a change of stock system).
     Review 2026-11-09: the old call-in row ("Its calls were still taken and keyed in") was unfair (the
     store was sold to replace phone orders) and the 5th copy of the call-in row; the store's "repeat
     previous orders" is conceded in row 2.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Store Then, App Now</span>
      <h2>VoiceOrder Solutions and the TradeGecko store.<br>One ordering job, done by voice.</h2>
      <p class="lead mt-16">
        VoiceOrder Solutions picks up one of the TradeGecko store's jobs again: letting restaurants send orders without calling. As a TradeGecko alternative, we cover that ordering alone: the inventory, purchasing and payments TradeGecko kept under one roof now belong to the software where you track stock.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">VoiceOrder Solutions</th>
            <th style="width:30%;">TradeGecko's B2B store, as it ran</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Each restaurant orders its own items at its own prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>The chef places the order by voice</td>
            <td><span class="check-yes">✓</span></td>
            <td>Searched or repeated a past order, then checked out</td>
          </tr>
          <tr>
            <td>Stock, buying and warehouses inside one product</td>
            <td>Kept in the software you moved to</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders can come in after hours and on weekends</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An ordering app the chef installs on iOS or Android</td>
            <td><span class="check-yes">✓</span></td>
            <td>A web store; its iPhone app was for your own team</td>
          </tr>
          <tr>
            <td>Orders loaded into stock records with nothing retyped</td>
            <td>Via EDI or our API if your system takes them; by email, your team keys them in</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>The customer checks every item before sending</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Card payments taken at checkout</td>
            <td>Billing stays with the way you invoice today</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Restaurants keep their way of ordering if you change stock systems</td>
            <td><span class="check-yes">✓</span></td>
            <td>Closed along with TradeGecko</td>
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
      <span class="eyebrow">Since The Store Closed</span>
      <h2>Looking for a TradeGecko replacement for customer ordering?</h2>
      <p class="lead mt-16">
        TradeGecko, renamed QuickBooks Commerce, closed for good after August 2023, so a TradeGecko competitor today can only be a replacement. If you have since moved your stock to another system, the piece that may still be missing is an easy way for restaurants to send you orders. Orders that reach you by email are still typed up by your desk, but from a list the restaurant already checked. Sent over EDI or our API, they can load straight in if your system accepts them, and the demo answers that for your setup.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📦</div>
        <h4>The store and the stock records went together</h4>
        <p class="text-muted mt-12">
          TradeGecko's B2B eCommerce store was part of TradeGecko itself. When TradeGecko was retired, the store went with your stock records, so new inventory software also meant a new ordering routine for every restaurant you serve.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Without a store, orders fall back on the phone</h4>
        <p class="text-muted mt-12">
          If your new system has no store, or your restaurants did not take to it, those orders come back as calls, texts and voicemails for your desk to key in. Sent from the app, each one arrives already looked over by the chef, with a number and the time attached.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔁</div>
        <h4>Each restaurant's own list closed with the store</h4>
        <p class="text-muted mt-12">
          In the store, each restaurant saw its usual products at that account's prices, and could copy a previous order. When the chef calls instead, that list is nowhere in view.
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
      <h2>What restaurants get in place of the old TradeGecko store</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Said aloud by the chef, then looked over and sent</h3>
          <p class="mt-12 text-muted">
            The chef taps Push to Speak and names the items the kitchen is short of. Our app matches each one to that restaurant's guide and shows the list. The chef changes anything that came out wrong, then sends it. 
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders can be sent at any hour, weekends included</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A half-done order waits if the chef is pulled away mid-list</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the chef's own iPhone or Android phone</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How order capture works →</a>
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
          <h3>Every restaurant gets its own items, at the prices you set</h3>
          <p class="mt-12 text-muted">
            TradeGecko let you give each customer a price list of its own. We do the same job with an order guide per account: the items that restaurant actually orders, at your prices, under your item codes. You update each account's guide and prices in our admin platform. Whether price changes can come over from your stock software in bulk is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Built from a spreadsheet of what each account buys</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Accounts, guides and order history in one admin platform</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Promos and confirmations reach accounts by notification and text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Restaurants order from their usual items, not your whole range</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">More on per-account guides →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Admin platform with<br>one restaurant's<br>order guide
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Delivery Formats</span>
          <h3>Orders arrive in a form your current system can use</h3>
          <p class="mt-12 text-muted">
            A TradeGecko store order became a TradeGecko sales order by itself. Ours reach you over EDI, through our API, in QuickBooks, or by email as a PDF, Excel or Word file for your team to key in. Whether your current setup can load those electronic orders as they arrive is something a demo can confirm.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Emailed to whoever takes orders: a rep, the desk, or both</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>In QuickBooks, the order is entered in your books; ask in the demo whether it carries on into stock</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each order from the app comes numbered, with the time it was sent</span>
            </li>
          </ul>
          <a href="/b2b-portal-software" class="feature-link">Self-service ordering without a portal →</a>
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
          <h3>Orders in view, with stock left in your software</h3>
          <p class="mt-12 text-muted">
            Each order restaurants send through the app is kept on our admin screens, so your team can see what has been asked for. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Whether stock levels can show in the app is something to ask in the demo</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Purchasing and warehouse work carry on in your own software</span>
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
      <h2>Three steps before the first spoken order</h2>
      <p class="lead mt-16">
        Setting up needs no login to your systems. Delivery by EDI or the API can come later, and the demo covers what your side would need for it.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export your accounts and their prices</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Share what each restaurant buys and at what price, for example as an export from your system.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We load a guide for each restaurant</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We build a guide for every account under your SKUs and open it, ready for the chef's first order.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Restaurants begin ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders arrive checked by the chef, numbered, timed and in the format you picked.
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
      <h2>How restaurants order now</h2>
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
            "Our restaurants say the order and check it on their phone, and it reaches our desk as a list we can work from."
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
            "The app is separate from our stock software, so changing one would not mean changing how our restaurants order."
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
     SECTION 11: WHAT GOES WHERE
     ============================================================ -->
<section class="section-pad bg-light" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 620px; margin: 0 auto;">
      <span class="eyebrow">What Goes Where</span>
      <h2>What this TradeGecko alternative takes over, and what it leaves in place</h2>
      <p class="lead mt-16">
        Whichever TradeGecko alternative now runs your stock keeps that job, along with purchasing and billing. Ours begins when a chef opens the app and ends when you receive the order.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Inventory and buying stay where they are</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          TradeGecko tracked stock across warehouses and raised the purchase orders for your suppliers. We do neither, so that work stays in the inventory software you rely on now.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💳</div>
        <h4>Billing stays the way you run it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          TradeGecko's store took card payments and showed customers their invoices. Our app has no checkout and takes no payment: you invoice and collect as you do today.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>The next system change leaves ordering alone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Our app is not tied to any inventory product. If you change that software again, restaurants keep ordering in the same app from the same guides; how their orders get into the new system is something we check with you in a demo.
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
      <h3 style="margin-bottom:10px;">See how a kitchen's spoken list reaches you, no web store needed</h3>
      <p class="text-muted" style="font-size:16px;">
        In the demo we order four or five items by voice, correct one, send them off and open what a distributor's desk receives. Then we go over how that order could reach your records.
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
      <h2>Questions from former TradeGecko users</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Does VoiceOrder Solutions work as a TradeGecko alternative?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          As an alternative to TradeGecko's store, yes: your restaurants get an app to say each order in, check it and send it. For stock, purchasing, warehouses and accounting, no: those are jobs for inventory software, and ours works beside the one you run.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Would VoiceOrder Solutions be better than TradeGecko?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only at one job: letting a chef read out the order, then confirm each item on a phone. TradeGecko did far more, from stock and purchasing to warehouses, and its store orders went straight into its own records.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happened to TradeGecko?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Intuit bought TradeGecko in 2020 and renamed it QuickBooks Commerce. It stopped taking new customers in June 2021 and was retired in stages: many users lost it in June 2022, and the last version closed after August 31, 2023. If you are looking for a TradeGecko alternative now, the stock side may already be settled.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will orders go straight into our stock system?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It depends on how each order is sent. VoiceOrder Solutions is a separate product, not part of any stock system. If yours takes orders over EDI or an API, an order can load with no retyping; the demo shows whether it does. By email, it arrives as a file listing every item the chef approved. Your team still enters it, but there is no call to take, write down and read back. Customers, stock and invoices stay on record where they are now; we hold each account's order guide with its prices, plus the orders sent through the app. Phoned orders get no number from us, while every order sent from the app is numbered and timed.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can restaurants still browse a catalog and pay by card?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not in our app. It has no catalog to browse, no checkout and no card payment. If browsing and paying online matter to your customers, an online store does that better, and if your current stock software has one, keep it. Our app is for the restaurant that wants to say what it needs and be done.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can the app mishear an item?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It can happen: the app turns speech into items from that account's list, and it may pick the wrong one. The chef sees the full list before sending and can swap or delete anything. If a mistake still reaches you, you sort it out the way you handle any order mix-up today.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How much is it, and how fast can we start?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We quote each business and list no prices online, so ask us on the demo call. To get started, you send us each account's usual items, often as a spreadsheet; we load them in and set up each account. Your restaurants download the app, and most send a first order the same day. Most distributors are up and running in 24 to 48 hours.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the TradeGecko details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From TradeGecko's own pages as saved by the Internet Archive in June 2020 (home, B2B store, mobile sales app and pricing), and from Intuit's notices about QuickBooks Commerce ending, all reviewed on 9 November 2026. Spot something wrong? Write to us and we will fix it.
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
  <h2>Replace the store TradeGecko ran with an app restaurants order in by voice</h2>
  <p>Give us twenty minutes and see one spoken order go from a chef's phone to a distributor's inbox, and what a desk would receive.</p>

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
        <li><a href="#comparison">VoiceOrder Solutions vs TradeGecko</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/wholesale-ordering-software">Wholesale Ordering</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/dsd-sales-software">DSD Sales</a></li>
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
