/* Comparison page: Choco, and Choco with VoiceOrder Solutions added. `compare` block order (see template.js).
 * REFRAMED 2026-10-21 (client, via Eugene): keep the "choco alternative" keywords, but present
 * VoiceOrder Solutions as the voice step a distributor ADDS next to Choco, never as its
 * replacement. The client is much smaller and would lose a head-to-head. So the table is
 * "Choco + VoiceOrder Solutions" against "Choco on its own": the left column never loses,
 * because adding a tool takes nothing away, and Choco keeps every one of its real wins.
 * The two products do NOT connect. Say so (FAQ 4); never imply an integration or partnership.
 * Brand: "VoiceOrder Solutions" in full on these pages, never "VOS" (client, 2026-10-21).
 * Every Choco claim is sourced and dated in _build/research/competitors/choco.md.
 */
module.exports = {
  title: "Choco Alternative for Food Distributors in 2026",
  description: 'Keep Choco and add voice ordering beside it. Your accounts speak each order into an app and approve every line. A Choco alternative that replaces nothing.',
  related: ["pepper-alternative","cut-dry-alternative","bluecart-alternative"],
  relatedHeading: "Other platforms you can keep and add voice to",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Looking For A Choco Alternative For Voice Ordering?</h1>
      <p class="lead mt-16">
        Add voice ordering without giving anything up. VoiceOrder Solutions runs alongside Choco: kitchens talk through what they are short of in our app, confirm each item, then send. It lands on your desk numbered and dated, by email or straight into your system, while Choco keeps its storefront and customer tools.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Choco stays as it is</span>
        <span class="hero-trust-dot"></span>
        <span>Orders land after you close</span>
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
      <div class="stat-label">Is how long setup runs for most</div>
    </div>
    <div>
      <div class="stat-number">24/7</div> <div class="stat-label">Covers the hours your desk does not</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the distributor's operation with both tools, column 3
     with Choco alone, so every Choco strength is a tick in BOTH columns and the only
     differences are the two things the voice step adds. Keep it that way: a row VoiceOrder
     Solutions "wins" against Choco puts the page back into the comparison the client
     asked us to leave.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Add, Don't Swap</span>
      <h2>Choco plus VoiceOrder Solutions.<br>Nothing to switch off.</h2>
      <p class="lead mt-16">
        Adding voice ordering should not take anything away, and the table below is drawn to show it. Most searches for a Choco alternative start with one gap, not a broken platform, so below is Choco today, then Choco with our app beside it. The two do not connect, and everything said about Choco comes from their own site.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Choco + VoiceOrder Solutions</th>
            <th style="width:30%;">Choco on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kitchens order by speaking into an app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Tap to order in their app</td>
          </tr>
          <tr>
            <td>AI storefront with personal recommendations</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>The person ordering checks each line before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>Depends on how it arrives</td>
          </tr>
          <tr>
            <td>Voicemails, texts and photos of notes turned into orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Sales tools plus CRM</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account has its own list, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Order number and time stamped on arrival</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Orders come in after your office closes</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders reach the system you already run</td>
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
      <h2>Why teams look for an alternative to Choco</h2>
      <p class="lead mt-16">
        Choco calls itself an AI platform for food and beverage wholesalers. It turns incoming orders into digital ones, runs an online catalog that recommends products, and includes sales tools and a customer database (CRM) for foodservice. None of that is a flaw. A Choco alternative search usually starts with one small gap. Replacing a whole platform to fix it is far too much.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Some kitchens never take to tapping through an app</h4>
        <p class="text-muted mt-12">
          Every ordering platform has some accounts that keep calling, texting or leaving a
          voicemail at 10pm. They like the person on the other end more than a screen of buttons,
          and those are the orders that still eat your morning.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🖊️</div>
        <h4>AI reads the message, but the kitchen never checks what it read</h4>
        <p class="text-muted mt-12">
          Choco's OrderAgent lifts an order out of a voicemail, a text, even a snapshot of a
          handwritten pad, which is a genuinely clever bit of engineering. But the cook who left
          that note never saw the lines your desk ended up with.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧩</div>
        <h4>You want a single fix, not all new software</h4>
        <p class="text-muted mt-12">
          Swapping Choco out would mean rebuilding the storefront, the sales routine and the customer records your reps lean on. That is a lot of change to buy when the trouble is the telephone.
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
    <div class="text-center" style="max-width: 580px; margin: 0 auto 72px;">
      <span class="eyebrow">What You Get</span>
      <h2>The Choco alternative that leaves Choco in place</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Orders built by whoever is in the cooler</h3>
          <p class="mt-12 text-muted">
            Your account opens the app, presses to speak, and says what the kitchen is short of.
            Every item appears as a line with a quantity against it. They review it, change what
            needs changing, and only then does it leave.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing is sent until your customer has looked at the list</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Works from the cooler or the prep bench, at any hour</span>
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
              <span>Reps stop writing up reorders from accounts on the app, so that time goes into selling</span>
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
          <h3>One item list per account, built from yours</h3>
          <p class="mt-12 text-muted">
            Pass us the guides you keep per customer. We load them with your SKUs and the price you set for that account, so each spoken item is matched to your own SKU.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>A kitchen only ever sees what it actually buys</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog and the pricing stay yours to set</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit a list once and it holds on the orders after</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No browsing and no shopping cart</span>
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
          <h3>It arrives however your office likes it</h3>
          <p class="mt-12 text-muted">
            Your office does not change how it works. A finished order goes out as an email with a PDF,
            Excel or Word file attached, or straight into your ERP over the API, over EDI, or into
            QuickBooks.
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
          <h3>Stock you can see while the orders arrive</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions shows real-time inventory visibility tied to what is being ordered, and the catalog updates as stock levels change. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
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
      <h2>Short enough to finish this week</h2>
      <p class="lead mt-16">
        There is no data project to start, and nothing inside Choco changes. You send item lists, we set the customers up, and your customers begin sending orders.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Hand us the item lists</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet is fine. Each account's items and your prices go into a single admin screen, lined up with your SKUs.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Your accounts get opened</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We set up each account, and the customer downloads the app. Most have sent something
          in by the end of the day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Your order arrives finished</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The customer has approved it, and it carries a number and the time it was sent, in the format your system takes.
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
      <h2>How it lands with the people using it</h2>
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
            "Our regulars like saying the order and checking it on screen. Most mornings it is waiting when we open."
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
            "Our chefs check the list on screen before it goes. That one habit
            took the guesswork out of Monday mornings for the whole desk."
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
      <h2>How Choco and VoiceOrder Solutions split the work</h2>
      <p class="lead mt-16">
        We are not a Choco replacement, and we would rather you did not treat us as one. Our app adds on, so your storefront stays exactly as it is while you try it.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🛍️</div>
        <h4>Let the catalog sell, and let voice take the order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A storefront that suggests items works best for a kitchen buyer who has time to browse. A quick reorder at the end of a shift is a different moment. The two can work together.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕗</div>
        <h4>Give each account the way in it prefers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Kitchens that are happy tapping through Choco's app can stay there. Offer the voice app
          to the ones who still call or text, which is where speaking the order helps most.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📬</div>
        <h4>Orders land where they already land</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever you add, the order still arrives into the system you chose, or as an email to your desk. Nobody has to learn a new screen to receive it.
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
      <h3 style="margin-bottom:10px;">See where voice ordering fits beside Choco</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. One spoken order, beginning to end, and how much time it can save on each order.
      </p>
    </div>
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg" style="flex-shrink:0;">Book a Free Demo →</a>
  </div>
</section>


<!-- ============================================================
     SECTION 13: FAQ
     Eight items, to match the eight accordion slots on the Webflow page, so nothing has to
     be merged at port time.
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 560px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Better than Choco, or best used with it?</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a Choco alternative to get voice ordering?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. You can keep Choco exactly as it is and add VoiceOrder Solutions next to it. Accounts keen to talk get our app; the ones happy in Choco's app stay put. Nothing
          has to be switched off first, and nothing in Choco has to change.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Would that make VoiceOrder Solutions a Choco competitor?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only in the narrow sense that both take orders. We do not run storefronts, sales tools or a CRM, and we do not want you to give those up. Most people who search for a Choco alternative want one thing added: an order the kitchen speaks and approves. They do not want a platform taken away.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Choco?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, not at what Choco is built for: larger orders, tools for reps and customer records. We are stronger at one narrower job. The customer approves every item before it goes, so nobody at your end interprets a message. That is why we belong beside Choco, not in its place.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VoiceOrder Solutions connect to Choco?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. The two are separate products, and each vendor supports only its own. Each one sends its own orders into your system. Ours come in the formats shown above, which your desk knows how to handle.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Won't some kitchens end up with two ordering apps?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only if you set it up that way, and mostly you should not. Leave the accounts that like
          Choco's app where they are and offer ours to the ones still on the phone. Calls keep
          coming to your desk as they do today, just without an order number from us, because
          only what is sent through our app gets one.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How soon can our accounts start?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are up and running within 24 to 48 hours, and most of their customers place a first order that same day. There is no IT project, and Choco carries on as normal throughout, so there is no switch-over date to plan around.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does adding VoiceOrder Solutions cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We quote each distributor separately and list no prices. Choco's own pricing page says it charges
          a monthly fee based on usage and asks you to talk to sales. Since you would be keeping
          Choco, the useful question is what the voice step adds on top, and a quote answers it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Choco details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Choco's own site, read on 10 October 2026: the module names and descriptions off the
          homepage and the usage-based line off their pricing page. We have not repeated the
          growth figures they publish, because those are their numbers and not ours to vouch for.
          If any of it has moved on since, this page is what needs correcting.
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
  <h2>Keep Choco. Get the phone orders off your morning.</h2>
  <p>Twenty minutes, one real order, and a clear view of what changes.</p>

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
        <li><a href="#comparison">Choco + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/inventory-visibility-software">Inventory Visibility</a></li>
        <li><a href="/dsd-sales-software">DSD Sales</a></li>
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
