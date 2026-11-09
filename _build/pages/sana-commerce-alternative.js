/* Comparison page: Sana Commerce, and Sana Commerce with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (webshops / EDI / order capture; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Sana Commerce,
 * never its replacement. Table = "Sana Commerce + VoiceOrder Solutions" vs "Sana Commerce on its own";
 * every Sana strength is a check mark in both columns. Separate products with no built-in link (FAQ 4).
 * Angle (distinct from Acumatica "kitchens that skip the free portal", inFlow "no more phone orders",
 * NetSuite "store add-on", Odoo "Order Again", Brightpearl "accuracy before automation"): THE DIRECTION OF
 * THE INFORMATION. Sana "closes the digital distance, the gap between what the business knows and what the
 * buyer sees", and its homepage asks "Do your buyers still call to check prices or stock?". It ends the
 * calls that ASK by showing each customer your ERP. The call it leaves is the one that TELLS: a chef reading
 * out what the kitchen needs. VoiceOrder Solutions gives that chef an app to say the order and check it.
 * ⚠ Sana's web store already gives restaurants 24/7 ordering, order templates, reorders, live stock and
 *   back-in-stock dates, per-customer ERP prices, reps ordering on a customer's behalf: ✓ both columns.
 * ⚠ Sana web orders load into the ERP with nobody retyping; our emailed orders are still entered by the
 *   desk (problem lead, FAQ 4). Keep web-store accounts on Sana (coexistence card 1).
 * ⚠ Our order never passes through the Sana store, so it is not a Sana web order (FAQ 5). Sana says its
 *   account pages also list orders "directly from the ERP": attributed, hedged ("can").
 * ⚠ Never say the chef sees stock in our app; never say prices sync (guides row: the T3 line).
 * ⚠ The two ERP families Sana runs on are banned words (claims.js): "your ERP" only.
 * ⚠ Sana has a real food customer (a Sydney distributor to restaurants and cafes): never "not for food".
 *   Its figures stay off; only the "training customers on using the web-shop" / "more onboarding" lines
 *   are used, attributed (problem card 3).
 * ⚠ No voice or phone-order tool for Sana found (search 2026-11-09); its older mobile app was for sales
 *   agents (2013 docs). FAQ 3 says so with the date; no "only voice option" claim.
 * ⚠ Pricing: three plans, "Request pricing": parity, conceded in the cost FAQ with no figure. Sana's 3- or
 *   6-month implementation timelines are for its own store, mentioned once (cost FAQ).
  * Every claim is sourced and dated in _build/research/competitors/sana-commerce.md.
 * Review 2026-11-09 (wave-3 FIXES3 U1-U14 + page section): Sana also moves routine reorders online
 *   (factcheck-a M4), so the angle is now the call that IS the order from a chef who will not log in; H1
 *   "Calls That Are Orders"; records fact moved to the typing FAQ; "can it be wrong" folded into it; new
 *   FAQ "which calls are left"; coexistence card 2 = Sana's account pages (attributed, hedged).
 */
