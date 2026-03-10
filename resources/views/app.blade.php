<!DOCTYPE html>
<html lang="en" class="light scroll-smooth" dir="ltr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
    <meta content="ProTask - Teamwork Project management tools with time tracking" name="description" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- PWA -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#6366f1" />
    <meta name="mobile-web-app-capable" content="yes" />

    <!-- iOS PWA -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="ProTask" />
    <link rel="apple-touch-icon" href="/favicon.png" />

    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="shortcut" href="/favicon.png">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">

    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>
<body class="font-inter leading-none antialiased bg-gray-50 dark:bg-gray-800">
    @inertia
</body>
</html>
