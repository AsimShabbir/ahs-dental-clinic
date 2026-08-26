<?php
require __DIR__ . '/includes/config.php';
require __DIR__ . '/includes/forms.php';
$page = 'home';
$title = 'AHS Dental Clinic | Portland dental clinic';
$description = 'AHS Dental Clinic is a Portland clinic for unhurried exams, cosmetic dentistry, orthodontics, pediatric care, and restorative work.';
$appt = aurelia_handle_appointment();
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
?>

<section class="hero">
    <div class="hero-media" role="img" aria-label="Dentist examining a smiling young patient"></div>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <p class="hero-kicker">Family Dental Care</p>
        <h1>Elevating Smiles with Expert Care and a Gentle Touch</h1>
        <a class="btn btn-ghost" href="booking.php">Book Appointment</a>
        <p class="hero-rating">
            <span>Google Rating <strong>5.0</strong></span>
            <span class="stars gold" aria-label="5 stars"><?= str_repeat(icon('star'), 5) ?></span>
            <span>Based on 23k Reviews</span>
        </p>
    </div>
</section>

<div class="marquee" aria-hidden="true">
    <div class="marquee-track">
        <?php
        $chips = ['Exams & hygiene', 'Invisalign-style aligners', 'Porcelain veneers', 'Implants', 'Kids studio', 'Night guards', 'Whitening', 'Crowns & bridges'];
        $loop = array_merge($chips, $chips);
        foreach ($loop as $chip) echo '<span>· ' . htmlspecialchars($chip) . '</span>';
        ?>
    </div>
</div>

<section>
    <div class="container about-grid">
        <div class="about-photos">
            <img src="assets/img/about.jpg" alt="Dentist speaking with a patient">
            <img src="assets/img/clinic.jpg" alt="Reception and waiting lounge">
            <img src="assets/img/consult.jpg" alt="Consultation in a quiet office">
        </div>
        <div>
            <p class="eyebrow">The clinic</p>
            <h2>A slower practice in a city that rarely slows down.</h2>
            <p class="lede">We opened Aurelia to give Portland a room that feels closer to a studio than a corridor of operatories. Appointments run long enough to answer the second question.</p>
            <ul class="checklist">
                <li><?= icon('check') ?> Digital scans instead of messy impressions whenever we can</li>
                <li><?= icon('check') ?> Written treatment plans with clear fees before work begins</li>
                <li><?= icon('check') ?> Nitrous and paced visits for dental anxiety</li>
                <li><?= icon('check') ?> Sterile protocols you can actually see</li>
            </ul>
            <a class="btn btn-outline" href="about.php">Our story <?= icon('arrow') ?></a>
        </div>
    </div>
</section>

