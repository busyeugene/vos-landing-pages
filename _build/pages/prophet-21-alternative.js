/* Comparison page: Epicor Prophet 21, and Prophet 21 with VoiceOrder Solutions added. `compare` block order.
 * Batch 2 (Eugene's "Competitors Batch 2" sheet, 8 Nov 2026), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside Prophet 21,
 * never its replacement. Table = "Prophet 21 + VoiceOrder Solutions" vs "Prophet 21 on its own"; every
 * Prophet 21 strength is a tick in both columns. The two do NOT connect (FAQ 5); whether a Prophet 21
 * setup takes our formats in directly is a demo question, never a claim.
 * Angle, distinct from NECS Entree ("typed vs spoken, you may not need an alternative") and NetSuite
 * ("where the order starts"): Prophet 21 is built around the ORDER DESK (counter sales, inside sales,
 * "the entire order entry process from one screen"). However quick that screen, a phoned order still
 * holds a person on the line. VoiceOrder Solutions takes that call off the desk: the kitchen speaks and
 * checks its own order. H1 "Free Up Inside Sales" (P21's own term, and the KB's "Free Your Sales Reps
 * to Sell"). Second P21-specific point: Epicor has set 2028 as P21's last on-premises feature release,
 * so a P21 replacement would land on top of a cloud move many shops already face.
 * ⚠ Epicor Commerce (their web store for P21) is 24/7, with buyer pricing, reorders and a quick order
 *   pad. The 24/7 point is never a VoiceOrder-only win; the difference is spoken + checked, in an app.
 * ⚠ P21 Mobile Sales gives REPS anytime order entry: never "no mobile ordering".
 * ⚠ Third parties already sell rep-side voice and text ordering for P21, and an official partner reads
 *   emailed orders (July 2026). FAQ 4 and FAQ 6 concede both without naming them.
 * ⚠ Epicor's AI (Prism) has P21 agents for answers, navigation and business rules, cloud only. None
 *   found that lets a customer order by speaking; FAQ 6 says "we found none listed", dated.
 * ⚠ P21's industry list does not name food. NOT used: absence from a list is not absence of customers.
 * No prices and no implementation length published, so neither is an argument.
 * Every claim is sourced and dated in _build/research/competitors/prophet-21.md.
 * Review 2026-11-09 (wave 1 fix list, shared S1-S10 + page items): table rows 2/5/7 made consistent
 *   (Epicor Commerce is a separate web store; row 7 now "Ordering for kitchens that never sign in to a
 *   website"); problem card 2 is now counter customers waiting; 2028 line uses Epicor's own "tentatively
 *   May 2028"; the replacement proposition lives only in problem card 3; FAQ 4 is now the cloud-move
 *   question (rep-side voice/text tools conceded in one line); FAQ 5 says what each delivery way means
 *   for the desk (email = your team still enters it, from checked lines); coexistence card 3 is now
 *   P21 Mobile Sales (reps) vs our app (kitchens).
 */
