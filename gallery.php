<?php
require __DIR__ . '/includes/config.php';
$page = 'gallery';
$title = 'Gallery | AHS Dental Clinic';
$description = 'Photographs of the AHS Dental Clinic studio in Portland.';
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$shots = [
    ['assets/img/gallery-1.jpg', 'Treatment suite with natural light'],
    ['assets/img/gallery-2.jpg', 'A relaxed patient after whitening'],
    ['assets/img/gallery-3.jpg', 'Harbor Lane interior'],
    ['assets/img/gallery-4.jpg', 'Lounge seating'],
    ['assets/img/gallery-5.jpg', 'Chairside consult'],
    ['assets/img/gallery-6.jpg', 'Welcome desk'],
    ['assets/img/about.jpg', 'Listening before treating'],
    ['assets/img/consult.jpg', 'Private planning room'],
    ['assets/img/hero.jpg', 'Operatory'],
];
$crumbs = '<a href="index.php">Home</a> / Gallery';
$hero_kicker = 'Rooms';
$hero_title = 'Look around before you sit down.';
$hero_lede = 'Click any photograph to open it larger. Photos are from open libraries and stand in for a real clinic shoot.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container gallery-mosaic" data-gallery>
        <?php foreach ($shots as $shot): ?>
            <a href="<?= htmlspecialchars($shot[0]) ?>"><img src="<?= htmlspecialchars($shot[0]) ?>" alt="<?= htmlspecialchars($shot[1]) ?>"></a>
        <?php endforeach; ?>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