<section style="padding-top:0">
    <div class="container">
        <div class="section-head">
            <div>
                <p class="eyebrow">Care</p>
                <h2>Six ways we look after a smile.</h2>
            </div>
            <a class="btn btn-outline" href="services.php">All services</a>
        </div>
        <div class="service-bento">
            <?php foreach ($services as $i => $svc): ?>
                <a class="service-card<?= $i === 0 ? ' wide' : '' ?>" href="<?= htmlspecialchars($svc['file']) ?>">
                    <img src="<?= htmlspecialchars($svc['image']) ?>" alt="<?= htmlspecialchars($svc['title']) ?>">
                    <div class="service-card-body">
                        <div class="service-index">0<?= $i + 1 ?></div>
                        <h3><?= htmlspecialchars($svc['title']) ?></h3>
                        <p><?= htmlspecialchars($svc['excerpt']) ?></p>
                        <span class="link-more">Learn more <?= icon('arrow') ?></span>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="band">
    <div class="container why-grid">
        <div>
            <p class="eyebrow light">Why Aurelia</p>
            <h2>Precision without the cold clinic feeling.</h2>
            <div class="feature-list" style="margin-top:1.6rem">
                <div class="feature">
                    <div class="feature-icon"><?= icon('shield') ?></div>
                    <div>
                        <h3>Prevention first</h3>
                        <p>We would rather polish and coach than rebuild. Recall visits are tailored to your gums, not a calendar default.</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="feature-icon"><?= icon('sparkle') ?></div>
                    <div>
                        <h3>Aesthetics with restraint</h3>
                        <p>Cosmetic work is designed against your face, bite, and how you actually live — not a shade tab from a catalog.</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="feature-icon"><?= icon('child') ?></div>
                    <div>
                        <h3>Whole-family hours</h3>
                        <p>Pediatric mornings, after-work hygiene, and Saturday consults so care does not compete with school pickup.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="stat-grid">
            <div class="stat"><strong>12k+</strong> visits completed with the current team</div>
            <div class="stat"><strong>96%</strong> patients who return within 18 months</div>
            <div class="stat"><strong>40 min</strong> typical new-patient exam, never rushed</div>
            <div class="stat"><strong>0</strong> surprise invoices — fees in writing first</div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-head">
            <div>
                <p class="eyebrow">People</p>
                <h2>Dentists who stay in the room.</h2>
            </div>
            <a class="btn btn-outline" href="dentists.php">Meet the team</a>
        </div>
        <div class="team-grid">
            <?php foreach ($dentists as $doc): ?>
                <article class="team-card">
                    <img src="<?= htmlspecialchars($doc['image']) ?>" alt="<?= htmlspecialchars($doc['name']) ?>">
                    <div class="team-card-body">
                        <h3><?= htmlspecialchars($doc['name']) ?></h3>
                        <p class="role"><?= htmlspecialchars($doc['role']) ?></p>
                        <p><?= htmlspecialchars($doc['focus']) ?></p>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section style="padding-top:0">
    <div class="container">
        <div class="section-head">
            <div>
                <p class="eyebrow">Visit rhythm</p>
                <h2>From first call to walking out lighter.</h2>
            </div>
        </div>
        <div class="process">
            <div class="process-item">
                <h3>Tell us what hurts — or what you hope for</h3>
                <p>Book online or call. Share anxiety, a cracked tooth, or a smile you have been putting off.</p>
            </div>
            <div class="process-item">
                <h3>Unhurried exam &amp; images</h3>
                <p>We look, listen, and scan. You see the same pictures we do, in language that is not coded.</p>
            </div>
            <div class="process-item">
                <h3>A plan with real numbers</h3>
                <p>Options, sequence, and fees on paper. Nothing starts until you choose.</p>
            </div>
            <div class="process-item">
                <h3>Care, then a recall that fits</h3>
                <p>Treatment when needed. Hygiene on a cadence that matches your gums, not our software default.</p>
            </div>
        </div>
    </div>
</section>

<section class="band" style="padding:4.5rem 0">
    <div class="container quote-grid">
        <blockquote class="quote featured">
            <div>
                <div class="stars"><?= icon('star') . icon('star') . icon('star') . icon('star') . icon('star') ?></div>
                <h3>“They treated my fear as part of the diagnosis, not an inconvenience.”</h3>
            </div>
            <div class="quote-who">
                <img src="assets/img/patient-1.jpg" alt="Elena M.">
                <div><strong>Elena M.</strong><span>Invisalign · 14 months</span></div>
            </div>
        </blockquote>
        <div style="display:grid;gap:1.1rem">
            <blockquote class="quote">
                <div class="stars"><?= icon('star') . icon('star') . icon('star') . icon('star') . icon('star') ?></div>
                <p>Our six-year-old asked to come back. That has never happened at a dental office.</p>
                <div class="quote-who">
                    <img src="assets/img/patient-2.jpg" alt="Marcus T.">
                    <div><strong>Marcus T.</strong><span>Parent · pediatric care</span></div>
                </div>
            </blockquote>
            <blockquote class="quote">
                <div class="stars"><?= icon('star') . icon('star') . icon('star') . icon('star') . icon('star') ?></div>
                <p>Crown in one visit, bill exactly as quoted. Quiet rooms. Excellent coffee. I am not easy to impress.</p>
                <div class="quote-who">
                    <img src="assets/img/patient-3.jpg" alt="Sofia R.">
                    <div><strong>Sofia R.</strong><span>Restorative patient</span></div>
                </div>
            </blockquote>
        </div>
    </div>
    <div class="container" style="margin-top:1.4rem">
        <a class="btn btn-cream" href="testimonials.php">Read more stories</a>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-head">
            <div>
                <p class="eyebrow">Rooms</p>
                <h2>The studio, not a waiting maze.</h2>
            </div>
            <a class="btn btn-outline" href="gallery.php">Full gallery</a>
        </div>
        <div class="gallery-mosaic" data-gallery>
            <a href="assets/img/gallery-1.jpg"><img src="assets/img/gallery-1.jpg" alt="Treatment suite"></a>
            <a href="assets/img/gallery-2.jpg"><img src="assets/img/gallery-2.jpg" alt="Patient smile"></a>
            <a href="assets/img/gallery-3.jpg"><img src="assets/img/gallery-3.jpg" alt="Clinic interior"></a>
            <a href="assets/img/gallery-5.jpg"><img src="assets/img/gallery-5.jpg" alt="Consultation"></a>
            <a href="assets/img/gallery-6.jpg"><img src="assets/img/gallery-6.jpg" alt="Front desk"></a>
            <a href="assets/img/cta.jpg"><img src="assets/img/cta.jpg" alt="Happy patient"></a>
        </div>
    </div>
