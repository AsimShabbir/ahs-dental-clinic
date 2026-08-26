<?php
require __DIR__ . '/includes/config.php';
$page = 'about';
$title = 'About | AHS Dental Clinic';
$description = 'The story of AHS Dental Clinic, a Portland clinic built for unhurried, specialist-led care.';
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$crumbs = '<a href="index.php">Home</a> / About';
$hero_kicker = 'Our story';
$hero_title = 'A studio for teeth, not a corridor of chairs.';
$hero_lede = 'AHS began when Dr. Maya Ellison left hospital dentistry to build a practice that could still hear a second question. The rooms are quieter. The visits are longer. The plans are written down.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container about-grid">
        <div class="about-photos">
            <img src="assets/img/consult.jpg" alt="Quiet consultation room">
            <img src="assets/img/hero.jpg" alt="Treatment suite">
            <img src="assets/img/clinic.jpg" alt="Clinic lounge">
        </div>
        <div class="prose">
            <h2>What we believe</h2>
            <p>Dentistry gets a reputation for rushing because many clinics are built around throughput. We staff and schedule the other way: fewer chairs, more time, specialists who stay in the conversation instead of handing you to a coordinator with a clipboard.</p>
            <p>You will still find digital scanners, same-day crowns when they are appropriate, and a sterilization bay you can actually see. Technology is here to shorten discomfort, not to upsell a tray of aligners you do not need.</p>
            <ul class="checklist">
                <li><?= icon('check') ?> Independent practice — no private-equity quota on production</li>
                <li><?= icon('check') ?> Fees in writing before any elective work</li>
                <li><?= icon('check') ?> Referrals when another clinician is kinder to your case</li>
            </ul>
        </div>
    </div>
</section>
<section style="padding-top:0">
    <div class="container">
        <div class="section-head">
            <div>
                <p class="eyebrow">Along the way</p>
                <h2>A short timeline.</h2>
            </div>
        </div>
        <div class="process">
            <div class="process-item"><h3>2014</h3><p>Maya completes a hospital residency and keeps a running list of what she would change about “efficient” clinics.</p></div>
            <div class="process-item"><h3>2019</h3><p>Harbor Lane studio opens with two chairs, one hygienist, and Saturday mornings for families.</p></div>
            <div class="process-item"><h3>2022</h3><p>Jonah and Priya join. Orthodontics and a true kids’ studio mean we stop sending those patients across town.</p></div>
            <div class="process-item"><h3>Today</h3><p>Four clinicians, a sterilization lead, and a front desk that still answers the phone like a person.</p></div>
        </div>
    </div>
</section>
<section class="band">
    <div class="container why-grid">
        <div>
            <p class="eyebrow light">The rooms</p>
            <h2>Designed to lower shoulders before the exam starts.</h2>
            <p>Natural light in the lounge, wool instead of vinyl where we can, and operatories that do not face each other. It is not spa theater. It is acoustics and privacy.</p>
        </div>
        <img src="assets/img/clinic.jpg" alt="Aurelia lounge" style="border-radius:24px;height:320px;width:100%;object-fit:cover">
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
