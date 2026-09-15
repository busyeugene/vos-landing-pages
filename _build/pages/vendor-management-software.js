/* Page 13 - PRIMARY: vendor management software (x6 standalone: 2 headings, 1 body, 3 FAQ)
 * AUDIENCE (2026-09-15): the DISTRIBUTOR, who is the vendor on a restaurant's vendor list.
 * One question: "How do I become the vendor my restaurant accounts find easiest to buy from?"
 * VOS is NOT a vendor management system: no supplier scorecards, onboarding portals,
 * contract management or risk checks. It is the ordering side of the vendor relationship.
 * SECONDARY: restaurant vendor management software (FAQ H2; restaurants manage vendors, VOS makes you easy to order from; GSC: main domain ranks 2.4)
 *            vendor relationship management software (Tier B, one sentence in feature 3)
 *            vendor management system software (Tier B, comparison lead)
 *            vendor contract management software (Tier C, disambiguating FAQ)
 * Batch 3 assumptions Q9 (per-supplier history) and Q11 (format per supplier) dropped with the reframe.
 */
module.exports = {
  title: "Vendor Management Software From the Vendor's Side | VoiceOrder",
  description: 'Restaurants judge vendors on clear prices, correct orders and easy ordering. VOS helps food distributors deliver all three: a guide per account, open 24/7.',
  related: ["catalog-management-software","order-taking-software","order-tracking-software"],
  relatedHeading: 'More on both sides of the order',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "vendor management software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Vendor Management Software, From the Vendor's Side.</h1>
      <p class="lead mt-16">
        Your restaurant accounts keep a vendor list, in vendor management software or on a sheet by the phone. They want three things from every name on it: clear prices, correct orders and easy buying. VoiceOrder Solutions helps you deliver all three. Their staff place orders by voice from a guide built for them, at your prices and at any hour, and every order gets confirmed before it reaches your team.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Keep your current system</span>
        <span class="hero-trust-dot"></span>
        <span>Live in 24 to 48 hours</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (supplier list with pricing + order format per supplier) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>A customer's order guide<br>in the app, with your<br>items and prices
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
      <div class="stat-number">20–30</div>
      <div class="stat-label">minutes saved on each order, compared with phoning it in</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">ordering for your accounts, long after your office closes</div>
    </div>
    <div>
      <div class="stat-number">Same day</div>
      <div class="stat-label">is when most new accounts start ordering</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Your accounts judge every vendor on how easy it is to order.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Most restaurants buy from several vendors. When ordering from you means
      a phone call, a voicemail, a long email chain or a guess at the price,
      you become the hard one to deal with. That's a bad spot to be in when a
      restaurant trims its vendor list. Here's where it shows:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧩</div>
        <h4 class="mb-8">"They send orders after we close"</h4>
        <p class="text-muted" style="font-size:15px;">
          Your accounts order at 11pm closeout or 6am before prep. If all they
          reach is voicemail, some of those orders get to you and some don't.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📉</div>
        <h4 class="mb-8">"The order on the truck isn't the one they meant"</h4>
        <p class="text-muted" style="font-size:15px;">
          Someone hears "two cases" and types twelve. Nobody spots it until
          delivery day, and your customer remembers which vendor got it wrong.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">💲</div>
        <h4 class="mb-8">"They have to call to check what things cost"</h4>
        <p class="text-muted" style="font-size:15px;">
          With no list of their own, a customer calls, waits on hold, and has a
          rep read out the list and the prices before they can place a single order.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 6: FEATURE DEEP-DIVE – ALTERNATING ROWS
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">

    <div class="text-center" style="max-width: 760px; margin: 0 auto 72px;">
      <span class="eyebrow">Built for Food Distributors</span>
      <h2>Buyers use vendor management software to rate vendors. VOS makes ordering from you the easy part.</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 (Tier A) – restaurant vendor management software; Tier B in body -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Clear Prices</span>
          <h3>Every account sees your current prices before it orders.</h3>
          <p class="mt-12 text-muted">
            Each restaurant gets its own guide with only the items it buys from you,
            each one carrying your price and SKU. Nobody scrolls a full catalog or calls
            to ask what something costs. They open their guide, talk through the order, and send it.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>A personal order guide for every account</span></li>
            <li><span class="bullet-check">✓</span><span>Your pricing on every line</span></li>
            <li><span class="bullet-check">✓</span><span>Items tied to your own SKUs</span></li>
            <li><span class="bullet-check">✓</span><span>Guides kept current from one admin platform</span></li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">See ordering from the buyer's side →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Admin platform with one<br>account's order guide<br>and your prices
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: per-supplier order format (assumption Q11) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Correct Orders</span>
          <h3>The order they send is the order your team gets.</h3>
          <p class="mt-12 text-muted">
            Your customer talks through the order in the app. VOS can send it to a
            rep's inbox as a Word, Excel or PDF file, pass it along by EDI or API, or
            put it straight into QuickBooks. Nobody re-types it, so no typing errors
            slip in, and your back office keeps working the way it does now.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Email to a rep or your purchasing team</span></li>
            <li><span class="bullet-check">✓</span><span>A direct feed into the system you run</span></li>
            <li><span class="bullet-check">✓</span><span>No typing orders in by hand</span></li>
            <li><span class="bullet-check">✓</span><span>Nothing new for your staff to learn</span></li>
          </ul>
          <a href="/order-entry-software" class="feature-link">See how your accounts place orders →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>An order arriving by<br>email as a PDF, with<br>its order number
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 (Tier A) – vendor relationship management software (assumption Q9) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">A Paper Trail</span>
          <h3>If an order is questioned, the answer is on file.</h3>
          <p class="mt-12 text-muted">
            When an account asks about last Tuesday's order, nobody digs through
            voicemail. Each order has a unique order number, a date and a timestamp,
            and shows who placed it. Buyers track vendors in vendor relationship
            management software. VOS gives you a clean paper trail for your side of the deal.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Order history for every account, in one place</span></li>
            <li><span class="bullet-check">✓</span><span>Its own number on every order</span></li>
            <li><span class="bullet-check">✓</span><span>Who ordered, and exactly when</span></li>
            <li><span class="bullet-check">✓</span><span>A confirmation your customer can point back to</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">See order tracking and history →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>One account's order history<br>with order numbers<br>and timestamps
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: agreed pricing -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Reps Who Sell</span>
          <h3>Your reps stop taking orders and start growing accounts.</h3>
          <p class="mt-12 text-muted">
            When orders arrive on their own, your reps get back the time they spent
            on calls and re-typing. They can use it to answer accounts quickly, add
            items to order guides, and find new business. And since customers
            review each order before it's sent, fewer mistakes make it onto the truck.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Fewer order calls and voicemails to return</span></li>
            <li><span class="bullet-check">✓</span><span>Customers check each order before sending</span></li>
            <li><span class="bullet-check">✓</span><span>Fewer wrong quantities on delivery day</span></li>
            <li><span class="bullet-check">✓</span><span>More rep time for new items and new accounts</span></li>
          </ul>
          <a href="/inventory-control-software" class="feature-link">See where order errors cost you →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order review screen<br>before the customer<br>sends it
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ============================================================
     SECTION 7: FEATURE CARDS – SUPPORTING CAPABILITIES
     ============================================================ -->
<section class="section-pad bg-light" aria-label="Additional features">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Everything Included</span>
      <h2>Everything that makes buying from you simple.</h2>
      <p class="lead mt-16">It all comes with VOS, for every account you set up.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>Personal Order Guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A short list for each customer, built from what they really order.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📚</div>
        <h4>Admin Platform</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Update order guides, manage customer accounts, and check order
          history from one place.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏷️</div>
        <h4>Your Prices and SKUs</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each guide carries your pricing and item codes, so orders match
          your system.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <h4>Your Order Format</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Pick how your office gets orders, from an email attachment to a direct link.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Order History by Account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every order from every customer, saved where your team can find
          it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Auto-Save and Resume</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If a customer gets pulled away mid-order, it waits right where they
          stopped.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💰</div>
        <h4>Promos and Confirmations</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Push notifications and text messages reach your accounts with promos
          and order confirmations.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>iOS + Android App</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers order by voice from anywhere in the kitchen, at any hour
          of the day.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>Works With What You Run</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Nothing to switch off. VOS adds a better front door to the order process you already run.
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
      <h3 style="margin-bottom:10px;">See how your accounts would order from you on VOS</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a free 20-minute walkthrough. We'll show you an account's guide,
        your admin screens, and an order landing in your format.
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
      <h2>Three steps from order guide to first order</h2>
      <p class="lead mt-16">
        No IT department and nothing to rip out. Onboarding a new account is
        quick, and most customers are ordering the day it's set up.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Share your order guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Send us each customer's order guide. We load it into VOS with your
          SKUs and pricing.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up your accounts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We create each customer account and get your customers into the app
          on iOS or Android.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders flow to your team</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your customers start ordering, and each order lands with your team
          in the format you chose.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS admin platform with customer accounts and their order guides
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
      <h2>What distributors and restaurants say about VOS</h2>
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
            "When a customer asks about an old order, we pull up the order
            number and the time it was placed while they're still on the line."
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
            "Customers can send an order at closing time, and it's waiting for
            us when we open."
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
     Honest ✗ rows for VOS on contracts and vendor risk.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Built for the vendor.<br>Not a buyer's procurement suite.</h2>
      <p class="lead mt-16">
        Large buyers run vendor management system software, with a procurement
        team and a legal department behind it. Your accounts have a chef and a
        manager, and they need a vendor that makes ordering quick. Here's how VOS compares.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Procurement Suite</th>
            <th style="width:22%;">Phone + Voicemail + Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your items and prices in front of the buyer</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>A separate guide for each account</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Orders arrive in your team's preferred format</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Past orders on file for each account</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Order number and timestamp on every order</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Voice ordering in an app</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Contract drafting and e-signature</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Supplier risk and compliance checks</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Who has to run it</td>
            <td>Your office</td>
            <td>The buyer</td>
            <td>Your reps</td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>2 days or less</td>
            <td>Weeks to months</td>
            <td>None needed</td>
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
     Tier C: vendor contract management + staffing/risk meanings of "vendor management system"
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Restaurant vendor management software questions, answered for distributors</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Will my accounts or my team have to change how they work?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Your restaurant customers keep dealing with your team the way they do now. They just get a faster way to send you orders. On your side, every order lands in a format your office works with today, so nothing behind the scenes has to change.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does vendor management software do for a restaurant?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Vendor management software helps a restaurant keep track of the vendors it buys from: who they are, what they charge, how orders go, and which ones are worth keeping. VOS is not that tool, and it has no supplier scorecards or onboarding portals. It works from your side as the
          vendor, on the parts a restaurant notices every week: the price it sees,
          the order it gets, and how fast it can order from you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS vendor contract management software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS shows your pricing in each account's order guide. It does not draft
          contracts, collect e-signatures, store contract files, or track
          renewal dates. If you need contract management, run a dedicated tool
          alongside VOS.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this the kind of vendor management system used for staffing or vendor risk?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. In staffing, vendor management software is used to manage agencies
          and contract workers. In banks and other regulated businesses, it runs
          background checks on suppliers and rates their security and compliance
          risk. VOS does neither. It is an ordering app that food
          distributors give to their restaurant and store customers.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will orders fit the system my office already runs?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, in the format your team picks. Orders can come by email with a PDF, Word or Excel file attached, or through EDI, API or QuickBooks. VOS is API-ready, so it can also plug into the distribution platform you use today.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is there a record if a customer questions an order?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. The admin platform keeps every account's full order history.
          Every order carries its own number and the exact time it came in, and shows
          the person who placed it, so you can answer with facts instead of guesses.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it work for accounts with several locations?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Each location can get a guide of its own, tied to your pricing
          and SKUs. You manage every location's guide from the same admin
          platform.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running within 24 to 48 hours, with no IT project. You share your customer order guides, we load them and set up each account, and most customers place their first order the same day.
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
  <h2>Ready to be the vendor your accounts find easy to order from?</h2>
  <p>Give every account its own order guide, take orders at any hour, and give your reps more time to sell.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ No IT project required</span>
    <span>✓ Orders in your preferred format</span>
    <span>✓ No system replacement needed</span>
    <span>✓ iOS and Android apps for your accounts</span>
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
        <li><a href="#features">Account Order Guides</a></li>
        <li><a href="#features">Your Order Format</a></li>
        <li><a href="#features">Order History</a></li>
        <li><a href="#features">Free Up Your Reps</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/inventory-control-software">Inventory Control</a></li>
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Procurement Suites</a></li>
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
