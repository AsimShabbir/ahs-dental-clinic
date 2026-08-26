<section class="hero inner-hero">
    <div class="hero-media" role="img" aria-hidden="true"></div>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <?php if (!empty($crumbs)): ?>
            <p class="crumbs"><?= $crumbs ?></p>
        <?php endif; ?>
        <?php if (!empty($hero_kicker)): ?>
            <p class="hero-kicker"><?= htmlspecialchars($hero_kicker) ?></p>
        <?php endif; ?>
        <h1><?= htmlspecialchars($hero_title) ?></h1>
        <?php if (!empty($hero_lede)): ?>
            <p class="hero-lede"><?= htmlspecialchars($hero_lede) ?></p>
        <?php endif; ?>
        <a class="btn btn-ghost" href="booking.php">Book Appointment</a>
    </div>
</section>
