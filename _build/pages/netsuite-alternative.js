/* Comparison page: NetSuite, and NetSuite with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 pilot (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside NetSuite,
 * never its replacement. Table = "NetSuite + VoiceOrder Solutions" vs "NetSuite on its own"; every
 * NetSuite strength is a tick in both columns. They are separate products with no built-in link (FAQ 5); whether a NetSuite
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
 * ⚠ NetSuite lists voice PICKING on its food page, under a "some capabilities require partner
 *   integrations" note. Do not build on it either way: the table row says picking and mobile scanning.
 * ⚠ NetSuite serves small, midsize and enterprise: never "too big for you" or "enterprise-only".
 * They publish no prices (licence = platform + modules + users, plus an implementation fee) and no
 * US go-live figure, so neither is used as an argument. The India page's "100 days" stays off.
 * Every claim is sourced and dated in _build/research/competitors/netsuite.md.
 * Review 2026-11-09 (wave 1 fix list, shared S1-S10 + page items): the angle is now NetSuite's
 *   customer ordering being a web store add-on module licensed on top (platform + modules + users),
 *   while VoiceOrder Solutions adds no NetSuite module (H1, problem card 2, coexistence card 3, table
 *   row 7). Voice picking is no longer mentioned anywhere (the source page says some features need
 *   partners). FAQ 5 now says what each delivery format means for the desk: over EDI/API it MAY go
 *   straight in (a demo question, never promised); by email the desk still keys it in, from a file
 *   the kitchen already checked. "We only hold the guides" wording is gone: we hold each account's
 *   guide and prices plus app orders. The replacement-project argument lives only in the cost FAQ.
 *   The staff-AI coexistence card was cut (that argument is reserved for sage-x3 and prophet-21).
 */
