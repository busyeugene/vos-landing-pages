/* Comparison page: Aptean, and Aptean with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Aptean,
 * never its replacement. Table = "Aptean + VoiceOrder Solutions" vs "Aptean on its own"; every
 * Aptean strength gets a check mark in both columns. No built-in link (FAQ 6); whether an Aptean
 * setup takes our formats in directly is a demo question, never a claim.
 * Scope: Aptean is a FAMILY of industry products. This page covers the FOOD ones only (Aptean Food &
 * Beverage ERP and its editions, Aptean Ignition, Produce Pro Software from Aptean) and FAQ 3 says so.
 * Angle, distinct from NECS Entree ("typed vs spoken, inside vs beside") and NetSuite ("where the
 * order starts; web store add-on; AI for staff") and Business Central ("checked before sending"):
 * KEEP EVERY FOOD FEATURE, TAKE THE CALLS OFF THE DESK (re-centered 2026-11-09). Aptean's own food
 * distribution page lists "phone call or email to your sales department" among the order formats it
 * captures, and its AI answer to a messy order is a custom agent that reads emailed orders AFTER they
 * arrive and hands "assumptions made and any items needing human review" to staff. VoiceOrder
 * Solutions takes the phoned order off the sales desk. Aptean keeps all its food depth. The custom email
 * agent is one bespoke project, so it is NOT the lead: it stays in coexistence card 3 and FAQ 4 only,
 * and the "earlier check" timing argument is NOT used here (Business Central owns it).
 * ⚠ Aptean's food ERP is built on Microsoft's platform. Never write "Microsoft Dynamics" (claims.js
 *   bans it) or name that platform (another page covers it). The page does not need it at all.
 * ⚠ Substitutions, split cases and backorders are Aptean's job (their own page) and stay there:
 *   KB Q15, VoiceOrder Solutions holds the request only. FAQ 5 says so.
 * ⚠ Aptean HAS customer ordering: Produce Pro "E-Commerce / Web Ordering" (own page) and a web portal
 *   for the food ERP (third-party listing, flagged in the sourcing FAQ). Never "no customer ordering".
 * ⚠ The email agent is CUSTOM-built (one published case, Oct 2026). Never call it a standard feature
 *   and never say it gets orders wrong.
 * ⚠ Aptean's Indigo WMS does voice PICKING, but Indigo is outside this page's food-product scope, so the
 *   page does not mention it (review 2026-11-09). Table row 9 is cold chain, fleet and route management.
 * ⚠ No Aptean-specific voice ordering add-on found, but voicemail/call AI exists for distributors
 *   generally: FAQ 5 concedes it in one line, without names. Never "the only voice option".
 * ⚠ Pricing is request-only (parity). Their 4-6 month implementation window stays off the page.
 * Every claim is sourced and dated in _build/research/competitors/aptean.md.
 * Review 2026-11-09 (wave-1 fix list S1-S10 + page items): S1 email vs EDI/API spelled out (feature 3,
 *   FAQ 6); S3 records wording (feature 2); no column-position words; feature H2 no longer calls this an
 *   Aptean alternative; setup-only login/install scope (FAQ 7); replacement argument kept ONLY in
 *   problem card 3; interruption row -> numbered/timestamped app orders; portal card -> "whichever
 *   Aptean food ERP"; voice-tools FAQ -> who decides the swap; fresh VOS-side slots.
 */
