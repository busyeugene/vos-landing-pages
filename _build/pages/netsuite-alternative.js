/* Comparison page: NetSuite, and NetSuite with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 pilot (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside NetSuite,
 * never its replacement. Table = "NetSuite + VoiceOrder Solutions" vs "NetSuite on its own"; every
 * NetSuite strength is a tick in both columns. The two do NOT connect (FAQ 5); whether a NetSuite
 * account takes our formats in directly is a demo question, never a claim (named-integration ban,
 * and the client does not know of any NetSuite connection: Eugene, 2026-11-09).
 * Angle, distinct from NECS Entree (the other ERP page, which argues "typed vs spoken, inside vs
 * beside"): NetSuite is where the order ENDS UP; VoiceOrder Solutions changes where it STARTS. The
 * order begins as a call or a text that somebody keys in; NetSuite's own answers to that are a B2B
 * web store (typed, an add-on module) and an AI assistant that works for STAFF inside the ERP.
 * ⚠ Never write "Oracle": claims.js bans it (named integration), so the assistant is "NetSuite's AI
 *   assistant", not its product name.
 * ⚠ Partners already sell voice tools for NetSuite (rep-side, or voice notes turned into sales
 *   orders). FAQ 4 concedes it without naming them; never "the only voice option for NetSuite".
 * ⚠ NetSuite does voice PICKING in the warehouse (food and beverage page). The table concedes it.
 * ⚠ NetSuite serves small, midsize and enterprise: never "too big for you" or "enterprise-only".
 * They publish no prices (licence = platform + modules + users, plus an implementation fee) and no
 * US go-live figure, so neither is used as an argument. The India page's "100 days" stays off.
 * Every claim is sourced and dated in _build/research/competitors/netsuite.md.
 */