module.exports = {
  title: "Not a Sana Commerce Alternative: Keep It, Add Voice Ordering",
  description: "Get checked orders from the chefs who still call: they say the order in an app and fix any item. Keep your web store: this is not a Sana Commerce alternative.",
  related: ["orocommerce-alternative","shopify-b2b-alternative","netsuite-alternative"],
  relatedHeading: "Other web stores and systems that stay as they are",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Sana Commerce Alternative: Calls That Place Orders</h1>
      <p class="lead mt-16">
        Rather than calling, a chef can open the VoiceOrder Solutions app, say what the restaurant needs, fix any item and send it. Sana Commerce still puts each account's prices and your stock online.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Your Sana storefront is left alone</span>
        <span class="hero-trust-dot"></span>
        <span>For chefs happier talking than typing</span>
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
      <div class="stat-label">Saved on each order a chef speaks instead of phoning</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Orders taken after close, with nobody at the desk</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors, nothing changed in Sana</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Sana is a full ERP-run web store, so six of nine rows go to both columns. The three that differ
     are about the chef who still calls.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Questions And Orders</span>
      <h2>Sana Commerce plus VoiceOrder Solutions.<br>Sana answers questions about prices and stock. Calls where the chef reads out an order can move to our app.</h2>
      <p class="lead mt-16">
        Sana's web store shows each customer their prices, your stock and what they ordered before, and lets them reorder once they log in. Our app is for the chef who reaches for the phone instead: they speak every item, see it listed and send it once it is right. This is not a Sana Commerce alternative: you run both, as two separate products with no link set up between them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Sana Commerce + VoiceOrder Solutions</th>
            <th style="width:30%;">Sana Commerce on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Each customer's own prices, taken from your ERP</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who phones today can say the order and check each item</td>
            <td><span class="check-yes">✓</span></td>
            <td>Taken by phone, then entered in your ERP by your team</td>
          </tr>
          <tr>
            <td>Live stock and back-in-stock dates shown online</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order templates and reorders from past online orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who once phoned now sends an order that our app numbers and times</td>
            <td><span class="check-yes">✓</span></td>
            <td>Numbered once it is keyed in by hand</td>
          </tr>
          <tr>
            <td>Web store orders load into your ERP as they are placed</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An app the chef installs on an iOS or Android phone</td>
            <td><span class="check-yes">✓</span></td>
            <td>A web store that opens in the phone's browser</td>
          </tr>
          <tr>
            <td>Sales reps can place an order on a customer's behalf</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Invoices, shipment status and returns online</td>
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
      <span class="eyebrow">The Calls Sana Leaves</span>
      <h2>What sends food distributors looking for a Sana Commerce competitor</h2>
      <p class="lead mt-16">
        Sana Commerce sets out to move customers online, from questions about what things cost to routine reorders, all behind a store login. That leaves the chef who reads out every item over the phone, and a Sana Commerce alternative that is just one more web store would not reach that chef either. Move that chef to our app and what reaches you by email still gets keyed into your ERP, but from a list approved by the chef before it was sent.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🔎</div>
        <h4>Sana moves questions and reorders online</h4>
        <p class="text-muted mt-12">
          Sana's homepage asks whether your customers still phone you about prices or stock, and it moves routine reorders online too. It does both by putting what your ERP knows on a screen the customer logs in to.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4>Some calls are not questions: they are the order</h4>
        <p class="text-muted mt-12">
          A chef phoning after service is not asking about anything: they are reading out a list from the walk-in. That call is the order, and someone at your desk has to take it down.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🎓</div>
        <h4>Not every chef takes to shopping online</h4>
        <p class="text-muted mt-12">
          In Sana's case study of a Sydney food distributor selling to restaurants and cafes, service staff helped customers learn the web shop, and some needed more onboarding than others. A chef who never takes to the web store is still on your phone.
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
      <h2>Not a Sana Commerce alternative: what the chef who calls gets instead</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The chef says the order as they would on the phone</h3>
          <p class="mt-12 text-muted">
            Standing at the walk-in, the chef names what the kitchen needs. Our app matches each spoken item to that restaurant's guide and lists them, so the chef can change an item or an amount before sending. Speaking replaces searching and filling a basket.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each item is on screen to check before the order goes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders can be sent at any hour, including after you close</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the smartphone the chef already carries</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>If service interrupts, the order is saved where the chef stopped</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How restaurants send orders →</a>
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
          <h3>Each restaurant orders from its own guide</h3>
          <p class="mt-12 text-muted">
            Export what each restaurant usually orders, with its prices, from your ERP. We load that as the account's guide under your own item numbers. You update each account's guide and prices in our admin platform, where you also manage the accounts. Whether price changes can come over from Sana or your ERP in bulk is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The chef sees the restaurant's regular items, not your whole range</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each item carries the price you set for that account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit a guide in the admin platform whenever an account changes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup runs from a spreadsheet, with nothing installed</span>
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
          <h3>Arrives in a format your desk already handles</h3>
          <p class="mt-12 text-muted">
            A finished order goes to your team by email, attached as a PDF, an Excel sheet or a Word document. It can also go out over EDI, through our API or into QuickBooks, though a QuickBooks order lands in your books, not in your ERP's sales orders. Whether an EDI or API order can load straight into your ERP depends on how yours is set up, and the demo shows that.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a rep, a manager or your full order desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The file shows each item the chef approved</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking and invoicing still run from your ERP</span>
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
          <h3>Order activity and stock in one view for your team</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts live in your ERP; Sana still shows them online</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your team gets fewer stockout surprises</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Sana still tells customers when sold-out items return</span>
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
      <h2>Adding the app beside Sana Commerce</h2>
      <p class="lead mt-16">
        You send each account's regular items, often exported as a spreadsheet. We build the guides, and the chefs download the app.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send us an ERP export</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A list of what each account buys, with its prices and your item codes, is usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Start with the restaurants that phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one gets its guide and an account, then the chef downloads the app and is ready to order.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Spoken orders reach your desk checked</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one carries an order number and the time it was sent, in whichever format you picked.
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
      <h2>When the chefs who called started talking to an app</h2>
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
            "Sana ended many of the calls asking what was in stock. The calls that were the order are the ones the app took over."
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
            "Chefs still browse what is new in our web store. The regular order, once read out to us on a call, now comes through the app."
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
      <span class="eyebrow">Web Store And App</span>
      <h2>What Sana Commerce keeps doing, and where our app fits</h2>
      <p class="lead mt-16">
        We are not an alternative to Sana Commerce: Sana keeps serving the customers who log in, and the app is there for chefs who only ever call to order.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🏪</div>
        <h4>Keep web store customers on Sana</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Restaurants already ordering online through Sana get their own prices and reorder from saved templates there. Leave them where they are.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>App orders can still show in Sana's account pages</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Sana says each customer's account pages list orders entered straight in your ERP as well as web orders. When an order from our app reaches your ERP, it can appear there beside that restaurant's other orders.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>New and seasonal products stay on Sana</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The guide we build for a restaurant starts from the items it usually orders. To show chefs your wider range or a seasonal catalog, Sana is still the place.
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
      <h3 style="margin-bottom:10px;">Watch a chef's regular call arrive as an order they approved</h3>
      <p class="text-muted" style="font-size:16px;">
        The demo takes 20 minutes. We dictate one order, switch out a product, send it, then open what your desk receives. Then we go over how that order could get into your ERP, while Sana stays as it is.
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
      <h2>What distributors on Sana Commerce ask</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Sana Commerce alternative for spoken orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Sana Commerce carries on with its online work, from account pricing to web orders. Our app is for each chef still calling: they read each item into it, look the list over, and what was a call reaches you already checked.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Sana Commerce?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one thing: the order from a chef who likes saying it more than logging in to shop. Sana covers far more, from quotes and payments to returns, so we run alongside it and are not a Sana Commerce alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does Sana Commerce have its own app or voice ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not that we found. Its store is built to work in a phone's browser. The older Sana mobile app in its help pages was made for sales agents, and we did not find it on the current site. We searched for voice or phone-order tools built for Sana and came up empty. Ours is an app on the chef's own phone.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will my desk still type these orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It depends on how they reach you. Our app and your web store come from different companies, each supporting only its own software. Through EDI or the API, our order can go into your ERP with no retyping if your system takes orders that way, and the demo will show whether it does. By email, it arrives as an attached file, and your desk enters it from that. What your desk saves is the call: no order to take down, write out and read back, just a list the chef looked over before sending. Looking it over does not rule out mistakes, since speech becomes items from the guide and a chef can miss a wrong one or change their mind after sending. Your ERP stays the record for customers, stock and invoices; we hold each restaurant's order guide, with the prices you set, plus the orders sent through the app. A phone call still gets no order number from us.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will an app order show up in Sana?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not as a web order, because it never passes through the Sana store. Once your ERP has it, it is an ERP order, the same as one your team took by phone, and Sana can still list it on that customer's account, since Sana shows ERP orders there too.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Sana already cut our price and stock calls. Which calls are left?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Often, the order calls themselves. Sana goes after routine reorders too, with order templates, reorders of earlier purchases and subscriptions, for customers signed in to the store. Any calls still coming from chefs who would rather read out a list than open a store are the ones we built the app around.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          When could we start, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup is 24 to 48 hours for most distributors, with Sana and your ERP left untouched. You send what each account regularly orders, often exported from your ERP. We load those items into our admin, set up each account, and the restaurants get the app on their phones; most send in a first order that same day. Sana publishes two timelines for building its own store, three or six months with someone from your team on the project. Sana asks you to request pricing for each plan, and we quote per distributor as well. A Sana Commerce replacement would put a new store in front of web customers already happy on Sana, which is not what we offer.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Sana Commerce details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From sana-commerce.com, as we found it on 9 November 2026: the homepage, the distribution, wholesale, pricing, onboarding, self-service portal, order management and integration pages, and its food-distributor case study, plus Sana's help pages on its older mobile app. We checked for add-on ordering tools that same day. Seen a detail that is no longer right? Email us and we will update the page.
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
  <h2>Sana keeps your online store. Chefs on the phone get an app to talk into.</h2>
  <p>Book twenty minutes to see how a chef's usual call turns into an order they checked in the app, and to go over which calls Sana already handles for you.</p>

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
        <li><a href="#comparison">Sana Commerce + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/wholesale-ordering-software">Wholesale Ordering</a></li>
        <li><a href="/order-taking-software">Order Taking</a></li>
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
