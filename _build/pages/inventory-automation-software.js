/* Page 16 - PRIMARY: inventory automation software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * SECONDARY: restaurant inventory automation software (Tier A, H3; added from GSC data, pos 11 on main domain)
 *            inventory automation management software (Tier A, body; from Eugene's brief)
 * Separation: tracking = "what do I have right now?"; replenishment = "it's low, get more in fast";
 * automation = "what can I stop doing by hand?" (the busywork across the whole inventory workflow).
 * NOT claimed: POS-based depletion, barcode/RFID/sensor counting, unattended auto-ordering.
 * Assumptions: suggested reorder from par gaps (Q10), no POS depletion (Q13, stated outright in FAQ).
 */
module.exports = {
  title: 'Inventory Automation Software for Restaurants | VOS',
  description: 'VoiceOrder Solutions is inventory automation software for restaurants. Counts, alerts, reorders, and records keep themselves. You approve every order.',
  related: ['inventory-replenishment-software', 'inventory-tracking-software', 'catalog-management-software'],
  relatedHeading: 'What the automation runs on',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "inventory automation software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">Inventory Automation Software for Restaurants</span>
      <h1>Inventory Automation Software That Handles the Busywork.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is inventory automation software for restaurant
        kitchens. Counts update themselves, low stock flags itself, reorders build
        themselves, and every order reaches the supplier in the right format. You
        still make the calls. VOS does the typing.
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
        <span>No hardware to install</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (dashboard: live counts, alerts, draft reorder) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Live counts, low-stock<br>alerts, and a draft reorder<br>on one screen
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
      <div class="stat-number">Auto</div>
      <div class="stat-label">counts that move as you order and receive</div>
    </div>
    <div>
      <div class="stat-number">Zero</div>
      <div class="stat-label">orders retyped into a supplier's format</div>
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
    <h2>Your team spends more time on inventory paperwork than on inventory.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Counting, adding up, writing the order, typing it again for the supplier,
      keeping the spend sheet current. None of it needs a person. Here's what it
      costs when it gets one:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧮</div>
        <h4 class="mb-8">"Someone does the math every night"</h4>
        <p class="text-muted" style="font-size:15px;">
          Counts on paper, then a spreadsheet, then a calculator to work out the
          order. An hour of work a system should be doing.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4 class="mb-8">"Every order gets typed twice"</h4>
        <p class="text-muted" style="font-size:15px;">
          Once on the order sheet, then again into a portal or an email for the
          supplier. Every retype is another chance for a mistake.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🗃️</div>
        <h4 class="mb-8">"Nobody keeps the records up"</h4>
        <p class="text-muted" style="font-size:15px;">
          The spend sheet was current in March. Since then the invoices have piled
          up and nobody has had time to enter them.
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
      <span class="eyebrow">Busywork Out, Judgment In</span>
      <h2>Inventory automation software that removes the busywork, not the judgment</h2>
    </div>


    <!-- Feature 1: counts -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Self-Updating Counts</span>
          <h3>Counts that do their own math.</h3>
          <p class="mt-12 text-muted">
            Every order you place and every delivery you receive moves your counts
            for you. Nobody adds up a clipboard at the end of the night. When your
            team does a quick spot check on the app, they are correcting a number that
            is already close, not building one from scratch.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>On-hand counts move with ordering and receiving</span></li>
            <li><span class="bullet-check">✓</span><span>No nightly spreadsheet to rebuild</span></li>
            <li><span class="bullet-check">✓</span><span>Quick spot checks from the phone in the walk-in</span></li>
            <li><span class="bullet-check">✓</span><span>Every location keeps its own counts</span></li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">See inventory tracking →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>On-hand count updating<br>after a delivery is<br>received
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 (Tier A) – restaurant inventory automation software (assumption Q10) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Alerts and Reorders</span>
          <h3>Restaurant inventory automation software that builds the reorder.</h3>
          <p class="mt-12 text-muted">
            When something drops below par, VOS flags it and adds it to a suggested
            reorder, sized to bring it back to target. You open the list, change what
            you want, and send it. Nothing goes out without a person pressing send.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Below-par items flagged automatically</span></li>
            <li><span class="bullet-check">✓</span><span>Quantities worked out for you</span></li>
            <li><span class="bullet-check">✓</span><span>Review and send by voice or web</span></li>
            <li><span class="bullet-check">✓</span><span>Never sends an order on its own</span></li>
          </ul>
          <a href="/inventory-replenishment-software" class="feature-link">See inventory replenishment →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Suggested reorder built<br>from below-par items,<br>ready to review
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: catalog + supplier formats (secondary in body) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">No Retyping</span>
          <h3>Orders go out in the right format, from a catalog that updates itself.</h3>
          <p class="mt-12 text-muted">
            Items, pack sizes, and prices stay current in one catalog, so nobody
            maintains an order sheet by hand. When you send an order, VOS delivers it
            to each supplier as email, PDF, Excel, EDI, or API. This is the part of
            inventory automation management software most kitchens never get: the
            order is written once and never typed again.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Catalog items, sizes, and prices kept current</span></li>
            <li><span class="bullet-check">✓</span><span>Discontinued items drop off automatically</span></li>
            <li><span class="bullet-check">✓</span><span>Each supplier gets the format their system reads</span></li>
            <li><span class="bullet-check">✓</span><span>Written once, never retyped</span></li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">See catalog management →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>One order split and sent<br>to three suppliers in<br>three formats
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: records -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Records That Keep Themselves</span>
          <h3>The paperwork files itself.</h3>
          <p class="mt-12 text-muted">
            Every order is saved with its supplier, items, prices, and date the moment
            it goes out. Order history, spend by supplier, and what you ordered against
            what arrived are all there when you need them, without anyone entering an
            invoice.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Order history saved automatically</span></li>
            <li><span class="bullet-check">✓</span><span>Running spend per supplier, updated with each order</span></li>
            <li><span class="bullet-check">✓</span><span>Ordered versus delivered, side by side</span></li>
            <li><span class="bullet-check">✓</span><span>Searchable when an invoice doesn't match</span></li>
          </ul>
          <a href="/inventory-control-software" class="feature-link">See food cost control →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Month-to-date spend by<br>supplier built from<br>saved orders
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
      <h2>All the busywork VOS takes off your plate.</h2>
      <p class="lead mt-16">Each of these runs in the background from the day you start.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📊</div>
        <h4>Self-Updating Counts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every delivery and every order adjusts the number, so it's close before anyone checks.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔔</div>
        <h4>Low-Stock Alerts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Items below par get flagged on their own, before anyone has to
          notice.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📝</div>
        <h4>Suggested Reorders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The gap to par becomes a draft reorder. You review it and send
          it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗣️</div>
        <h4>Voice Ordering</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Talk through the order hands-free. VOS picks the right product and pack, then reads it back.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <h4>Supplier Formats</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          One order from you, delivered however each supplier's system wants it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔄</div>
        <h4>Auto-Updating Catalog</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          New items appear, old ones drop off, and prices follow your suppliers. No order sheet to edit.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Order History</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every order saved the moment it goes out, searchable by supplier,
          item, or date.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>Runs on Your Phones</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          iPhone, Android, and web. No scanners or sensors to buy and
          install.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>No System Replacement</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Keep your suppliers and your process. VOS takes over the typing, not
          the decisions.
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
      <h3 style="margin-bottom:10px;">See what's left when the busywork is gone</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a free 20-minute walkthrough. We'll show you self-updating counts,
        suggested reorders, and supplier formats working together.
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
        No IT team. No hardware. Three steps and the busywork starts doing
        itself.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>We connect your suppliers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS imports products, pack sizes, and pricing, plus the order format
          each supplier takes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Set your pars once</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Par levels are the rules the automation follows: what counts as low,
          and what counts as enough.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Let it run</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Counts, alerts, reorder lists, and records keep themselves. You review
          and send.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS par level rules alongside supplier order format settings
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
          "VOS simplified the entire ordering process for our kitchen. The nightly
          spreadsheet is gone. The numbers are already there when I sit down to
          order."
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
            "We stopped typing orders twice. Everything goes to each supplier in the
            format they want without anyone touching it."
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
            "I thought automation meant losing control of the order. It doesn't. It
            does the prep work, and I still decide what goes out."
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
     Honest ✗ row for VOS on POS-based depletion (assumption Q13).
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Automation for a kitchen.<br>Not a warehouse robot.</h2>
      <p class="lead mt-16">
        Warehouse automation means scanners, sensors, and months of setup. A kitchen
        needs the busywork gone. Here's how VOS compares.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Warehouse Automation Suite</th>
            <th style="width:22%;">Spreadsheet + Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Counts adjust with every order and delivery</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Low-stock alerts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Reorder list built for you</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>A person approves every order</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders sent in each supplier's format</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Voice ordering</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Deducts stock from POS sales</td>
            <td><span class="check-no">✗</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Hardware to buy and install</td>
            <td>None</td>
            <td>Scanners, sensors</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Keeping records current</td>
            <td>Automatic</td>
            <td>Automatic</td>
            <td>Manual</td>
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
     Q3: never auto-sends. Q4: no POS depletion (assumption Q13), stated outright.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Common questions about automating inventory with VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we have to switch systems to automate this?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Suppliers, delivery days, and routines stay put. VOS sits on top, handles the repetitive parts, and sends orders out the way you already order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does inventory automation software actually automate?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The busywork around inventory: updating counts when you order and receive,
          flagging items below par, building the reorder list, sending each order in
          the supplier's format, and keeping order history and spend up to date. The
          decisions stay with you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will it place orders without me?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS builds the reorder and prepares every order, but a person always
          reviews it and presses send. Automation handles the prep work, not the
          final call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it take stock off automatically when dishes sell?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS is not a POS system, so it does not deduct stock as dishes sell.
          Counts change on their own when you order and when deliveries arrive, and quick spot checks on the app keep them honest in between.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do I need to buy scanners or other hardware?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS runs on the phones your team already carries, iPhone and Android,
          plus any web browser. There is nothing to mount, wire, or maintain.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it work across several locations?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Each location runs on its own pars, counts, and reorder lists under one
          login. Owners can see every site together, and each site's automation
          follows its own numbers.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does automation make sense for a single restaurant?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Most of the time this inventory automation software saves comes from
          the nightly math and the order typing, and a single kitchen has plenty of
          both. VOS was built for independents, not chains with an IT department.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          A day, for most kitchens. Once catalogs and supplier formats are loaded, you set the par levels the automation runs on, with the VOS team helping. Nothing technical on your side.
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
  <h2>Ready to hand the busywork to the system?</h2>
  <p>Join restaurants whose counts, reorders, and records keep themselves, while the decisions stay with the people who know the kitchen.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Up and running in 1 day</span>
    <span>✓ Suppliers stay exactly as they are</span>
    <span>✓ No hardware to install</span>
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
        <li><a href="#features">Self-Updating Counts</a></li>
        <li><a href="#features">Suggested Reorders</a></li>
        <li><a href="#features">Supplier Formats</a></li>
        <li><a href="#features">Automatic Records</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/inventory-replenishment-software">Inventory Replenishment</a></li>
        <li><a href="/inventory-tracking-software">Inventory Tracking</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/inventory-control-software">Inventory Control</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Warehouse Automation</a></li>
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