module.exports = {
  title: "Not a NetSuite Alternative: Keep NetSuite, Add Voice Ordering",
  description: 'NetSuite stays your system of record. Your accounts speak each order into an app and check every line first: a NetSuite alternative that changes one step.',
  related: ["necs-entree-alternative","wizcommerce-alternative","orderease-alternative"],
  relatedHeading: "More ERPs and order tools you keep as they are",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A NetSuite Alternative: Change Where Orders Start</h1>
      <p class="lead mt-16">
        Let kitchens send finished orders instead of calling them in. With VoiceOrder Solutions, a kitchen talks its order into our app and looks over each line before it reaches you. NetSuite keeps its place as the record.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>NetSuite stays the record</span>
        <span class="hero-trust-dot"></span>
        <span>Orders arrive checked</span>
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
      <div class="stat-label">Saved per order once a kitchen stops phoning</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Is when kitchens can send the order</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Gets most distributors live</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     NetSuite is a full ERP and takes six of nine rows in both columns. Only the
     three rows about how an order begins differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Keep, Then Add</span>
      <h2>NetSuite plus VoiceOrder Solutions.<br>Your books stay in NetSuite.</h2>
      <p class="lead mt-16">
        Kitchens get a quicker route for their orders, and nothing else moves. NetSuite keeps the money, the stock and the warehouse, so those rows tick on both sides. A NetSuite alternative usually means choosing a new ERP, which this is not. Read the highlighted column as your business running both; the two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">NetSuite + VoiceOrder Solutions</th>
            <th style="width:30%;">NetSuite on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accounting, receivables and multi-entity finance</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens order by talking, then confirm each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed into their online store</td>
          </tr>
          <tr>
            <td>Lot tracing, catch weight and recalls</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Accounts who used to call send a numbered order</td>
            <td><span class="check-yes">✓</span></td>
            <td>The call is keyed in by your team</td>
          </tr>
          <tr>
            <td>Online reordering from past purchases</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Demand planning and replenishment rules</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Set up from an item export, with nothing installed</td>
            <td><span class="check-yes">✓</span></td>
            <td>Online ordering needs their store add-on</td>
          </tr>
          <tr>
            <td>Warehouse picking, voice picking included</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Per-customer catalogs and negotiated prices</td>
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
      <span class="eyebrow">Why Teams Compare</span>
      <h2>Why distributors look up a NetSuite competitor</h2>
      <p class="lead mt-16">
        Most distributors who search for a NetSuite alternative are not unhappy with the ERP. The trouble sits upstream, in the way an order gets to you before NetSuite ever sees it. Three situations come up, and only the third is about leaving.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Each sales order starts as a call</h4>
        <p class="text-muted mt-12">
          NetSuite is strong at everything after a sales order exists. Before that, a chef calls, texts or leaves a voicemail, and somebody at your desk types it all into NetSuite by hand.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>Online ordering suits some accounts</h4>
        <p class="text-muted mt-12">
          NetSuite sells its own online store for trade buyers, and it works well for kitchens willing to log in. The ones that never do keep ringing your office.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🏗️</div>
        <h4>A NetSuite replacement is an ERP project</h4>
        <p class="text-muted mt-12">
          Leaving NetSuite means your finance, stock and warehouse all move at once. That is a full selection process with its own consultants, and it is not what we sell. Better you hear it from us before booking a demo.
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
      <h2>What this NetSuite alternative adds, and what it leaves to NetSuite</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The kitchen says it, then checks the lines</h3>
          <p class="mt-12 text-muted">
            A chef walks the cooler and says what is short. The app lays it out as lines from that kitchen's own guide, they correct anything off, and they send it. No login to a store, no search box, no call to your office.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The kitchen's buyer reviews each line before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Takes an order at 2 a.m. as readily as at noon</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the iOS or Android phone they already carry</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Called away mid-order? The app keeps it until they return</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How order capture works →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Push to Speak,<br>then the line-by-line<br>review screen
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Order Guides</span>
          <h3>Each account's guide, taken from an export</h3>
          <p class="mt-12 text-muted">
            Send us a spreadsheet of what each account buys. We load those items under your item codes at the price you set for that account. The master list lives in NetSuite; we only hold what the kitchen orders from.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A kitchen sees only its own lines</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You decide prices and what goes in each guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>One edit to a guide carries into every order after it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No SuiteApp, script or new NetSuite module</span>
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
          <h3>Sent the way your office already works</h3>
          <p class="mt-12 text-muted">
            A finished order goes out as an email with a PDF, Excel or Word file, or travels over the API, over EDI, or into QuickBooks. You pick the route, and a demo covers how each would reach your NetSuite setup.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to a rep or to a shared orders inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI, the API or QuickBooks, nobody on your team retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fulfillment, invoicing and delivery carry on as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing has to be switched off to start</span>
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
          <h3>Stock levels beside the orders coming in</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity, and the catalog updates as stock changes. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Covers slow lines as well as fast ones</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises when a big order lands late</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lots, counts and replenishment remain NetSuite's job</span>
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
      <h2>Three steps, with NetSuite left as it is</h2>
      <p class="lead mt-16">
        A spreadsheet from you, account setup from us, then orders from your kitchens.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Pull an item list out of NetSuite</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A saved search exported to a spreadsheet is enough. It gives us each account's items and prices under your own codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Accounts get their guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We build each guide and open the account, and the kitchen installs the app. Most place a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Approved orders reach your desk</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each order arrives already checked by the customer, numbered and timed, in the format you chose.
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
      <h2>What changes first at the order desk</h2>
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
            "The morning pile of voicemails got a lot shorter. Our ERP did not change at all, which was the point."
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
            "A few of our kitchens never used our online ordering. They will talk into a phone, though, and they check the list before it comes to us."
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
      <span class="eyebrow">Side By Side</span>
      <h2>How NetSuite and VoiceOrder Solutions split the work</h2>
      <p class="lead mt-16">
        This is not an alternative to NetSuite. It is the step where a kitchen places its order, and NetSuite carries on with everything that follows.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>NetSuite keeps every record</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers, prices, stock and invoices are all held by NetSuite. We pass the order across once it is approved, and never become a second place to maintain them.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Accounts on NetSuite's online ordering carry on</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If your accounts already order through NetSuite online, nothing about that changes. Our app is meant for the kitchens that keep phoning. Phone orders you still take get no number from us; only what is sent in the app does.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🤖</div>
        <h4>Its AI serves your staff; ours starts with the kitchen</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          NetSuite's AI assistant helps your team search records and take actions inside the ERP. We sit at the other end, where a kitchen builds its order. Different jobs, so there is nothing to choose between.
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
      <h3 style="margin-bottom:10px;">Hear a kitchen speak its order, then see how it would reach NetSuite</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes: a buyer says an order, checks it and sends it, and we walk you through how it would arrive at your end.
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
      <h2>What NetSuite users ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a NetSuite alternative to take voice orders from kitchens?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. NetSuite is the system your company runs on. VoiceOrder Solutions only changes how a kitchen's order gets to you. Keep NetSuite, hand our app to the kitchens that call, and the rest of your setup stays put.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than NetSuite?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job, yes: getting an order out of a kitchen that will not log in to order online. For everything else NetSuite does, the comparison does not hold. We have no ledger, no lot tracking, no warehouse and no purchasing, which is why we sit next to it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't NetSuite already have customer ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It does. Its B2B web store, which is an add-on, lets buyers reorder past purchases, pick by item code from a list and see their own prices. All of it means finding items and typing quantities. Our app is for kitchens that find it quicker to say it out loud.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Aren't there voice tools for NetSuite already?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Several NetSuite partners sell voice tools, mostly for sales reps, or for turning voice notes and calls into sales orders. Ours works at a different point: the customer speaks the order in our app and checks each line before it is sent to you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is NetSuite connected to VoiceOrder Solutions?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is no published link between the two products, and neither side supports the other's software. We send orders as email files, over EDI or over the API. Which of those your NetSuite account can take in directly is something to check in the demo, and we do not promise it here.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will setting this up touch our NetSuite account?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. We never ask for a NetSuite login. We work from a spreadsheet you export, and nothing gets installed in your account. Your scripts, roles and release schedule are left untouched.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does it take, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors it takes 24 to 48 hours to go live, because nothing inside NetSuite changes. Neither of us publishes prices: NetSuite licenses by platform, modules and users, and we quote per distributor. Next to a NetSuite alternative that replaces the ERP, adding us is a far smaller decision.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the NetSuite details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From netsuite.com and NetSuite's own help pages, read on 9 November 2026: the distribution and food pages, the online store's reorder tools, the AI assistant and the licence model. They publish no prices, so this page states none. Anything that is out of date now is our error, not theirs.
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
  <h2>Keep NetSuite, and let the order start with the kitchen</h2>
  <p>Twenty minutes, one spoken order, and a plain walk through where it lands.</p>

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
        <li><a href="#comparison">NetSuite + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/distribution-automation-software">Distribution Automation</a></li>
        <li><a href="/distributor-analytics-software">Distributor Analytics</a></li>
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
