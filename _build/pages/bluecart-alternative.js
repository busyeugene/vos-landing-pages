/* Comparison page: VOS vs BlueCart. `compare` block order (see template.js).
 * Angle, distinct from the five pages before it: BlueCart's own H1 and subhead sell a
 * MARKETPLACE ("Sell to 48,000+ Restaurants", "the largest wholesale marketplace"). So the
 * contrast is whose storefront it is and who else is on the shelf, and the sharpest detail is
 * their Pricing Insights feature, which labels products Great / Good / Fair Value for buyers.
 * Rollout is NOT the argument: they say "set up and running within days", close to ours.
 * BlueCart wins three rows outright, including the biggest one: it can introduce you to
 * restaurants you do not supply yet, and VOS only ever serves accounts you already have.
 * Every claim is sourced and dated in _build/research/competitors/bluecart.md.
 */
module.exports = {
  title: "BlueCart Alternative for Food Distributors in 2026",
  description: 'No marketplace, no price grading, no other vendors on the shelf. A BlueCart alternative where your account orders from your guide, at your prices.',
  related: ["cut-dry-alternative","choco-alternative","wholesale-ordering-software"],
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
      <h1>A BlueCart Alternative That Is Not A Marketplace.</h1>
      <p class="lead mt-16">
        VOS is a BlueCart alternative with no shelf to share. Your account picks up the app, says what the kitchen is short of, and approves the list. Nobody grades your prices, nobody
        lists a rival beside you, and the only catalog in there is yours.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare The Two</a>
      </div>

      <div class="hero-trust">
        <span>No one else on the shelf</span>
        <span class="hero-trust-dot"></span>
        <span>No listing to maintain</span>
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
     Row 1 is the big concession and it goes first: a marketplace can find you
     new customers and VOS cannot.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Side By Side</span>
      <h2>VoiceOrder Solutions vs BlueCart.<br>Your shelf, or a shared one.</h2>
      <p class="lead mt-16">
        BlueCart's own pitch is a marketplace that puts you in front of restaurants you do not
        supply yet. VOS has no marketplace at all. The first row below is the concession that
        matters most, and anyone weighing a BlueCart alternative should read it before the rest.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">VoiceOrder Solutions</th>
            <th style="width:30%;">BlueCart</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finds you restaurants you do not supply yet</td>
            <td>Not what it does</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Free delivery and promotions to win first-time buyers</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Restaurant-side inventory and food costing tools</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Your prices labelled for buyers against other vendors</td>
            <td>Never</td>
            <td>Pricing Insights grades value</td>
          </tr>
          <tr>
            <td>What the buyer can see while ordering</td>
            <td>Your guide only</td>
            <td>A catalog wider than yours</td>
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
            <td>Within days, they say</td>
          </tr>
          <tr>
            <td>What you are buying</td>
            <td>Ordering plus stock visibility</td>
            <td>A marketplace, ordering, payments, CRM</td>
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
      <h2>Why an alternative to BlueCart comes up</h2>
      <p class="lead mt-16">
        BlueCart sells reach. Join the marketplace, get listed in the endless aisle, be seen by
        tens of thousands of restaurants. For a supplier chasing new accounts that is the whole
        appeal. For a distributor whose book is already full, a BlueCart competitor starts to look
        like the simpler buy.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🏷️</div>
        <h4>The platform has an opinion on your pricing</h4>
        <p class="text-muted mt-12">
          Pricing Insights labels products as great, good or fair value so vendors can price
          competitively. That is a sensible marketplace feature. If you win on service and
          reliability rather than being the cheapest, it is a label you did not ask for.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>Your account is browsing a shared aisle</h4>
        <p class="text-muted mt-12">
          An endless aisle is wider than your range by design, because that is what makes a
          marketplace useful to a buyer. The same breadth means a reorder can turn into a
          comparison you were not part of.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📚</div>
        <h4>A long product list for one job</h4>
        <p class="text-muted mt-12">
          Order management, vendor management, invoicing, a rep app, a digital catalog, analytics,
          plus a set of restaurant-side tools. If the complaint is the phone ringing at seven in
          the morning, most of that list is not an answer to it.
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
      <h2>What this BlueCart alternative does instead</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>A reorder, not a shopping trip</h3>
          <p class="mt-12 text-muted">
            Your account holds the button and says what the kitchen is short of. Items appear as
            lines with quantities, they fix anything wrong, and they send. There is no aisle to
            walk down, so the order stays the order they meant to place.
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
          <h3>Your range, your prices, nobody rating either</h3>
          <p class="mt-12 text-muted">
            You send the guides you keep per customer. We load them against your SKUs at the price
            you hold for that account. No value badge appears next to a line and no competing
            vendor appears under it.
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
              <span>No listings fee, no placement, no ranking</span>
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
      <h2>Three steps, and no listing to build</h2>
      <p class="lead mt-16">
        There is no catalog to upload for strangers and no profile to fill in. You send guides,
        we open accounts, your customers order.
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
            "We are not short of customers. We were short of mornings. Listing
            ourselves somewhere new was never going to fix that."
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
            "Our margin is in service, not in being the cheapest line on a page.
            This keeps the conversation between us and the chef."
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
      <h2>When VOS and BlueCart work together</h2>
      <p class="lead mt-16">
        VOS is not a BlueCart replacement, because it cannot do the thing BlueCart is for. It adds
        on, so being listed on a marketplace is no reason to skip this.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🧭</div>
        <h4>Win them there, keep them here</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A marketplace is a good way to meet an account you had no route to. Once they are
          yours, the weekly reorder does not need a marketplace, and moving it off one is how the
          relationship stops being a price comparison.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🤝</div>
        <h4>Different jobs, no overlap to argue about</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Theirs is acquisition. Ours is the order from an account you already serve. Nobody has
          to decide which one wins, because they are not competing for the same hour of the day.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Orders keep arriving in one place</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          It shows up in whichever system you picked, over EDI, the API or QuickBooks. So no second queue appears.
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
      <h3 style="margin-bottom:10px;">See a reorder that nobody else can bid on</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. One existing account, one order spoken off your own range, and a frank list of what VOS will never do.
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
      <h2>What distributors ask before they pick one</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS a real BlueCart alternative if it has no marketplace?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          It depends entirely on why you were looking. If you want to be found by restaurants you
          do not supply, VOS cannot help and a marketplace is the right tool. If you want the
          accounts you already have to stop phoning their orders in, then yes, and the comparison
          is a fair one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS better than BlueCart?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At the weekly reorder from an existing account, we would say yes: your range only, your
          prices, approved by the buyer, with nothing rating you on the way through. At finding
          new customers, no, and it is not a close call. That is their product and we do not have
          one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will VOS bring us new customers?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS only serves accounts you already supply, because your guide is built from what
          that account buys from you. Anyone promising both acquisition and a private ordering
          channel in one product is worth a second question.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does anything in VOS compare our prices for the buyer?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing. There is no value label, no benchmark and no other vendor in the app. BlueCart
          offers Pricing Insights that grade products as great, good or fair value, which is a
          genuinely useful marketplace feature and the opposite of what a service-led distributor
          usually wants beside its catalog.
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
          Neither of us publishes a figure. Theirs follows a demo; ours is quoted on how many
          accounts you want opened. On a marketplace it is also worth asking what the commercial
          terms are around being listed, because that is a different kind of cost from a
          subscription.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast can accounts begin ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors this is live inside 24 to 48 hours, with a first order usually in on
          the same day. BlueCart say theirs can be live within days, so on speed
          there is very little between us, and a BlueCart alternative is rarely chosen on that
          alone.
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
          Where do the BlueCart details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Everything here came from bluecart.com, read 10 October 2026: the marketplace positioning off the
          headline, the Pricing Insights and endless aisle descriptions off their product list,
          and the setup line off their FAQ. We have left their transaction and funding figures
          alone, because those are theirs. If any of it has moved on, the fault is here, not there.
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
  <h2>Keep the reorder off the open shelf</h2>
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
        <li><a href="#comparison">VOS vs BlueCart</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/distributor-sales-software">Distributor Sales</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
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
