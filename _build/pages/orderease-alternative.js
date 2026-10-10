/* Comparison page: VOS vs OrderEase. `compare` block order (see template.js).
 * Angle, used by no other page in the set: OrderEase's own thesis is channel consolidation.
 * Their words: "One Business, Multiple Order Paths" / "More Channels Don't Have to Mean More
 * Workflows" / "OrderEase covers the whole order path, not one piece of it". VOS IS one piece,
 * deliberately, so the page meets that argument head on rather than dodging it: a distributor
 * whose problem is the phone does not need the whole path rebuilt.
 * ⚠ TWO PLACES WHERE THEY ARE SIMPLY BETTER, both conceded in the first table rows:
 *   1. They parse emailed PDF and CSV POs into structured orders. VOS does not, and our own
 *      claim rules concede emailed files may still be keyed by the distributor.
 *   2. EDI as a managed service, trading-partner compliance included. VOS only sends over EDI.
 * ⚠ PRICING IS NOT PARITY HERE, unlike the other eleven pages. OrderEase publishes a starting
 * price; VOS publishes nothing. They get the ✓ on that row. The figure itself stays OFF the page
 * (a published price goes stale and a stale number is what a fact-checker catches), and it is
 * never paired with anything implying a VOS price.
 * ⚠ Food is 1 of 8 industries they name, NOT an omission. Write it as breadth, never as "not
 * built for food": they list Food & Beverages and have a brewery customer.
 * Their outcome stats (70% / 98% / 40%) are unaudited and footnoted as such. Never repeated.
 * Every claim is sourced and dated in _build/research/competitors/orderease.md.
 */
