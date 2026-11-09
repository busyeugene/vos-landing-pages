/* Comparison page: TrueCommerce, and TrueCommerce with VoiceOrder Solutions added. `compare` block order.
 * Batch 2, wave 3 (webshops / EDI / order capture; Eugene's "Competitors Batch 2" sheet), built 2026-11-09.
 * Frame, as on every compare page since 2026-10-21: VoiceOrder Solutions is ADDED beside TrueCommerce,
 * never its replacement. Table = "TrueCommerce + VoiceOrder Solutions" vs "TrueCommerce on its own";
 * every TrueCommerce strength is a check mark in both columns. Separate products with no built-in link
 * (FAQ 5); whether a VoiceOrder Solutions EDI or API order fits the distributor's setup is a demo question.
 * Angle: BRING RESTAURANTS ON BOARD. TrueCommerce's current pitch is onboarding: "easily onboard every
 * supplier, no matter their size or technical capability", a self-service onboarding portal, AI-guided
 * onboarding, a pre-connected trading partner network. Every path it offers is a document, a file or a
 * typed web order (integrated EDI, SFTP/AS2, a supplier portal, web EDI, the TrueCommerce Shop storefront).
 * The restaurant that still orders by phone is the account none of those paths was built to bring in, so
 * its calls are still keyed by the desk. VoiceOrder Solutions is the on-ramp for that account.
 * NOT SPS's argument (chains require EDI, independents never set it up) and NOT Acumatica's (kitchens
 * skip the portal): Shop is conceded in full.
 * ⚠ TrueCommerce Shop HAS 24/7 self-service ordering, reorder, quick order, contract pricing, order
 *   history and a Food & Beverage section: ✓ both columns, FAQ 4. An app order is not a Shop order.
 * ⚠ EDI is one of OUR delivery formats too: never say our orders travel over TrueCommerce's network, that
 *   we are on it, or that TrueCommerce can receive them. Never "restaurants cannot do EDI": most
 *   independents do not.
 * ⚠ No voice or phone-order tool found for TrueCommerce (site + web search). Nothing claims exclusivity.
 * ⚠ Their numbers stay off (transactions, companies on the network, VMI locations and SKUs). Pricing is
 *   a custom quote on their side: conceded in the cost FAQ, no figures.
 * ⚠ Nothing about a Shop mobile app either way (not found on their site).
 * Every claim is sourced and dated in _build/research/competitors/truecommerce.md.
 * Review 2026-11-09 (wave 3 FIXES3): RE-ANGLED to own ONBOARDING end to end, apart from SPS. H1 says what the
 *   distributor gets (no EDI for restaurants); problem cards = managed service maps partners / onboarding built
 *   for suppliers / go-live contrast; table row 5 = go-live row; FAQ 3 = what a restaurant sets up; coex card 3 =
 *   retail replenishment (VMI). Records fact, no-number line and the Order Automation Connector concession live
 *   in the typing FAQ; prices said once (guide row); after-hours row scoped to restaurants that won't use Shop.
 *   Our EDI does NOT travel through TrueCommerce (delivery row). No "on-ramp", no onboard wordplay in our voice.
 */
