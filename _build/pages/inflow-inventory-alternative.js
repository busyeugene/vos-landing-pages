/* Comparison page: inFlow Inventory, and inFlow Inventory with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 wave 2 (inventory systems; Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside inFlow,
 * never its replacement. Table = "inFlow Inventory + VoiceOrder Solutions" vs "inFlow Inventory on its
 * own"; every inFlow strength is a tick in both columns. They are separate products with no built-in link
 * (FAQ 5); whether an inFlow setup takes our formats in directly is a demo question, never a claim.
 * Registry competitor is `inFlow`, so "inFlow", "inFlow Inventory", "inFlow Showroom" all count as naming
 * it; every keyword phrase uses the full "inFlow Inventory".
 * Angle (distinct from the ERP pages and the other inventory-system pages): inFlow's own wholesale page
 * says its Showroom means "No more phone orders". Showroom is a catalog a customer browses, a cart and a
 * checkout ("just like on an ecommerce site", inFlow's words). It suits accounts that like to shop. A chef
 * at the walk-in who already knows what is short would rather SAY the list, which is why some kitchens keep
 * calling, and each call becomes a sales order someone types into inFlow. Second strand: inFlow's AI
 * (Report Assistant; an AI assistant that creates orders "by just chatting" via its MCP server) works at
 * the distributor's desk, not in the chef's hands.
 * ⚠ inFlow HAS customer ordering (Showroom: private catalogs, per-customer prices, live available stock,
 *   cart, checkout, order number, online payment in US/Canada). Never "no portal" or "no online ordering".
 * ⚠ inFlow HAS a mobile app, but for "your team" (each team member gets a login). Never "no mobile".
 * ⚠ inFlow HAS AI and an MCP server that can create orders; its API lets others build speech or AI order
 *   tools. FAQ 4 concedes it: never "the only voice option for inFlow". No packaged voice tool was found.
 * ⚠ inFlow PUBLISHES its prices: conceded in FAQ 6, every figure kept off the page, no pricing row.
 * ⚠ inFlow is the stock system (reorder points, lots, expiry, bins): every inventory row ticks both columns.
 * ⚠ Showroom shows customers live stock; VoiceOrder Solutions may not claim that (KB: unconfirmed).
 * Every inFlow claim is sourced and dated in _build/research/competitors/inflow.md.
 * Review 2026-11-09 (wave 2 fixes, FIXES2.md): H1 + hero on inFlow's own "No more phone orders" and the
 * calls it did not end; problem card 3 is now the emailed Showroom invite (the AI/MCP "at your desk" card
 * is gone; the AI fact lives only in FAQ 4, merged with the staff mobile app); FAQ 7 is now inFlow Pay;
 * coexistence card 3 is restocking on inFlow's reorder points; table gained "Order without scrolling a
 * catalog" (reorder points folded into row 1). Retyping by email is said once, in the problem lead.
 */
