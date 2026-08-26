<?php
require __DIR__ . '/includes/config.php';
$page = 'services';
$title = 'Services | AHS Dental Clinic';
$description = 'General, cosmetic, orthodontic, pediatric, preventive, and restorative dentistry in Portland.';
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$crumbs = '<a href="index.php">Home</a> / Services';
$hero_kicker = 'Care menu';
$hero_title = 'Choose the work your mouth actually needs.';
$hero_lede = 'Six disciplines under one roof, so you are not bounced between offices for a cleaning, a veneer consult, and a child’s first visit.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container service-bento">
        <?php foreach ($services as $i => $svc): ?>
            <a class="service-card<?= $i < 2 ? ' wide' : '' ?>" href="<?= htmlspecialchars($svc['file']) ?>">
                <img src="<?= htmlspecialchars($svc['image']) ?>" alt="<?= htmlspecialchars($svc['title']) ?>">
                <div class="service-card-body">
                    <div class="service-index">0<?= $i + 1 ?></div>
                    <h3><?= htmlspecialchars($svc['title']) ?></h3>
                    <p><?= htmlspecialchars($svc['excerpt']) ?></p>
                    <span class="link-more">View details <?= icon('arrow') ?></span>
                </div>
            </a>
        <?php endforeach; ?>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
