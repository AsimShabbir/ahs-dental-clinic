<?php require __DIR__ . '/icons.php'; ?>
<header class="site-header" data-header>
    <div class="nav-bar">
        <div class="container nav-inner">
            <a class="logo" href="index.php" aria-label="<?= htmlspecialchars($site['name']) ?> home">
                <img src="assets/img/logo.png" alt="<?= htmlspecialchars($site['name']) ?>">
            </a>
            <nav class="nav" data-nav aria-label="Primary">
                <?php foreach ($nav as $item): ?>
                    <?php
                    $page_ids = ['about', 'gallery', 'faq', 'testimonials', 'booking'];
                    $active = ($page === $item['id'])
                        || ($item['id'] === 'services' && $page === 'services')
                        || ($item['id'] === 'pages' && in_array($page, $page_ids, true));
                    ?>
                    <div class="nav-item<?= !empty($item['children']) ? ' has-sub' : '' ?>">
                        <a class="<?= $active ? 'is-active' : '' ?>" href="<?= htmlspecialchars($item['href']) ?>">
                            <?= htmlspecialchars($item['label']) ?>
                            <?php if (!empty($item['children'])) echo icon('chevron', 'icon icon-caret'); ?>
                        </a>
                        <?php if (!empty($item['children'])): ?>
                            <div class="subnav">
                                <?php foreach ($item['children'] as $child): ?>
                                    <a href="<?= htmlspecialchars($child[1]) ?>"><?= htmlspecialchars($child[0]) ?></a>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </nav>
            <div class="nav-actions">
                <a class="btn btn-accent" href="booking.php">Book Appointment</a>
                <button class="menu-toggle" type="button" data-panel-open aria-label="Open menu" aria-expanded="false" aria-controls="extra-panel">
                    <?= icon('menu', 'icon icon-menu') ?>
                </button>
            </div>
        </div>
    </div>
</header>

<div class="extra-backdrop" data-panel-backdrop hidden></div>
<aside class="extra-panel" id="extra-panel" data-extra-panel aria-hidden="true">
    <div class="extra-panel-head">
        <a class="logo" href="index.php" aria-label="<?= htmlspecialchars($site['name']) ?> home">
            <img src="assets/img/logo.png" alt="<?= htmlspecialchars($site['name']) ?>">
        </a>
        <button class="extra-panel-close" type="button" data-panel-close aria-label="Close menu">
            <?= icon('close') ?>
        </button>
    </div>
    <div class="extra-panel-body">
        <nav class="extra-panel-nav" aria-label="Mobile">
            <?php foreach ($nav as $item): ?>
                <a href="<?= htmlspecialchars($item['href']) ?>"><?= htmlspecialchars($item['label']) ?></a>
            <?php endforeach; ?>
        </nav>
        <section class="extra-block">
            <h3>Our Services</h3>
            <ul class="extra-services">
                <?php foreach ($services as $svc): ?>
                    <li>
                        <a href="<?= htmlspecialchars($svc['file']) ?>">
                            <?= icon('check') ?>
                            <?= htmlspecialchars($svc['title']) ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </section>
        <section class="extra-block">
            <h3>Contact Us</h3>
            <ul class="extra-contact">
                <li><?= icon('clock') ?> Monday - Friday 08.00 - 18.00</li>
                <li><?= icon('pin') ?> <?= htmlspecialchars($site['address']) ?>, <?= htmlspecialchars($site['city']) ?></li>
                <li><?= icon('mail') ?> <a href="mailto:<?= htmlspecialchars($site['email']) ?>"><?= htmlspecialchars($site['email']) ?></a></li>
                <li><?= icon('phone') ?> <a href="<?= htmlspecialchars($site['phone_href']) ?>"><?= htmlspecialchars($site['phone']) ?></a></li>
            </ul>
        </section>
        <section class="extra-block">
            <h3>About Us</h3>
            <p>AHS Dental Clinic provides unhurried exams, considered cosmetic work, and family care in Lahore.</p>
            <a class="extra-more" href="about.php">Learn more <?= icon('arrow') ?></a>
        </section>
    </div>
    <button class="to-top" type="button" data-to-top aria-label="Back to top"><?= icon('chevron-up') ?></button>
</aside>

<main id="main">
