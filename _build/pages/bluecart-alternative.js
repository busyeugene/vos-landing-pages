/* Comparison page: BlueCart, and BlueCart with VoiceOrder Solutions added. `compare` block order (see template.js).
 * REFRAMED 2026-10-21 (client, via Eugene): keep the "bluecart alternative" keywords, but present
 * VoiceOrder Solutions as the spoken reorder added beside a BlueCart listing, never as its replacement.
 * BlueCart's biggest win (reaching restaurants you do not supply yet) is the first row and a tick in
 * BOTH columns. The original angle (whose shelf the reorder sits on, Pricing Insights) survives as one
 * table row and one FAQ about our own app. The two products do NOT connect (FAQ 3).
 * Every claim is sourced and dated in _build/research/competitors/bluecart.md.
 */
module.exports = {
  title: "BlueCart Alternative for Food Distributors in 2026",
  description: "Keep the BlueCart listing that finds new kitchens, and give your regulars a reorder they speak into an app. A BlueCart alternative that removes nothing.",
  related: ["cut-dry-alternative", "choco-alternative", "orderease-alternative"],
  relatedHeading: "Other platforms worth keeping beside voice ordering",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>A BlueCart Alternative For The Regulars You Have</h1>
      <p class="lead mt-16">
        Keep winning new accounts on the marketplace and give the ones you already supply a faster reorder. VoiceOrder Solutions lives next to BlueCart: kitchens say what they are short of into our app, approve the list and send it, priced off your own guide.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Your listing stays live</span>
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
      <div class="stat-label">Back on each order once the phone is out of it</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Covers go-live for most distributors</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is first-order day for most kitchens</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head (client, 2026-10-21). Column 2 is the distributor's operation with
     both tools, column 3 with BlueCart alone, so every BlueCart strength is a tick in BOTH columns.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Keep Both</span>
      <h2>BlueCart with VoiceOrder Solutions added.<br>Win there, reorder here.</h2>
      <p class="lead mt-16">
        Nothing in this table gets taken away, because adding a tool should not cost you anything you have. BlueCart's own pitch is a marketplace that puts you in front of restaurants you have never sold to, and a BlueCart alternative search usually comes from the reorder side, not the reach. The two do not connect, and what we say about BlueCart was read on their site.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">BlueCart + VoiceOrder Solutions</th>
            <th style="width:30%;">BlueCart on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reaching restaurants you do not supply yet</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Accounts speak the reorder into an app</td>
            <td><span class="check-yes">✓</span></td>
            <td>Online ordering on their storefront</td>
          </tr>
          <tr>
            <td>Orders keep their place if a cook is called away</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Your buyer signs the order off before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>On their storefront, yes</td>
          </tr>
          <tr>
            <td>Promotions and offers for repeat business</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Invoicing and payments</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A rep app and a wholesale CRM</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Per-account ordering lists at the prices you set</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>An order dashboard to confirm and track orders</td>
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
      <span class="eyebrow">How It Comes Up</span>
      <h2>When an alternative to BlueCart starts to look tempting</h2>
      <p class="lead mt-16">
        BlueCart sells reach. Join the marketplace, get listed in the endless aisle, be seen by restaurants across their network. That is worth keeping for a supplier chasing new accounts. Once an account is yours, though, the weekly reorder is a different job, and that is usually when a BlueCart competitor gets a look.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>The reorder still comes by phone</h4>
        <p class="text-muted mt-12">
          Plenty of accounts never order online at all. They call at seven in the morning or after close, and someone at your end writes each order up.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🛒</div>
        <h4>Online ordering helps the ones who log in</h4>
        <p class="text-muted mt-12">
          BlueCart positions its Order Management Solution as a replacement for phone and email ordering, and for buyers who use it, it is. The kitchens who prefer talking to logging in are the gap.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧭</div>
        <h4>Leaving would cost you the reach</h4>
        <p class="text-muted mt-12">
          Coming off the marketplace would give up the new kitchens it brings in, and the regulars on the phone would still be on the phone. That is why a BlueCart alternative that takes the listing down is the wrong fix here.
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
      <h2>The BlueCart alternative that leaves your listing up</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>The regular order, spoken</h3>
          <p class="mt-12 text-muted">
            Your account holds the button and says what the kitchen needs. Items appear as
            lines with quantities, they fix anything wrong, and they send. Each item comes from their own guide, and they check every line before it goes.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The buyer looks at the list before anything leaves</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Done in the cooler or at the desk, at any hour</span>
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
          <h3>Your range, at the prices you hold</h3>
          <p class="mt-12 text-muted">
            You send the guides you keep per customer. We load them against your SKUs at the price you hold for that account.
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
              <span>Every item maps to a SKU you already use</span>
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
            VoiceOrder Solutions carries real-time inventory visibility tied to what is being ordered, and the catalog updates as stock levels change. It is not the system of record for stock: yours stays in
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
      <h2>Three steps, and no listing to build</h2>
      <p class="lead mt-16">
        There is nothing new to put on the marketplace, and your BlueCart listing stays as it is. You send guides, we set up accounts, your kitchens start ordering.
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
        <h4>We set up each customer</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts are created for each kitchen, which then downloads our app. Most have ordered before that day ends.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>It arrives whole</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Signed off by the buyer, carrying a number and a time, in the shape
          your system expects.
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
            "We are not short of customers. We were short of mornings, and the phone was eating them."
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
            "Our chefs check their list on the phone, and it is with us before the morning rush."
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
      <span class="eyebrow">Two Jobs</span>
      <h2>BlueCart finds the account, voice adds a quicker reorder</h2>
      <p class="lead mt-16">
        VoiceOrder Solutions is not a BlueCart replacement, because it cannot do the thing BlueCart is for. It adds on, so being listed on a marketplace is no reason to skip this.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">🤝</div>
        <h4>Meet them there, make reordering quick</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A marketplace is a good way to meet an account you had no route to. Once they buy from you regularly, some will want a quicker way to reorder than logging in, and our app gives them one while the listing keeps working.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧭</div>
        <h4>Let each account order the way it likes</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Kitchens happy ordering through BlueCart can keep doing it. Regulars who would still rather call get an app that turns what they say into a list they check.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📬</div>
        <h4>Our orders land where you choose</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Ours show up in whichever system you picked, over EDI, the API or QuickBooks, or as an email to your desk. Nothing about your BlueCart dashboard changes.
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
      <h3 style="margin-bottom:10px;">See a regular's reorder go from voice to your desk</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. One account, one order spoken off a sample guide and signed off before it sends.
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
      <h2>What distributors on BlueCart ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is a BlueCart alternative the only way to add spoken orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No, and the listing never has to come down. VoiceOrder Solutions adds an app where the accounts on your books say what they need and approve it, while BlueCart goes on bringing in kitchens that are new to you. Nothing gets turned off.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than BlueCart?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          At finding new customers, no, and it is not a close call. That is their product and we do not have one. We help with the repeat order from an account already on your books: your range only, your prices, approved by the buyer. People who search for a BlueCart alternative are often after that second job, not a way out of the first.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Are VoiceOrder Solutions and BlueCart connected?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. The two products are not linked, and neither supports the other. Each delivers its orders into your own system independently, ours as an email with a file attached, over EDI or the API, or into QuickBooks.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Won't our accounts be ordering in two places?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Some may, and that can be fine. A kitchen you met on the marketplace can keep buying there. Offer our app to the regulars who still call your desk, since a spoken reorder from your own guide is where it saves the most time. Calls you go on taking get no order number from us; that only comes with orders sent through the app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do our prices appear in your app?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Each account sees its own guide, priced the way you set it. BlueCart's Pricing Insights, which labels products as great, good or fair value, carries on for your marketplace listing.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast can accounts begin ordering?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          For most distributors this is live inside 24 to 48 hours, with a first order usually in on the same day. BlueCart says theirs can be live within days too, and since the listing stays up, there is nothing to time around.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do the costs compare?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Neither of us publishes a figure. Theirs follows a demo; ours comes as a quote once we have talked. With the listing kept, the only new cost is the voice reorder, and a quote shows what that is.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the BlueCart details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Everything here came from bluecart.com, read 10 October 2026: the marketplace positioning off the headline, the Pricing Insights and endless aisle descriptions off their product list, and the setup line off their FAQ. We have left their transaction and funding figures alone, because those are theirs. If any of it has moved on, the fault is here, not there.
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
  <h2>Keep the listing. Bring the reorder home.</h2>
  <p>Twenty minutes, one order priced from a guide, and approved before it sends.</p>

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
        <li><a href="#comparison">BlueCart + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
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
