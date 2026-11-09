/* Comparison page: Shopify B2B, and Shopify B2B with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (webshops / EDI / order capture; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Shopify B2B,
 * never its replacement. Table = "Shopify B2B + VoiceOrder Solutions" vs "Shopify B2B on its own";
 * every Shopify B2B strength is a check mark in both columns. Separate products, no built-in link
 * (FAQ 3); whether a Shopify setup takes our EDI or API output is a demo question.
 * Angle: A STORE FOR ACCOUNTS THAT SHOP, AN APP FOR CHEFS WHO STILL CALL. Shopify B2B turns wholesale
 * into a store (company catalogs, a cart and "the best-converting checkout", often the same store as
 * retail). Its own answer to a phoned order is a DRAFT ORDER your staff build ("capture phone, email,
 * and in-person orders into Shopify using draft orders"). Second strand: direct company catalogs are a
 * Plus-only feature (three catalogs on Basic, Grow and Advanced), while every VoiceOrder Solutions
 * account gets its own guide. Off the taken list: inFlow ("No more phone orders"), Acumatica (free
 * portal skipped), Odoo (Order Again), NetSuite (store add-on), Zoho (portal takes payments).
 * ⚠ Shopify B2B HAS quick order, reorders from a past order, payment terms, sales rep permissions,
 *   ERP connections: ✓ both columns. Never "it cannot take phone orders": draft orders exist.
 * ⚠ OUR ORDER IS NOT A SHOPIFY ORDER: not in the store's order history, reports, Flow or the chef's
 *   Shopify account until entered or taken over EDI/API (FAQ 4, coexistence card 2).
 * ⚠ Third parties sell AI phone ordering (Workd) and emailed-PO readers (LevelOps, AutoApprove) for
 *   Shopify: one-line concession in FAQ 5, unnamed; never imply they read our files.
 * ⚠ Shopify publishes plan prices: conceded in the cost FAQ with no figure. No pricing row.
 * ⚠ claims.js bans "Shopify" except via registry competitorAlso; the ERPs named on Shopify's B2B page
 *   are banned names too: write "ERP connections through partners".
 * Every claim is sourced and dated in _build/research/competitors/shopify-b2b.md.
 * Review 2026-11-09 (wave 3 FIXES3 U1-U14 + page section): H1 moved off "For Chefs Who Phone" to the
 *   draft-order angle; Shopify API line says nothing connects ours to it (factcheck-a M6); "Shopify, or
 *   the ERP behind it" is the record (L2); sales-rep row scoped Grow and up (L3); "three catalogs
 *   assigned across your B2B markets" (L4); prices said once plainly (guide row: app prices are kept
 *   apart from Shopify catalogs, bulk updates a demo question); onboarding in the setup FAQ; retyping in
 *   the problem lead, FAQ 3 and the delivery paragraph only; call-gets-no-number once (delivery bullet);
 *   retail-shoppers card replaced by "You pick which restaurants get the app" (only listed accounts are
 *   set up, KB onboarding flow).
 */
