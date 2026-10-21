/* Comparison page: NECS Entree, and Entree with VoiceOrder Solutions added. `compare` block order.
 * REFRAMED 2026-10-21 (client, via Eugene): VoiceOrder Solutions is the voice step a distributor
 * ADDS beside Entree, never its replacement. Table = "Entree + VoiceOrder Solutions" vs "Entree on
 * its own": every Entree strength is a tick in both columns. The two do NOT connect (FAQ 4), and
 * whether Entree takes our formats in directly is a demo question, never a claim (named-integration
 * ban). Brand in full, never "VOS". The old H1 "You May Not Need A NECS Entree Alternative." was
 * rewritten into the add-on frame. The notes below are from the original build.
 * Angle, and no other page in the set does this: it argues AGAINST the premise of its own
 * keyword. Entree is a four-decade food distribution ERP carrying accounting, GL, AP, EDI,
 * warehouse and proof of delivery. Nobody should replace that to fix how orders arrive, and the
 * page says so in the hero.
 * ⚠ They ALREADY have customer-facing ordering (entrée.NET web entry, entrée.EXPRESS mobile
 * entry, entrée.EOP rep order pad). The distinction is NOT that they lack it. It is typed or
 * tapped versus spoken, and inside the system of record versus beside it.
 * Entree takes the first four table rows outright. The page gives them away on purpose.
 * They publish no price and no implementation process, so neither is used as an argument.
 * Spelt "Entree" throughout, never "entrée": see the digest for why.
 * Every claim is sourced and dated in _build/research/competitors/necs-entree.md.
 */
