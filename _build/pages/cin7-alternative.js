/* Comparison page: Cin7, and Cin7 with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 wave 2 (inventory systems; Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Cin7, never
 * its replacement. Table = "Cin7 + VoiceOrder Solutions" vs "Cin7 on its own"; every Cin7 strength is
 * a tick in both columns. Separate products with no built-in link (FAQ 5); whether a Cin7 setup takes
 * our formats in directly is a demo question, never a claim.
 * Angle, distinct from the 8 ERP pages (NetSuite = no extra module, Syspro = orders in writing,
 * Business Central = checked before sending, Prophet 21 = inside sales, Odoo = today's shortages,
 * Acumatica = kitchens skipping the portal, Sage X3 = the kitchen's side of a partner build, Aptean =
 * food depth): CHANNELS. Cin7's own pitch is connecting sales channels (online stores, marketplaces,
 * retail chains over EDI, a POS counter, an add-on B2B web portal written for restocking retailers'
 * shelves). Every one of them hands Cin7 an order as data. The kitchen that calls a food distributor
 * is the one channel Cin7 does not connect: someone types the call into a Cin7 sale. VoiceOrder
 * Solutions adds that kitchen channel. Second strand (problem card 2 only): Cin7 is written for product
 * sellers; its food page covers batches, FEFO and recalls and names no restaurants.
 * ⚠ Two products: Cin7 Core (SMB, published tiers; the likely fit for a small/mid food distributor) and
 *   Cin7 Omni (multi-entity, quoted). IDR is Core only; built-in EDI is Omni; Core's EDI is via
 *   partners. FAQ 3 answers Omni users. Never attribute a Core-only fact to "Cin7" unscoped.
 * ⚠ Cin7 HAS customer ordering (the B2B portal add-on, works in a phone browser) and AI that turns a
 *   customer's PO file into a draft sale staff approve (IDR, Core add-on). Both conceded (table rows,
 *   coexistence card 3, one sentence). The "AI needs a written order" argument belongs to Syspro: here
 *   IDR is a concession, not the angle.
 * ⚠ No native voice. Third-party tools exist (a Zapier/Alexa recipe that creates a Cin7 sale from a
 *   spoken phrase, OCR tools for emailed POs, AI phone agents): FAQ 5 concedes them in one line, unnamed. Never "the
 *   only voice option for Cin7".
 * ⚠ Cin7 publishes Core prices and onboarding durations (help center, weeks). Neither figure is on the
 *   page; the cost FAQ concedes that Core prices are published. Nothing is built on sale-order caps.
 * ⚠ Cin7 is the stock system: canonical stock lines only, never "we see stock better".
 * Every claim is sourced and dated in _build/research/competitors/cin7.md.
 * Review 2026-11-09 (wave 2 FIXES2 T1-T7 + cin7 section, wave 1 S1-S10): problem card 3 is now the EDI
 *   split (chains get EDI, restaurants phone); the portal fact moved to its own FAQ 4; problem card 2 H4
 *   scoped to the food page; coexistence card 3 cut to one IDR sentence; FAQ 6 (setup) merged into FAQ 3
 *   and its slot is now "app orders in Cin7 reports"; third-party tools folded into FAQ 5; retyping said
 *   in the problem lead; T4 call-in row rescoped; one tie (batch row) merged into the forecasting row and
 *   the freed row is a VOS win on the channel angle; "line" -> "item"; stock bullets per T1; prices line
 *   per T3 in the guide row; testimonials, trust item, voice H3, mid-CTA rewritten; "channel" cut back.
 */
