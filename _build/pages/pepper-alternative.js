/* Comparison page: Pepper, and Pepper with VoiceOrder Solutions added. `compare` block order (see template.js).
 * REFRAMED 2026-10-21 (client, via Eugene): keep the "pepper alternative" keywords, but present
 * VoiceOrder Solutions as the voice step added beside Pepper, never as its replacement. The table is
 * "Pepper + VoiceOrder Solutions" against "Pepper on its own", so Pepper keeps every real win.
 * The rollout angle survives as "you already did a 35-90 day rollout once; this one step takes a day or two".
 * The two products do NOT connect (FAQ 3). Brand in full, never "VOS", in visible copy.
 * Every Pepper claim is sourced and dated in _build/research/competitors/pepper.md.
 */
module.exports = {
  title: "Not a Pepper Alternative: Keep Pepper, Add Voice Ordering",
  description: "Add spoken ordering beside Pepper, with no second rollout. Accounts say each order into an app and check it first. A Pepper alternative that runs beside it.",
  related: ["choco-alternative", "burnt-ai-alternative", "cut-dry-alternative"],
  relatedHeading: "More platforms that can stay while voice is added",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Pepper Alternative: Keep Pepper, Add Voice</h1>
      <p class="lead mt-16">
        Get orders off the phone without a second rollout. VoiceOrder Solutions sits beside Pepper: accounts speak to our app, review each line, then send. Their orders land timestamped and ready for your desk, and most distributors have it running in 24 to 48 hours.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Pepper keeps running</span>
        <span class="hero-trust-dot"></span>
        <span>Orders land 24/7</span>
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
      <div class="stat-label">Saved on each order that moves off the phone</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">For most distributors to go live</div>
    </div>
    <div>
      <div class="stat-number">24/7</div> <div class="stat-label">Is when orders can come in</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head (client, 2026-10-21). Column 2 is the distributor's operation with
     both tools, column 3 with Pepper alone, so every Pepper strength is a tick in BOTH columns.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Keep Both</span>
      <h2>Pepper with VoiceOrder Solutions beside it.<br>One voice app added.</h2>
      <p class="lead mt-16">
        Our app should not take anything away, and the table shows that. Pepper is a broad platform. A Pepper alternative search usually means some customers still call in their orders. So here is Pepper alone, then Pepper with our app next to it. The two do not connect, and every Pepper detail is from their own site.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Pepper + VoiceOrder Solutions</th>
            <th style="width:30%;">Pepper on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kitchens speak into an app and check it before sending</td>
            <td><span class="check-yes">✓</span></td>
            <td>Pepper's AI (Order Agent) reads voicemails and texts</td>
          </tr>
          <tr>
            <td>A storefront built for digital ordering</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Your customer reviews every line before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>On the storefront, yes</td>
          </tr>
          <tr>
            <td>Software for reps, collections, margins and ads</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Its own guide for every account, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>Order guides, yes</td>
          </tr>
          <tr>
            <td>A number and a timestamp on the order</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Storefront orders arrive with no call to take</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Reps spend less of the day on order admin</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders land in the ERP you already run</td>
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
      <span class="eyebrow">Where It Starts</span>
      <h2>Why an alternative to Pepper gets searched for</h2>
      <p class="lead mt-16">
        Pepper, made by Pomegranate Technologies, sells an AI platform to independent distributors. It includes an online storefront, an AI tool called Order Agent that enters orders, and tools for sales, finance, pricing and marketing. It is a lot of product, and most of it earns its place. What sends a buyer to look at a Pepper competitor is usually one small problem, not the whole platform.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>The phone accounts are still phoning</h4>
        <p class="text-muted mt-12">
          A storefront only helps the kitchens that open it. The rest keep calling, texting and leaving voicemails at the end of a shift, and those are the orders your desk still writes up by hand.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🖊️</div>
        <h4>Your team checks what Order Agent read</h4>
        <p class="text-muted mt-12">
          Order Agent takes the voicemail, text, photo or PDF the kitchen already sent and turns it into an order. Pepper's own product page shows no step where the kitchen checks what was read. So your order desk is the first to see the order written down.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">⏳</div>
        <h4>One more rollout is the last thing you need</h4>
        <p class="text-muted mt-12">
          Pepper publishes 35 to 90 days for a typical go-live, across five phases, with a setup manager and an engineer assigned to you. That is fair for a platform that size. Going through something like it again just to fix phone orders is not, and no Pepper alternative should ask you to.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 8: FEATURE DEEP-DIVE
     ============================================================ -->
<section class="section-pad bg-light" id="features" aria-label="Feature details">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto 72px;">
      <span class="eyebrow">What You Get</span>
      <h2>A Pepper alternative that adds instead of replacing</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>They talk. It comes out as a list.</h3>
          <p class="mt-12 text-muted">
            A chef counts the walk-in and says what is short. Each item turns into a line you can
            read, with the quantity beside it. Nothing to type, no time on hold, and no voicemail for your team to piece together in the morning.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>They press to speak, then read the lines back before sending</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>From the cooler or the line, whatever time the shift ends</span>
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
              <span>Nobody writes up a reorder from an account on the app, so the reps get that time to sell</span>
            </li>
          </ul>
          <a href="/order-taking-software" class="feature-link">How our app takes orders →</a>
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
          <h3>Each account gets a list of its own</h3>
          <p class="mt-12 text-muted">
            You hand over the guides each kitchen already buys from. We load each guide with your SKUs and the prices you set for that account, so each item a customer says matches the right SKU.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Each account sees only what it actually orders from you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your prices, your SKUs, under your control, not the customer's</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Change a guide once and it holds from then on</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You keep the catalog; the customer gets the convenience</span>
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
          <h3>The order shows up in a shape you already handle</h3>
          <p class="mt-12 text-muted">
            Nobody in your office has to work somewhere new. Finished orders go out as email
            with a PDF, Excel or Word file, or straight into your ERP over the API, over EDI, or
            into QuickBooks.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Email goes to a rep or straight to your purchasing team</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI, the API or QuickBooks, nobody on your team retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your pick, invoice and delivery steps stay exactly as they are</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You do not have to remove any software first</span>
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
          <h3>Watch stock move as the orders land</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions gives you real-time inventory visibility tied to what is being ordered, and the catalog
            updates as levels change. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Visibility across the catalog, not just the fast movers</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stockouts surprise you less often when a big order lands late</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Stock numbers come from the system you count with today</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Counting never happens in our app</span>
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
     SECTION 12: HOW IT WORKS
     ============================================================ -->
<section class="section-pad" id="how-it-works" aria-label="How it works">
  <div class="container">
    <div class="text-center" style="max-width: 580px; margin: 0 auto;">
      <span class="eyebrow">Getting Started</span>
      <h2>Three steps, and nothing to move off Pepper</h2>
      <p class="lead mt-16">
        Pepper is left exactly as it is. Send us the guides your office works from, and we
        do the loading.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Send over your guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever form they are in now. We load each account's items and your prices
          into one admin screen, matched to your SKUs.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Your accounts get the app</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We create the account and the kitchen downloads the app. Most are ordering
          before that day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>The order arrives ready</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The customer has confirmed it, and it carries an order number and the time it was sent, in the format your system takes.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VoiceOrder Solutions admin platform showing customer accounts and order guide upload
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 13: TESTIMONIALS
     ============================================================ -->
<section class="section-pad bg-light" id="testimonials" aria-label="Customer testimonials">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">Real Teams. Real Results.</span>
      <h2>What customers say once it is running</h2>
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
            "We already had the platform. What we needed was a way in for the accounts that still called, and setup was quick, with the guides as the only homework."
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
            "The part that sold our order desk was the customer checking the list
            themselves. We stopped calling kitchens back about lines nobody could make out."
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
      <span class="eyebrow">Side By Side</span>
      <h2>What Pepper keeps and what the voice step adds</h2>
      <p class="lead mt-16">
        VoiceOrder Solutions is no Pepper replacement, and it is not trying to be one. Adding it means taking nothing out, so the platform you rolled out stays exactly where it is.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🛍️</div>
        <h4>Keep the storefront, add the voice</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Some accounts are never going to browse a catalog. They will talk instead, late in the evening, from the walk-in. The storefront stays for the ones who tap, and our app picks up the ones who talk.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧪</div>
        <h4>Try it on the accounts still calling</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          It goes in beside Pepper with no big setup project. Start with the few accounts that never took to the storefront, and judge it on those before deciding anything bigger.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📬</div>
        <h4>Orders still land in your usual place</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Both feed the system you have, so our app does not change where an order ends up. It arrives by EDI, through the API or in QuickBooks, into the system your people already use, or by email as a file.
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
      <h3 style="margin-bottom:10px;">Follow one spoken order from a kitchen to your desk</h3>
      <p class="text-muted" style="font-size:16px;">
        Book 20 minutes. We take one order through to the format it arrives in, so you can see where it lands beside your Pepper orders.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 13: FAQ
     Eight items, to match the eight accordion slots on the Webflow page.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Questions from distributors who are keeping Pepper</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do we need a Pepper alternative so kitchens can check their own spoken orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Pepper can stay as it is, Order Agent included, while we add an app where kitchens say what they need and check every item themselves. The ones already ordering on Pepper's storefront carry on there. Nothing has to be switched off to try it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Pepper?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, not at running the whole business on one platform: storefront, reps, collections and pricing. Pepper is built wide for that, and we are not trying to be. We help with one narrower job: a reorder your account speaks and signs off. Plenty of people looking for a Pepper alternative turn out to want exactly that.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is there a link between VoiceOrder Solutions and Pepper?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          None. We have no connection to Pepper and no shared support arrangement. Each product hands its orders to your own system separately, ours by email with a file attached, over EDI or the API, or into QuickBooks. When ours are fed directly into your system, both products' orders end up in the same place. Emailed, ours arrive as a file your team opens like any other.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will our accounts be juggling Pepper's storefront and your app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They should not have to. Kitchens already ordering through the storefront can stay on it. Offer our app to the ones who still call, text or leave a voicemail, because those orders cost your desk the most time. Customers who keep calling are handled the way they are today. Their calls get no order number from us, because numbers are only given to app orders.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly can we actually be taking orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors reach that point in a day or two, and most of their customers send a first order the same day. There is no IT project, and Pepper carries on as normal. That is a much smaller job than the setup window Pepper publishes for its whole platform.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does VoiceOrder Solutions charge?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We quote by distributor, so tell us about your operation and we will price it. Pepper quotes too and publishes no rate card. Since you would be keeping Pepper, the figure worth asking for is what our app adds on top.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do our customers need new hardware or a tablet?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Our app runs on the phone already in their pocket. We send nothing out, there is nothing to bolt to a counter, and no device for you to support.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Pepper details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Pepper's own website. The module list, the storefront and Order Agent descriptions and the implementation window were all read off usepepper.com on 10 October 2026, including their own post on how long an implementation takes. We have not repeated their marketing numbers here. If any of it has changed since, this page is the thing that is out of date, not them.
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
  <h2>Keep Pepper. Stop writing up the phone orders.</h2>
  <p>Twenty minutes, one real order, and a straight answer on what setup involves.</p>

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
        <li><a href="#comparison">Pepper + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/distributor-sales-software">Distributor Sales</a></li>
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
