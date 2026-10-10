/* Comparison page: VOS vs Cut+Dry. `compare` block order (see template.js).
 * Angle, distinct from the four pages before it: Cut+Dry is a three-sided network and says so.
 * Manufacturers pay to promote SKUs to operators "at the exact moment they're building an order",
 * and restaurants are offered cashback from participating distributors and manufacturers. So the
 * contrast is WHO ELSE IS IN THE ROOM when your customer orders. On VOS the account speaks from
 * your guide at your prices and nobody is promoting into that moment.
 * Cut+Dry wins five rows: storefront, search and discovery, payments, invoicing, sales tooling.
 * The page concedes all of it, because it is true and the argument does not need it hidden.
 * Rollout: their only data point is a named customer's 90 days, attributed as such.
 * Every claim is sourced and dated in _build/research/competitors/cut-dry.md.
 */
module.exports = {
  title: "Cut+Dry Alternative for Food Distributors in 2026",
  description: 'Your account speaks an order from your guide, at your prices, with nobody promoting into it. A Cut+Dry alternative with one job and no network.',
  related: ["bluecart-alternative","choco-alternative","grubmarket-ai-alternative"],
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
      <h1>A Cut+Dry Alternative With Nobody Else In It.</h1>
      <p class="lead mt-16">
        VOS is a Cut+Dry alternative that is not a network. Your account picks up the app, says what is short from the list you built, and approves it. There is no marketplace around it, no
        other brand bidding for that moment, and no third party earning off the purchase.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare The Two</a>
      </div>

      <div class="hero-trust">
        <span>Your catalog only</span>
        <span class="hero-trust-dot"></span>
        <span>Nothing to migrate</span>
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
      <div class="stat-label">Back on each order once the phone is out of it</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Covers a typical setup, start to end</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is when the first ones typically land</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Five rows go to Cut+Dry. All five are real and all five are marked.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Side By Side</span>
      <h2>VoiceOrder Solutions vs Cut+Dry.<br>A tool, not a network.</h2>
      <p class="lead mt-16">
        Cut+Dry sells ecommerce, payments and sales tooling across distributors, manufacturers and
        restaurants. VOS sells one app to your accounts. Five rows below go to them, which is what
        happens when you compare a Cut+Dry alternative that does far less on purpose.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">VoiceOrder Solutions</th>
            <th style="width:30%;">Cut+Dry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Other brands can pay to appear while your customer orders</td>
            <td>Never</td>
            <td>Manufacturers can promote SKUs</td>
          </tr>
          <tr>
            <td>Online storefront with search and product discovery</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Digital payments and automated invoicing</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Buyer earns cashback on eligible purchases</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Central place for rep notes and customer data</td>
            <td>Order history only</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Your buyer signs the order off before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies by route in</td>
          </tr>
          <tr>
            <td>Each account has its own guide, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>How long until it is running</td>
            <td>24-48 hours for most</td>
            <td>90 days, in their published case</td>
          </tr>
          <tr>
            <td>What you are buying</td>
            <td>Ordering plus stock visibility</td>
            <td>Ecommerce, payments, sales tools, product data</td>
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
      <h2>Where an alternative to Cut+Dry starts to appeal</h2>
      <p class="lead mt-16">
        Cut+Dry calls itself customer-facing ecommerce and sales enablement for foodservice, and it
        serves distributors, manufacturers and restaurants from the same platform. That breadth is
        the product. It is also what sends some buyers looking at a Cut+Dry competitor instead.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📣</div>
        <h4>Someone else can buy that moment</h4>
        <p class="text-muted mt-12">
          Their own manufacturer pitch is targeted marketing that puts a SKU in front of an
          operator at the exact moment they are building an order. That is a real product sold to
          real brands. It is also your customer, mid-order, being sold to by somebody else.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">💸</div>
        <h4>Cashback has to come from somewhere</h4>
        <p class="text-muted mt-12">
          Restaurants on the platform are offered cashback on eligible purchases from
          participating distributors and manufacturers. A lot of distributors will want to know
          exactly where that sits before they sign, and reasonably so.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🗓️</div>
        <h4>Launch is a quarter, on their own figures</h4>
        <p class="text-muted mt-12">
          The one launch time they publish is a named customer going from contract to live in 90
          days. For a platform of that size it is a good result. It is still a quarter before the
          phone stops ringing.
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
    <div class="text-center" style="max-width: 600px; margin: 0 auto 72px;">
      <span class="eyebrow">What You Get</span>
      <h2>What this Cut+Dry alternative covers, and only that</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Nothing to browse, so nothing to browse past</h3>
          <p class="mt-12 text-muted">
            Your account holds the button and says what is short. Items come up as lines with
            quantities, they correct anything off, and they send. No search results, no
            recommendations, no other brand in the way of the thing they meant to buy.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The buyer looks at the list before anything leaves</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Spoken from the cooler, the bench or the office</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Their own handset, iOS or Android, nothing issued</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Roughly 20 to 30 minutes back against the same order by phone</span>
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
          <h3>One guide, yours, and no shelf beside it</h3>
          <p class="mt-12 text-muted">
            You send the guides you keep per customer. We load them against your SKUs at the price
            you hold for that account. What the kitchen sees is your range and nothing wider, so
            the catalog never becomes a place to compare you.
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
              <span>No promoted placements and no sponsored lines</span>
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
          <h3>It turns up the way your desk expects</h3>
          <p class="mt-12 text-muted">
            A finished order leaves as an email carrying a PDF, Excel or Word file, or goes
            straight into your ERP over the API, over EDI, or into QuickBooks, in a shape your
            desk opens daily.
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
            VOS carries real-time inventory visibility tied to what is being ordered, and the
            catalog tracks the levels. It is not the system of record for stock: yours stays in
            charge, and a demo walks the connection between them.
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
      <h2>Three steps, and no launch date</h2>
      <p class="lead mt-16">
        Nothing here needs a project plan or a go-live. You send guides, we open accounts,
        your customers order.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Email us your guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever format they are already in. Each account's lines and your prices
          go into a single admin screen, lined up with your codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We open each customer up</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts get created and the kitchen gets shown the app. Most send
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
            "We did not want our customers shopping a catalog. We wanted them
            reordering from us, quickly, and that is all this does."
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
            "Our quarter was already full. Being live in two days instead of three
            months was most of the reason we chose it."
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
      <h2>When VOS and Cut+Dry work together</h2>
      <p class="lead mt-16">
        VOS is not a Cut+Dry replacement and could not be one. It adds on, so a platform already
        carrying your payments and your storefront is no reason to rule this out.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🖥️</div>
        <h4>Let the storefront do the storefront</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Discovery, search and a published catalog are real work, and none of it happens here. The
          accounts who want to browse keep browsing. The ones who just want Friday's order
          reordered get a quicker route to it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💳</div>
        <h4>Payments and invoicing stay put</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS never touches money. Nothing about adding it asks you to move how customers pay or
          how invoices go out, which is usually the part nobody wants to disturb.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Still one place for the order to arrive</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whichever system you picked is where it shows up, over EDI, the API or QuickBooks. So nobody is watching two queues.
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
      <h3 style="margin-bottom:10px;">See an order with nobody else in it</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. One account, one order said out loud off your own guide, and a straight list of what VOS leaves to the rest of your stack.
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
      <h2>Questions that come up against a platform</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS a fair Cut+Dry alternative, given how much less it does?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          On order capture, yes, and that is the comparison worth making. Everywhere else the
          honest answer is that they are not the same purchase. Cut+Dry runs a storefront, takes
          payments, raises invoices and carries a sales tool. VOS moves one order from your account to your desk. One of those is a platform decision and one is not.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS better than Cut+Dry?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For a reorder from an account you already have, we would say yes: no browsing, nobody
          promoting into it, and live in a day or two. For selling a catalog, collecting money, or
          putting your product data in front of a wider market, no, and not close. Those are the
          things they built.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can another brand advertise to my customer inside VOS?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is no advertising surface in the app, and we do not sell placement to anyone.
          Your account sees the list you built, priced the way you hold it. Cut+Dry openly offers
          manufacturers targeted marketing at the moment an operator is building an order, which
          suits some distributors and is exactly what others are avoiding.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS do payments or invoicing?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Neither. Money never passes through it. If digital payments and automated invoicing are
          what you are shopping for, that is a genuine Cut+Dry strength and we would point you
          back to them rather than waste your demo slot.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does any of this touch our ERP?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only to hand it a finished order. VOS works at the intake end and passes each one on,
          itemized and approved. Everything downstream behaves exactly as it did yesterday.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do the costs compare?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Neither of us publishes a figure. They have a pricing page with no prices on it, and
          ours is quoted on how many accounts you want opened. Given the difference in scope, the
          thing to compare is not the number but what each number is buying.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly can accounts start sending orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors this is live inside 24 to 48 hours, with a first order usually in on
          the same day. The only launch figure Cut+Dry publishes belongs to one named customer who
          went from contract to live in 90 days, which is respectable for a platform that size and still a quarter of your year, and
          and the common reason a Cut+Dry alternative gets weighed at all.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          And the accounts that will only ever call?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They carry on calling, and your desk deals with those the way it always has. Be clear
          about the limit though: a call or a voicemail gets no order number from VOS, no timestamp
          and nothing moving in stock. Only what comes through the app does.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Cut+Dry details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          All of the above was read on their own site, 10 October 2026: the module descriptions, the manufacturer
          marketing pitch, the cashback offer and the 90 day launch, which belongs to the named
          customer they credit it to. We have left their growth percentages alone, because those
          are their numbers. If any of it has moved on, the fault is here, not there.
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
  <h2>Keep the ordering moment yours</h2>
  <p>A twenty minute call, one order followed right through, and a plain account of where VOS stops.</p>

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
        <li><a href="#comparison">VOS vs Cut+Dry</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/wholesale-ordering-software">Wholesale Ordering</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/vendor-management-software">Vendor Management</a></li>
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
