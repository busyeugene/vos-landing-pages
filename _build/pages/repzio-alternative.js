/* Comparison page: RepZio, and RepZio with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (webshops / EDI / order capture / rep app; Eugene's "Competitors Batch 2" sheet),
 * built 2026-11-09. Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED
 * beside RepZio, never its replacement. Table = "RepZio + VoiceOrder Solutions" vs "RepZio on its
 * own"; every RepZio strength is a check mark in both columns. They are separate products with no
 * built-in link (FAQ 4); an order from our app never passes through RepZio or B2B Direct.
 * Angle (RepZio's own facts): RepZio is built to SELL A PRODUCT LINE: presentations, flipbooks,
 * bestseller lists, barcode-scanned showrooms, badge scanning at the Atlanta, Las Vegas and High
 * Point markets, "market season", "containers of goods", ShopZio for discovery. A restaurant's
 * routine reorder needs none of that, yet with RepZio alone it still goes through the rep (a call
 * or text the rep types in) or a login to the B2B Direct storefront. VoiceOrder Solutions gives
 * that reorder its own way in: the chef says it from the restaurant's guide and checks each item.
 * H1 "Chefs Reorder By Voice" (was "Reorders Need No Pitch", too cryptic; review 2026-11-09).
 * Distinct from: Pepperi (the visit vs the reorder nobody attends: never argue visits),
 * Unleashed (reps sell, chefs order / who enters it: the rep-types-the-call fact is one problem
 * card only), inFlow (naming items vs shopping a catalog: never argue browsing), B2B Wave (typed
 * portal vs voice).
 * ⚠ B2B Direct lets approved buyers log in, reorder from favorites, see order history and live
 *   inventory, 24/7: ✓ both columns, FAQ 3. Never "restaurants cannot reorder without a rep".
 * ⚠ Never "not for food": its site speaks to gift, home and furniture markets, but a partner's
 *   article quotes a user naming wine among its industries.
 * ⚠ RepZio's rep app works offline; we never claim that for ours (FAQ 6 says so).
 * ⚠ No voice or AI order tool found for RepZio (no concession FAQ needed; never "the only one").
 * ⚠ No prices on repzio.com; the help center names free Basic and paid monthly Standard rep
 *   licenses: conceded in the cost FAQ, no figure, no pricing row.
 * ⚠ Its integrations page names ERPs and accounting systems: claims.js bans them, so "your ERP".
 * Every claim is sourced and dated in _build/research/competitors/repzio.md.
 * Review 2026-11-09 (wave 3, FIXES3 U1-U14 + repzio section): angle now "the rep sells it once, you add
 *   it to the guide, the chef reorders it by voice" (new FAQ 3). B2B Direct concession moved to coex card 2;
 *   records fact moved into the typing FAQ; card 3 = rep orders keep RepZio's own way to the ERP. NO
 *   per-account rep routing (KB says only "email to a rep or purchasing team"): a demo question. Problem
 *   card 2 no longer says reorders always reach the rep (B2B Direct takes them). Offline: we promise nothing.
 */
