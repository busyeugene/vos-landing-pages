/* Comparison page: WizCommerce, and WizCommerce with VoiceOrder Solutions added. `compare` block order (see template.js).
 * REFRAMED 2026-10-21 (client, via Eugene): keep the "wizcommerce alternative" keywords, but
 * present VoiceOrder Solutions as the voice step a distributor ADDS next to WizCommerce, never as
 * its replacement. The table is "WizCommerce + VoiceOrder Solutions" against "WizCommerce on its
 * own": every WizCommerce strength is a tick in both columns, and only the two things the voice
 * step adds differ. The two products do NOT connect (FAQ 4). Never imply an integration.
 * Brand: "VoiceOrder Solutions" in full on these pages, never "VOS" (client, 2026-10-21).
 * The old H1 "A WizCommerce Alternative That Needs No Reading" sold by absence on purpose; under
 * the add-on frame it became "Weighing A WizCommerce Alternative? Add Spoken Orders First."
 * ⚠⚠ TWO TRAPS, both of which would have made this page factually wrong:
 *   1. THEY INGEST VOICE. Their AI Order Entry Assistant "Reads orders from emails, PDFs,
 *      spreadsheets, scans, voice notes, and handwritten documents". So "they type, we speak" is
 *      false and trivially disprovable. Never written on this page.
 *   2. THEY ARE IN FOOD. /industry/b2b-food-and-beverage/ is a real page with promotions,
 *      multi-warehouse, route-level stock and unit-of-measure pricing, plus a named food
 *      customer. So "not built for food" is false too. Never written on this page.
 * Angle, used by no other page in the set: whether an INTERPRETATION STEP EXISTS AT ALL.
 * WizCommerce reconstructs the order from an artifact a person already made, and their own
 * safeguard is "a final review step" by the DISTRIBUTOR'S team before it hits the ERP. In the
 * add-on frame: their AI keeps reading what still arrives; the voice step means less arrives.
 * ⚠ Not "who stays in the loop": that is the Burnt page's axis and must not be reused.
 * ⚠ Their food testimonial contains "20-30 minutes" by coincidence with VOS's own verified stat.
 * Never quoted, and no sentence here relates the two numbers.
 * Their figures (5000+ orders/day, 100% data match, 9x faster, etc.) are unaudited. Never used.
 * Pricing is parity: their nav price link covers only the photo tool, so the platform is quoted.
 * Every claim is sourced and dated in _build/research/competitors/wizcommerce.md.
 */