module.exports = {
  title: "Not a Shopify B2B Alternative: Keep It, Add Voice Ordering",
  description: "Keep your Shopify B2B store for accounts that shop online, and let chefs who still call say each order in an app. Not a Shopify B2B alternative: keep both.",
  related: ["b2b-wave-alternative","orocommerce-alternative","sana-commerce-alternative"],
  relatedHeading: "More stores and systems you can keep",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Shopify B2B Alternative: Callers Send Checked Lists</h1>
      <p class="lead mt-16">
        The restaurants you take calls from can send finished orders without their chef shopping a website. Instead, that chef says the day's items into the VoiceOrder Solutions app, looks the list over and sends. Your Shopify B2B store keeps its catalogs, prices and checkout for every account that buys online.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Your store stays as it is</span>
        <span class="hero-trust-dot"></span>
        <span>No Shopify app to install</span>
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
      <div class="stat-label">Saved per restaurant order, app versus phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Ordering hours for chefs, after your desk closes too</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors, with Shopify left untouched</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Shopify B2B is a full wholesale store, so five of nine rows go to both columns. The four that
     differ are about the chef who calls instead of shopping.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">A Store And An App</span>
      <h2>Shopify B2B plus VoiceOrder Solutions.<br>A store for shoppers, an app for callers.</h2>
      <p class="lead mt-16">
        A chef who would rather phone can now talk the list into our app, then read it over before sending. Shopify B2B keeps giving each company account a catalog, a cart and a checkout, which suits restaurants happy to buy online. This is not a Shopify B2B alternative: you keep both, and no built-in connection joins the two products.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Shopify B2B + VoiceOrder Solutions</th>
            <th style="width:30%;">Shopify B2B on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A wholesale store with company accounts and payment terms</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef who phones today can speak the items and review them</td>
            <td><span class="check-yes">✓</span></td>
            <td>Phoned in, then built as a draft order by your staff</td>
          </tr>
          <tr>
            <td>Bulk quick ordering and reorders from a past order</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A guide with each restaurant's own items and prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>Company catalogs on Plus; up to three market catalogs on other plans</td>
          </tr>
          <tr>
            <td>Retail shoppers and wholesale accounts served from one store</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restaurant that used to phone now sends numbered, time-stamped orders</td>
            <td><span class="check-yes">✓</span></td>
            <td>Numbered once your staff create the draft</td>
          </tr>
          <tr>
            <td>Sales reps limited to their assigned accounts (Grow plan and up)</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An ordering app for restaurants on iOS and Android</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>ERP connections through partners and apps</td>
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
      <span class="eyebrow">Where Calls Still Land</span>
      <h2>Why distributors start looking at a Shopify B2B competitor</h2>
      <p class="lead mt-16">
        Shopify B2B serves restaurants that like to shop online, and when one phones instead, Shopify's answer is a draft your staff build. A Shopify B2B alternative would be one more store, so it would do nothing for the chefs who keep phoning. With our app, those chefs say what they need and read it over. An order we email still becomes a draft someone builds, but the chef has gone over every item first.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>Shopify B2B centers on the cart and checkout</h4>
        <p class="text-muted mt-12">
          Shopify sells B2B on "the best-converting checkout." To buy there, a chef signs in, searches the catalog, fills a cart and checks out. Buyers who like a website do fine. A chef holding tomorrow's short list in their head may just call you instead.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4>Every call turns into a draft somebody keys in</h4>
        <p class="text-muted mt-12">
          Shopify's help center says staff "capture phone, email, and in-person orders into Shopify using draft orders." For each call, someone on your team listens and builds that draft one item at a time.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📚</div>
        <h4>A catalog for each account needs Shopify Plus</h4>
        <p class="text-muted mt-12">
          Shopify's plan table gives each company its own catalog only on Plus; Basic, Grow and Advanced allow up to three catalogs assigned across your B2B markets. If every restaurant pays its own prices, that can decide your plan.
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
      <h2>Not a Shopify B2B alternative: what the app adds beside your store</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>No cart and no checkout</h3>
          <p class="mt-12 text-muted">
            From the walk-in or the prep table, the chef names what the restaurant needs. Our app matches each item to that restaurant's guide and lists it, so the chef can change an item or amount before sending. Your desk gets a finished list instead of a call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing goes out until the chef has looked over every item</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders can go in late at night or on a holiday</span>
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
              <span>An interrupted order waits for the chef to pick it back up</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How restaurants send orders by voice →</a>
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
          <h3>One guide per restaurant, whatever your Shopify plan</h3>
          <p class="mt-12 text-muted">
            Send us a spreadsheet of what each restaurant buys from you and what it pays. We load it as that account's guide, under your own item numbers. In our admin you keep every guide and its prices current, and manage the accounts themselves. That means the app's prices are kept apart from your Shopify catalogs. Whether price changes can come over in bulk, from Shopify or another system, is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each chef sees the items that restaurant usually orders</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit one account's items without touching your store</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your full catalog and price lists stay in Shopify</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing is installed in Shopify to set it up</span>
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
          <h3>An email file, or EDI and the API if your systems take them</h3>
          <p class="mt-12 text-muted">
            Each finished order arrives by email as a PDF, Excel or Word file, or goes out through EDI, our API or into QuickBooks. An order sent to QuickBooks goes to your books, not into Shopify. Over EDI or our API, it could reach your systems with no one typing it, if they are set up to take it; nothing connects us to Shopify out of the box, and a demo is the place to ask what that would take. For email orders, a person on your team creates the Shopify draft order from the file, with the chef's changes already in it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to one rep or to a shared order desk inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Calls get no number from us; each order chefs send in the app has one, plus the time it was sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Packing and delivery run the way they do today</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">See what an order includes →</a>
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
          <h3>Stock in view beside incoming restaurant orders</h3>
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
              <span>The stock your store shows shoppers stays in Shopify</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Buying from your own suppliers stays with you: we never raise a purchase order</span>
            </li>
          </ul>
          <a href="/inventory-visibility-software" class="feature-link">How stock visibility works →</a>
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
      <h2>How restaurants start ordering beside your Shopify store</h2>
      <p class="lead mt-16">
        It starts with the items on each account and ends with chefs ordering from their phones.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export each account's items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet from Shopify or your ERP is usually all we need: every restaurant's regular items, its prices and the codes you use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We open the accounts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each guide goes in, the account opens, and the chef installs the app.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Restaurants that phoned start sending app orders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          App orders arrive with a number and a send time, in the format set up for you, next to the orders coming through your store.
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
      <h2>What changed for the chefs who used to call</h2>
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
            "Nothing changed in our store. The phone orders moved to the app, and our online accounts never noticed."
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
            "Our desk used to take down every phoned order and build the draft while the chef spoke. Those chefs now send a list they have already read over."
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
      <span class="eyebrow">Store And App, Side By Side</span>
      <h2>What Shopify keeps, and where app orders sit</h2>
      <p class="lead mt-16">
        This is not an alternative to Shopify B2B. Everyone who buys in your store goes on using it, and the app is meant for the restaurants whose orders you now take by phone.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🛍️</div>
        <h4>Quick order and reorders work as before</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Quick order, reorders, payment terms and company logins all stay as they are, and nobody has to leave Shopify.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>App orders live in our admin, not in Shopify</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Our admin keeps the orders that come in through the app. Shopify counts one only once your team builds it there, or EDI or our API brings it in, where your systems allow.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏬</div>
        <h4>You pick which restaurants get the app</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We set up only the accounts you list for us, so the ones that phone get a guide in the app.
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
      <h3 style="margin-bottom:10px;">Watch a chef's list arrive with no call for your desk to take</h3>
      <p class="text-muted" style="font-size:16px;">
        During the demo, we say a restaurant's order into our app, replace one product, send it, then show you the email it turns into. After that, we cover where it would sit beside your online store.
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
      <h2>What Shopify sellers ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Shopify B2B alternative before chefs can order with their voice?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. The store, its catalogs, the checkout and your terms stay put. What changes is how your phone-in customers buy: their chef opens our app, speaks each item, checks what it lists and sends it, rather than reading the order out to someone on your team.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Shopify B2B?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job: turning a chef's spoken list into an order, for chefs who prefer speaking to browsing. The store, catalogs, checkout and payments are Shopify's work, so we stay next to it and are not a Shopify B2B alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is it linked to Shopify, and will my desk still type orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No link is built in: they come from two companies, and neither supports the other's software. If we email the order, someone on your side still enters it in Shopify. What they skip is the call: no one listens, writes the items out and reads them back, since every item was gone over in the app first. Shopify has an API for creating orders, but nothing connects ours to it out of the box. If your setup can accept our orders by EDI or the API, no one types them again; a demo answers whether it can.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will app orders show up in our Shopify reports?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only once they are in Shopify. Until then, our orders stay out of Shopify's order history, reports and automations, and the chef will not find them in their Shopify account. Once an order is in Shopify, Shopify gives it a number of its own. Shopify, or the ERP behind it, stays the record for your customers, your stock and your invoices. On our side we hold the guides, prices included, along with whatever the chefs send through the app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Couldn't restaurants just use Shopify's quick order list?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Chefs who like it should hold on to it, along with reorders from earlier purchases. Other apps answer calls with AI or read emailed POs into drafts for your team to approve. Those take the call or the file as it arrives; ours gives the chef the list on their own phone to fix before it goes.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Which Shopify plan do we need for this?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Any of them: setting up changes nothing in your store. Your plan matters on Shopify's side for features like per-company catalogs, which Shopify lists on Plus; each account in our app gets its own guide whichever plan you are on. If you later want orders sent into Shopify over the API, the demo covers what that would take.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quick is setup, and what will it cost us?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running in 24 to 48 hours, and your store does not change. Send us the items each restaurant usually buys, often as an exported spreadsheet. We load them, set up every account, and the chefs install our app; most restaurants have a first order in that same day. Shopify lists what its plans cost. We publish no prices; each distributor gets its own quote. Swapping in a Shopify B2B replacement means rebuilding your store, catalogs and checkout elsewhere; the app leaves all three in place.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Shopify B2B details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We read shopify.com and Shopify's B2B help pages on 9 November 2026: the wholesale page, plan pricing, and the guides to B2B plan features, store types, customer accounts, draft orders and sales staff. The third-party tools turned up in a search of the Shopify App Store and the wider web. Spot something out of date? Write to us and we will fix it.
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
  <h2>Leave Shopify B2B as built. Move the order your desk takes over the phone onto the chef's screen.</h2>
  <p>Twenty minutes is enough to hear a restaurant's list spoken into the app and see the checked version your desk would get instead of a call.</p>

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
        <li><a href="#comparison">Shopify B2B + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
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
