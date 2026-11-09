/* Comparison page: OroCommerce, and OroCommerce with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (webshops / EDI / order capture; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside OroCommerce,
 * never its replacement. Table = "OroCommerce + VoiceOrder Solutions" vs "OroCommerce on its own";
 * every OroCommerce strength is a check mark in both columns. They are separate products with no
 * built-in link (FAQ 4); whether a setup takes our EDI or API output is a demo question.
 * Angle: BUILT FOR COMPLEX BUYING, A KITCHEN REORDER IS SHORT. OroCommerce sells itself on corporate
 * accounts, account hierarchies, roles, approval chains, spend limits, RFQs and bulk entry. A
 * restaurant's reorder is one chef with a short list of usual items and no approval. Keep the store
 * for the accounts and orders that need it; give chefs who would rather call a short spoken order.
 * Oro's own AI page concedes the habit ("Many buyers still prefer sending orders or calling their
 * rep instead of navigating a portal"); its answer, SmartAgent, sits in the Enterprise storefront
 * for logged-in buyers.
 * ⚠ SmartAgent takes "natural spoken or written language" (Oro docs, v7.0): never "they type, we
 *   speak", never "the only voice option". FAQ 3 concedes it (the 2017 Alexa connector was cut there:
 *   it fetched data, and the buyer reviewer read it as noise).
 *   Whether SmartAgent shows the buyer a list to check is unverified: say nothing either way.
 * ⚠ The store already does reorders from history, saved lists, standing orders, live availability,
 *   customer catalogs and prices, quotes, payments, a field sales app for reps, EDI and SmartOrder
 *   (emailed PO files to draft orders): check marks in both columns. Never imply SmartOrder reads
 *   our files or that the two can be chained.
 * ⚠ Food distributors run it (an Ohio foodservice distributor added order guides and cut-off times
 *   through an integrator): FAQ 6. Never "not for food".
 * ⚠ An app order does not pass through the store: not in its order history (FEATURE 3, FAQ 4).
 * ⚠ Their figures stay off (time saved, line counts, customer counts, recognition). The six-month
 *   average implementation is attributed once, in the replacement sentence of the cost FAQ.
 * ⚠ No ERP names (claims.js): "your ERP".
 * Every claim is sourced and dated in _build/research/competitors/orocommerce.md.
 * Review 2026-11-09 (wave 3 FIXES3 U1-U14 + page section): H1 on the store login (one chef, short
 *   reorder, no sign-in); hero lead rewritten; Alexa aside cut (buyer: noise); delivery paragraph scoped
 *   (factcheck-a M5); after-hours row -> store sign-in row; records card -> typing FAQ, card -> "Quotes
 *   stay with your reps"; onboarding in the cost FAQ; prices said once in the guide row; guide timing
 *   and off-guide limit removed; T2 = SmartAgent quote; final H2 per sameness S3.
 */
