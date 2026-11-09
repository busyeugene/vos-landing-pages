/* Comparison page: B2B Wave, and B2B Wave with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (webshops / EDI / order capture; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside B2B Wave,
 * never its replacement. Table = "B2B Wave + VoiceOrder Solutions" vs "B2B Wave on its own"; every
 * B2B Wave strength is a check mark in both columns. Separate products with no built-in link (FAQ 4);
 * whether an app order can go into B2B Wave over its API (or EDI) is a demo question.
 * Angle: LET CHEFS KEEP TALKING. B2B Wave is the closest job to ours in the whole set: a browser
 * portal where each account has its own prices, preset "preferred products", one-click reorders, a
 * Quick Order screen, standing orders and delivery cut-offs. It suits the chef who types and taps.
 * Its own answer for the chef who would rather talk is a rep: "Assisted Ordering ... Your rep places
 * it directly on the platform on their behalf" and "A rep can prepare an order during a customer call
 * and save it for the buyer to review and submit later" (blog playbook "Build the Order, Let Them
 * Confirm", 2026-11-05). We let that chef keep talking, to an app, and check each item at once.
 * Keep both: typists in the portal, talkers in the app.
 * Distinct from inFlow ("No more phone orders" promise: B2B Wave's "your customers never have to
 * call" is the same promise, so it is NOT used here), Acumatica (kitchens that skip the free portal),
 * Unleashed (reps sell, chefs order: rep time is not argued here) and Odoo (Order Again vs what is
 * short today: standing orders are conceded, never argued as "same order every week").
 * ⚠ B2B Wave takes phone orders: admins and reps create orders or impersonate the customer.
 * ⚠ Its customers can see stock in Quick Order (if enabled). Ours: unconfirmed, never implied.
 * ⚠ Its own iOS/Android app is for SALES REPS; customers use the browser portal (no download).
 *   Our customers DO install an app: FAQ 6 says so.
 * ⚠ An app order is not in B2B Wave's order history, reports or reminders unless it is put in over
 *   its API (demo question). An order sent to QuickBooks goes to the books, not into B2B Wave.
 * ⚠ Third parties (an AI calling/messaging tool) connect to B2B Wave; none is shown creating orders.
 *   One-line concession in FAQ 3. B2B Wave's MCP server is read-only staff access: not argued.
 * ⚠ B2B Wave PUBLISHES plan prices: conceded in the cost FAQ with no figure. Their 1-4 week setup
 *   and every marketing number (uptime, NPS, "90%" online, sales lifts, savings) stay off the page.
 * Every claim is sourced and dated in _build/research/competitors/b2b-wave.md.
 * Review 2026-11-09 (wave 3, FIXES3): RE-ANGLED to "APPROVED ON THE SPOT". B2B Wave's advice for the
 * chef who phones is a rep who builds the order during the call and saves it for the chef to approve
 * later in the portal (Saved orders / "Build the Order, Let Them Confirm"); with us the chef goes over
 * each item while ordering. "Typists / talkers" labels dropped. Rep's-app problem card and coexistence
 * card dropped (RepZio owns reps' apps); records fact moved into the typing FAQ. New problem card 1 from
 * the 2019 blog "Online-Resistant B2B Buyers" (convert them with incentives / an account manager: the
 * approach only, none of its statistics). API line per factcheck-a M6: nothing connects ours to it.
 * Verification round 2026-11-09 (VERIFY3): H1 says WHO approves (the chef); B2B Wave's blog gives a
 * caller BOTH routes (rep enters it, or saves it for the chef to approve): never only the saved one.
 * The "rep saves it, chef approves later" point is capped at 4 (hero, table row 7, problem card 2,
 * reps FAQ). No timing on guide changes. Final H2 avoids the "Keep X. Let..." shape.
 */
