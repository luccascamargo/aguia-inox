<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/empresa', function () {
    return Inertia::render('empresa');
})->name('empresa');

Route::get('/produtos/{slug?}', function ($slug = null) {
    return Inertia::render('produtos', ['slug' => $slug]);
})->name('produtos');

Route::get('/news/{slug?}', function ($slug = null) {
    return Inertia::render('news', ['slug' => $slug]);
})->name('news');

Route::get('/contato', function () {
    return Inertia::render('contato');
})->name('contato');

Route::get('/trabalhe-conosco', function () {
    return Inertia::render('trabalhe-conosco');
})->name('trabalhe-conosco');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
