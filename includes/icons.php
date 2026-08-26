<?php
function icon($name, $class = 'icon') {
    $icons = [
        'tooth' => '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 2.2c-4.8 0-8.4 3.4-9 8.1-.5 4.3.7 8.2 2.4 12.2.5 1.2.9 2.6.8 3.9-.1 1.5 1 2.6 2.3 2.5 1.2-.1 2-1.3 2.1-2.5.2-1.7.5-3.2 1.2-4 .4-.4.9-.4 1.3 0 .7.8 1 2.3 1.2 4 .1 1.2.9 2.4 2.1 2.5 1.3.1 2.4-1 2.3-2.5-.1-1.3.3-2.7.8-3.9 1.7-4 2.9-7.9 2.4-12.2-.6-4.7-4.2-8.1-9-8.1z"/></svg>',
        'sparkle' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l1.2 5.2L18 9.5l-4.8 1.3L12 16l-1.2-5.2L6 9.5l4.8-1.3L12 3z"/><path d="M18.5 15l.6 2.4L21.5 18l-2.4.6L18.5 21l-.6-2.4L15.5 18l2.4-.6.6-2.4z"/></svg>',
        'align' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 4v16M12 7v10M17 5v14"/><path d="M5 8h4M10 10h4M15 7h4"/></svg>',
        'child' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.2"/><path d="M6.5 19c.8-3.2 2.8-5 5.5-5s4.7 1.8 5.5 5"/><path d="M16.5 6.2c.8-.8 2.1-.9 3-.2M7.5 6.2c-.8-.8-2.1-.9-3-.2"/></svg>',
        'shield' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3.5l7 2.4v6.3c0 4.2-2.8 7.2-7 8.8-4.2-1.6-7-4.6-7-8.8V5.9L12 3.5z"/><path d="M9 12.2l2 2 4-4.4"/></svg>',
        'restore' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4.5 12A7.5 7.5 0 1 0 12 4.5"/><path d="M4.5 5.5v5h5"/></svg>',
        'phone' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7.2 3.8h2.6l1.2 3-1.8 1.1a12.6 12.6 0 0 0 5.7 5.7l1.1-1.8 3 1.2v2.6c0 .9-.7 1.7-1.6 1.8-7.2.7-13.3-5.4-12.6-12.6.1-.9.9-1.6 1.8-1.6z"/></svg>',
        'pin' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.2"/></svg>',
        'clock' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.2"/><path d="M12 7.8V12l3 2"/></svg>',
        'mail' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/></svg>',
        'arrow' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
        'check' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12.5l4.2 4.2L19 7.5"/></svg>',
        'play' => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 7.2v9.6L17.2 12 9 7.2z"/></svg>',
        'quote' => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.2 17.5H4.8c.2-2.4.9-4.3 2.1-5.7 1.2-1.5 2.4-2.4 3.6-2.7l.6 2.1c-1.5.4-2.5 1.3-3 2.6h2.1v3.7zm9 0h-5.4c.2-2.4.9-4.3 2.1-5.7 1.2-1.5 2.4-2.4 3.6-2.7l.6 2.1c-1.5.4-2.5 1.3-3 2.6h2.1v3.7z"/></svg>',
        'star' => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.6l2.3 5.4 5.8.5-4.4 3.8 1.3 5.7L12 16.4 6.9 19l1.3-5.7L3.8 9.5l5.8-.5L12 3.6z"/></svg>',
        'menu' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M4 9h16M4 15h11"/></svg>',
        'close' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 6l12 12M18 6L6 18"/></svg>',
        'chevron' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 9l6 6 6-6"/></svg>',
        'chevron-up' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 15l6-6 6 6"/></svg>',
    ];
    return '<span class="' . htmlspecialchars($class) . '" aria-hidden="true">' . ($icons[$name] ?? '') . '</span>';
}
?>
