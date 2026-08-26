<?php
require __DIR__ . '/includes/config.php';
$page = 'dentists';
$title = 'Dentists | AHS Dental Clinic';
$description = 'Meet the AHS Dental Clinic clinicians in Portland: general, orthodontic, pediatric, and restorative specialists.';
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$crumbs = '<a href="index.php">Home</a> / Dentists';
$hero_kicker = 'The team';
$hero_title = 'Clinicians who stay for the whole conversation.';
$hero_lede = 'You will not be handed off mid-sentence. Each dentist owns their cases and introduces a specialist only when it genuinely helps.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container" style="display:grid;gap:1.4rem">
        <?php foreach ($dentists as $i => $doc): ?>
            <article class="split" style="background:#fff;border:1px solid var(--line);border-radius:24px;overflow:hidden;padding:0;align-items:stretch">
                <img src="<?= htmlspecialchars($doc['image']) ?>" alt="<?= htmlspecialchars($doc['name']) ?>" style="height:100%;min-height:280px;object-fit:cover;<?= $i % 2 ? 'order:2;' : '' ?>">
                <div style="padding:1.8rem">
                    <p class="eyebrow"><?= htmlspecialchars($doc['role']) ?></p>
                    <h2><?= htmlspecialchars($doc['name']) ?></h2>
                    <p><?= htmlspecialchars($doc['bio']) ?></p>
                    <p><strong>Focus:</strong> <?= htmlspecialchars($doc['focus']) ?><br>
                    <strong>Education:</strong> <?= htmlspecialchars($doc['education']) ?></p>
                    <a class="btn btn-terracotta" href="booking.php">Book with this dentist <?= icon('arrow') ?></a>
                </div>
            </article>
        <?php endforeach; ?>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
