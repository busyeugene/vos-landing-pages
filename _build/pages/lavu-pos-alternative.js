/* Comparison page: Lavu, and Lavu with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (wave 4, 2026-11-09): the reader is the RESTAURANT that runs Lavu as its POS.
 * VoiceOrder Solutions comes through the restaurant's distributor, and only reaches distributors that
 * offer it. Keep Lavu, add VoiceOrder Solutions beside it for one job: the supply order to a distributor.
 * The two products do NOT connect (FAQ 3). Never imply an integration, a sync or an "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: LAVU TRACKS THE SUPPLY ORDER, IT DOES NOT SEND IT. Lavu's help center: "Lavu Inventory does
 *   not have the ability to contact your vendors. Lavu will not send emails or contact your vendors in
 *   any way." You log an order (Pending), then receive it into stock. Getting it to the distributor is
 *   still your call, text or email. VoiceOrder Solutions is that sending step, for a distributor on our
 *   app. Distinct from MarketMan ("skip the supplier call": MarketMan sends, except to phone-only
 *   suppliers): here the rival's own docs say it never sends.
 * ⚠ TRAPS (all in _build/research/competitors/lavu-pos.md):
 *   1. Lavu sells GUEST voice ordering (Marty voice AI answers takeout calls). "Voice ordering" here is
 *      always the supply order to your distributor; the guest voice AI is conceded in FAQ 4 only,
 *      attributed to Lavu's blog (July 2025): the homepage no longer names it (review 2026-11-09).
 *   2. Lavu HAS inventory: vendors, logged orders, receiving into stock, low-stock and 86 alerts,
 *      transfers. All ticks in both columns. Never imply we count stock, set alerts or 86 items.
 *   3. Marty AI flags restocks and vendor prices. Only say its pages describe flags and suggestions,
 *      never that Marty "cannot" order.
 *   4. A spoken order is not in Lavu's order list. Coexistence card 1 + FAQ 5: log it there to receive,
 *      which sends nothing (Lavu contacts no vendor), as long as it is not also phoned or emailed.
 *   5. Lavu publishes Marty AI plan prices on its homepage; POS pricing was not shown. No figures.
 *   6. The homepage's sample card names two broadline distributors and the integrations page lists
 *      inventory partners: claims.js bans those names, and the page needs none of them.
 * None of Lavu's dollar, uptime or customer figures are repeated.
 * Review 2026-11-09 (FIXES4 P1-P9 + lavu section): guest voice-AI table row dropped (replaced by a
 *   confirmation row); comparison H2 carries the angle; problem lead opens on Lavu's own fact; no
 *   belittling lines about Pending orders; Marty moved to coexistence card 2 (no delivery promise);
 *   the one-channel card dropped (Lavu contacts no vendors); FAQ 5 says the time saved is the call;
 *   order checks rest on the order number, never on viewing past orders in the app.
 */