module.exports = {
  title: "Not an inFlow Inventory Alternative: Keep It, Add Voice Orders",
  description: "inFlow's Showroom did not end every call. Chefs who phone can speak the items into our app and review them. Not an inFlow Inventory alternative: an addition.",
  related: ["orderease-alternative","wizcommerce-alternative","odoo-alternative"],
  relatedHeading: "More systems that keep running beside a spoken order",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An inFlow Inventory Alternative: For Kitchens Still Calling</h1>
      <p class="lead mt-16">
        Give the kitchens who still phone you, even with an online Showroom promising "No more phone orders," an app to order in. Their chef says each item, fixes any that came out wrong, and sends the checked list. inFlow Inventory still looks after stock, the Showroom and your sales orders.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare Side By Side</a>
      </div>

      <div class="hero-trust">
        <span>inFlow still runs stock</span>
        <span class="hero-trust-dot"></span>
        <span>Chef approves every item</span>
        <span class="hero-trust-dot"></span>
        <span>No catalog to scroll</span>
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
      <div class="stat-label">Saved on each order that replaces a call</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Kitchens can send an order, whatever the hour</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">To go live, for most distributors</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     inFlow is the stock system and has its own B2B portal (Showroom), so six of nine rows tick in
     both columns. The three rows about the kitchen that calls (voice + check, no catalog, numbered order) differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">inFlow, Plus Spoken Orders</span>
      <h2>inFlow Inventory plus VoiceOrder Solutions.<br>One more way for kitchens to order.</h2>
      <p class="lead mt-16">
        A chef who would rather not scroll through products can say the items out loud instead. inFlow Inventory keeps handling stock, invoicing and the Showroom. What changes is how a chef who calls today gets the order to you: by saying it into an app. This is not an inFlow Inventory alternative: the two stay separate, and nothing built into either one joins them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">inFlow Inventory + VoiceOrder Solutions</th>
            <th style="width:30%;">inFlow Inventory on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock by location and bin, with counts and reorder points</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>The chef names the items at the shelf, then checks them over</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Showroom: a private online catalog per customer, at that customer's prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Lot numbers and expiry dates, traceable for recalls</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order without scrolling a catalog</td>
            <td><span class="check-yes">✓</span></td>
            <td>Showroom: browse, add to cart, check out</td>
          </tr>
          <tr>
            <td>A restaurant that used to phone now sends a numbered, timed order</td>
            <td><span class="check-yes">✓</span></td>
            <td>A call your team types into a sales order</td>
          </tr>
          <tr>
            <td>Barcode scanning, picking, packing and shipping</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A mobile app for your staff: sales, stock checks, receiving</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Invoicing and accounting sync</td>
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
      <span class="eyebrow">Why People Look</span>
      <h2>The usual reason to look up an inFlow Inventory competitor</h2>
      <p class="lead mt-16">
        Look up an inFlow Inventory alternative and the reason is often a set of kitchens Showroom never won over: their chefs would rather name items than shop for them, so they keep calling. Once they order in our app, an emailed order still gets keyed into inFlow by hand, though from a list its chef has reviewed. Through EDI or our API it can skip that step if your setup allows it; we check that with you in the demo.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>Showroom is built for shopping</h4>
        <p class="text-muted mt-12">
          inFlow describes its Showroom as a place to browse products and add them to a cart, "just like on an ecommerce site." That suits an account choosing from pictures. A chef at the walk-in who already has the list in mind wants to name those items, not scroll for them.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Not every call stopped</h4>
        <p class="text-muted mt-12">
          inFlow says a Showroom order flows straight into inFlow, so nobody has to pick up the phone. For the kitchens that use it, that holds. The ones that never open it go on phoning, and someone at your desk turns each call into an inFlow sales order.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">✉️</div>
        <h4>Showroom starts with an emailed invite</h4>
        <p class="text-muted mt-12">
          Each customer gets into Showroom through an email invite. The inFlow Learning Center says an invite is valid for two weeks. A chef who never opens it keeps calling, and that order still lands on your desk.
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
      <h2>Not an inFlow Inventory alternative: what we add for the kitchens that call</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Said at the walk-in, sent from the same spot</h3>
          <p class="mt-12 text-muted">
            The chef presses Push to Speak, names each item, and our app matches it to that restaurant's own guide. The chef fixes any item the app misheard, then sends.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The chef looks over every item first</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Takes orders 24/7, Sundays and holidays too</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on whatever iPhone or Android the chef carries</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>An interrupted order is saved and picks up where the chef stopped</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">Taking orders without the phone →</a>
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
          <h3>Each account's usual items, from your inFlow export</h3>
          <p class="mt-12 text-muted">
            Send us an export from inFlow of what each account normally buys, with its prices. We load that list as the account's guide under your own codes, so each chef orders from that restaurant's usual items. You keep each guide's prices current in our admin; whether they can update from inFlow is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Not your whole range, just what that account buys</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Prices set by you, one account at a time</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Add or drop items in our admin when an account's buying shifts</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setting up changes nothing inside inFlow</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Keeping each guide up to date →</a>
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
          <h3>Orders reach your desk by email, EDI or the API</h3>
          <p class="mt-12 text-muted">
            Each order leaves as an email with a PDF, Excel or Word file, or travels over EDI, through our API, or into QuickBooks. Whether EDI or the API can bring it into inFlow at your end is a question the demo answers.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to one rep or a shared order inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each app order carries a number and the time it was sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking and shipping carry on in inFlow</span>
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
          <h3>Stock in view while orders come in</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts stay in inFlow; ask in the demo how its levels connect</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for your team when a big order lands late</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>inFlow tracks lots and expiry, as it does now</span>
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
      <h2>From inFlow export to first spoken order</h2>
      <p class="lead mt-16">
        Your part is one export out of inFlow; loading guides and opening accounts is ours.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send us an inFlow export</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet listing what every account orders and pays, with your own codes, is usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Guides loaded, accounts opened</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load each guide and open its account. The chef downloads the app, and most kitchens send a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders arrive already checked</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each arrives reviewed by the kitchen, numbered, timed and in the format you chose.
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
      <h2>What changed for the kitchens that called</h2>
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
            "Some of our chefs were not about to scroll a catalog for a full order. Saying it suits them, and fewer of them call now."
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
            "The online catalog cut some of our calls, not all of them. The chefs who kept phoning at closing now say their items into the app from the walk-in."
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
      <h2>What inFlow keeps, and the one step we add</h2>
      <p class="lead mt-16">
        Think of it as an extra way in, not an alternative to inFlow Inventory: shoppers keep the Showroom, callers get the app, and inFlow runs the rest.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>inFlow stays your system of record</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          inFlow remains where your customer list, stock levels, lot tracking and invoices are kept. We look after every account's order guide, at prices you update in our web admin, and the orders their chefs send from the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛍️</div>
        <h4>Showroom shoppers can keep shopping</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers who like browsing pictures and checking out online can stay on the Showroom. Our app is built for the kitchens that pick up the phone. A call that still comes in gets no number from us; in the app, each order is numbered and timed.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Restocking still runs on inFlow's reorder points</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Its reorder points and suggested purchase orders still guide when you buy. We never raise purchase orders; we only bring in what each restaurant orders.
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
      <h3 style="margin-bottom:10px;">Hear a chef order a full list without browsing</h3>
      <p class="text-muted" style="font-size:16px;">
        In a twenty-minute demo we speak a practice order as a chef who skips the Showroom would, correct an item, send it, and show how it could reach inFlow on your side.
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
      <h2>Questions distributors on inFlow tend to ask</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is an inFlow Inventory alternative the only way to get kitchens speaking their orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. inFlow stays, Showroom stays for those who enjoy shopping, and the restaurants still on the phone with you get our app. You receive orders the chef has spoken and then checked, and inFlow handles stock and sales orders as before.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than inFlow Inventory?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not overall. We do better with one kind of customer: the chef who keeps calling because browsing a catalog for a known order feels slow. Stock counts, Showroom orders and all the work once you have the order belong to inFlow, so we sit beside it as an addition, not an inFlow Inventory alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't inFlow's Showroom already end phone orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It can, for the customers who take to it. Showroom gives each one a private catalog with its own prices and live stock, a cart and a checkout. A kitchen that will not shop for its order that way tends to keep calling. For that kitchen, our app offers a different habit: speak the list, review it, send.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can our restaurant customers order through inFlow's mobile app or its AI?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          inFlow built both for your team. Its mobile app gives each team member a login to make sales, check stock, pick and receive. Its built-in AI writes reports on request, and through its MCP server, a link for outside AI tools, an AI assistant can raise an order that someone on your team asks for. Its API also lets other speech or AI order tools be built or connected, so ours is not the only way. What we add is a ready-made app on the chef's own phone, holding only that restaurant's guide, with every item reviewed before it is sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can inFlow Inventory and VoiceOrder Solutions be linked, and does my team still key in orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not directly. The two come from different companies, nothing joins them out of the box, and each company answers only for its own product. If your inFlow account is able to accept orders by EDI or through an API, they can land there with no retyping; a demo will tell you whether yours does. By email, it lands as a file in the inbox, every item already reviewed by the chef, and one of your people keys it in from there, not from a call or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly are we set up, and what will it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors it takes 24 to 48 hours, and nothing in inFlow changes for it. inFlow lists its plan prices on its website; ours are not published, and each distributor gets a quote. A true inFlow Inventory replacement would first have to take over your products, customers and sales history. We start from a single export and leave that history in inFlow.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do invoices and card payments change?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. inFlow still invoices each order and, in the US and Canada, can take card payments through inFlow Pay. We send you only the order; billing and getting paid are still handled in inFlow.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the inFlow details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From inflowinventory.com and inFlow's Learning Center, as we found them on 9 November 2026: the homepage, the inFlow Inventory, Showroom, wholesale, sales, mobile, integrations, pricing and onboarding pages, and inFlow's own comparison pages. Its prices are public; we left the figures off because they change. The note on other tools comes from a web search for inFlow ordering add-ons. Spot anything out of date and we will update it.
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
  <h2>Leave the Showroom to shoppers. Give the callers an app to speak into.</h2>
  <p>Book twenty minutes and follow a single spoken order all the way to your desk, checked by the chef on the way.</p>

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
        <li><a href="#comparison">inFlow Inventory + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
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
