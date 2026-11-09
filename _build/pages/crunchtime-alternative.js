/* Comparison page: Crunchtime, and Crunchtime with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (wave 4, 2026-11-09): the reader is the RESTAURANT (a franchisee, GM or owner in a
 * multi-unit group that runs Crunchtime). VoiceOrder Solutions comes through the restaurant's
 * distributor, and only reaches distributors that offer it. Keep Crunchtime, add VoiceOrder
 * Solutions beside it for one job. The two products do NOT connect (FAQ 3). Never imply an
 * integration, a sync or an "extension". Brand: "VoiceOrder Solutions" in full, never "VOS".
 * Angle: THE LOCAL DISTRIBUTOR. Crunchtime is built for multi-unit brands and links to
 * distributors one vendor at a time, through a managed EDI project, mostly large broadliners and
 * produce houses. VoiceOrder Solutions is built for small and mid-size distributors, so the page
 * is about the local distributor with no Crunchtime link, whose order goes as an emailed purchase
 * order, a "Phone" mode order Crunchtime does not send, or a call to the rep.
 * Crunchtime-specific trade-off (coexistence cards 1-2): a spoken order is not a Crunchtime vendor
 * order, so it is not "on order" there and an auto-order set for that distributor still runs.
 * ⚠ TRAPS (all in _build/research/competitors/crunchtime.md):
 *   1. Crunchtime HAS VOICE: "Voice-Based Inventory" takes spoken COUNTS in its mobile app. Never
 *      "they type, we speak", "no voice" or "no AI". Row 2 ticks it in both columns, problem card 3
 *      and FAQ 4 separate counting from ordering; the "no spoken ordering found" is dated in FAQ 8.
 *   2. Crunchtime HAS mobile ordering, emailed POs to any vendor, auto-orders, recommended orders
 *      and EDI links with vendors on its list. All conceded (rows 3, 4, 6; problem cards 1-2).
 *   3. No Crunchtime price is published; the voice add-on is a paid per-location upgrade. No
 *      figures and no "paid" wording on the page (FAQ 7 states they publish no prices).
 *   4. Distributors on their integration list are NOT named (claims.js bans several).
 *   5. McLane's "add-on orders should be called in" is one vendor's note: not generalized.
 *   6. Never say the brand allows ordering outside Crunchtime: coexistence card 3 says keep it in
 *      Crunchtime if the brand wants every order there.
 *   7. Receiving a spoken order in Crunchtime is unverified: coex card 1 says record it yourself or ask whoever set it up.
 * None of their customer counts, savings percentages or speed multipliers are repeated.
 * Review 2026-11-09 (wave-4 FIXES4 + factcheck-bo/buyer-op/sameness): voice counts scoped as an
 *   add-on everywhere (paid per-location since 30 June 2026; no fee on the page); hero/FAQ 1 say
 *   "by call or through the rep" (Crunchtime emails POs itself); FAQ 1 says plainly it works only
 *   if that distributor offers our app; confirmation row = order number + notification, theirs
 *   "Varies"; "large distributors" dropped (list runs to regional bakeries/dairies); auto-order
 *   switch-off goes to "whoever runs your Crunchtime setup, or you"; coex card 1 carries the steps
 *   (allow for the delivery by hand, record it in Crunchtime); coex card 3 = start with the
 *   phone-mode vendor (brand point now a clause; altametrics owns brand rules); FAQ 5 = commissary
 *   (sameness M6); coex/final H2s moved off MarketMan's; "one job" refrain only in the coex lead.
 * Verify round 2026-11-09 (VERIFY4): guide upkeep = distributor loads it and can update it (no
 *   "keeps current"); no page pointers; voice-counting point capped at 3 (row 2, card 3, FAQ 4);
 *   comparison/coex/final H2s each carry a different point (local supplier / what to adjust / number back).
 */
