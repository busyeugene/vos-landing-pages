/* Comparison page: VOS vs REKKI. `compare` block order (see template.js).
 * ⚠ REKKI PIVOTED. It is no longer the chef ordering app the batch plan assumed. Its homepage is
 * "Office robots built for wholesale distributors": OrderAI, InboxAI, MenuAI and a marketplace.
 * The buyer is the distributor. The chef app survives at /app as one nav item.
 * Angle (Eugene, 2026-10-10), used by no other page in the set: ENGAGE THE ACCURACY CLAIM.
 * They publish "99.99% accuracy... just 1 error in 10,000 orders" and a "0.01% error rate". An
 * error rate is the right measure for a robot inferring an order from a message. VOS publishes
 * none for that step because there is no reading step: the lines come off the account's guide and
 * the buyer confirms them.
 * ⚠ NEVER repeat 99.99% or 0.01% as fact or as a result, and NEVER imply VOS is more accurate,
 * 100% accurate, or incapable of error. The claim is a DIFFERENT KIND OF CHECK, not a better
 * percentage. The page also states VOS's own hard limit: a call or voicemail to the desk gets no
 * number, no timestamp, no stock movement.
 * ⚠ Pricing is NOT parity: they publish "Starting at £10/customer". Concede it. The figure stays
 * off the page (stale numbers are what a fact-checker catches), and the currency and the UK-only
 * marketplace are stated without claiming they do not serve the US, which is not established.
 * ⚠ Their free chef app emails orders to suppliers who never signed up. Stated as a fact about how
 * orders arrive, not as a criticism.
 * ⚠ Do not reuse the Burnt angle (agents across the back office) or the WizCommerce angle (mess
 * handled vs ended). Both are adjacent. Keep this page on the measurement.
 * Every claim is sourced and dated in _build/research/competitors/rekki.md.
 */
