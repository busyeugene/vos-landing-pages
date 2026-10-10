/* Comparison page: VOS vs GrubMarket AI. `compare` block order (see template.js).
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
  description: 'GrubAssist hands your team a voice assistant. This GrubMarket AI alternative hands your customers the app, so your team never builds the order.',
  related: ["rekki-alternative","wizcommerce-alternative","cut-dry-alternative"],
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
      <h1>A GrubMarket AI Alternative Your Buyers Hold.</h1>
      <p class="lead mt-16">
        Both products run on voice. The difference is who is talking. VOS is a GrubMarket AI
        alternative where the kitchen speaks the order into the app on its own phone and approves it,
        so what reaches your desk is finished. Nobody on your side builds the order.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">Compare The Two</a>
      </div>

      <div class="hero-trust">
        <span>Your customer holds the mic</span>
        <span class="hero-trust-dot"></span>
        <span>Nothing to change in your ERP</span>
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
      <div class="stat-label">Won back on each order that leaves the phone</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is all most distributors wait to go live</div>
    </div>
    <div>
      <div class="stat-number">24/7</div> <div class="stat-label">Is when an account can send one</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Rows 2 and 3 go to GrubMarket. Both are real and both are marked.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Who Is Talking</span>
      <h2>VoiceOrder Solutions vs GrubMarket AI.<br>Same technology, other end.</h2>
      <p class="lead mt-16">
        VOS puts the app in your customers' hands. GrubAssist is an assistant for your own staff that can also build an order, which is the distinction that matters when a GrubMarket AI alternative comes up. Both products use it, so the rows below mark whose hands it is in.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">VoiceOrder Solutions</th>
            <th style="width:30%;">GrubMarket AI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>An app your customers speak the order into</td>
            <td><span class="check-yes">✓</span></td>
            <td>Described for your own team</td>
          </tr>
          <tr>
            <td>Your buyer signs the order off before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies by route in</td>
          </tr>
          <tr>
            <td>Answers questions about your business by voice</td>
            <td>Order history in the admin screens</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account has its own list, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Pulls orders out of voicemails, emails and texts</td>
            <td>Spoken into the app</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Order number and the time it was sent</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Something to train or tailor first</td>
            <td>Nothing to train</td>
            <td>An AI training module</td>
          </tr>
          <tr>
            <td>How long until it is running</td>
            <td>24-48 hours for most</td>
            <td>No timeline published</td>
          </tr>
          <tr>
            <td>What changes on your order desk</td>
            <td>The order arrives built and approved</td>
            <td>An assistant, extraction, chatbots, pricing data</td>
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
        GrubMarket AI calls GrubAssist a virtual assistant for the food supply chain, and the
        jobs it advertises are business analysis, performance, cash flow and spotting anomalies,
        with order creation among them. All useful. None of it stops your customer sending a message for somebody to interpret,
        which is where a GrubMarket AI competitor usually gets raised.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🎤</div>
        <h4>The microphone is pointed the wrong way</h4>
        <p class="text-muted mt-12">
          An assistant your staff talk to still means your staff are the ones entering the order.
          Faster entry is better than slow entry, but it is not the same as the order arriving
          already built by the person who wanted it.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🎛️</div>
        <h4>There is a model to tailor</h4>
        <p class="text-muted mt-12">
          They ship a training module precisely because an assistant has to be taught your
          business. That is honest engineering, and it is also a project with an owner, a backlog
          and a before-and-after.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧩</div>
        <h4>A product set when you needed one</h4>
        <p class="text-muted mt-12">
          An assistant, order extraction, chatbots, market pricing data. Buying the piece you
          actually want can mean sitting through a demo of three you do not, and then deciding
          which ones you are paying for.
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
      <h2>What a GrubMarket AI alternative does from the other side</h2>
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
              <span>Nothing arrives that the buyer has not looked at</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>From a walk-in or a bench, whenever the shift ends</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Their own handset, nothing issued and nothing installed for you</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>20 to 30 minutes back against the same order by phone</span>
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
            Nothing gets taught here. You send the lists you already keep per customer, we load
            them against your SKUs at the prices you hold for that account, and the configuration
            is finished.
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
              <span>Change a list once and it stands on the orders after</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No tuning as volumes or categories grow</span>
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
          <h3>Delivered in whatever shape you asked for</h3>
          <p class="mt-12 text-muted">
            A finished order leaves as an email carrying a PDF, Excel or Word file, or goes
            straight into your ERP over the API, over EDI, or into QuickBooks, in a shape your desk opens daily.
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
          <h3>What is on hand, as the orders come in</h3>
          <p class="mt-12 text-muted">
            VOS carries real-time inventory visibility tied to what is being ordered, and the catalog updates as stock levels change. It is not the system of record for stock: yours stays in
            charge, and a demo shows how the levels connect.
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
      <h2>Three steps, and no model to teach</h2>
      <p class="lead mt-16">
        Nothing has to be trained and no pilot has to be designed. You send lists, we open accounts,
        your customers order.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Share your price lists</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever format they are already in. Each account's lines and your prices
          go into a single admin screen, lined up with your codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We switch each account on</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts get created and the kitchen gets shown the app. Most send
          something in before the day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>It shows up done</h4>
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
            "We were shown a tool to help us type faster. What we wanted was to
            stop being the ones typing."
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
            "Nobody had to teach it our catalog. We sent the lists and accounts were speaking orders in within a couple of days."
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
      <h2>When VOS and GrubMarket AI work together</h2>
      <p class="lead mt-16">
        VOS is not a GrubMarket AI replacement and does not try to be. It adds on, so an assistant the team already leans on is no reason to leave this alone.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🙋</div>
        <h4>Keep the assistant for the questions</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Asking out loud how a customer is trending, or where the cash is, is a genuinely useful
          thing and VOS cannot do it. Those questions keep their home, and the order stops being
          one of them.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📉</div>
        <h4>Shrink the pile that needs extracting</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each account you move across sends a structured, approved order rather than a voicemail.
          Whatever is doing the extracting has less to work through, and the hardest messages are
          the ones that leave first.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📬</div>
        <h4>One place for it to land, whatever else you run</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever you add, the order still lands in the one system you chose, over EDI, the API or QuickBooks, so nobody ends up with two places to look.
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
      <h3 style="margin-bottom:10px;">See an order arrive already finished</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. A buyer speaks an order, approves it, and it arrives on the desk as a PDF, over EDI or over the API.
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
      <h2>What gets asked when two voice tools go head to head</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is VOS a real GrubMarket AI alternative if both use voice?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          They use the same technology at opposite ends. GrubAssist is for your staff: ask it about the business, have it write up an order. VOS is for your customers: they speak it and approve it, so your staff never build one. If the goal is to get the work off
          your desk rather than speed it up, that difference is the whole decision.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS better than GrubMarket AI?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For getting an order in without anyone on your side building it, we think so, because
          the buyer does the work and signs it off. For asking your data questions out loud, no,
          and not by a little: VOS does not do that at all. This is the usual reason a GrubMarket
          AI alternative is weighed rather than simply chosen.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can VOS tell us how a customer is performing?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. You can see what an account has ordered, in the admin screens, and that is the extent of it. Business analysis, cash flow, anomaly spotting: all of that is on their list and
          none of it is on ours. Worth knowing before you shortlist us against them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do we have to teach VOS our catalog?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, and there is no module for it, because nothing has to be taught. The item list you
          keep for an account is the configuration. Load it, and spoken items land on the right
          rows at the price you hold.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does any of this touch our ERP?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only to hand it the order. It never goes near your ERP beyond handing in what the buyer approved. GrubAssist connects to an ERP so it can answer questions about the business; VOS only ever delivers into one. Everything downstream behaves exactly as it did yesterday.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How does the pricing compare?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Neither of us publishes a figure. Ours arrives as a quote once we know your setup. Theirs comes after a demo. With that much on their side, the thing to
          pin down is which ones the quote actually covers.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon could our accounts be ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors this is live inside 24 to 48 hours, and most kitchens place one the same day. There is no training phase, which is the bulk of the difference. They
          publish no timeline, so ask them for one rather than take a number from us.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          And the accounts that will only ever call?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They carry on telephoning, and your desk deals with those the way it always has. Be clear about the
          limit though: a call or a voicemail gets no order number from VOS, no timestamp and nothing moving in stock. Only what comes through the app does.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the GrubMarket details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Taken from grubmarket.ai on 10 October 2026, which is the GrubMarket AI product rather than GrubMarket the company: the GrubAssist description, the list of
          advertised jobs, the training module and the other products all come off that page.
          They publish no price and no rollout time, so this page does not guess at either. If
          any of it has moved on, the fault is here, not there.
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
  <h2>Put the microphone in the right hands</h2>
  <p>Twenty minutes, with the microphone in your customer's hand, not your clerk's.</p>

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
        <li><a href="#comparison">VOS vs GrubMarket AI</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
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
