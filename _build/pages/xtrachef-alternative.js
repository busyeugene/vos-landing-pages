/* Comparison page: xtraCHEF, and xtraCHEF with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT. VoiceOrder
 * Solutions comes through the restaurant's distributor, and only reaches distributors that offer it.
 * Same frame as the MarginEdge pilot: keep xtraCHEF, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, a sync or a partnership.
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: WHOSE GUIDE. In xtraCHEF the order guide is the restaurant's own list, built from past
 * invoices (or an uploaded bid sheet) and priced from the last invoice, sent as an email or PDF.
 * In VoiceOrder Solutions the guide is the distributor's, at the account's prices, kept current by
 * the distributor. xtraCHEF works from invoices, so the delivery's invoice still reaches it as usual.
 * ⚠ NAMING: the product is "xtraCHEF by Toast", but claims.js bans the bare word "Toast" (named
 *   integrations) and exempts only the registry competitor "xtraCHEF". So the visible copy says
 *   "xtraCHEF" only. The sourcing FAQ names support.toasttab.com (lowercase, does not trip the ban).
 *   Never "Toast Inventory" (a different product). Never say xtraCHEF is being retired.
 * ⚠ TRAPS (all in _build/research/competitors/xtrachef.md):
 *   1. xtraCHEF HAS ordering in both tiers, desktop and mobile: order guides, pars that make
 *      "to-be-ordered" amounts, recurring weekly orders sent automatically, email or PDF to ANY
 *      vendor, and a vendor "Confirm Order" button. Conceded in rows 5 and 8 and FAQ 4.
 *   2. AI invoice reading, camera capture, barcode scanning and a typed AI assistant all exist on
 *      that side, and its maker sells voice ordering for DINERS. Never "they type, we speak",
 *      "no AI" or "no voice ordering". The difference is whose guide and how the order lands.
 *   3. Their EDI is invoices IN only. Never say EDI carries their order.
 *   4. Pricing is PUBLISHED per location (help article). Figures stay OFF the page; FAQ 7 says so.
 *   5. Their onboarding runs weeks; never set it next to a setup time of ours (problem card 2
 *      states theirs with no figure and no comparison).
 *   6. After hours is NOT a VoiceOrder Solutions-only cell: their email goes any time and recurring
 *      orders send themselves. 24/7 is framed against calling the rep only.
 *   7. Toast POS is NOT required for xtraCHEF (their FAQ). The setup FAQ says no POS change is needed.
 * Their customer counts and testimonial lines are not repeated.
 */
