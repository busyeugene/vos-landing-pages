/* Comparison page: Fishbowl, and Fishbowl with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 wave 2 (inventory systems; Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Fishbowl,
 * never its replacement. Table = "Fishbowl + VoiceOrder Solutions" vs "Fishbowl on its own"; every
 * Fishbowl strength is a tick in both columns. Separate products with no built-in link (FAQ 5);
 * whether a Fishbowl setup takes our EDI or API orders in directly is a demo question, never a claim.
 * Naming: "Fishbowl" is the company; "Fishbowl Inventory" is both the keyword and the name of its cloud
 * product, so the copy writes "Fishbowl" and keeps "Fishbowl Inventory" for the keyword slots.
 * Angle, distinct from the ERP pages (NetSuite: no extra module; Syspro: orders in writing for its AI;
 * Acumatica: kitchens skipping the portal; Business Central: the check before sending): Fishbowl's own
 * picture of a distributor is RETAIL. Its distributor persona's morning opens with "EDI orders from two
 * retailers", its automatic order intake comes from online stores, retailer EDI and B2B portals, and its
 * promise is "Nothing typed twice" between the shelf and QuickBooks. A restaurant sends none of those:
 * the chef calls, and somebody types the order once. VoiceOrder Solutions is built for that restaurant
 * order. H1 "For Restaurant Orders".
 * ⚠ Fishbowl HAS customer ordering: a "B2B portal" add-on on most plans, plus partner portals and rep
 *   apps (SalesIn, LilyPad Vortex, Zoey, OrderTaker) that send sales orders straight in. FAQ 3 concedes.
 * ⚠ Fishbowl HAS AI (Coralie drafts POs, transfers, receipts; AI Insights) and an API, plus an MCP
 *   interface in early access. No voice ordering tool for Fishbowl was found; FAQ 4 concedes that other
 *   tools can reach Fishbowl, never "the only voice option".
 * ⚠ QUICKBOOKS: one of OUR delivery formats, but on a Fishbowl setup the sales order starts in Fishbowl,
 *   and whether a QuickBooks order would reach Fishbowl depends on sync settings ("bi-directional sync"
 *   is "Coming soon" in its plan table). FAQ 6 says so and leaves it to the demo. The canonical bullet
 *   "Over EDI, the API or QuickBooks, nobody on your team retypes it" is deliberately NOT used here.
 * ⚠ Fishbowl publishes starting prices per plan; VOS does not. Conceded in the cost FAQ only, no figures,
 *   no table row. Its onboarding (an implementation package, a 6-8 week training certification) is never
 *   set against our 24-48 hours as a knock.
 * ⚠ Never repeat Fishbowl's case figures ("6,000+", "50 hrs a week off order entry", stockout %s).
 * ⚠ claims.js bans Xero and Shopify: write "online stores", "your accounting".
 * Every claim is sourced and dated in _build/research/competitors/fishbowl.md.
 *
 * Review 2026-11-09 (wave-2 fixes, FIXES2.md T1-T7 + this page's section): RE-ANGLED off "channels"
 * and off "in writing" (which collided with Syspro). The angle now: Fishbowl promises "Nothing typed
 * twice", and the one typing it leaves is the FIRST, the phoned order keyed in by hand; and on a
 * Fishbowl setup the sales order must start in Fishbowl (the QuickBooks invoice follows it), so that
 * order has to be keyed into Fishbowl itself. H1 "Fix The Phone Order". Problem card 3 (portal)
 * replaced by the start-in-Fishbowl point; the portal stays in FAQ 3. FAQ 4 (other voice/AI tools) is
 * now "Our retail chains send EDI..."; the API/AI concession folded into FAQ 5. QuickBooks FAQ quotes
 * Fishbowl's own page (sales orders do not pass automatically). Table: pricing-rules tie swapped for
 * a desk-works-from-a-checked-list row. Never name third-party portals on the page.
 */
