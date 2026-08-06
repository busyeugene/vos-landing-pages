/* Page 12 — PRIMARY: restaurant checklist software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * REFRAME (Eugene's call): ordering + stock routines only. VOS has no general ops/task
 * feature in the KB, so this page must NOT imply opening/closing, cleaning, temp logs,
 * or food-safety task management. The scope limit is stated in the hero, made visual in
 * the comparison table (honest ✗ rows), and answered outright in FAQ #1.
 * "restaurant checklist software pricing" is served by a "we quote on a call" FAQ,
 * which satisfies the query without publishing a price (KB forbids pricing claims).
 */
module.exports = {
  title: 'Restaurant Checklist Software for Ordering | VoiceOrder',
  description: 'VoiceOrder Solutions is restaurant checklist software for ordering and stock routines. The same list, the same steps, every shift and every location.',
  related: ['restaurant-stock-management-software', 'catalog-management-software', 'restaurant-purchasing-software'],
  relatedHeading: 'The routines this connects to',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "restaurant checklist software"
     Scope limit stated up front, on purpose.
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">Restaurant Checklist Software for Ordering</span>
      <h1>Restaurant Checklist Software for Your Ordering Routine.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is restaurant checklist software for the one routine
        that costs you money when it slips: ordering. Same list, same steps,
        whoever is on shift. Built for ordering and stock counts specifically,
        not for opening and closing task lists.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Works with your current suppliers</span>
        <span class="hero-trust-dot"></span>
        <span>Up and running in 1 day</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android + Web</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (order guide as a run-through list) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Order guide checklist with<br>items ticked off and<br>quantities filled in
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
      <div class="stat-number">Same</div>
      <div class="stat-label">list every shift, whoever is working</div>
    </div>
    <div>
      <div class="stat-number">Every</div>
      <div class="stat-label">location running the identical routine</div>
    </div>
    <div>
      <div class="stat-number">20-30 min</div>
      <div class="stat-label">saved on every order you place</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>The ordering routine changes depending on who's working.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Your chef has a system. Your Tuesday manager has a different one. Neither
      is written down anywhere. Here's what that inconsistency costs:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🔀</div>
        <h4 class="mb-8">"Everyone does the order differently"</h4>
        <p class="text-muted" style="font-size:15px;">
          One person walks the walk-in first. Another orders from memory. The
          results are different every week and nobody can say why.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧑‍🍳</div>
        <h4 class="mb-8">"When the chef is off, things get missed"</h4>
        <p class="text-muted" style="font-size:15px;">
          The routine lives in one head. Whoever covers either over-buys to be
          safe or forgets a whole section of the order entirely.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📄</div>
        <h4 class="mb-8">"Our checklist is a photocopy from 2019"</h4>
        <p class="text-muted" style="font-size:15px;">
          It still lists items you stopped carrying. People skip the parts that
          are wrong, which means they skip the parts that aren't, too.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 6: FEATURE DEEP-DIVE – ALTERNATING ROWS
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">

    <div class="text-center" style="max-width: 760px; margin: 0 auto 72px;">
      <span class="eyebrow">A Routine That Runs Itself</span>
      <h2>Restaurant checklist software that turns ordering into a repeatable routine</h2>
    </div>


    <!-- Feature 1: order guide = checklist -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">The List Itself</span>
          <h3>Your order guide is the checklist your team already runs.</h3>
          <p class="mt-12 text-muted">
            Every kitchen already has an ordering checklist, it's just usually a
            photocopy that went stale two years ago. VOS makes it a live list: the
            items you actually buy, in the order you actually walk them, updating
            itself as your catalog changes. It's restaurant operations checklist
            software for the one routine that costs you money when it slips.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A custom order guide per location and per supplier</span></li>
            <li><span class="bullet-check">✓</span><span>Items stay current as your catalog changes</span></li>
            <li><span class="bullet-check">✓</span><span>Discontinued products drop off instead of confusing people</span></li>
            <li><span class="bullet-check">✓</span><span>Arrange it to match how your team walks the storage</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">See how order guides stay current →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order guide list grouped by<br>storage area with<br>quantity fields
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 – restaurant checklist software for managers -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Shift-Proof</span>
          <h3>Restaurant checklist software for managers on every shift.</h3>
          <p class="mt-12 text-muted">
            The same list runs whether your chef is in or on holiday. Whoever picks
            it up sees exactly what to check and what to order, in the same order,
            with last week's quantities right there for reference. The routine stops
            depending on one person remembering it.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Anyone on shift can run the ordering routine</span></li>
            <li><span class="bullet-check">✓</span><span>Past quantities shown so nobody guesses blind</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing gets skipped because it lived in someone's head</span></li>
            <li><span class="bullet-check">✓</span><span>New managers get up to speed in one shift</span></li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">See restaurant stock management →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order guide showing last<br>week's quantity next to<br>each item
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 – checklist software for restaurant managers -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Count Then Order</span>
          <h3>Checklist software for restaurant managers who run the count.</h3>
          <p class="mt-12 text-muted">
            Walk the walk-in with your phone, tick items off as you go, and the
            order builds itself from what you found. Counting and ordering stop being
            two separate jobs with a transcription step in between, which is exactly
            where things normally go wrong.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Count on the phone, standing in front of the shelf</span></li>
            <li><span class="bullet-check">✓</span><span>Short items surface against your par levels as you go</span></li>
            <li><span class="bullet-check">✓</span><span>The order builds from the count, no retyping</span></li>
            <li><span class="bullet-check">✓</span><span>Send it by voice or web when you reach the end</span></li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">See inventory tracking →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Mobile count walkthrough<br>with items ticked and<br>below-par flags
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: SECONDARY IN H3 – multi location restaurant checklist software -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Every Site</span>
          <h3>Multi location restaurant checklist software, one login.</h3>
          <p class="mt-12 text-muted">
            Roll the same ordering routine out to every location and see who is
            actually running it. As restaurant owner checklist software, it means
            you can stop wondering whether your second site is following the process
            or improvising, because the orders coming out of it tell you.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>The same routine at every site, under one account</span></li>
            <li><span class="bullet-check">✓</span><span>Each location keeps its own items and quantities</span></li>
            <li><span class="bullet-check">✓</span><span>Managers see their site, owners see all of them</span></li>
            <li><span class="bullet-check">✓</span><span>Compare how each location is ordering week to week</span></li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">See multi-location purchasing →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Two locations running the<br>same order guide with<br>separate quantities
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ============================================================
     SECTION 7: FEATURE CARDS – SUPPORTING CAPABILITIES
     ============================================================ -->
<section class="section-pad bg-light" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Everything Included</span>
      <h2>All the tools your team needs to run the same routine.</h2>
      <p class="lead mt-16">No extra apps. No workarounds. Everything ships with VOS out of the box.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">✅</div>
        <h4>Custom Order Guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A living checklist of the items you actually buy, arranged the way
          your team walks the storage.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔄</div>
        <h4>Always Current</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Items update as your catalog changes. Nobody is working off a
          photocopy from two years ago.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>Run It From a Phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Walk the walk-in and tick items off where the product actually is,
          on iPhone or Android.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕘</div>
        <h4>Last Week's Numbers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Past quantities sit next to each item, so whoever runs it is not
          starting from nothing.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🎯</div>
        <h4>Par Level Flags</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Items below target surface as you count, so the checklist tells you
          what to act on.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📍</div>
        <h4>Multi-Location</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The same routine at every site under one login, with separate
          quantities per location.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Finish by Voice</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Reach the end of the list and send the order by speaking it. No
          retyping anything.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>Any Hour</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Run the routine after close or before prep. Ordering is not stuck in
          business hours.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>No System Replacement</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Keep your suppliers and your process. Only the routine gets written
          down and made consistent.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     HORIZONTAL MID-PAGE CTA STRIP
     ============================================================ -->
<section aria-label="Mid-page call to action" style="background:var(--color-light-bg);border-top:1px solid #e4e7ed;border-bottom:1px solid #e4e7ed;padding:48px 24px;">
  <div style="max-width:var(--max-width);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;">
    <div style="max-width:580px;">
      <h3 style="margin-bottom:10px;">See the ordering routine your team would actually follow</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a free 20-minute walkthrough. We'll show you order guides, mobile
        counts, and one-step ordering working as a single routine.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 8: HOW IT WORKS
     ============================================================ -->
<section class="section-pad" id="how-it-works" aria-label="How it works">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Simple Setup</span>
      <h2>Up and running in one day</h2>
      <p class="lead mt-16">
        No IT team. No systems to rip out. Three steps and the routine stops
        living in one person's head.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>We build your order guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS loads the items you actually buy from the suppliers you already
          use, and arranges them how you want them.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Set pars and locations</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Say what level is too low per item and per site, so the list flags
          things instead of just listing them.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Your team runs it every week</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Walk the storage, tick items off, send the order by voice or web.
          Same routine, whoever is on.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS order guide builder with storage groupings and par levels
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 9: TESTIMONIALS
     ============================================================ -->
<section class="section-pad bg-light" id="testimonials" aria-label="Customer testimonials">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Real Teams. Real Results.</span>
      <h2>What restaurant teams say about VOS</h2>
    </div>

    <div class="testimonials-grid">

      <!-- DEVS: exact quote pending client sign-off (see knowledge-base/vos-product-facts.md) -->
      <div class="testimonial-card featured">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">
          "VOS simplified the entire ordering process for our kitchen. It's the
          same walk every week now, in the same order, and anyone can do it. That
          consistency was the thing we never had."
        </p>
        <div class="testimonial-author">
          <!-- DEVS: Replace with Tony Luna's photo -->
          <div class="author-avatar">Photo</div>
          <div>
            <div class="author-name" style="color:#fff;">Tony Luna</div>
            <div class="author-role">Owner-Chef</div>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px;">

        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "When my chef is on holiday, ordering used to fall apart. Now whoever
            is covering just follows the list and it comes out the same."
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
            "Training a new manager on ordering used to take weeks of shadowing.
            Now it's one shift, because the routine is right there on the screen."
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
     SECTION 11: COMPARISON TABLE
     Deliberately includes honest ✗ rows for VOS on general ops tasks.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Deep on the ordering routine.<br>Not a general task app.</h2>
      <p class="lead mt-16">
        We would rather be clear than oversell. If you need cleaning rotas and
        temperature logs, use a general ops app. If the routine you keep losing
        money on is ordering, here's how VOS compares.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">General Ops Checklist App</th>
            <th style="width:22%;">Paper / Clipboard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ordering and stock-count routine</td>
            <td><span class="check-yes">✓</span></td>
            <td>Generic</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>List updates as your catalog changes</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Shows last week's quantities per item</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Flags items below par as you count</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Places the actual order at the end</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Opening and closing task lists</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Cleaning rotas and temperature logs</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Same routine across every location</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Runs from a phone in the walk-in</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>1 day</td>
            <td>Days</td>
            <td>None needed</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style="border-bottom:none;"></td>
            <td style="border-bottom:none;padding:20px 24px;">
              <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary" style="padding:11px 20px;font-size:14px;width:100%;justify-content:center;">Book a Demo →</a>
            </td>
            <td style="border-bottom:none;"></td>
            <td style="border-bottom:none;"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 12: FAQ
     FAQ 1 is the scope limit, open by default, on purpose.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Common questions about running your ordering routine on VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Does VOS handle opening and closing checklists?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No, and we would rather say so up front. VOS does not do cleaning rotas,
          temperature logs, food safety sign-offs, or general shift task lists. What
          it does is make ordering and stock counting a consistent, repeatable
          routine. If you need general operations task management, pair VOS with a
          dedicated ops app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does restaurant checklist software help with ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It makes the routine the same every time. Your order guide becomes a live
          list of the items you actually buy, arranged how your team walks the
          storage, with last week's quantities beside each one. Whoever is on shift
          runs the same list and gets the same result.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does restaurant checklist software pricing look like?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Pricing depends on how many locations you run and how your suppliers are
          set up, so we quote it on a call rather than publishing a number that
          would be wrong for most people. Book a free 20-minute walkthrough and you
          will get a straight figure for your setup, with no obligation.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can anyone on the team run it, or just managers?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Anyone you give access to. That is usually the point: the ordering routine
          stops depending on one person being in that day. Line and prep staff can
          run the count while managers keep control of what actually gets sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does the list stay up to date on its own?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. It is built from your live catalog, so when items, pack sizes, or
          pricing change, the list changes with them. Discontinued products drop off
          rather than sitting there confusing whoever is running the routine.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I run the same routine at several locations?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Every site runs the same routine under one login while keeping its own
          items and quantities. Owners can compare how each location is ordering week
          to week, which is usually how you find out whether the process is actually
          being followed.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do I need to replace my current system to use VOS?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. You keep your suppliers and your process. This restaurant checklist
          software sits on top of the ordering you already do and makes it
          consistent. There is nothing to rip out and nothing for your distributor
          to install.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most teams are fully set up within one business day. The VOS team builds
          your order guide from the items you actually buy and helps you set par
          levels. You do not need an IT team or any technical experience.
        </div>
      </div>

    </div>
  </div>
</section>


<!--@RELATED-->


<!-- ============================================================
     SECTION 13: FINAL CONVERSION CTA
     ============================================================ -->
<section class="final-cta" id="demo" aria-label="Sign up call to action">
  <h2>Ready to make ordering the same job every week?</h2>
  <p>Join restaurants running one consistent ordering routine instead of three different ones.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Up and running in 1 day</span>
    <span>✓ Works with your current suppliers</span>
    <span>✓ No system replacement needed</span>
    <span>✓ Free setup support included</span>
  </div>
</section>


<!-- ============================================================
     SECTION 14: FOOTER
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
        <li><a href="#features">Live Order Guides</a></li>
        <li><a href="#features">Shift-Proof Routine</a></li>
        <li><a href="#features">Count Then Order</a></li>
        <li><a href="#features">Multi-Location</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/inventory-tracking-software">Inventory Tracking</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Ops Apps</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <span>© 2025 VoiceOrder Solutions. All rights reserved.</span>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <a href="https://www.voiceordersolutions.com/" style="color:rgba(255,255,255,0.4);text-decoration:none;">Privacy Policy</a>
      <a href="https://www.voiceordersolutions.com/" style="color:rgba(255,255,255,0.4);text-decoration:none;">Terms of Service</a>
    </div>
  </div>
</footer>


<!--@SCRIPT-->
`,
};
