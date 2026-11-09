/* Comparison page: Syspro, and Syspro with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Syspro,
 * never its replacement. Table = "Syspro + VoiceOrder Solutions" vs "Syspro on its own"; every
 * Syspro strength is a tick in both columns. The two do NOT connect (FAQ 6); whether a Syspro setup
 * takes our formats in directly is a demo question, never a claim.
 * Spelling: the live site writes "Syspro" since its rebrand (logo and help site still say SYSPRO).
 * Angle, distinct from NECS Entree ("typed vs spoken, inside vs beside") and NetSuite ("where the
 * order ends up vs where it starts"): Syspro works on orders that ALREADY EXIST IN WRITING. Its AI
 * turns a customer's purchase order file into a sales order, its portal takes a typed order, and its
 * Torque rules check a draft order after your team enters it. A kitchen that just calls writes
 * nothing down. VoiceOrder Solutions is how that kitchen produces a written order itself, by voice,
 * checked line by line. Second strand: Syspro's food page is written for food MAKERS (recipes,
 * production), so the table concedes that row in both columns.
 * ⚠ Syspro HAS customer self-service ordering (Supply Chain Portal: create, track, pay, history).
 * ⚠ Syspro HAS order AI (PO file to sales order; draft order rules check; Torque agents). Never
 *   "Syspro has no AI" or "your team types every order".
 * ⚠ No Syspro-specific voice ordering tool found, but API-based voice/AI order tools exist for ERPs
 *   generally: FAQ 5 concedes it, never "the only voice option for Syspro".
 * ⚠ No Syspro price and no go-live duration are published (IDEAL methodology, five phases). Neither
 *   is used as an argument. Third-party price estimates stay off the page.
 * ⚠ Syspro says it serves mid-sized companies and distributors: never "too big" or "manufacturers only".
  * Every claim is sourced and dated in _build/research/competitors/syspro.md.
 * Review 2026-11-09 (wave 1 fix list S1-S10 + page items): H1 now "Kitchen Orders In Writing";
 *   Torque scoped as not generally available (Controlled Availability Program, syspro.com/syspro-torque/);
 *   the "when the check happens" argument dropped (Business Central owns it); table rows 2/5/8 merged
 *   into one, freed rows = available-to-promise (both) and after-hours call-in kitchens; problem card 3
 *   is now "Its rules start after the typing" (input, not timing); the replacement proposition lives
 *   only in the cost FAQ; FAQ 5 is now the production question (voice-tool concession kept as one line);
 *   FAQ 6 states the EDI/API vs email split (S1); records wording per S3; coexistence card 3 = portal.
 */
