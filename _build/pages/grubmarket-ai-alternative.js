/* Comparison page: GrubMarket AI, and GrubMarket AI with VoiceOrder Solutions added. `compare` block order.
 * REFRAMED 2026-10-21 (client): keep the keywords, present VoiceOrder Solutions as the customer-side
 * voice step a distributor ADDS beside GrubAssist, never its replacement. The two do not connect (FAQ 4).
 * Brand in full on these pages, never "VOS". Older angle notes below still describe the facts.
 * Angle, distinct from the other three compare pages: GrubAssist is ALSO voice-powered and
 * mobile, so the contrast is whose hands the microphone is in. Every one of GrubAssist's own
 * use-case tags is inward facing (business analysis, performance, cash flow, anomalies): it is
 * an assistant for the distributor's team that can also create an order. VOS puts the app in the
 * customer's hands, so there is no order left for the team to create.
 * Second distinction: their AI Training Module means there is something to train. On VOS the
 * order guide is the whole configuration.
 * GrubMarket wins two rows outright (voice business analysis, and inbound channel extraction).
 * They publish no price and no timeline, so neither is used as an argument.
 * Every claim is sourced and dated in _build/research/competitors/grubmarket-ai.md.
 */
module.exports = {
  title: "GrubMarket AI Alternative for Distributors in 2026",
  description: "Keep GrubAssist for your team and hand your customers a voice app too: they speak and approve each order. A GrubMarket AI alternative that keeps GrubAssist.",
  related: ["rekki-alternative","wizcommerce-alternative","cut-dry-alternative"],
  relatedHeading: "Keep these platforms too, and add voice for customers",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>GrubMarket AI Alternative? Give Customers A Voice App.</h1>
      <p class="lead mt-16">
        Kitchens can now say what they need, too. VoiceOrder Solutions runs beside GrubAssist, GrubMarket's AI assistant for your team: the kitchen dictates the order into our app on its own phone, approves each line, and it lands on your desk complete. Your team keeps GrubAssist for questions about the business.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>GrubAssist stays with your team</span>
        <span class="hero-trust-dot"></span>
        <span>Kitchens speak, then check</span>
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
      <div class="stat-label">Saved on each order taken off the phone</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is how long most distributors wait to go live</div>
    </div>
    <div>
      <div class="stat-number">24/7</div> <div class="stat-label">Is when an account can place its order</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Reframed 2026-10-21: see the note inside the section.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <!-- Reframed 2026-10-21: GrubMarket AI alone vs with VoiceOrder Solutions added. Their strengths are ticks in both columns; only the customer-side app and the buyer sign-off differ. All their facts come from grubmarket.ai ONLY (not grubmarket.com): see the digest. -->
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Team And Customers</span>
      <h2>GrubMarket AI plus VoiceOrder Solutions.<br>One for your team, one for your customers.</h2>
      <p class="lead mt-16">
        Adding an app for your customers takes nothing away from your team's tools. Anyone weighing a GrubMarket AI alternative for voice ordering should see both sides, so each row shows GrubMarket AI as you run it today, then with our app added. The two are not connected, and everything said about them is read off grubmarket.ai.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">GrubMarket AI + VoiceOrder Solutions</th>
            <th style="width:30%;">GrubMarket AI on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>An app your customers speak the order into</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not described for customers</td>
          </tr>
          <tr>
            <td>Answers questions about your business by voice</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Your customer signs off the order before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies by how the order arrives</td>
          </tr>
          <tr>
            <td>Pulls orders out of voicemails, emails and texts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account has its own list, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Chatbots trained on your products</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Market pricing data on thousands of products</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Custom AI built by their developers</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order number and the time it was sent</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not described on grubmarket.ai</td>
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
      <h2>Why teams want an alternative to GrubMarket AI</h2>
      <p class="lead mt-16">
        GrubMarket AI calls GrubAssist a virtual assistant for the food supply chain. The jobs it advertises include business analysis, performance, cash flow, spotting unusual numbers and creating orders. All useful, and worth keeping. A GrubMarket AI alternative search usually starts from one gap: the customer still sends a message that somebody has to work out.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🎙️</div>
        <h4>Their site describes an assistant for your team</h4>
        <p class="text-muted mt-12">
          The jobs GrubAssist advertises are ones a distributor's team does: looking into the numbers and writing up orders. Even if that speeds up order entry, it is not the same as the customer building the order themselves.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📨</div>
        <h4>Their AI still starts from a loose message</h4>
        <p class="text-muted mt-12">
          GrubMarket's order-reading tool reads voicemail, email and text messages at any hour, which is useful. Each one still begins as a message, though, and the kitchen that sent it never sees the lines it became.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📊</div>
        <h4>The assistant is the part worth keeping</h4>
        <p class="text-muted mt-12">
          If GrubAssist already tells your team how accounts are trending, swapping it out to change how ordering works would throw away the bit that does its job.
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
      <h2>A GrubMarket AI alternative for the customer's side</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The kitchen talks, and your desk reads</h3>
          <p class="mt-12 text-muted">
            A chef counts what is low and says it into their own phone. Each item comes up as a
            line with a quantity, they correct anything wrong, and they send it. That is the
            whole exchange, and your team is not in it.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing arrives that your customer has not looked at</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>From a walk-in or a bench, whenever the shift ends</span>
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
          <h3>Your lists are the only setup there is</h3>
          <p class="mt-12 text-muted">
            There is nothing to train. You send the lists you already keep for each customer. We load them with your SKUs and the prices you set for that account, and setup is done.
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
              <span>Change a list once and the next orders follow it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing to adjust as orders or product lines grow</span>
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
          <h3>Delivered in the format you asked for</h3>
          <p class="mt-12 text-muted">
            A finished order leaves as an email carrying a PDF, Excel or Word file, or goes
            straight into your ERP over the API, over EDI, or into QuickBooks, in a format your desk opens every day.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a rep, or to the purchasing desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI, the API or QuickBooks, nobody on your team retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Picking, billing and delivery carry on unchanged</span>
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
          <h3>What is on hand, as the orders come in</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to what is being ordered, and the catalog updates as stock levels change. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
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
      <h2>Three steps, and no AI to train</h2>
      <p class="lead mt-16">
        Nothing has to be trained, and there is no trial run to plan. You send lists, we set up accounts, and the ordering starts.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Share your order guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever format they are already in. Each account's lines and your prices
          go into a single admin screen, lined up with your codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up each account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each kitchen downloads the app once its account is ready. Most send something in before the day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>The order shows up done</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your customer has approved it, and it is numbered and timestamped, in the format your system takes.
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
      <h2>What changes on the desk in week one</h2>
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
            "Our kitchens speak their list and check it before it goes. It fits how they already work."
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
            "Nobody had to teach it our catalog. We sent the lists we already keep."
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
      <span class="eyebrow">Your Team, Your Customers</span>
      <h2>GrubAssist for your team, VoiceOrder Solutions for your customers</h2>
      <p class="lead mt-16">
        We are not a GrubMarket AI replacement and do not try to be. Our app covers the customer end, so the tool your staff rely on is left alone.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">💬</div>
        <h4>Keep GrubAssist for business questions</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Asking out loud how a customer is trending, or where the cash is, is a genuinely useful thing and we cannot do it. Keep it for those questions, and let the customer build the order.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📉</div>
        <h4>Fewer messages for the AI to read</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each account you move across sends an itemized, approved order rather than a voicemail. Whatever tool reads your messages today keeps handling the ones that still come in.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📍</div>
        <h4>One place for these orders to land</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          When our orders travel by EDI, API or into QuickBooks, they reach the same software as everything else, so nobody ends up with two places to look.
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
      <h3 style="margin-bottom:10px;">See a customer-spoken order arrive</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. A customer speaks an order, approves it, and it arrives on the desk as a PDF, over EDI or over the API.
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
      <h2>Better than GrubMarket AI, or the customer app to run beside it?</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a GrubMarket AI alternative so customers can speak their own orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. GrubAssist can keep serving your team while VoiceOrder Solutions gives each account its own voice app: speak, check, send. Nothing on your side has to be switched off or retrained.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions a GrubMarket AI competitor, since both use voice?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Less than it looks. GrubAssist, going by their own site, works for your team: ask it about the business, have it write up an order. Ours is for your customers, who speak and approve their own orders, so your staff never write up anything placed in our app. That is why a team looking at a GrubMarket AI alternative to get voice orders can simply run both.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can your app tell us how a customer is performing?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Our admin screen shows what each account has ordered and lets you manage accounts and guides. GrubAssist advertises reporting on how accounts perform and we do not, which is a good reason to keep it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is there any link between GrubAssist and your app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          None. Nothing links the two, and neither company supports the other. GrubAssist connects to your ERP so it can answer questions about the business; we only ever deliver approved orders into your system, in the formats listed further up.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we have to teach your app our catalog?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is nothing to teach, so there is no training tool for it. The item list you keep for an account is all the setup it needs. GrubMarket AI offers an AI training module for its assistant, and that stays theirs to run.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon could our accounts be ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors this is live inside 24 to 48 hours, and customers usually place a first order the day they get their login. GrubAssist carries on as before while it happens. Accounts that keep calling still can; a call just gets no order number or timestamp from us.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How is voice for customers priced next to GrubAssist?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Neither of us publishes a figure. Ours arrives as a quote once we know your setup; theirs comes after a demo. Keeping GrubAssist means the only cost to weigh is the voice app for your customers.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the GrubMarket details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Taken from grubmarket.ai on 10 October 2026, which is the GrubMarket AI product rather than GrubMarket the company: the GrubAssist description, the list of advertised jobs, the training module and the other products all come off that page. They publish no price and no rollout time, so this page does not guess at either. If any of it has changed since, the mistake is ours to fix.
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
  <h2>Leave GrubAssist with your team. Let each kitchen speak its order, too.</h2>
  <p>Twenty minutes, with a customer speaking the order.</p>

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
        <li><a href="#comparison">GrubMarket AI + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/distributor-analytics-software">Distributor Analytics</a></li>
        <li><a href="/order-taking-software">Order Taking</a></li>
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