module.exports = {
  title: "Not a Fishbowl Inventory Alternative: Add Voice Ordering",
  description: 'Fishbowl ends the retyping after an order. Restaurants that still call can voice each order in an app and check it. Not a Fishbowl Inventory alternative.',
  related: ["netsuite-alternative","odoo-alternative","necs-entree-alternative"],
  relatedHeading: "More stock and order systems that stay in place",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Fishbowl Inventory Alternative: Fix The Phone Order</h1>
      <p class="lead mt-16">
        Give the restaurants that still call you an app to order in by voice: each chef speaks the items, checks the list and sends it. Fishbowl already ends the retyping once an order is in. This app is for the call before that, while Fishbowl keeps stock, lots, picking and invoicing.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare Side By Side</a>
      </div>

      <div class="hero-trust">
        <span>Your stock remains in Fishbowl</span>
        <span class="hero-trust-dot"></span>
        <span>Chef checks each item</span>
        <span class="hero-trust-dot"></span>
        <span>Fewer orders typed from calls</span>
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
      <div class="stat-label">Saved on each order a chef sends instead of calling</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Restaurant ordering, long after your desk closes</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors, with Fishbowl left as it is</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Fishbowl is the stock system and takes six of nine rows in both columns. The three rows that
     differ are about the restaurant that used to call (rows 2, 5 and 8).
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Fishbowl Stays, The Call Changes</span>
      <h2>Fishbowl plus VoiceOrder Solutions.<br>The warehouse stays with Fishbowl.</h2>
      <p class="lead mt-16">
        A restaurant that calls still has its order keyed in by hand, and that typing is the step VoiceOrder Solutions changes. After that, Fishbowl moves the order to the shelf and the truck, then posts its invoice to QuickBooks, with no second round of typing. This is not a Fishbowl Inventory alternative: the two products run separately, and neither is wired into the other.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Fishbowl + VoiceOrder Solutions</th>
            <th style="width:30%;">Fishbowl on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Live stock counts at every location, scanned on a phone</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A kitchen that used to call now sends a numbered, timed order</td>
            <td><span class="check-yes">✓</span></td>
            <td>Numbered only after someone enters it</td>
          </tr>
          <tr>
            <td>Lot and expiration tracking for perishable stock</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders pulled in from online stores and retailer EDI</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>At 11pm a chef who would phone can still speak the items and check them</td>
            <td><span class="check-yes">✓</span></td>
            <td>A voicemail for your team to enter in the morning</td>
          </tr>
          <tr>
            <td>Sales orders through picking, packing and shipping</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A customer ordering portal, as an add-on or partner app</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Your desk works from a list the chef checked, not a call</td>
            <td><span class="check-yes">✓</span></td>
            <td>Notes taken while the chef is on the phone</td>
          </tr>
          <tr>
            <td>Shipments, receipts and adjustments posted to QuickBooks</td>
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
      <span class="eyebrow">Why People Search</span>
      <h2>What makes owners look up a Fishbowl Inventory competitor</h2>
      <p class="lead mt-16">
        Fishbowl Inventory already handles an order well once it arrives: stock moves and QuickBooks gets the invoice, so a Fishbowl Inventory alternative would not touch the restaurant call ahead of it. With our app, an emailed list is still keyed in by your people, but the chef has checked every item on it; orders over EDI or the API might need no typing at all, which the demo will settle.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🏬</div>
        <h4>Fishbowl pictures a retail morning</h4>
        <p class="text-muted mt-12">
          On Fishbowl's pricing page, its sample distributor's day starts with EDI orders from two retailers, compliance rules attached. A restaurant kitchen sends you no EDI. Its chef calls before service, and a person at your desk turns the call into a Fishbowl sales order.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4>The first entry is still typed by hand</h4>
        <p class="text-muted mt-12">
          Fishbowl's QuickBooks page promises nothing typed twice: a shipped order becomes the invoice without anyone keying it. The typing it leaves is the first round: a person at the desk keys in what the chef said on the phone.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>The phoned order must go into Fishbowl</h4>
        <p class="text-muted mt-12">
          With Fishbowl in place, each sales order begins in Fishbowl, and the QuickBooks invoice follows once it ships. So the call cannot be entered in QuickBooks and left there: someone keys it into Fishbowl before anything else moves.
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
      <h2>Not a Fishbowl Inventory alternative: the step before the sales order</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Said at the walk-in, sent from the chef's phone</h3>
          <p class="mt-12 text-muted">
            The chef presses Push to Speak and says what the kitchen needs. Our app matches each item to that restaurant's guide, and the chef fixes any item it got wrong before sending. Your desk receives items the chef has reviewed, not notes from a rushed call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing is sent until the chef has looked it over</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Open for orders at any hour, holidays included</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on iOS and Android phones</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A half-finished order is saved if service pulls the chef away</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How order taking works →</a>
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
          <h3>Each restaurant's usual items, at the prices you set</h3>
          <p class="mt-12 text-muted">
            Export each account's usual items and their prices from Fishbowl. We build a guide for each restaurant under your part numbers. You keep each guide's prices current in our admin; whether they can update from Fishbowl is a question for the demo. Fishbowl's customer records and pricing rules stay where they are.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A chef sees what that kitchen buys, not your full catalog</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You set the price for each account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Update a guide and the chef's app shows the change</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup needs no Fishbowl login, and nothing is installed in Fishbowl</span>
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
          <h3>Three formats for a checked order</h3>
          <p class="mt-12 text-muted">
            Each order comes to you as an email carrying a PDF, Excel or Word file, over EDI, or through our API. Email orders get keyed into Fishbowl from what the chef reviewed. Orders that travel by EDI or our API can skip that step if your Fishbowl setup accepts them; the demo is where you find out.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to a rep's inbox or a shared one</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each app order has its own number and send time</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, shipping and invoicing run as they do today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmations reach the chef by app notification and text</span>
            </li>
          </ul>
          <a href="/order-fulfillment-software" class="feature-link">From order to pick line →</a>
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
          <h3>Stock levels in view while orders come in</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts, lots and expiry dates are still managed in Fishbowl</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for the people taking orders</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">More on stock tracking →</a>
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
      <h2>How restaurants get started on the app</h2>
      <p class="lead mt-16">
        Fishbowl stays exactly as it is. You send us a spreadsheet, and we set up the restaurants.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send us one Fishbowl export</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet out of Fishbowl is usually all we need: what each restaurant buys and what it pays, item by item.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We open each restaurant's account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load the guide, the account opens, and the chef downloads the app. Most kitchens place a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>The first orders your desk did not take by phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one was read over by the chef, carries an order number and its send time, and lands where you asked for it.
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
      <h2>What changes on your side</h2>
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
            "Fishbowl already did everything after the order. Typing up the restaurant calls was the slow part, and now a few of those chefs send their order from the app."
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
            "The late-night voicemails were the worst to enter. Those chefs now speak each item in the app and check it, and the order is waiting for us in the morning."
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
      <span class="eyebrow">Before And After The Order</span>
      <h2>What Fishbowl keeps, and what VoiceOrder Solutions adds</h2>
      <p class="lead mt-16">
        This is not an alternative to Fishbowl Inventory. VoiceOrder Solutions does its work before Fishbowl has the order, and Fishbowl does the rest.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Fishbowl keeps the records</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Fishbowl and your books stay in charge of customers, inventory levels, lot tracking and invoicing. We store each restaurant's order guide with your prices, which you edit whenever they change, plus every order its chef places through the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Fishbowl's app is for your warehouse</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Fishbowl Advanced Mobile turns a phone into a barcode scanner for your staff: picking, receiving and counts. Ours belongs to the chef and does one thing: ordering. Your warehouse keeps scanning in Fishbowl's app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>QuickBooks still gets its invoices from Fishbowl</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Shipping an order in Fishbowl still creates its invoice in QuickBooks, exactly as it does today. We stop at the point your desk has the order, so your books and your accountant see no change.
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
      <h3 style="margin-bottom:10px;">See a restaurant order reach your desk with no call to take</h3>
      <p class="text-muted" style="font-size:16px;">
        Our demo is twenty minutes long. In it, we speak an example order into our app, fix one item, send it and open the file it turns into. Then we look at how it would get into Fishbowl: keyed from the file, or sent by EDI or API.
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
      <h2>Answers for distributors on Fishbowl</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Should we look for a Fishbowl Inventory alternative to get spoken restaurant orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Fishbowl goes on running your counts, lot tracking, picking and QuickBooks invoicing. What we add is for the restaurant that phones you: its chef talks each item into our app, looks it over and hits send, so nobody at your desk takes it down during a call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Fishbowl Inventory?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They do different jobs, and VoiceOrder Solutions is no Fishbowl Inventory replacement. Fishbowl handles the order from the moment it is entered: counts, picking, lots and your books. Our one job comes earlier: a chef voices the order in an app and checks it first, rather than phoning your desk.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't Fishbowl already offer a B2B portal?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Fishbowl lists its own portal among its plan add-ons, and partner portals and sales-rep apps feed their orders into Fishbowl as sales orders. That suits a chef happy to log in and pick each item from a list or a search. Our app is for the chef who prefers to say it aloud, then read the list over before sending.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Our retail chains send EDI. Can restaurant orders arrive the same way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We can send each restaurant order over EDI, yes. Fishbowl's EDI is set up for retailer trading partners, through the EDI services it works with. Whether your Fishbowl EDI setup will accept orders from us is something we work out with you in the demo. If it cannot, email, or our API if your setup takes it, will carry the order instead.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does Fishbowl connect to VoiceOrder Solutions, or will my desk still type orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They do not connect: the two are sold and supported apart, and each vendor stands behind its own software only. Through EDI or our API, Fishbowl may accept the order with no retyping, if your setup allows; the demo is where that gets checked. By email, someone at your desk enters it from the attached file, which the chef went over before sending, rather than from a call. A call placed the old way still gets no number from us. Fishbowl offers an API, so other order tools can connect to it too, and its AI assistant, in beta, drafts purchase orders, transfers and sales orders for your staff to approve.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We run Fishbowl beside QuickBooks. Can you deliver orders into QuickBooks?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          QuickBooks is one of our delivery formats. With Fishbowl, though, your sales orders start in Fishbowl. Fishbowl's own QuickBooks page says sales orders do not transfer automatically between the two, and that invoices flow from Fishbowl to QuickBooks, so do not count on an order we put into QuickBooks reaching Fishbowl. A file, EDI or the API is the more direct choice, and the demo settles which.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast is setup, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup takes 24 to 48 hours for most distributors, and nothing in Fishbowl changes. Fishbowl publishes starting prices for its plans; we give each distributor a quote and publish no figure. Any Fishbowl Inventory alternative means a new stock system, a data move and retraining the warehouse. Shifting some restaurant calls into an app asks for none of that.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Fishbowl details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From fishbowlinventory.com, read through on 9 November 2026: the inventory, sales, order management, ecommerce, Commerce Suite, AI, warehouse, food industry, QuickBooks, integrations and pricing pages, and the partner portal pages it links. Notice something out of date? Write to us and we will correct this page.
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
  <h2>Fishbowl runs everything after the order. Chefs can skip the call.</h2>
  <p>Give us twenty minutes to follow one restaurant order from the kitchen to your inbox.</p>

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
        <li><a href="#comparison">Fishbowl + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/dsd-sales-software">DSD Sales</a></li>
        <li><a href="/wholesale-ordering-software">Wholesale Ordering</a></li>
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
