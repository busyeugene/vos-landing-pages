/* Comparison page: VOS vs Choco. `compare` block order (see template.js).
 * Angle, deliberately NOT the Pepper page's: Choco sells growth (AI storefront with
 * recommendations, sales hub, foodservice CRM, a published 20% larger-basket claim), so the
 * contrast is what you are buying it FOR, not how long it takes to roll out. Choco publishes
 * no go-live timeline, so rollout length is one fair table row and never the argument.
 * Choco wins a row outright (it reads a photo of a handwritten pad; VOS does not).
 * Every Choco claim is sourced and dated in _build/research/competitors/choco.md.
 */
module.exports = {
  title: "Choco Alternative for Food Distributors in 2026",
  description: 'Your accounts speak each order into an app and approve every line. See how this Choco alternative covers ordering and leaves the rest alone.',
  related: ["pepper-alternative","cut-dry-alternative","bluecart-alternative"],
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
      <h1>The Choco Alternative Your Kitchens Talk To.</h1>
      <p class="lead mt-16">
        VOS is a Choco alternative with a narrower job. Your accounts say an order into the app,
        approve each line, then send. It reaches your desk numbered and dated, in one of the formats you handle today. No storefront to launch, no CRM to fill in, nothing else to learn.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Orders land while you are shut</span>
        <span class="hero-trust-dot"></span>
        <span>Keep the ERP you run</span>
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
      <div class="stat-label">Saved on each order that moves off the phone</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is how long setup runs for most</div>
    </div>
    <div>
      <div class="stat-number">24/7</div> <div class="stat-label">Covers the hours your desk does not</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Choco wins row 3 outright. That is deliberate: a table where the other
     column loses everything reads as marketing and invites a fact-check.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Head To Head</span>
      <h2>VoiceOrder Solutions vs Choco.<br>Narrow on purpose.</h2>
      <p class="lead mt-16">
        VOS does one job: an account says what it needs and checks each line before it sends. Choco is a growth platform with ordering inside it, which is the whole reason a Choco alternative comes up at all. Choco details here were taken from their own site.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">VoiceOrder Solutions</th>
            <th style="width:30%;">Choco</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your customer approves every line before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies by channel</td>
          </tr>
          <tr>
            <td>Orders captured with no phone call to answer</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Reads a photo of a paper order</td>
            <td>Spoken in instead</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Parks itself next to the systems you have</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account has its own list, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order number and time stamped on arrival</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Time to go live</td>
            <td>24-48 hours for most</td>
            <td>No distributor go-live published</td>
          </tr>
          <tr>
            <td>Built for your size of operation</td>
            <td><span class="check-yes">✓</span></td>
            <td>Distributors of all sizes</td>
          </tr>
          <tr>
            <td>What you are adding</td>
            <td>Ordering, and nothing else</td>
            <td>Ordering, storefront, sales and CRM</td>
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
      <h2>Why teams look for an alternative to Choco</h2>
      <p class="lead mt-16">
        Choco calls itself an AI platform for food and beverage wholesalers. It digitizes inbound
        orders, runs an online catalog that recommends items, and carries a sales hub and a
        foodservice CRM. None of that is a flaw. It is just a bigger purchase than some buyers
        want, and here is where a Choco competitor gets a second look.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📈</div>
        <h4>You came for order taking, not a growth engine</h4>
        <p class="text-muted mt-12">
          Choco leads on selling more: a catalog that suggests extra lines, rep tooling, bigger
          baskets. Worth paying for if growth is the project. If the actual complaint is that two
          people spend every morning on the phone, most of that spend sits idle.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📐</div>
        <h4>Built for everyone is not built for you</h4>
        <p class="text-muted mt-12">
          Choco says it wants to serve distributors of every size. We went the other way and picked one end of that range. Small and mid-size independents and DSD operations are the only buyer VOS is shaped around.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🖊️</div>
        <h4>A parsed message still gets read by you</h4>
        <p class="text-muted mt-12">
          Choco's OrderAgent lifts an order out of a voicemail, a text, even a snapshot of a handwritten pad, which is a genuinely clever bit of engineering. The catch is the same
          either way: the person who wrote that note did not see the lines your desk ended up with. Choco does have a free app its restaurant customers order in; this is about the messages that arrive instead.
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
      <h2>What this Choco alternative actually does</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Built by whoever is standing in the cooler</h3>
          <p class="mt-12 text-muted">
            Your account opens the app, presses to speak, and says what the kitchen is short of.
            Every item appears as a line with a quantity against it. They scan it, change what
            needs changing, and only then does it leave.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing is sent until your customer has looked at the list</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works from the cooler or the prep bench, at any hour</span>
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
              <span>Reorders from accounts on the app stop reaching your reps, so that time goes into selling</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How order taking works →</a>
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
          <h3>One item list per account, built from yours</h3>
          <p class="mt-12 text-muted">
            Pass us the guides you keep per customer. We load them against your SKUs at the
            price you hold for that account, so a spoken item lands on the right row against your own SKU.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A kitchen only ever sees what it actually buys</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog and the pricing stay yours to set</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit a list once and it holds on the orders after</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No browsing, no search, no cart to abandon</span>
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
          <h3>It arrives however your office likes it</h3>
          <p class="mt-12 text-muted">
            Nobody has to move desks for this. A finished order goes out as an email with a PDF,
            Excel or Word file attached, or straight into your ERP over the API, over EDI, or into
            QuickBooks.
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
          <h3>Stock you can see while the orders arrive</h3>
          <p class="mt-12 text-muted">
            VOS shows real-time inventory visibility tied to what is being ordered, and the catalog updates as stock levels change. It is not the system of record for stock:
            yours stays in charge, and a demo shows how the levels connect.
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
      <h2>Short enough to finish this week</h2>
      <p class="lead mt-16">
        There is no data project at the front of this. You send item lists, we set the customers up, and your customers begin sending orders.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Hand us the item lists</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet is fine. Each account's items and your prices go into a single admin screen, lined up with your SKUs.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set each customer up</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each customer gets set up and shown the app. Most have sent something
          in by the end of the day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>It lands finished</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Approved by the customer, carrying a number and a time, in the shape
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
      <h2>How it lands with the people using it</h2>
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
            "We were quoted a platform when what we had was a phone problem. This
            did the phone problem and left the rest of our setup alone."
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
            "Our chefs tick the list off on screen before it goes. That one habit
            took the guesswork out of Monday mornings for the whole desk."
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
      <h2>When VOS and Choco work together</h2>
      <p class="lead mt-16">
        VOS is no kind of Choco replacement, and it does not pretend to be. It adds on, so if a storefront is already in place there is nothing to unpick before trying this.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🛍️</div>
        <h4>Let the catalog sell and the voice order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A storefront that suggests items earns its keep on a buyer who is browsing with time to
          spare. The reorder at the end of a shift is not that moment. The two jobs can sit
          together without arguing.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕗</div>
        <h4>Same account, two different moments</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A chef might click through a catalog on a quiet Tuesday and speak the Friday order
          standing in the walk-in. Nobody has to pick one way of ordering for good.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📬</div>
        <h4>Orders land where they already land</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever you add, the order still arrives into the system you nominated, by EDI, API or
          QuickBooks. Your desk does not acquire a second place to look.
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
      <h3 style="margin-bottom:10px;">See the narrow version before you buy the wide one</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. One spoken order, end to end, and the time it gives back on the next one.
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
      <h2>What buyers ask when they weigh the two</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS a fair Choco alternative, or a smaller tool entirely?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          It is smaller, deliberately. On order capture the two are worth lining up next to
          each other, and that is the comparison this page makes. On storefronts, sales tooling
          and CRM, Choco is doing things VOS has never set out to do, and no table we could draw
          would change that.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS better than Choco?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At getting an accurate order out of a busy kitchen with nobody keying it in, we would argue
          yes, mainly because the customer approves the lines rather than software interpreting a
          message. At growing the average basket with a recommending catalog, no. That is their
          pitch, and it is a real one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon can our accounts start?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running within 24 to 48 hours, and most of their customers
          send a first order the same day. There is no IT project, which is often the reason a
          Choco alternative is on the shortlist at all. Choco does not publish a
          go-live time, so ask them for one rather than take a number from us.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can VOS read a photo of a handwritten order?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, and that is a real gap against Choco, whose OrderAgent does exactly that. VOS works
          the other way round: rather than decode what a kitchen already wrote down, it gives them
          an app that turns speech into an itemized list they confirm. If reading paper matters
          more to you than that, say so early and we will tell you so.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS take over from our ERP?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Never. VOS works at the intake end and hands the order on, itemized and approved. Everything behind that, picking, invoicing, delivery, runs exactly as it does now in the software you already pay for.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does VOS cost next to Choco?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Both are quoted on the distributor side, and their restaurant app is published as free. Choco's own pricing page says it charges a monthly
          fee based on usage and asks you to talk to sales; we quote per distributor and publish nothing. So the only honest comparison is two quotes, read together.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will the kitchens need training?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Very little. Saying what they are short of is not new, and that is the whole
          interaction. There is no catalog to search and no basket to fill, so the habit lands
          faster than a storefront usually does.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What about the accounts that will only ever telephone?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Let them telephone. Your desk takes those exactly as it does today. Be clear with
          yourself about one thing though: a call or a voicemail gets no VOS order number, no
          timestamp and no stock movement. Only what arrives through the app does.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Choco details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Choco's own site, read on 10 October 2026: the module names and descriptions off the
          homepage and the usage-based line off their pricing page. We have not repeated the
          growth figures they publish, because those are their numbers and not ours to vouch for.
          If any of it has moved on since, this page is what needs correcting.
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
  <h2>Get the phone orders off your morning</h2>
  <p>Twenty minutes, one real order, and a clear view of what changes.</p>

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
        <li><a href="#comparison">VOS vs Choco</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/dsd-sales-software">DSD Sales</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
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