module.exports = {
  title: "OrderEase Alternative for Food Distributors in 2026",
  description: 'Your accounts speak the order into the app and approve the lines, so it arrives itemized against your codes. An OrderEase alternative for food distributors.',
  related: ["order-taking-software","wholesale-ordering-software","bluecart-alternative"],
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
      <h1>An OrderEase Alternative That Shortens The Queue.</h1>
      <p class="lead mt-16">
        OrderEase pulls every order channel into one clean flow: EDI, portals, emailed POs. VOS
        works a step earlier. A buyer talks it through in the app and signs off the lines, so what lands on your desk is itemized against your codes.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare The Two</a>
      </div>

      <div class="hero-trust">
        <span>No channel to plumb</span>
        <span class="hero-trust-dot"></span>
        <span>Nothing to reconcile</span>
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
      <div class="stat-label">Back on each call that becomes an app order</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is the setup window for most distributors</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is when most kitchens get a first one in</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     The first five rows go to OrderEase, including the pricing row. Emailed
     PO parsing and managed EDI are genuinely theirs and VOS has no answer
     to either. Row 5 is the one place in this cluster where a competitor is
     more transparent than VOS, and it is marked that way on purpose.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Different Ends Of The Path</span>
      <h2>VoiceOrder Solutions vs OrderEase.<br>One cleans up the path, one shortens it.</h2>
      <p class="lead mt-16">
        OrderEase is order management plumbing, and good plumbing: many channels in, one checked
        flow out to your ERP. If you are judging an OrderEase alternative, begin at the top: the first five rows all go to them, pricing included.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">VoiceOrder Solutions</th>
            <th style="width:30%;">OrderEase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reads emailed PDF and spreadsheet purchase orders</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Looks after your EDI trading partners for you</td>
            <td>Sends orders over EDI</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Marketplace and online store connectors</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Splits fulfillment across warehouses</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Shows a starting price on its own site</td>
            <td>Quoted per operation</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>How your customer places the order</td>
            <td>Speaks it, then approves it</td>
            <td>Types it, or sends a file</td>
          </tr>
          <tr>
            <td>Each account has its own guide, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>How long until it is running</td>
            <td>24-48 hours for most</td>
            <td>Varies with the setup</td>
          </tr>
          <tr>
            <td>What you are buying</td>
            <td>Ordering plus stock visibility</td>
            <td>One flow for every channel</td>
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
    <div class="text-center" style="max-width: 680px; margin: 0 auto;">
      <span class="eyebrow">Why Teams Compare</span>
      <h2>Why distributors shop for an alternative to OrderEase</h2>
      <p class="lead mt-16">
        Plenty of people searching for an OrderEase competitor are not shopping for middleware at
        all. They have one sore channel, not six. Three such cases recur enough to be worth separating.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧮</div>
        <h4>You are quoted the whole path for one step</h4>
        <p class="text-muted mt-12">
          OrderEase says itself that it covers the full path rather than one piece of it, and for a lot of sellers that is the right buy. If five of your six channels already
          behave, you are paying to rebuild the five that work.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔍</div>
        <h4>A read file still gets a second look</h4>
        <p class="text-muted mt-12">
          Software that lifts an order out of a PDF has to be checked, so the exception queue
          becomes somebody's morning. The work shrinks, which is real, but it does not leave the
          building.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🏭</div>
        <h4>Eight industries, and food is one of them</h4>
        <p class="text-muted mt-12">
          Their site lists food and beverages beside lumber, apparel, pets and lawn care, which is
          a fair spread of wholesale. It also means nothing in it is shaped around a chef placing
          an order at the end of service.
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
      <h2>What an OrderEase alternative changes at the front</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The order is built, not worked out afterwards</h3>
          <p class="mt-12 text-muted">
            A chef says what is short and the lines come up from that account's own guide, under the codes you use. There is no attachment, no form and no inbox step, because the
            order was itemized the second it was spoken.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The buyer checks the lines, so nobody here guesses</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Said from the walk-in, the bench or the back office</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Their own handset, iOS or Android, nothing issued</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Around 20 to 30 minutes back against the same order by phone</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">How an order gets placed →</a>
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
          <h3>Your codes, your prices, one list per customer</h3>
          <p class="mt-12 text-muted">
            Export the lists you keep now and we load them. Each account gets the items it
            actually buys at the figure you hold for it, which is also why nothing needs matching
            up later: the order can only contain lines you sell.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>No unknown items and no codes to reconcile</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You stay in charge of the catalog and the pricing</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit a guide once and the next order already has it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No per-channel rules to maintain for these accounts</span>
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
          <h3>Handed over however your office takes it</h3>
          <p class="mt-12 text-muted">
            The finished order leaves as an email carrying a PDF, Excel or Word file, or goes
            straight into your ERP over the API, over EDI, or into QuickBooks. We fit the route
            you already trust rather than asking for a new one.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a named rep, or to the purchasing desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>On a direct feed nobody retypes it at your end</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Its own number, with the date and time it was sent</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, billing and delivery carry on unchanged</span>
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
          <h3>Stock in the picture while orders land</h3>
          <p class="mt-12 text-muted">
            VOS carries real-time inventory visibility tied to order activity, and the catalog
            updates as stock levels change. It is not the system of record for stock: the system
            you run today keeps that job, and a demo walks through how the two connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Across everything you list, not only the fast movers</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises on a late, heavy order</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Levels come from whatever you count with now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No counting and no buying happens inside VOS</span>
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
      <h2>Three steps, and no integration phase</h2>
      <p class="lead mt-16">
        Nothing gets mapped, validated or connected to make this start. You send the lists, we
        open the accounts, the orders begin arriving.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send over your lists</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet does it. Items and the price per account go into one
          admin screen, against the codes you already use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Accounts get opened</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We provision each customer and walk the kitchen through the app once.
          Most of them send something the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>It arrives ready</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Approved by the buyer, numbered and timed, in whichever shape your
          office asked for it.
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
      <h2>What changes on the order desk</h2>
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
            "Our EDI accounts were never the trouble. It was the forty kitchens
            that ring, and those are the ones who moved over."
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
            "We had a quote for a project that would have run into next year.
            This was answering the phones for us by Friday."
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
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Not Either Or</span>
      <h2>When VOS and OrderEase work together</h2>
      <p class="lead mt-16">
        These two sit at opposite ends of the same path, so running both is reasonable. VOS is no kind of OrderEase replacement: it narrows what has to be handled, and whatever still comes in as a file or over EDI goes on being handled. Quite often that is what an OrderEase alternative turns out to mean.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📥</div>
        <h4>Less of the pile needs reading</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts that move onto the app stop producing anything to interpret. What is left for
          your intake tooling is a shorter pile, which is the cheapest way to make it look good.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔌</div>
        <h4>Hands off at whatever point you like</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A finished order can go to your ERP directly or into the tooling you have now, over the API, by EDI or as a file. Where it lands is your call, not ours.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧷</div>
        <h4>Try it on the accounts that ring the most</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Adding VOS takes nothing away, so there is no contract to end and no migration to schedule. Ten accounts is a perfectly reasonable place to stop.
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
      <h3 style="margin-bottom:10px;">Watch one arrive already itemized</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. A chef speaks an order, you watch it reach the desk itemized, and we are straight with you about the limits.
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
      <h2>What distributors juggling several channels ask</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS an OrderEase alternative, or a different tool?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          Not the same thing, and it is worth being plain about it. They manage what happens to orders after they reach you, from however many directions. VOS changes how one group of customers sends theirs to begin with. Judged as equivalents, one of the two will let you down, so the question is whether your pain is the intake or the phone.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS better than OrderEase?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At lifting an order out of a kitchen with nobody typing, we think so. At reading an
          emailed purchase order, running your EDI partners or wiring up a marketplace, no, and
          not slightly: we do none of those. If that is the job, buy theirs.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We get a lot of emailed POs. Does VOS read those?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is no parser here, and we would rather lose the deal than imply there is. VOS
          moves accounts off sending a document, which shrinks that pile instead of processing it.
          For whatever stays on email, their tooling is pointed exactly at it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does one of them have to go?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at all, and plenty of distributors would sensibly keep both. They work on separate
          parts of the same journey: one cuts the queue down, the other handles what is in it.
          Nothing in VOS has to be removed for your intake tools to carry on.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What about validating orders against our rules?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          VOS handles it earlier rather than afterwards. A customer can only order lines from
          their own guide, at the price you set, so there is nothing unrecognized to check later.
          What VOS does not do is run a rules engine over orders arriving from anywhere else.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do the costs compare?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They are more open than we are here, and credit where it is due: their site publishes a
          starting figure and says there is no free tier. Ours is quoted on how many accounts you
          want opened, with nothing published. Ask us and you will get a number for your own book.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast could this be running?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors have this working in 24 to 48 hours, and for most kitchens the first order follows the same day. Nothing is being connected, which is why an OrderEase alternative
          gets shortlisted by people who have not budgeted for a project at all.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is it a problem that they are not food specialists?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not on its own, no, and food service is on their published list of industries. The narrower point is about defaults: a product built to suit eight trades at once starts from generic ordering habits, and a kitchen reordering late at night is not the case it was designed around.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the OrderEase details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Everything above was taken from orderease.com, as published on 10 October 2026: their product and channel write-ups, the industry list and the pricing page. Their published results figures belong to them and are not quoted here. If something has shifted since, that is our error rather than theirs.
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
  <h2>Shorten the queue instead of sorting it</h2>
  <p>Twenty minutes, one order followed end to end, and a straight account of where VOS stops.</p>

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
        <li><a href="#comparison">VOS vs OrderEase</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/distribution-workflow-software">Distribution Workflow</a></li>
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
