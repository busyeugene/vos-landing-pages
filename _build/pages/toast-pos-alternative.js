/* Comparison page: Toast POS, and Toast with VoiceOrder Solutions added. `compare` block order (see template.js).
 * OPERATOR PAGE (wave 4, 2026-11-09): the reader is the RESTAURANT that runs Toast. VoiceOrder
 * Solutions comes through the restaurant's distributor, and only reaches distributors that offer it.
 * Same frame as the other operator pages: keep Toast, add VoiceOrder Solutions beside it for one job.
 * The two products do NOT connect (FAQ 3). Never imply an integration, a sync or a partnership.
 * Brand: "VoiceOrder Solutions" in full, never "VOS" (client, 2026-10-21).
 * Angle: TWO KINDS OF ORDER. Toast POS is built around the order a GUEST places with you (POS,
 * handhelds, kiosk, online, partner phone and drive-thru voice), the kitchen ticket and the payment,
 * and it 86es a dish when the kitchen runs out. VoiceOrder Solutions is for the opposite order: the
 * restock order YOU place with your food distributor. Toast hook: 86 stops guests ordering a dish;
 * getting the ingredient back is an order to your distributor, a step you can change without
 * touching the POS. Leaving Toast means new terminals ("approved Toast hardware" only).
 * NOT this page's angle: "whose guide" (xtraCHEF's page owns it). Do not argue invoice-priced lists.
 * ⚠ TRAPS (all in _build/research/competitors/toast-pos.md):
 *   1. "Voice ordering" around Toast means GUESTS: SoundHound (2023), Toast Drive-Thru voice partners
 *      (2026), partner phone answerers. Said in the hero lead's first sentence (not a guest's order),
 *      problem card 1 and FAQ 4. Never "Toast has no voice" or "they type, we speak".
 *   2. Toast HAS supplier ordering: xtraCHEF by Toast (order guides from counts and pars, recurring
 *      orders, email or PDF to any vendor), Toast IQ Inventory (limited release, POs), Toast Inventory
 *      (beta outside the US). Conceded in table rows 4 and 5 and FAQs 1 and 5.
 *   3. Toast IQ is an AI assistant (questions, settings, campaign drafts); its help article mentions
 *      no supplier orders and no voice. Say nothing more about it than the table row.
 *   4. We never read Toast's sales, 86 list or menu-item counts. Coexistence card 2 has the OWNER look
 *      at the 86 list, then speak the order.
 *   5. Toast PUBLISHES starting prices. Figures stay off the page; FAQ 7 says they publish them.
 * Their customer counts and partner marketing numbers are not repeated.
 * Review 2026-11-09 (wave 4 FIXES4): P1 cost line, P2 no-distributor answer, P4 checks anchored on the
 * order number, P5 no per-item promise, P7 guide explained in the hero, P8 sameness (cmp eyebrow/H2 on
 * the in/out angle, problem lead on Toast's own fact, coex H2 + card 3 Toast-specific, FAQ 2 closes on
 * Toast + xtraCHEF). xtraCHEF scoped as sold separately, counts-and-pars on its Pro tier; recurring
 * order = 'scheduled', not 'sends'; drive-thru voice = larger brands. Problem card 3 is now about the
 * walk-in, not switching cost. FAQ 5 no longer repeats 'xtraCHEF reaches any vendor' (coex card 3 does).
 */
