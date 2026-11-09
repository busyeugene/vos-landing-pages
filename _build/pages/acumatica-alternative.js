/* Comparison page: Acumatica, and Acumatica with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09 after the NetSuite pilot.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Acumatica,
 * never its replacement. Table = "Acumatica + VoiceOrder Solutions" vs "Acumatica on its own"; every
 * Acumatica strength is a tick in both columns. The two do NOT connect (FAQ 5); whether an Acumatica
 * site takes our formats in directly is a demo question, never a claim (named-integration ban).
 * Angle, distinct from NECS Entree ("typed vs spoken, inside vs beside") and NetSuite ("where the
 * order ends up vs where it starts"): FREE LOGINS, SAME PHONE CALLS. Acumatica licenses by
 * applications and resources with unlimited users, and ships a real B2B customer portal (live stock,
 * account prices, repeat orders, 24/7). So a distributor on Acumatica can already give every kitchen
 * a login at no seat cost. The kitchens that still phone are not short of a login: they will not
 * browse, fill a cart and check out. VoiceOrder Solutions adds the other way in for exactly those.
 * ⚠ Their portal is open 24/7 too: "after hours" is never a point against Acumatica on this page.
 * ⚠ Customer ordering from a PHONE APP is "Not listed on their site" (their app is for staff, who can
 *   create sales orders on it). Never "no mobile ordering".
 * ⚠ Add-ons already sell voice ordering into Acumatica (a rep speaking, and an AI that answers the
 *   customer's phone call). FAQ 4 concedes it without naming them; never "the only voice option".
 * ⚠ Their AI Assistant answers staff questions and their document recognition reads VENDOR bills:
 *   scope any AI sentence to those two features, never "Acumatica's AI" as a whole. A community post
 *   mentions a voice interface for the assistant; never write "their AI has no voice".
 * ⚠ PRICING IS NOT PARITY: Acumatica publishes a starting price for a distribution package. They win
 *   that table row; the figure stays OFF the page and is never paired with a VOS price.
 * ⚠ No food page on acumatica.com, but lots, FEFO (partners) and a WMS are real: never "not built for food".
 * No implementation duration is used (Acumatica states none; partner figures vary wildly).
  * Every claim is sourced and dated in _build/research/competitors/acumatica.md.
 * Review 2026-11-09 (wave 1 fix list S1-S10 + page items): H1 rebuilt on the skip-the-portal angle;
 *   unlimited-users and published-price rows dropped from the table (price conceded in the cost FAQ);
 *   'no seat fee' replaces 'adds nothing to the bill'; replacement card cut (the proposition now lives
 *   only in the cost FAQ, with the `acumatica replacement` secondary); connect FAQ says what each
 *   delivery format means for the desk; records claim per S3; partner FAQ scoped to setup (S6);
 *   ATP coexistence card replaced by the staff-app card; AI tail removed from the voice add-ons FAQ.
 */
