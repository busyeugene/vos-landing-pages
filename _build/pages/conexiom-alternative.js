/* Comparison page: Conexiom, and Conexiom with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (order capture; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Conexiom,
 * never its replacement. Table = "Conexiom + VoiceOrder Solutions" vs "Conexiom on its own"; every
 * Conexiom strength is a check mark in both columns. Separate products, no built-in link (FAQ 4).
 * Angle: ORDERS THAT START IN YOUR CODES. Conexiom's work begins after a customer writes an order in
 * its own layout, words and part numbers: Relay reads it, then works out YOUR part numbers, units and
 * prices with rules taught per customer. Its own platform page: "Reading a purchase order is solved.
 * What the order doesn't say is not: your part numbers, your prices or how you stock each item." With
 * VoiceOrder Solutions the chef speaks from a guide built from your item numbers and prices and checks
 * each item, so there is no customer format to map for that account.
 * Distinct from Syspro ("a caller gives the AI nothing written": NOT the lead here, and Relay reads
 * texts anyway), WizCommerce ("whether an interpretation step exists": our app DOES match speech to
 * guide items), REKKI (error rate), Business Central (when the check happens), Brightpearl (accuracy
 * before automation).
 * ⚠ Relay reads "email, PDF, images, spreadsheets, SMS, ecommerce and handwritten notes": never say it
 *   cannot read a chef's text, handwriting or a fax. Speech/calls are NOT on its list (2026-11-09).
 * ⚠ Its FAQ answers "Can Conexiom help with phone orders?" by having customers email instead.
 * ⚠ NEVER imply Conexiom can read our emailed PDF/Excel/Word files, or that the two can be chained.
 * ⚠ Headless Platform (early access) lets the distributor's own apps and AI agents call Conexiom:
 *   not on the page (cut 2026-11-09 as jargon). No third-party voice tool for Conexiom found.
 * ⚠ None of their numbers (accuracy, touchless rates, line items, customers, ERPs, implementation
 *   days, hours saved). Pricing: subscription, quote only, no figure on their site: parity, cost FAQ.
 * ⚠ Units/pack sizes (KB Q14) are never claimed for our guides: item numbers and prices only.
 * Every claim is sourced and dated in _build/research/competitors/conexiom.md.
 * Review 2026-11-09 (wave 3 FIXES3): every OUTPUT claim is scoped to the GUIDE. Whether the emailed,
 *   EDI or API order shows the distributor's item codes is UNCONFIRMED (client question), so the H1 is
 *   "Orders From Your Item List", not "Orders In Your Codes". The typing FAQ says plainly: ask Conexiom
 *   whether your setup can read our emailed file; we built nothing for it; if not, the desk keys it in.
 *   Headless Platform sentence cut (jargon). Never assert the app cannot take off-guide items.
 */
