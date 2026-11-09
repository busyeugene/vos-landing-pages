/* Comparison page: Altametrics, and Altametrics with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (wave 4, 2026-11-09): the reader is the RESTAURANT (owner, franchisee, store or
 * kitchen manager). VoiceOrder Solutions comes through the restaurant's distributor, and only reaches
 * distributors that offer it. Keep Altametrics, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, a sync or an "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: Altametrics is the operating system for the WHOLE restaurant (shifts, time clock, payroll,
 *   cash office, food safety, reports, and, in its Advanced plan, counts, ordering and receiving). Its
 *   own FAQ calls suggested ordering "one part of the overall operating picture". VoiceOrder Solutions
 *   is ONLY the supply order itself, said to a distributor that offers our app. Two practical cases: a
 *   plan that runs labor and cash but lists no ordering, and a local distributor with no electronic
 *   link. Franchise note: the brand's ordering rules come first (problem card 3, coexistence card 3,
 *   FAQ 5). Not MarketMan's "skip the call", not Restaurant365's "it plans, we place", not Craftable's
 *   approvals, not Apicbase's "plan there".
 * ⚠ TRAPS (all in _build/research/competitors/altametrics.md):
 *   1. Altametrics DOES order: five suggested-order methods, electronic orders straight into a linked
 *      distributor's system, a distributor item catalog, receiving and credits; its Zip Ordering app
 *      sells "Eliminate Calling In Your Orders" and "Local vendors can be easily added too!". Never "it
 *      cannot order", "it leaves you on the phone" or "big distributors only".
 *   2. PLAN SCOPE: inventory and "Ordering and Receiving" are listed only in the Advanced plan on the
 *      pricing page (2026-11-09). Said as a dated fact about their pricing page, never as "your plan
 *      lacks it" or "you must upgrade". No figures.
 *   3. AI is in every module name. Never "no AI" or "they type, we speak". Their only product voice
 *      feature is time-clock voice alerts; their blog writes about GUEST voice ordering, so the page
 *      says "supply order" and "distributor" early and often.
 *   4. "Built for multi-unit chains and large franchises" AND "runs single restaurants": never "only
 *      for chains".
 *   5. Pricing is partly published (entry plans priced, upper plans quoted): stated neutrally in FAQ 7.
 *   6. A spoken order is not in Altametrics, so its receiving and credit tracking do not have it:
 *      coexistence card 1. Never claim what Altametrics does with an invoice that has no order.
  * None of their location counts, worker counts or savings percentages are repeated, and none of their
 * customer brands are named.
 * Review 2026-11-09 (FIXES4 + factcheck-bo/buyer-op/sameness): Zip Ordering conceded (problem card 2,
 *   table row 4, FAQ 4, coexistence card 2); the linked-vs-local distributor point removed (Crunchtime owns
 *   it); plan-scoped ticks stated in the comparison lead; balanced "who it's for" quote; credit step added
 *   to coexistence card 1; "one job" refrain kept in the coexistence lead only; FAQ 2 closes on the plan;
 *   setup FAQ says keep ordering as today until the distributor has it, and cost goes to the distributor.
 */
