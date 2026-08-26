<?php
require __DIR__ . '/includes/config.php';
require __DIR__ . '/includes/forms.php';
$page = 'booking';
$title = 'Book a visit | AHS Dental Clinic';
$description = 'Request an appointment at AHS Dental Clinic in Portland.';
$appt = aurelia_handle_appointment();
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$crumbs = '<a href="index.php">Home</a> / Booking';
$hero_kicker = 'Appointments';
$hero_title = 'Tell us when, and what you need.';
$hero_lede = 'This is a request, not a locked calendar. The desk will confirm by email or phone within one business day.';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container split">
        <div class="form-card">
            <?php if ($appt): ?>
                <div class="alert<?= $appt['ok'] ? '' : ' error' ?>"><?= htmlspecialchars($appt['message']) ?></div>
            <?php endif; ?>
            <form method="post" novalidate>
                <input type="hidden" name="form" value="appointment">
                <div class="form-grid">
                    <div class="field"><label for="name">Full name</label><input id="name" name="name" required></div>
                    <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" required></div>
                    <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required></div>
                    <div class="field">
                        <label for="dentist">Preferred dentist</label>
                        <select id="dentist" name="dentist">
                            <option>No preference</option>
                            <?php foreach ($dentists as $doc): ?>
                                <option><?= htmlspecialchars($doc['name']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="field">
                        <label for="service">Care needed</label>
                        <select id="service" name="service" required>
                            <option value="">Select…</option>
                            <?php foreach ($services as $svc): ?>
                                <option><?= htmlspecialchars($svc['title']) ?></option>
                            <?php endforeach; ?>
                            <option>Emergency / pain</option>
                            <option>Second opinion</option>
                        </select>
                    </div>
                    <div class="field"><label for="date">Preferred date</label><input id="date" name="date" type="date" required></div>
                    <div class="field">
                        <label for="time">Preferred time</label>
                        <select id="time" name="time">
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>First available</option>
                        </select>
                    </div>
                    <div class="field full"><label for="notes">Notes (anxiety, insurance, pregnancy, etc.)</label><textarea id="notes" name="notes"></textarea></div>
                </div>
                <button class="btn btn-terracotta" type="submit" style="margin-top:1rem">Request appointment <?= icon('arrow') ?></button>
                <p class="form-note">Demo mode saves a JSON file in forms/submissions. Connect mail() or an API for live clinics.</p>
            </form>
        </div>
        <div>
            <div class="info-stack">
                <div class="info-tile"><?= icon('clock') ?><div><strong>Hours</strong><p style="margin:0"><?= htmlspecialchars($site['hours']) ?></p></div></div>
                <div class="info-tile"><?= icon('phone') ?><div><strong>Prefer to call?</strong><p style="margin:0"><a href="<?= htmlspecialchars($site['phone_href']) ?>"><?= htmlspecialchars($site['phone']) ?></a></p></div></div>
                <div class="info-tile"><?= icon('pin') ?><div><strong>Studio</strong><p style="margin:0"><?= htmlspecialchars($site['address']) ?><br><?= htmlspecialchars($site['city']) ?></p></div></div>
            </div>
            <table class="hours-table" style="margin-top:1.6rem">
                <tr><td>Monday – Thursday</td><td>8:00 – 6:00</td></tr>
                <tr><td>Friday</td><td>8:00 – 4:00</td></tr>
                <tr><td>Saturday</td><td>9:00 – 2:00</td></tr>
                <tr><td>Sunday</td><td>Closed</td></tr>
            </table>
        </div>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