module.exports = {
  title: "Not an OroCommerce Alternative: Keep It, Add Voice Ordering",
  description: "OroCommerce suits corporate buying. Chefs who skip the store can say a short reorder into our app and check it. Not an OroCommerce alternative: keep it.",
  related: ["sana-commerce-alternative","shopify-b2b-alternative","b2b-wave-alternative"],
  relatedHeading: "More platforms we sit beside, not in place of",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An OroCommerce Alternative: No Login To Reorder</h1>
      <p class="lead mt-16">
        When a chef would rather phone than sign in to your store, let them send each short reorder as a list they have looked over. In the VoiceOrder Solutions app, chefs say their usual items and fix any wrong one before sending. OroCommerce keeps the storefront, sign-offs and quotes your larger accounts use.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Your storefront stays as built</span>
        <span class="hero-trust-dot"></span>
        <span>Approval rules left in place</span>
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
      <div class="stat-label">Saved on each reorder sent in the app, not by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">When a chef can send a reorder, desk open or not</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors, storefront untouched</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     OroCommerce is a full B2B storefront, so six of nine rows go to both columns. The three that
     differ are about the chef who would rather call.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Complex Buying, Short Reorders</span>
      <h2>OroCommerce plus VoiceOrder Solutions.<br>A short way in for short orders.</h2>
      <p class="lead mt-16">
        Rather than call, a chef can speak the reorder into our app. OroCommerce centers on corporate buying, with account roles, approval chains, spend limits and quotes, and those stay for the accounts that need them. This is not an OroCommerce alternative: you keep both, each working on its own with nothing joining them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">OroCommerce + VoiceOrder Solutions</th>
            <th style="width:30%;">OroCommerce on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Catalogs and price lists set per customer</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Chefs speak a reorder into a phone app, then look over each item</td>
            <td><span class="check-yes">✓</span></td>
            <td>A mobile-ready store; a buyer app is not listed on their site</td>
          </tr>
          <tr>
            <td>Approval chains, buyer roles and spend limits for larger customers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Reorders from history, saved lists and standing orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Reorders from chefs who used to call arrive with our order number and send time</td>
            <td><span class="check-yes">✓</span></td>
            <td>Phoned to your desk and typed in there</td>
          </tr>
          <tr>
            <td>Quote requests negotiated with your reps</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Emailed purchase order files drafted into orders by SmartOrder</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A chef's reorder with no store sign-in</td>
            <td><span class="check-yes">✓</span></td>
            <td>SmartAgent takes spoken requests from buyers signed in to the Enterprise store</td>
          </tr>
          <tr>
            <td>Invoices and card or ACH payments in the buyer portal</td>
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
      <span class="eyebrow">Why It Comes Up</span>
      <h2>What has distributors searching for an OroCommerce competitor</h2>
      <p class="lead mt-16">
        OroCommerce does its best work with corporate buyers, while a restaurant reorder is often one chef with a short list, so some of those chefs still call. Swapping in an OroCommerce alternative would not end that call. Orders from our app skip the store. If you have them emailed, your team types each one in from the chef's own checked list.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🏢</div>
        <h4>Built around the corporate buyer</h4>
        <p class="text-muted mt-12">
          Oro describes its platform as designed for corporate accounts and complex workflows: account hierarchies, roles and permissions, approval chains, budgets and quotes. A chef topping up produce and dairy for the weekend needs none of it.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">☎️</div>
        <h4>Oro says it too: plenty of buyers prefer a call</h4>
        <p class="text-muted mt-12">
          Oro's own AI page says many buyers still prefer sending orders or calling their rep to navigating a portal. Each of those calls means someone at your desk listening and typing every item into your system.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">💬</div>
        <h4>Oro's voice assistant is for signed-in buyers</h4>
        <p class="text-muted mt-12">
          SmartAgent, Oro's buyer assistant, takes spoken or typed requests from people signed in to your Enterprise store. A chef in the habit of calling your rep may never open it, and that reorder still comes by phone.
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
      <h2>Not an OroCommerce alternative: what it adds for the quick reorder</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>A short reorder, with no store to open</h3>
          <p class="mt-12 text-muted">
            Standing at the walk-in, the chef names what is running low. Our app matches each spoken item to the restaurant's own guide and lists them, so the chef can change an item or an amount before sending.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each item sits on the chef's screen until they press send</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A reorder can still go in after close or on a holiday</span>
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
              <span>If the chef gets pulled away, the order is saved where they stopped</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How restaurants get their orders to you →</a>
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
          <h3>Its own guide for every restaurant you supply</h3>
          <p class="mt-12 text-muted">
            Send us what each restaurant normally orders, with prices; an export from your store or ERP is typical. We turn it into the guide that restaurant orders from. You update each account's guide and prices in our admin platform, where you also manage the accounts. Whether price changes can come over from OroCommerce or your ERP in bulk is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every item carries your own item number</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Guide changes are yours to make, one account at a time, in our admin</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup works from a spreadsheet, with no OroCommerce login</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing in your store's catalogs changes</span>
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
          <h3>Delivered to the inbox or system you choose</h3>
          <p class="mt-12 text-muted">
            We send each finished order to you as an email attachment, or by EDI, our API or QuickBooks. It never passes through your OroCommerce storefront, so it will not show in the store's order history unless your setup loads it there. An EDI or API order can land in your ERP or OroCommerce directly if your setup is built for it; a demo tells you whether it can. A QuickBooks order goes to your books, not into OroCommerce.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to one rep or to a shared order desk address</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your team enters emailed orders from the chef's approved list</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking and delivery carry on as they run now</span>
            </li>
          </ul>
          <a href="/wholesale-ordering-software" class="feature-link">What arrives at your desk →</a>
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
          <h3>Stock in view alongside the reorders</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock shown to buyers in your store is left as it is</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for whoever takes orders</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Buying from your own suppliers stays in your ERP</span>
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
      <h2>Adding spoken reorders beside OroCommerce</h2>
      <p class="lead mt-16">
        You send the regular items for each account, we set up each restaurant on our side, and the chef puts the app on their phone.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send us the usual items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet listing each restaurant's normal items with their prices, under your codes, is usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Each restaurant goes live</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load its guide, then the chef downloads the app and can order from that guide.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Short reorders start arriving</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders from the app each carry a number and a send time, in the format you set up.
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
      <h2>When the quick reorders moved to the app</h2>
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
            "Most of our restaurant reorders are the same handful of items each week. The chef says them, fixes one if needed, and sends."
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
            "SmartAgent helps the buyers who sign in to our store. The chefs who never signed in now say their reorder into the app."
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
      <span class="eyebrow">Big Accounts, Short Orders</span>
      <h2>What OroCommerce keeps doing, and what we take on</h2>
      <p class="lead mt-16">
        We are not an alternative to OroCommerce: our one job is moving a restaurant's short reorder from its chef to you.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🏬</div>
        <h4>Store regulars stay put</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We set up only the restaurants you list, so an account happy with the store keeps using it, with its approvals and payments.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📝</div>
        <h4>Quotes stay with your reps</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Quote requests, and the field sales app reps use to build quotes on site, stay in OroCommerce. Our app is for the reorder itself, from a chef who already knows what to restock.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🤖</div>
        <h4>Keep SmartAgent and SmartOrder on</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If buyers use SmartAgent in your store, or SmartOrder drafts the purchase orders customers email you, keep both running. Ours is a separate app that the chef holds.
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
      <h3 style="margin-bottom:10px;">Hear one reorder said, corrected and sent</h3>
      <p class="text-muted" style="font-size:16px;">
        In a 20-minute demo, you watch us say a sample reorder into the app, replace one product with another, send it, then see what lands on your desk. Then we cover how it would sit beside the store you run on OroCommerce.
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
      <h2>Questions distributors running OroCommerce bring us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need an OroCommerce alternative before chefs can reorder by voice?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Your storefront, catalogs and approval rules stay as they are. The change is for a restaurant whose chef calls your desk today: that chef now says the reorder aloud in our app and goes over every item before it reaches you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than OroCommerce?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only at one narrow job: a short restaurant reorder from a chef happier saying it than shopping for it. OroCommerce does far more, from corporate accounts to payments, so we run alongside it and are not an OroCommerce alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Oro's SmartAgent already accepts voice. What does your app add?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It is a real overlap. On the Enterprise edition, a buyer signed in to your store can ask SmartAgent, by voice or in writing, to check stock or place a reorder. If restaurants on your store use SmartAgent, keep it. Ours is a separate phone app built only around each restaurant's regular items: the chef just talks, then looks over what the app lists and fixes anything wrong before it goes, with no storefront to open.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is it linked to OroCommerce? Will someone here still type these orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The two are separate, nothing joins them out of the box, and you get support for each from its own company. By email, your office receives a file of the reorder as sent, so nobody answers a call, notes it down and reads it back; someone enters it from a finished list the chef approved. Through EDI or the API, it may load into OroCommerce or your ERP without retyping, provided either system is built to take such orders, which we check together in the demo. OroCommerce runs the store, and your ERP remains the system of record for customer accounts, inventory and billing. Our side holds the order guide for every restaurant, with its prices, plus the reorders that come through the app. A chef who phones instead still gets no order number from us.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Some of our customers are groups with approval rules. Does this change that?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Groups that need sign-offs, budgets and several logins keep ordering in OroCommerce, where those rules live. We made our app for the restaurant where the chef decides what to order and sends it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is OroCommerce a fit for foodservice distributors at all?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It can be. Oro sells to many kinds of distributors, and food distributors run it: one family-owned foodservice distributor in Ohio had an integrator add order guides and cut-off times for its restaurant customers. If your store works for the accounts on it, keep it, and add us for chefs who prefer the phone.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon can we start, and how is pricing set?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup is 24 to 48 hours for most distributors, with nothing in OroCommerce touched. You give us the items each restaurant tends to buy, most often in a spreadsheet exported from your system. From that we build the guides in our admin, then open an account for every restaurant. Each chef adds the app to their phone, and at most restaurants the first reorder goes out that same day. Oro explains that its license is priced on the value of goods sold through the store and offers a free Community Edition, but quotes its Enterprise pricing; we quote ours for each distributor too. An OroCommerce replacement would mean building a new store, which Oro's own FAQ puts at about six months on average, while adding us keeps yours as it is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the OroCommerce details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From oroinc.com, as we found it on 9 November 2026: the homepage, its FAQ, pricing, product, distributors, portal, workflow, AI and consumer-goods pages, plus Oro's documentation on its AI features and an integrator's case study of a foodservice company. If anything here no longer matches their site, tell us and we will correct it.
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
  <h2>Sign-offs for the groups who need them. Quick spoken reorders for chefs who need none.</h2>
  <p>Give us twenty minutes to show a reorder going from the walk-in to your desk, the way a chef who skips your store would send it.</p>

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
        <li><a href="#comparison">OroCommerce + VoiceOrder Solutions</a></li>
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
