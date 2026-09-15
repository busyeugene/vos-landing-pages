/* Page 7 — PRIMARY: order tracking software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * SECONDARY: purchase order tracking software (H3) | sales order tracking software (H3)
 *            order tracking app (H3) | order tracking tool / platform (body)
 *            order tracking software for small business (body)
 *            ecommerce order tracking software (Tier C, disambiguating FAQ only)
 * NOTE: distributor page. Tracking claims stay inside verified facts: order number, date, timestamp,
 *       who ordered, confirmation (push/text), order history, trackable placement to fulfillment.
 *       No statuses beyond confirmed (open question Q3), no GPS, carrier or ETA claims.
 */
module.exports = {
  title: 'Distributor Order Tracking Software | VoiceOrder Solutions',
  description: 'Order tracking software for food distributors. Every customer order is confirmed, numbered and timestamped, and trackable from placement to fulfillment.',
  related: ["order-taking-software","order-fulfillment-software","inventory-visibility-software"],
  relatedHeading: 'See what happens before and after tracking',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "order tracking software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">Order Tracking Software for Food Distributors</span>
      <h1>Order Tracking Software for Every Customer Order.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is order tracking software for the orders your
        customers send you, from restaurants to stores. Each one is confirmed,
        numbered and timestamped, so you know where it stands without a call to ask.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>No new back-office software</span>
        <span class="hero-trust-dot"></span>
        <span>Live in 1 to 2 days</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android + web admin</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (order status timeline) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Admin platform order list<br>with account, order number,<br>date and timestamp
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
      <div class="stat-number">Every</div>
      <div class="stat-label">order stamped with its own number and the time it was sent</div>
    </div>
    <div>
      <div class="stat-number">One</div>
      <div class="stat-label">admin platform holding the history of every account</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">orders confirmed and logged, even after your office closes</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>The order came in. So why is your phone still ringing?</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      When orders show up by phone, voicemail and text, nobody has one record
      of what came in or when. Customers call to check. Your team digs for the
      answer. Here's what that costs you:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🚚</div>
        <h4 class="mb-8">"Did you get my order?"</h4>
        <p class="text-muted" style="font-size:15px;">
          A chef left a voicemail at 10pm. At 7am they call again to make sure it
          landed, and your rep has to find it before anyone can say yes.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📉</div>
        <h4 class="mb-8">"We sent that before cutoff"</h4>
        <p class="text-muted" style="font-size:15px;">
          The account says they ordered in time. With no timestamp to check, you
          squeeze it onto the truck or start your morning with an unhappy customer.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🔍</div>
        <h4 class="mb-8">"What did they order last month?"</h4>
        <p class="text-muted" style="font-size:15px;">
          No one can answer without digging through inboxes, texts and notepads.
          So your rep guesses, and the account notices when the guess is wrong.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 6: FEATURE DEEP-DIVE – ALTERNATING ROWS
     Two parallel angles: buyer-side (PO tracking) and seller-side (SO tracking)
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">

    <div class="text-center" style="max-width: 740px; margin: 0 auto 72px;">
      <span class="eyebrow">Both Sides of the Order</span>
      <h2>Order tracking software for your team and the accounts you deliver to</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 – purchase order tracking software (buyer side) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">For Your Customers</span>
          <h3>Purchase order tracking software, from your customer's side.</h3>
          <p class="mt-12 text-muted">
            To your customer, it's a purchase order. To you, it's a sales order.
            VOS gives both sides the same record. The customer looks it over,
            sends it, and gets a confirmation back, so they know it reached you
            without picking up the phone.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Customers check every line before they send it</span></li>
            <li><span class="bullet-check">✓</span><span>Confirmation arrives on their phone</span></li>
            <li><span class="bullet-check">✓</span><span>Every order is numbered</span></li>
            <li><span class="bullet-check">✓</span><span>One order tracking tool for your office and your accounts</span></li>
          </ul>
          <a href="/order-entry-software" class="feature-link">See how orders get placed →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Customer app order<br>confirmation with<br>order number
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: SECONDARY IN H3 – sales order tracking software (seller side) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">For Your Team</span>
          <h3>Sales order tracking software for every account.</h3>
          <p class="mt-12 text-muted">
            Orders from all of your accounts land in your admin platform, showing
            who placed each one and when. So when a customer or a driver asks about
            an order, your team finds the answer on a screen instead of in a pile
            of voicemails. Fewer status calls leave more time to grow accounts.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Every account's orders on one screen</span></li>
            <li><span class="bullet-check">✓</span><span>See who placed each order, and at what time</span></li>
            <li><span class="bullet-check">✓</span><span>Answer status calls from the record, not from memory</span></li>
            <li><span class="bullet-check">✓</span><span>An order tracking platform with every account in view</span></li>
          </ul>
          <a href="/order-fulfillment-software" class="feature-link">See order fulfillment →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Admin view of every<br>account's orders with<br>numbers and timestamps
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 – order tracking app -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">On Their Phone</span>
          <h3>An order tracking app in your customers' pockets.</h3>
          <p class="mt-12 text-muted">
            Your customers order in the app on their iPhone or Android phone, at
            any hour. If a customer stops halfway, the app saves their place. When
            they send it, they get a confirmation, so a chef closing at 11pm knows
            the order is in without waiting for your office to open.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Works on the phones your customers already own</span></li>
            <li><span class="bullet-check">✓</span><span>Orders sent and confirmed on weekends and late at night</span></li>
            <li><span class="bullet-check">✓</span><span>Unfinished orders save on their own, ready to resume</span></li>
            <li><span class="bullet-check">✓</span><span>Your office sees that same order on its side</span></li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">See how kitchens handle stock →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Mobile order review<br>screen before the<br>order is sent
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: Order history -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Full History</span>
          <h3>Every order from every account, kept on record.</h3>
          <p class="mt-12 text-muted">
            VOS keeps a full log of past orders for each account, with a
            timestamp showing when each one was sent. When an account questions
            what they asked for, you open the exact order they placed. The record
            is there for your books and for theirs.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Look back at last week or last month for any account</span></li>
            <li><span class="bullet-check">✓</span><span>Settle a "that's not what I ordered" call by opening the order</span></li>
            <li><span class="bullet-check">✓</span><span>Know what an account usually buys before your rep calls</span></li>
            <li><span class="bullet-check">✓</span><span>No paper trail to file, since every order is already logged</span></li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">See the buyer's side of ordering →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Order history log<br>for one account with<br>dates and timestamps
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
      <h2>All the tools your team needs to follow an order.</h2>
      <p class="lead mt-16">No extra apps. No workarounds. Everything ships with VOS out of the box.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📍</div>
        <h4>Order Numbers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each order gets its own number and a timestamp the moment your
          customer sends it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>Order History</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Look up any account's past orders from one admin view, whenever a
          question comes up.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>iOS + Android App</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Ordering and confirmations live in one app on the customer's
          phone.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Confirmation Alerts</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers hear back by app alert or by text, so they don't need to
          call and check.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Review Before Sending</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Customers look over each order before it goes, so the order you get
          matches what they placed.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏪</div>
        <h4>Right-Sized</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Order tracking software for small business distributors, with no IT
          team needed to run it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Who Ordered</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each order shows the account and the person who sent it, so questions
          go to the right place.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🕐</div>
        <h4>24/7 Access</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders placed at 5am or at midnight still get a number and a
          confirmation. VOS does not keep office hours.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>Fits Your Current System</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders still land in the format your team uses today, from email to
          QuickBooks.
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
      <h3 style="margin-bottom:10px;">Find any customer order without making a call</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a 20-minute demo. We'll show you order history, confirmations and
        admin tools working together, for a distribution business like yours.
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
      <h2>Live in two days or less</h2>
      <p class="lead mt-16">
        No IT project. No systems to rip out. Three steps, and each new order
        is on record from the start.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Share what each account buys</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Send VOS the order guide for every account. We load it with the items,
          SKUs and prices you set.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>We set up your customers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          We create each account and get your customers into the app. Most are
          ordering that same day.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Every order goes on record</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each order lands with your team in the format you use, confirmed and
          timestamped, and stays in your order history.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS admin platform order history with order numbers and timestamps
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
      <h2>What distributors and their accounts say about VOS</h2>
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
            "When an account told us they never ordered something, we pulled up
            the order with the time it was sent. That ended the argument."
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
            "We used to get a call every morning asking if last night's order came
            through. Now our customers get a confirmation, and our office has the record."
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
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Built for supply orders.<br>Not for tracking parcels.</h2>
      <p class="lead mt-16">
        Most tracking tools follow a package to a doorstep. You need to follow a
        customer's order from the moment it is placed until your team fills it.
        Here's how VOS compares.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Ordering Portal</th>
            <th style="width:22%;">Phone and Voicemail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Numbered, timestamped orders</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Voice orders logged as they are placed</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>After-hours orders captured</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Voicemail</td>
          </tr>
          <tr>
            <td>Mobile app for your customers</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>History for every account</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Customer reviews the order before sending</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Order stays on record through fulfillment</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Leaves your order system as is</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Customer hears back on their order</td>
            <td>Alert or text</td>
            <td>Login required</td>
            <td>Business hours</td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>A day or two</td>
            <td>Varies</td>
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
     Includes Tier C disambiguation for the ecommerce variant
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Common questions about tracking orders with VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need to replace my current system to use VOS?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Orders still come to you as an email with a PDF, Excel or Word
          file, or through EDI, API or QuickBooks. VOS adds a numbered, timestamped
          record of each order next to the tools your office already runs. There
          is no rip-and-replace.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does the order tracking software actually show me?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Every order sent to you through VOS: which account placed it, who sent it,
          what was on it, when it was sent, and its unique number. Every order gets
          confirmed before it goes out and is trackable from placement to
          fulfillment, with the full history kept for your team.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS ecommerce order tracking software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS tracks business-to-business food orders between a distributor and
          the kitchens and stores it supplies. It does not follow parcels, print
          shipping labels or send online shoppers a tracking link. If you need to
          track packages to consumers, VOS is not the right fit.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can my customers see that their order went through?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Customers review each order before they send it, then get a push
          alert or a text to confirm it. The order keeps one number on both sides,
          so your records and theirs match. That shared record is the point of
          order tracking software, so neither side has to call the other to ask.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS show where the delivery truck is?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS is not GPS, route or carrier tracking, and it does not predict
          delivery times. It tracks the order itself: when it was placed, who placed
          it, and that it was confirmed. Keep using your current tools for routes
          and drivers.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Which devices does VOS work on?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Customers use their own phones, iOS or Android. Your office uses an admin
          platform, where you manage accounts, edit order guides and look up what
          any customer has ordered.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does VOS suit a smaller distributor?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. VOS was designed for small and mid-size distributors, not enterprise
          companies with their own IT departments. Pricing is on request, so book a
          demo and we'll talk through your accounts and how orders reach you today.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors are live in 24 to 48 hours, with no IT project. You send
          us the guide each account orders from, we set the accounts up, and most
          customers send their first order the same day. Tracking starts with that
          order.
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
  <h2>Ready for fewer calls asking where an order stands?</h2>
  <p>Join food distributors who keep each order confirmed, timestamped and on record.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Most customers order the same day</span>
    <span>✓ Orders still arrive in your format</span>
    <span>✓ No system replacement needed</span>
    <span>✓ No IT project required</span>
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
        <li><a href="#features">Order Confirmations</a></li>
        <li><a href="#features">Sales Order Tracking</a></li>
        <li><a href="#features">Customer Ordering App</a></li>
        <li><a href="#features">Order History</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/vendor-management-software">Vendor Management</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/distribution-resource-planning-software">Distribution Resource Planning</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Portals</a></li>
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
