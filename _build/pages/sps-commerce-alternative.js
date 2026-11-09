/* Comparison page: SPS Commerce, and SPS Commerce with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (webshops / EDI / order capture; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside SPS Commerce,
 * never its replacement. Table = "SPS Commerce + VoiceOrder Solutions" vs "SPS Commerce on its own";
 * every SPS strength is a check mark in both columns. Separate products with no built-in link (FAQ 4).
 * Angle (from SPS's own pages): SPS exists because an account REQUIRES EDI. Its Fulfillment page says
 * "Most retailers require it" and that its network "already knows these rules, for every retailer"
 * (formats, timelines, packing rules, chargebacks when one is missed); its own "how EDI works" starts
 * with "Your business system generates a document (like a purchase order)". Independent restaurants
 * require nothing and most run no system that produces an EDI order, so they phone, text or leave a
 * voicemail, and that order never enters the EDI flow. VoiceOrder Solutions is for those accounts.
 * H1 "For Non-EDI Accounts" ("For Restaurants Without EDI" ran 5 lines at 1440px). Distinct from Cin7 (which owns "the channel it does not connect"):
 * this page argues from SPS's own mechanism, the trading partner and its rulebook.
 * ⚠ EDI is one of OUR delivery formats too. Never claim our orders travel over the SPS network, that we
 *   are on it, or that SPS can receive them: FAQ 4 says the demo decides whether our EDI or API order
 *   fits the distributor's setup.
 * ⚠ Never "restaurants cannot do EDI": "most independent restaurants" do not.
 * ⚠ SPS HAS a buyer ordering product, Order Central, built for stores ordering from their suppliers
 *   (catalogs, in-aisle scanning): FAQ 3 concedes it. Never "SPS has no ordering app".
 * ⚠ MAX (their AI) watches EDI traffic for the supplier's team: mentioned once as a fact (coexistence
 *   card 1), never as the argument ("their AI serves your staff" belongs to sage-x3 / prophet-21).
 * ⚠ No SPS numbers (network size, 24-hour compliance claim, chargeback or OTIF percentages, fees).
 *   SPS publishes per-trading-partner and per-user fees: conceded in the cost FAQ with no figure.
 *   No pricing row. Never set our 24-48 hours against their 24-hour compliance claim.
 * ⚠ The ERPs and distributors named on SPS's pages are banned words in claims.js: "your ERP" only.
 * Every claim is sourced and dated in _build/research/competitors/sps-commerce.md.
 * Review 2026-11-09 (wave-3 FIXES3 + U1-U14): SPS PDF Order Automation conceded in FAQ 3 (we make no claim it
 *   reads our PDF) and added to the sourcing FAQ; restaurant gets a confirmation in the app (FAQ 6); stat
 *   label scoped to the restaurant; "set up and tested" not "mapped"; our EDI does NOT go through SPS
 *   (delivery paragraph + FAQ 4). No-EDI-map setup handed to truecommerce (row 9 is now the Order Central
 *   row), supplier EDI handed to truecommerce (coex card 3 is now lot/traceability), records sentence moved
 *   from a coex card into FAQ 4 (card 2 is now MAX, its only mention). Problem card 3 = after-hours EDI vs
 *   voicemail. Testimonial T1 kept (S1), T2 rewritten. Comparison H2 "EDI needs a system. The app needs a
 *   phone." Final H2 off the "Keep X for A" formula. "sps commerce competitor" now lives in the FAQ H2.
 */