module.exports = {
  title: "Not an xtraCHEF Alternative: Keep xtraCHEF, Add Voice Ordering",
  description: "Speak your next order from your distributor's own guide and check each line before it goes. No xtraCHEF alternative needed: xtraCHEF keeps your invoices.",
  related: ["marginedge-alternative","orderly-alternative","marketman-alternative"],
  relatedHeading: "Other systems that keep running alongside",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not An xtraCHEF Alternative: Use Your Distributor's Guide</h1>
      <p class="lead mt-16">
        Talk through your order in the VoiceOrder Solutions app, and each item comes up as a line from your distributor's list, at your account's prices. Check the lines, then send it off with its number and the time attached. It only reaches distributors already on our app, and xtraCHEF by Toast keeps doing the invoices.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VoiceOrder Solutions →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Comes through your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>xtraCHEF stays as it is</span>
        <span class="hero-trust-dot"></span>
        <span>iPhone and Android</span>
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
      <div class="stat-label">is when most restaurants get a first order in</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved per order, compared with phoning your rep</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">to place an order, even when your rep is off for the night</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with xtraCHEF alone.
     Invoices, food cost, ordering to any vendor, pars, recurring orders and the mobile app are
     ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">xtraCHEF Plus One Step</span>
      <h2>xtraCHEF, plus orders you speak.<br>Same invoices, one new habit.</h2>
      <p class="lead mt-16">
        What changes is how you order from a distributor that has our app. One column is your restaurant on xtraCHEF alone; the other adds VoiceOrder Solutions. xtraCHEF already reads invoices, prices out recipes and places orders with every vendor you use, so an xtraCHEF alternative is seldom what you need. The two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">xtraCHEF + VoiceOrder Solutions</th>
            <th style="width:30%;">xtraCHEF on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice lines pulled from a photo, an email or EDI</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Speak it, look it over, then send</td>
            <td><span class="check-yes">✓</span></td>
            <td>Quantities entered on your guide</td>
          </tr>
          <tr>
            <td>Recipe costing and food cost reports</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>The distributor's own guide, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>A list built from your past invoices</td>
          </tr>
          <tr>
            <td>Send orders to any vendor by email or PDF</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Arrives at your distributor with a number and time</td>
            <td><span class="check-yes">✓</span></td>
            <td>Emailed or sent as a PDF to the rep</td>
          </tr>
          <tr>
            <td>Inventory counts with par levels</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Weekly orders that go out on a schedule</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Ordering and counts on a phone</td>
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
      <span class="eyebrow">Worth Knowing First</span>
      <h2>Why restaurants search for an alternative to xtraCHEF</h2>
      <p class="lead mt-16">
        Looking up an xtraCHEF competitor rarely means xtraCHEF is letting you down. It handles invoices, recipes and inventory counts well. Most often, the search starts with ordering, which in xtraCHEF still runs off a list made from your own invoices.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>Its order list is made from your invoices</h4>
        <p class="text-muted mt-12">
          In xtraCHEF, a vendor's order guide is built from items you have been invoiced for, or from a price sheet you upload. The mobile app estimates the total from your last invoice price. It works, but keeping that list right is on you.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🗓️</div>
        <h4>Setup took real work the first time</h4>
        <p class="text-muted mt-12">
          xtraCHEF's own guides describe onboarding in weeks, with calls from a consultant on the Pro tier. That effort is already spent. Doing it all again in a new system would leave the way you order exactly as it is.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📲</div>
        <h4>Ask whether your distributor has the app</h4>
        <p class="text-muted mt-12">
          Some distributors hand our app to the restaurants they supply, already filled with what each kitchen buys and what it pays. If one of yours does, that order can be spoken, and xtraCHEF carries on untouched.
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
      <h2>An xtraCHEF alternative for one job only</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Say it out loud, then look over the list</h3>
          <p class="mt-12 text-muted">
            Open the app wherever you check stock, in the dry store or the walk-in, and say what you need. Each item shows up as a line from that distributor's guide. Change or delete anything that looks wrong, then send. Nothing goes out until you approve it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each line waits for your OK before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Order late at night, after your rep has signed off</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the iPhone or Android phone you carry</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Called away halfway? It saves where you stopped</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">See how an order gets placed →</a>
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
          <span class="eyebrow">Your Order Guide</span>
          <h3>A guide the distributor builds and keeps current</h3>
          <p class="mt-12 text-muted">
            In xtraCHEF, that guide grows out of invoices you have already received. Here the list comes from the distributor: the items you buy from them, at the price set for your account, tied to their own product codes. When a price or an item changes, they change it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Just the products you order, not a whole catalog</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The price agreed with you, not last week's invoice</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Updated on their side, so you have no list to maintain</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Same rep and the same terms as today</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Ordering from more than one supplier →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A distributor's<br>order guide with<br>your account prices
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">A Clear Record</span>
          <h3>Something to point to when a case is short</h3>
          <p class="mt-12 text-muted">
            When you send from the app, the order gets its own order number and the moment it left, and a confirmation comes back to you as well. If the delivery does not match, you have what you asked for in writing.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A number and a timestamp on what you send</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmation by push notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Compare what arrived with what you sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders phoned in or left on voicemail get no number from us</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">What each supplier confirmed, in one place →</a>
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
          <span class="eyebrow">Your Back Office</span>
          <h3>xtraCHEF still gets the invoice</h3>
          <p class="mt-12 text-muted">
            The truck arrives with an invoice, as it does today. Snap it, forward it or let it come in by EDI, the way you send invoices to xtraCHEF now. Food cost, recipe costs and counts carry on there.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Invoices go in the way they do now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Recipes and pars stay in xtraCHEF</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Other vendors are ordered as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No data passes between the two</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">How ordering fits your stock routine →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A spoken order,<br>then the delivery<br>and its invoice
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
      <h2>Up and ordering in three steps</h2>
      <p class="lead mt-16">
        Your distributor handles the setup, and you change nothing in xtraCHEF.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>See if your distributor has it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they have VoiceOrder Solutions, they set up your account and fill in your guide. Not sure who to ask? Contact us and we will connect you.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Install it and sign in</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Sign in, and the guide is there when you open it.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Speak, read the lines, send</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Speak the order, read through the lines and tap send.
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
      <h2>How ordering goes for kitchens using it</h2>
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
            "I talk through the order at the end of the night, and it is waiting for them in the morning."
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
            "When something is missing, I pull up the number on the order and we sort it out right there."
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
      <h2>xtraCHEF keeps the books while you speak one distributor's order</h2>
      <p class="lead mt-16">
        This is no xtraCHEF replacement. xtraCHEF holds on to the invoices, the food cost and the accounting. What we bring is one job, and only with a distributor who uses us: saying the order and reviewing it before sending. If an xtraCHEF alternative was meant to make ordering simpler, this handles that one part and leaves the rest alone.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📧</div>
        <h4>xtraCHEF keeps ordering from the rest</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every vendor outside our app still receives your emailed or PDF orders, recurring ones included. The app only covers the distributors that give it to you.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧮</div>
        <h4>That delivery still counts in your food cost</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An order you say into our app will not show up on xtraCHEF's order screen, because the two are not connected. Its invoice is entered like any other, so your costs stay complete.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔌</div>
        <h4>Start with one distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          No settings change on the xtraCHEF side and no data moves. Try the app on a single distributor's order and see how it fits your week.
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
      <h3 style="margin-bottom:10px;">See an order travel from the app to a distributor</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute demo: how a guide gets set up for your account, a real order said and reviewed, and what arrives at their end. xtraCHEF plays no part in it.
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
      <h2>Questions from restaurant owners</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need an xtraCHEF alternative to order with my voice?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. xtraCHEF covers the paperwork side, from invoices to dish costs and inventory, and it can already email a vendor an order. When a distributor of yours is set up with us, say that order into your phone and let xtraCHEF carry on with the rest.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than xtraCHEF?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not for reading invoices, costing recipes, approving bills or syncing your accounting, because we do none of those. Our job is narrower: an order spoken to your distributor and checked one line at a time. If ordering is why you went looking for an xtraCHEF alternative, that job, next to xtraCHEF, may be enough.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and xtraCHEF connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. They are not linked, and each one has its own support. Anything you dictate lands with your distributor, never inside xtraCHEF. The invoice for that delivery reaches xtraCHEF the same way your invoices do now.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I use it with all my suppliers?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only with distributors who provide VoiceOrder Solutions. xtraCHEF can order from any vendor at all, and we cannot. Stick with xtraCHEF for all the others, and check whether your other vendors are set up with us.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens if a line comes out wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You see each line before it is sent, so you fix it there: swap the item, change the amount or remove it. That review is the safeguard, so a quick look can still miss a mistake. Also, an order you phone in or leave on voicemail gets no order number from us; only orders sent in the app do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and does my point-of-sale system matter?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Your distributor adds you and puts your products in the app. Most restaurants are sending orders that same day. Your register does not matter: the app works the same whatever you use. If you are not sure your distributor offers us, contact us and we will connect you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What will it cost me?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Talk to your distributor about that, since they provide the app. xtraCHEF publishes its prices per location; we do not publish ours. Whatever you pay for xtraCHEF stays the same.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the xtraCHEF details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From xtrachef.com and the xtraCHEF help center at support.toasttab.com, as they read on 27 October 2026: the product pages, the ordering guides and the onboarding notes. We have not repeated the restaurant totals or customer quotes from their pages. If xtraCHEF has moved on since, the fault is ours, and we will update it.
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
  <h2>Keep xtraCHEF, and say the next order aloud</h2>
  <p>Talk to your distributor or to us, and see how an order gets from your kitchen to their desk.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Comes through your distributor</span>
    <span>✓ Prices set for your account</span>
    <span>✓ Keep using xtraCHEF</span>
    <span>✓ Works on your phone</span>
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
        <li><a href="#comparison">xtraCHEF + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/supplier-management-software">Supplier Management</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
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
