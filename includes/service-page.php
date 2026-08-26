<?php
$details = [
    'general' => [
        'also' => ['Comprehensive exams & digital x-rays', 'Hygiene and periodontal maintenance', 'Fillings in tooth-colored composite', 'Night guards for clenching', 'Same-week urgent visits for pain'],
        'body' => 'Most of what keeps a mouth comfortable happens here: seeing small problems while they are still small, cleaning thoroughly, and choosing materials that disappear in conversation. We set recall based on your gums and habits, not a one-size interval.',
    ],
    'cosmetic' => [
        'also' => ['Shade-matched whitening protocols', 'Porcelain veneers and bonding', 'Smile previews before committing', 'Gum-line refinement with specialists', 'Replacement of stained old restorations'],
        'body' => 'We do not sell a “Hollywood set.” We photograph, discuss what bothers you in the mirror, and mock up options. Some smiles need one tooth. Some need a quieter whitening plan. You choose the finish line.',
    ],
    'orthodontics' => [
        'also' => ['Clear aligner therapy', 'Discreet ceramic braces', 'Bite correction for adults', 'Retainers that people actually wear', 'Teen-friendly check-in cadence'],
        'body' => 'Alignment is a timeline, not a product. Dr. Park maps movement in 3D, flags teeth that should not be moved, and tells you honestly if aligners are a poor fit for your case.',
    ],
    'pediatric' => [
        'also' => ['Tell-show-do first visits', 'Sealants and fluoride varnish', 'Habit counseling (thumbs, pacifiers)', 'Sports mouthguards', 'Careful referrals when specialists are kinder'],
        'body' => 'The kids’ studio is a separate pace, not a smaller adult chair. Visit one is often just a ride, a count, and a prize. Treatment waits until trust exists.',
    ],
    'preventive' => [
        'also' => ['Risk mapping for decay and gum disease', 'Custom hygiene intervals', 'Fluoride and remineralization', 'Oral cancer screening', 'Home-care that fits real schedules'],
        'body' => 'Prevention is the work we are proudest of because it is invisible. You leave with a plan, not a bag of samples you will never use.',
    ],
    'restorative' => [
        'also' => ['Crowns and onlays', 'Dental implants and implant crowns', 'Bridges when implants are not right', 'Worn-smile rehabilitation', 'Emergency repair of broken teeth'],
        'body' => 'Restorative dentistry should feel ordinary when you chew. We restore strength first, then blend shade and shape so nobody asks what happened — they just notice you look well.',
    ],
];
$extra = $details[$service['slug']];
$page = 'services';
$title = $service['title'] . ' | AHS Dental Clinic';
$description = $service['excerpt'];
require __DIR__ . '/head.php';
require __DIR__ . '/header.php';
$crumbs = '<a href="index.php">Home</a> / <a href="services.php">Services</a> / ' . htmlspecialchars($service['title']);
$hero_kicker = $service['title'];
$hero_title = $service['title'];
$hero_lede = $service['intro'];
require __DIR__ . '/page-hero.php';
?>
<section>
    <div class="container split">
        <div class="prose">
            <img class="cover-img" src="<?= htmlspecialchars($service['image']) ?>" alt="<?= htmlspecialchars($service['title']) ?>">
            <p><?= htmlspecialchars($extra['body']) ?></p>
            <h2>Included in this care</h2>
            <ul>
                <?php foreach ($extra['also'] as $item): ?>
                    <li><?= htmlspecialchars($item) ?></li>
                <?php endforeach; ?>
            </ul>
            <p>Not sure this is the right starting point? Book a consult. We will say so if another service fits better.</p>
            <a class="btn btn-terracotta" href="booking.php">Request this care <?= icon('arrow') ?></a>
        </div>
        <aside>
            <div class="form-card">
                <h3>Other services</h3>
                <ul>
                    <?php foreach ($services as $svc): ?>
                        <li style="margin-bottom:.55rem"><a class="link-more" href="<?= htmlspecialchars($svc['file']) ?>"><?= htmlspecialchars($svc['title']) ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="form-card" style="margin-top:1rem">
                <h3>Talk to the desk</h3>
                <p><?= htmlspecialchars($site['phone']) ?><br><?= htmlspecialchars($site['email']) ?></p>
                <a class="btn btn-outline" href="contact.php">Contact</a>
            </div>
        </aside>
    </div>
</section>
<?php require __DIR__ . '/footer.php'; ?>