module.exports = {
  title: "Not a Cin7 Alternative: Keep Cin7, Add Voice Ordering",
  description: 'Cin7 links your webstores, portal and EDI. Restaurants that still call get an app to say each order and fix it first. Not a Cin7 alternative: one more channel.',
  related: ["netsuite-alternative","acumatica-alternative","wizcommerce-alternative"],
  relatedHeading: "More platforms you can keep running",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Cin7 Alternative: A Kitchen Ordering Channel</h1>
      <p class="lead mt-16">
        Give your phone-order restaurants a channel of their own. In the VoiceOrder Solutions app, the head chef says what the kitchen needs, fixes any item and sends the order to you. Cin7 keeps the stock, the batches and any webstore or portal you run.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Stock stays in Cin7</span>
        <span class="hero-trust-dot"></span>
        <span>Made for chefs who call</span>
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
      <div class="stat-label">Saved whenever a kitchen sends its order instead of calling</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Open for kitchen orders, weekends and nights included</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is all most distributors need to go live</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Cin7 is a full inventory system and keeps five of nine rows in both columns. The
     four rows that differ are about the restaurant that calls.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">What Stays, What Changes</span>
      <h2>Cin7 plus VoiceOrder Solutions.<br>Your other sales channels stay as they are.</h2>
      <p class="lead mt-16">
        With the app added, restaurants that used to phone can send you a checked, numbered order instead. If a Cin7 alternative is what you typed, note what stays the same: stock, batches, purchasing, the portal and retail EDI all keep running in Cin7. The two are sold apart, with no link built in.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Cin7 + VoiceOrder Solutions</th>
            <th style="width:30%;">Cin7 on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Batches, expiry dates, purchasing and demand planning (forecasting add-on)</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A kitchen that calls can say its order, then review every item</td>
            <td><span class="check-yes">✓</span></td>
            <td>Read out on the phone, checked only if read back</td>
          </tr>
          <tr>
            <td>Online stores, marketplaces and a POS counter (add-on) in one stock count</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An ordering app for the chef's own phone</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>B2B web portal with reorders and order history (add-on)</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>EDI with retail chains (built in on Omni, through partners on Core)</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who used to call now sends a numbered, timed order</td>
            <td><span class="check-yes">✓</span></td>
            <td>A call gets a number once your team enters it</td>
          </tr>
          <tr>
            <td>AI that reads customer purchase orders into sales for approval (Core add-on)</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Call-in restaurants get an ordering option built for chefs</td>
            <td><span class="check-yes">✓</span></td>
            <td>The portal if they will use it, or the phone</td>
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
      <span class="eyebrow">Why Teams Compare</span>
      <h2>What sends a Cin7 user looking at a Cin7 competitor</h2>
      <p class="lead mt-16">
        A search for a Cin7 alternative often starts with the one channel Cin7 does not connect: the restaurants calling in their orders before dawn. The app gives their chefs a channel too. Orders the app emails you are still entered by your team, from items each chef has checked. Orders sent by EDI or through the API can land in Cin7 directly if your setup accepts them, and a demo settles that.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🔌</div>
        <h4>Every connected channel sends data. A call sends nothing.</h4>
        <p class="text-muted mt-12">
          A webstore, a marketplace or a retailer's EDI file hands Cin7 an order it can read. A chef calling at 6 a.m. hands it nothing, so someone at your desk listens and types the call into a Cin7 sale.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🏷️</div>
        <h4>Its food page is written for brands and makers</h4>
        <p class="text-muted mt-12">
          Cin7 calls itself inventory software for modern sellers: retail, online, wholesale and makers. The food page covers lot tracking, stock rotation by expiry date and recalls, and does not mention restaurants. Nothing on that page is about kitchens ordering from a distributor.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🖥️</div>
        <h4>Retail chains send EDI. Most restaurants still phone.</h4>
        <p class="text-muted mt-12">
          Cin7 trades orders with major retail chains over EDI: built into Omni, or set up with a partner on Core. The restaurants you deliver to rarely send EDI, so unless they take to the portal, their orders still arrive as calls.
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
      <h2>Not a Cin7 alternative: the channel restaurants on the phone were missing</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Spoken by the chef, set out as items</h3>
          <p class="mt-12 text-muted">
            Standing at the shelves, a chef names what is running low. The app turns it into items from the guide for that restaurant. If one is off, the chef changes it before sending, at any hour, with no wait for your desk.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every item gets a look from the chef first</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Takes a Sunday night order like a Tuesday morning one</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the iPhone or Android phone the chef already carries</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Called to the back door mid-order? The app keeps the draft</span>
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
          <h3>Guides cut from a Cin7 customer export</h3>
          <p class="mt-12 text-muted">
            Export from Cin7 the items each restaurant buys from you, save them as a spreadsheet and send it to us. We load those items under your SKUs, at the price you set for each account. You keep each guide's prices current in our admin; whether they can update from Cin7 is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A kitchen only sees the items it buys from you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You pick the items and the price for each guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Add or drop an item and the chef sees it next time</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup adds no Cin7 add-on and changes no automation</span>
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
          <h3>What reaches your desk, one format at a time</h3>
          <p class="mt-12 text-muted">
            A sent order goes out by email as a PDF, Excel or Word file, or by EDI, through the API or into QuickBooks. Emailed, it still gets keyed into Cin7 by your staff, but from a list the chef has reviewed rather than from a call. For EDI or the API, we look at your Cin7 setup together in the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Lands with a rep or in a shared orders inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, invoicing and delivery stay in Cin7</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Webstore, portal and retailer orders carry on unchanged</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">What an order looks like →</a>
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
          <h3>Stock levels next to the kitchen orders coming in</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for your desk when a big restaurant order lands late</span>
            </li>
            
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts, batches and reorder points are still run in Cin7</span>
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
      <h2>Up and running while Cin7 carries on</h2>
      <p class="lead mt-16">
        One spreadsheet out of Cin7 is usually all we need. From it, each restaurant account gets a guide, and its chef starts ordering.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export your restaurant accounts' items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A report of what each account buys, with SKUs and prices, saved as a spreadsheet. We never need access to your Cin7 account for it.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up each account with its own guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each kitchen gets the app on its phone and finds its own guide waiting. Most of them get a first order in that same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Checked orders start arriving</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every app order comes with a number and a timestamp, in the format you picked.
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
      <h2>What distributors notice once restaurants order in the app</h2>
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
            "Grocery stores reorder on our portal. The chains are on EDI. Most restaurants just phoned. Now their chefs have an app made for the way they order."
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
            "The chefs speak into the app at the end of a shift, and our desk works from a file instead of scribbled call notes."
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
      <span class="eyebrow">Both Running</span>
      <h2>Cin7 keeps its channels. The app adds one.</h2>
      <p class="lead mt-16">
        Call it an extra channel, not an alternative to Cin7. Our app serves the restaurants still calling you; Cin7 handles the stock and everything it connects today, as before.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Your records live in Cin7</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Cin7 holds your customers, stock levels, invoices and lot numbers. We hold the guide you build for each account, with your prices, and the orders restaurants send through the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛍️</div>
        <h4>Portal and EDI accounts stay put</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers using your Cin7 portal, and chains that send EDI, carry on as they are. Our app is aimed at restaurants still on the phone. A call that still comes to your office gets no number from us; only orders sent in the app do.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <h4>Keep Cin7's document reader for PO files</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          On Cin7 Core, an add-on called IDR reads a customer's PO file and turns it into a sale your team approves, so keep it for the accounts that send one.
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
      <h3 style="margin-bottom:10px;">See how a restaurant's spoken order reaches your Cin7 desk</h3>
      <p class="text-muted" style="font-size:16px;">
        In 20 minutes we talk one order into the app, fix an item and send it. Then we go through each format, and how each one would fit beside Cin7.
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
      <h2>Asked by distributors who run Cin7</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Cin7 alternative to take spoken orders from restaurants?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Your stock, and any webstore, portal or EDI you run, stay with Cin7. We add one more way in, for the restaurants that call you: a chef talks through the order in our app and goes over each item before it is sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Cin7?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Better at one thing only: serving the restaurants that phone you. Their chefs get an app of their own to order in: speak, check, send. Cin7 runs inventory, batch records, buying from suppliers and your webstore and marketplace sales, and we run none of those, so we are not a Cin7 alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We run Cin7 Omni, not Core. Does that change setup?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. On either edition, setup needs no Cin7 login and installs nothing: we work from a spreadsheet exported from Cin7, and your add-ons, automations and connections stay as they are. Omni has EDI built in for retail chains, while Core connects EDI through partners, so whether our orders could arrive the same way depends on your edition and setup. If you would like orders to arrive that way, the demo covers what it would take on your side.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't Cin7's B2B portal already let restaurants reorder?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It can. The portal is an add-on where customers you invite log in, browse the catalog you set up, see past orders and reorder, and it works in a phone browser. Cin7 pitches it as a way to keep your customers' shelves stocked. Restaurants that use it should keep it. The app is for the chefs who still prefer to call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will someone at our desk still key these orders into Cin7?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It depends on the format. The products are separate, and each vendor supports its own software only. If Cin7 is configured to accept our orders as EDI or from the API, they need no retyping at all; we look at that with you in the demo. By email, someone still enters the sale, but from a file that was checked in the kitchen first, not from a call or a voicemail. Other tools are used beside Cin7 as well, such as readers for emailed purchase orders and AI agents that answer your phone. Ours is in the chef's hands.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will app orders count in Cin7 reports like our other sales?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, once the order is in Cin7. Whether your desk enters it or it comes in as an EDI or API order where Cin7 is set up for it, it becomes a sale in Cin7 like any other and counts in your sales and stock figures. Before that, the order already carries our order number and a timestamp.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What will it cost us, and how soon can kitchens order?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We get most distributors running in 24 to 48 hours. Cin7 publishes prices for its Core plans and quotes Omni; we quote every distributor separately and publish no prices. A Cin7 replacement would mean moving your stock, batches and every sales connection at once. Adding the app leaves all of that where it is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Cin7 details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From cin7.com and the Cin7 Core help center, as of 9 November 2026: the Core and Omni pages, the food and wholesale pages, the B2B portal, EDI, AI and IDR pages, and Cin7's plans and prices, plus listings of other tools that connect to Cin7. Prices are left off on purpose. If anything here is out of date, tell us and we will update it.
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
  <h2>Keep every Cin7 channel, and open one for the kitchens that call</h2>
  <p>A short demo: one order spoken into the app, and the file your desk would receive.</p>

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
        <li><a href="#comparison">Cin7 + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/inventory-tracking-software">Inventory Tracking</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
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
