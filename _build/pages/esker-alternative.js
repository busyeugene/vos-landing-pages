/* Comparison page: Esker, and Esker with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (webshops / EDI / order capture; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Esker, never
 * its replacement. Table = "Esker + VoiceOrder Solutions" vs "Esker on its own"; every Esker strength
 * is a check mark in both columns. Separate products with no built-in link (FAQ 4).
 * Angle: WHERE RESTAURANT ORDERS START. Esker sells order-to-cash to "the Office of the CFO" and says
 * it protects cash "upstream", from the moment an order reaches the shared inbox (email, fax, EDI,
 * portal, punchout, mobile) through credit, invoices, claims and collections. Its capture page says
 * to let customers order "any way they want" and read what they send. A restaurant's order starts
 * further upstream: at the chef's shelf, and it often travels as a call or a text to a rep's phone,
 * which never reaches the inbox. We add that first step; Esker keeps everything after it.
 * Not Syspro's "its AI needs a written order" (FAQ 3 touches it, never the lead), not Business
 * Central's "when the check happens", not Brightpearl's "accuracy before automation", not Conexiom's
 * "mapping the customer's codes".
 * ⚠ Esker HAS a 24/7 portal with a customer AI agent, a webshop, punchout and a mobile app that
 *   customers and reps order in: check marks in both columns, FAQ 5. Never "no after-hours ordering".
 * ⚠ Esker reads FAX, email, PDF and EDI orders. NEVER claim or imply it can read our emailed files,
 *   or that the two can be chained (FAQ 4 says to plan on your team entering them).
 * ⚠ Phone is not on Esker's published channel list: say exactly that, never "cannot take calls".
 * ⚠ No voice ordering tool for Esker was found (two searches), so no concession line; never "only".
 * ⚠ Their numbers stay off (customer counts, automation and error percentages, DSO/ROI). No price
 *   published by either side; never name the two ERPs Esker ships connectors for (claims.js).
 * Every claim is sourced and dated in _build/research/competitors/esker.md.
 * Review 2026-11-09 (wave 3, FIXES3): RE-ANGLED onto calls and texts to reps (VERIFY3: H1 no longer
 * says "outside your inbox", since our emailed orders land there); the "step before" coex lead and the
 * channel-list card are gone (brightpearl / conexiom own them). Esker Anywhere lets a rep key a
 * text in (card 2, row 5). Credit checks (FAQ 6, VERIFY3 D10): it depends where they run; the
 * question goes to Esker; never "skips those checks" or "apply as usual". Whether Esker can read our
 * emailed file is a question for Esker; we built nothing for it (FAQ 4). The records fact lives in
 * FAQ 4; coex cards are the Esker screen, trade customers, deductions. No "upstream" in our voice.
 */