module.exports = {
  title: "Not an Aptean Alternative: Keep Aptean, Add Voice Ordering",
  description: 'Aptean keeps lot records, catch weights and recalls. Kitchens that used to call now say their orders into an app: an Aptean alternative that adds, not replaces.',
  related: ["necs-entree-alternative","netsuite-alternative","fresho-alternative"],
  relatedHeading: "Other food systems you can leave exactly as they are",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An Aptean Alternative: Keep Every Food Feature</h1>
      <p class="lead mt-16">
        Answer fewer calls for orders and keep each food tool exactly where it is. With VoiceOrder Solutions, each kitchen talks its order into our app and looks over every line before it goes. Aptean keeps tracing lots, pricing catch weights, running recalls and deciding every substitution.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See the Comparison</a>
      </div>

      <div class="hero-trust">
        <span>Aptean keeps the food records</span>
        <span class="hero-trust-dot"></span>
        <span>Fewer order calls to type up</span>
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
      <div class="stat-label">Saved whenever an order stops being a call</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Open for orders after your desk closes</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Has most distributors taking app orders</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Aptean's food ERPs tick both columns on six of nine rows. Only the three rows about
     how the order is checked and sent differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Run Both</span>
      <h2>Aptean plus VoiceOrder Solutions.<br>Your food records stay put.</h2>
      <p class="lead mt-16">
        Ordering gets easier for your kitchens, and every food job stays where it is. Each Aptean strength is marked in both columns. This is not an Aptean alternative. The Aptean + VoiceOrder Solutions column shows your business running both, with nothing built to join them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Aptean + VoiceOrder Solutions</th>
            <th style="width:30%;">Aptean on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lot tracing and one-click recalls</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens voice their order, then confirm every line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed in on Aptean's portal or online store</td>
          </tr>
          <tr>
            <td>Catch weight carried through to the invoice</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Accounts that used to call send approved lines</td>
            <td><span class="check-yes">✓</span></td>
            <td>Your sales desk takes the call</td>
          </tr>
          <tr>
            <td>Substitutions, split cases and backorders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Allergen controls, expiry alerts and FEFO</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>App orders arrive numbered and timestamped</td>
            <td><span class="check-yes">✓</span></td>
            <td>Portal orders do; a call waits until someone keys it in</td>
          </tr>
          <tr>
            <td>Contract pricing, volume tiers and rebates</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Cold chain logistics, fleet and route management</td>
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
      <h2>What sends a distributor looking for an Aptean competitor</h2>
      <p class="lead mt-16">
        Few distributors who search for an Aptean alternative want to give up its food tools. What they want is a sales desk that takes fewer calls, while Aptean goes on tracing, weighing and pricing. Three reasons come up, and just one of them means leaving.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Aptean takes phone orders, but a person must answer them</h4>
        <p class="text-muted mt-12">
          Aptean's food distribution page lists calls and emails to your sales department among the formats it captures. Capturing a call still takes someone who answers, listens and keys every line in.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">💻</div>
        <h4>Whichever Aptean food ERP you run, calls still need a person</h4>
        <p class="text-muted mt-12">
          Produce Pro, the Ignition suite and Aptean's own Food & Beverage system each suit a different kind of food business. With any of them, a phoned order still needs someone on your team to write it up.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🏗️</div>
        <h4>An Aptean replacement is an entirely new food ERP</h4>
        <p class="text-muted mt-12">
          Moving off Aptean means moving lot records, catch weights, recalls and pricing all at once, then testing every piece. That is a lot to take on when all you want to change is how kitchens send their orders.
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
      <h2>Not an Aptean alternative: the one step it adds to your food ERP</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The chef says the items, then corrects the list</h3>
          <p class="mt-12 text-muted">
            The kitchen's chef presses Push to Speak and says what the kitchen needs. The app turns that into lines from the kitchen's own guide, and the chef corrects anything that came out wrong before sending it. So the kitchen has checked it before you ever see it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each line is approved by the kitchen before it leaves</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Orders can go in at any hour, weekends included</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on the chef's own iOS or Android phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled away halfway? The order waits where they left it</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How the app takes orders →</a>
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
          <h3>A guide per account, built from your item list</h3>
          <p class="mt-12 text-muted">
            Send us a spreadsheet of the items your accounts buy, with their prices. We make each account its own guide from it, under your codes and at the price you set, and you keep the guides current in our admin platform. Aptean stays your system of record for customers, stock and invoicing. We hold each guide, its prices and every order placed through the app.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Kitchens see the items they buy and nothing else</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>What goes in each guide, and at what price, is your call</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Change a guide once and every later order uses it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup adds no module or add-on to Aptean</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">How guides stay current →</a>
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
          <h3>Where each finished order lands, and in what form</h3>
          <p class="mt-12 text-muted">
            Each approved order comes to you as an email carrying a PDF, Excel or Word file, or over the API, over EDI or into QuickBooks. By email, someone on your team keys it into Aptean, working from a list the kitchen already checked. Which format suits your Aptean edition is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to the person or the inbox you name</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Aptean still picks, invoices and decides any substitution</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing in Aptean is switched off or replaced</span>
            </li>
          </ul>
          <a href="/distribution-workflow-software" class="feature-link">How an order moves →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>One order delivered<br>as a PDF and<br>over EDI
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4 -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Inventory Visibility</span>
          <h3>Where stock stands while orders build up</h3>
          <p class="mt-12 text-muted">
            Your team gets real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog updates itself as stock changes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises when Friday orders pile up</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lots, expiry dates and FEFO stay with Aptean</span>
            </li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">More on tracking stock →</a>
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
      <h2>Three steps, and your Aptean setup stays as it is</h2>
      <p class="lead mt-16">
        It starts with a single file from you and ends with kitchens ordering from their phones.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send us one export from Aptean</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet is usually all we need: the items every kitchen buys and what it pays, under your own codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up the guides and invite each kitchen</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your guides go in, each account is opened, and each kitchen gets the app on its phone. Most kitchens place a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Kitchen-checked orders start landing</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one comes in approved by the kitchen, with its number and time stamp, in the format you set.
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
      <h2>What changes at the order desk</h2>
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
            "Recalls and allergen checks still run in Aptean, exactly as before. What changed is the phone: fewer kitchens call our sales desk with an order now."
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
            "Catch weights, substitutions and short items we still handle in Aptean. The kitchens check their own lines before they send, and our sales team likes that."
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
      <h2>Who does what when you run Aptean and VoiceOrder Solutions</h2>
      <p class="lead mt-16">
        Think of it as an addition, not an alternative to Aptean. It covers the few minutes a kitchen spends building its order; Aptean takes it from there, from picking the right lots to catch weights on the invoice.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">⚖️</div>
        <h4>Catch weights are settled in Aptean, as now</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A kitchen orders the item in our app. The weight that ships, its price and the invoice line are still worked out in Aptean, the way they are today.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🌐</div>
        <h4>Portal and EDI accounts keep their routine</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts that already order through an Aptean web portal or over EDI carry on as they are. Our app is aimed at the ones who keep calling you. Calls that your staff still answer get no order number from us; orders placed through the app get one.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🤖</div>
        <h4>Keep an email agent if Aptean built you one</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A custom agent Aptean made to read your order emails keeps doing that job. Our app leaves it exactly as it was.
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
      <h3 style="margin-bottom:10px;">Watch an order voiced and approved in the app, then go over your Aptean side with us</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes, on a sample account: you see each step a kitchen takes, and we cover which delivery format fits your setup.
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
      <h2>Questions we hear from teams running Aptean</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need an Aptean alternative before kitchens can place orders out loud?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Aptean can stay the ERP for your whole food business, with its traceability, catch weight pricing and recall tools. The kitchens who phone your desk can say their orders into our app instead.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Aptean?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job: bringing in the order from a kitchen that would rather call than log in to a portal, approved by that kitchen before your desk sees it. Everything that happens to the order after that is Aptean's work, not ours.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Which Aptean products does this page cover?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The food ones: Aptean Food &amp; Beverage ERP and its editions, Produce Pro Software from Aptean, and Aptean Ignition, which serves distributors and processors of food. Aptean also sells ERPs for consumer goods, apparel and manufacturing. If you want an Aptean alternative for one of those, nothing here describes it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Aptean can build an AI agent for email orders. Why add an app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Aptean does build custom agents, and one published case covers incoming order emails: after each run it reports the assumptions it made and anything it could not resolve, for your staff to look at. That helps with emailed orders. Our app is for chefs who would otherwise phone: each one says what is needed into the app and approves it before the order leaves. Other companies also sell AI that turns phoned and voicemailed orders into written ones, so we are not the only option.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Who decides the swap when an item is short?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Aptean does, as it does today: your team settles each substitution, split case or backorder in Aptean. VoiceOrder Solutions passes on what the kitchen ordered, as the kitchen approved it, and makes no swap of its own.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does anything link Aptean to VoiceOrder Solutions?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing is built in. The two are sold apart, and each of us supports only what we make. Where your Aptean system accepts EDI or API orders, ours can arrive that way with no retyping; the demo is where you find out whether it does. By email, you get the order as an attached file, each line approved by the kitchen, and your staff work from that list rather than from a call or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What will this cost, and when can we start?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Setup takes 24 to 48 hours for most distributors. We never need an Aptean login, and nothing gets installed: we start from a spreadsheet of your accounts' items. Moving to EDI or the API later is a separate step, and we walk through what it needs on your side in the demo. Aptean asks you to request pricing, and we quote every distributor on its own, so neither puts a price on its website.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Aptean details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From aptean.com, read on 9 November 2026: the food distribution and food ERP pages, Produce Pro, Ignition, the AI agent pages and a press release on an email-order agent. The web portal details also draw on a third-party software listing. Aptean publishes no prices, so we state none. If Aptean has updated a page since then, tell us and we will correct this one.
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
  <h2>Keep Aptean's food tools, and hand the phone orders to an app</h2>
  <p>Give us twenty minutes: we speak an order into the app and show you the file it becomes at your end.</p>

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
        <li><a href="#comparison">Aptean + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/inventory-control-software">Inventory Control</a></li>
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
