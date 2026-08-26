<?php
if (!isset($page)) $page = '';
if (!isset($title)) $title = $site['name'];
if (!isset($description)) $description = 'AHS Dental Clinic offers general, cosmetic, orthodontic, pediatric, and restorative care.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($title) ?></title>
    <meta name="description" content="<?= htmlspecialchars($description) ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="<?= ($page ?? '') === 'home' ? 'is-home' : 'is-inner' ?>">
<a class="skip-link" href="#main">Skip to content</a>