module.exports = {
  title: "Not a B2B Wave Alternative: Keep B2B Wave, Add Voice Ordering",
  description: "When a chef phones, your rep can enter the order in B2B Wave or save it for approval. Our app lets chefs talk and approve each item. Not a B2B Wave alternative.",
  related: ["shopify-b2b-alternative","orocommerce-alternative","orderease-alternative"],
  relatedHeading: "Other ordering platforms that stay open beside the app",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A B2B Wave Alternative: Chefs Approve While Ordering</h1>
      <p class="lead mt-16">
        Chefs who like the phone can talk through their order with our app, then approve each item ahead of sending. B2B Wave's blog has a rep enter it for them, or build it on the call for the chef to approve later in the portal. Your portal stays as it is.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Comparison</a>
      </div>

      <div class="hero-trust">
        <span>Your B2B Wave portal stays open</span>
        <span class="hero-trust-dot"></span>
        <span>Each item checked before sending</span>
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
      <div class="stat-label">Saved on each order compared with taking it by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Hours a chef can say the order, desk open or closed</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors, with the portal left alone</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     B2B Wave is the closest job to ours, so six of nine rows go to both columns. The three that
     differ are about the chef who would rather talk, and when the order is approved.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Talk Or Type</span>
      <h2>B2B Wave plus VoiceOrder Solutions.<br>Checked by the chef, item after item, while ordering.</h2>
      <p class="lead mt-16">
        With our app, chefs name what they need out loud, then look over every item before it goes. B2B Wave still gives each account its own prices, a preset list of its favorites, reorders in one click and quick entry by product code, typed or tapped in a browser. This is not a B2B Wave alternative: the two are separate tools, not linked, and you keep both.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">B2B Wave + VoiceOrder Solutions</th>
            <th style="width:30%;">B2B Wave on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Each account sees its own prices and products</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef can speak each item into an app, with no typing</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed into the portal, or phoned to a rep</td>
          </tr>
          <tr>
            <td>One-click reorders and a Quick Order screen</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Delivery-day cut-offs and standing orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who used to phone now sends an order with our order number and the time sent</td>
            <td><span class="check-yes">✓</span></td>
            <td>Numbered once a rep or your desk enters it</td>
          </tr>
          <tr>
            <td>B2B Wave's web portal, open on any device with no download</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>The chef goes over each item, then sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>A rep enters it, or builds it on a call and saves it for later review</td>
          </tr>
          <tr>
            <td>A rep app for visits, with offline ordering</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>B2B Wave orders pushed to your accounting software</td>
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
      <span class="eyebrow">Screens And Callers</span>
      <h2>Where a portal leaves the chef who calls</h2>
      <p class="lead mt-16">
        B2B Wave sets out to pull email, phone, PDF and spreadsheet orders into one portal, and it has advice for a chef who would rather keep phoning. That chef is who our app is for. By email, our order arrives as a file someone at your end types in; whether EDI or our API could carry it in instead is a demo question.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🎯</div>
        <h4>B2B Wave tries to move phone buyers online</h4>
        <p class="text-muted mt-12">
          B2B Wave's own blog advises winning over customers who stick to the phone, with incentives such as a discount on the first order and an account manager to help. Some chefs make the switch. The ones who never do keep calling.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4>A caller still goes through a rep</h4>
        <p class="text-muted mt-12">
          B2B Wave's advice for a caller is a rep, who enters the order or saves it for the chef to finish in the portal. In the app we add, the chef fixes anything on the list right away and sends it in the same sitting.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4>Quick Order still means typing</h4>
        <p class="text-muted mt-12">
          B2B Wave's Quick Order page is built for fast entry by item code and quantity, and searching by product name works too. Both suit a chef who likes a keyboard. In our app, a chef just names the product out loud, and it is matched to what that account usually orders.
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
      <h2>Not a B2B Wave alternative: ordering by voice, next to the portal</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>No item codes to look up</h3>
          <p class="mt-12 text-muted">
            The chef says what the kitchen needs, in their own words. Our app matches each item to that restaurant's guide and shows the list, so the chef can change an item or an amount before pressing send. Nobody on your side has to be on the line for it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Push to Speak, then a list to look over</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders still come in at night and on holidays</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the chef's own iOS or Android phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A chef called away mid-order comes back to it as they left it</span>
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
          <h3>A list of usual items for each restaurant</h3>
          <p class="mt-12 text-muted">
            Tell us what every restaurant regularly orders, and we load it as that restaurant's own guide, under your item numbers. Each guide's prices are yours to update in our admin, the same place you manage your accounts. Whether price changes can come over in bulk from B2B Wave or your ERP is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each chef sees that restaurant's items, not your whole range</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Add or drop items on a guide yourself in our admin</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Preferred products and customer prices stay inside B2B Wave</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup needs no B2B Wave admin access, just each account's items</span>
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
          <h3>How the finished order reaches your desk</h3>
          <p class="mt-12 text-muted">
            Each order goes out as an email attachment in the format you choose, or by EDI, our API or into QuickBooks. An order sent to QuickBooks goes to your books, not into B2B Wave. Nothing links ours to the API B2B Wave offers for new orders; a demo is where we look at what it would take to load app orders through that API. Until an order is in B2B Wave, it is not in its order history or customer reports.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to a single rep or to a shared inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Any correction the chef made is already in the file</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Every order from the app has its own number and the time it was sent; a call gets none from us</span>
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
          <h3>Stock beside incoming app orders</h3>
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
              <span>Fewer stockout surprises at your end</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock messages in your portal stay as you set them</span>
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
      <h2>Adding voice orders beside B2B Wave</h2>
      <p class="lead mt-16">
        It takes three things: your list of each account's usual items, the accounts we open, and our app on each chef's phone.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>List each restaurant's regulars</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each restaurant's regular products, with prices and your codes, are usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We open each account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Its guide is loaded and the chef gets the app. Most restaurants send a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Chefs start saying their orders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Their orders reach you checked, numbered and timed, while portal accounts carry on as before.
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
      <h2>What changes at your desk</h2>
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
            "Chefs who called us now talk to our app, and what reaches us has been looked over first."
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
            "Late-night voicemails used to wait for the morning. Those chefs send from the app now."
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
      <span class="eyebrow">Portal And App</span>
      <h2>Not a B2B Wave competitor: what the portal keeps doing</h2>
      <p class="lead mt-16">
        Adding us is not picking an alternative to B2B Wave: chefs who order on a screen stay in the portal, and the app is for those who find talking easier.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Portal regulars carry on as they are</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts that reorder in one click or use Quick Order on the portal do not have to change anything. Nobody is moved off the portal to make room for the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📅</div>
        <h4>Standing orders and cut-offs stay with B2B Wave</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          B2B Wave keeps building standing orders on schedule and holding to the delivery days and cut-off times you set. Adding the app does not touch them.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💳</div>
        <h4>Payments stay where they are</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Portal payments, and the way B2B Wave sends its orders on to your accounting, carry on as now.
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
      <h3 style="margin-bottom:10px;">Hear a chef's voice become an order your desk can use</h3>
      <p class="text-muted" style="font-size:16px;">
        Give us twenty minutes: hear us voice a sample kitchen order into the app, watch one item get changed, and see the file that comes out. Then we go over how it fits beside your portal as an addition, not a B2B Wave alternative.
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
      <h2>Things distributors on B2B Wave ask</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a B2B Wave alternative for orders that chefs say aloud?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Your portal, customer prices, recurring orders and sales rep tools are untouched. What you add is a second way in for chefs who favor talking: they say it to our app and go over each item before it goes, and nobody at your end has to take a call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than B2B Wave?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job: taking an order from a chef who is happier speaking than typing, then putting every item in front of that chef to fix on the spot. B2B Wave does far more as a web portal, with quotes, online payment and rep tools, so we stay at its side and are not a B2B Wave alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          B2B Wave already makes reordering quick. Why bring in an app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Keep it: for a chef at a screen, reordering there is quick. It still takes typing, tapping or scanning, and some chefs simply prefer saying it. Voice is not ours alone: other firms offer AI calling and messaging tools that connect to B2B Wave. Those handle calls and messages; ours shows the chef each item to fix before sending.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Are the two linked, and does somebody still have to type orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The two come from separate companies and are not linked, and each one supports just its own software. B2B Wave has an API for creating orders, but nothing connects ours to it today. If your setup can take our orders over EDI or our API, no one types them again; whether it can is something to settle in the demo. Over email, though, each one still has to be entered at your end. What your desk skips is the call itself: nobody listens, notes each item and repeats it back, since every item was gone through on the chef's side first. B2B Wave and the systems behind it keep account details, billing and stock; we keep the guides, with your prices on them, plus every app-placed order. Your system still gives an order its own number once it is entered.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Our reps already put orders in for chefs who call. What changes?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing has to. Reps can keep placing orders for accounts that want it, and carry on with visits as they do now. A chef phoning just to read out the usual items can speak them to our app instead and check the list at once, rather than opening a saved order in the portal afterwards.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do restaurant customers need to download anything?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For ours, yes: each chef installs our app. B2B Wave's portal opens in any browser with no install, which is one more reason to keep it for portal regulars.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quick is setup, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors, setup takes 24 to 48 hours, and B2B Wave stays exactly as it is. You give us the items each account usually buys, often exported as a spreadsheet. We put those into our admin as guides and set up every restaurant on the app; once the chef downloads it, most are ordering that same day. B2B Wave shows plan prices on its site; we quote per distributor. A B2B Wave replacement would mean shifting every portal customer, standing order and price list to new software, while an app for the chefs who would rather speak asks none of that.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the B2B Wave details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Based on b2bwave.com, read 9 November 2026: the homepage, pricing, features and FAQ pages, the wholesalers and food & beverage pages, the sales rep app page, EDI and integrations pages, and three of its blog posts on reorders, ordering workflows and customers who prefer the phone. The AI calling tools came from a search for B2B Wave integrations. If any of this has gone out of date, send us a note and we will correct it.
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
  <h2>Chefs who talk rather than type sign off on every item themselves.</h2>
  <p>Watch an order get spoken into the app, corrected and sent, ready for your desk.</p>

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
        <li><a href="#comparison">B2B Wave + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/wholesale-ordering-software">Wholesale Ordering</a></li>
        <li><a href="/distributor-sales-software">Distributor Sales</a></li>
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