module.exports = {
  title: "Not a Toast POS Alternative: Keep Toast, Add Voice Ordering",
  description: "Say your restock order, look it over and send it to your distributor with an order number. No Toast POS alternative needed: Toast keeps guest orders.",
  related: ["lightspeed-pos-alternative","touchbistro-alternative","lavu-pos-alternative"],
  relatedHeading: "Other restaurant systems that carry on beside us",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Restaurant Operators</span>
      <h1>Not A Toast POS Alternative: Ordering Your Supplies</h1>
      <p class="lead mt-16">
        For restocking from your distributor, not guest orders. Say what you need into the VoiceOrder Solutions app, look over each line from their order guide (the items you usually buy, with the prices on your account), then send it with its own number. It works only if they have our app.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Check If My Distributor Offers It →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Provided by your distributor</span>
        <span class="hero-trust-dot"></span>
        <span>Toast setup unchanged</span>
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
      <div class="stat-number">Same Day</div>
      <div class="stat-label">is when most kitchens can start ordering</div>
    </div>
    <div>
      <div class="stat-number">20-30 Min</div>
      <div class="stat-label">saved per order, compared with calling it in to the rep</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">for restock orders, long after the last guest leaves</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the restaurant with both tools, column 3 with Toast alone.
     Guest orders, payments, 86, partner voice ordering for guests, xtraCHEF supplier ordering,
     the manager app and Toast IQ are ticks in BOTH. Only rows 2 and 5 differ.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Two Kinds Of Order</span>
      <h2>Toast takes the orders coming in.<br>We add a spoken one going out.</h2>
      <p class="lead mt-16">
        Where a distributor has our app, we add this: you speak from their guide at the prices set for your account, fix any line that is off, and get the order numbered and confirmed on your phone. The ticks for Toast's own features come from Toast.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">Toast + VoiceOrder Solutions</th>
            <th style="width:30%;">Toast on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Guest orders from the counter, tables, kiosk and web</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>A restock order said aloud, then read line by line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Not listed on their site</td>
          </tr>
          <tr>
            <td>Card payments, tips and payroll</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Supplier orders from counts and pars (xtraCHEF Pro, sold separately)</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Sent to the distributor through the app they give you</td>
            <td><span class="check-yes">✓</span></td>
            <td>By email or PDF from xtraCHEF</td>
          </tr>
          <tr>
            <td>Mark a dish out of stock (86) on every channel at once</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Guests' takeout calls answered by voice AI, through partners</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Sales numbers and a manager app on your phone</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Toast IQ, an AI assistant for questions and settings</td>
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
      <span class="eyebrow">Before Changing Your POS</span>
      <h2>Why restaurants look for an alternative to Toast POS</h2>
      <p class="lead mt-16">
        The Toast POS handles the orders guests place: it rings up the check, sends the ticket to the kitchen and takes the payment. A search for a Toast POS competitor can start with an order headed the other way: the one that restocks your kitchen.
      </p>
    </div>

    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">📞</div>
        <h4>Its voice ordering is for guests</h4>
        <p class="text-muted mt-12">
          Toast's partners sell voice AI that answers a diner calling in a takeout order, and some handle drive-thru orders too. That brings orders in. It does not place yours with a distributor.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🚫</div>
        <h4>An 86 stops the sale, not the shortage</h4>
        <p class="text-muted mt-12">
          When you 86 a dish, Toast stops guests ordering it on the POS, online and through delivery apps. Getting the missing ingredient back still means ordering from your distributor, by phone, text, or xtraCHEF if you use it.
        </p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">🖥️</div>
        <h4>A new POS would not change the restock</h4>
        <p class="text-muted mt-12">
          Toast's POS runs on approved Toast hardware, designed for the guest's order. Restocking begins in the walk-in. A Toast POS alternative would not change how your restock order gets to the distributor.
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
      <h2>No Toast POS alternative needed to restock the kitchen</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Say what you need, then read it over</h3>
          <p class="mt-12 text-muted">
            Stand in the walk-in or dry storage, tap Push to Speak and say what you need. What you say shows up as lines from that distributor's guide. Fix or delete a line, and nothing goes out until you tap send.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>You approve every line before it leaves</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Order after close, once the rep has gone home</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Runs on your own phone, not a Toast terminal</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saves 20 to 30 minutes compared with the same order by phone</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Pulled onto the line mid-order? It keeps your place</span>
            </li>
          </ul>
          <a href="/order-entry-software" class="feature-link">How a supply order gets placed →</a>
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
          <span class="eyebrow">Your Distributor's Guide</span>
          <h3>Your usual items, loaded by the distributor</h3>
          <p class="mt-12 text-muted">
            The distributor fills your guide with what you buy from them, matched to their item codes. Your menu stays in Toast. This list is only for ordering from that one distributor.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Your regular items, not the whole catalog</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Each line shows your account's price</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The distributor updates it from their side</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your rep stays your rep</span>
            </li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">Buying from more than one supplier →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A distributor's<br>order guide with<br>your account prices
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Proof Of The Order</span>
          <h3>A number to quote when a case is missing</h3>
          <p class="mt-12 text-muted">
            Orders sent in the app get an order number, a date and a time, and a confirmation comes back to your phone by notification or text. When the truck shows up short, quote that number to your rep, so nobody has to remember a call.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Number and time on each order sent in the app</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A push or a text confirms it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The record shows who placed it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>A call or a voicemail still gets no number from us</span>
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
          <span class="eyebrow">Your POS Side</span>
          <h3>Toast keeps the guest side, from tickets to tips</h3>
          <p class="mt-12 text-muted">
            Guests order through Toast, tickets reach the kitchen screen, and you 86 whatever runs out, all as before, with no Toast POS alternative to learn. If you order some suppliers in xtraCHEF, those orders can stay there.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Menu, tickets and payments stay in Toast</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Your 86 list works as it always has</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Payroll and scheduling carry on</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Sales reports read the same</span>
            </li>
          </ul>
          <a href="/restaurant-stock-management-software" class="feature-link">How ordering fits your stock routine →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>A spoken restock order<br>next to a night's<br>86 list
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
      <h2>Three steps, none of them on the POS</h2>
      <p class="lead mt-16">
        Most of the setup happens on your distributor's side. All you need is your phone.
      </p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Check with your distributor</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If they have it, they set you up and add your guide. Not sure who to ask? Ask us and we will check for you.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Download the app</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Download it and sign in. Your guide is already there.
        </p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Say it, check it, send it</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Name the items, look over the lines, and tap send.
        </p>
      </div>
    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VoiceOrder Solutions app with a distributor's guide and a sent order
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
      <h2>Kitchens that order supplies this way</h2>
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
            "Once the last ticket clears, I say the produce order in the walk-in and go home."
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
            "If the dairy delivery is off, I read the rep my order number and we fix it on the spot."
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
      <span class="eyebrow">Use Both</span>
      <h2>Two orders, two places: guests in Toast, your restock in our app</h2>
      <p class="lead mt-16">
        This is not a Toast POS replacement. Toast handles your guests' orders. We cover your own: the restock order to a distributor that has VoiceOrder Solutions, which you say into your phone and look over before it goes.
      </p>
    </div>

    <div class="cards-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>No Toast report counts that order</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Orders you speak to that distributor do not show up in Toast or xtraCHEF. If you track supplier costs in xtraCHEF, enter that delivery's invoice there as you do now.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🌙</div>
        <h4>Close out, check the 86 list, then speak</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          At the end of the night, look at what you 86'd in Toast's manager app (Toast Now) and what the walk-in is low on. Then open our app and say what that distributor should bring.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📍</div>
        <h4>Keep xtraCHEF for the other vendors</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          If you use xtraCHEF, it can email an order to any vendor, while our app only reaches distributors offering it. Keep xtraCHEF or the phone for the rest. If a recurring order is scheduled in xtraCHEF for a distributor you now order from by voice, stop it first.
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
      <h3 style="margin-bottom:10px;">See a restock go from your voice to a distributor</h3>
      <p class="text-muted" style="font-size:16px;">
        In 20 minutes we speak a short test order, fix a line while you watch, and show the confirmation your phone would get.
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
      <h2>What Toast restaurants ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I need a Toast POS alternative to restock my kitchen by voice?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. Toast runs your dining room and payments, and xtraCHEF, a separate Toast product, can already email a supplier your order. If one of your distributors offers VoiceOrder Solutions, you can say what you need from them into your phone and change nothing on your terminals.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than Toast POS?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at running a restaurant: we take no guest orders, run no payments and print no tickets. We handle your order to a distributor, spoken and then checked by you before it leaves. If restocking is what set off your search for a Toast POS alternative, Toast and xtraCHEF can stay where they are.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do VoiceOrder Solutions and Toast connect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. The two are not linked, no information moves between them, and each company answers its own support calls. What you say in our app is sent to your distributor only.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Toast already has voice ordering. Is this the same thing?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. Partner voice tools for Toast answer guests phoning in a pickup order and pass it into Toast. Ours runs the other way: the order is yours, and your distributor receives it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I order from all my suppliers this way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only from distributors offering VoiceOrder Solutions. For every other supplier, carry on by phone, email or xtraCHEF, and ask each of them whether they have our app.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          I asked for two cases and the line reads twelve. What now?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Correct it on the screen first: change the amount, pick a different item or remove the line. Reading the lines is the safeguard, though a rushed look can still let a mistake through. Orders called in or left as a voicemail are not numbered by us; app orders are.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do I get set up, and what does it cost?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Your distributor does the setup: they create your login and add the items you order from them. If yours does not have it, keep ordering from them the way you do now, and contact us: we will connect you with the right person. Most kitchens place a first order the same day they are set up. Since VoiceOrder Solutions comes to you through your distributor, they are the ones to ask about cost; we publish no price. Toast lists starting prices for its POS online.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the Toast details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          On 9 November 2026 we read pos.toasttab.com and the Toast help center (support.toasttab.com): Toast's product pages, its pricing page, and the articles covering 86ing an item, Toast IQ and how xtraCHEF sends supplier orders. The guest voice-ordering details come from Toast's and its partners' announcements. We left out their customer counts. If something there is different now, tell us and we will fix this page.
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
  <h2>Order the restock aloud, and keep Toast for your guests</h2>
  <p>We can check with your distributor for you, or you can ask your rep.</p>
  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Ask About Getting Started →</a>
  </div>
  <div class="final-cta-trust">
    <span>✓ Comes through your distributor</span>
    <span>✓ Review the lines first</span>
    <span>✓ Order at any hour</span>
    <span>✓ Runs on your phone</span>
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
        <li><a href="#comparison">Toast + VoiceOrder Solutions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
        <li><a href="/restaurant-stock-management-software">Restaurant Stock Management</a></li>
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