module.exports = {
  title: "Not a RepZio Alternative: Keep RepZio, Add Voice Ordering",
  description: "RepZio helps your reps win the sale. Let restaurants speak each routine reorder into our app and look over each item. Not a RepZio alternative: keep both.",
  related: ["unleashed-software-alternative","b2b-wave-alternative","pepperi-alternative"],
  relatedHeading: "More sales tools that stay in your reps' hands",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A RepZio Alternative: Chefs Reorder By Voice</h1>
      <p class="lead mt-16">
        Get each reorder after the sale straight from the chef, who says it into our app from that restaurant's order guide and looks over every item before it goes. RepZio stays your reps' tool for presentations and showroom orders, and B2B Direct stays your storefront.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>No change to RepZio</span>
        <span class="hero-trust-dot"></span>
        <span>For the reorders after a sale</span>
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
      <div class="stat-label">Saved per order a chef sends in the app instead of phoning it</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">When a chef can send a reorder, with or without a rep</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors, RepZio left alone</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     RepZio keeps its selling tools and its storefront (six rows to both columns). The three
     that differ are about the restaurant that reorders by calling or texting the rep.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Selling And Reordering</span>
      <h2>RepZio plus VoiceOrder Solutions.<br>The rep sells it once. The chef reorders it.</h2>
      <p class="lead mt-16">
        After the first sale, a restaurant's reorder is often the same handful of items, and it can still reach the rep by phone or by text. RepZio's tools win that first sale, and our app is for every repeat after it. Keeping both is the point: this is not a RepZio alternative, and the two run separately with no link between them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">RepZio + VoiceOrder Solutions</th>
            <th style="width:30%;">RepZio on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product presentations and bestseller lists for reps</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who would call the rep speaks the reorder instead</td>
            <td><span class="check-yes">✓</span></td>
            <td>Called or texted to the rep, who types it in</td>
          </tr>
          <tr>
            <td>Rep order writing, online or offline</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A branded B2B Direct storefront with favorites and order history</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restaurant that used to call now sends a numbered, timed order</td>
            <td><span class="check-yes">✓</span></td>
            <td>Numbered once a rep or your desk enters it</td>
          </tr>
          <tr>
            <td>Barcode scanning and card payments in the showroom</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Restaurants order in an app on any iOS or Android phone</td>
            <td><span class="check-yes">✓</span></td>
            <td>A storefront in the browser; the RepZio app is for reps</td>
          </tr>
          <tr>
            <td>Live inventory for reps and storefront buyers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>RepZio orders flow on to your ERP or accounting system</td>
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
      <span class="eyebrow">After The First Sale</span>
      <h2>Why food distributors weigh a RepZio competitor</h2>
      <p class="lead mt-16">
        RepZio covers the whole sale: presentations, showrooms and trade-show orders, plus a storefront for approved buyers. A RepZio alternative with more selling tools would not change how a chef who still calls the rep reorders what the kitchen bought last week. If our app emails that reorder to you, it is entered by someone on your team, from items the chef confirmed one at a time.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🗓️</div>
        <h4>Made for trade-show selling</h4>
        <p class="text-muted mt-12">
          RepZio comes from the company behind the Atlanta, Las Vegas and High Point trade-show markets, and its support pages help reps get ready for "market season". That is the selling it was built around. A restaurant, though, reorders from you every few days, all year round.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📚</div>
        <h4>A weekly reorder needs no pitch</h4>
        <p class="text-muted mt-12">
          Presentations, flipbooks, bestseller lists and barcode-scanned showrooms help a rep make the sale. When a chef needs the same cases as last Tuesday, none of that gets used. Unless the restaurant reorders in B2B Direct, that reorder still reaches the rep as a call or a text.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>RepZio's app is in the rep's pocket, not the chef's</h4>
        <p class="text-muted mt-12">
          RepZio's own app is made for reps, on iPad and iPhone: presentations, live stock and order writing, even offline. For customers, RepZio offers B2B Direct, a storefront the chef signs in to from a browser.
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
      <h2>Not a RepZio alternative: what it adds to the routine reorder</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>No rep to reach, no call to return</h3>
          <p class="mt-12 text-muted">
            From the walk-in or the office, the chef names what the kitchen needs. Our app matches each item to that restaurant's guide and lists them, so the chef can fix an item or an amount before sending. The chef never waits for a rep to call back.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing goes out until the chef has looked at each item</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A reorder can go in at 2am or on a holiday</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the phone the chef already carries</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>An interrupted order waits where the chef stopped</span>
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
          <h3>Each restaurant's regular items, in one guide</h3>
          <p class="mt-12 text-muted">
            Send us the items each restaurant usually buys, and we load them as its own guide under your item numbers, so the chef picks from a short list, not everything you stock. Guides and their prices are yours to update in our admin, the same place you manage each account. Whether price changes can come over from RepZio or your ERP in bulk is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each restaurant sees its usual items, not every product you carry</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Once a rep sells a new product, you can add it to that account's guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit any restaurant's guide yourself, in our admin</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup works from an export, not a RepZio login</span>
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
          <h3>Reorders reach you in a format your office already takes</h3>
          <p class="mt-12 text-muted">
            A sent order reaches you by email as a PDF, Excel or Word file, or through EDI, our API or QuickBooks. It does not pass through RepZio, so it will not sit in a rep's order list or in B2B Direct's order history. Through EDI or the API, your ERP may take it in with no typing if it is set up for that, and the demo shows whether yours is. A QuickBooks order goes to your books only.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Emailed to a rep, or to the inbox your desk reads</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The file holds only what was approved in the app</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking and delivery run the way they do today</span>
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
          <h3>Stock in view beside each day's reorders</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for your order desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Reps still see RepZio's live stock on visits</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Buying from your own suppliers stays with your team</span>
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
      <h2>From a guide export to the first spoken reorder</h2>
      <p class="lead mt-16">
        Your team sends the products each restaurant buys from you. We build the accounts, and every chef puts our app on their phone.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export each account's regular items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet from your ERP or from RepZio is usually all we need, listing every account's regular products and prices.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Restaurant accounts go live</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load the restaurant's guide into our admin and open its account. For most restaurants, the first order comes the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Reorders arrive just as the chef sent them</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each order from the app has its own number and the time it was sent. A reorder still phoned to a rep gets no number from us.
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
      <h2>When the weekly reorder stops needing a rep</h2>
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
            "Our reps still sell the new products. Once one is on a restaurant's guide, the chef adds it to the next reorder."
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
            "We still open RepZio for every presentation. The weekly reorders now come from the chef, not through the rep."
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
      <span class="eyebrow">Sell With One, Reorder With The Other</span>
      <h2>RepZio for the sale, our app for the repeat order</h2>
      <p class="lead mt-16">
        This is not an alternative to RepZio: every tool your reps use to win an order stays put, and we only handle the reorders that follow.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🧳</div>
        <h4>Reps keep presentations, scanning and payments</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Flipbooks, showroom barcodes, card capture and the rest stay in RepZio, and so does any ShopZio listing you run. Nothing in your reps' app changes.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Storefront buyers can stay on B2B Direct</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          B2B Direct lets an approved customer sign in, open favorites and reorder at any hour, and restaurants happy doing that should stay on it. The app is for chefs who still reach for the phone to tell the rep each order.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Rep orders keep their own way to your ERP</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders taken by your reps at a trade show or on the road keep going to your ERP through RepZio's own integrations, just as they do now. Nothing we add sits in that path.
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
      <h3 style="margin-bottom:10px;">See a routine reorder come in with no rep on the phone</h3>
      <p class="text-muted" style="font-size:16px;">
        In a 20-minute walkthrough we say a sample weekly reorder, fix one product on the review screen, send it, then show you the PDF your office would receive. Then we look at where it would land beside RepZio and your ERP.
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
      <h2>What sales teams on RepZio ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a RepZio alternative for spoken reorders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. RepZio stays in your reps' hands for presentations, showroom selling and the storefront. What changes is the reorder a chef phones or messages to the rep today: now it is spoken in our app, checked by the chef and sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than RepZio?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job: letting a chef send the usual restaurant order unaided, spoken and then looked over, with no rep in between. Winning the account, showing new products and selling at trade events are RepZio's work, so we stay alongside it and are not a RepZio alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          A rep just sold a restaurant something new. How does it get on their list?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Your team adds it to the guide for that restaurant in our admin. Once it is there, the chef can say it along with the rest of the reorder and see it listed before sending. The rep still makes the sale in RepZio, as now; our app only handles what the kitchen orders again.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is it linked to RepZio, and does my desk end up typing these reorders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They are not linked. RepZio and VoiceOrder Solutions are made by separate firms with no connection between them, and each one supports only its own product. Your ERP keeps your accounts, stock and billing, and RepZio keeps the orders your reps write; we hold every restaurant's guide with its prices, plus the reorders sent through our app. By email, your desk gets a file of the approved items and keys it in from that. What it saves is the call itself: nobody answers the phone, notes every item and repeats the list back, because the chef reviewed the order before it was sent. Sent by EDI or API, it can land in your ERP untouched by your desk, provided your ERP is configured for it, and the demo is where we find out.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will our reps lose sight of their accounts?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They need not. Emailed orders can be sent to a rep, and whether each account's orders can reach its own rep, as well as the desk, is something to confirm in the demo. App orders will not appear in the rep's RepZio order list, since they do not go through RepZio.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          RepZio works offline. Does your app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          RepZio's rep app can write orders without a signal, which matters on a show floor or out in a territory. We can't promise that for our app, so ask about it in the demo. What it does do is save an order if the chef gets pulled away, so they can pick up where they stopped.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly can we start, and what will it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup takes 24 to 48 hours for most distributors, and RepZio is left exactly as it is. You pass us the products each account normally orders, often exported to a spreadsheet; we put them into our admin, create every account, and the restaurants download our app, most of them ordering that same day. RepZio lists no prices on its site; its support site describes a free Basic rep license for browsing and a paid monthly Standard license for sending orders. We quote per distributor. A RepZio replacement would mean new tools for every rep before the next trade show; with us, every rep keeps the tools they have.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the RepZio details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We read repzio.com and the RepZio support site on 9 November 2026: the home, solutions, sales rep app, B2B Direct, ShopZio, integrations and price pages, and support guides for the iOS app, the web app and market prep. The example of a rep keying in an order taken by phone comes from a partner's blog post about RepZio. We searched for a voice tool sold for RepZio and came up empty. If any of it is no longer right, tell us and we will fix this page.
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
  <h2>Keep RepZio for the sale. Hand the reorders to the chef.</h2>
  <p>Give us twenty minutes to show how a newly sold product gets added to one account's list and is then ordered again by voice.</p>

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
        <li><a href="#comparison">RepZio + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/distributor-sales-software">Distributor Sales</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
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