module.exports = {
  title: "REKKI Alternative for Food Distributors in 2026",
  description: 'The buyer picks the lines off their own guide and confirms them, so no robot has to read the order right. A REKKI alternative for food distributors.',
  related: ["order-taking-software","burnt-ai-alternative","inventory-control-software"],
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
      <h1>A REKKI Alternative With No Reading Step.</h1>
      <p class="lead mt-16">
        REKKI puts robots on the order desk and publishes how often they get it right. VOS removes the guesswork a step earlier: your account talks its order into the app, picks from its
        own guide, and confirms the lines before they reach you.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare The Two</a>
      </div>

      <div class="hero-trust">
        <span>Nothing to train</span>
        <span class="hero-trust-dot"></span>
        <span>The buyer confirms</span>
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
      <div class="stat-label">Comes back on each order once off the phone</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Covers setup for most distributors</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is a first order for most kitchens</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     The first five rows go to REKKI. Their robot suite, marketplace, free
     chef app and published pricing are all real and VOS has no answer to
     any of them. Row 6 is the one this page is actually about.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Two Ways To Trust An Order</span>
      <h2>VoiceOrder Solutions vs REKKI.<br>Measured, or confirmed.</h2>
      <p class="lead mt-16">
        REKKI reads orders out of whatever your customers send and reports how often that goes
        right. Weighing a REKKI alternative means reading the first five rows first, because every
        one of them goes to them.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">VoiceOrder Solutions</th>
            <th style="width:30%;">REKKI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reads orders arriving on any channel</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Sorts and flags your customer inbox</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Mines customer menus for things to sell them</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Marketplace where new buyers find you</td>
            <td>Not offered</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Publishes a starting price</td>
            <td>Quoted per operation</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Who signs the order off</td>
            <td>The buyer, before it sends</td>
            <td>Your team, after the robot</td>
          </tr>
          <tr>
            <td>Something has to be trained on your business</td>
            <td>Nothing to teach it</td>
            <td>Trained by your team</td>
          </tr>
          <tr>
            <td>How long until it is running</td>
            <td>24-48 hours for most</td>
            <td>No timeline published</td>
          </tr>
          <tr>
            <td>What you are buying</td>
            <td>Ordering plus stock visibility</td>
            <td>A suite of office robots</td>
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
      <h2>Why distributors weigh an alternative to REKKI</h2>
      <p class="lead mt-16">
        Hunting for a REKKI competitor is rarely about doubting the robots. It is usually one of
        three much more specific worries, and they pull in different directions.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📐</div>
        <h4>An error rate is still a rate</h4>
        <p class="text-muted mt-12">
          REKKI publishes theirs, which is more than most vendors will do. It is also an admission worth pausing on: a number exists because a machine is working out
          what the order said, and somebody on your side owns whatever lands outside it.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🎓</div>
        <h4>Your team ends up teaching it</h4>
        <p class="text-muted mt-12">
          Their own page says you train the robot to fit your business, which is honest and is why
          the accuracy belongs to them. It is work, though, and it lands on the people who were
          already the busiest in the building.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧱</div>
        <h4>The messy order keeps being written</h4>
        <p class="text-muted mt-12">
          Software that copes beautifully with a scrawled message works because the messages keep
          arriving. Plenty would rather the message never got written, which is a different purchase with a different shape.
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
      <h2>What a REKKI alternative moves earlier</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Picked from a list, not worked out from a message</h3>
          <p class="mt-12 text-muted">
            A chef says what is running low and the items appear from that account's own guide,
            carrying your codes and your prices. There is no sentence to interpret, because the
            words only ever select from lines you already sell.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every line is on screen before it goes anywhere</span>
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
          <h3>The guide is why there is nothing to get wrong</h3>
          <p class="mt-12 text-muted">
            Each account works from the lines it actually buys, at the figure you hold for that
            customer. An unknown item cannot reach you from the app, because there was never a
            blank box for one to be written into.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>No codes to match and no item to look up</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog and the pricing stay yours to set</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Change a guide once and the next order carries it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No sample orders needed to get started</span>
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
          <h3>Handed over in a shape your office knows</h3>
          <p class="mt-12 text-muted">
            A finished order goes out as an email carrying a PDF, Excel or Word file, or straight
            into your ERP over the API, over EDI, or into QuickBooks. Nothing has to be retired or
            rebuilt for it to arrive.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Sent to a named rep, or to the purchasing desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>On a direct feed nobody retypes it at your end</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Carrying a number, with the date and time of sending</span>
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
          <h3>Stock in sight while the orders land</h3>
          <p class="mt-12 text-muted">
            VOS carries real-time inventory visibility tied to order activity, and the catalog
            updates as stock levels change. It is not the system of record for stock: the system
            you run today keeps that job, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Over everything you list, not only the quick movers</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Fewer stockout surprises on a late, heavy order</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Levels come out of whatever you count with now</span>
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
      <h2>Three steps, and no training period</h2>
      <p class="lead mt-16">
        Nobody has to feed it examples or correct it for a month. You send the guides, we open the
        accounts, the orders start arriving finished.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Hand the guides over</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet will do. Items and the price per account go into one
          admin screen, under the codes you already use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set each account up</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Logins are created and the kitchen is walked through the app once.
          Most send an order in before the day is over.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>They arrive confirmed</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Signed off by the buyer, numbered and timed, in the layout your
          office asked us for.
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
      <h2>What stops reaching the desk</h2>
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
            "We stopped arguing about what the message meant. The chef had
            already looked at the lines and pressed send on them."
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
            "Nobody here had time to teach a system our business. This one
            arrived knowing our price list and that was the whole setup."
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
      <h2>When VOS and REKKI work together</h2>
      <p class="lead mt-16">
        Keeping both is a reasonable call. VOS is not a REKKI replacement: it takes a slice of your book off writing messages at all, and whatever still turns up as an email or a voicemail wants reading by something. A REKKI alternative often turns out to mean exactly that.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📨</div>
        <h4>A shorter pile to be right about</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts on the app never produce a message to begin with. Anything you have
          reading the rest gets a smaller stack, and a rate applied to fewer orders costs less
          when it slips.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🛒</div>
        <h4>Your marketplace listing is untouched</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Anything bringing you new buyers should carry on bringing them. VOS has no marketplace
          and no interest in who finds you; it only handles the ordering once they have.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧷</div>
        <h4>Begin where the phone rings loudest</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Nothing else has to give way for it, so start on the few accounts that eat the most of the morning and judge it on those.
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
      <h3 style="margin-bottom:10px;">An order nothing had to decipher</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. The chef talks, the lines come off their guide, and we say plainly which parts stay yours.
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
      <h2>Questions we get about order accuracy</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS a REKKI alternative, or a different proposition?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          Different, and worth saying so early. They automate the work your office does on orders
          that have already arrived, plus the inbox and the upselling. VOS changes the way one
          group of customers orders so less of that work exists. Judged as equivalents one will
          disappoint you, so what matters is whether you want the pile read or shrunk.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS more accurate than REKKI?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          That is the wrong shape of question and we are not going to claim a better percentage.
          Theirs is a measure of how well a machine reads an order a person wrote. In VOS no
          reading happens: the lines are selected from the guide and the buyer looks at them before
          sending. Different check, not a tidier number.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          So can an order still be wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Of course. Somebody can confirm the wrong quantity, as they can on any order ever
          placed. What cannot happen is a mistake nobody saw, because the person who wants the
          goods read the lines last. And the limit is worth stating: this covers orders placed in
          the app. A call or a voicemail to your desk gets no number, no timestamp and nothing
          moving against stock.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS better than REKKI?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At moving an order out of a kitchen with nothing in the middle, we think so. At reading
          email, triaging an inbox, finding what an account is not buying from you yet, or putting
          you in front of new buyers, no: we do none of those and have no plans to.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How much do we have to train it?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing at all, and that is a real difference rather than a slogan. Their site says your
          team trains the robot on your business, which is fair and is why the accuracy is theirs to claim. We load your guides and open accounts, so there is no learning period
          and no month of corrections.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Some of our customers already use the REKKI app. What happens?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing breaks. Their chef app is free and, by their own account, sends orders to
          suppliers whether or not the supplier signed up, converting them to email for your order
          address. Those keep arriving as they do now. VOS is for the accounts you would rather
          had a guide of yours in front of them instead.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do the costs compare?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They are more open here than we are, and that deserves saying: their site carries an opening figure per customer and what it includes. It is quoted in pounds, and their
          marketplace is described as being in the UK only. Ours is quoted on how many accounts
          you open, with nothing published, so ask and you will get a figure for your own book.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast could this be running?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are running it in 24 to 48 hours, and most kitchens get one away that day. Nothing is being integrated or taught, which is why a REKKI alternative gets
          shortlisted by teams with a single problem to settle this week.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the REKKI details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Taken from rekki.com, as of 10 October 2026: the robot descriptions, the accuracy and training wording, the published starting price and the chef app questions. Their performance figures are their own and are not quoted here as results. If any of it has moved on, the mistake is at our end.
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
  <h2>Take the guesswork out of the order</h2>
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
        <li><a href="#comparison">VOS vs REKKI</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/order-fulfillment-software">Order Fulfillment</a></li>
        <li><a href="/distribution-automation-software">Distribution Automation</a></li>
        <li><a href="/vendor-management-software">Vendor Management</a></li>
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