module.exports = {
  title: "Not an Altametrics Alternative: Keep It, Add Voice Ordering",
  description: 'Altametrics runs your shifts, cash and reports. Say the supply order to a distributor that offers VoiceOrder Solutions. No Altametrics alternative needed.',
  related: ["crunchtime-alternative","restaurant365-alternative","craftable-alternative"],
  relatedHeading: "More back offices compared the same way",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not An Altametrics Alternative: When Ordering Isn't Included</h1>
      <p class="lead mt-16">
        On your phone, say what you need from one distributor, go over each item, then tap send and get an order number. Each line comes from the order guide that distributor loads for you: the products you get from them most, priced for your account. This works only where your distributor carries VoiceOrder Solutions.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Check If My Distributor Offers It →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Arranged by your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Altametrics carries on as is</span>
        <span class="hero-trust-dot"></span>
        <span>Works on iOS and Android</span>
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
      <div class="stat-label">is when most kitchens send a first order, once the distributor adds them</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved per order, compared with reading it to a rep over the phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">to get an order in between the closing shift and the opening one</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with Altametrics alone.
     Labor, forecasts, suggested orders, counts, receiving, cash and food safety, and the mobile apps are
     ticks in BOTH. Rows 2, 4 and 6 differ, all about how one supply order is placed.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Same Back Office, Plus Voice</span>
      <h2>Your Altametrics plan, as it is.<br>Plus the distributor order, spoken.</h2>
      <p class="lead mt-16">
        If one supplier you still call is what started your search, that call is the part that changes. Ticks for counts, suggested orders and receiving apply on Altametrics plans that include them. Spoken orders reach only distributors on our app.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Altametrics + VoiceOrder Solutions</th>
            <th style="width:30%;">Altametrics on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sales forecasts, staff schedules and payroll</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order supplies by voice, checking each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Order amounts suggested from pars, forecasts or AI</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Ordering from your phone, whatever plan you are on</td>
            <td><span class="check-yes">✓</span></td>
            <td>Advanced plan, or its Zip Ordering app</td>
          </tr>
          <tr>
            <td>Inventory counts and food cost variance</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Items and account prices loaded by the distributor</td>
            <td>Distributors that run our app</td>
            <td>Item catalogs from distributors that connect to it</td>
          </tr>
          <tr>
            <td>Receiving, credits and invoice review</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Cash office, food safety checklists and reports</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Mobile apps for iPhone and Android</td>
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
      <h2>Reasons to check an Altametrics competitor</h2>
      <p class="lead mt-16">
        Altametrics' own site calls suggested ordering "one part of the overall operating picture," beside labor, accounting and reports. If that part is why you are weighing an alternative to Altametrics, here is where ordering can fall short.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">📋</div>
        <h4>Ordering sits in the top plan</h4>
        <p class="text-muted mt-12">
          On Altametrics' pricing page, inventory and "Ordering and Receiving" are listed in the Advanced plan. If your plan covers shifts, payroll and cash, your food order may still be a call to the rep.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🚚</div>
        <h4>Its ordering app fills a cart</h4>
        <p class="text-muted mt-12">
          Altametrics' ordering app, Zip Ordering, says "Eliminate Calling In Your Orders" and lets you add local vendors. There, you run through order guides, type in quantities and check out. Our app has you speak those lines instead, for a distributor that carries it.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🏷️</div>
        <h4>Your brand may have picked it</h4>
        <p class="text-muted mt-12">
          Altametrics says it runs single restaurants and scales to large franchises, and its customer stories come mostly from franchisees and chains. If head office chose it, an Altametrics alternative may not be yours to choose. Changing how one distributor gets your order, where your brand allows it, is a smaller step.
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
      <h2>Voice orders to your distributor, with no Altametrics alternative</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Speak it first, then look it over</h3>
          <p class="mt-12 text-muted">
            Open the app by the walk-in and say what that distributor should bring. Each item shows up as a line from the guide set up for your account. Change an amount or remove a line, and send once it reads right.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing goes out until you tap send</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Order late at night, after close, or before the rep is in</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled onto the line midway? The order waits, saved</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">Placing an order by voice →</a>
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
          <span class="eyebrow">Their Guide, Your Prices</span>
          <h3>Your distributor loads the items and the prices</h3>
          <p class="mt-12 text-muted">
            The distributor puts the products you buy from them into your guide, at the prices they charge your account and under their item codes, and updates it from their side.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only what you usually buy from them</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Prices set for your account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No list for your team to type up</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You keep the same rep</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Buying from more than one supplier →</a>
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
          <span class="eyebrow">Proof Of The Order</span>
          <h3>What you sent, with its own number and time</h3>
          <p class="mt-12 text-muted">
            Each order sent in the app gets a number, a date and a time stamp, and a confirmation lands on your phone. If the truck arrives short, you can point to what was ordered instead of what you remember saying on a call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Shows the minute it went out</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Handy when you check in the delivery</span>
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
          <span class="eyebrow">Still In Altametrics</span>
          <h3>Labor, cash and food safety carry on in Altametrics</h3>
          <p class="mt-12 text-muted">
            Altametrics keeps the jobs it does for you today, from the time clock to the daily report. Counts and suggested amounts, where your plan has them, stay there too.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Time clock and payroll as before</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Food safety checks untouched</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Cash office and deposits unchanged</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Forecasts keep guiding prep</span>
            </li>
          </ul>
          <a href="/restaurant-checklist-software" class="feature-link">Ordering the same way on every shift →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A spoken supply order<br>beside the day's<br>shift schedule
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
      <h2>Most of the setup is your distributor's job</h2>
      <p class="lead mt-16">
        Nothing to roll out, no hardware to buy and nothing to install on a computer.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Check with your distributor first</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they carry the app, they open your account and add your guide. Not sure? Get in touch and we will find out.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Download it and sign in</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your guide is already there when you open it.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Say it, review it, send it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Speak the items, fix anything off, and tap send.
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
      <h2>What kitchens say about ordering by voice</h2>
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
            "Our dairy order used to wait for a callback. Now I say it after close and it is in."
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
            "When something is missing from the truck, I have the order number right there on my phone."
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
      <span class="eyebrow">Side By Side</span>
      <h2>Using both, within your plan and your brand's rules</h2>
      <p class="lead mt-16">
        This is not an Altametrics replacement. Altametrics plans the shifts, the prep and, on its ordering plan, the amounts to buy. VoiceOrder Solutions does one thing: the order to a distributor set up on our app, which you say aloud and look over before sending.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>A short delivery? Quote your order number</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders spoken in our app are never created in Altametrics, so its receiving and credit tracking will not have them. If the truck comes up short, raise it with your distributor and quote the number on your confirmation. If you track credits in Altametrics, enter that credit there by hand.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧭</div>
        <h4>Begin where your plan has no ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If you run Altametrics for labor and cash only, begin with whichever supplier still takes your order over the phone; no Altametrics alternative is needed for that. If a distributor already gets your orders through Zip Ordering or Altametrics, use one place only for that distributor, so the same cases never come twice.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🏷️</div>
        <h4>Brand rules come first</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If your brand requires Altametrics for ordering, or approved distributors only, follow that. Check with head office before you move any supplier's ordering to our app.
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
      <h3 style="margin-bottom:10px;">See the order a distributor gets after you say it</h3>
      <p class="text-muted" style="font-size:16px;">
        We open a practice guide, say a few items, fix one line, and show the copy that lands with the distributor. It takes about 20 minutes.
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
      <h2>Common questions from Altametrics users</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Would I need an Altametrics alternative to start speaking my orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Where one of your distributors has our app, you can order from them by voice on your phone, and use Altametrics for the rest, its ordering included if your plan has it. This is about supplies you buy, not orders from your guests.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Altametrics?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at what Altametrics does. We run no schedules, payroll, counts, forecasts or food cost reports. You read your order into our app for a distributor that has it, and go over every item before it is sent. If your plan leaves out ordering and phoning the rep is why you looked for an Altametrics alternative, that call is what our app replaces.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and Altametrics connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. These are two products from two companies, each with its own help desk, and no data moves from one to the other. Orders you speak in our app reach only your distributor, and Altametrics does not see them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          My Altametrics plan has no ordering. Does this add it?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not inside Altametrics. Our app carries orders to the distributors who use it, and that is all: it does not count stock, suggest amounts or receive deliveries. Altametrics lists those, with ordering, in its Advanced plan, and it also offers Zip Ordering, a separate app. If you want those inside Altametrics, ask Altametrics about them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          I run a franchise location. Can I order this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, with a distributor using our app, as long as your brand lets you order from that distributor yourself. Where the brand insists on Altametrics or approved suppliers only, do it their way. Suppliers without our app get your orders just as they do now.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if I say one thing and the screen shows another?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Before sending, fix it on the review screen: choose the correct item, change the number, or remove the line. That review is the safeguard, and a hurried glance can still let a mistake slip by. Orders made by phone or left on voicemail get no order number from us; only orders sent in the app do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The distributor opens an account for you and loads your guide, and most kitchens get an order in on that same day. Until that distributor has it, go on ordering from them as you do today, and reach out to us: we will connect you with the right person. Cost is something to ask that distributor, since our app comes to you from them; we publish no price. Altametrics shows prices for its entry plans and quotes the larger ones.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Altametrics details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From altametrics.com and zipordering.com as we read them on 9 November 2026: the Altametrics homepage, pricing, inventory, back office and forecasting pages, and the Zip Ordering homepage. We found voice alerts on their time clock, but no ordering from suppliers by voice. We did not repeat their location counts or savings figures here. If any of it is out of date, write to us and we will correct it.
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
  <h2>Say what the truck should bring, and keep Altametrics for the rest</h2>
  <p>Find out from your distributor if they offer VoiceOrder Solutions, or have us check for you.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Comes via your distributor</span>
    <span>✓ Your account's prices</span>
    <span>✓ Send it any hour</span>
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
        <li><a href="#comparison">Altametrics + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
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