module.exports = {
  title: "Not a Syspro Alternative: Keep Syspro, Add Voice Ordering",
  description: 'Syspro keeps stock, prices and books. Kitchens that used to phone say each order into an app and check the lines: a Syspro alternative that adds written orders.',
  related: ["netsuite-alternative","necs-entree-alternative","wizcommerce-alternative"],
  relatedHeading: "Other systems you keep running as they are",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Syspro Alternative: Kitchen Orders In Writing</h1>
      <p class="lead mt-16">
        Chefs who phone you each morning can send you a checked, written order instead. With VoiceOrder Solutions, the chef speaks each line into our app and fixes any mistakes before you get it. Syspro carries on with the stock, the pricing and the books.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare Side By Side</a>
      </div>

      <div class="hero-trust">
        <span>Syspro stays your ERP</span>
        <span class="hero-trust-dot"></span>
        <span>Each line approved first</span>
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
      <div class="stat-label">Saved per order that no longer comes by phone</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Ordering, with nobody at your desk to answer</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Setup for most distributors, with Syspro untouched</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Syspro is a full ERP and takes seven of nine rows in both columns. Only the two rows
     about the kitchen that phones differ (review 2026-11-09: rows 2, 5 and 8 merged).
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Keep Syspro, Add One Step</span>
      <h2>Syspro plus VoiceOrder Solutions.<br>Nothing in your ERP moves.</h2>
      <p class="lead mt-16">
        A kitchen with no habit of writing its orders down can still send you a finished one. Syspro is strong once an order exists in writing: its AI can work from a PO file to fill in the order, and the order rules in Syspro Torque, not yet generally available, can check orders once staff have entered them. A chef who phones gives Syspro nothing written to work on. This is not a Syspro alternative: it adds a step before Syspro. The Syspro + VoiceOrder Solutions column is your business with both running. The two run separately; nothing built in links them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Syspro + VoiceOrder Solutions</th>
            <th style="width:30%;">Syspro on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ledger, credit control and contract pricing</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens that used to phone now send written orders</td>
            <td><span class="check-yes">✓</span></td>
            <td>Your team keys the call in</td>
          </tr>
          <tr>
            <td>Lot traceability, recalls and FEFO rotation</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>AI that turns a customer's PO file into a sales order</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Available-to-promise across your warehouses</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Customer portal with order status and payments</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Warehouse picking with barcode scanning</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A call-in kitchen can order after you close</td>
            <td><span class="check-yes">✓</span></td>
            <td>A voicemail for staff to type up later</td>
          </tr>
          <tr>
            <td>Recipe control and production scheduling</td>
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
      <span class="eyebrow">Why People Search</span>
      <h2>What sets off a Syspro competitor search</h2>
      <p class="lead mt-16">
        Few people who look up a Syspro alternative want to leave the system that runs their stock and their books. The usual trouble is simpler: Syspro's AI and its newer, early-release order rules work on written orders, and a kitchen on the phone never sends one.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📝</div>
        <h4>Its AI needs something written to read</h4>
        <p class="text-muted mt-12">
          Syspro can convert a PO document into an order, which suits customers who send one. A chef ordering for tomorrow rarely does. They call, or send a quick text someone still has to type in.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🏭</div>
        <h4>Its food focus is the plant floor</h4>
        <p class="text-muted mt-12">
          Syspro's food pages are built around recipes, batch tracking and the production line, which is real value if you make product as well. If you mostly buy and deliver, the step that hurts sits before Syspro: the kitchen getting its order to you.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🏗️</div>
        <h4>Its rules start after the typing</h4>
        <p class="text-muted mt-12">
          Syspro's newer order rules, part of Syspro Torque and still in early release, can hold a draft order until it passes. The draft still has to be typed in first, and for a phoned order that means someone at your desk.
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
      <h2>Not a Syspro alternative: four things we add beside your ERP</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Spoken by the chef, listed by our app</h3>
          <p class="mt-12 text-muted">
            The chef stands at the walk-in and says what they need. Our app turns it into lines from that kitchen's own guide; they fix anything that came out wrong and send it. So the written order comes from someone looking at their own shelves.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The kitchen's buyer goes over every line first</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Takes orders around the clock, weekends too</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the iOS or Android phone in the chef's pocket</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>If the chef gets pulled away, the order waits where they left it</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How order capture works →</a>
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
          <h3>One guide per account, loaded from your export</h3>
          <p class="mt-12 text-muted">
            Export what each account buys and at what price. We build that account's guide under your own item codes, so the kitchen orders from its usual lines rather than your full catalog. Syspro still holds the master list and the contract prices.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each kitchen sees only what it normally buys</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Prices come from you, account by account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit a guide once and later orders follow it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Setup needs no change inside Syspro</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Keeping guides current →</a>
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
          <h3>Written orders arrive at your office in the format you pick</h3>
          <p class="mt-12 text-muted">
            A sent order arrives as an email carrying a PDF, Excel or Word file, or goes over EDI, through our API or into QuickBooks. Email orders still need keying, but from lines the kitchen already checked. Whether EDI or the API can feed Syspro directly at your end is something the demo checks.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a rep or a shared inbox</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, invoicing and dispatch run as they do now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing in Syspro has to be switched off</span>
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
          <h3>A view of stock as orders arrive</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock changes reach the catalog automatically</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises when a large order comes in late</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Lots, expiry dates and reorder points stay with Syspro</span>
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
      <h2>From a Syspro export to the first spoken order</h2>
      <p class="lead mt-16">
        Your team exports one file from Syspro. We handle the rest, and kitchens start sending orders.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export one spreadsheet</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet out of Syspro is usually all we need: each account's usual lines and what it pays, under your codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Accounts open with their guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each kitchen's guide goes in, its account opens, and the chef installs the app. Most kitchens are sending a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Written orders start coming in</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one has been reviewed by the kitchen, carries a number and the time it was sent, and comes in the format you picked.
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
      <h2>Once the order shows up in writing</h2>
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
            "Emailed POs were never the problem. The morning calls were, and now many of those chefs send a list they have checked."
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
            "Our chefs never wrote orders down. Now they say them, look over the lines, hit send, and we get it in writing."
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
      <span class="eyebrow">Who Does What</span>
      <h2>How Syspro and VoiceOrder Solutions divide the job</h2>
      <p class="lead mt-16">
        This is one extra step, not an alternative to Syspro: a chef who usually calls can now send a written list, and Syspro handles everything after that.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Syspro remains your system of record</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers, stock, lots and invoices all stay in Syspro. We hold the guide for each account and its prices, which your team updates in our admin platform, and we keep every order a chef sends through the app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <h4>Accounts that send POs keep sending them</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Where accounts already send POs for Syspro's AI to read, leave that in place. We built the app for kitchens whose chef would rather call than write. Phoned orders get no number from us; app orders each get their own.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">✅</div>
        <h4>Portal users can stay on the portal</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Kitchens happy to type into Syspro's portal can keep doing so, tracking orders and paying there. Our app is for the ones who phone you instead.
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
      <h3 style="margin-bottom:10px;">Hear us speak one order into the app, then ask how it would land in Syspro</h3>
      <p class="text-muted" style="font-size:16px;">
        In twenty minutes we say one order aloud, correct a line, press send, and show what would arrive at your end.
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
      <h2>Questions Syspro users bring to us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Syspro alternative before kitchens can order by speaking?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Syspro keeps doing everything it does now. What VoiceOrder Solutions adds is a written, checked order from kitchens that would otherwise call you: the chef says it in our app and corrects it there, and Syspro is left as it was.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Syspro?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job only: getting a checked list of items from kitchens that never write their orders down. What Syspro does after that stays with Syspro, so we work beside it rather than in its place.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't Syspro already let customers order online?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Its Supply Chain Portal lets customers create and track their own sales orders, see their history and pay. To use it, someone in the kitchen types each line into a website. In our app the chef just speaks the items aloud and fixes any line that is off.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can't Syspro's AI handle incoming orders already?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Partly. It can read a PO sent as a PDF or a photo and build the sales order from it. Syspro Torque, still in a controlled early release ahead of general availability, adds order rules that can hold a new order as a draft until it passes those checks. Both start from an order that is already written. Our app is how a kitchen that just phones produces one. Speech and AI order tools from other companies can also post orders into Syspro through its API, so we are not the only option.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We make product too. Does this touch production?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Recipes, batches and production remain Syspro's job, and its food pages speak to exactly that. VoiceOrder Solutions only deals with what a chef orders from you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does Syspro connect to VoiceOrder Solutions?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Each is its own product from its own company, with no link set up between them, and neither of us gives support for the software of the other. When an order travels by EDI or through the API, your desk may not need to retype it, if your Syspro setup accepts orders that way. A demo is where we find out whether yours can. If it goes by email, the attachment lists every item the kitchen checked, and someone on your desk keys it from that instead of from a call or a voicemail.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly does it go live, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It takes most distributors 24 to 48 hours, since Syspro itself stays untouched. Neither company publishes a price: Syspro lists none for its ERP, and we quote per distributor. A Syspro alternative, or any Syspro replacement, means moving the whole ERP; this leaves it where it is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Syspro details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From syspro.com and Syspro's help site, as they stood on 9 November 2026: the distribution, food, sales order, customer portal, AI, Torque and implementation pages. Syspro publishes no prices, so this page states none. If you spot anything that has changed, tell us and we will fix the page.
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
  <h2>Syspro stays. The kitchen's order arrives written and checked.</h2>
  <p>Twenty minutes is enough to follow a chef's order from the walk-in to your desk.</p>

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
        <li><a href="#comparison">Syspro + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/distribution-automation-software">Distribution Automation</a></li>
        <li><a href="/distributor-analytics-software">Distributor Analytics</a></li>
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