module.exports = {
  title: "Not an Esker Alternative: Keep Esker, Add Voice Ordering",
  description: "Esker reads what lands in your inbox. Chefs who would phone a rep can say each order in an app and check it first. Keep Esker: no Esker alternative needed.",
  related: ["conexiom-alternative","truecommerce-alternative","rekki-alternative"],
  relatedHeading: "Other order-reading tools that can stay beside us",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An Esker Alternative: When Orders Start As Calls</h1>
      <p class="lead mt-16">
        Bring in the restaurant orders that now start as a call to your desk or a chef's text to a rep. With VoiceOrder Solutions, those chefs speak each item into our app and look over the list before sending. Esker keeps its work from your inbox onward.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Esker left exactly as is</span>
        <span class="hero-trust-dot"></span>
        <span>For orders phoned or texted in today</span>
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
      <div class="stat-label">Saved on each spoken order versus taking it by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">When chefs can order, whether your desk is open or not</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">To get most distributors live, with Esker as it was</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Esker is a broad order-to-cash suite, so six of nine rows go to both columns. The three that
     differ are about the restaurant order before it reaches the inbox.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Phone And Text Orders</span>
      <h2>Esker plus VoiceOrder Solutions.<br>Your desk gets a list, not a call to write up.</h2>
      <p class="lead mt-16">
        When a restaurant phones your desk or texts a rep, someone has to write the order up first; on our app, chefs name what they need out loud and go over the result before it is sent. Esker picks an order up once it lands: it reads and checks emailed, faxed, EDI and portal orders on their way into your ERP. This is not an Esker alternative: you keep both, and each runs on its own.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Esker + VoiceOrder Solutions</th>
            <th style="width:30%;">Esker on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reads emailed, faxed and PDF orders, then checks them against your ERP</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who calls today can say the order and see every item</td>
            <td><span class="check-yes">✓</span></td>
            <td>Taken on the phone and typed in by your team</td>
          </tr>
          <tr>
            <td>A 24/7 ordering portal with an AI assistant for customers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>EDI and non-EDI orders handled on one screen</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An order a chef would have texted to a rep arrives as a checked list</td>
            <td><span class="check-yes">✓</span></td>
            <td>Forwarded to the inbox or retyped by the rep</td>
          </tr>
          <tr>
            <td>Credit checks, invoice delivery, payments and collections</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each restaurant orders from a guide of its usual items</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Tracked conversations to clear up an order with the customer</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Claims and deductions worked in one place</td>
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
      <span class="eyebrow">Calls And Texts</span>
      <h2>Which orders reach Esker only once written up</h2>
      <p class="lead mt-16">
        Esker covers an order from the moment it reaches you to the day it is paid. A chef's call, or a message left for a rep, leaves Esker with nothing until someone puts it in writing, and an Esker alternative that reads orders would wait for the same written copy. An order we email you gets keyed in by your team, yet the chef signed off on every item before it went.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4>Esker's order checks begin at your inbox</h4>
        <p class="text-muted mt-12">
          Esker says it protects your cash by checking orders and credit before invoicing begins. That work starts once an order is in your inbox or portal. Those checks compare what arrives with your ERP. They cannot tell what a chef meant on a call.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📱</div>
        <h4>A text to a rep starts outside Esker</h4>
        <p class="text-muted mt-12">
          Esker's AI sorts what lands in your customer service inbox. A late-night message a chef leaves on a rep's phone, typed or spoken, gets into Esker only when the rep forwards it or keys it into the Esker Anywhere app.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">💵</div>
        <h4>Your invoices start from the order someone typed in</h4>
        <p class="text-muted mt-12">
          Esker's invoice delivery and collections work from the order in your ERP. For a restaurant that phoned, that order began as notes taken during the call. From our app, it begins as a list the kitchen has gone over.
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
      <h2>Not an Esker alternative: what restaurants get instead of the phone</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The order starts at the chef's shelf</h3>
          <p class="mt-12 text-muted">
            The chef walks the shelves and says what the kitchen needs. Our app matches each spoken item to the guide for that account and shows the list, so the chef can change an item or amount before sending. What reaches your desk is a finished list.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each item is shown to the chef before it is sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders go in at night, on weekends and on holidays</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the iOS or Android phone the chef already has</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>If the chef gets called away, the order waits where they stopped</span>
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
          <h3>A guide of each restaurant's usual items</h3>
          <p class="mt-12 text-muted">
            Send us what each account usually buys, with prices, and we build that restaurant's guide under your own item codes. You update each account's guide and prices in our admin platform, where you also manage the accounts. Whether price changes can come over from your ERP in bulk is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A chef sees what that restaurant orders, not your whole range</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Add or drop an item for one account whenever its needs change</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Built on the item codes your ERP already uses</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setting up needs an export, not a login to Esker</span>
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
          <h3>Sent as a file, or by EDI or API if your ERP takes it</h3>
          <p class="mt-12 text-muted">
            A finished order leaves as an email attachment, into QuickBooks, by EDI or through our API. Whether your ERP can take the last two as they arrive is a question we answer in the demo. An emailed order is entered by your team, but every item on it was approved by the chef first.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to one rep or to your order desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Whatever the chef changed is already in the file</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each app order carries a number and send time; a call gets neither from us</span>
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
          <h3>Stock in view beside incoming orders</h3>
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
              <span>Fewer stockout surprises for the people taking orders</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts and receiving stay in your ERP</span>
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
      <h2>Adding restaurant ordering beside Esker</h2>
      <p class="lead mt-16">
        You send a list of what each restaurant buys. We set up the accounts, and each chef puts the app on their phone.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send each account's usual items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An export from your ERP, with prices and your codes, is usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Chefs get the app</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load each guide and set up the account. The chef downloads the app, and most restaurants send a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders arrive in the format you picked</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each was looked over by the chef before sending and arrives numbered and time-stamped.
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
      <h2>When chefs place their own orders</h2>
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
            "Esker reads what comes into our inbox. Our restaurant orders came by phone instead. Now the chef sends a list they went over first."
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
            "Esker still does our credit and collections. For restaurant accounts, the order behind each invoice now starts with the chef's own list."
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
      <span class="eyebrow">Before And After The Inbox</span>
      <h2>What Esker keeps, and why we are not an Esker competitor</h2>
      <p class="lead mt-16">
        Think of us as an addition, not an alternative to Esker. Ours are the orders that used to come as a call or a message to a rep. Esker keeps everything it handles today, and once our order is in your ERP, invoicing and collections handle it like any other.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Your desk keeps its Esker screen</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever arrives by email, fax, EDI or portal keeps landing on the one Esker screen your desk staff use. Ours go to whichever address or system you choose, by email, EDI or the API, and nothing in Esker has to change for them.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📨</div>
        <h4>Trade customers keep sending purchase orders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts that email, fax or send EDI orders, or use your portal, can carry on exactly as now. The app is for the restaurants where a chef still phones the order to a rep or texts it. 
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Deductions and claims stay in Esker</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          When a customer pays short or files a claim, your people still work it in Esker, as now. Our part ends once the chef's order is with you.
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
      <h3 style="margin-bottom:10px;">Watch a restaurant order begin in the app, not on a call</h3>
      <p class="text-muted" style="font-size:16px;">
        During the demo, one of us reads out a sample restaurant order, changes one product, sends it and opens the copy that would land at your desk. Then we show the way it would reach your ERP, while Esker stays as it is.
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
      <h2>What distributors using Esker ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need an Esker alternative to add spoken orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Esker carries on with whatever arrives in your inbox: capturing and checking it, then the credit checks and cash collection that follow. What we add happens before an order gets to Esker: for each restaurant you move off the phone, its chef names the items aloud in our app and checks the list before it goes.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Esker?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job: getting a restaurant's order from the chef to you with nobody on the phone, looked over by whoever knows what the kitchen is low on. Esker covers far more ground than we do, from capture to cash, so we work next to it rather than as an Esker alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Esker's capture page is written for customers who send orders any way they like. Why change how restaurants order?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Its idea is to let customers send orders as they like, then read them as they come in. It suits trade customers who email or fax their own order forms. Phoned orders give Esker nothing to read: someone on your side writes them down first. Our app changes only that habit, and only for the restaurants you put on it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is the app linked to Esker, and will our order desk still have to type orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No link is built in: they come from separate companies, and neither supports the other's software. Over EDI or our API, if your ERP accepts orders that way, nobody retypes them; we confirm that in the demo. By email, you get a PDF, Excel or Word file. Esker is built to read emailed orders, so ask Esker whether your setup can handle ours: we have not built anything for it, so we promise nothing. If it cannot, your staff type the file in. Even so, nobody has to pick up a call, jot it down and repeat it back, because the chef cleared each item before it was sent. A chef can still miss a mistake or change their mind afterwards, so an order can still be wrong. Your ERP holds accounts, invoices and stock on file; we hold a guide for each restaurant with its prices, and a copy of the orders chefs send in the app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Esker already has a customer portal with an AI agent. Isn't that enough?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For customers who will log in and type, it may be. Esker's portal takes orders at any hour, and its AI agent helps customers find products and order there, so keep it for them. We built our app for the chef who would rather pick up the phone: they speak the items, see the list and fix a wrong one before sending.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Esker runs credit checks before we invoice. Do app orders get them too?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That depends on where your credit checks run and how our order gets into your ERP. Ask Esker which of its checks would apply to an order your people type into the ERP, or to one arriving by EDI or the API. Nothing we offer sends our orders through Esker. Once it sits in your ERP as an order, billing, collections and payments that run from it treat it like any other.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon could we be live, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup takes 24 to 48 hours for most distributors, with no changes made to Esker. You share what each restaurant usually orders, often as a spreadsheet from your ERP. We load those lists, set each restaurant up, and its chef installs our app; most are ordering the same day. Esker gives each customer a quote rather than a public price, which is how we price for distributors as well. An Esker replacement means moving order capture, billing and collections onto new software; adding our ordering app next to Esker leaves that work where it is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Esker details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From esker.com as it was on 9 November 2026: the homepage, its pages on order management, order data capture, AI agents, deductions, industries and fax, its overview of the order-to-cash suite, the solution summary for order management, and two food customer stories (Suntory Beverage &amp; Food Spain and Paulig). We also searched for voice or phone ordering tools made for Esker and found none. Seen something that has changed? Tell us and we will fix it.
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
  <h2>Esker reads the orders that reach you. Chefs send the ones that used to be calls.</h2>
  <p>Twenty minutes is enough to follow an order that would have been a call until it lands with your team, and to see how it could get into your ERP.</p>

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
        <li><a href="#comparison">Esker + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-tracking-software">Order Tracking</a></li>
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
