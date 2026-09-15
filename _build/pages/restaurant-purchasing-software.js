/* Page 11 — PRIMARY: restaurant purchasing software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * SECONDARY (proposed set, all Tier A): restaurant purchase order software (H3),
 *   multi location restaurant purchasing software (H3), restaurant procurement software (H3),
 *   food purchasing software for restaurants (body), restaurant purchasing system (body)
 * NOTE: deliberately does NOT claim vendor price comparison or approval workflows (open question Q5).
 *       Spend/price claims are limited to what order history alone supports.
 */
module.exports = {
  title: 'Restaurant Purchasing Software | VoiceOrder Solutions',
  description: 'Restaurant purchasing software with each supplier on VOS in one app. Order by voice at any hour, and every order is confirmed, numbered and timestamped.',
  related: ["order-entry-software","restaurant-stock-management-software","restaurant-checklist-software"],
  relatedHeading: 'More on ordering, stock, and kitchen routines',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "restaurant purchasing software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">Restaurant Purchasing Software</span>
      <h1>Restaurant Purchasing Software: One App, Many Suppliers.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is restaurant purchasing software that brings each
        of your suppliers on VOS into one app, with one ordering routine for all
        of them. Talk the order through, check it, and send it with its own dated
        order number. VOS reaches you through those suppliers (the food
        distributors you buy from): each one sets up your account, plus an order
        guide of the items you buy.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Setup by your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Same-day start for most</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android apps</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (multi-supplier purchase view) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Order guides from two<br>distributors with a confirmed<br>order number
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
      <div class="stat-number">1 app</div>
      <div class="stat-label">for every supplier you buy from on VOS</div>
    </div>
    <div>
      <div class="stat-number">20–30 min</div>
      <div class="stat-label">saved per order versus a call to your rep</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">ordering, even after your suppliers close</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Four suppliers, four ways to order, one tired manager.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      One distributor takes calls, one has a portal, one wants an email, and
      one wants a text to the rep. Nothing ends up in one place, and nobody can
      say for sure what went to whom. Here's what that costs:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧩</div>
        <h4 class="mb-8">"Every supplier wants something different"</h4>
        <p class="text-muted" style="font-size:15px;">
          Your manager keeps a separate login, number, or rep contact for each
          one. Ordering eats up hours every week, and something always slips.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4 class="mb-8">"The rep's line was closed again"</h4>
        <p class="text-muted" style="font-size:15px;">
          You check the walk-in after close, but your suppliers shut hours ago.
          So the order goes on a voicemail, and you hope someone hears it right.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📋</div>
        <h4 class="mb-8">"There's no record of what we ordered"</h4>
        <p class="text-muted" style="font-size:15px;">
          You phoned it in, and nothing was written down. When a case is missing or the wrong item
          arrives, it's your word against theirs.
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
      <span class="eyebrow">Built for Multi-Supplier Kitchens</span>
      <h2>Restaurant purchasing software for teams that buy from more than one supplier</h2>
    </div>


    <!-- Feature 1: One place for every supplier -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">One Place</span>
          <h3>Order from each supplier the same way.</h3>
          <p class="mt-12 text-muted">
            No more jumping between supplier portals and phone numbers. VOS is
            food purchasing software for restaurants that works with your
            existing suppliers. When one of your distributors joins, they
            add you, and their guide appears beside the others. Your
            manager learns one routine, not four.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Switch between suppliers without switching apps</span></li>
            <li><span class="bullet-check">✓</span><span>The same steps for every order, whoever it goes to</span></li>
            <li><span class="bullet-check">✓</span><span>Each supplier still gets orders in the format it uses now</span></li>
            <li><span class="bullet-check">✓</span><span>Missing a supplier? Ask them about VOS, or talk to us</span></li>
          </ul>
          <a href="/order-entry-software" class="feature-link">See how ordering works →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Supplier selector with items<br>and pricing from multiple<br>distributors
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 – restaurant purchase order software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">A Real Paper Trail</span>
          <h3>Restaurant purchase order software with proof of what you ordered.</h3>
          <p class="mt-12 text-muted">
            You look over every order and confirm it before it goes. Each one carries
            its own number, date and time, so it
            does the job of a purchase order with no extra form. If a delivery is
            short or wrong, point to the numbered order rather than argue over who
            said what.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Check items and amounts before you hit send</span></li>
            <li><span class="bullet-check">✓</span><span>Each purchase stamped with its own number and time</span></li>
            <li><span class="bullet-check">✓</span><span>Compare what arrived with the order you placed</span></li>
            <li><span class="bullet-check">✓</span><span>A written order, so nothing lives in a voicemail</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">See how your distributor tracks each order →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Confirmed order with<br>line items, order number,<br>and timestamp
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 – multi location restaurant purchasing software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Every Site</span>
          <h3>Multi location restaurant purchasing software that keeps each site's orders straight.</h3>
          <p class="mt-12 text-muted">
            Open a second or third spot and it gets hard to tell which kitchen
            ordered what. As a restaurant purchasing system for small groups, VOS
            gives each location a guide built on what that kitchen really buys.
            Every order shows who placed it and when, so there is no guessing
            which site sent it.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Each kitchen orders from its own guide</span></li>
            <li><span class="bullet-check">✓</span><span>Every order tagged with a name and a time</span></li>
            <li><span class="bullet-check">✓</span><span>Managers order for their own site from their own phone</span></li>
            <li><span class="bullet-check">✓</span><span>One routine to teach, at every address you run</span></li>
          </ul>
          <a href="/restaurant-checklist-software" class="feature-link">See how every site follows the same ordering steps →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Orders from two<br>locations with names, dates<br>and order numbers
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: SECONDARY IN H3 – restaurant procurement software -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Your Items, Your Prices</span>
          <h3>Restaurant procurement software that keeps the deals you have.</h3>
          <p class="mt-12 text-muted">
            Each supplier's order guide lists what your kitchen actually buys, at
            the prices set for your account and matched to that supplier's own
            item codes. The supplier keeps the guide current, so nobody digs
            through a full catalog. VOS does not replace your deal or your rep.
            It gives you a faster way to buy on the terms you already have.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Just the products you order, nothing to scroll past</span></li>
            <li><span class="bullet-check">✓</span><span>Your negotiated prices, set by each supplier</span></li>
            <li><span class="bullet-check">✓</span><span>Guides updated by the supplier when items change</span></li>
            <li><span class="bullet-check">✓</span><span>Your reps and your terms stay just as they are</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">See how your distributor keeps your guide current →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Supplier order guide with<br>your items at your<br>account prices
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
      <h2>What your team gets on every supplier order.</h2>
      <p class="lead mt-16">One app for every supplier on VOS. No workarounds, nothing to bolt on.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🏪</div>
        <h4>Distributor Promos</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Get your distributors' deals and specials on your phone, in the app
          or by text.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Order Confirmations</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A confirmation lands on your phone after each order, so you are not
          left wondering if it arrived.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💾</div>
        <h4>Automatic Saving</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Needed on the line halfway through? VOS saves your place, so you
          pick up where you left off.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Live Stock Updates</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Guides update as your supplier's stock changes, so fewer items
          arrive short or swapped.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Voice Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS already knows what is on your guide. You say how much, review it,
          and send.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">⏱️</div>
        <h4>Less Time Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each order takes 20 to 30 minutes less than calling it in. That time
          goes back to the kitchen.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>iOS + Android App</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Buy from the walk-in, the office, or wherever you are, on the phone
          in your pocket.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>24/7 Purchasing</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Place orders after close. Your distributor picks them up when they
          open in the morning.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>Works Beside Your POS</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounting tools stay put too. All that changes is how orders get
          to your suppliers.
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
      <h3 style="margin-bottom:10px;">See all your VOS suppliers in one app</h3>
      <p class="text-muted" style="font-size:16px;">
        Our walkthrough takes 20 minutes and costs nothing. See ordering from
        several suppliers, order records, and guides at your prices. Does your distributor already
        use VOS? Ask them to add you.
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
      <h2>Most kitchens order on the day they're set up</h2>
      <p class="lead mt-16">
        No IT team. Nothing to tear out. Your supplier does the setup, and
        buying stops being four separate jobs.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Get set up by your distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each distributor on VOS creates your account and adds the items you
          order at your prices. Not on VOS yet? Ask them, or contact us.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Put VOS on your phone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Sign in on an iPhone or Android. Your guides are already
          waiting.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Talk through your order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Say what you need, check it, and send. Each order gets its own number
          and a timestamp.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS app sign-in with order guides from two suppliers
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
      <h2>Kitchens on VOS, in their own words</h2>
    </div>

    <div class="testimonials-grid">
      <div class="testimonial-card featured">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">
          "I used to spend hours every week ordering food. Now it's simple, super
          easy, and I have free time to spend on other aspects of my restaurant."
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

      <div style="display: flex; flex-direction: column; gap: 24px;">

        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "Every order has a number and a time on it now. When a delivery looks
            off, we check it against the confirmation."
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
            "Our produce and dry goods suppliers are both in the app. I do both
            orders from the walk-in before I head home."
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
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Built for placing supplier orders.<br>Not for running the whole back office.</h2>
      <p class="lead mt-16">
        Back-office suites bundle invoice scanning, recipe costing and stock
        counts, and they need someone to run them. You have a chef and a
        manager. VOS sticks to getting the order out.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Back-Office Suite</th>
            <th style="width:22%;">Phone + Portals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Suppliers in one place</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Order records created automatically</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Portals only</td>
          </tr>
          <tr>
            <td>Order guide loaded for you by each supplier</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Varies</td>
          </tr>
          <tr>
            <td>Voice ordering with a written record</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Order 24/7</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Portals only</td>
          </tr>
          <tr>
            <td>Order reviewed before it is sent</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Portals only</td>
          </tr>
          <tr>
            <td>Keeps your negotiated pricing</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Leaves your other software as is</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Who has to run it</td>
            <td>Your manager</td>
            <td>A buyer</td>
            <td>Everyone</td>
          </tr>
          <tr>
            <td>How soon you can order</td>
            <td>Usually same day</td>
            <td>Often weeks</td>
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
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Questions kitchens ask about buying through VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Will I have to switch suppliers?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. You keep every distributor you buy from and the prices you have
          agreed with them. VOS reaches restaurants through those distributors:
          each one that signs up builds your account and guide. If one of yours
          has not joined, ask them about it, or reach out to us and we'll
          connect you with the right person.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I order from all of my distributors in one place?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, for each distributor that uses VOS. That is the whole idea behind
          this restaurant purchasing software. You choose the supplier, place
          the order in the same app, and VOS passes it on in the format that
          supplier already takes.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS create purchase orders for my suppliers?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          In practice, yes. You confirm each order, and VOS numbers and
          time-stamps it before the supplier sees it, so it serves as your
          purchase order. If a delivery does not match, that order number is
          your reference.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS compare supplier prices or process invoices?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS gets the order to your supplier and stops there. Each guide shows the
          price that supplier set for your account, but VOS does not rank
          suppliers against each other, scan invoices, or work out recipe costs.
          Any tool you use for that can stay.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does restaurant purchasing software handle multiple locations?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Each location has its own guide from each supplier, based on what that
          kitchen orders. The manager there places the orders on their phone, and
          each order records who sent it and when, so it stays tied to its site.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I order outside my supplier's business hours?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Your order can go in at any hour, by voice. It lands right away
          and waits for your distributor, who picks it up when they open.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this only for restaurant groups, or does one location make sense?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          One location works too. Any kitchen whose distributor offers VOS can
          use it, whether it runs one site or several. You
          do not need a buyer on staff. Whoever does the ordering today can do it
          from their phone.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          When can we place our first order?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Usually the same day your distributor sets you up. They handle your
          account, your guide and your prices. Then you
          download VOS, sign in, and order. Nobody on your team
          needs technical skills.
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
  <h2>Ready for one app across all your suppliers?</h2>
  <p>Ask your distributor about getting set up, or have us show you a demo first. Stop juggling calls and portals, and get a numbered record of each order you place.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Most order the same day</span>
    <span>✓ Keep your current suppliers</span>
    <span>✓ Speak your order, day or night</span>
    <span>✓ Ask us for a quote</span>
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
        <li><a href="#features">Multi-Supplier Ordering</a></li>
        <li><a href="#features">Purchase Order Records</a></li>
        <li><a href="#features">Multi-Location Buying</a></li>
        <li><a href="#features">Order Guides at Your Prices</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/vendor-management-software">Vendor Management</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Portals</a></li>
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