module.exports = {
  title: "WizCommerce Alternative for Distributors in 2026",
  description: 'Keep WizCommerce and add spoken orders for accounts that still send scans. Buyers approve each line, so less needs reading. A WizCommerce alternative that adds.',
  related: ["rekki-alternative","orderease-alternative","burnt-ai-alternative"],
  relatedHeading: "Other tools our app can run alongside",
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">For Food Distributors</span>
      <h1>Weighing A WizCommerce Alternative? Keep It, Add Voice.</h1>
      <p class="lead mt-16">
        Get orders as a list of items the kitchen has already checked. VoiceOrder Solutions sits alongside WizCommerce: your customers say their order into our app, pick from their own guide, and approve each line before it goes. WizCommerce's AI keeps reading the scans and spreadsheets still arriving.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#comparison" class="btn btn-outline-white btn-lg">See The Table</a>
      </div>

      <div class="hero-trust">
        <span>Keep every WizCommerce tool</span>
        <span class="hero-trust-dot"></span>
        <span>The buyer signs off each line</span>
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
      <div class="stat-label">Off an order that would have been phoned</div>
    </div>
    <div>
      <div class="stat-number">24-48 Hrs</div>
      <div class="stat-label">Has most distributors running it</div>
    </div>
    <div>
      <div class="stat-number">Same Day</div>
      <div class="stat-label">Is the first order for most kitchens</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: COMPARISON TABLE
     Not a head-to-head. Column 2 is the distributor's operation with both tools, column 3
     with WizCommerce alone. Every WizCommerce strength (document reading, rep app, storefront,
     CRM, quoting, payments, photography, the food feature set, ERP push) is a tick in BOTH.
     Only rows 1 and 3 differ, and each WizCommerce cell there is their own published model.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 660px; margin: 0 auto;">
      <span class="eyebrow">Keep WizCommerce, Add Voice</span>
      <h2>WizCommerce with a voice step added.<br>Fewer orders left to check.</h2>
      <p class="lead mt-16">
        This table shows your operation twice: the way it works now, and with spoken orders added for
        the accounts that need them. People usually look for a WizCommerce alternative because of the orders someone has to read and check, and that is the part adding voice changes. The two products do not
        connect, and every WizCommerce detail is from their own site.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:40%;">Feature</th>
            <th class="highlight" style="width:30%;">WizCommerce + VoiceOrder Solutions</th>
            <th style="width:30%;">WizCommerce on its own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orders spoken into an app, line by line</td>
            <td><span class="check-yes">✓</span></td>
            <td>Voice notes, read afterwards</td>
          </tr>
          <tr>
            <td>AI reads scans, spreadsheets and handwriting</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each line approved by the buyer before it sends</td>
            <td><span class="check-yes">✓</span></td>
            <td>Reviewed by your team before the ERP</td>
          </tr>
          <tr>
            <td>Rep app, branded storefront and CRM</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Quotes built from incoming requests</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Payments and AI catalog photography</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Food promotions and unit-of-measure pricing</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Each account buys from its own list, at your prices</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
          </tr>
          <tr>
            <td>Orders pushed into your ERP</td>
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
    <div class="text-center" style="max-width: 680px; margin: 0 auto;">
      <span class="eyebrow">Where The Search Starts</span>
      <h2>What sends distributors looking for an alternative to WizCommerce</h2>
      <p class="lead mt-16">
        WizCommerce runs sales through reps, online, EDI and marketplaces in one AI platform. It has a storefront, a CRM, payments and real food and beverage features. None of that is the problem. The hunt for a WizCommerce competitor usually starts with the checking your team does, and that is one small thing to fix.
      </p>
    </div>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🔎</div>
        <h4>Orders read by AI still need checking</h4>
        <p class="text-muted mt-12">
          Their own description includes a final review step for your team before orders go into the ERP, which is the honest way to build it. It still leaves you asking: did the AI read it correctly, and if not, did your team catch it?
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">🧑‍🍳</div>
        <h4>The paperwork keeps coming</h4>
        <p class="text-muted mt-12">
          A tool that reads handwritten sheets and voice notes stays busy because kitchens keep sending them. The pile only gets smaller when some of those kitchens start sending
          something else.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📦</div>
        <h4>Pulling a suite out to fix one step</h4>
        <p class="text-muted mt-12">
          Store, CRM, payments, quoting and catalog imagery come as one product family. Taking all
          of it out because some kitchens still fax in handwriting would be a great deal of
          change for a small gain.
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
      <h2>What a WizCommerce alternative can add without replacing it</h2>
    </div>

    <!-- Feature 1 -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">Voice Ordering</span>
          <h3>Spoken straight into order lines, not a voice note</h3>
          <p class="mt-12 text-muted">
            A chef says what is short and the items appear from that account's guide, already
            against your codes and your prices. The buyer sees each line as it appears and fixes it before sending, so nobody at your end pieces the order together afterwards.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>The person who placed it approves the list</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Spoken in the cooler or the office, at any hour</span>
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
          <h3>A short list built from what you sell them</h3>
          <p class="mt-12 text-muted">
            Every account picks from the items it actually buys, with your codes and the price you set for that customer. Orders arrive in your own items and codes, because each line is picked from that customer's guide.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Every line drawn from their guide</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>The catalog and the pricing stay yours to set</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Edit a guide once and the next order already has it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Saved as they go if the cook gets pulled away</span>
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
          <h3>Delivered the way your office already takes it</h3>
          <p class="mt-12 text-muted">
            The order leaves as an email carrying a PDF, Excel or Word file, or goes straight into
            your ERP over the API, over EDI, or into QuickBooks. You do not have to remove any software first.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Addressed to a named rep, or to the purchasing desk</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Over EDI, the API or QuickBooks, nobody on your team retypes it</span>
            </li>
            <li>
              <span class="bullet-check">✓</span>
              <span>Its own number, with the date and time it was sent</span>
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
          <h3>Stock on view as the orders come through</h3>
          <p class="mt-12 text-muted">
            VoiceOrder Solutions carries real-time inventory visibility tied to order activity, and
            the catalog updates as stock levels change. It does not replace your stock system: that stays in charge, and a demo shows how the levels connect.
          </p>
          <ul class="feature-bullets mt-24">
            <li>
              <span class="bullet-check">✓</span>
              <span>Across the whole catalog, not just the quick movers</span>
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
              <span>No counting and no buying happens on our side</span>
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
      <h2>Three steps, and no IT project</h2>
      <p class="lead mt-16">
        You hand over the guides, we load them and set up each account, and the kitchens take it from there.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>Give us your guides</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          A spreadsheet is enough. Items and the price per account land in one
          admin screen, against the codes you already use.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Each customer is set up</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts are opened for you, and the kitchen downloads the app. Most will
          have sent something in before the day ends.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Orders come in whole</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          It arrives approved by the customer, numbered, timed and in a format your desk can use.
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
      <h2>What the desk stops doing</h2>
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
            "Our chefs go through the order on their own phone before they send it."
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
            "The kitchens say what they need at the end of service, and it is on our desk in the morning."
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
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">Side By Side</span>
      <h2>Running WizCommerce and VoiceOrder Solutions together</h2>
      <p class="lead mt-16">
        Running both is a perfectly sensible outcome, because we are not a WizCommerce
        replacement. Our app moves some accounts off sending paperwork at all. Anything still arriving as a scan or a spreadsheet keeps being read by WizCommerce's AI. For many distributors
        that is what a WizCommerce alternative amounts to.
      </p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📉</div>
        <h4>Less to check at your end</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Accounts on the app send lines they have already checked, not a note to decode. The WizCommerce AI still reads everything else it handles today.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧾</div>
        <h4>Quotes, payments and the store stay put</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          None of that is on offer here and none of it is affected. We hand over a finished order and do not touch what your other software does with it.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🧷</div>
        <h4>Point it at the accounts that phone most</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Buyers who already self-serve in the storefront can stay there. Begin with a handful of the kitchens that call the desk, and leave every other arrangement exactly where it is.
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
      <h3 style="margin-bottom:10px;">See what lands on the desk</h3>
      <p class="text-muted" style="font-size:16px;">
        Twenty minutes. A buyer speaks, the lines come up from their guide, and what reaches you is a finished, itemized order.
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
      <h2>What WizCommerce distributors ask us</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Is a WizCommerce alternative the only way to get spoken orders?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. You can keep WizCommerce and bring us in for the accounts who prefer talking an order through to writing one. Everything their platform does now carries on. The difference is that some orders arrive already itemized, so there is less for WizCommerce's AI and your team to read.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VoiceOrder Solutions better than WizCommerce?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Not at what they are built for: reading a handwritten sheet, quoting an inquiry, running a store, customer records or payments. We do none of it. Where we are stronger is one step, an order the buyer builds and approves, so your team is not left decoding a message. That is a reason to
          run us next to their platform rather than instead of it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Doesn't WizCommerce handle voice already?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          They do: voice notes are on the list of what WizCommerce's AI assistant reads, alongside scans and handwriting. So a WizCommerce alternative pitched on voice alone would be wrong. The difference is when the order gets built. Their AI works out what a voice message said after it is sent. In our app, speaking creates the order lines, and the buyer approves them before anything is sent.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is WizCommerce linked to VoiceOrder Solutions in any way?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. There is nothing between them, and each company supports only its own product. Each sends its orders into
          your own system separately: theirs through their ERP connections, ours by email or straight into your system. Neither one routes through the other.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Will storefront buyers need a second way to order?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Only if you choose to give them one. Our app is for any kitchen that still phones, emails a scan or sends a spreadsheet. Be clear on one limit: a call or a voicemail to your desk
          gets no order number from us, no timestamp and no stock update. Only orders
          placed in the app do.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How fast could spoken orders be running?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most distributors have the app live in 24 to 48 hours, and most kitchens manage a first order that day. Nothing in WizCommerce has to change, so the platform
          keeps running while your first few accounts start speaking orders.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How is pricing handled if we keep both?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          We quote per distributor and publish nothing, and they quote their platform too. The one
          price list they publish is for their AI photo product, which has its own page and tiers.
          Keeping WizCommerce means the only new cost is our app, and a quote from us covers
          that.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Where do the WizCommerce details on this page come from?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          The WizCommerce facts above were checked at wizcommerce.com, dated 10 October 2026: the product family, the assistant's own list of what it reads, the review step and their industry pages. We do not repeat their performance numbers, which are theirs to stand behind. Anything that has moved since is a mistake at our end.
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
  <h2>Give your team fewer orders to check</h2>
  <p>Twenty minutes, one spoken order, from the kitchen to your inbox.</p>

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
        <li><a href="#comparison">WizCommerce + VoiceOrder Solutions</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VoiceOrder Solutions</h5>
      <ul role="list">
        <li><a href="/order-entry-software">Order Entry</a></li>
        <li><a href="/inventory-control-software">Inventory Control</a></li>
        <li><a href="/distributor-analytics-software">Distributor Analytics</a></li>
        <li><a href="/restaurant-checklist-software">Restaurant Checklist</a></li>
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