module.exports = {
  title: "Not a Lavu POS Alternative: Keep Lavu, Add Voice Ordering",
  description: "Lavu logs supply orders but does not send them. If your distributor offers our app, say the order, check each line and send it. No Lavu POS alternative needed.",
  related: ["touchbistro-alternative","lightspeed-pos-alternative","marketman-alternative"],
  relatedHeading: "Other restaurant systems you can keep",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A Lavu POS Alternative: Send Supply Orders</h1>
      <p class="lead mt-16">
        Say your supply order into the VoiceOrder Solutions app, go over each line from your distributor's order guide (your regular items, priced for your account) and send it with an order number. Lavu logs supply orders but does not send them. Your distributor has to offer the app.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Check If My Distributor Offers It →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Works if your distributor has it</span>
        <span class="hero-trust-dot"></span>
        <span>Keep Lavu for service</span>
        <span class="hero-trust-dot"></span>
        <span>iPhone or Android</span>
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
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most kitchens are up and ordering, once the distributor adds them</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved on each order, versus calling it in to the rep</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">to get supplies ordered, even after close</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with Lavu alone.
     POS, inventory, vendors and receiving, Marty, guest voice AI and online ordering are ticks in
     BOTH. Only rows 3, 5 and 8 (the supply order itself) differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Saved In Lavu, Spoken In Our App</span>
      <h2>Who gets the order Lavu saves to the distributor?<br>You do, by voice, in our app.</h2>
      <p class="lead mt-16">
        For distributors on our app, VoiceOrder Solutions adds two things: you speak and send the supply order, and a confirmation comes back. Ticks for the POS, inventory and Marty AI are Lavu's own. If a Lavu POS alternative was on your list, that is what keeping Lavu looks like.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Lavu + VoiceOrder Solutions</th>
            <th style="width:30%;">Lavu on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iPad POS, kitchen display and payments</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Ingredient stock with low-stock and 86 alerts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Speak a supply order, then check each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Vendors, logged orders and receiving into stock</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Sent to the distributor from the app</td>
            <td>When the distributor is on our app</td>
            <td>Outside Lavu, as you do now</td>
          </tr>
          <tr>
            <td>Marty AI morning card and alerts, on a Marty plan</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A confirmation back on your phone</td>
            <td><span class="check-yes">✓</span></td>
            <td>None shown in Lavu</td>
          </tr>
          <tr>
            <td>Order guide loaded by the distributor</td>
            <td><span class="check-yes">✓</span></td>
            <td>Vendor items you set up</td>
          </tr>
          <tr>
            <td>Online ordering and delivery partners for guests</td>
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
     SECTION 6: WHY OPERATORS LOOK ELSEWHERE
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container">
    <div class="text-center" style="max-width: 680px; margin: 0 auto;">
      <span class="eyebrow">Why People Look</span>
      <h2>Why owners search for a Lavu POS competitor</h2>
      <p class="lead mt-16">
        Lavu's support pages say it will not email or contact your vendors. When you look for an alternative to Lavu POS, sometimes the trouble is ordering supplies, not the POS.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">📝</div>
        <h4>In Lavu, the order is saved as Pending</h4>
        <p class="text-muted mt-12">
          In Lavu you pick a vendor, add items and save the order as Pending, ready to receive when it arrives. Telling the distributor is still your job, by call, text or email.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🌅</div>
        <h4>Marty points you to the restock</h4>
        <p class="text-muted mt-12">
          Lavu's pages show Marty, its AI, reading the night's data and suggesting fixes, such as a restock. Lavu sells Marty AI as separate plans. On its pages, Marty's part ends at the suggestion.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📭</div>
        <h4>No sign the distributor got it</h4>
        <p class="text-muted mt-12">
          A Pending order shows what you saved, and it stays Pending until the delivery is received. Nothing in Lavu shows the distributor got the order.
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
      <h2>Say the distributor order, with no Lavu POS alternative needed</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Say the supply list, see it on screen, send it</h3>
          <p class="mt-12 text-muted">
            Open the app in the walk-in and say what you need. What you say shows up as lines from that distributor's guide, and you fix a quantity or remove a line before you send.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>You look over every line before it goes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Send it after close, when the rep's phone is off</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the phone you already carry</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled onto the line mid-order? It waits for you</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">More on placing an order by voice →</a>
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
          <span class="eyebrow">Loaded By Your Distributor</span>
          <h3>The distributor sets up the list, so you do not have to</h3>
          <p class="mt-12 text-muted">
            In Lavu you add each vendor and attach the items yourself. In our app the distributor loads what you buy from them, with your account pricing, and can update it from their side.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only what your kitchen normally orders from them</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Their item codes, so the order reads right at their end</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing for you to build or keep up</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your rep stays the same</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Ordering from several suppliers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>The order guide,<br>with your<br>account prices
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Sent And Confirmed</span>
          <h3>A number, a time and a confirmation on each app order</h3>
          <p class="mt-12 text-muted">
            In our app, each sent order carries a number, the date and the time, and a confirmation reaches your phone. If a case does not show up, give your rep that number.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Shows exactly when it went out</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A number to quote when something is missing</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Calls and voicemails get no number from us</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">What each supplier confirmed →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A sent order with<br>its number, date<br>and time
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 4 -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Staying In Lavu</span>
          <h3>Lavu keeps the POS, the stock and Marty</h3>
          <p class="mt-12 text-muted">
            Payments, menus, the kitchen display, ingredient stock, 86 alerts and, where you pay for Marty AI, the morning card all stay in Lavu. Keeping Lavu means no Lavu POS alternative to set up or train your staff on.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Tickets and payments run on the iPad as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lavu still grays out 86'd items and flags low stock</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Receiving in Lavu still adds to its stock</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>If you run Marty, it keeps reading the same sales data</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">How ordering fits beside your stock counts →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>The sent order,<br>then the delivery<br>received in stock
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
      <h2>How a kitchen on Lavu gets started</h2>
      <p class="lead mt-16">
        The distributor does the setup. All you need is your phone.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Find out if your distributor is on it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they offer it, they set up your account and your guide. Unsure? We can find out for you.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Install it on your phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your guide is waiting the first time you open it.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Say the order, then send it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Look it over, send it, and get a confirmation.
        </p>
      </div>
    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VoiceOrder Solutions app with a distributor's order guide and a sent order
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
      <h2>From kitchens that order this way</h2>
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
            "Our dry goods order used to be a voicemail at closing. Now I say it after the last ticket and get a confirmation."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">Photo</div>
            <div>
              <div class="author-name">[Customer Name]</div>
              <div class="author-role">[Restaurant Name] · [City]</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "When a delivery is missing something, I give the rep our order number and we sort it out on the spot."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">Photo</div>
            <div>
              <div class="author-name">[Customer Name]</div>
              <div class="author-role">[Restaurant Name] · [City]</div>
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
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Use Both</span>
      <h2>From a low-stock alert in Lavu to a spoken restock</h2>
      <p class="lead mt-16">
        This is not a Lavu POS replacement. Lavu handles sales, stock records and alerts. VoiceOrder Solutions covers one piece of the supply side: getting a spoken, reviewed order from your phone to a distributor who has our app.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📥</div>
        <h4>Voice orders do not appear in Lavu's Orders list</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Our app does not create the Pending order that Lavu receives against. If you receive deliveries into Lavu stock, log that order there as well.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📉</div>
        <h4>When Marty says restock, say it then</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A sample Marty card on Lavu's homepage reads "Sub or restock before 11am". If a card like that names an item you buy from a distributor that has our app, that is the moment to say the restock and look over the lines before you send.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">☝️</div>
        <h4>Start with the calls and emails</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Our app fits best with a supplier you phone or email today, if they offer it. Send that order in the app and there is no call or email to make. A distributor without the app keeps hearing from you as before.
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
      <h3 style="margin-bottom:10px;">See how one supply order gets to a distributor</h3>
      <p class="text-muted" style="font-size:16px;">
        We open a sample distributor's guide, say a short order, change one quantity and show what reaches the distributor. It takes about 20 minutes.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 13: FAQ
     Eight items, to match the eight accordion slots on the Webflow page.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Questions from restaurants that run Lavu</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a Lavu POS alternative just to say my supply order to a distributor?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Lavu can stay your POS and your stock record. Where a distributor of yours has our app, you can speak its orders instead of phoning them in.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Lavu POS?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They do different jobs. We are not a POS: no payments, menus, kitchen display, stock levels or sales reports. You say each line of an order for a distributor on our app, correct anything that is off, and send it. Suppliers that are not on our app go on getting your orders as they do now. If reaching the distributor is why you looked at a Lavu POS alternative, that is the gap we fill.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and Lavu connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Lavu and our app are two products, each with its own helpdesk, and nothing passes between them. Whatever you send in our app reaches only your distributor.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this the same as Lavu's voice AI for phone orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. One of Lavu's blog posts, from July 2025, describes Marty voice AI that answers guests calling in takeout orders. Ours runs the other way: the order your kitchen places with its food distributor. You can use both, since they never handle the same order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get an order I spoke into Lavu's stock?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Lavu adds stock when you receive an order saved in its Orders list. Since our app does not put the order there, save it in Lavu too, then receive it when the truck arrives. Lavu does not contact vendors, so saving it there does not order it again. The time you save is the call to the rep, not this record. When the delivery comes, check it, and quote your order number to the rep if anything is short.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens if the app hears an item wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You see it on the review screen before anything goes out, and you can change the item or the amount or take the line off. That review is the safeguard, so a quick glance can still let an error through. Orders made by phone or voicemail get no order number from us; only orders sent in the app do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor: they make you an account with your guide already loaded, and most kitchens place a first order the same day. Cost is one more thing to raise with your distributor, since the app reaches you through them; we publish no price. If your distributor does not offer it, go on ordering from them as you do today, and contact us so we can find the right person. Lavu shows prices for its Marty AI plans on its homepage.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Lavu details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From lavu.com and Lavu's help center at support.lavu.com, as we read them on 9 November 2026: the vendor and order pages, inventory alerts, Marty AI and a Lavu blog article on answering takeout calls with voice AI. We have left Lavu's dollar and uptime claims off this page. If any of it is out of date, write to us and we will fix it.
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
  <h2>Hear back on each restock you speak into our app</h2>
  <p>See if VoiceOrder Solutions is available through your distributor. If you are unsure, ask us and we will check for you.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Through your distributor</span>
    <span>✓ A number on each order</span>
    <span>✓ Order at any hour</span>
    <span>✓ iPhone + Android</span>
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
        <li><a href="#features">Order Records</a></li>
        <li><a href="#how-it-works">Getting Started</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">Lavu + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/supplier-management-software">Supplier Management</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
        <li><a href="/order-tracking-software">Order Tracking for Distributors</a></li>
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
