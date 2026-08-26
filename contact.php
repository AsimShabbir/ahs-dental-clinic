<?php
require __DIR__ . '/includes/config.php';
require __DIR__ . '/includes/forms.php';
$page = 'contact';
$title = 'Contact | AHS Dental Clinic';
$description = 'Contact AHS Dental Clinic on Harbor Lane in Portland.';
$contact = aurelia_handle_contact();
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$crumbs = '<a href="index.php">Home</a> / Contact';
$hero_kicker = 'Front desk';
$hero_title = 'Write, call, or walk in from Harbor Lane.';
$hero_lede = 'The phone is answered by people who work here. Messages left after hours are returned the next morning we are open.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container split">
        <div>
            <div class="info-stack">
                <div class="info-tile"><?= icon('pin') ?><div><strong>Address</strong><p style="margin:0"><?= htmlspecialchars($site['address']) ?><br><?= htmlspecialchars($site['city']) ?></p></div></div>
                <div class="info-tile"><?= icon('phone') ?><div><strong>Phone</strong><p style="margin:0"><a href="<?= htmlspecialchars($site['phone_href']) ?>"><?= htmlspecialchars($site['phone']) ?></a></p></div></div>
                <div class="info-tile"><?= icon('mail') ?><div><strong>Email</strong><p style="margin:0"><a href="mailto:<?= htmlspecialchars($site['email']) ?>"><?= htmlspecialchars($site['email']) ?></a></p></div></div>
                <div class="info-tile"><?= icon('clock') ?><div><strong>Hours</strong><p style="margin:0"><?= htmlspecialchars($site['hours']) ?></p></div></div>
            </div>
            <div class="map-wrap" style="margin-top:1.2rem">
                <iframe title="Map of Portland clinic area" src="<?= htmlspecialchars($site['map_embed']) ?>" loading="lazy"></iframe>
            </div>
        </div>
        <div class="form-card">
            <?php if ($contact): ?>
                <div class="alert<?= $contact['ok'] ? '' : ' error' ?>"><?= htmlspecialchars($contact['message']) ?></div>
            <?php endif; ?>
            <form method="post" novalidate>
                <input type="hidden" name="form" value="contact">
                <div class="form-grid">
                    <div class="field"><label for="name">Name</label><input id="name" name="name" required></div>
                    <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required></div>
                    <div class="field full"><label for="subject">Subject</label><input id="subject" name="subject" placeholder="Records, insurance, feedback…"></div>
                    <div class="field full"><label for="message">Message</label><textarea id="message" name="message" required></textarea></div>
                </div>
                <button class="btn btn-terracotta" type="submit" style="margin-top:1rem">Send message <?= icon('arrow') ?></button>
            </form>
        </div>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
