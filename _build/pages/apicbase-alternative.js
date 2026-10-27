/* Comparison page: Apicbase, and Apicbase with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (Nov 2026 batch, Eugene 2026-10-27): the reader is the RESTAURANT GROUP (Apicbase
 * sells to multi-outlet groups, hotels and caterers, from five outlets up). VoiceOrder Solutions
 * comes through the group's distributor, and only reaches distributors that offer it.
 * Same frame as the other compare pages: keep Apicbase, add VoiceOrder Solutions beside it for one
 * job. The two products do NOT connect (FAQ 3). Never imply an integration, sync or "extension".
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: Apicbase works out WHAT each outlet should order, from the recipe and the par level up;
 * VoiceOrder Solutions is the distributor's own app where the kitchen SPEAKS that order, from the
 * items and prices the distributor set.
 * ⚠ TRAPS (all in _build/research/competitors/apicbase.md):
 *   1. Apicbase HAS full ordering: pars, BoM, forecasts, per-supplier POs, email to ANY supplier,
 *      and direct sends into US Foods, Gordon Food Service and DSSI. Conceded in row 5 and FAQ 4.
 *   2. VOICE: Apicbase takes spoken STOCK COUNTS ("say it out loud"). Never "they type, we speak",
 *      "no voice" or "no AI". Their voice is for counting; ours is for placing the order (row 9
 *      concedes the voice counts).
 *   3. AI checks PO lines before sending, AI invoice reading, AI recipe import, an MCP server.
 *   4. "Continue an unfinished order" exists there, so interruption recovery is NOT sold here.
 *   5. Belgian, Europe-first, but live in the US. Never "not in the US".
 *   6. A spoken order never becomes an Apicbase order: no receiving or invoice match for that
 *      distributor in Apicbase. Said plainly in FAQ 3 and coexistence card 2.
 *   7. Pricing is quote-based, like ours: parity, never a fault (FAQ 7). No onboarding time published.
 * Their site and outlet counts disagree with each other; none are repeated.
 */
