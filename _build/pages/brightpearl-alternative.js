/* Comparison page: Brightpearl, and Brightpearl with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 2 (inventory systems; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Brightpearl,
 * never its replacement. Table = "Brightpearl + VoiceOrder Solutions" vs "Brightpearl on its own";
 * every Brightpearl strength is a check mark in both columns. They are separate products with no
 * built-in link (FAQ 6); whether a Brightpearl setup takes our EDI or API output is a demo question.
 * Angle, distinct from the ERP pages (Syspro: "AI needs a written order"; NetSuite: "store add-on";
 * Business Central: "when the check happens"; Cin7: "the channel it does not connect"): WHO ENTERS
 * THE ORDER. Context: orders from connected webstores, marketplaces and EDI partners flow into
 * Brightpearl and its Automation Engine routes, allocates and invoices them.
 * Angle moved 2026-11-09 (Cin7 keeps "the one channel it does not connect"): Brightpearl ALREADY
 * takes phone orders (its wholesale page: "whether you take orders via phone, email or your
 * webstore"), but someone on your team answers and types each one. VoiceOrder Solutions changes WHO
 * writes the order: the chef, checking each line. Second strand (hero, table row 1, coexistence
 * card 3): Brightpearl keeps one stock count across retail, web and wholesale; we only touch
 * restaurant orders, so those channels stay as they are.
 * ⚠ Brightpearl HOLDS phone orders once taken: never "it cannot take phone orders".
 * ⚠ Online ordering exists through partners (a separate B2B website on an ecommerce platform,
 *   customer portals and ordering apps that create Brightpearl sales orders): ✓ both columns, FAQ 4.
 *   Never name the platform (claims.js bans it).
 * ⚠ EDI orders from trading partners download automatically (partner app): ✓ both columns.
 * ⚠ No voice ordering tool for Brightpearl found; AI tools for order status and API-built ordering
 *   tools exist: FAQ 4 concedes "not the only add-on". Nothing is said about Brightpearl's own AI.
 * ⚠ Never "not for food" or "not for distributors": it lists Food & Specialist Retail and a Wholesale
 *   & B2B page. FAQ 5 says honestly who its pages speak to.
 * ⚠ Their numbers stay off (120-day average go-live, automation hours and percentages, customer
 *   counts). No pricing row; "unlimited users" conceded in the cost FAQ only.
 * Every claim is sourced and dated in _build/research/competitors/brightpearl.md.
 *
 * Review 2026-11-09 (wave-2 FIXES2, T1-T7 + page section): RE-ANGLED to ACCURACY BEFORE AUTOMATION.
 * Supersedes "who enters the order" above (Unleashed owns "who types"; Business Central owns "when
 * the check happens"; Cin7 owns "channels"). Brightpearl's Automation Engine ("Automate the ordinary.
 * Catch the exceptional.") routes, reserves stock for and invoices an order under the rules you set;
 * a wrong item typed from a call looks ordinary, so it runs straight through unless a rule flags it.
 * With VoiceOrder Solutions the chef SAYS the order, sees the list and fixes it before sending.
 * Never "the chef writes"; never imply an app order cannot be wrong (FAQ 5 says it can). The "one
 * stock count across retail, web and wholesale" fact now lives in table row 1 only. Retail-ERP FAQ
 * cut; "unlimited users" dropped from the cost FAQ; purchasing-suggestions row swapped for a VOS
 * row on mix-ups (purchasing kept as an inventory bullet).
 */
