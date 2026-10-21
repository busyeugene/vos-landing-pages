/* Comparison page: REKKI, and REKKI with VoiceOrder Solutions added. `compare` block order (see template.js).
 * REFRAMED 2026-10-21 (client): keep the keywords, present VoiceOrder Solutions as the voice step a
 * distributor ADDS beside REKKI's robots, never its replacement. The two do not connect (FAQ 4).
 * Brand in full on these pages, never "VOS". The accuracy guards below still apply in full.
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
  description: "Keep REKKI's robots and add an app your accounts speak orders into, confirming every line first. A REKKI alternative that leaves less for anything to read.",
  related: ["wizcommerce-alternative","grubmarket-ai-alternative","burnt-ai-alternative"],
  relatedHeading: "Other AI tools you can keep, with voice beside them",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Need A REKKI Alternative? Give Accounts A Voice.</h1>
      <p class="lead mt-16">
        Cut the orders anything has to read. VoiceOrder Solutions works alongside REKKI's robots: your account talks its order into our app, picks from its own guide, and confirms the lines before they reach you. OrderAI and InboxAI keep working on whatever still arrives as a message.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>OrderAI stays on the inbox</span>
        <span class="hero-trust-dot"></span>
        <span>The buyer confirms</span>
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
      <div class="stat-label">Comes back on each order once off the phone</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Covers setup for most distributors</div>
    </div>
    <div>
      <div class="stat-number">24/7</div> <div class="stat-label">Is when orders can arrive</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Reframed 2026-10-21: see the note inside the section.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <!-- Reframed 2026-10-21: REKKI alone vs REKKI with VoiceOrder Solutions added. REKKI's strengths are ticks in both columns; only the uninterpreted order and the buyer sign-off differ. NEVER imply we are more accurate or cannot be wrong (FAQ 2 and 3). -->
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Two Ways To Trust An Order</span>
      <h2>REKKI with VoiceOrder Solutions added.<br>Less left to read.</h2>
      <p class="lead mt-16">
        A confirmed order takes nothing away from a robot that reads. Teams looking at a REKKI alternative are usually asking whether anything has to interpret the order, so each row shows REKKI today and REKKI with our app beside it. The two products are not linked, and every REKKI detail is from their own site.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">REKKI + VoiceOrder Solutions</th>
            <th style="width:30%;">REKKI on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orders read out of any channel by a robot</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Some accounts send lines from their own guide, not a message</td>
            <td><span class="check-yes">✓</span></td>
            <td>OrderAI reads what arrives</td>
          </tr>
          <tr>
            <td>The buyer signs the order off before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies: chef app yes, OrderAI no</td>
          </tr>
          <tr>
            <td>An inbox robot that flags urgent emails</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Menus scanned for products they don't buy from you yet</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>REKKI's free app for chefs</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A marketplace for new buyers, UK only by their FAQ</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Chef-app orders reach you even if you never signed up</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders delivered into your ERP</td>
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
      <span class="eyebrow">Why Teams Compare</span>
      <h2>Why distributors weigh an alternative to REKKI</h2>
      <p class="lead mt-16">
        Hunting for a REKKI competitor is rarely about doubting the robots. It is usually one specific worry about the orders they read, and that worry has an answer that leaves the robots running.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📏</div>
        <h4>An error rate is still a rate</h4>
        <p class="text-muted mt-12">
          REKKI publishes theirs. A number exists because a machine is working out what the order said, and they stand behind it with double checks and a refund guarantee. When the buyer builds the order from their guide and checks it before sending, nobody has to reconstruct it from a message afterwards.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧑‍🏫</div>
        <h4>Their robot learns your business</h4>
        <p class="text-muted mt-12">
          Their site says your team trains the robot to fit your business, and that it starts processing orders and learning right away. That is real control. For accounts on our app, your existing order guides are the setup.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📝</div>
        <h4>The messy order keeps being written</h4>
        <p class="text-muted mt-12">
          Software that copes beautifully with a scrawled message stays busy because the messages keep arriving. For some accounts you would rather the message never got written, and our app can take those while the robot carries on.
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
            carrying your codes and your prices. The buyer looks over every line and fixes anything wrong before it sends, so nobody at your end pieces the order together afterwards.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every line is on screen before it goes anywhere</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>From a walk-in or a bench, whenever the shift ends</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Their own handset, iOS or Android, nothing issued</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>20 to 30 minutes back against the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Reps stop writing up reorders from accounts on the app, so that time goes into selling</span>
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
          <h3>The guide is what the lines come from</h3>
          <p class="mt-12 text-muted">
            Each account works from the lines it actually buys, at the figure you hold for that
            customer. What reaches you is in your own items and codes, because each line is drawn from that customer's guide.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Lines arrive under your own codes</span>
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
              <span>Setup starts from your existing guides</span>
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
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity, and the catalog
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
      <h2>Three steps, starting from your guides</h2>
      <p class="lead mt-16">
        Nothing has to be taught here: your guides are the configuration. You send the guides, we open the
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
          Logins are created and the kitchen downloads the app.
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
            "The chef looks over the lines and presses send. That habit took hold quickly."
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
            "We sent our order guides over and the accounts were set up from those."
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
      <span class="eyebrow">Keep Both</span>
      <h2>Where REKKI's robots and VoiceOrder Solutions each fit</h2>
      <p class="lead mt-16">
        Keeping both is a reasonable call. Our app is not a REKKI replacement: it takes a slice of your book off writing messages at all, and whatever still turns up as an email or a voicemail needs reading by something. A REKKI alternative often turns out to mean exactly that.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📉</div>
        <h4>A shorter pile to be right about</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Kitchens on the app hand over a checked list rather than a message. Anything you have reading the rest gets a smaller stack to work through.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🌱</div>
        <h4>Whatever wins you new accounts is untouched</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Anything bringing you new buyers should carry on bringing them. We have no marketplace and no interest in who finds you; we only handle the ordering once they have.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📞</div>
        <h4>Begin with the kitchens that phone most</h4>
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
      <h3 style="margin-bottom:10px;">An order the buyer has already checked</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. The chef talks, their own guide supplies the lines, and nobody at your end has to work out what they meant.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 13: FAQ
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <!-- Eight items, to match the eight accordion slots on the Webflow page. -->
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Better than REKKI, or less for it to read?</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VoiceOrder Solutions a REKKI alternative, or something to add?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          One to add, not swap. REKKI automates the work your office does on orders that have already arrived, plus the inbox and the upselling. We change the way one group of customers orders, so less of that work exists. REKKI's robots can stay on the rest.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is the voice app more accurate than REKKI?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not in those terms. Our safeguard is different: every line is picked from the account's guide and the buyer checks each one before sending. Theirs measures how well a machine reads an order a person wrote. That is a different kind of check, not a better percentage.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          So can an order still be wrong?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Of course. Somebody can confirm the wrong quantity, as they can on any order ever placed. What changes is who reads the lines last: the person who wants the goods, before anything leaves. This only covers orders placed in our app: a call or a voicemail to your desk gets no number, no timestamp and nothing moving against stock.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does your app connect to REKKI?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is no link between the two and no joint support. OrderAI keeps passing what it reads into your system, and our orders come separately, emailed as a file or sent in over EDI or the API.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Some of our customers already use the REKKI app. What happens?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing breaks. Their chef app is free and, by their own account, sends orders to suppliers whether or not the supplier signed up, converting them to email for your order address. Those keep arriving as they do now. Give our app to the accounts who prefer speaking to typing, and leave the ones already happy where they are.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do the costs compare?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They are more open here than we are, and that deserves saying: their site carries an opening figure per customer and what it includes. It is quoted in pounds, and their marketplace is described as UK only, while the app itself is described as working anywhere in the world. Ours is quote-based and nothing is published, so ask and you will get a figure for the voice step on its own.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast could this be running?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are running it in 24 to 48 hours, and most kitchens have an order in that day. Nothing in REKKI is touched or rewired, which matters if you came looking for a REKKI alternative with only one problem to settle.
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
  <h2>Keep the robots. Take the reading out of some orders.</h2>
  <p>Twenty minutes, one order, built and confirmed by the buyer.</p>

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
        <li><a href="#comparison">REKKI + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
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