module.exports = {
  title: "Not a Crunchtime Alternative: Keep It, Add Voice Ordering",
  description: "Order from a local distributor by voice, fix any line before it goes and get an order number. Crunchtime keeps your counts: no Crunchtime alternative needed.",
  related: ["altametrics-alternative","restaurant365-alternative","craftable-alternative"],
  relatedHeading: "Other back-office platforms you can keep",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A Crunchtime Alternative: For Your Local Distributor</h1>
      <p class="lead mt-16">
        When your local supplier still gets your orders by call or through the rep, speak them into the VoiceOrder Solutions app. Each line comes from their order guide (what you normally order, at the prices on your account), and you get an order number back. It works only if that distributor offers our app.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Check If My Distributor Offers It →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Through your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Crunchtime carries on</span>
        <span class="hero-trust-dot"></span>
        <span>Any iPhone or Android</span>
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
      <div class="stat-label">saved on each order you would have phoned to the rep</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most kitchens can start ordering, once their distributor adds them</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">to send it, even after the distributor's office has closed</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with Crunchtime
     alone. Spoken counts, forecasts, auto-orders, EDI links, receiving and commissary are ticks
     in BOTH. Only rows 2, 5 and 8 differ, and none of them is a negative cell.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Plus Your Local Supplier</span>
      <h2>A local supplier Crunchtime does not link to?<br>If they are on our app, skip the call and say what you need.</h2>
      <p class="lead mt-16">
        Speaking changes one thing: the order to a supplier with no electronic link, if that supplier has signed on with us. If you are weighing a Crunchtime alternative, the ticks for counts, forecasts, vendor links and receiving are Crunchtime's own.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Crunchtime + VoiceOrder Solutions</th>
            <th style="width:30%;">Crunchtime on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Say a distributor's order aloud, then review the lines</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Spoken stock counts, through a Crunchtime add-on</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Sales forecasts and recommended order amounts</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Auto-orders on each vendor's order days</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Products and prices on your account, loaded by the distributor</td>
            <td>Local distributors on our app, plus linked vendors</td>
            <td>For some linked vendors</td>
          </tr>
          <tr>
            <td>Electronic links with distributors on its list</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Receiving and invoice photos on your phone</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A confirmation on your phone for each sent order</td>
            <td>Yes, when you order in our app</td>
            <td>Varies: some vendor links send a confirmation back</td>
          </tr>
          <tr>
            <td>Commissary orders and transfers</td>
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
     SECTION 6: WHY OPERATORS LOOK ELSEWHERE
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container">
    <div class="text-center" style="max-width: 680px; margin: 0 auto;">
      <span class="eyebrow">Why Operators Look</span>
      <h2>Why you might search for a Crunchtime alternative</h2>
      <p class="lead mt-16">
        Crunchtime connects to a distributor's system one vendor at a time, through a project its team sets up and tests. Sometimes a look at a Crunchtime competitor starts with one local supplier that has no such link.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">🔗</div>
        <h4>Your supplier may not be on its list</h4>
        <p class="text-muted mt-12">
          Its list of linked vendors runs from national broadliners to regional bakeries and dairies. Any vendor can ask for a link, but a small local distributor may not have one yet.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Some vendors are set to phone orders</h4>
        <p class="text-muted mt-12">
          Without a link, Crunchtime can email the vendor a PO (purchase order). If that vendor is set up for phone orders instead, Crunchtime sends nothing, and someone has to get the order to the rep.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🎙️</div>
        <h4>Its voice feature counts stock</h4>
        <p class="text-muted mt-12">
          Managers with Crunchtime's voice counting add-on can speak stock counts into the app, so nobody stops to type. Placing an order with a distributor is a separate task.
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
      <h2>What the app adds, with no Crunchtime replacement</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Speak the order where you stand, then check it</h3>
          <p class="mt-12 text-muted">
            In the walk-in, start the app and tell it what that distributor should bring. Each item shows up as a line from your guide, with the amount you said. Change an amount or remove a line, then send it when it looks right.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Nothing goes out until you send it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Order late at night, after close, when the rep is off</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Use the phone in your pocket</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled away halfway? It is saved where you stopped</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">How placing an order by voice works →</a>
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
          <span class="eyebrow">Set Up On Their Side</span>
          <h3>Your distributor loads the guide, not you</h3>
          <p class="mt-12 text-muted">
            The distributor sets up the products you buy from them, with their item codes and the prices you pay them, and can update the guide from their side. There is no list for you to keep. Some vendors linked to Crunchtime send guide files to it; this is for a distributor that does not.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Only the items you usually buy from them</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>At the prices set for your account</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No vendor setup for your office to do</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>You still deal with the same rep</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Buying from more than one supplier →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>The order guide,<br>with your<br>account prices
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Your Order Number</span>
          <h3>Every app order comes back with a number</h3>
          <p class="mt-12 text-muted">
            In the app, every sent order carries a number, the date and the time, and a confirmation lands on your phone. If the truck shows up short, quote that number to your rep, instead of recalling what was said on a call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The exact time you sent it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Confirmed by notification or text</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Simple to hold up against what arrived</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>No number from us for calls or voicemails</span>
            </li>
          </ul>
          <a href="/supplier-management-software" class="feature-link">What each supplier confirmed →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A sent order with<br>its number, date<br>and time
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 4 -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Crunchtime's Side</span>
          <h3>Crunchtime keeps the rest of the job</h3>
          <p class="mt-12 text-muted">
            Counts, forecasts, recommended orders, labor schedules and the other Crunchtime tools carry on as they are. On the day you order from the supplier with no link, Crunchtime's suggested amounts can be the list you read out.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Keep counting there as you do now</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Receive deliveries and photograph invoices in its app</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Linked vendors keep getting orders from Crunchtime</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Labor, food safety and kitchen tools are untouched</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">Where ordering sits next to your stock counts →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A count in one app,<br>the spoken order<br>in ours
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
      <h2>Getting set up starts with your distributor</h2>
      <p class="lead mt-16">
        Ordering this way needs no alternative to Crunchtime. Your distributor does the setup, and all you need is your phone.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Ask if your distributor offers it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they do, they open your account and load your guide. Not sure? We can look into it for you.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Download the app and sign in</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Your guide is already there when you log in.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Speak, look it over, send</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Look over each line, fix anything that is off, and send.
        </p>
      </div>
    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VoiceOrder Solutions app with a distributor's order guide and a sent order
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
      <h2>What kitchens say about ordering by voice</h2>
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

      <!-- Supporting testimonials (placeholders: no numbers, no durations) -->
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "Our local produce order used to sit on the rep's voicemail. Now it goes out from the walk-in as soon as we finish."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">Photo</div>
            <div>
              <div class="author-name">[Customer Name]</div>
              <div class="author-role">[Restaurant Name] · [City]</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "We still count in Crunchtime. Our dairy was never linked to it, so that order is the one we now say into the app."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">Photo</div>
            <div>
              <div class="author-name">[Customer Name]</div>
              <div class="author-role">[Restaurant Name] · [City]</div>
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
      <span class="eyebrow">Keep Both</span>
      <h2>What to adjust in Crunchtime when you speak one vendor's order</h2>
      <p class="lead mt-16">
        Keeping both is not choosing a Crunchtime alternative: it hands one job to a second app. Vendor links, counting and sales forecasts stay with Crunchtime. The local supplier's order moves to our app, said on your phone and checked before it is sent.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <h4>Crunchtime will not see it as on order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          An order you say in our app is not a Crunchtime vendor order. If Crunchtime's recommended amounts subtract what is already on order, they will not know about this delivery. Until it arrives, allow for it by hand when you read the next suggestion. When it comes in, record it in Crunchtime yourself, or get help from whoever set up your Crunchtime account.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">⏱️</div>
        <h4>Switch off auto-order for that distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If Crunchtime auto-orders from that distributor, auto-order has to be turned off for them before your first spoken order, so they get one order, not two. Ask whoever runs your Crunchtime setup, or do it yourself if that is you.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🏪</div>
        <h4>Begin with the vendor you already call</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          When Crunchtime's setup says to phone a vendor, it sends that vendor nothing, so getting that order to the distributor is already up to you. That order is the easiest one to move into our app, unless your brand wants it kept in Crunchtime.
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
      <h3 style="margin-bottom:10px;">Watch a walk-in order reach a distributor, in a short demo</h3>
      <p class="text-muted" style="font-size:16px;">
        In 20 minutes we use a made-up guide, speak three or four items, correct one wrong line, then open what reaches the distributor's inbox.
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
      <h2>What Crunchtime users often ask</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a Crunchtime alternative to order from my local distributor by voice?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Crunchtime keeps doing your counts and forecasts, and keeps ordering from the vendors it is linked with. If your distributor is on VoiceOrder Solutions, you can order from them by voice in our app, with no call to the rep. A small supplier may not have it yet: ask them, or contact us to find out.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Crunchtime?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at what Crunchtime does: we run no counts, forecasts, labor schedules or kitchen screens. Our app is for ordering from a distributor who has signed up with us: you say what you need, then look over every item before it is sent. If one supplier with no Crunchtime link is why you went looking for a Crunchtime alternative, that is the order our app can take.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and Crunchtime connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. We answer questions about our app, Crunchtime answers questions about theirs, and neither team supports the other's product. Whatever you order with us goes only to your distributor; Crunchtime never gets a copy.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this the same as Crunchtime's voice counts?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Crunchtime's Voice-Based Inventory, an add-on for its Inventory app, lets you count aloud: say an item and an amount. Our app turns what you say into order lines, then sends them to the distributor who gave you the app. You can use both: Crunchtime for the count, our app for the order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I order commissary items or transfers this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Both stay in Crunchtime. We handle orders to distributors that use VoiceOrder Solutions, nothing else.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          I said two cases and the app shows six. What now?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Nothing has gone yet, so fix it on the review screen: change the amount, swap the item or delete the line. That review is the safeguard, and a hurried look can still miss a mistake. A call or a voicemail gets no number from us; only app orders do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Through your distributor: they set up your account with your order guide, and most kitchens place a first order in the app that same day. If they do not have it, your orders to them stay as they are today. Contact us and we will connect you with the right person. VoiceOrder Solutions comes to you from your distributor, so cost is a question for them; we publish no price. Crunchtime's own site does not list its prices.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Crunchtime details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          From crunchtime.com and its public support center, as we read them on 9 November 2026: product pages, vendor setup guides and mobile app notes. On that date we found nothing there about saying an order to a distributor. We have left their customer numbers and savings figures off this page. If you find a detail that is now wrong, email us and we will correct it.
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
  <h2>Order from the local distributor out loud, and get a number back.</h2>
  <p>Ask the distributor you want to order from whether it offers VoiceOrder Solutions, or ask us and we will check.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Comes through your distributor</span>
    <span>✓ Your guide, your prices</span>
    <span>✓ Send it any hour</span>
    <span>✓ iPhone + Android</span>
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
        <li><a href="#features">Order Records</a></li>
        <li><a href="#how-it-works">Getting Started</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">Crunchtime + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/order-taking-software">Order Taking for Distributors</a></li>
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
