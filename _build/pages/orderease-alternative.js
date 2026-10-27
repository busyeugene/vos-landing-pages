/* Comparison page: OrderEase, and OrderEase with VoiceOrder Solutions added. `compare` block order.
 * REFRAMED 2026-10-21 (client, via Eugene): VoiceOrder Solutions is the voice step a distributor
 * ADDS in front of OrderEase, never its replacement. It answers their "the whole order path, not
 * one piece of it" directly: keep the whole path, add one piece. Table = "OrderEase + VoiceOrder
 * Solutions" vs "OrderEase on its own": every OrderEase strength is a tick in both columns. The two
 * do NOT connect (FAQ 4). Brand in full, never "VOS". The notes below are from the original build.
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
  title: "Not an OrderEase Alternative: Keep It, Add Voice Ordering",
  description: 'Keep OrderEase for EDI, portals and emailed POs, and let accounts speak each order into an app. An OrderEase alternative that adds voice ordering.',
  related: ["wizcommerce-alternative","rekki-alternative","necs-entree-alternative"],
  relatedHeading: "Other platforms you keep while adding voice",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not An OrderEase Alternative: Voice Ordering Beside It</h1>
      <p class="lead mt-16">
        Keep every way you take orders today and add one more. VoiceOrder Solutions sits alongside OrderEase: the kitchen's buyer talks the order into our app and approves each line, so it arrives as a list of your own items and codes. EDI, portals and emailed POs stay with OrderEase.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Live in 24-48 hours for most</span>
        <span class="hero-trust-dot"></span>
        <span>OrderEase keeps every channel</span>
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
      <div class="stat-label">Saved on each call that becomes an app order</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is the setup window for most distributors</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is when most kitchens send their first order</div>
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
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Nothing Removed, Voice Added</span>
      <h2>OrderEase plus VoiceOrder Solutions.<br>All your order sources, plus voice.</h2>
      <p class="lead mt-16">
        Adding voice should never cost you a way orders already reach you, so this table only adds. OrderEase is order management software: it takes orders in from many places, checks them and passes them to your ERP. You need no OrderEase alternative to keep that. What voice adds is an order your customer speaks and approves before sending. The two products do not connect.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">OrderEase + VoiceOrder Solutions</th>
            <th style="width:30%;">OrderEase on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Emailed PDF and CSV purchase orders parsed into orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders spoken in, then approved line by line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Typed, or sent as a file</td>
          </tr>
          <tr>
            <td>Managed EDI with trading-partner compliance</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account has its own guide, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Marketplace and ecommerce connections</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders checked against your rules before the ERP</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Fulfillment logic across several warehouses</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>An offline-ready app for sales reps</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Fewer emailed orders left to read</td>
            <td><span class="check-yes">✓</span></td>
            <td>Reads the ones that arrive</td>
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
      <h2>Why distributors shop for an alternative to OrderEase</h2>
      <p class="lead mt-16">
        Plenty of people searching for an OrderEase competitor do not want new order software at all. They have trouble with one source of orders, not six. Replacing everything to fix that one is too big a fix. Three cases come up often.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧭</div>
        <h4>The platform covers every channel</h4>
        <p class="text-muted mt-12">
          OrderEase says itself that it covers the full path rather than one piece of it, and for a lot of sellers that is the right buy. If only one kind of order is causing trouble, the fix can be just as small.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📄</div>
        <h4>A PDF the software reads still needs checking</h4>
        <p class="text-muted mt-12">
          Software that lifts an order out of a PDF has to be checked, and OrderEase says plainly that it flags exceptions for review. That cuts the work, which is real, but someone on your side still has to go through the flagged orders.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🌾</div>
        <h4>Eight industries, and food is one of them</h4>
        <p class="text-muted mt-12">
          Their site lists food and beverages beside lumber, apparel, pets and lawn care, which is a fair spread of wholesale. It also means the standard setup is general, not shaped around a chef placing an order at the end of service.
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
      <h2>What an OrderEase alternative adds at the front</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The order is built, not worked out afterwards</h3>
          <p class="mt-12 text-muted">
            A chef says what is short and the lines come up from that account's own guide, under the codes you use. They look over every line and fix anything wrong before sending, so nobody at your end rebuilds the order from a file.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The customer checks the lines, so nobody here guesses</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Said from a walk-in or an office, at any hour</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on their own iOS or Android phone, with no device from you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Interrupted halfway? It holds the order until they come back</span>
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
          <h3>Your codes, your prices, one list per customer</h3>
          <p class="mt-12 text-muted">
            Export the lists you keep now and we load them. Each account gets the items it
            actually buys at the price you set for it, so the lines on an order come from that guide, already tied to your codes.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Lines arrive tied to your own codes</span>
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
              <span>No extra order rules to set up for these accounts</span>
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
            straight into your ERP over the API, over EDI, or into QuickBooks. We use whichever method your desk relies on rather than asking for a new one.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a named rep, or to the purchasing desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI, the API or QuickBooks, nobody on your team retypes it</span>
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
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity, and the catalog
            updates as stock levels change. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
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
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>We never count or buy stock for you</span>
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
        There is no implementation project and no IT work to schedule to make this start. You send the lists, we create the logins, the orders begin arriving.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send over your lists</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet does it. Items and the price per account go into one
          admin screen, matched to the codes you already use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Logins get created</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We load each guide and set up the account, then the kitchen downloads the app.
          Most of them send something the same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>The order arrives ready</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The customer has approved it. It carries a number and the time it was sent, in the format your system takes.
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
            "Most of our accounts were fine as they were. The ones who used to call every morning now put the order through the app."
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
            "We thought we needed a bigger system. We needed a simpler way for chefs to send what they always called in."
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
      <span class="eyebrow">Front And Back</span>
      <h2>How OrderEase and VoiceOrder Solutions divide the work</h2>
      <p class="lead mt-16">
        We work before the order leaves the kitchen, and OrderEase works once it reaches you, so running both makes sense. We are not an OrderEase replacement: we cut down the orders that need handling, and anything still coming in as a file or over EDI is handled as it is today. Quite often that is what an OrderEase alternative turns out to mean.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📉</div>
        <h4>Less of the pile needs reading</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts that move onto the app send a list they have already checked, instead of a document someone has to read. The software that reads your incoming orders gets a shorter pile, with more time for the files that keep coming.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔀</div>
        <h4>Choose where spoken orders land</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Straight into the ERP, or as an email your desk already watches. Which of those it is stays your call, not ours.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📞</div>
        <h4>Try it on the accounts that call the most</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Adding us removes nothing, so there is no contract to end and no data to move. Start with the ones that call most and ask us what that looks like.
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
      <h3 style="margin-bottom:10px;">See one arrive already itemized</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. A chef speaks an order, and you see it reach the desk itemized.
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
      <h2>What distributors with many order sources ask</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need an OrderEase alternative to take spoken orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. OrderEase manages what happens to orders after they reach you, from however many directions. VoiceOrder Solutions changes how one group of customers sends theirs to begin with. Keep the first and add the second; they work on separate parts of the same journey.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than OrderEase?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At getting a kitchen's order in already itemized and checked by the buyer, we think so. At reading an emailed purchase order, running your EDI partners or wiring up a marketplace, no: we do none of those. That job is theirs, and it can stay theirs.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We get a lot of emailed POs. Can you read those?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. We have no tool that reads documents, and we will not imply otherwise. We get accounts to stop sending documents, so the pile gets smaller instead of being processed. OrderEase's tools are built for the email orders that remain. One limit worth stating: only what comes through our app gets an order number, a timestamp or a stock update from us. A call or a voicemail does not.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is OrderEase tied to VoiceOrder Solutions at all?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. The two run apart, each with its own support, and neither has to be removed for the other to run. OrderEase keeps handling what reaches it, and our orders go into your system by their own route, in any format listed above.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do accounts on the OrderEase portal have to move?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Buyers who like the portal keep using it. Our app is for the accounts that phone or email instead, and who gets it is your choice, account by account.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does running both cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They are more open than we are here, and credit where it is due: their site publishes a starting figure and a setup fee, and says there is no free version and no trial. Ours is quote-based with nothing published, and since OrderEase stays, it covers only the step we add. Ask and we will quote you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast could this be running?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors have this working in 24 to 48 hours, and for most kitchens the first order follows the same day. Nothing in OrderEase gets connected or altered, so this asks much less of you than an OrderEase alternative that would replace it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the OrderEase details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We took each OrderEase detail here from orderease.com, as published on 10 October 2026: their product and channel write-ups, the industry list and the pricing page. Their published results figures belong to them and are not quoted here. If something has shifted since, that is our error rather than theirs.
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
  <h2>Get fewer orders to sort through</h2>
  <p>Twenty minutes, and one order that turns up itemized, ready to work.</p>

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
        <li><a href="#comparison">OrderEase + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
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
