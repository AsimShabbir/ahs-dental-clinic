<?php
require __DIR__ . '/includes/config.php';
$page = 'blog';
$title = 'Journal | AHS Dental Clinic';
$description = 'Practical notes on dental visits, whitening, and children’s first appointments.';
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$crumbs = '<a href="index.php">Home</a> / Journal';
$hero_kicker = 'Journal';
$hero_title = 'Notes from the operatory, not ads in disguise.';
$hero_lede = 'Short essays from the team. We would rather change a habit than sell a tray.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container blog-grid">
        <?php foreach ($posts as $post): ?>
            <article class="blog-card">
                <a href="<?= htmlspecialchars($post['file']) ?>"><img src="<?= htmlspecialchars($post['image']) ?>" alt=""></a>
                <div class="blog-card-body">
                    <p class="meta"><?= htmlspecialchars($post['date']) ?> · <?= htmlspecialchars($post['author']) ?></p>
                    <h3><a href="<?= htmlspecialchars($post['file']) ?>"><?= htmlspecialchars($post['title']) ?></a></h3>
                    <p><?= htmlspecialchars($post['excerpt']) ?></p>
                    <a class="link-more" href="<?= htmlspecialchars($post['file']) ?>">Read <?= icon('arrow') ?></a>
                </div>
            </article>
        <?php endforeach; ?>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