module.exports = {
  title: "Not an SPS Commerce Alternative: Keep It, Add Voice Ordering",
  description: "SPS Commerce handles EDI for accounts that require it. Restaurants that phone get an app to say each order and check it. Not an SPS Commerce alternative.",
  related: ["truecommerce-alternative","cin7-alternative","conexiom-alternative"],
  relatedHeading: "More systems distributors keep while restaurants start speaking orders",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An SPS Commerce Alternative: For Non-EDI Accounts</h1>
      <p class="lead mt-16">
        Get the restaurants that never send EDI off the phone and into an app made for ordering. With VoiceOrder Solutions, a chef names today's items in our app, by voice, and corrects any before they reach you. SPS Commerce still runs EDI for the chains and large accounts that require it.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Every item approved by the chef</span>
        <span class="hero-trust-dot"></span>
        <span>EDI partners left as they are</span>
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
      <div class="stat-label">Saved per order compared with taking it by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">When a restaurant can send an order, office open or closed</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors; restaurants need no EDI</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     SPS Commerce runs EDI for the accounts that require it, so five of nine rows go to both columns.
     The four that differ are about the restaurant that sends no EDI.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">EDI Plus Voice</span>
      <h2>SPS Commerce plus VoiceOrder Solutions.<br>EDI needs a system. The app needs a phone.</h2>
      <p class="lead mt-16">
        The restaurants you deliver to get an app from VoiceOrder Solutions for ordering out loud, since most independents have no EDI software and still reach you with calls and texts. Your chains and bigger customers keep sending EDI because they demand it, and SPS Commerce keeps each of those orders in line with that partner's rules. This is not an SPS Commerce alternative: both stay, as separate products.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">SPS Commerce + VoiceOrder Solutions</th>
            <th style="width:30%;">SPS Commerce on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EDI orders, ship notices and invoices with partners that require them</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restaurant with no EDI system sends an order the chef has checked</td>
            <td><span class="check-yes">✓</span></td>
            <td>Phoned, texted or left on voicemail</td>
          </tr>
          <tr>
            <td>Each retailer's EDI rules, already on file for you</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>EDI documents carried into the ERP you already run</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restaurant that once ordered by calling now sends a numbered, timed order</td>
            <td><span class="check-yes">✓</span></td>
            <td>Numbered once your team keys in the call</td>
          </tr>
          <tr>
            <td>Lot-level traceability data shared with trading partners</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restaurant order placed after your desk has gone home</td>
            <td><span class="check-yes">✓</span></td>
            <td>Waits on voicemail until morning</td>
          </tr>
          <tr>
            <td>Testing and certification before a new EDI partner goes live</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders spoken from that restaurant's own guide</td>
            <td><span class="check-yes">✓</span></td>
            <td>Order Central: catalogs and in-aisle scanning for retailers</td>
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
      <span class="eyebrow">Where EDI Stops</span>
      <h2>Why most restaurants never reach your EDI</h2>
      <p class="lead mt-16">
        SPS Commerce links you with the trading partners whose orders must come by EDI, and most independent restaurants are not among them: they send no EDI at all, so they phone, text or leave voicemail. An SPS Commerce alternative from another EDI provider would not change that. When our app emails an order, your staff still enter it, though from a list its chef reviewed.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📋</div>
        <h4>SPS Commerce serves accounts with a rulebook</h4>
        <p class="text-muted mt-12">
          Its Fulfillment page says most retailers require EDI, and that its network already knows each retailer's formats, timelines and packing rules, so a missed one does not turn into a chargeback. A neighborhood restaurant hands you no rulebook. It just calls.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🖥️</div>
        <h4>EDI begins in the customer's own system</h4>
        <p class="text-muted mt-12">
          In SPS Commerce's own explanation, EDI starts when the customer's business system creates a document such as a PO. Most neighborhood restaurants keep no such system, so a call from one gives SPS Commerce nothing to connect to.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4>EDI can come in at any hour</h4>
        <p class="text-muted mt-12">
          A chain's EDI order comes to you via SPS Commerce whenever it is sent, and the acknowledgment, ship notice and invoice follow it. A restaurant calling after your desk closes gets voicemail, and nothing moves until someone plays it back the next day.
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
      <h2>Not an SPS Commerce alternative: what the accounts without EDI get</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>An order from a kitchen that runs no EDI</h3>
          <p class="mt-12 text-muted">
            In our app, the chef presses Push to Speak and names what the kitchen needs. Each spoken item is matched to the items on that restaurant's guide, then shown as a list, so the chef can correct an item or an amount before anything is sent to you.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders can go in at 2 a.m. or on a holiday</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Any iOS or Android phone the chef carries will do</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>If a delivery or a rush pulls the chef away, the order is saved where they stopped</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing leaves the app until the chef approves the list</span>
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
          <h3>A guide for each restaurant, built from what it buys</h3>
          <p class="mt-12 text-muted">
            We build each restaurant's guide from what it usually buys and the prices it pays, so the chef works from familiar items. You keep every restaurant's prices up to date in our admin, the same place you manage its account and its guide. Whether price changes can come over from your ERP in bulk is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only that restaurant's items, not your whole range</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>New items you add appear on the guide for that account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You edit each guide yourself when an account's buying changes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your item numbers on every guide, so the desk knows each one</span>
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
          <h3>Email, the API, or EDI of our own</h3>
          <p class="mt-12 text-muted">
            A finished order goes to your team by email as a PDF, Excel or Word attachment, or as EDI, through our API or into QuickBooks. Our EDI does not pass through SPS Commerce and needs its own way into your ERP. We check in the demo whether your ERP has one; if not, we email you the orders as attachments instead.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Emailed to the rep or the order desk you choose</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Every app order carries its own number and send time</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Any fix the chef made is already in the file</span>
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
          <h3>Stock in view beside the restaurant orders</h3>
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
              <span>Fewer stockout surprises when restaurant orders land</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your item catalog with us updates as stock changes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>We never place orders with your own suppliers</span>
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
      <h2>Getting restaurants ordering beside SPS Commerce</h2>
      <p class="lead mt-16">
        We start from your list of what each restaurant orders. Then we set up the accounts, and each chef installs the app.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send us each restaurant's regular items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An export from your system, often a spreadsheet, is usually all we need: the items every account buys, its prices and the item numbers you use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We open the restaurant accounts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each guide is loaded, the account goes live and the chef downloads the app. Most restaurants send a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders come in the format you chose</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each app order arrives after the chef has gone over it, stamped with when it was sent.
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
      <h2>From distributors who also run EDI</h2>
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
            "Our grocery chains were on EDI for years. Our restaurants still called every morning. Most of those chefs order in the app now."
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
            "We kept SPS Commerce for the customers who insist on EDI. The restaurants now send orders their chefs have gone over."
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
      <span class="eyebrow">EDI Partners, Untouched</span>
      <h2>What stays with SPS Commerce</h2>
      <p class="lead mt-16">
        None of this makes us an alternative to SPS Commerce: the chains and grocers that require EDI keep sending it, and the app serves every restaurant whose order still comes as a call or a text.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Your EDI partners never notice a change</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Acknowledgments, ship notices, invoices and labels for your chains are still handled by SPS Commerce, as are each partner's rules. We touch none of it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔎</div>
        <h4>MAX keeps watching the EDI traffic</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          MAX, SPS Commerce's AI, still watches orders, shipments and invoices for each trading partner and flags what could turn into a chargeback. Restaurant orders sent in the app never pass through that traffic.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🚚</div>
        <h4>Lot traceability stays SPS Commerce's job</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Any lot data SPS Commerce sends for your partners' traceability rules keeps going out the same way. We send restaurant orders only and keep no lot or traceability records.
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
      <h3 style="margin-bottom:10px;">Hear one order from a restaurant that sends no EDI</h3>
      <p class="text-muted" style="font-size:16px;">
        In a short demo, we speak a sample restaurant's order into the app, change an item, submit it and open what your desk would receive. Then we look at which format fits your system.
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
      <h2>What owners weighing an SPS Commerce competitor ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need an SPS Commerce alternative to get restaurants ordering in an app?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. SPS Commerce goes on handling EDI for every partner that asks for it. What we add is aimed at the restaurants on your books that still get in touch by phone or by text: the chef names each item in our app, looks over the list and sends it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than SPS Commerce?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job: letting a restaurant without EDI software send you an order its chef has looked over, with no phone call. Everything EDI does for your chain customers, from ship notices to invoices, belongs to SPS Commerce, so we are not an SPS Commerce alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't SPS Commerce already sell an ordering product?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It has Order Central, built for stores ordering from their suppliers, with digital catalogs and an add-on for scanning and ordering straight from the aisle. Its page speaks to retailers. Ours is for a chef who prefers talking to browsing or scanning, ordering from the guide you prepared for that restaurant. SPS Commerce also sells PDF Order Automation, which moves PDF orders from accounts that do not use EDI into its EDI workflow. A chef's phone call leaves no PDF behind.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Are the two connected, and does my order desk keep typing orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Two separate companies make them, with no link between the two, and each one supports only its own software. Our EDI or API order bypasses SPS Commerce. If your ERP can take it that way, nobody retypes the order; the demo checks whether it can. Otherwise it arrives as an email attachment, and someone on your team enters it. That person skips taking the call, writing it out and repeating it back, since the chef confirmed every item in the app before sending. Whether SPS Commerce's PDF tool could read that attachment is a question to put to them: we have built nothing for it and promise nothing. Calls go on reaching your desk as they do today, and get no number from us. Your ERP holds customers, stock figures and invoices, as now; we keep the restaurant guides and their prices, plus whatever chefs have sent through the app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Why not ask our restaurant accounts to send EDI?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          A large group with its own buying system might. Most small restaurants own nothing that could produce an EDI purchase order, while each new trading partner on SPS Commerce is set up and tested before it goes live. The app asks a restaurant for a phone and a few minutes of the chef's time.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do app orders come with the paperwork an EDI order gets?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. We deliver the order, with an order number and a timestamp, and the restaurant gets a confirmation in the app. Acknowledgments, shipping paperwork and bills come from your own systems, and for EDI accounts from SPS Commerce. The app can still pass on a wrong item if the chef misses it, but the chef reads the list on screen before it goes, rather than hearing it read back over a call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon can we begin, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors can start in 24 to 48 hours, and nothing in SPS Commerce changes. You share each account's usual items, usually as a spreadsheet export, and we load them into our admin and set up each account. The restaurants install our app, and most send in their first order that same day. SPS Commerce publishes its fees for adding trading partners and users; we quote per distributor. An SPS Commerce replacement means moving all your trading partners to another provider, whereas we leave those connections alone.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the SPS Commerce details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We read spscommerce.com on 9 November 2026: the homepage, the Fulfillment, Order Central, MAX, Distribution and Grocery &amp; Food pages, What is EDI, the page defining Fulfillment fees, and its article on automating PDF orders. Facts about the other ordering software came from searching the web that day. If SPS Commerce has changed anything since, tell us so we can fix our copy.
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
  <h2>Restaurants without EDI can still send you an order their chef approved</h2>
  <p>Take twenty minutes to see where a restaurant's app order would land beside the EDI orders that SPS Commerce handles for your chains.</p>

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
        <li><a href="#comparison">SPS Commerce + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-taking-software">Order Taking</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/distribution-automation-software">Distribution Automation</a></li>
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
