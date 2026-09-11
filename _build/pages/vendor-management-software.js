/* Page 13 - PRIMARY: vendor management software (x6 standalone: 2 headings, 2 body, 2 FAQ)
 * SECONDARY: restaurant vendor management software (Tier A, H3; added from GSC data: main domain ranks 2.4)
 *            vendor relationship management software (Tier A, H3)
 *            vendor management system software (Tier B, body, reframed to a kitchen's supplier list)
 *            vendor contract management software (Tier C, disambiguating FAQ)
 * Separation vs restaurant purchasing: purchasing = buying from every supplier in one place.
 * Vendor management = which suppliers work for you, on what terms, and how they want orders.
 * NOT claimed: supplier scorecards, contract storage, supplier onboarding portals.
 * Assumptions: per-supplier filtering of history/shorts (Q9), order format set per supplier (Q11).
 */
module.exports = {
  title: 'Vendor Management Software for Restaurants | VoiceOrder',
  description: 'VoiceOrder Solutions is vendor management software for restaurants. Every food supplier on one screen, with your pricing, order history, and shorts.',
  related: ['restaurant-purchasing-software', 'catalog-management-software', 'order-tracking-software'],
  relatedHeading: 'The rest of the supplier side',
  body: `
<!--@NAVBAR-->


<!-- ============================================================
     SECTION 2: HERO
     Primary keyword in H1: "vendor management software"
     ============================================================ -->
<section class="hero" aria-label="Hero">
  <div class="hero-grid">

    <div>
      <span class="eyebrow">Vendor Management Software for Food Service</span>
      <h1>Vendor Management Software for Your Food Suppliers.</h1>
      <p class="lead mt-16">
        VoiceOrder Solutions is vendor management software for restaurants that
        buy from more than one distributor. Every supplier sits on one screen with
        your pricing, the way they like to get orders, and a record of what they
        actually delivered. No binders. No system to replace.
      </p>

      <div class="hero-ctas">
        <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
        <a href="#how-it-works" class="btn btn-outline-white btn-lg">See How It Works</a>
      </div>

      <div class="hero-trust">
        <span>Keep your current suppliers</span>
        <span class="hero-trust-dot"></span>
        <span>Up and running in 1 day</span>
        <span class="hero-trust-dot"></span>
        <span>iOS + Android + Web</span>
      </div>
    </div>

    <div>
      <!-- DEVS: Replace with VOS product screenshot (supplier list with pricing + order format per supplier) -->
      <div class="img-placeholder tall">
        📸 Product screenshot:<br>Supplier list showing each<br>distributor, order format,<br>and recent orders
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
      <div class="stat-number">One</div>
      <div class="stat-label">screen for every supplier you buy from</div>
    </div>
    <div>
      <div class="stat-number">5</div>
      <div class="stat-label">order formats: email, PDF, Excel, EDI, API</div>
    </div>
    <div>
      <div class="stat-number">24/7</div>
      <div class="stat-label">ordering, outside every supplier's office hours</div>
    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 5: PROBLEM STATEMENT
     ============================================================ -->
<section class="section-pad bg-light" id="problem" aria-label="Problem statement">
  <div class="container text-center">
    <span class="eyebrow">Sound Familiar?</span>
    <h2>Every supplier works differently, and none of it is written down.</h2>
    <p class="lead mt-16" style="margin: 16px auto 0;">
      Most kitchens manage suppliers through a phone, a group chat, and a
      manager's memory. It holds together until something goes wrong. Here's
      what it costs:
    </p>

    <div class="problem-grid">

      <div class="problem-card">
        <div class="problem-icon">🧩</div>
        <h4 class="mb-8">"Each supplier has its own process"</h4>
        <p class="text-muted" style="font-size:15px;">
          Produce wants a text, the broadliner has a portal, the butcher only
          takes calls. Your manager learns four systems just to get through Tuesday.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">📉</div>
        <h4 class="mb-8">"We can't say which supplier keeps shorting us"</h4>
        <p class="text-muted" style="font-size:15px;">
          You know someone does. But with no record of what was ordered against
          what showed up, it's a feeling, not a fact you can raise with the rep.
        </p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">💲</div>
        <h4 class="mb-8">"The invoice price isn't the price we agreed"</h4>
        <p class="text-muted" style="font-size:15px;">
          The deal was made on a call months ago. Nobody wrote it down where the
          ordering happens, so the new price slid through unnoticed.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ============================================================
     SECTION 6: FEATURE DEEP-DIVE – ALTERNATING ROWS
     ============================================================ -->
<section class="section-pad" id="features" aria-label="Feature details">
  <div class="container">

    <div class="text-center" style="max-width: 760px; margin: 0 auto 72px;">
      <span class="eyebrow">Built for Food Suppliers</span>
      <h2>Vendor management software built around the suppliers you already use</h2>
    </div>


    <!-- Feature 1: SECONDARY IN H3 (Tier A) – restaurant vendor management software; Tier B in body -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">One Supplier List</span>
          <h3>Restaurant vendor management software with every supplier on one screen.</h3>
          <p class="mt-12 text-muted">
            Produce, protein, dairy, dry goods, paper. Every distributor you buy from
            lives in one place, each with its own catalog, pack sizes, and the prices
            you agreed. Think of it as vendor management system software sized for a
            kitchen, not for a procurement department.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Every supplier and their catalog in one list</span></li>
            <li><span class="bullet-check">✓</span><span>Your negotiated pricing attached to each account</span></li>
            <li><span class="bullet-check">✓</span><span>Pack sizes and units exactly as each supplier sells them</span></li>
            <li><span class="bullet-check">✓</span><span>Add or drop a supplier without rebuilding anything</span></li>
          </ul>
          <a href="/restaurant-purchasing-software" class="feature-link">See buying across suppliers →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Supplier list with catalog<br>size, pricing status,<br>and last order date
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 2: per-supplier order format (assumption Q11) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Their Format, Not Yours</span>
          <h3>Each supplier gets orders the way they want them.</h3>
          <p class="mt-12 text-muted">
            Your produce guy wants an email. The broadliner wants EDI. The small
            bakery is happy with a PDF. You place every order the same way, by voice
            or web, and VOS sends each supplier the format they already work with.
            Nobody on their side has to install anything.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Email, PDF, Excel, EDI, or a direct API push</span></li>
            <li><span class="bullet-check">✓</span><span>Set once per supplier, then forget about it</span></li>
            <li><span class="bullet-check">✓</span><span>Your team orders one way for every supplier</span></li>
            <li><span class="bullet-check">✓</span><span>No new system for your suppliers to learn</span></li>
          </ul>
          <a href="/order-entry-software" class="feature-link">See how orders get placed →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Per-supplier delivery settings<br>for email, PDF, Excel,<br>EDI, and API
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 3: SECONDARY IN H3 (Tier A) – vendor relationship management software (assumption Q9) -->
    <div style="padding-bottom: 80px; border-bottom: 1px solid #e8eaed; margin-bottom: 80px;">
      <div class="feature-row">
        <div>
          <span class="eyebrow">A Record That Holds Up</span>
          <h3>Vendor relationship management software built on real order history.</h3>
          <p class="mt-12 text-muted">
            Every order you place is saved with the supplier, items, prices, and date.
            So when you sit down with a rep, you are not going on memory. You can point
            to the orders that came up short, the substitutions you did not ask for,
            and the prices that crept up.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Order history filtered by supplier</span></li>
            <li><span class="bullet-check">✓</span><span>Shorts and substitutions on record, not in someone's head</span></li>
            <li><span class="bullet-check">✓</span><span>Price paid per item, over time, per supplier</span></li>
            <li><span class="bullet-check">✓</span><span>Real numbers for your next rep conversation</span></li>
          </ul>
          <a href="/order-tracking-software" class="feature-link">See order tracking and history →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>One supplier's order history<br>with shorts and substitutions<br>flagged
          </div>
        </div>
      </div>
    </div>


    <!-- Feature 4: agreed pricing -->
    <div>
      <div class="feature-row reverse">
        <div>
          <span class="eyebrow">Prices That Stick</span>
          <h3>Your agreed prices, on every single order.</h3>
          <p class="mt-12 text-muted">
            Pricing lives on each supplier's account, so every order goes out at the
            number you negotiated. When an invoice comes back higher, you have the
            original order to hold it against instead of a handshake from last spring.
          </p>
          <ul class="feature-bullets mt-24">
            <li><span class="bullet-check">✓</span><span>Negotiated pricing stays attached to the account</span></li>
            <li><span class="bullet-check">✓</span><span>Hold invoices against the original order</span></li>
            <li><span class="bullet-check">✓</span><span>Spot creeping prices before they hit your food cost</span></li>
            <li><span class="bullet-check">✓</span><span>Spend by supplier, visible during the month</span></li>
          </ul>
          <a href="/inventory-control-software" class="feature-link">See food cost control →</a>
        </div>
        <div>
          <div class="img-placeholder tall">
            📸 Screenshot:<br>Item price history for one<br>supplier with the agreed<br>price marked
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
      <h2>All the tools your team needs to keep suppliers in line.</h2>
      <p class="lead mt-16">No extra apps. No workarounds. Everything ships with VOS out of the box.</p>
    </div>

    <div class="cards-grid">

      <div class="feature-card">
        <div class="feature-card-icon">📋</div>
        <h4>Supplier List</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every distributor you buy from in one place, instead of in four
          portals and a phone.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📚</div>
        <h4>Per-Supplier Catalogs</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Each supplier's items and pack sizes, kept current, so orders match
          what they actually sell.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🏷️</div>
        <h4>Negotiated Pricing</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          The prices you agreed live on the account and go out on every order
          automatically.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <h4>Order Format per Supplier</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Email, PDF, Excel, EDI, or API. Each supplier gets orders the way
          their system expects.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <h4>History by Supplier</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every order to every supplier, searchable by item, date, or
          location.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔁</div>
        <h4>Shorts and Substitutions</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          What each supplier shorted or swapped, on record, ready for the next
          conversation.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">💰</div>
        <h4>Spend by Supplier</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          See what you spend with each supplier during the month, not after
          the invoices are tallied.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <h4>iOS + Android App</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Order from any supplier from the walk-in or the office. Web works
          from any browser too.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">🔗</div>
        <h4>No System Replacement</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Keep every supplier and every price you negotiated. Only the way you
          manage them changes.
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
      <h3 style="margin-bottom:10px;">See your suppliers, pricing, and order history in one place</h3>
      <p class="text-muted" style="font-size:16px;">
        Book a free 20-minute walkthrough. We'll show you the supplier list,
        per-supplier ordering, and order history working together.
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
      <h2>Up and running in one day</h2>
      <p class="lead mt-16">
        No IT team. No systems to rip out. Three steps and every supplier is
        managed the same way.
      </p>
    </div>

    <div class="steps-grid">

      <div class="step-card">
        <div class="step-number">1</div>
        <h4>We load your suppliers</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          VOS imports each distributor's products, pack sizes, and the pricing
          on your account.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <h4>Set how each one gets orders</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Email, PDF, Excel, EDI, or API. Pick once per supplier and it stays
          that way.
        </p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <h4>Order, and the record builds itself</h4>
        <p class="text-muted mt-12" style="font-size:15px;">
          Every order is saved by supplier, so history, shorts, and spend add
          up on their own.
        </p>
      </div>

    </div>

    <div class="img-placeholder mt-48" style="min-height: 280px; max-width: 860px; margin-left: auto; margin-right: auto;">
      📸 Screenshot: VOS supplier setup with catalog import and per-supplier order format
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
      <h2>What restaurant teams say about VOS</h2>
    </div>

    <div class="testimonials-grid">

      <!-- DEVS: exact quote pending client sign-off (see knowledge-base/vos-product-facts.md) -->
      <div class="testimonial-card featured">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">
          "VOS simplified the entire ordering process for our kitchen. We buy from
          five suppliers, and for the first time every one of them is in the same
          place, with the prices we agreed."
        </p>
        <div class="testimonial-author">
          <!-- DEVS: Replace with Tony Luna's photo -->
          <div class="author-avatar">Photo</div>
          <div>
            <div class="author-name" style="color:#fff;">Tony Luna</div>
            <div class="author-role">Owner-Chef</div>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px;">

        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote" style="font-size:16px;">
            "When our produce supplier kept shorting us, I pulled up three months
            of orders in a minute. The conversation with the rep went very
            differently after that."
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
            "Each of our suppliers wanted orders a different way. Now we order one
            way, and VOS sends each of them what they need."
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
     Honest ✗ rows for VOS on contracts and vendor risk.
     ============================================================ -->
<section class="section-pad bg-mid" id="comparison" aria-label="Comparison">
  <div class="container">
    <div class="text-center" style="max-width: 700px; margin: 0 auto;">
      <span class="eyebrow">Why VoiceOrder Solutions</span>
      <h2>Built for food suppliers.<br>Not an enterprise procurement suite.</h2>
      <p class="lead mt-16">
        Enterprise vendor tools assume a procurement team and a legal department.
        You have a chef and a manager. Here's how VOS compares.
      </p>
    </div>

    <div style="overflow-x:auto; margin-top: 0;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:36%;">Feature</th>
            <th class="highlight" style="width:21%;">VoiceOrder Solutions</th>
            <th style="width:21%;">Procurement Suite</th>
            <th style="width:22%;">Phone + Email + Portals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Every supplier in one place</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Per-supplier catalogs and pack sizes</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Sends each supplier its preferred format</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td>Manual</td>
          </tr>
          <tr>
            <td>Order history by supplier</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Shorts and substitutions on record</td>
            <td><span class="check-yes">✓</span></td>
            <td>Varies</td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Voice ordering</td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Contract drafting and e-signature</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Supplier risk and compliance checks</td>
            <td><span class="check-no">✗</span></td>
            <td><span class="check-yes">✓</span></td>
            <td><span class="check-no">✗</span></td>
          </tr>
          <tr>
            <td>Who has to run it</td>
            <td>Your manager</td>
            <td>A buyer</td>
            <td>Everyone</td>
          </tr>
          <tr>
            <td>Setup time</td>
            <td>1 day</td>
            <td>Months</td>
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
     Tier C: vendor contract management + staffing/risk meanings of "vendor management system"
     ============================================================ -->
<section class="section-pad" id="faq" aria-label="Frequently asked questions">
  <div class="container">
    <div class="text-center" style="max-width: 640px; margin: 0 auto;">
      <span class="eyebrow">FAQ</span>
      <h2>Common questions about managing suppliers with VOS</h2>
    </div>

    <div class="faq-list" style="max-width: 760px; margin: 0 auto;">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="true">
          Do I have to change suppliers to use VOS?
          <span class="faq-icon">−</span>
        </button>
        <div class="faq-answer">
          No. You keep every distributor you buy from and every price you have
          negotiated. VOS changes how you order from them and what gets recorded,
          not who you buy from. Your suppliers do not need to install anything.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What does vendor management software do for a restaurant?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          It puts every supplier you buy from in one place, with their catalog, your
          pricing, and how they want orders sent. Then it keeps a record of every
          order by supplier, so you can see what each one delivered, shorted, or
          substituted, and what you spent with them.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is VOS vendor contract management software?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. VOS keeps each supplier's negotiated pricing and pack sizes on your
          account so every order goes out at the right price. It does not draft
          contracts, collect e-signatures, store contract documents, or track
          renewal dates. If you need contract lifecycle management, pair VOS with a
          dedicated tool.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is this the kind of vendor management system used for staffing or vendor risk?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          No. In some industries a vendor management system means software for
          hiring contract workers, or for checking suppliers' security and
          compliance. VOS is neither. It is built for restaurants managing the food
          distributors they order from every week.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can each supplier get orders in a different format?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. You set it once per supplier: email, PDF, Excel, EDI, or a direct API
          push. Your team places every order the same way, and each supplier
          receives it the way their own system expects.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I see which supplier shorts us the most?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes, from your own records. Every order is saved with its supplier, so you
          can compare what you ordered against what arrived and see the shorts and
          substitutions for each one. That record is what makes vendor management
          software worth having: the next rep conversation starts with facts.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Does it work across several locations?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Yes. Each location orders from its own suppliers under one account, and
          owners can see every site together. That makes it easy to spot a supplier
          that treats one location better than another, or a price that differs
          between sites.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How long does setup take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="display:none;">
          Most teams are fully set up within one business day. The VOS team loads
          your suppliers, their catalogs and pack sizes, and your negotiated pricing,
          and sets how each supplier receives orders. You do not need an IT team.
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
  <h2>Ready to put every supplier on one screen?</h2>
  <p>Join restaurants that stopped juggling supplier processes and started keeping a real record of how each one performs.</p>

  <div class="final-cta-form">
    <input type="email" placeholder="Enter your work email" aria-label="Email address" />
    <a href="https://www.voiceordersolutions.com/contact-us" class="btn btn-primary btn-lg">Book a Free Demo →</a>
  </div>

  <div class="final-cta-trust">
    <span>✓ Up and running in 1 day</span>
    <span>✓ Keep your current suppliers</span>
    <span>✓ No system replacement needed</span>
    <span>✓ Free setup support included</span>
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
        <li><a href="#features">Supplier List</a></li>
        <li><a href="#features">Per-Supplier Ordering</a></li>
        <li><a href="#features">Order History</a></li>
        <li><a href="#features">Agreed Pricing</a></li>
        <li><a href="#integrations">Integrations</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
        <li><a href="/restaurant-purchasing-software">Restaurant Purchasing</a></li>
        <li><a href="/catalog-management-software">Catalog Management</a></li>
        <li><a href="/order-tracking-software">Order Tracking</a></li>
        <li><a href="/inventory-control-software">Inventory Control</a></li>
        <li><a href="/">All Features</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="https://www.voiceordersolutions.com/">Home</a></li>
        <li><a href="https://www.voiceordersolutions.com/contact-us">Contact Us</a></li>
        <li><a href="#comparison">VOS vs Procurement Suites</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <span>© 2025 VoiceOrder Solutions. All rights reserved.</span>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <a href="https://www.voiceordersolutions.com/" style="color:rgba(255,255,255,0.4);text-decoration:none;">Privacy Policy</a>
      <a href="https://www.voiceordersolutions.com/" style="color:rgba(255,255,255,0.4);text-decoration:none;">Terms of Service</a>
    </div>
  </div>
</footer>


<!--@SCRIPT-->
`,
};