module.exports = {
  title: "Not a Prophet 21 Alternative: Keep It, Add Voice Ordering",
  description: 'Fewer calls for inside sales: kitchens speak each order into an app and check every line. Not a Prophet 21 alternative: P21 keeps order entry and the books.',
  related: ["netsuite-alternative","necs-entree-alternative","pepperi-alternative"],
  relatedHeading: "More ERPs and order tools you keep as they are",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Prophet 21 Alternative: Free Up Inside Sales</h1>
      <p class="lead mt-16">
        Give your inside sales team back the time spent taking calls. With VoiceOrder Solutions, a kitchen says its order into our app and looks over every line before you get it. Prophet 21 still runs order entry, stock and the books.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Set up from a Prophet 21 export</span>
        <span class="hero-trust-dot"></span>
        <span>Kitchens review their own lines</span>
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
      <div class="stat-label">Saved on each order that skips a call</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">Kitchens order day or night, with nobody at the desk</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">From spreadsheet to live, for most distributors</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Prophet 21 is a full distribution ERP and takes six of nine rows in both columns. Only the
     three rows about who is on the line when a kitchen orders differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Both Columns, One Business</span>
      <h2>Prophet 21 plus VoiceOrder Solutions.<br>Inside sales takes fewer calls.</h2>
      <p class="lead mt-16">
        Your kitchens place orders without calling anyone. Prophet 21 (P21 for short) keeps counter sales, pricing, stock and the warehouse, so those rows show a check in both columns. Only a few rows differ, and they turn on whether a kitchen that won't type or sign in still has to call your desk. You do not need a Prophet 21 alternative for that: keep P21 and add one ordering app. The two are sold separately, and nothing links one to the other.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Prophet 21 + VoiceOrder Solutions</th>
            <th style="width:30%;">Prophet 21 on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Counter and inside sales order entry on one screen</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A kitchen talks through its order, then confirms it</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed into Epicor's web store</td>
          </tr>
          <tr>
            <td>Real-time general ledger and receivables</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Accounts who used to call now place numbered orders themselves</td>
            <td><span class="check-yes">✓</span></td>
            <td>Someone at your desk takes the call</td>
          </tr>
          <tr>
            <td>Web reordering at each account's own prices (Epicor Commerce)</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Sales reps enter orders from a tablet or phone</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Ordering for kitchens that never sign in to a website</td>
            <td><span class="check-yes">✓</span></td>
            <td>They phone, since the web store needs a sign-in</td>
          </tr>
          <tr>
            <td>Warehouse barcoding, cross-docking and cycle counts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Replenishment and machine-learning demand forecasts</td>
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
      <span class="eyebrow">Why The Search Starts</span>
      <h2>Why food distributors look up a Prophet 21 competitor</h2>
      <p class="lead mt-16">
        A search for a Prophet 21 alternative rarely starts with the ERP. P21 is designed around a fast order desk, but every phoned order still needs someone free to answer it. Three situations keep coming up.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>A quick screen still needs a person on the line</h4>
        <p class="text-muted mt-12">
          Prophet 21 lets inside sales finish an order from one screen, and it is fast. A kitchen that calls still holds that person for the length of the call, and the next kitchen calling in may get a busy line or voicemail.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧾</div>
        <h4>Counter customers wait while a call is taken</h4>
        <p class="text-muted mt-12">
          Prophet 21 handles counter sales and the inside sales desk in one system. When the same person covers the counter and the phone, a customer standing at the counter waits until the call ends.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">☁️</div>
        <h4>A Prophet 21 replacement while moving to the cloud</h4>
        <p class="text-muted mt-12">
          Epicor has tentatively set May 2028 for the last on-premises feature release, so a cloud move is on many P21 shops' horizon. Replacing the ERP at the same time would stack a second project on top of the first.
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
      <h2>Not a Prophet 21 alternative: what it adds for inside sales</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Orders spoken in the kitchen, not phoned to your desk</h3>
          <p class="mt-12 text-muted">
            A chef checks the walk-in and says what is needed. The app turns that into lines from the kitchen's own guide, the chef fixes anything that is off, then sends it. Nobody in inside sales picks up the phone for it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The kitchen's buyer checks every line before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Open for orders 24/7, nights and Sundays included</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on the iOS or Android phone the chef already has</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>If the chef is pulled away, nothing is lost; they pick up where they stopped</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How kitchens send orders →</a>
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
          <h3>A short list per account, under your own item numbers</h3>
          <p class="mt-12 text-muted">
            Export what each account buys from Prophet 21 into a spreadsheet. We load those items at the price you set for that account, so each kitchen orders from its own short list. P21 remains the system of record for customers, stock and billing.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Kitchens see only the lines on their guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You choose what goes in each guide, and at what price</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You update guides in our admin platform, and later orders use the change</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>We keep the guides, their prices and orders from the app; P21 keeps the rest</span>
            </li>
          </ul>
          <a href="/catalog-management-software" class="feature-link">Keeping order guides current →</a>
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
          <span class="eyebrow">Inside Sales</span>
          <h3>Inside sales spends less time on order calls</h3>
          <p class="mt-12 text-muted">
            When kitchens send their own orders, the people who used to take those calls can work the accounts instead: chase a missed line, call a quiet account, quote a new one. Email orders still need entering in P21, but from lines the kitchen checked first, which is quicker than a call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Emailed as a PDF, Excel or Word file, for your team to enter</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI, the API or QuickBooks, nobody on your team retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each app order carries its own number, date and time</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Any call that still comes in is entered in P21 as before</span>
            </li>
          </ul>
          <a href="/distributor-sales-software" class="feature-link">Freeing reps to sell →</a>
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
          <h3>Stock levels in view while kitchens order</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog follows your stock as it changes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises before the truck is loaded</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Counts, buying and the warehouse stay in P21</span>
            </li>
          </ul>
          <a href="/inventory-tracking-software" class="feature-link">How stock tracking works →</a>
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
      <h2>Three steps, and the first is a P21 export</h2>
      <p class="lead mt-16">
        Setup runs on one spreadsheet from P21 and installs nothing in it. Any EDI or API setup comes later, if you want it, and we go over what it would take on your side in the demo.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export a report of each account's regular items</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A P21 report saved as a spreadsheet is usually all we need. It lists each account's items and what that account pays.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We build each kitchen's guide</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We set up each guide, the kitchen downloads the app, and most place a first order the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>App orders arrive at your desk</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each one comes checked by the kitchen, numbered and timed, in whichever format you set up.
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
      <h2>What inside sales notices first</h2>
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
            "Our inside sales people spend less of the morning on the phone, and more of it calling accounts we had let go quiet."
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
            "The counter used to wait whenever the phone rang. Now our regular kitchens order from the app, and whoever is standing at the counter gets served first."
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
      <h2>How the work splits between Prophet 21 and VoiceOrder Solutions</h2>
      <p class="lead mt-16">
        This is not an alternative to Prophet 21. Your desk keeps P21 Order Entry for the counter and any calls, while kitchens that would have phoned order in our app instead.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🖥️</div>
        <h4>Order Entry stays your desk's main screen</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Counter sales, walk-ins and whatever calls still arrive run through Prophet 21 Order Entry, same as today. Calls taken that way get no order number from us; that number is for app orders only.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Web store accounts keep ordering online</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts that already reorder through Epicor Commerce can carry on, and our app is for the kitchens that prefer talking to searching.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>Mobile Sales stays with your reps</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          P21 Mobile Sales lets your reps take orders on a tablet in the field. Ours goes to the kitchen itself, so reps keep their tool and kitchens get theirs.
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
      <h3 style="margin-bottom:10px;">See a chef's spoken order travel to your desk</h3>
      <p class="text-muted" style="font-size:16px;">
        In twenty minutes, we talk through an order in the app, correct one line, send it, and show how it would reach your desk beside P21.
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
      <h2>Questions Prophet 21 teams ask</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Prophet 21 alternative to cut down on phone orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Orders over the phone are a desk problem, not an ERP problem: P21 makes an order quick to enter once someone has it. Begin with the kitchens on the phone most often, and those orders no longer wait for someone to pick up the phone. P21 goes on running the counter, prices, inventory and accounting.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Prophet 21?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, at one job: a kitchen sending its order without tying up anyone at your desk. For everything after that, P21 is the system to keep, which is why this is an addition and not a Prophet 21 alternative.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't Epicor Commerce already let kitchens reorder online?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Epicor Commerce, a separate web store product for P21, shows each account its own prices, with fast repeat orders and a quick order pad, open day and night. It still means signing in, searching and typing. We built ours for kitchens that find talking quicker than typing, and they check what they said before it goes.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We're planning the cloud move. Should we wait?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No need. Nothing of ours is installed in P21, and setup works from a spreadsheet you export, so the move can happen before or after. If you later send orders by EDI or the API, check that part against your cloud plans in the demo. 
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does our Prophet 21 link up with your app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is no ready-made link between them, and Epicor and we each support only our own software. Sent over EDI or the API, the order can pass into P21 with nobody retyping it, if your setup accepts it in that form; a demo will tell you whether it does. If it is emailed, the attached file has every line checked by the kitchen, and someone on your team keys it into P21 from that rather than from a call.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What about Epicor's own AI for Prophet 21?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Epicor's AI, called Prism, helps people inside P21 get answers and find data, and an Epicor partner sells a product that reads emailed orders for your team. Both start once the order has reached you. None of the Prism agents Epicor lists for P21 lets a kitchen speak its order to you. Other vendors sell tools that help your reps enter P21 orders by speaking, or that turn customer texts into orders. Ours is the app a chef talks the order into.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take, and is there a published price?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors, setup takes 24 to 48 hours, since we never need a P21 login and put no software on your servers. Epicor lists no price for P21 and we do not publish one either; you get ours as a quote.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How current are the Prophet 21 facts on this page?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We read them on epicor.com on 9 November 2026: Epicor's product, web store, mobile and AI pages for P21, plus its cloud release schedule. What we say about other ordering tools comes from a search for ordering tools sold for P21, the same day. Epicor does not publish a P21 price, so none appears here. If anything here has gone out of date, tell us and we will fix it.
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
  <h2>Hand the ordering to your kitchens, and keep Prophet 21</h2>
  <p>Twenty minutes, one order talked into the app, and a plain answer on how it would reach P21.</p>

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
        <li><a href="#features">Inside Sales</a></li>
        <li><a href="#features">Inventory Visibility</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">Prophet 21 + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
        <li><a href="/distribution-workflow-software">Distribution Workflow</a></li>
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
