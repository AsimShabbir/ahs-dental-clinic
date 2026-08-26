<?php
require __DIR__ . '/includes/config.php';
$page = 'faq';
$title = 'FAQ | AHS Dental Clinic';
$description = 'Common questions about visits, fees, insurance, and anxiety care at AHS Dental Clinic.';
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$faqs = [
    ['Do you take insurance?', 'We are in-network with several major PPO plans and will always file out-of-network claims when you prefer to stay with us. You receive a written estimate before elective work. Call the desk with your plan name and we will check benefits before the visit.'],
    ['How long is a new-patient exam?', 'Plan on forty minutes: conversation, exam, images if needed, and a plain-language plan. We do not compress that into a hygiene slot.'],
    ['I am anxious. Can you help?', 'Yes. Tell us when you book. We offer longer appointments, break signals, nitrous when appropriate, and a first visit that can be a tour only. Nobody is scolded for needing time.'],
    ['Do you see children?', 'Dr. Nair’s kids’ studio is for first visits through teens. Siblings can often be scheduled the same morning.'],
    ['What if I am in pain today?', 'Call the front desk. We hold same-day emergency space most weekdays. If we are full, we will still advise you on what cannot wait.'],
    ['Do you offer aligners?', 'Dr. Park plans clear aligners and, when they are a poor fit, will say so. Not every crowding case belongs in plastic.'],
    ['Is parking available?', 'Street parking on Harbor Lane and a small lot behind the building. Transit: the streetcar stop is two blocks south.'],
    ['How do I request records?', 'Email hello@aureliadental.com from the address on file. We send digital x-rays within two business days.'],
];
$crumbs = '<a href="index.php">Home</a> / FAQ';
$hero_kicker = 'Questions';
$hero_title = 'The things people actually ask.';
$hero_lede = 'If your question is not here, the desk would rather hear it than guess.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container faq-list">
        <?php foreach ($faqs as $i => $faq): ?>
            <div class="faq-item<?= $i === 0 ? ' is-open' : '' ?>">
                <button type="button"><?= htmlspecialchars($faq[0]) ?> <?= icon('chevron') ?></button>
                <div class="faq-body"><?= htmlspecialchars($faq[1]) ?></div>
            </div>
        <?php endforeach; ?>
        <p style="margin-top:1.5rem"><a class="btn btn-terracotta" href="contact.php">Ask something else <?= icon('arrow') ?></a></p>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