module.exports = {
  title: "Not an Apicbase Alternative: Keep Apicbase, Add Voice Ordering",
  description: "Speak each reorder to your distributor and check every line, while Apicbase keeps your recipes and pars. Not an Apicbase alternative: it replaces nothing.",
  related: ["craftable-alternative","restaurant365-alternative","wisk-alternative"],
  relatedHeading: "More platforms that keep their jobs",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not An Apicbase Alternative: Plan There, Order Aloud</h1>
      <p class="lead mt-16">
        Speak a site's reorder into the VoiceOrder Solutions app, correct any line you need to, then send it to your distributor, numbered and timed. They preload what you buy from them, at your account prices. Apicbase goes on costing recipes and setting pars across your outlets.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Get Set Up With VoiceOrder Solutions →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Comes through your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Apicbase keeps running</span>
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
      <div class="stat-label">is when most kitchens send a first order from the app</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">back on each order, compared with ordering by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">to send an order, after the sales desk has closed</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the group with both tools, column 3 with Apicbase alone.
     Recipe costing, multi-outlet control, ordering to any supplier, pars, food safety and
     voice stock counts are ticks in BOTH. Only rows 2, 4 and 6 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Apicbase, With One Step Added</span>
      <h2>Apicbase plans the order.<br>VoiceOrder Solutions lets you say it.</h2>
      <p class="lead mt-16">
        The only change on this table is how an order gets placed. One column is your group on Apicbase alone; the second column includes our app for any supplier who hands it to you. Apicbase already costs recipes, sets pars and gets orders out to suppliers, so an Apicbase alternative is seldom what a group needs. The two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Apicbase + VoiceOrder Solutions</th>
            <th style="width:30%;">Apicbase on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Recipe costs and margins that update as recipes change</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order aloud, and fix any line before it goes</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed, or filled up to par</td>
          </tr>
          <tr>
            <td>One recipe library and approvals for every outlet</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Item list and prices kept by your distributor</td>
            <td><span class="check-yes">✓</span></td>
            <td>You set up suppliers, unless one is linked</td>
          </tr>
          <tr>
            <td>Orders to any supplier, by email or a direct link</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Placed in your distributor's own app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Sent by email or to a linked supplier</td>
          </tr>
          <tr>
            <td>Suggested quantities from pars and forecasts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Allergens, HACCP checks and food labels</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Stock counts by barcode or by voice</td>
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
     SECTION 6: WHY GROUPS LOOK ELSEWHERE
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container">
    <div class="text-center" style="max-width: 680px; margin: 0 auto;">
      <span class="eyebrow">Worth Knowing First</span>
      <h2>Why groups look for an alternative to Apicbase</h2>
      <p class="lead mt-16">
        Looking up an Apicbase competitor rarely means the recipes or the costing have let you down. The search usually begins with the size of the rollout, or with the final step: turning a suggested quantity into an order your distributor actually receives.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🏢</div>
        <h4>It is bought by head office</h4>
        <p class="text-muted mt-12">
          Apicbase runs a whole group from the center, and its entry plan starts at five outlets. That suits the people planning menus and costs. The cook placing tonight's order at one site may just want that order out the door faster.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🧮</div>
        <h4>Someone still has to place it</h4>
        <p class="text-muted mt-12">
          Apicbase suggests what to order from pars, recipes and forecasts. A person then types or confirms the amounts, and each supplier's order goes out separately. Its voice feature is there for counting stock, not for ordering.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📲</div>
        <h4>Some distributors hand out their own app</h4>
        <p class="text-muted mt-12">
          Some distributors put our app in their customers' hands, loaded with each outlet's standing items at the prices it pays. If one of yours does, that order can be spoken, and Apicbase stays set up exactly as it is.
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
      <h2>An Apicbase alternative that changes one step</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Speak the reorder, then look it over</h3>
          <p class="mt-12 text-muted">
            Open the app at the shelf or in the walk-in and say what the site needs. Each item turns into a line from your guide with that distributor. Correct anything that is off, then send. Nothing goes out until you have checked it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every line is yours to check before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Send it at midnight if that is when the count ends</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works on staff iPhones and Android phones</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">Placing an order, step by step →</a>
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
          <h3>A guide your distributor keeps current</h3>
          <p class="mt-12 text-muted">
            Your distributor enters the products your site buys from them, at the prices on your account, with their item codes. When a price or an item changes, they change it. Your supplier lists and recipes in Apicbase stay as they are.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Just the products you buy from them</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Priced the way your account is priced</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Updated on their side when things change</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Same rep, same delivery days, same terms</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Buying across several suppliers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Your loaded guide,<br>at your account<br>prices
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">A Record Of Each Order</span>
          <h3>A number and a time on what you sent</h3>
          <p class="mt-12 text-muted">
            When you send from the app, the order is stamped with its own number, the date and the time, and a confirmation reaches your phone. When a delivery comes up short, you have the order to point to. A call or a voicemail leaves no such record.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each app order numbered, dated and timed</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed by push notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Something firm to hold a short delivery against</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Phone and voicemail orders get no number from us</span>
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
          <span class="eyebrow">Apicbase Stays</span>
          <h3>Recipes, pars and counts stay in Apicbase</h3>
          <p class="mt-12 text-muted">
            Recipe costs, par levels, stock counts and allergen data stay where they are, run from head office as now. The one change: an order for a distributor that has our app can now be spoken.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Recipe costing left untouched</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Par levels kept where they are</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Allergen and HACCP records unchanged</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No data passes between the two</span>
            </li>
          </ul>
          <a href="/restaurant-checklist-software" class="feature-link">Keeping each site's ordering routine the same →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A voice order<br>beside the site's<br>usual routine
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
      <h2>Getting started goes through your distributor</h2>
      <p class="lead mt-16">
        No computer software to install, and no Apicbase settings to touch.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask each outlet's distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they offer VoiceOrder Solutions, they set you up with an account and a guide. Not sure who to ask? Contact us and we will connect you.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Load the app on site phones</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Sign in, and your guide is there waiting.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Call out the order, then confirm</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Read down the lines, fix anything, and tap send.
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
      <h2>How the reorder goes now</h2>
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
            "Our closing manager says the order into her phone, and the distributor has it by morning."
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
            "When a case goes missing, we quote the number on our order and it is settled in one call."
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
      <h2>Apicbase plans each outlet; VoiceOrder Solutions sends the reorder</h2>
      <p class="lead mt-16">
        This is not an Apicbase replacement. Apicbase keeps the recipes, the pars, the counts and the reports. Our piece is one step, offered through distributors that carry us: you say what you need, look it over, and send. If you wanted an Apicbase alternative mainly for quicker reordering, that is the single piece we provide; recipes and stock stay where they are.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📧</div>
        <h4>Apicbase keeps every other supplier</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A supplier without VoiceOrder Solutions keeps getting your orders from Apicbase, by email or through its direct link. Save our app for the distributors that hand it to you.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔀</div>
        <h4>One place per distributor's order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An order made in our app never turns into an Apicbase order, because the two do not connect. Place each distributor's order in one place only, so nothing gets ordered twice.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🧪</div>
        <h4>Start with a single distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Nothing in Apicbase needs changing. Begin with one distributor and see how the kitchen finds it.
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
      <h3 style="margin-bottom:10px;">See what a distributor receives</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute demo: an outlet guide being built, one reorder by voice, and what the distributor's team sees. Apicbase is not involved.
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
      <h2>Questions from multi-site operators</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need an Apicbase alternative to order with my voice?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Apicbase works out what each outlet should order and sends it out to each supplier. If an outlet's distributor has signed up with us, the kitchen can say that order aloud instead, and Apicbase keeps its other jobs.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Apicbase?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at recipe costing, menu engineering, stock counts, forecasting or invoice matching: we do none of those. Our job is narrower: your spoken order to your distributor, checked by you before it is sent. If ordering is what prompted your search for an Apicbase alternative, that one job, added beside it, may be enough.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do Apicbase and VoiceOrder Solutions connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. They are separate products with separate support teams. Voice orders go to the distributor directly and never show up in Apicbase. That is a real trade-off: for that distributor, Apicbase cannot check the delivery or the invoice against an order it never saw.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can every supplier take orders this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Only distributors on VoiceOrder Solutions can receive them. Apicbase can email an order to any supplier, and it sends orders straight into the systems of some large US distributors. We reach far fewer. Keep Apicbase for those, and find out which of your other suppliers run our app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens if a line comes out wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You see every line before sending, so that is where you fix it: change the item or the amount, or delete the line. That review is the safeguard, and a hurried look can still miss an error. Bear in mind that orders phoned in or left on voicemail are not numbered by us; numbering covers app orders only.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does a kitchen get set up?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor. Once they have added you and loaded your guide, most kitchens are sending orders in the app that same day. Not sure whether your distributor offers us? Ask us, and we can check for you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What will it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That is up to your distributor, who provides the app. Apicbase quotes each group, and we quote too, with no public price list. Your Apicbase plan does not change.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Apicbase details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Checked on apicbase.com and its help center on 27 October 2026: their product and plans pages, plus support pages about ordering and suppliers. The customer and site counts they publish are theirs and are not repeated here. If anything there is different now, the mistake is ours to fix.
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
  <h2>Keep Apicbase, and speak your next order</h2>
  <p>Talk to your distributor or to us, and see the order travel from your kitchen to their desk.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Comes through your distributor</span>
    <span>✓ Prices from your account</span>
    <span>✓ No change to Apicbase</span>
    <span>✓ On iOS and Android</span>
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
        <li><a href="#comparison">Apicbase + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-entry-software">Order Entry</a></li>
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
