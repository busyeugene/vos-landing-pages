/* Page 14 - PRIMARY: inventory replenishment software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * SECONDARY: automated inventory replenishment software (Tier B, H3: list builds itself, a person sends)
 *            iphone inventory replenishment software (Tier A, H3: iOS app is confirmed)
 *            replenishment inventory optimization software (Tier B, FAQ, scope-honest like planning)
 * Separation vs inventory planning: planning = "how much for next week?" (forward, weekly).
 * Replenishment = "it's running low, get more in fast" (the reorder loop: trigger, list, send).
 * NEVER claims unattended auto-ordering. Assumption Q10: suggested reorder is built from par gaps.
 */
module.exports = {
  title: 'Inventory Replenishment Software for Restaurants | VOS',
  description: 'VoiceOrder Solutions is inventory replenishment software for restaurants. Get told when stock drops below par, review the reorder, and send it by voice.',
  related: ['inventory-planning-software', 'inventory-automation-software', 'restaurant-stock-management-software'],
  relatedHeading: 'Before and after the reorder',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "inventory replenishment software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">Inventory Replenishment Software for Restaurants</span>
      <h1>Inventory Replenishment Software That Keeps You Stocked.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is inventory replenishment software for restaurant
        kitchens. When something drops below par, you find out, the reorder list is
        ready, and you send it from your phone. No clipboard. No calling around.
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
      <!-- DEVS: Replace with VOS product screenshot (below-par alert + suggested reorder list) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Below-par alert opening a<br>suggested reorder list<br>ready to send
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
      <div class="stat-number">24/7</div>
      <div class="stat-label">reorder the moment you spot a gap</div>
    </div>
    <div>
      <div class="stat-number">Per item</div>
      <div class="stat-label">par levels that tell you when to reorder</div>
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
    <h2>Running out is usually a reorder that never happened.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Kitchens rarely run out because nobody could buy the product. They run out
      because nobody noticed in time, or nobody owned the reorder. Here's how it
      goes:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">😬</div>
        <h4 class="mb-8">"We found out we were out when we needed it"</h4>
        <p class="text-muted" style="font-size:15px;">
          Nobody saw it drop. The first sign was a cook reaching for an empty case
          in the middle of a rush.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⏳</div>
        <h4 class="mb-8">"The reorder waits until someone can call"</h4>
        <p class="text-muted" style="font-size:15px;">
          It gets noticed at 4pm, but the rep's office is closed. So it waits until
          tomorrow and misses the truck.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🙋</div>
        <h4 class="mb-8">"Everyone assumed someone else reordered it"</h4>
        <p class="text-muted" style="font-size:15px;">
          Three people saw it was low. Nobody owned the reorder. Now you're short,
          and all three are sure it was handled.
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

    <div class="text-center" style="max-width: 740px; margin: 0 auto 72px;">
      <span class="eyebrow">The Reorder Loop</span>
      <h2>Inventory replenishment software built around the reorder, not the report</h2>
    </div>


    <!-- Feature 1: the trigger -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">The Trigger</span>
          <h3>Know the moment something drops below par.</h3>
          <p class="mt-12 text-muted">
            Set a par level for each item and VOS watches your counts against it.
            When something slips below, you get told while there is still time to get
            it on the next truck, not when the shelf is already empty.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Par levels per item and per location</span></li>
            <li><span class="bullet-check">✓</span><span>Below-par alerts before you run out</span></li>
            <li><span class="bullet-check">✓</span><span>Counts move as you order and receive</span></li>
            <li><span class="bullet-check">✓</span><span>Everyone sees the same alert, so nobody assumes</span></li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">See how live counts work →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Stock list with items below<br>par highlighted and an<br>alert badge
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 (Tier B) – automated inventory replenishment software (assumption Q10) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">The Reorder List</span>
          <h3>Automated inventory replenishment software, with a person in charge.</h3>
          <p class="mt-12 text-muted">
            The gap between what you have and your par becomes a suggested reorder,
            sized to bring each item back to target. You look it over, change what you
            want, and send it. VOS never places an order on its own, because nobody
            knows your weekend like you do.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Suggested quantities built from your par gaps</span></li>
            <li><span class="bullet-check">✓</span><span>Adjust anything before it goes out</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing is sent without a person approving it</span></li>
            <li><span class="bullet-check">✓</span><span>One list across every supplier you use</span></li>
          </ul>
          <a href="/inventory-planning-software" class="feature-link">See how par levels get set →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Suggested reorder with<br>quantities to reach par<br>and an approve button
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 (Tier A) – iphone inventory replenishment software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">From Your Pocket</span>
          <h3>iPhone inventory replenishment software for the walk-in.</h3>
          <p class="mt-12 text-muted">
            Stand in front of the shelf, see what is low, and reorder right there. The
            VOS app runs on iPhone and Android, and you can speak the order instead of
            typing it. VOS matches each item to the right size and pack, then confirms
            before it goes.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>iPhone and Android app, plus any web browser</span></li>
            <li><span class="bullet-check">✓</span><span>Reorder by voice in seconds, hands free</span></li>
            <li><span class="bullet-check">✓</span><span>Matched to the right item, size, and pack</span></li>
            <li><span class="bullet-check">✓</span><span>Check live supplier availability before you send</span></li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">See restaurant stock management →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>iPhone app reorder screen<br>with voice input and<br>matched items
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: any hour -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Any Hour</span>
          <h3>Send it tonight, not tomorrow at nine.</h3>
          <p class="mt-12 text-muted">
            Restocking should not wait for business hours. Place the reorder after
            close or before prep, and it reaches the supplier you already use in the
            format they already take. That alone saves 20 to 30 minutes per order
            compared with calling it in.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Place reorders 24/7, including weekends</span></li>
            <li><span class="bullet-check">✓</span><span>Goes to your existing suppliers, no switching</span></li>
            <li><span class="bullet-check">✓</span><span>Sent as email, PDF, Excel, EDI, or API</span></li>
            <li><span class="bullet-check">✓</span><span>Saves 20 to 30 minutes versus a phone order</span></li>
          </ul>
          <a href="/order-entry-software" class="feature-link">See voice order entry →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Reorder confirmation sent<br>after hours with delivery<br>on the next truck
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
      <h2>All the tools your team needs to stay stocked.</h2>
      <p class="lead mt-16">No extra apps. No workarounds. Everything ships with VOS out of the box.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🔔</div>
        <h4>Below-Par Alerts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Get told when an item slips below target, while there's still time to
          catch the next truck.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📝</div>
        <h4>Suggested Reorders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The gap to par becomes a ready-made reorder list. You check it and
          send it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🎯</div>
        <h4>Par Levels</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Set the amount you want on hand per item and per site. Change it for
          a busy weekend.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Voice Reordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Say what you need and VOS matches it to the right item, size, and
          pack, then confirms.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>iPhone + Android</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Reorder from the walk-in, the line, or the parking lot. Web works
          from any browser too.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>24/7 Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Send the reorder after close. Your supplier picks it up when they
          open.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Supplier Availability</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          See what your distributor can actually fill before the reorder goes
          out.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📍</div>
        <h4>Multi-Location</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every site keeps its own pars and reorder list, all under one
          login.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>No System Replacement</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Keep your suppliers and your process. VOS just makes the reorder
          fast and hard to forget.
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
      <h3 style="margin-bottom:10px;">See the reorder loop, from alert to sent</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a free 20-minute walkthrough. We'll show you par alerts, suggested
        reorders, and voice ordering working together, for a kitchen like yours.
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
        No IT team. No systems to rip out. Three steps and running low stops
        turning into running out.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>We load your items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS imports products, pack sizes, and pricing from the suppliers you
          already use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Set your par levels</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Tell VOS how much of each item you want on hand, per location. That
          drives every alert.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Get the alert, review, send</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          When something drops below par, the reorder is ready. Check it and
          send it by voice or web.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS par level setup next to a suggested reorder list
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
          "VOS simplified the entire ordering process for our kitchen. When
          something runs low now, the reorder is sitting there waiting for me. I
          check it on my phone and it's done."
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
            "We used to run out of the same three things every week because nobody
            owned the reorder. The alert goes to everyone now, and it gets handled."
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
            "I reorder from the walk-in on my phone after close. By the time the
            supplier opens, it's already in."
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
     Honest ✗ row for VOS on statistical forecasting.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Built for the reorder.<br>Not a forecasting project.</h2>
      <p class="lead mt-16">
        Big replenishment suites model demand across warehouses. A kitchen needs to
        know what's low and get more in. Here's how VOS compares.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Forecasting Suite</th>
            <th style="width:22%;">Clipboard + Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Below-par alerts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Reorder list built from par gaps</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>A person approves before anything is sent</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Reorder from an iPhone or Android app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Voice ordering</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Order 24/7</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Checks supplier availability</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Statistical demand forecasting</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Needs an analyst to run it</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>1 day</td>
            <td>Months</td>
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
     Q2 defends against cannibalising /inventory-planning-software
     Q3 states outright that VOS never auto-sends
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Common questions about reordering with VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need to replace my current system to use VOS?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. You keep your suppliers, your delivery days, and your process. VOS adds
          the alert and the reorder list on top, and sends the order out the way you
          already order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How is inventory replenishment software different from inventory planning?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Planning looks ahead: how much should we buy for next week? Replenishment
          is the loop that runs every day: something dropped below par, so get more
          in before it runs out. VOS does both, and this page is about the second one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it place orders automatically?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, and that is on purpose. This inventory replenishment software builds the
          reorder list for you from your par gaps, but a person always reviews it and
          presses send. You get the speed without an order going out that nobody
          checked.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this replenishment inventory optimization software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not in the statistical sense. VOS reorders to the par levels you set and
          flags what is below them. It does not run forecasting models on weather or
          foot traffic, and it does not need a data team. For most kitchens,
          reordering to a sensible par, quickly, is the win.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I reorder from my phone?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. There is an iPhone and Android app, plus web access from any browser.
          Most teams reorder straight from the walk-in, by voice or by tapping
          through the list.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What decides when something needs reordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The par level you set for each item at each location. When your live count
          drops below it, VOS flags it and adds it to the suggested reorder. You can
          change pars any time, for a holiday weekend or a slow month.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it work across several locations?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Each location keeps its own pars, counts, and reorder list under one
          login. A busy site is not held to a quiet site's numbers, and owners can see
          every location together.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most teams are fully set up within one business day. The VOS team imports
          your products, pack sizes, and pricing, and helps you set your first par
          levels. You do not need an IT team.
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
  <h2>Ready to stop running out of the same things?</h2>
  <p>Join restaurants that reorder the moment something runs low, not the next morning.</p>

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
        <li><a href="#features">Below-Par Alerts</a></li>
        <li><a href="#features">Suggested Reorders</a></li>
        <li><a href="#features">Phone Reordering</a></li>
        <li><a href="#features">24/7 Ordering</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/inventory-planning-software">Inventory Planning</a></li>
        <li><a href="/inventory-tracking-software">Inventory Tracking</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Forecasting Suites</a></li>
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
