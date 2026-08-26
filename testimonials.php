<?php
require __DIR__ . '/includes/config.php';
$page = 'testimonials';
$title = 'Reviews | AHS Dental Clinic';
$description = 'Patient stories from AHS Dental Clinic in Portland.';
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$reviews = [
    ['Elena M.', 'Invisalign · 14 months', 'assets/img/patient-1.jpg', 'They treated my fear as part of the diagnosis, not an inconvenience. Aligners were explained like a project plan, with dates I could put on a calendar.'],
    ['Marcus T.', 'Parent · pediatric care', 'assets/img/patient-2.jpg', 'Our six-year-old asked to come back. Priya let him hold the mirror and never once talked over his head to me.'],
    ['Sofia R.', 'Crowns', 'assets/img/patient-3.jpg', 'Crown in one visit, bill exactly as quoted. Quiet rooms. I am not easy to impress and I have already sent my partner.'],
    ['Daniel K.', 'Hygiene', 'assets/img/dentist-2.jpg', 'I used to cancel cleanings. The extra ten minutes of explaining what they were seeing on the scan is why I stopped disappearing.'],
    ['Amira S.', 'Veneers', 'assets/img/cta.jpg', 'Maya talked me out of eight veneers and into two. That honesty is why I trusted the two we did.'],
    ['Owen P.', 'Implant', 'assets/img/consult.jpg', 'Lost a molar on a trail run. Elias mapped the implant like an engineer and the chewing feels ordinary again, which is the whole point.'],
];
$crumbs = '<a href="index.php">Home</a> / Reviews';
$hero_kicker = 'Patients';
$hero_title = 'What people say when the numb wears off.';
$hero_lede = 'A handful of composite stories in the tone of real visits. Replace these with your verified reviews before going live.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container blog-grid">
        <?php foreach ($reviews as $review): ?>
            <blockquote class="quote">
                <div class="stars"><?= str_repeat(icon('star'), 5) ?></div>
                <p><?= htmlspecialchars($review[3]) ?></p>
                <div class="quote-who">
                    <img src="<?= htmlspecialchars($review[2]) ?>" alt="<?= htmlspecialchars($review[0]) ?>">
                    <div><strong><?= htmlspecialchars($review[0]) ?></strong><span><?= htmlspecialchars($review[1]) ?></span></div>
                </div>
            </blockquote>
        <?php endforeach; ?>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