</section>

<section style="padding-top:0">
    <div class="container">
        <div class="section-head">
            <div>
                <p class="eyebrow">Journal</p>
                <h2>Notes from the operatory.</h2>
            </div>
            <a class="btn btn-outline" href="blog.php">All articles</a>
        </div>
        <div class="blog-grid">
            <?php foreach ($posts as $post): ?>
                <article class="blog-card">
                    <a href="<?= htmlspecialchars($post['file']) ?>"><img src="<?= htmlspecialchars($post['image']) ?>" alt=""></a>
                    <div class="blog-card-body">
                        <p class="meta"><?= htmlspecialchars($post['date']) ?> · <?= htmlspecialchars($post['author']) ?></p>
                        <h3><a href="<?= htmlspecialchars($post['file']) ?>"><?= htmlspecialchars($post['title']) ?></a></h3>
                        <p><?= htmlspecialchars($post['excerpt']) ?></p>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section style="padding-top:0">
    <div class="container split">
        <div>
            <p class="eyebrow">Appointments</p>
            <h2>Request a time. We will confirm it.</h2>
            <p class="lede">New patients: please allow 40 minutes. Emergency pain: call the desk and we will hold a same-day slot when we can.</p>
            <div class="info-stack">
                <div class="info-tile"><?= icon('phone') ?><div><strong>Front desk</strong><p style="margin:0"><?= htmlspecialchars($site['phone']) ?></p></div></div>
                <div class="info-tile"><?= icon('clock') ?><div><strong>Hours</strong><p style="margin:0"><?= htmlspecialchars($site['hours']) ?></p></div></div>
                <div class="info-tile"><?= icon('pin') ?><div><strong>Studio</strong><p style="margin:0"><?= htmlspecialchars($site['address']) ?>, <?= htmlspecialchars($site['city']) ?></p></div></div>
            </div>
        </div>
        <div class="form-card">
            <?php if ($appt): ?>
                <div class="alert<?= $appt['ok'] ? '' : ' error' ?>"><?= htmlspecialchars($appt['message']) ?></div>
            <?php endif; ?>
            <form method="post" novalidate>
                <input type="hidden" name="form" value="appointment">
                <div class="form-grid">
                    <div class="field"><label for="h-name">Full name</label><input id="h-name" name="name" required></div>
                    <div class="field"><label for="h-phone">Phone</label><input id="h-phone" name="phone" required></div>
                    <div class="field"><label for="h-email">Email</label><input id="h-email" name="email" type="email" required></div>
                    <div class="field">
                        <label for="h-service">Care needed</label>
                        <select id="h-service" name="service" required>
                            <option value="">Select…</option>
                            <?php foreach ($services as $svc): ?>
                                <option><?= htmlspecialchars($svc['title']) ?></option>
                            <?php endforeach; ?>
                            <option>Emergency / pain</option>
                        </select>
                    </div>
                    <div class="field"><label for="h-date">Preferred date</label><input id="h-date" name="date" type="date" required></div>
                    <div class="field">
                        <label for="h-time">Preferred time</label>
                        <select id="h-time" name="time">
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening (Thu)</option>
                        </select>
                    </div>
                    <div class="field full"><label for="h-notes">Anything we should know?</label><textarea id="h-notes" name="notes"></textarea></div>
                </div>
                <button class="btn btn-terracotta" type="submit" style="margin-top:1rem">Send request <?= icon('arrow') ?></button>
                <p class="form-note">This demo stores requests locally as JSON. Wire SMTP in production.</p>
            </form>
        </div>
    </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
