<?php
require __DIR__ . '/includes/config.php';

$articles = [
    'how-often-should-you-really-visit' => [
        'title' => 'How often should you really visit the dentist?',
        'date' => 'August 12, 2026',
        'author' => 'Dr. Maya Ellison',
        'image' => 'assets/img/blog-1.jpg',
        'body' => [
            'Six months is a useful default for many people. It is not a moral law. Gums that bleed, a dry mouth from medication, a heavy sweet habit, or a history of rapid decay all argue for a tighter recall. Rock-solid hygiene and low risk can stretch a little — with a hygienist who has actually looked.',
            'At Aurelia we set the next visit at the end of this one, out loud, with the reason attached. If we say four months, it is because the tissue asked for it, not because the software likes round numbers.',
            'Bring your questions. The most useful visits are the ones where someone admits they have not flossed, and we design around that honesty instead of pretending.',
        ],
    ],
    'whitening-without-the-wince' => [
        'title' => 'Whitening without the wince',
        'date' => 'July 28, 2026',
        'author' => 'Dr. Jonah Park',
        'image' => 'assets/img/blog-2.jpg',
        'body' => [
            'Sensitivity is why trays end up in a drawer. High-strength gel on dehydrated teeth is a recipe for a weekend of ice-water dread.',
            'We prefer a slower protocol: desensitizing toothpaste two weeks prior, lower-concentration gel, and shorter wear if your teeth complain. In-office light shows look dramatic. They are rarely kinder than a well-made custom tray.',
            'Existing crowns and fillings will not bleach. If those edges will bother you, we talk about that before you spend a dollar on peroxide.',
        ],
    ],
    'first-visit-for-a-nervous-child' => [
        'title' => 'A first visit for a nervous child',
        'date' => 'June 9, 2026',
        'author' => 'Dr. Priya Nair',
        'image' => 'assets/img/blog-3.jpg',
        'body' => [
            'Do not promise there will be no tools. Promise we will go slow, and that they can say stop. Children remember broken promises longer than they remember a mirror.',
            'Visit one at Aurelia is often a ride in the chair, a count of teeth, and a prize. If a cavity is waiting, we still may not treat it that day. Trust is the filling that has to set first.',
            'Parents: skip the “it won’t hurt” speech in the lobby. Narrate what you see. Let us do the rest.',
        ],
    ],
];

$slug = $_GET['slug'] ?? 'how-often-should-you-really-visit';
$article = $articles[$slug] ?? $articles['how-often-should-you-really-visit'];
$page = 'blog';
$title = $article['title'] . ' | AHS Dental Clinic';
$description = $article['body'][0];
require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/header.php';
$crumbs = '<a href="index.php">Home</a> / <a href="blog.php">Journal</a> / Article';
$hero_kicker = $article['date'] . ' · ' . $article['author'];
$hero_title = $article['title'];
$hero_lede = '';
require __DIR__ . '/includes/page-hero.php';
?>
<section>
    <div class="container prose">
        <img class="cover-img" src="<?= htmlspecialchars($article['image']) ?>" alt="">
        <?php foreach ($article['body'] as $p): ?>
            <p><?= htmlspecialchars($p) ?></p>
        <?php endforeach; ?>
        <p><a class="btn btn-outline" href="blog.php">Back to journal</a> <a class="btn btn-terracotta" href="booking.php">Book a visit</a></p>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