module.exports = {
  title: "Not a TrueCommerce Alternative: Keep It, Add Voice Ordering",
  description: "TrueCommerce onboards your EDI partners. A restaurant that orders by phone needs only our app to speak and check its order. Not a TrueCommerce alternative.",
  related: ["sps-commerce-alternative","esker-alternative","orderease-alternative"],
  relatedHeading: "Other platforms that keep running beside us",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A TrueCommerce Alternative: Chefs Skip EDI Testing</h1>
      <p class="lead mt-16">
        Move the restaurant accounts you still take by phone onto an app. Their chef speaks into it, checks every item, then sends. TrueCommerce keeps handling EDI with your partners, supplier onboarding and any Shop storefront, just as it does now.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See What Changes</a>
      </div>

      <div class="hero-trust">
        <span>Each item checked by the chef</span>
        <span class="hero-trust-dot"></span>
        <span>Your EDI maps stay put</span>
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
      <div class="stat-label">Saved on each order a restaurant sends in the app, not by phone</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is when most restaurants send a first order from their new account</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">To get most distributors live, TrueCommerce untouched</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     TrueCommerce is an EDI network, a supplier onboarding platform, a B2B storefront, VMI and
     e-invoicing, so most rows go to both columns. The rows that differ are about the restaurant
     that orders by phone today.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">The Account Left Out</span>
      <h2>TrueCommerce plus VoiceOrder Solutions.<br>Restaurants calling you get a way in too.</h2>
      <p class="lead mt-16">
        VoiceOrder Solutions brings in the kind of account your EDI and storefront were not built for: the restaurant that calls in its order. Chains, retail partners and suppliers reach you through TrueCommerce, and its Shop storefront takes web orders from accounts that prefer a website. This is not a TrueCommerce alternative: you keep it, and the two are sold by separate companies, with no link between them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">TrueCommerce + VoiceOrder Solutions</th>
            <th style="width:30%;">TrueCommerce on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EDI with chain and retail partners, mapped into your ERP</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Calling restaurants can speak the order in an app and check each item</td>
            <td><span class="check-yes">✓</span></td>
            <td>Taken on a call, then keyed in by your team</td>
          </tr>
          <tr>
            <td>Self-service onboarding for suppliers, with testing before go-live</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A 24/7 Shop storefront with reorder and quick order tools</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restaurant goes live with no EDI map or document testing</td>
            <td><span class="check-yes">✓</span></td>
            <td>Partners are invited, connected and tested first</td>
          </tr>
          <tr>
            <td>Customer-specific catalogs and contract pricing in the Shop storefront</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A fully managed service for mapping, testing and partner setup</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restaurant that won't use a web portal can still order after you close</td>
            <td><span class="check-yes">✓</span></td>
            <td>A late call waits on voicemail until morning</td>
          </tr>
          <tr>
            <td>Vendor managed inventory, plus e-invoicing</td>
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
      <span class="eyebrow">Who Gets Onboarded</span>
      <h2>When a food distributor looks for a TrueCommerce competitor</h2>
      <p class="lead mt-16">
        TrueCommerce is built to bring every supplier onto EDI, whatever its size or technical skill, and to connect you with your partners. Another EDI provider, sold as a TrueCommerce alternative, would onboard the same partners. A restaurant phoning your desk is not a supplier or an EDI partner, so its calls keep landing there. Unlike a partner's EDI through TrueCommerce, an emailed app order still gets entered by your team.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🔌</div>
        <h4>A managed service maps partners, not phone calls</h4>
        <p class="text-muted mt-12">
          TrueCommerce's team will map each partner's documents and run the tests for you. A chef reading out an order over the phone has no document to send, so that service has nothing to work on.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧭</div>
        <h4>Its onboarding path is built for suppliers</h4>
        <p class="text-muted mt-12">
          TrueCommerce designs its onboarding around suppliers, from those that swap PDF files to those fully on EDI. A restaurant buying from you is a customer, not a supplier, and a chef calling in an order sends neither.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🖥️</div>
        <h4>Supplier onboarding ends in a testing round</h4>
        <p class="text-muted mt-12">
          On TrueCommerce, a supplier is invited to the onboarding portal, connects by file transfer or through the portal, and tests its EDI documents before it is marked active. To bring a restaurant onto our app, you send us its usual items and its chef downloads our app.
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
      <h2>Not a TrueCommerce alternative: an app is all a restaurant needs</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Nothing to learn but the app: say it, check it, send it</h3>
          <p class="mt-12 text-muted">
            The chef presses Push to Speak and reads out what the next delivery should bring. Our app matches each item to the restaurant's own guide, then lays out the list, so the chef can correct a product or an amount before sending. What reaches you is that list, not a call to take down.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing goes out until the chef has looked over each item</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Open 24/7, so an order can come in after your office closes</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Any iOS or Android phone will do</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A half-said order is saved if the chef gets pulled away</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How restaurants send orders →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Push to Speak,<br>then the item-by-item<br>review screen
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Order Guides</span>
          <h3>A guide for each restaurant, built from your items</h3>
          <p class="mt-12 text-muted">
            We turn what each restaurant regularly orders into its guide, under your own item numbers. That guide and its prices are kept in our admin, where you also manage the account. Whether price changes can come over from TrueCommerce or your ERP in bulk is a question for the demo.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Setting up needs no login to TrueCommerce</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You edit each guide yourself in our admin</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each restaurant has its own guide, with its own prices</span>
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
          <h3>Sent by us, not through TrueCommerce</h3>
          <p class="mt-12 text-muted">
            A sent order comes to you as an email attachment (Word, Excel or PDF), as EDI, through our API or into QuickBooks. Our EDI does not travel through TrueCommerce, so it needs its own way into your ERP; the demo checks whether your setup has one, and if not, it reaches you as an email.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Emailed to one rep or to your order desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI or the API, when your setup takes it, nobody retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Every fix the chef made is already in the order</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your chain and partner EDI keeps running through TrueCommerce</span>
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
          <h3>Incoming restaurant orders, seen next to stock</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to order activity. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises for whoever takes the orders</span>
            </li>
            
            <li>
              <span class="bullet-check">✓</span>
              <span>Buying from your suppliers stays outside our app</span>
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
      <h2>How a restaurant moves from calls to the app</h2>
      <p class="lead mt-16">
        You send what each restaurant normally orders, we set up the accounts, and every chef gets the app on a phone.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send what each restaurant buys</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet from your system, listing every account's items and what it pays, is usually all we need.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Each restaurant gets its own account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Its guide is loaded into our admin, its account is set up, and the chef downloads the app.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders arrive checked and numbered</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          From then on, every order from a restaurant's app shows a number and a send time, in whichever format suits you.
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
      <h2>What it took to start restaurants that used to call</h2>
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
            "Every trading partner we add goes through mapping and testing. A restaurant on the app sent its first order on the day we opened its account."
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
            "Our desk used to write up restaurant calls every morning. Now each chef's own checked list comes in instead."
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
      <span class="eyebrow">Partners There, Restaurants Here</span>
      <h2>What stays with TrueCommerce, and what we add</h2>
      <p class="lead mt-16">
        We are not an alternative to TrueCommerce: it keeps the accounts that trade by EDI, by supplier portal or in its storefront, and we bring in the restaurants that pick up the phone.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>Your trading partners stay on TrueCommerce</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Chain customers, retail partners, the supplier portal and the managed service carry on as they are. Nothing in your maps or partner setups changes when a restaurant starts ordering in our app.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Shop customers keep their storefront</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A restaurant already happy reordering in TrueCommerce Shop can stay there, with its catalog and its contract prices as they are.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Retail replenishment stays in TrueCommerce</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VMI keeps generating replenishment orders for your retail partners from what sells in their stores, and e-invoicing carries on as before. Restaurant orders from our app are a separate stream that touches neither.
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
      <h3 style="margin-bottom:10px;">See a calling restaurant's order arrive without the call</h3>
      <p class="text-muted" style="font-size:16px;">
        A demo takes roughly twenty minutes. In it, we set up an example restaurant, speak its items into our app, edit one of them and press send. Then we show how that order would arrive beside the EDI that TrueCommerce handles for you.
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
      <h2>Questions from TrueCommerce users</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a TrueCommerce alternative to get restaurants ordering digitally?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. TrueCommerce still looks after chains, suppliers and your Shop storefront if you run one. We give phone-ordering restaurants their own way in: their chef reads the order aloud into our app, checks it and sends, and your EDI is left as it is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than TrueCommerce?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At one job: moving a restaurant from phone calls onto an app, where its chef speaks each order and checks it before sending. Connecting chains, onboarding suppliers and running a storefront are TrueCommerce's work, so we are not a TrueCommerce alternative and do not try to be.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does a restaurant have to set up?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only the app: no mapping and no document testing on its side. We open its account from the items you already sell it, and we will show you in a demo how a chef gets started. A restaurant group that already sends you EDI can keep sending it through TrueCommerce.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What about TrueCommerce Shop for online ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Shop gives customers an always-open portal where they can reorder, use quick order and see their own pricing. It is made for the people happy to browse a website. Our app is for the chefs who never took it up and still call: they say what they need aloud rather than search a catalog. Whatever the chef sends in our app skips Shop, so Shop's order history will not include it; it comes to you by email, EDI or the API instead.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it link to TrueCommerce, and will we still type up restaurant orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. TrueCommerce and VoiceOrder Solutions are separate businesses with no connection built between the products, and each supports only its own product. An order from our app that goes as EDI or through our API can load with nobody keying it, if your ERP is set up to take it; the demo is where we check. Over email, someone at your end still enters it, but there is no call to answer, write up or read back: they key it from the chef's own reviewed order. TrueCommerce also offers a connector for emailed and faxed orders; nothing on our side was built for it, and we do not promise that it reads ours. Customer accounts, stock counts and invoices stay in your ERP; we hold the guides, the prices in them, and the orders each chef sends from the app. A call to you still gets no number from us. The app can still get an item wrong, which is why the chef looks over the list before sending.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          We use TrueCommerce with our own suppliers. Does this touch that?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Purchase orders, shipping notices and invoices with your suppliers stay in TrueCommerce and your ERP. We only handle the orders restaurants place with you, and nothing we do reaches your suppliers.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon could we start, and how is it quoted?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Getting most distributors set up takes 24 to 48 hours, without a single change inside TrueCommerce. You send the usual items for each account, often as an export from your system, and we load them into our admin, then open an account for each restaurant. Its chef then installs the app, and most restaurants have ordered through it by the end of that day. TrueCommerce sets custom pricing for each business by quote, and we quote per distributor as well. A TrueCommerce replacement would move every partner connection to a new provider; bringing in our app leaves each of them where it is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the TrueCommerce details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Our source is truecommerce.com, checked 9 November 2026: the homepage, the EDI platform, supplier onboarding, trading partner network, TrueCommerce Shop, VMI, AI, wholesale and distribution, and pricing request pages, the web EDI datasheet, the Order Automation Connector sheet and its comparison page. If something here is now out of date, please tell us so we can fix it.
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
  <h2>Partners get tested. Restaurant chefs install an app.</h2>
  <p>Give us about twenty minutes to open a test account, send one order from it and show you what your desk receives.</p>

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
        <li><a href="#comparison">TrueCommerce + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-taking-software">Order Taking</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/b2b-portal-software">B2B Portal</a></li>
        <li><a href="/distribution-automation-software">Distribution Automation</a></li>
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
