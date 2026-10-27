/* Comparison page: Cut+Dry, and Cut+Dry with VoiceOrder Solutions added. `compare` block order (see template.js).
 * REFRAMED 2026-10-21 (client, via Eugene): keep the "cut+dry alternative" keywords, but present
 * VoiceOrder Solutions as the spoken reorder added beside Cut+Dry, never as its replacement.
 * Cut+Dry keeps every real win as a tick in BOTH columns: storefront, payments, invoicing, rep tooling.
 * The original angle (who else is in the room when your customer orders) survives as one table row
 * and one FAQ about our own app. Cut+Dry's AI Order Desk transcribes calls and voicemails, so the page
 * never says they cannot take a voice order. The two products do NOT connect (FAQ 3).
 * Every claim is sourced and dated in _build/research/competitors/cut-dry.md.
 */
module.exports = {
  title: "Not a Cut+Dry Alternative: Keep Cut+Dry, Add Voice Ordering",
  description: "Keep the Cut+Dry storefront and payments, and add a reorder your accounts speak from your own guide. A Cut+Dry alternative that sits beside it instead.",
  related: ["bluecart-alternative", "choco-alternative", "grubmarket-ai-alternative"],
  relatedHeading: "Other tools you can keep while adding voice",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Not A Cut+Dry Alternative: Add Spoken Reorders</h1>
      <p class="lead mt-16">
        Give your phone accounts a reorder they check themselves, and leave the platform alone. VoiceOrder Solutions goes next to Cut+Dry: your accounts say the reorder into our app from the guide you built, approve it, and send. Payments, invoicing and the storefront stay where they are.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Cut+Dry keeps running</span>
        <span class="hero-trust-dot"></span>
        <span>Orders in after you close</span>
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
      <div class="stat-label">Freed up on each order taken off the phone</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Is the go-live window for most distributors</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">first order for most kitchens</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head (client, 2026-10-21). Column 2 is the distributor's operation with
     both tools, column 3 with Cut+Dry alone, so every Cut+Dry strength is a tick in BOTH columns.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Plus, Not Instead</span>
      <h2>Cut+Dry, plus VoiceOrder Solutions.<br>Plus a spoken reorder.</h2>
      <p class="lead mt-16">
        A second tool should only add, so the column with both products has a checkmark on every row. Cut+Dry is a wide platform, with ordering, payments and tools for reps. A Cut+Dry alternative search tends to start with the accounts that use none of it. The two do not connect, and every fact about Cut+Dry comes from their own site.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Cut+Dry + VoiceOrder Solutions</th>
            <th style="width:30%;">Cut+Dry on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kitchens speak their reorder into an app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Spoken calls transcribed into orders</td>
          </tr>
          <tr>
            <td>A storefront with intelligent search and product discovery</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders hold if the cook is pulled away mid-list</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Integrated digital payments and automated invoicing</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Customer data, notes and pricing for reps in one place</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account has its own guide, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Ordering open around the clock</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Your customer checks the order before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>On the storefront, yes</td>
          </tr>
          <tr>
            <td>Manufacturer product data, images and nutritionals</td>
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
      <span class="eyebrow">The Usual Trigger</span>
      <h2>What actually sends people looking for an alternative to Cut+Dry</h2>
      <p class="lead mt-16">
        Cut+Dry calls itself online ordering and sales tools for foodservice. It serves distributors, manufacturers and restaurants from one platform. That breadth is the product, and replacing it rarely makes sense. What sends a buyer to a Cut+Dry competitor is usually one narrower thing.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Some accounts would rather talk than tap</h4>
        <p class="text-muted mt-12">
          Ordering at any hour only helps the kitchens that open the storefront. Plenty still call the office or leave a message instead, and someone at your end writes each one up.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🎙️</div>
        <h4>Who checks what their AI transcribed?</h4>
        <p class="text-muted mt-12">
          Cut+Dry's AI Order Desk turns calls and voicemail messages into orders, which is genuinely useful. Their own description mentions no step where the kitchen confirms what was transcribed, so the first person to check those lines is on your side.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧱</div>
        <h4>Starting over is the expensive fix</h4>
        <p class="text-muted mt-12">
          Cut+Dry publishes "Go Live in Under 90 Days", a good result for a platform that size. Going through a launch like that again, and changing how your customers pay, just to fix phone orders makes no sense. No Cut+Dry alternative should ask that of you.
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
      <h2>A Cut+Dry alternative you add rather than swap in</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Spoken, then fixed on screen</h3>
          <p class="mt-12 text-muted">
            Your account holds the button and says what is short. Items come up as lines with quantities from their own guide, they correct anything off, and they send.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Your customer looks at the list before anything leaves</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Said in the kitchen at any hour you are closed</span>
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
          <h3>Every guide begins as the list you keep now</h3>
          <p class="mt-12 text-muted">
            Pass us the guides you keep per customer. We load them with your SKUs and the price you set for that account, so the kitchen orders your products at your prices.
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
              <span>Change a guide once and every later order uses it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each line ties back to your own SKU</span>
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
          <h3>Stock beside the orders as they come</h3>
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
              <span>Nothing gets counted in our app</span>
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
        Nothing here needs a project plan, and Cut+Dry carries on as normal. You send guides, we set up accounts, your kitchens start ordering.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Hand us your guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whatever format they are already in. Each account's lines and your prices
          go into a single admin screen, lined up with your codes.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up each account</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We open an account for each kitchen, and the kitchen installs our app. Most have ordered before the day is out.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>The order arrives priced</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your customer has approved it. It carries an order number and the time it was sent, in a format your system takes.
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
            "Our regulars just want the usual order in. Now they say it, look it over, and it is with us."
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
            "We expected a project. It was a list of guides and a short call, and nothing else we run had to move."
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
      <span class="eyebrow">Room For Both</span>
      <h2>Cut+Dry for the platform, voice for the phone accounts</h2>
      <p class="lead mt-16">
        We are not a Cut+Dry replacement and could not be one. The spoken reorder adds on, so you can still try it if Cut+Dry already runs your payments and your storefront.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🛍️</div>
        <h4>Let the storefront do its job</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Discovery, search and a published catalog are real work, and none of it happens here. The accounts who want to browse keep browsing. The ones who just want to repeat Friday's order get a quicker way to do it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💳</div>
        <h4>Money and paperwork stay put</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Our app never touches money. Nothing about adding it asks you to move how customers pay or how invoices go out, which is usually the part nobody wants to disturb.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📬</div>
        <h4>Our orders go where you point them</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Whichever system you picked is where ours show up, by EDI, through the API or in QuickBooks, or by email to your desk. Nothing changes in Cut+Dry.
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
      <h3 style="margin-bottom:10px;">See one spoken reorder sit beside Cut+Dry</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. One account, one order spoken from a sample guide, and where it would land among your other orders.
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
      <h2>What teams keeping Cut+Dry ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Does adding voice orders mean finding a Cut+Dry alternative?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Cut+Dry's call transcription already turns what callers say into orders, and it carries on unchanged. What VoiceOrder Solutions adds beside it is an app where the account talks through its order and approves the lines itself. The ones who browse your storefront keep browsing, and nothing gets switched off first.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Cut+Dry?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No, not at selling a catalog, collecting payments, or working with the manufacturers in their network. Those are what they built, and we would not ask you to give them up. Where we help is the reorder from an account you already have, spoken off your guide and approved before it sends. That narrow job is often what a Cut+Dry alternative search was really about.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VoiceOrder Solutions link up with Cut+Dry?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It does not. The two products have no connection, and neither vendor supports the other. Each passes its orders to your own system on its own, ours in the formats listed above. When ours come in by EDI or the API, both end up in the same system; an emailed order arrives as a file to open like any other email.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will some kitchens be using two ordering apps?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only the ones you offer it to. Accounts happy ordering through Cut+Dry can stay there. The app is for kitchens that still pick up the phone, which is where a spoken, checked order frees up your desk the most. Calls you keep taking get no order number from us; only what is sent through our app does.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if a cook gets pulled away halfway through an order?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Their list stays saved where they stopped, so they can pick it up again when they are back, and nothing goes out until they send it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How quickly can accounts start sending orders?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors this is live inside 24 to 48 hours, with a first order usually in on the same day. Nothing about your Cut+Dry setup has to change while it goes in.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do the costs work?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Neither of us publishes a figure. Cut+Dry has a pricing page with no prices on it, and ours comes as a quote. Since that platform is staying, the thing to price is only what the voice reorder adds.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Cut+Dry details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          All of the above was read on their own site, 10 October 2026: the module descriptions, the line about transcribing calls and the published 90 day launch. We have left their growth percentages alone, because those are their numbers. Should any of that be outdated, tell us and we will correct the page.
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
  <h2>Keep Cut+Dry. Add the reorder kitchens speak.</h2>
  <p>Twenty minutes, one order, and one guide on the screen.</p>

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
        <li><a href="#comparison">Cut+Dry + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
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