module.exports = {
  title: "Not a NetSuite Alternative: Keep NetSuite, Add Voice Ordering",
  description: 'Keep NetSuite as your system of record. Kitchens speak orders into an app and check each line, with no NetSuite module to add. Not a NetSuite alternative.',
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
      <h1>Not A NetSuite Alternative: Ordering Without Another Module</h1>
      <p class="lead mt-16">
        Let the kitchens that call every morning order from an app instead. In the VoiceOrder Solutions app, a kitchen speaks its order and looks over each line before it reaches you. It adds no module to NetSuite, which runs everything after that.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>NetSuite runs as before</span>
        <span class="hero-trust-dot"></span>
        <span>Lines checked by the kitchen</span>
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
      <div class="stat-label">App ordering, including hours your desk is closed</div>
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
      <span class="eyebrow">One App Beside NetSuite</span>
      <h2>NetSuite plus VoiceOrder Solutions.<br>Your books stay in NetSuite.</h2>
      <p class="lead mt-16">
        VoiceOrder Solutions changes one thing for you: how a kitchen's order begins. If you searched for a NetSuite alternative, note what stays: NetSuite still runs the money, the stock and the warehouse, so those rows read the same in both columns. Each product is sold and supported on its own, with no link built in.
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
            <td>Typed into NetSuite's web store</td>
          </tr>
          <tr>
            <td>Lot tracing and recalls</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Accounts who used to call send a numbered order</td>
            <td><span class="check-yes">✓</span></td>
            <td>Taken by phone, then keyed in by your team</td>
          </tr>
          <tr>
            <td>Online reordering in the add-on store</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Demand planning and replenishment rules</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Ordering from a customer app, with no extra NetSuite module</td>
            <td><span class="check-yes">✓</span></td>
            <td>Online ordering needs the web store module</td>
          </tr>
          <tr>
            <td>Warehouse picking and mobile scanning</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Customer-segment catalogs and negotiated prices in the store</td>
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
        Many distributors who search for a NetSuite alternative are not trying to leave NetSuite. What they want is fewer calls to key in, and NetSuite's own answer to that is a web store sold as an add-on module.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Many sales orders still start as a call</h4>
        <p class="text-muted mt-12">
          NetSuite is strong at everything after a sales order exists. Before that, a chef calls, texts or leaves a voicemail, and somebody at your desk types it into NetSuite by hand.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>Online ordering is one more module to license</h4>
        <p class="text-muted mt-12">
          NetSuite sells its web store for trade customers as an add-on, licensed on top of your platform, modules and users. You set it up and keep it running, and it only helps with the kitchens that log in.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4>The store asks a chef to search and type</h4>
        <p class="text-muted mt-12">
          In NetSuite's store, a kitchen reorders from past purchases or enters item codes in a list. That suits someone sitting at a desk. A chef checking the cooler with a phone in hand is more likely to call your office.
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
      <h2>Why this is not a NetSuite alternative: one new way for kitchens to order</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Whatever is short in the walk-in becomes lines a kitchen checks</h3>
          <p class="mt-12 text-muted">
            A chef walks the cooler and says what is short. The app lays it out as lines from that kitchen's own guide, they correct anything off, and they send it. No web store to sign in to, no search box, no call to your office.
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
            Send us a spreadsheet of what each account buys. We load those items under your item codes at the price you set for that account. Your full item list is still kept in NetSuite, and you update each guide in our admin platform.
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
              <span>Setup adds no SuiteApp, script or NetSuite module</span>
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
          <h3>Delivered by email file, EDI or the API</h3>
          <p class="mt-12 text-muted">
            A finished order goes out as an email with a PDF, Excel or Word file, or travels over the API, over EDI, or into QuickBooks. You choose the format. An emailed file still gets entered by your team, but from lines the kitchen already checked. Over EDI or the API it can go straight in if your NetSuite setup accepts it that way, and the demo shows whether it does.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to a rep or to a shared orders inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
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
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog keeps up as stock levels change</span>
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
        It starts with one export from NetSuite. We turn it into a guide for each account, and the kitchens take it from there.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Pull an item list out of NetSuite</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A saved search exported to a spreadsheet is usually all we need. It gives us each account's items and prices under your own codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Every account gets its own guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We build each guide and open the account, and the kitchen installs the app. Most place a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Your desk gets a ready order</h4>
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
      <h2>What desks say once the morning calls thin out</h2>
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
            "We had priced out NetSuite's online store. Our phone accounts moved to the app, and NetSuite stayed as it was."
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
            "The chefs we supply would never search a store for item codes. Now they tell the app what they need, fix a line or two and send it."
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
      <h2>What stays in NetSuite, and what the app adds</h2>
      <p class="lead mt-16">
        This is not an alternative to NetSuite. The app covers the moment a kitchen puts its order together, and NetSuite takes over once that order lands at your desk.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>NetSuite remains the system of record</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          NetSuite holds your customers, stock and invoices. What we hold is the guide for each kitchen, priced and kept up to date by you, and the orders placed through our app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Kitchens already ordering online carry on</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If some accounts already use the NetSuite store, leave them there. The app is meant for the kitchens that keep phoning. An order phoned to your office gets no number from us; only the ones sent from the app do.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Getting started adds nothing to your NetSuite license</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          NetSuite's license grows with each module you add, and online ordering for customers is one of them. Starting with us adds no NetSuite module and no NetSuite user. Whether EDI or the API comes later is a question for the demo. We send our own quote, separate from NetSuite's.
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
      <h3 style="margin-bottom:10px;">Watch one order get spoken and sent, then ask how it would reach NetSuite</h3>
      <p class="text-muted" style="font-size:16px;">
        In 20 minutes, we speak one order into the app, change a line, then send it. Then we show the formats it could arrive in at your NetSuite desk.
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
          No. NetSuite carries on running your business, and the store can stay for the accounts that use it. What we add is an app for your phone-ordering kitchens: they say what they need, review it and send it, with no new NetSuite module.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than NetSuite?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job, yes: getting an order out of a kitchen that will not sign in to any website, with each line looked over first. NetSuite does far more than we do, which is why we sit beside it rather than in its place.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          NetSuite already sells a store. Why would we want an app too?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Keep the store for anyone who already orders there. It is built for finding items and typing quantities. Our app is for kitchens that find saying what they need easier than looking each item up.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          NetSuite partners sell voice tools. How is this different?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Several partners do, mostly for sales reps, or for turning voice notes and calls into sales orders. Our app is in the customer's hands instead: the kitchen orders out loud, then checks each line before it is sent to you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will someone still have to type these orders into NetSuite?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          These are two products with nothing joining them out of the box, and neither of us gives support for the other's software. Through EDI or the API, NetSuite may accept the order without anyone retyping it, if your account is set up for that; we check it with you in the demo. By email, it is a file the kitchen reviewed before sending, and someone on your side keys it in from that file rather than from a call or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will setting this up touch our NetSuite account?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Getting started needs no NetSuite login and installs nothing: we work from a spreadsheet you export, and your scripts, roles and release schedule stay as they are. If you later want orders sent by EDI or the API, we go through what that takes for you in the demo.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does it take, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup takes 24 to 48 hours for most distributors, with nothing changed inside NetSuite. Neither company publishes prices, so both are quoted: NetSuite's license and ours. A NetSuite replacement, or any NetSuite alternative that takes over the ERP, moves your finance, stock and warehouse at once. Changing how kitchens send orders is a job of a different size.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the NetSuite details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From netsuite.com and NetSuite's own help pages, read on 9 November 2026: the distribution and food pages, the online store's reorder tools, the AI assistant and the licensing model, plus NetSuite partners' own pages on voice ordering. They publish no prices, so this page states none. If any of it is out of date now, tell us and we will correct it.
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
  <h2>Leave NetSuite as it is, and hand your kitchens a voice app</h2>
  <p>One demo, one order taken by voice, and the file your desk would get from it.</p>

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
