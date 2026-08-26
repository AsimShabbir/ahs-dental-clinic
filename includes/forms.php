<?php
function aurelia_save_submission($type, $fields) {
    $dir = dirname(__DIR__) . '/forms/submissions';
    if (!is_dir($dir)) {
        mkdir($dir, 0775, true);
    }
    $payload = [
        'type' => $type,
        'created_at' => date('c'),
        'fields' => $fields,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ];
    $file = $dir . '/' . $type . '-' . date('Ymd-His') . '-' . bin2hex(random_bytes(3)) . '.json';
    file_put_contents($file, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
}

function aurelia_post($key) {
    return trim((string) ($_POST[$key] ?? ''));
}

function aurelia_handle_appointment() {
    if (($_POST['form'] ?? '') !== 'appointment') {
        return null;
    }
    $name = aurelia_post('name');
    $email = aurelia_post('email');
    $phone = aurelia_post('phone');
    $dentist = aurelia_post('dentist');
    $service = aurelia_post('service');
    $date = aurelia_post('date');
    $time = aurelia_post('time');
    $notes = aurelia_post('notes');

    if ($name === '' || $email === '' || $phone === '' || $service === '' || $date === '') {
        return ['ok' => false, 'message' => 'Please complete name, email, phone, service, and preferred date.'];
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ['ok' => false, 'message' => 'Please enter a valid email address.'];
    }

    aurelia_save_submission('appointment', compact('name', 'email', 'phone', 'dentist', 'service', 'date', 'time', 'notes'));
    return ['ok' => true, 'message' => 'Thank you, ' . $name . '. We received your request and will confirm by email or phone within one business day.'];
}

function aurelia_handle_contact() {
    if (($_POST['form'] ?? '') !== 'contact') {
        return null;
    }
    $name = aurelia_post('name');
    $email = aurelia_post('email');
    $subject = aurelia_post('subject');
    $message = aurelia_post('message');

    if ($name === '' || $email === '' || $message === '') {
        return ['ok' => false, 'message' => 'Please complete name, email, and message.'];
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ['ok' => false, 'message' => 'Please enter a valid email address.'];
    }

    aurelia_save_submission('contact', compact('name', 'email', 'subject', 'message'));
    return ['ok' => true, 'message' => 'Message received. A coordinator will reply shortly.'];
}
