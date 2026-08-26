</main>
<footer class="site-footer">
    <div class="footer-cta">
        <div class="container footer-cta-inner">
            <div>
                <p class="eyebrow light">Ready when you are</p>
                <h2>Reserve a quieter hour in the chair.</h2>
            </div>
            <a class="btn btn-accent" href="booking.php">Book Appointment<?= icon('arrow') ?></a>
        </div>
    </div>
    <div class="footer-main">
        <div class="container footer-grid">
            <div class="footer-brand">
                <a class="logo light" href="index.php" aria-label="<?= htmlspecialchars($site['name']) ?> home">
                    <img src="assets/img/logo.png" alt="<?= htmlspecialchars($site['name']) ?>">
                </a>
                <p>A Portland clinic for unhurried exams, considered cosmetic work, and dentistry that still feels human.</p>
                <div class="footer-social">
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="Google">G</a>
                </div>
            </div>
            <div>
                <h3>Visit</h3>
                <p><?= htmlspecialchars($site['address']) ?><br><?= htmlspecialchars($site['city']) ?></p>
                <p><?= htmlspecialchars($site['hours']) ?></p>
                <p><a href="<?= htmlspecialchars($site['phone_href']) ?>"><?= htmlspecialchars($site['phone']) ?></a><br>
                <a href="mailto:<?= htmlspecialchars($site['email']) ?>"><?= htmlspecialchars($site['email']) ?></a></p>
            </div>
            <div>
                <h3>Care</h3>
                <ul>
                    <?php foreach ($services as $svc): ?>
                        <li><a href="<?= htmlspecialchars($svc['file']) ?>"><?= htmlspecialchars($svc['title']) ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div>
                <h3>Clinic</h3>
                <ul>
                    <li><a href="about.php">Our story</a></li>
                    <li><a href="dentists.php">Dentists</a></li>
                    <li><a href="gallery.php">Gallery</a></li>
                    <li><a href="faq.php">FAQ</a></li>
                    <li><a href="testimonials.php">Reviews</a></li>
                    <li><a href="blog.php">Journal</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-base">
        <div class="container footer-base-inner">
            <p>&copy; <?= date('Y') ?> AHS Dental Clinic. All rights reserved.</p>
            <p></p>
        </div>
    </div>
</footer>
<script src="assets/js/main.js"></script>
</body>
</html>
