/* Comparison page: VOS vs Burnt. `compare` block order (see template.js).
 * Angle, deliberately NOT Pepper's (rollout length) or Choco's (growth engine): Burnt runs
 * AGENTS across the back office, including procurement and a credit-control agent that phones
 * customers about overdue invoices. So the contrast is how much of the operation you hand to
 * software and who stays in the loop. Burnt's rollout is quick (1 to 2 weeks), so time is one
 * fair table row and never the argument.
 * Burnt wins two rows outright: it reads inbound channels VOS does not parse at all, and it
 * chases invoices, which VOS has no part in.
 * Every Burnt claim is sourced and dated in _build/research/competitors/burnt-ai.md.
 */
module.exports = {
  title: "Burnt AI Alternative for Food Distributors in 2026",
  description: 'One app your accounts speak into, with every line approved before it sends. A Burnt AI alternative scoped to ordering, not your whole back office.',
  related: ["wizcommerce-alternative","rekki-alternative","pepper-alternative"],
  relatedHeading: "Other tools distributors weigh against VOS",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>A Burnt AI Alternative With One Job.</h1>
      <p class="lead mt-16">
        VOS is a Burnt AI alternative that stops at the order: your accounts speak what they need into an app, check it over, and approve before anything reaches you. Burnt deploys agents right across the operation. No agents to configure here, and nobody deciding on your behalf.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare The Two</a>
      </div>

      <div class="hero-trust">
        <span>Orders land 24/7</span>
        <span class="hero-trust-dot"></span>
        <span>The ERP stays where it is</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (the "Push to Speak" mobile UI) -->
      <div class="img-placeholder tall">
        📸 Screenshot:<br>VOS "Push to Speak" screen<br>with the order review list
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
      <div class="stat-label">Handed back on each order that was a call</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is the window most distributors go live in</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Sees most kitchens send order one</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Burnt wins rows 2 and 3 outright. Both are real and both are stated.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Point By Point</span>
      <h2>VoiceOrder Solutions vs Burnt.<br>One step, not every step.</h2>
      <p class="lead mt-16">
        VOS is the order-taking step, with a person signing the order off. Burnt is an agent platform spanning intake, buying and collections, which is the useful distinction when a Burnt AI alternative comes up. The table marks which rows go which way.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">VoiceOrder Solutions</th>
            <th style="width:30%;">Burnt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your buyer signs the order off before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>Reviewed by exception</td>
          </tr>
          <tr>
            <td>Each account has its own list, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Lifts orders out of email, WhatsApp and EDI</td>
            <td>Spoken in instead</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order number and the time it was sent</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Chases an overdue invoice for you</td>
            <td>Not what it does</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Time to go live</td>
            <td>24-48 hours for most</td>
            <td>1-2 weeks mostly, to 30-60 days</td>
          </tr>
          <tr>
            <td>Live without an IT project</td>
            <td><span class="check-yes">✓</span></td>
            <td>Onboarding is done on site</td>
          </tr>
          <tr>
            <td>Nothing to train or tune</td>
            <td><span class="check-yes">✓</span></td>
            <td>One agent, or the full platform</td>
          </tr>
          <tr>
            <td>Which step it covers</td>
            <td>The order itself</td>
            <td>A platform of agents</td>
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
      <h2>Why teams want an alternative to Burnt AI</h2>
      <p class="lead mt-16">
        Burnt calls itself an AI watchtower for food distribution and deploys agents by team:
        one for order intake, one for purchasing, one that rings customers about money they owe.
        It is a serious piece of engineering. It is also a lot to take on, and that is where a
        Burnt AI competitor gets looked at.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🤖</div>
        <h4>Software deciding, rather than your buyer</h4>
        <p class="text-muted mt-12">
          Burnt's own page says confidence thresholds decide when a human needs to look. That is
          a sensible design, and it still means the judgement call sits with the software and the
          exceptions land on your desk. Nowhere does it say the customer sees the order first.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧰</div>
        <h4>Three agents when you wanted one habit</h4>
        <p class="text-muted mt-12">
          Intake, procurement, credit control. Each is a workflow to map, configure and trust.
          If the thing actually hurting you is the morning spent replaying voicemails, you are
          buying a program to solve a routine.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🚪</div>
        <h4>Someone has to come to you</h4>
        <p class="text-muted mt-12">
          Their onboarding is white-glove and, by their own description, their team works on your
          premises to understand the operation and set the agents up. A lot of distributors would rather not host a project at all.
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
    <div class="text-center" style="max-width: 580px; margin: 0 auto 72px;">
      <span class="eyebrow">What You Get</span>
      <h2>What a Burnt AI alternative covers when it is narrow</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Said out loud, checked on screen, then sent</h3>
          <p class="mt-12 text-muted">
            Nothing is interpreted after the fact here, because nothing was left to interpret.
            Your buyer holds the button down, the items appear as a list with quantities, and they fix
            or confirm it themselves. The order you receive is the order they signed off.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>No threshold decides whether a person should look</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Spoken in the cooler or the office, at any hour</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Their own phone, iOS or Android, nothing issued</span>
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
          <h3>Your item list is the whole configuration</h3>
          <p class="mt-12 text-muted">
            There is no model to train and no workflow to draw. You hand over the item lists you
            keep per customer, we load them against your SKUs at your prices, and that is the
            setup finished.
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
              <span>Change a list once and it stands on the orders after</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing to tune as volumes grow</span>
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
          <h3>It reaches you in a format you already read</h3>
          <p class="mt-12 text-muted">
            A finished order leaves as an email carrying a PDF, Excel or Word file, or goes
            straight into your ERP over the API, over EDI, or into QuickBooks. Your desk does not
            move anywhere new.
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
          <h3>Stock visible as the orders arrive</h3>
          <p class="mt-12 text-muted">
            VOS carries real-time inventory visibility tied to what is being ordered, and the catalog updates as stock levels change. It is not the system of record for stock: yours stays
            in charge, and a demo shows how the levels connect.
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
              <span>No counting happens inside VOS</span>
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
      <h2>Three steps, and nobody visits</h2>
      <p class="lead mt-16">
        This is done over email and a call. There is no discovery phase and no IT project, and no agent to brief.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send over the lists</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever format they are already in. Each account's lines and your prices
          go into a single admin screen, lined up with your codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Each buyer gets a login</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts get created and the kitchen gets shown the app. Most send
          something in before the day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>It arrives complete</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Signed off by the buyer, carrying a number and a time, in the shape
          your system expects.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS admin platform showing customer accounts and order guide upload
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
            "We did not want a consultant in the building for two weeks. This
            was two emails and a list, and the orders started arriving."
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
            "What I wanted was the chef confirming it, not a score telling me how
            sure the computer was. That is the bit that settled it for us."
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
      <span class="eyebrow">Not Either Or</span>
      <h2>When VOS and Burnt work together</h2>
      <p class="lead mt-16">
        VOS is not a Burnt AI replacement and has no ambition to be one. It bolts on, so having one in place already is not a reason to rule it out.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🎙️</div>
        <h4>Give the agent less to guess at</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every account moved onto VOS is one more sending structured, approved orders instead of
          a voicemail to transcribe. Whatever is parsing the rest has a smaller and messier pile
          left to work through.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Leave purchasing and chasing alone</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS has no view on your purchasing and never touches an invoice. If those agents are
          earning their money, nothing here asks you to unpick them.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📬</div>
        <h4>One destination, however many tools</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders still arrive into the system you nominated, by EDI, API or QuickBooks. Adding
          this does not give your desk a second place to check.
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
      <h3 style="margin-bottom:10px;">See a signed-off order land</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. One order spoken by a buyer, approved by that buyer, landing in the format your desk already opens.
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
      <h2>What gets asked when the two are compared</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS a genuine Burnt AI alternative, or a different category?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          On order intake the two overlap properly, and that is the part worth comparing. Beyond
          it they diverge: Burnt automates purchasing and collections as well, and VOS does
          neither. If your shortlist is about getting orders in cleanly, compare them. If it is about automating the office behind it, we are not on that list.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS better than Burnt AI?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          On one specific thing, we would say yes: with VOS the buyer approves the order, so
          correctness is settled by whoever knows the kitchen rather than by a confidence score. On breadth, no, and it would be silly to pretend otherwise. Burnt reads channels
          we never touch and automates work we never go near.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon could our accounts be ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running within 24 to 48 hours, and most kitchens place one the same day. Burnt publishes 1 to 2 weeks for most customers,
          stretching to 30 to 60 days on complex or legacy systems, which is quick for the amount
          it is wiring in. Ours is shorter because there is far less to wire, which is the usual
          reason a Burnt AI alternative gets a look.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can VOS read orders out of email or WhatsApp?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Burnt does that and lists email, phone, voicemail, WhatsApp, SMS, EDI, portals and
          spreadsheets. VOS takes the opposite route: instead of decoding whatever arrived, it
          gives the kitchen an app that turns speech into a list they confirm. If you need those
          channels parsed, that is a point for them, and better said here than at a demo.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will VOS take over our ERP?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. It works at the intake end and passes each order on, itemized and approved.
          Everything after that, picking, invoicing, delivery, runs exactly as it does now in the software you pay for today.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does VOS price against Burnt?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Neither of us publishes a rate card, so this comes down to two quotes. We quote per distributor, once we know what you are running. Burnt quotes after a demo. Worth
          asking both what the figure covers, because the scope either side of it is very
          different.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will anyone need to come to our site?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not for VOS. We set up from the guides you send over, with no implementation project. Burnt describes
          white-glove onboarding with their team working on your premises, which suits some
          operations very well and is exactly what others are trying to avoid.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What happens to accounts that will only ever telephone?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They keep telephoning and your team handles those as it does today. Be clear about the
          limit though: a call or a voicemail gets no order number from VOS, no timestamp and no stock movement. Only what comes through the app does.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Burnt details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Burnt's own website, read on 10 October 2026: the agent list and the on-site onboarding
          line off their homepage, and the channel list, the confidence-threshold wording and the
          rollout range off their sales and operations product page. We have left their accuracy
          and time-saving figures out, because those are their numbers to stand behind. If any of
          it has changed, this page is what needs correcting.
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
  <h2>See the order land already approved</h2>
  <p>Twenty minutes, one order, and the chef's own sign-off on screen.</p>

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
        <li><a href="#comparison">VOS vs Burnt</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/distribution-automation-software">Distribution Automation</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
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