module.exports = {
  title: "Not a Brightpearl Alternative: Keep It, Add Voice Ordering",
  description: "Brightpearl's rules act on the order they are given. Let chefs speak each order into an app and fix a wrong item first. Not a Brightpearl alternative: keep it.",
  related: ["netsuite-alternative","orderease-alternative","odoo-alternative"],
  relatedHeading: "Other systems that keep running beside us",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Brightpearl Alternative: Fix Mistakes Before Automation</h1>
      <p class="lead mt-16">
        Stop a wrong item before your automation sends it on to picking and invoicing. With VoiceOrder Solutions, each chef speaks into our app, then reads the list and changes anything that is off before sending. Brightpearl goes on handling your stock, pricing and automation.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Comparison</a>
      </div>

      <div class="hero-trust">
        <span>No change inside Brightpearl</span>
        <span class="hero-trust-dot"></span>
        <span>The chef checks each item before sending</span>
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
      <div class="stat-label">Saved per order sent in the app instead of by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">When kitchens can send an order, staffed or not</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors, Brightpearl left as is</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Brightpearl is a full stock, order and accounting system, so seven of nine rows go to both
     columns. The two that differ are about the kitchen that phones.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Accuracy Before Automation</span>
      <h2>Brightpearl plus VoiceOrder Solutions.<br>Your rules get an order the chef went over.</h2>
      <p class="lead mt-16">
        A product misheard on a call, then typed in, looks like any other order, so your system can route, reserve stock for and invoice it under the rules you set. When the chef orders in the app, every item is on their own screen to check before it goes. This is not a Brightpearl alternative: you keep both, and the two are not linked.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Brightpearl + VoiceOrder Solutions</th>
            <th style="width:30%;">Brightpearl on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A single stock figure for stores, online sales and wholesale</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who phones today can speak instead and see each item</td>
            <td><span class="check-yes">✓</span></td>
            <td>Heard on a call and typed in by your team</td>
          </tr>
          <tr>
            <td>Price lists by account, account group or sales rep</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Automation rules for routing, stock and accounting</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each kitchen's app order comes with a number and a send time</td>
            <td><span class="check-yes">✓</span></td>
            <td>Numbered once your team enters it</td>
          </tr>
          <tr>
            <td>Online ordering through a partner webstore or portal</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders from EDI trading partners download on their own</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who would phone can still order after you close</td>
            <td><span class="check-yes">✓</span></td>
            <td>Left as a voicemail until someone is in</td>
          </tr>
          <tr>
            <td>Barcode picking with lot and expiry tracking</td>
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
      <h2>When food distributors weigh a Brightpearl competitor</h2>
      <p class="lead mt-16">
        Brightpearl's automation acts on whatever order it is given, so swapping it for a Brightpearl alternative would not fix an item misheard on a call. An order from our app that reaches you by email is still typed in by someone on your team, but from items the chef has gone over. Sent through EDI or our API, it can load on its own if your Brightpearl setup accepts it, and that is something we check with you in the demo.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4>Phone orders go in once your team types them</h4>
        <p class="text-muted mt-12">
          Brightpearl's wholesale page treats a call-in order like one from email or a webstore: once it is taken, order details and inventory update in one place. For a call, taking it means someone on your team listens and keys in every item.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">👂</div>
        <h4>The restaurant never sees its order before it is entered</h4>
        <p class="text-muted mt-12">
          The chef knows what the kitchen is short of, but what got typed is checked, if at all, at your desk. If an item was misheard, nobody at the restaurant saw it before it was entered.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⚙️</div>
        <h4>To the rules, a mistake looks ordinary</h4>
        <p class="text-muted mt-12">
          Brightpearl's Automation Engine promises to automate the ordinary and catch the exceptional. A mistyped item seldom looks exceptional: it reserves stock, heads to picking and reaches the invoice like a correct one, unless a rule you wrote catches it.
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
      <h2>Not a Brightpearl alternative: what changes before your rules run</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The chef sees every item before Brightpearl does</h3>
          <p class="mt-12 text-muted">
            Standing at the shelf, the chef lists what the kitchen needs. Our app matches what was said to the items in that restaurant's guide, then shows the list so the chef can change an item or amount right there. Your team gets a list in place of a call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing is sent until the chef has seen each item</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Late-night and holiday orders go through too</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on any iOS or Android phone the chef carries</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>If service interrupts, the order picks up where the chef left off</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How kitchens send orders →</a>
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
          <h3>Guides that keep each restaurant to its usual items</h3>
          <p class="mt-12 text-muted">
            Send us a spreadsheet of what each restaurant orders and pays. We build its guide using your own item numbers and its usual prices. Brightpearl still holds the full catalog and its price lists. Whether guide prices could update from Brightpearl is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A restaurant sees what it normally buys, not your whole range</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You update each account's prices whenever they change</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A guide you edit at noon is the list the chef works from that evening</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup asks for an export, not a Brightpearl login</span>
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
          <h3>Sent in a form your desk can use</h3>
          <p class="mt-12 text-muted">
            A finished order leaves by email with a PDF, Excel or Word attachment, or through EDI, our API or into QuickBooks. A QuickBooks delivery goes to your books, not into Brightpearl. Sent by EDI or the API, it can go straight into Brightpearl if your setup is built to take it, and the demo shows whether yours is. Either way, the items in it are the ones the chef approved.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a single rep or a team inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The chef's corrections are already in the file you get</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking and dispatch stay the way they run today</span>
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
          <h3>Stock seen next to incoming orders</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts, lots and expiry dates are still kept by Brightpearl</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for your inside team</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Purchasing suggestions still come from Brightpearl</span>
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
      <h2>How kitchens start ordering beside Brightpearl</h2>
      <p class="lead mt-16">
        Your team pulls one export. We set up the accounts, and the kitchens install the app.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Pull one export</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet from Brightpearl is usually all we need: each account's regular items and prices, under your codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We load each kitchen</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Its guide goes in, the account opens and the chef downloads the app. Most kitchens have a first order in the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Your rules start from the chef's list</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders from the app were looked over by the chef and carry their own number and send time, in whichever format you set.
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
      <h2>When the chef reviews every item up front</h2>
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
            "A misheard item used to land in Brightpearl and get picked before anyone noticed. Those chefs order in the app now, and the slip-ups get caught at their end."
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
            "Our automation was never the problem. The orders we typed from calls were. Those chefs send their own now."
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
      <span class="eyebrow">Before Send, After Send</span>
      <h2>What Brightpearl keeps, and what we add</h2>
      <p class="lead mt-16">
        This is not an alternative to Brightpearl: we only handle each restaurant's order until it leaves the chef's phone, and your rules take it from there.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Brightpearl keeps the stock and the books</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers, stock, purchasing and invoices stay in Brightpearl. On our side sit each kitchen's guide and its prices, which you keep current in the VoiceOrder Solutions admin platform, plus every order made through the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Leave webstore and EDI accounts as they are</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts ordering through a B2B website or by EDI already reach Brightpearl with nobody typing, so keep them on that. The app is for the ones that phone instead. Calls to your office still get no order number from us; orders from the app always carry one.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Your Automation Engine rules stay as you wrote them</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Nothing in your workflows changes. Once our order is in Brightpearl, whether it came by EDI, through the API or was keyed in from the emailed file, your rules route and invoice it as usual.
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
      <h3 style="margin-bottom:10px;">Watch a mistake get fixed before it ever reaches Brightpearl</h3>
      <p class="text-muted" style="font-size:16px;">
        In 20 minutes we say one order into the app, swap a misheard product for the right one, press send and show what your desk would receive. Then ask how it would fit beside the way you run Brightpearl.
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
      <h2>Questions we hear from Brightpearl users</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Would a Brightpearl alternative be needed for spoken orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Nothing in Brightpearl changes: not the stock, the price lists or the Automation Engine. What changes is what those rules receive: for a restaurant that phones today, the chef now says its order in the app, looks down the list and fixes any mistake first, rather than your team typing it from a call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Brightpearl?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For one task, yes: letting the chef who decided an order see and fix each item before your rules act on it. Everything after that, from picking to the invoice, is Brightpearl's work, so we sit next to it and are not a Brightpearl alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Brightpearl's automation catches exceptions. Won't it spot a mistake?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Its rules can flag the orders you define, such as risky or high-value ones, so a rule can catch some mistakes, like an amount far above normal. An item that was misheard usually looks ordinary: a product that account buys anyway, in a normal amount. Our app puts each item in front of the chef before sending, so the one who knows the kitchen's needs gets a chance to catch it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Couldn't our restaurant customers just order on a B2B webstore?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Some will. Brightpearl can link to a separate B2B website built on an ecommerce platform, and partners sell portals and ordering apps that create Brightpearl sales orders. Other companies build ordering and AI tools on its API too, so ours is not the only way to add ordering. We built it for the chef who picks up the phone today: they speak the items, see the list and fix a wrong one before it reaches you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can the app still send a wrong order?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. The app turns speech into items from the guide, and a chef can miss a mistake or change their mind after sending. What changes is that the chef, who knows the kitchen, reads down the order before it goes, instead of hearing it read back over a call, if it is read back at all.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is it linked to Brightpearl, and will my desk still type orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Each comes from its own company, with no built-in link between them, and each supports its own software only. If Brightpearl is set up to accept orders through EDI or the API, ours can go in without anyone retyping them; the demo is where we find out. By email, the attachment shows each item the chef checked, and someone on your side enters it from that instead of from a call or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast is setup, and how is it priced?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are ready in 24 to 48 hours, and nobody has to change a thing in Brightpearl. Brightpearl quotes each business rather than listing prices, and we quote per distributor too. A Brightpearl replacement would shift your stock, warehouse and books to a new system, while adding us leaves every workflow you built where it is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Brightpearl details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From brightpearl.com (Brightpearl by Sage) as it stood on 9 November 2026: the homepage, the wholesale, automation, inventory, warehouse, pricing, implementation and Why Brightpearl pages, one customer story, and the app store page for its EDI connection. The ordering tools came from a search for Brightpearl add-ons. Seen something here that has since changed? Let us know and we will update it.
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
  <h2>Keep Brightpearl. Let chefs fix their own orders before it acts on them.</h2>
  <p>Give us twenty minutes to talk one order through, change a product on screen and show the file your desk would get.</p>

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
        <li><a href="#comparison">Brightpearl + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/inventory-tracking-software">Inventory Tracking</a></li>
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
