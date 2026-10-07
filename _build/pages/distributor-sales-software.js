/* Page 19 - PRIMARY: distributor sales software (x6 standalone: H1, features H2, 2 body, FAQ Q, a different FAQ A)
 * SECONDARY: distributor sales rep software (H3), distributor sales tracking software (Tier B, body:
 *   account order history, explicitly not a CRM pipeline), distributor software with sales forecasting
 *   (Tier C, one disambiguating FAQ, never written up as a capability).
 * Audience: food distributors (seller side).
 * ANGLE (its one question): "What do my reps stop writing up by hand so they can sell?"
 *   Order taking owns the intake channel; vendor management owns being easy to buy from;
 *   this page owns the rep's week: order-writing time, account history before a visit, promos.
 * NOT claimed: pipeline, quotas, commissions, territories, call planning, route planning,
 *   forecasting of any kind, or a mobile order-writing app for the rep. Comparison table carries
 *   honest ✗ rows for the CRM functions VOS has no part in.
 * Client's own live wording used as the angle: "Free Your Sales Reps to Sell".
 */
module.exports = {
  title: 'Distributor Sales Software for Reps Who Sell | VOS',
  description: "Your reps spend the week selling instead of writing up reorders. Distributor sales software that lets accounts speak their own orders into an app.",
  related: ["dsd-sales-software","order-taking-software","catalog-management-software"],
  relatedHeading: 'More on the selling side of distribution',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1 (use 1 of 6).
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Distributor Sales Software That Frees Up Your Reps.</h1>
      <p class="lead mt-16">
        Reorders do not need a salesperson. Your accounts say what they need into the app at whatever hour suits
        them, so a rep's day goes on new business and the relationships that pay
        for it.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>No CRM to rip out</span>
        <span class="hero-trust-dot"></span>
        <span>A day or two for most</span>
        <span class="hero-trust-dot"></span>
        <span>Nothing to migrate</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (rep view: one account's order history) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>An account's order history<br>as a rep sees it before<br>a visit
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
      <div class="stat-label">back for a rep on each order they no longer write</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">ordering, so nobody waits for a rep to pick up</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">is how long most distributors take to switch on</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>You hired salespeople. You got order takers.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      A rep who spends the morning on reorder calls is doing admin at a sales
      salary. Three ways that quietly costs you:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📱</div>
        <h4 class="mb-8">"My best rep is a phone operator"</h4>
        <p class="text-muted" style="font-size:15px;">
          Eight calls before lunch, all of them lists the account could have sent
          itself. Nothing new sold, nothing new quoted.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🤷</div>
        <h4 class="mb-8">"He walks in cold"</h4>
        <p class="text-muted" style="font-size:15px;">
          Nobody remembers what that kitchen stopped buying in July, so the visit
          opens with questions instead of an offer.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🕳️</div>
        <h4 class="mb-8">"If he is off, the account stalls"</h4>
        <p class="text-muted" style="font-size:15px;">
          Orders that only exist in one person's voicemail go missing the week
          that person is on holiday.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 6: FEATURE DEEP-DIVE - ALTERNATING ROWS
     Features H2 carries the primary (use 2 of 6).
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">

    <div class="text-center" style="max-width: 760px; margin: 0 auto 72px;">
      <span class="eyebrow">Give The Week Back</span>
      <h2>What distributor sales software should take off a rep's plate</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 - distributor sales rep software -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Reorders Handle Themselves</span>
          <h3>The best distributor sales rep software removes the reorder.</h3>
          <p class="mt-12 text-muted">
            An account that reorders the same 30 lines every Tuesday does not
            need a conversation. It needs its guide and two minutes. Once that
            moves into the app, your rep is no longer the bottleneck between a
            kitchen and its delivery.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Accounts order from their own guide, at your agreed prices</span></li>
            <li><span class="bullet-check">✓</span><span>They order at closing time, not when a rep picks up</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing for your rep to write down or read back</span></li>
            <li><span class="bullet-check">✓</span><span>Cover is easy: the account is not tied to one person's phone</span></li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How the orders actually come in →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Account places a repeat<br>order by voice with no<br>rep involved
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY distributor sales tracking software (Tier B) + PRIMARY in body (use 3 of 6) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Walk In Informed</span>
          <h3>Dated buying history for the account you are about to visit.</h3>
          <p class="mt-12 text-muted">
            People shop for distributor sales tracking software hoping for a
            pipeline. What a food rep really wants is narrower: what this kitchen
            bought, when, and what fell off the list. That history sits on the web, and it is the part of distributor sales
            software a rep opens in the van.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>One order at a time, with the minute each was sent</span></li>
            <li><span class="bullet-check">✓</span><span>Notice a line that has dropped off their recent orders</span></li>
            <li><span class="bullet-check">✓</span><span>Read back through what they ordered and when</span></li>
            <li><span class="bullet-check">✓</span><span>Covers orders placed in VOS, so phone orders are not in it</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">What order tracking shows →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>One account, months of<br>numbered orders, items<br>and dates
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: promos, pull-through -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Sell Without A Call</span>
          <h3>Put a deal on the phone they order from.</h3>
          <p class="mt-12 text-muted">
            When you are long on something, your reps should not have to ring 60
            accounts about it. Send the offer straight to their phones and let the next list pick
            it up.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Offers delivered where the buying happens</span></li>
            <li><span class="bullet-check">✓</span><span>Add or reprice a line on a customer's own guide</span></li>
            <li><span class="bullet-check">✓</span><span>New items appear where the buyer is already ordering</span></li>
            <li><span class="bullet-check">✓</span><span>Reps follow up knowing the offer already reached them</span></li>
          </ul>
          <a href="/vendor-management-software" class="feature-link">Becoming the easiest vendor to buy from →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Promotion pushed to<br>accounts, shown inside<br>the ordering app
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: no system swap -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Keep Your Stack</span>
          <h3>Your CRM, your ERP, your commission sheet: untouched.</h3>
          <p class="mt-12 text-muted">
            VOS is not here to replace the tools your sales team already has. It
            changes where orders come from, and then hands them on in a format
            your systems accept. Nobody has to migrate an account list to get the
            benefit.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Orders handed on in whichever shape you picked</span></li>
            <li><span class="bullet-check">✓</span><span>On the direct routes nobody re-enters them</span></li>
            <li><span class="bullet-check">✓</span><span>No data to move out of your current sales tools</span></li>
            <li><span class="bullet-check">✓</span><span>API-ready, so it extends the platform you run on</span></li>
          </ul>
          <a href="/b2b-portal-software" class="feature-link">The self-service side for accounts →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Delivery format setup,<br>with VOS beside an<br>existing ERP
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ============================================================
     SECTION 7: FEATURE CARDS - SUPPORTING CAPABILITIES
     ============================================================ -->
<section class="section-pad bg-light" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Also Built In</span>
      <h2>Small things a sales team notices.</h2>
      <p class="lead mt-16">Not headline features, but the ones reps mention in month two.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🏷️</div>
        <h4>Price Changes Nobody Has To Announce</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Update a guide once and the following order uses the new figure. No rep has
          to remember to mention it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🌙</div>
        <h4>Orders At Midnight Still Count</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An order sent at 11pm is in the system by morning, not lost because
          nobody was there to answer.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📲</div>
        <h4>No Kit For Anyone To Carry</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts use their own phones, on iOS or Android. There is no hardware
          for your reps to hand out or chase.
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
      <h3 style="margin-bottom:10px;">See what a rep's week looks like without reorder calls</h3>
      <p class="text-muted" style="font-size:16px;">
        A 20-minute walkthrough shows how an account orders and what the rep
        sees afterwards.
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
      <h2>Three steps, and no internal project to run first</h2>
      <p class="lead mt-16">
        Your reps do not have to sell this internally for six weeks first. Three steps and the first accounts are live.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Pick the accounts that call most</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Start where the reorder hours are. Send us their guides, with the items
          and the prices you give them.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We load and set the accounts up</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Most distributors are running inside 24 to 48 hours, with no IT project
          and nothing for a rep to install.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Reps introduce it on their next visit</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A buyer usually gets something in that same day. After that the rep
          is there to sell, not to take the list.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: account setup and order history views in the VOS admin platform
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
      <h2>What reps and their customers say</h2>
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
            "My mornings used to be reorder calls. Now I am quoting new accounts
            before ten."
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
            "I check an account's last few orders in the van. The visit starts
            somewhere useful now."
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
     Primary keyword in the lead (use 4 of 6).
     Honest ✗ rows on purpose: pipeline, quotas and commissions are CRM jobs, not VOS ones.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 720px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Not a CRM.<br>The reason your reps need one less.</h2>
      <p class="lead mt-16">
        Most distributor sales software is built to manage selling activity. VOS
        removes a chunk of the activity instead. Here is the split, with the CRM jobs we do not touch marked as such.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:34%;">Feature</th>
            <th class="highlight" style="width:22%;">VoiceOrder Solutions</th>
            <th style="width:22%;">Distributor CRM or Sales Suite</th>
            <th style="width:22%;">Reps Taking Orders by Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Takes the reorder off the rep entirely</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Customers can order outside office hours</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Voicemail only</td>
          </tr>
          <tr>
            <td>What each account bought, by date</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>In a notebook</td>
          </tr>
          <tr>
            <td>Promotions pushed to the buyer's phone</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>A round of calls</td>
          </tr>
          <tr>
            <td>Pipeline, quotas and commission tracking</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Territory and call planning</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Sales forecasting models</td>
            <td><span class="check-no">✗</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Up and running with no IT project</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>What it asks of a rep</td>
            <td>An introduction</td>
            <td>Daily data entry</td>
            <td>Their morning</td>
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
     FAQ 1 carries the primary in the question (use 5 of 6).
     FAQ 4 carries it in an answer (use 6 of 6).
     FAQ 3 is the Tier C forecasting disambiguation.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Questions sales managers ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS distributor sales software or a CRM?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          Neither, strictly. There is no pipeline, no quota, no commission
          calculation and no territory map in it, and a CRM does those better
          than we ever would. What VOS does is take the reorder away from your
          reps: customers place those orders themselves, in an app, at any hour.
          Keep the CRM and run this beside it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will my reps think this takes their job?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It takes the order-writing, which is the part that does not need their skill.
          The account stays theirs, the relationship stays theirs, and they get
          the hours back for new business. Reps who were measured on order volume
          will need that measure revisited, and that conversation is worth having
          before rollout.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do you offer distributor software with sales forecasting?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS runs no forecasting models and makes no predictions about
          future demand, and we would rather say that than imply otherwise. What
          it gives you is a clean, dated record of what each account ordered,
          which is the input a forecasting tool or an analyst needs. The model stays somebody
          else's job.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can a rep send an order for an account?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The app is built for the buyer to use, and the ordering account belongs
          to the customer. If a rep is sitting with a chef, the practical answer
          is to let the chef speak the order on their own phone. Distributor
          sales software that keeps the rep in the middle of each order is the
          thing we are trying to get rid of.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does a rep see about their accounts?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          On the web, in one place: the orders that account placed through VOS, each with its items, its
          number and the time it went, along with the guide and prices it is
          working from. Orders that came by phone or voicemail
          are not in there, because VOS never saw them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it work for a team of two reps?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, and that is the common case. VOS was made for distributors of that size, not for
          enterprise sales organizations.
          With a small team the gain is sharper, because one person's morning is
          a bigger share of your selling capacity.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do orders get to the systems our team already uses?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          You choose one route at onboarding: a PDF, Excel or Word attachment, EDI, QuickBooks, or an API feed into
          whatever platform your office runs on. Take any of the last three and nobody keys anything again.
          Emailed files may still be entered by hand.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does it cost per rep?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Pricing is not published. VOS is quoted for each distributor. Ask on the demo call and they will
          talk you through it. Enterprise pricing and
          enterprise complexity are not what we are selling.
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
  <h2>Ready to let reps sell again?</h2>
  <p>See the reorder leave their day, and the account history arrive in its place.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Keep your CRM</span>
    <span>✓ We load the guides</span>
    <span>✓ Order records you can search</span>
    <span>✓ Apps for iOS and Android</span>
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
        <li><a href="#features">Reorders Handle Themselves</a></li>
        <li><a href="#features">Walk In Informed</a></li>
        <li><a href="#features">Sell Without A Call</a></li>
        <li><a href="#features">Keep Your Stack</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/vendor-management-software">Vendor Management</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Sales Suites</a></li>
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