module.exports = {
  title: "Not an Acumatica Alternative: Keep It, Add Voice Ordering",
  description: 'Give the kitchens that skip your Acumatica portal a way to speak each order and check every line. Not an Acumatica alternative: an ordering app beside it.',
  related: ["netsuite-alternative","necs-entree-alternative","orderease-alternative"],
  relatedHeading: "Other back-office systems that stay in place",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An Acumatica Alternative: For Kitchens Skipping Your Portal</h1>
      <p class="lead mt-16">
        The chefs who call in every order can send it from an app instead. They say what is needed in the VoiceOrder Solutions app and fix any line that is off before it goes. Acumatica stays your ERP.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare Side By Side</a>
      </div>

      <div class="hero-trust">
        <span>Acumatica keeps the books</span>
        <span class="hero-trust-dot"></span>
        <span>Chefs approve each line</span>
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
      <div class="stat-label">Saved each time a kitchen orders instead of calling</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">For most distributors to go live beside Acumatica</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">First spoken order, for most kitchens</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Acumatica is a full ERP with its own customer portal and 24/7 ordering, so six of nine rows
     get a check mark in both columns. Only how a non-portal kitchen orders differs. The published
     price is conceded in the cost FAQ, not in a row (review 2026-11-09).
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Two Ways In</span>
      <h2>Acumatica runs the business.<br>Kitchens get one more way in.</h2>
      <p class="lead mt-16">
        Your portal stays open to every kitchen that likes it, and the rest can simply say what they need. Acumatica still runs the stock, the money and the warehouse, so those rows hold true with or without us. An Acumatica alternative would mean changing ERPs; this is not one, and nothing wires the two together.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Acumatica + VoiceOrder Solutions</th>
            <th style="width:30%;">Acumatica on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Financials, credit checks and multi-company books</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef speaks the order, then approves each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Browsed and added to a cart in the portal</td>
          </tr>
          <tr>
            <td>Lot and serial tracking, with mobile barcoding</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Self-service portal with live stock and account prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens who skip the portal still send you an order with its own number</td>
            <td><span class="check-yes">✓</span></td>
            <td>Phoned in, then keyed by your team</td>
          </tr>
          <tr>
            <td>Ordering open 24/7, nights and weekends included</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A customer ordering app for iOS and Android</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Demand planning and replenishment across locations</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Stock levels in view as each order arrives</td>
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
      <h2>If kitchens can log in, why look at an Acumatica competitor?</h2>
      <p class="lead mt-16">
        Often, a distributor who looks at an Acumatica alternative is not trying to leave the ERP. Some may have opened the portal to every account already, and some kitchens phone every order anyway. Here is why the portal alone does not stop the calls.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🔑</div>
        <h4>A login was never the problem</h4>
        <p class="text-muted mt-12">
          Acumatica charges for the apps you run, not for user seats, so giving each kitchen a login carries no seat fee. Even so, some kitchens with a login keep calling.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>The portal asks a chef to shop</h4>
        <p class="text-muted mt-12">
          Acumatica's portal shows the catalog with photos, stock on hand and each account's prices, then a cart and a checkout. That suits someone ordering from a desk, less so a chef counting cases at the shelf.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Calls still become typing at your desk</h4>
        <p class="text-muted mt-12">
          When a kitchen phones, texts or leaves a voicemail, someone at your desk types it up as an Acumatica sales order. The portal saves that typing only for kitchens that log in.
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
      <h2>What your team gets, and why it is not an Acumatica alternative</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>No catalog, no cart: the chef just says it</h3>
          <p class="mt-12 text-muted">
            The chef names what is low while looking along the shelves. The app turns that into lines from the kitchen's own guide, and anything that came out wrong gets fixed on screen before it is sent.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every line is approved by the kitchen before it goes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Open for orders 24/7, at midnight as easily as noon</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the iPhone or Android phone already in their pocket</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Interrupted by a delivery? The order waits where they stopped</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How spoken orders reach you →</a>
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
          <h3>Guides built from a file you can already export</h3>
          <p class="mt-12 text-muted">
            Export what each account usually orders, with your product codes and that account's prices, and we load it as the kitchen's guide. Your full item list stays in Acumatica; a guide holds just the items one kitchen orders.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Kitchens see their own items and nothing else</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Prices and guide contents are yours to set</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Change a guide in our admin platform whenever your prices move</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No customization project inside Acumatica</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Managing each account's guide →</a>
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
          <h3>Emailed, or sent by EDI or the API</h3>
          <p class="mt-12 text-muted">
            A finished order arrives by email as a PDF, Excel or Word file, or travels by EDI, by API or into QuickBooks. By email, your team keys it in from a list the chef already approved, not from a voicemail. We go through which of these your Acumatica setup can take straight in during the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Goes to a shared inbox or straight to a rep</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, shipping and invoicing run as they do now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No module to turn off before you begin</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">See a finished order →</a>
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
          <h3>Incoming orders with stock levels beside them</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises on a large order sent late</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog updates as your stock levels change</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lots, counts and replenishment stay with Acumatica</span>
            </li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">Stock visibility in detail →</a>
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
      <h2>From your export to a kitchen's first order</h2>
      <p class="lead mt-16">
        Setup happens outside Acumatica, in three steps.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Pull a report from Acumatica</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An Excel export listing each account's products, prices and your item codes is usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Guides go live, account by account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We build the guides and set up the accounts, and each kitchen installs the app from its phone's store. Most place their first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Checked orders land with your team</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An order sent in the app arrives approved by the customer, numbered and time-stamped, in the format you picked.
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
      <h2>What changed for the accounts that kept calling</h2>
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
            "Logins were never the issue for us; our callers just liked calling. Now they talk the order into their phone and correct the lines before it reaches us."
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
            "Our inside team still enters the emailed orders, but they work from a clean list now instead of a voicemail."
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
      <span class="eyebrow">Working Together</span>
      <h2>Where Acumatica ends and VoiceOrder Solutions begins</h2>
      <p class="lead mt-16">
        The portal and our app run in parallel, so this is not an alternative to Acumatica. A kitchen builds its order with us, and the work after that happens in Acumatica.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Credit checks stay in Acumatica</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Once a kitchen's app order is in Acumatica, it still checks the customer's credit limit before releasing it, as it does for any order. Customer records, stock and invoicing remain there too. On our side sit each kitchen's guide and its prices, which you edit yourself, plus a copy of the orders chefs send with the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Kitchens on the portal stay there</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A kitchen content with the Acumatica portal keeps its login and goes on ordering there. The app is for the ones who call instead, and an order a chef sends from it carries our order number and time stamp, which a call never gets.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>Acumatica's app stays with your staff</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Acumatica's own mobile app is made for your staff, who use it for sales orders and approvals. Ours goes on the kitchen's phone for one job only: getting the chef's reviewed order to you.
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
      <h3 style="margin-bottom:10px;">See what a kitchen that never logs in would send you</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes: a chef's list is spoken into the app, checked, then sent, and we show how it would reach a team that runs Acumatica.
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
      <h2>What Acumatica users ask before a demo</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need an Acumatica alternative before kitchens can place spoken orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Keep Acumatica and its portal running, and hand our app to the chefs who pick the phone over a login. Acumatica still handles the money, the stock and the credit checks; the app lets those callers send a checked order without dialing.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Acumatica does not charge per user seat. Why not just give every kitchen a portal login?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You can, and for kitchens that like to shop online it works well: live stock, their own prices, past orders to repeat. The gap is the kitchen that will not sit down to browse. For that kitchen, we offer a way to say what it needs instead.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is talking an order through better than Acumatica's portal?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For the kitchens that keep calling instead of logging in, yes: saying the order and checking each line suits them better than browsing a catalog and checking out. For kitchens happy in the portal, keep the portal. Either way, nothing moves out of Acumatica; our app sits alongside it and is not an Acumatica alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does anyone else sell voice add-ons for Acumatica?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Some add-ons let reps dictate orders. Others answer a customer's call and record what is ordered.  Ours puts the app in the kitchen's hands, and the kitchen confirms every line before it reaches you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will orders flow into Acumatica on their own?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing links them out of the box: they are two products from two companies, and each company's support covers its own product only. Over EDI or through the API, the order may load straight into Acumatica without being typed again, if your system is set up to accept it; we check that in the demo. By email, you get a file the chef has already gone over, and your team enters it from that, not from a call or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does our Acumatica partner have to be involved?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not to get started. Setup takes no Acumatica login and puts nothing inside it: we work from a spreadsheet you export. If orders should later import on their own, we cover in the demo what you would have to arrange.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly could kitchens start, and what is the cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running in 24 to 48 hours, since nothing changes inside Acumatica. On price, Acumatica publishes a starting figure for its distribution package; we publish none and quote per distributor. An Acumatica replacement would shift your accounting, inventory and warehouse onto a new ERP, which is a different decision from adding an ordering app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where did these Acumatica facts come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We checked acumatica.com and Acumatica's community site on 9 November 2026, looking at the distribution pages, the customer portal and its datasheet, the pricing and distribution package pages, the AI page and the AI Assistant notes. Their prices and results figures are left off this page. Should a detail have changed since, send us a note and we will correct it.
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
  <h2>Leave Acumatica alone, and give your callers an app to speak into</h2>
  <p>Twenty minutes, one spoken order, and a clear look at where it arrives.</p>

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
        <li><a href="#comparison">Acumatica + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-taking-software">Order Taking</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/distribution-workflow-software">Distribution Workflow</a></li>
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
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