module.exports = {
  title: "NECS Entree Alternative for Distributors in 2026",
  description: 'Keep the ERP that runs your business and add one step: your accounts speak each order into an app. A NECS Entree alternative that replaces nothing.',
  related: ["fresho-alternative","orderease-alternative","pepperi-alternative"],
  relatedHeading: "Other systems that stay put when voice is added",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>The NECS Entree Alternative That Keeps Entree Running.</h1>
      <p class="lead mt-16">
        Give your kitchens a quicker way in than calling the office, and keep the software running your company as it is. VoiceOrder Solutions is added beside Entree: accounts say what they need into our app and approve every line before anything reaches your desk. Accounting, warehouse and EDI never move.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Frees your reps to sell</span>
        <span class="hero-trust-dot"></span>
        <span>Your version stays put</span>
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
      <div class="stat-label">Back on each order once the phone is out of it</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is the setup window for most distributors</div>
    </div>
    <div>
      <div class="stat-number">24/7</div> <div class="stat-label">Is when the app will take an order</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     The first four rows go to Entree. That is deliberate: it is an ERP and
     this is not, and pretending otherwise would be the only dishonest way
     to write this page.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Keep, Then Add</span>
      <h2>Entree plus VoiceOrder Solutions.<br>Your ERP keeps the books.</h2>
      <p class="lead mt-16">
        Adding an ordering route should leave your core system alone, so this table only ever adds. Entree has been food distribution software since 1987 and carries the accounting, the warehouse and the EDI, which is why a NECS Entree alternative is rarely a like-for-like swap. The left column is your operation with both; the two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Entree + VoiceOrder Solutions</th>
            <th style="width:30%;">Entree on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accounting, ledger and payables</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Kitchens order by voice and approve each line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed on web or mobile</td>
          </tr>
          <tr>
            <td>Warehouse management and a delivery app</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account has its own guide, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Self-service order entry for customers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Tablet ordering for sales reps</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>EDI run from inside your ERP</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Reports and dashboards on the whole business</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A new ordering step, set up from an export</td>
            <td><span class="check-yes">✓</span></td>
            <td>Ordering modules sit inside it</td>
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
      <h2>What people mean by an alternative to NECS Entree</h2>
      <p class="lead mt-16">
        Almost nobody searching for a NECS Entree alternative wants to tear out four decades of distribution software. They want one part of the day to improve, and it is usually the intake end. Three versions of that come up, and only the last is a NECS Entree competitor question at all.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">⌨️</div>
        <h4>Ordering still means someone typing</h4>
        <p class="text-muted mt-12">
          Entree already offers customer ordering on web and mobile, and both routes have the buyer keying quantities against a search. Plenty of kitchens never take to that at the end of a shift, so the orders carry on coming by phone and your desk keys them anyway.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🗄️</div>
        <h4>Ordering lives inside the ERP</h4>
        <p class="text-muted mt-12">
          Entree's own ordering tools live inside the software that runs your company, which suits the accounts who use them. Our app gives the rest of your book a way in and leaves every module where it is.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🏗️</div>
        <h4>Actually replacing it is a different project</h4>
        <p class="text-muted mt-12">
          If your real plan is to move off Entree entirely, be honest that the whole back office goes with it. That is an ERP selection, not what we do, and we would rather tell you now than sit through the wrong demo with you.
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
      <h2>What a NECS Entree alternative changes, and what it leaves alone</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Say what is low, check it, send it</h3>
          <p class="mt-12 text-muted">
            A chef counts what is low and says it. Items come up as a list from their own guide, they fix anything wrong, and they send. For the accounts who never warmed to a web order form, that is a much shorter job.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The buyer looks at the list before anything leaves</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Spoken from the cooler or the bench, at any hour</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Their own handset, iOS or Android, nothing issued</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>20 to 30 minutes back against the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Interrupted halfway? It holds the order until they come back</span>
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
          <h3>Built from the lists you already maintain</h3>
          <p class="mt-12 text-muted">
            Export what you have. We load each account's items under your codes at the price you hold for them, and setup is done. Nothing inside your distribution
            software is touched to make it work.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A kitchen sees nothing but the lines it buys</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pricing and the catalog remain yours to set</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Change a guide once and it stands on the orders after</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No Entree module to add or upgrade</span>
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
          <h3>It arrives in the formats your system already takes</h3>
          <p class="mt-12 text-muted">
            A finished order leaves as an email carrying a PDF, Excel or Word file, or goes
            straight in over the API, over EDI, or into QuickBooks. Whichever route your office
            already trusts is the one it uses.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a rep, or to the purchasing desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>On a direct feed there is no rekeying at your end</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, billing and delivery carry on unchanged</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No part of your stack has to be retired first</span>
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
          <h3>Stock in view as each order lands</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to what is being ordered, and the catalog updates as stock levels change. It is not the system of record for stock: yours stays in
            charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every line you carry, not only the quick movers</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises on a late, heavy order</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Numbers come out of whatever you count with now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No stock is counted on our side</span>
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
      <h2>Three steps, and nothing opened up</h2>
      <p class="lead mt-16">
        Nothing changes inside Entree to do this. You export lists, we set up the accounts, and kitchens begin sending orders.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Export your lists</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet out of the system you have is plenty. Items and prices per account go into a single admin screen under the codes you use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up each account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load each guide and set the account up, then the kitchen downloads the app. Most send
          something in before the day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>It lands finished</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Signed off by the buyer, carrying a number and a time, in the shape
          your system expects.
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
      <h2>What the order desk notices first</h2>
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
            "We wanted fewer order calls from the chefs, and only that part changed. The system that runs our accounts stayed as it was."
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
            "Some of our chefs never took to ordering online. Saying the order and checking it on the screen is something they actually use."
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
      <span class="eyebrow">Side By Side</span>
      <h2>How Entree and VoiceOrder Solutions share the day</h2>
      <p class="lead mt-16">
        Keeping the ERP is the normal case with us, not the exception. We are not a NECS Entree replacement, just a way for orders to get in, on a system you keep exactly as it is.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📒</div>
        <h4>Your records stay where they are</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every number your business runs on keeps living where it lives. We pass the order across and leave your own records alone.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🖥️</div>
        <h4>Give the web ordering the accounts that like it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Buyers who happily work through Entree's screens can carry on. Our app is for the part of the book that never adopted them and still telephones. Calls you keep taking get no order number from us; only what comes through the app does.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔄</div>
        <h4>Releases come and go without us</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Because we sit outside the ERP, an upgrade never waits on us and we never wait on it. Nothing here has to hold for a release, and nothing here blocks one.
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
      <h3 style="margin-bottom:10px;">See a voice order arrive next to your ERP</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. A buyer talks, and you see the approved order turn up.
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
      <h2>Questions from distributors keeping their ERP</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a NECS Entree alternative so accounts can speak what they need?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No, and we would rather lead with that. Entree is the software your company runs on; VoiceOrder Solutions handles how an order gets in. Keep the first, add the second, and the real question becomes which part of the day you are trying to fix.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than NECS Entree?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At getting an order out of a kitchen that will not use an order form, yes. At everything else Entree does, the question does not apply. We have no ledger, no payables, no warehouse module and no proof of delivery, which is exactly why we belong next to it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't Entree already have customer ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It does. They offer web order entry and mobile order entry, plus a rep order pad. All of it works by a person finding items and typing quantities. The accounts who were never going to do that are the ones our app is for.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is Entree hooked up to VoiceOrder Solutions?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Nothing links the two products, and neither vendor supports the other. Our orders leave in the formats shown above, and which of those your own Entree setup takes in directly is something to check in the demo, not a promise we make here.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will this touch our installation or our version?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. We never need an account in it to set this up. We work from an export of your item lists, and orders arrive as an email attachment or over EDI or the API. Your version, your upgrade schedule and your support arrangement are all unaffected.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast could this be live?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors this goes live inside 24 to 48 hours, and most kitchens get a first order in that day. There is no project here, because nothing in Entree is connected or changed. So adding a step beside it asks far less of you than a NECS Entree alternative that replaces the ERP.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do the costs compare?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Neither of us publishes figures. We quote per distributor. Since Entree stays, the decision is only what we cost on top of it. That is a far narrower call than choosing the platform the whole company depends on.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Entree details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Read off necs.com on 10 October 2026: the module list, the 1987 founding date and the web, mobile and rep ordering products. They publish no price and no implementation process, so this page guesses at neither. If any of it has moved on, the fault is here, not there.
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
  <h2>Change how the order arrives, and keep the rest</h2>
  <p>Twenty minutes, one spoken order, and a clear look at how it lands at your end.</p>

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
        <li><a href="#comparison">Entree + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/wholesale-operations-software">Wholesale Operations</a></li>
        <li><a href="/distribution-resource-planning-software">Distribution Resource Planning</a></li>
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
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