module.exports = {
  title: "Not a Conexiom Alternative: Keep Conexiom, Add Voice Ordering",
  description: "Conexiom reads the POs your customers email. Restaurants that phone can speak orders from a guide in your item codes. Not a Conexiom alternative: keep it.",
  related: ["esker-alternative","sps-commerce-alternative","wizcommerce-alternative"],
  relatedHeading: "Other order tools that stay in place beside the app",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Conexiom Alternative: Orders From Your Catalog</h1>
      <p class="lead mt-16">
        Get orders from the restaurants that still phone, picked from a guide in your own item numbers and prices. With VoiceOrder Solutions, each chef tells our app what the kitchen needs and reviews every item before it is sent. Conexiom keeps turning the POs your other customers email into ERP-ready orders.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Conexiom left as set up</span>
        <span class="hero-trust-dot"></span>
        <span>Guides carry your SKUs</span>
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
      <div class="stat-label">Saved on each order a chef sends in the app, not by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">When a chef who once phoned can send tomorrow's order</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">For most distributors to go live, with Conexiom unchanged</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Conexiom reads documents customers write; most rows are its strengths and go to both
     columns. The three that differ are about the restaurant that phones.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Your Codes From The Start</span>
      <h2>Conexiom reads what customers send.<br>Our app starts each order from your guide.</h2>
      <p class="lead mt-16">
        Any restaurant that orders by calling you gets our app with a guide of your products, so what its chef says is matched to your list. Conexiom is at its best on purchase orders written in each customer's own layout and part numbers, which it matches to yours, and a calling restaurant produces no such document. Keep both: ours is not a Conexiom alternative, and no link between them comes built in.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Conexiom + VoiceOrder Solutions</th>
            <th style="width:30%;">Conexiom on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Emailed PDF and spreadsheet POs converted for your ERP</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restaurant that used to call sends a list built from your guide</td>
            <td><span class="check-yes">✓</span></td>
            <td>Keyed in by your team, unless the customer agrees to email a PO</td>
          </tr>
          <tr>
            <td>A customer's own part numbers matched to your items</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Every restaurant gets a guide of your items at its prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>Customers order from their own documents</td>
          </tr>
          <tr>
            <td>Prices on incoming POs checked against your pricing</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Texts and notes written by hand read into orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Late at night, a chef who would have called still gets an order in</td>
            <td><span class="check-yes">✓</span></td>
            <td>The call waits for someone to answer it</td>
          </tr>
          <tr>
            <td>Problems on an incoming PO flagged in plain words</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Supplier invoices matched to your POs, too</td>
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
      <span class="eyebrow">What A Call Leaves Out</span>
      <h2>What can Conexiom read when a restaurant phones?</h2>
      <p class="lead mt-16">
        Conexiom's work starts with a document a customer writes its own way, and Relay, its order reader, turns it into an order your ERP can take. A restaurant that only phones writes nothing for it to read. An order from our app that reaches you by email is still entered by your team, but each item on it was checked by the chef first.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4>Calls are missing from its list of formats</h4>
        <p class="text-muted mt-12">
          Relay reads email, PDFs, images, spreadsheets, text messages, ecommerce orders and handwritten notes. Speech is not among them. Conexiom's own FAQ answers phone orders by asking that customers email them in.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔤</div>
        <h4>Every customer names items its own way</h4>
        <p class="text-muted mt-12">
          Conexiom's pages say each trading partner has its own layout, part numbering and quirks. Relay matches what each customer writes to your items, using your master data and your rules, and hands your team any it cannot place, with the reason.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧩</div>
        <h4>Conexiom says the hard part is filling in your codes</h4>
        <p class="text-muted mt-12">
          It calls reading a PO a solved problem; what remains, it says, is what the PO leaves out: your part numbers, your prices, how you stock each item. Its rules fill those gaps once the PO is in. A guide in our app has your SKU and that account's price on every item before a word is spoken.
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
      <h2>Not a Conexiom alternative: orders built from your own item list</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Said by the chef, shown as your own products</h3>
          <p class="mt-12 text-muted">
            From the walk-in or the prep table, the chef says what the restaurant needs. The app looks up each item in the guide and puts it on screen, where the chef can change an item or an amount before sending. In place of a call, you get an order the restaurant has looked over.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Items are matched to that restaurant's guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders can go in at 2am, on Sundays and on holidays</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on whatever iPhone or Android phone is in the chef's pocket</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled away mid-order, the chef comes back to it as it was</span>
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
          <h3>A guide for every restaurant, in the codes your warehouse uses</h3>
          <p class="mt-12 text-muted">
            Export each restaurant's usual items and what it pays, and we load them as its guide, each item under the number you already give it. Every guide and its prices are yours to change in our admin, which is also where you manage each account. Whether price changes can come over from your ERP in bulk is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A chef sees what that restaurant buys, not your whole range</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each account orders at the prices you set for it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Add or drop items on a guide yourself in our admin</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setting up needs no login to your ERP</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Keeping each guide current →</a>
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
          <h3>Handed over by email, EDI or API</h3>
          <p class="mt-12 text-muted">
            A finished order goes to you as an email with a PDF, Excel or Word attachment, or through EDI, our API or QuickBooks. Arriving by email, it becomes your team's to enter, from a list somebody at the restaurant has read through. Sent by EDI or through the API, your ERP may take it in without retyping, if it accepts orders that way; a demo answers that.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a rep, or to the inbox the whole desk shares</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>App orders get a number and a send time; a phoned one gets none from us</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, invoicing and the rest stay in your ERP</span>
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
          <h3>Stock levels shown next to incoming restaurant orders</h3>
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
              <span>Fewer stockout surprises at the order desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>We do not count stock, buy it or receive it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts and purchasing stay in your ERP</span>
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
      <h2>From your product codes to a chef's first order, beside Conexiom</h2>
      <p class="lead mt-16">
        It starts from the products and prices on your books today. We load each restaurant, and its chef installs the app.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export your codes and prices</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet out of your ERP is usually all we need: the products each account takes, at its prices, with your item numbers.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We build each guide in your codes</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load its guide and set up the account, then the chef downloads the app. Most restaurants send a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders matched to your guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one holds the items its chef looked over, is stamped with an order number and the time it was sent, and arrives in the format you set up.
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
      <h2>When the order already matches your catalog</h2>
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
            "Nobody here has to work out what 'the usual greens' means anymore. The chef picks it off their own guide and confirms our item before it's sent."
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
            "Relay still reads the POs our bigger accounts email. Nobody had to set up a mapping for any of the restaurants on the app."
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
      <span class="eyebrow">Who Keeps What</span>
      <h2>Not a Conexiom competitor: what it keeps reading, and what we add</h2>
      <p class="lead mt-16">
        Emailed purchase orders still go through Conexiom. Our app is an addition, not an alternative to Conexiom, built for the restaurants that would otherwise pick up the phone.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📨</div>
        <h4>Emailed POs stay with Conexiom</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers whose own purchasing systems produce POs go on emailing them, and Relay goes on loading them into your ERP. For those accounts you need no Conexiom alternative.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💬</div>
        <h4>Texting chefs can go on texting</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Some chefs like to text their order, and they can carry on: if Relay reads those messages today, it keeps doing so. Nobody has to switch; the app is there for the callers.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Your supplier paperwork stays automated</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Conexiom's checks on supplier invoices and vendor acknowledgements are untouched. We only handle restaurant orders, up to the moment they reach you.
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
      <h3 style="margin-bottom:10px;">Watch spoken words turn into items on your guide</h3>
      <p class="text-muted" style="font-size:16px;">
        During a 20-minute demo, our team speaks a typical restaurant order into the app, swaps one product for another, sends it, then opens whatever reaches your end so you see which item details your desk receives. Then we look at how it would get into your ERP alongside Conexiom.
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
      <h2>Questions from teams running Conexiom</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Conexiom alternative for spoken restaurant orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Conexiom goes on reading the POs customers email you, and none of its rules change. VoiceOrder Solutions is for the restaurants that call: the chef names each item aloud in our app, sees each one matched to a product on the guide for that kitchen, and reviews it all before it goes to you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Conexiom?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one thing: getting a restaurant that still calls to send its order already matched to your catalog. Reading POs, invoices and other paperwork in whatever layout it arrives is Conexiom's work, so we work next to it and are not a Conexiom alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Conexiom reads text messages. Why not ask chefs to text?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          A text comes in the chef's own shorthand, such as "romaine, two", so Relay still has to work out which of your products it means. In our app, each spoken item is matched to the restaurant's own guide, and the chef sees which of your products was picked before sending.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it connect to Conexiom, and do we still key orders in by hand?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not directly. They come from two different companies, no link joins them as standard, and each company looks after its own software only. Over EDI or our API, the chef's order can go into your ERP and nobody types it again, if your ERP is set up for it; we check that in a demo. By email, you get it as an attachment. Whether your Conexiom setup can read that file is something to ask Conexiom: we have built nothing for it and make no promise. If it cannot, one of your people keys it in from the list the chef already checked, with no call to take, write down and read back. Your accounts, your stock and your invoices still live in your ERP. We hold the restaurant guides, the prices on them, and copies of what chefs send through the app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Conexiom maps each customer's format. What does adding a restaurant take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Conexiom's FAQ describes mapping each customer's PO format with your customer service team, usually rolling out to a handful of customers first. A new restaurant needs no mapping, because there is no customer format to learn: the guide starts from what you already sell that restaurant, and the chef's spoken order is matched to it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long until we are live, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running in 24 to 48 hours, with no change made in Conexiom. You send us the items each account usually orders, most often as a spreadsheet export, and we load them into our admin and set up every account. Once the restaurants have the app on their phones, most of them order the same day. Conexiom sells by subscription and quotes each business, with no price on its site, and we quote per distributor too. A Conexiom replacement would mean rebuilding every customer's mapping and rules in another reader, a separate job from putting an app in front of the chefs still calling you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does the app get every item right?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not always. It turns the chef's words into items from the guide, and a chef can overlook a wrong one or change their mind once it is sent. The difference is that the person who decided the order reads it on screen before it goes, and each item the app matches comes from that kitchen's guide.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Conexiom details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From conexiom.com, as we read it on 9 November 2026: the homepage, the Platform, Relay, Headless Platform and Solutions pages, its FAQ and About pages, and its glossary pages on line item capture, price checks and unit conversion. Searching the web that day turned up no voice or call ordering tool for Conexiom. If any of it has moved on, write to us and we will correct the page.
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
  <h2>Restaurant orders built on your guide, beside the POs Conexiom reads</h2>
  <p>It takes twenty minutes: see how a guide is set up from your items, and what a chef does with it.</p>

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
        <li><a href="#comparison">Conexiom + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-taking-software">Order Taking</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/distribution-automation-software">Distribution Automation</a></li>
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
